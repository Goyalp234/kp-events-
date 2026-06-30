import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { EVENT_TYPES, BUDGET_RANGES } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const blank = {
  name: "", phone: "", email: "", event_type: "",
  guests: "", budget: "", event_date: "", location: "", message: "",
};

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState(blank);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.event_type) {
      toast.error("Please fill all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/bookings`, form);
      setSuccess(true);
      setForm(blank);
    } catch {
      toast.error("Could not submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-[#050914]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={reset}
          data-testid="booking-modal"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl my-8 rounded-3xl glass border-[#D4AF37]/30 overflow-hidden"
          >
            <button
              onClick={reset}
              data-testid="booking-close"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {success ? (
              <div className="p-10 md:p-14 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex w-20 h-20 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 items-center justify-center mb-6"
                >
                  <CheckCircle2 size={40} className="text-[#D4AF37]" />
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-3">Booking Confirmed!</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  Thank you for choosing K&P Events. Our senior planner will reach out within 24 hours to design your perfect event.
                </p>
                <button data-testid="booking-success-close" onClick={reset} className="btn-gold">
                  Continue Exploring
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                  <Sparkles size={16} />
                  <span className="text-xs tracking-[0.3em] uppercase font-bold">Book Your Event</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-2">
                  Let's create <span className="italic gold-gradient-text">magic</span> together
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Share a few details and our team will design a bespoke proposal.
                </p>

                <form onSubmit={submit} data-testid="booking-form" className="grid sm:grid-cols-2 gap-4">
                  <input data-testid="booking-name" className="luxury-input sm:col-span-2" placeholder="Full Name *" value={form.name} onChange={(e) => update("name", e.target.value)} required />
                  <input data-testid="booking-phone" type="tel" className="luxury-input" placeholder="Phone Number *" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
                  <input data-testid="booking-email" type="email" className="luxury-input" placeholder="Email Address *" value={form.email} onChange={(e) => update("email", e.target.value)} required />
                  <select data-testid="booking-event-type" className="luxury-input" value={form.event_type} onChange={(e) => update("event_type", e.target.value)} required>
                    <option value="">Event Type *</option>
                    {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <input data-testid="booking-guests" type="number" min="1" className="luxury-input" placeholder="Number of Guests" value={form.guests} onChange={(e) => update("guests", e.target.value)} />
                  <select data-testid="booking-budget" className="luxury-input" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                    <option value="">Budget Range</option>
                    {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <input data-testid="booking-date" type="date" className="luxury-input" value={form.event_date} onChange={(e) => update("event_date", e.target.value)} />
                  <input data-testid="booking-location" className="luxury-input sm:col-span-2" placeholder="Event Location (City)" value={form.location} onChange={(e) => update("location", e.target.value)} />
                  <textarea data-testid="booking-message" className="luxury-input sm:col-span-2" rows={3} placeholder="Tell us about your vision (optional)" value={form.message} onChange={(e) => update("message", e.target.value)} />

                  <button data-testid="booking-submit" type="submit" disabled={loading} className="btn-gold sm:col-span-2 justify-center disabled:opacity-60">
                    {loading ? "Submitting..." : "Submit Booking Request"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
