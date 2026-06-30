// Centralized data for K&P Events website
import {
  Heart, PartyPopper, Building2, Briefcase, Baby, Gem,
  Diamond, Sparkles, GraduationCap, Mic2
} from "lucide-react";

export const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1675247488725-22d1b78e75db?w=1920&q=80",
    title: "We Turn Your Dreams Into Unforgettable Events",
    sub: "We organize premium weddings, birthday celebrations, corporate events and business conferences with perfection.",
  },
  {
    img: "https://images.unsplash.com/photo-1740120424442-ccd013ec9581?w=1920&q=80",
    title: "Luxury Weddings, Crafted To Perfection",
    sub: "Destination weddings, royal stages, world-class photography — every detail tailored to your love story.",
  },
  {
    img: "https://images.unsplash.com/photo-1764255510960-deee566a91f0?w=1920&q=80",
    title: "Corporate Events That Inspire",
    sub: "From product launches to global conferences — we deliver experiences that elevate your brand.",
  },
];

export const SERVICES = [
  {
    icon: Heart,
    title: "Wedding Planning",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    desc: "Destination weddings, stage decor, catering, photography, bridal entry, DJ & floral styling.",
    points: ["Destination Wedding", "Stage Decoration", "Catering", "Photography", "Bridal Entry", "DJ & Music", "Floral Decoration"],
  },
  {
    icon: PartyPopper,
    title: "Birthday Party",
    img: "https://images.unsplash.com/photo-1544155892-b2b6c64204fc?w=900&q=80",
    desc: "Theme decoration, balloon styling, kids entertainment, cake arrangement and photography.",
    points: ["Theme Decoration", "Balloon Decoration", "Kids Entertainment", "Cake Arrangement", "Photography"],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
    desc: "Product launches, annual meetings, conferences, award ceremonies and business networking.",
    points: ["Product Launch", "Annual Meetings", "Conferences", "Award Ceremonies", "Business Networking"],
  },
  {
    icon: Briefcase,
    title: "Business Parties",
    img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=900&q=80",
    desc: "Office celebrations, anniversaries, team building, corporate dinners & client meetups.",
    points: ["Office Celebrations", "Company Anniversary", "Team Building", "Corporate Dinner", "Client Meetups"],
  },
  {
    icon: Baby,
    title: "Baby Shower",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
    desc: "Elegant baby shower setups with custom themes, soft pastel décor and curated experiences.",
    points: ["Theme Setup", "Floral Decor", "Custom Cakes", "Photography"],
  },
  {
    icon: Gem,
    title: "Anniversary",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80",
    desc: "Celebrate your milestones with elegant venues, romantic décor and curated dining.",
    points: ["Romantic Decor", "Dinner Setup", "Live Music", "Photo & Video"],
  },
  {
    icon: Diamond,
    title: "Engagement",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80",
    desc: "Make your engagement an unforgettable evening with luxurious staging and styling.",
    points: ["Stage Design", "Floral Setup", "Catering", "Photography"],
  },
  {
    icon: Sparkles,
    title: "Private Parties",
    img: "https://images.unsplash.com/photo-1561065270-5c2af775b542?w=900&q=80",
    desc: "Intimate, premium private parties with bespoke décor, music and fine dining.",
    points: ["Bespoke Decor", "Bartenders", "DJ", "Premium Catering"],
  },
  {
    icon: GraduationCap,
    title: "College Events",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80",
    desc: "Cultural fests, freshers, farewells and large-scale college productions.",
    points: ["Stage & Sound", "Lighting", "Crowd Management", "Live Acts"],
  },
  {
    icon: Mic2,
    title: "Concert Management",
    img: "https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?w=900&q=80",
    desc: "Large-scale concert production with sound, lighting, artists & end-to-end execution.",
    points: ["Artist Booking", "Sound Engineering", "Stage Production", "Crowd Safety"],
  },
];

