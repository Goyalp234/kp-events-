from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="K&P Events API")
api_router = APIRouter(prefix="/api")


# ===================== Models =====================
class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: EmailStr
    event_type: str
    guests: Optional[str] = None
    budget: Optional[str] = None
    event_date: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BookingCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    event_type: str
    guests: Optional[str] = None
    budget: Optional[str] = None
    event_date: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = None


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    event_type: Optional[str] = None
    event_date: Optional[str] = None
    budget: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    event_type: Optional[str] = None
    event_date: Optional[str] = None
    budget: Optional[str] = None
    message: str


class Newsletter(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterCreate(BaseModel):
    email: EmailStr


# ===================== Routes =====================
@api_router.get("/")
async def root():
    return {"message": "K&P Events API is running", "version": "1.0.0"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


# --- Bookings ---
@api_router.post("/bookings", response_model=Booking)
async def create_booking(payload: BookingCreate):
    try:
        booking = Booking(**payload.model_dump())
        doc = booking.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.bookings.insert_one(doc)
        return booking
    except Exception as e:
        logger.error(f"Booking creation failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to create booking")


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings():
    items = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


# --- Contact ---
@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    try:
        contact = Contact(**payload.model_dump())
        doc = contact.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contacts.insert_one(doc)
        return contact
    except Exception as e:
        logger.error(f"Contact creation failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact")


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


# --- Newsletter ---
@api_router.post("/newsletter", response_model=Newsletter)
async def subscribe_newsletter(payload: NewsletterCreate):
    try:
        existing = await db.newsletter.find_one({"email": payload.email}, {"_id": 0})
        if existing:
            if isinstance(existing.get('created_at'), str):
                existing['created_at'] = datetime.fromisoformat(existing['created_at'])
            return Newsletter(**existing)
        sub = Newsletter(email=payload.email)
        doc = sub.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.newsletter.insert_one(doc)
        return sub
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Newsletter subscription failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to subscribe")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
