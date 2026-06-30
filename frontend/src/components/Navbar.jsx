import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#featured" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-testid="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 glass border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#home" data-testid="nav-logo" className="flex items-center gap-2 group">
            <span className="font-display text-3xl md:text-4xl text-white">
              K<span className="gold-text mx-0.5">&</span>P
            </span>
            <span className="hidden sm:flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] border-l border-[#D4AF37]/30 pl-2 ml-1">
              <Sparkles size={10} />
              Events
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-sm font-medium text-gray-200 hover:text-[#D4AF37] transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-book-event-btn"
              onClick={onBook}
              className="hidden md:inline-flex btn-gold !py-3 !px-6 text-sm"
            >
              Book Event
            </button>
            <button
              data-testid="mobile-menu-btn"
              className="lg:hidden text-white p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050914]/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <span className="font-display text-3xl text-white">
                K<span className="gold-text">&</span>P
              </span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-6 p-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  className="font-display text-3xl text-white hover:text-[#D4AF37] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <button
                data-testid="mobile-book-event-btn"
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
                className="btn-gold mt-6 self-start"
              >
                Book Event
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