export const FEATURED_EVENTS = [
  {
    title: "Royal Weddings",
    img: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=1400&q=80",
    desc: "Bespoke destination weddings, breath-taking stages and storytelling photography crafted for your love story.",
    features: ["Destination weddings", "Mandap & stage design", "Catering & florals", "Cinematography"],
    price: "₹1,50,000+",
  },
  {
    title: "Birthday Celebrations",
    img: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=1400&q=80",
    desc: "Themed birthday parties with imaginative décor, live entertainment and bespoke cakes.",
    features: ["Themed décor", "Kids entertainment", "Custom cakes", "Photography"],
    price: "₹20,000+",
  },
  {
    title: "Business Parties",
    img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=1400&q=80",
    desc: "Polished, premium business gatherings — anniversaries, dinners and networking soirées.",
    features: ["Venue styling", "Premium catering", "Live music", "Branding setup"],
    price: "₹50,000+",
  },
  {
    title: "Corporate Conferences",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80",
    desc: "Large-scale conferences, summits & product launches with seamless production.",
    features: ["Stage production", "AV & lighting", "Branding", "Catering"],
    price: "₹75,000+",
  },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", cat: "weddings", title: "Royal Wedding Stage" },
  { src: "https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=1200&q=80", cat: "birthday", title: "Birthday Bash" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80", cat: "corporate", title: "Annual Summit" },
  { src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=1200&q=80", cat: "business", title: "Networking Night" },
  { src: "https://images.unsplash.com/photo-1740120424442-ccd013ec9581?w=1200&q=80", cat: "weddings", title: "Floral Mandap" },
  { src: "https://images.unsplash.com/photo-1544155892-b2b6c64204fc?w=1200&q=80", cat: "birthday", title: "Cake Cutting" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80", cat: "corporate", title: "Product Launch" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80", cat: "business", title: "Gala Dinner" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80", cat: "weddings", title: "Sunset Vows" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80", cat: "birthday", title: "Baby Shower" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80", cat: "corporate", title: "Award Night" },
  { src: "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=1200&q=80", cat: "business", title: "Office Party" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80", cat: "weddings", title: "Engagement" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80", cat: "birthday", title: "Theme Décor" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80", cat: "corporate", title: "Keynote Stage" },
  { src: "https://images.unsplash.com/photo-1561065270-5c2af775b542?w=1200&q=80", cat: "business", title: "Private Soirée" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80", cat: "weddings", title: "Floral Aisle" },
  { src: "https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?w=1200&q=80", cat: "corporate", title: "Concert Stage" },
  { src: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=1200&q=80", cat: "birthday", title: "Balloon Décor" },
  { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80", cat: "business", title: "Cocktail Hour" },
];

export const PACKAGES = [
  {
    name: "Silver",
    price: "₹25,000",
    unit: "onwards",
    highlight: false,
    features: [
      "Basic Decoration",
      "Standard Photography",
      "Veg/Non-Veg Buffet",
      "DJ & Music",
      "Venue Assistance",
      "Up to 100 Guests",
      "Dedicated Manager",
    ],
  },
  {
    name: "Gold",
    price: "₹75,000",
    unit: "onwards",
    highlight: true,
    features: [
      "Premium Decoration",
      "HD Photo + Cinematic Video",
      "Multi-Cuisine Menu",
      "Live Band + DJ",
      "Venue Selection",
      "Up to 300 Guests",
      "Senior Event Manager",
    ],
  },
  {
    name: "Diamond",
    price: "₹1,50,000",
    unit: "onwards",
    highlight: false,
    features: [
      "Luxury Theme Décor",
      "Drone + Cinematic Coverage",
      "Curated Gourmet Menu",
      "Live Band + Performers",
      "Premium Venue Booking",
      "Up to 1000 Guests",
      "Wedding/Event Director",
    ],
  },
];

export const WHY_US = [
  { title: "Professional Team", icon: "users" },
  { title: "Affordable Pricing", icon: "tag" },
  { title: "24×7 Support", icon: "headphones" },
  { title: "Creative Designs", icon: "palette" },
  { title: "Premium Decoration", icon: "sparkles" },
  { title: "Quality Catering", icon: "utensils" },
  { title: "Experienced Staff", icon: "award" },
  { title: "On-Time Delivery", icon: "clock" },
  { title: "100% Satisfaction", icon: "heart" },
];

export const PROCESS = [
  { step: "01", title: "Consultation", desc: "We listen, understand your vision and budget, then craft a bespoke proposal." },
  { step: "02", title: "Planning", desc: "Detailed event plan, vendor selection, timelines and contingency mapping." },
  { step: "03", title: "Designing", desc: "Mood boards, 3D décor renders, menu tasting and walk-throughs." },
  { step: "04", title: "Execution", desc: "Flawless on-day production by our senior managers and crew." },
  { step: "05", title: "Celebration", desc: "You relax and celebrate. We capture the magic and handle every detail." },
];

export const TESTIMONIALS = [
  {
    name: "Priya & Aarav",
    role: "Wedding · Udaipur",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "K&P turned our dream wedding into a fairytale. Every floral, every light, every moment — flawless. Worth every rupee.",
  },
  {
    name: "Rohan Mehta",
    role: "CEO · Mehta Industries",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Our annual conference was the smoothest we have ever hosted. Professional, premium and deeply organised.",
  },
  {
    name: "Sneha Kapoor",
    role: "Birthday · Mumbai",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "They surprised us beyond expectations. My daughter's 5th birthday looked like a Disney production!",
  },
  {
    name: "Arjun Sharma",
    role: "Product Launch · Bangalore",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "Cinematic stage, perfect AV, branded touch on every detail. K&P delivered a launch event that media still talks about.",
  },
  {
    name: "Ananya Iyer",
    role: "Engagement · Goa",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    text: "Beachside engagement at sunset — felt straight out of a magazine. Their attention to detail is unreal.",
  },
  {
    name: "Vikram Singh",
    role: "Corporate Dinner · Delhi",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "Sophisticated, elegant and seamlessly executed. Our investors were thoroughly impressed.",
  },
];

export const STATS = [
  { num: 500, suffix: "+", label: "Events Delivered" },
  { num: 300, suffix: "+", label: "Happy Clients" },
  { num: 50, suffix: "+", label: "Professional Staff" },
  { num: 10, suffix: "+", label: "Years of Excellence" },
];

export const TEAM = [
  { name: "Kunal Verma", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Priya Sharma", role: "Head Wedding Planner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Aditya Rao", role: "Creative Event Designer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
  { name: "Neha Khanna", role: "Head of Photography", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
  { name: "Rahul Iyer", role: "Marketing Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
];

export const FAQS = [
  { q: "How early should I book my event?", a: "We recommend booking at least 3–6 months in advance for weddings and 30–45 days for smaller events. For peak season, the earlier the better." },
  { q: "How do payments work?", a: "We collect 30% as advance to block the date, 50% on planning sign-off, and 20% on event completion. Payments are via secure UPI / bank transfer." },
  { q: "What is your cancellation policy?", a: "Cancellations 30+ days before the event are refundable (minus admin fee). Within 15 days, 50% retained. Within 7 days, advance is non-refundable." },
  { q: "Do you handle décor and venue both?", a: "Yes. We are a full-service agency — venue scouting, décor design, catering, entertainment, photography and on-day production are all in-house." },
  { q: "Is photography included in packages?", a: "Yes. Every package includes professional photography. Gold and Diamond tiers include cinematic videography and drone coverage." },
  { q: "Do you travel for destination events?", a: "Absolutely. We have executed destination events across Udaipur, Goa, Jaipur, Bali, Phuket and Dubai. Travel and stay are billed separately." },
];

export const BLOG = [
  {
    title: "10 Wedding Décor Trends Defining 2026",
    date: "Dec 02, 2025",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
    excerpt: "From sustainable florals to immersive light installations — the trends transforming Indian weddings this season.",
  },
  {
    title: "How to Plan a Flawless Corporate Conference",
    date: "Nov 18, 2025",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
    excerpt: "A step-by-step guide to producing high-stakes conferences — from venue scouting to keynote execution.",
  },
  {
    title: "Birthday Themes Your Kids Will Love",
    date: "Oct 27, 2025",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
    excerpt: "Magical themes, custom cakes and entertainment ideas to make their day truly unforgettable.",
  },
];

export const EVENT_TYPES = [
  "Wedding", "Birthday Party", "Corporate Event", "Business Party",
  "Baby Shower", "Anniversary", "Engagement", "Private Party",
  "College Event", "Concert", "Other",
];

export const BUDGET_RANGES = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "₹15,00,000+",
];
