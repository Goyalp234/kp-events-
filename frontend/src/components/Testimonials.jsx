import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section id="testimonials" data-testid="testimonials-section" className="section-pad bg-gradient-to-b from-[#0B132B] to-[#070d1f] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#6C63FF]/10 blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px] -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-16">
          <span className="section-overline">Kind Words</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Loved by our <span className="italic gold-gradient-text">clients</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              data-testid={`testimonial-${idx}`}
              className="glass border-[#D4AF37]/20 rounded-3xl p-8 md:p-14 text-center relative"
            >
              <Quote className="absolute top-8 left-8 text-[#D4AF37]/20" size={64} />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl text-white leading-snug italic mb-8">
                "{t.text}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]/50"
                />
                <h4 className="font-display text-xl text-white mt-3">{t.name}</h4>
                <span className="text-xs tracking-widest uppercase text-[#D4AF37] mt-1">{t.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              data-testid="testimonial-prev"
              className="w-11 h-11 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 px-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  data-testid={`testimonial-dot-${i}`}
                  className={`h-[3px] rounded-full transition-all ${idx === i ? "w-10 bg-[#D4AF37]" : "w-4 bg-white/20"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((p) => (p + 1) % TESTIMONIALS.length)}
              data-testid="testimonial-next"
              className="w-11 h-11 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
