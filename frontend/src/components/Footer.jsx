import { useState } from "react";
import axios from "axios";
import { Instagram, Facebook, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("Subscribed! Watch your inbox for premium event ideas.");
      setEmail("");
    } catch {
      toast.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="footer" className="bg-[#050914] pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-[20rem] md:text-[28rem] font-display text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
        K&P Events
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="font-display text-4xl text-white mb-4">
              K<span className="gold-text">&</span>P
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Creating Memories That Last Forever. Premium event management trusted by 300+ clients across India and overseas.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`footer-social-${i}`}
                  className="w-9 h-9 rounded-full border border-white/15 text-gray-300 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Packages", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {["Weddings", "Birthdays", "Corporate", "Business Parties", "Concerts", "Private Events"].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Premium event ideas & inspiration, monthly. No spam.</p>
            <form onSubmit={subscribe} data-testid="newsletter-form" className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="newsletter-input"
                placeholder="you@email.com"
                className="luxury-input !h-12 !pr-14"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="newsletter-submit"
                className="absolute right-1.5 top-1.5 h-9 w-9 rounded-lg bg-[#D4AF37] text-[#0B132B] flex items-center justify-center hover:bg-[#E8C765]"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2025 K&P Events. All rights reserved. Creating memories that last forever.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
