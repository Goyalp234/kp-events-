import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { HERO_SLIDES } from "../lib/data";

export default function Hero({ onBook }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = HERO_SLIDES[idx];

  return (
    <section id="home" data-testid="hero-section" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B132B]/70 via-[#0B132B]/60 to-[#0B132B]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,_rgba(108,99,255,0.15),_transparent_60%)]" />

      <div className="float-shape" style={{ background: "#6C63FF", width: 300, height: 300, top: "15%", left: "-5%" }} />
      <div className="float-shape" style={{ background: "#D4AF37", width: 250, height: 250, bottom: "10%", right: "-5%", animationDelay: "2s" }} />

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8"
            >
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                Premium Event Management
              </span>
            </motion.div>

            <h1
              data-testid="hero-title"
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight text-white mb-6"
            >
              {slide.title.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                  className="inline-block mr-3"
                >
                  {w === "Dreams" || w === "Unforgettable" || w === "Luxury" || w === "Crafted" || w === "Inspire" ? (
                    <span className="italic gold-gradient-text font-display">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
              data-testid="hero-subtitle"
            >
              {slide.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={onBook} data-testid="hero-book-now-btn" className="btn-gold">
                Book Now
              </button>
              <a href="#services" data-testid="hero-explore-btn" className="btn-outline-gold">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              data-testid={`hero-slide-dot-${i}`}
              onClick={() => setIdx(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === i ? "w-12 bg-[#D4AF37]" : "w-6 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <a href="#about" data-testid="scroll-indicator" className="absolute bottom-10 right-10 z-30 hidden md:flex flex-col items-center gap-2 text-[#D4AF37]">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="scroll-indicator" />
        </a>
      </div>
    </section>
  );
}
