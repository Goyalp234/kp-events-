import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { EVENT_TYPES, BUDGET_RANGES } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", event_type: "", event_date: "", budget: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thank you! Our team will reach out within 24 hours.");
      setForm({ name: "", email: "", phone: "", event_type: "", event_date: "", budget: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="section-pad bg-[#070d1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Let's plan your <span className="italic gold-gradient-text">perfect event</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={submit}
            data-testid="contact-form"
            className="glass rounded-3xl p-8 md:p-10 border-[#D4AF37]/20"
          >
            <h3 className="font-display text-2xl text-white mb-6">Tell us about your event</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input data-testid="contact-name" className="luxury-input" placeholder="Your Name *" value={form.name} onChange={(e) => update("name", e.target.value)} required />
              <input data-testid="contact-email" type="email" className="luxury-input" placeholder="Email Address *" value={form.email} onChange={(e) => update("email", e.target.value)} required />
              <input data-testid="contact-phone" type="tel" className="luxury-input" placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              <select data-testid="contact-event-type" className="luxury-input" value={form.event_type} onChange={(e) => update("event_type", e.target.value)}>
                <option value="">Event Type</option>
                {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <input data-testid="contact-event-date" type="date" className="luxury-input" value={form.event_date} onChange={(e) => update("event_date", e.target.value)} />
              <select data-testid="contact-budget" className="luxury-input" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                <option value="">Budget Range</option>
                {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <textarea data-testid="contact-message" className="luxury-input mt-4" rows={5} placeholder="Tell us about your vision *" value={form.message} onChange={(e) => update("message", e.target.value)} required />
            <button data-testid="contact-submit" type="submit" disabled={loading} className="btn-gold mt-6 w-full justify-center disabled:opacity-60">
              {loading ? "Sending..." : <>Send Message <Send size={16} /></>}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/20 h-72">
              <iframe
                title="K&P Events Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8261%2C18.9220%2C72.8861%2C18.9820&amp;layer=mapnik"
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
              />
            </div>

            <div className="glass rounded-3xl p-8 border-[#D4AF37]/20 space-y-5">
              {[
                { icon: MapPin, label: "Studio Address", val: "K&P Events HQ, Bandra West, Mumbai 400050, India" },
                { icon: Phone, label: "Call Us", val: "+91 98XXX 12345" },
                { icon: Mail, label: "Email Us", val: "hello@kpevents.in" },
                { icon: Clock, label: "Working Hours", val: "Mon – Sat · 10 AM to 8 PM IST" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                    <c.icon size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#D4AF37]">{c.label}</p>
                    <p className="text-gray-200 mt-1 text-sm md:text-base">{c.val}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex gap-3">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    data-testid={`contact-social-${i}`}
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B132B] transition-all"
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
