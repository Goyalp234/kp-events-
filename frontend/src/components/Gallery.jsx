import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../lib/data";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "birthday", label: "Birthday" },
  { key: "business", label: "Business" },
  { key: "corporate", label: "Corporate" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const items = GALLERY.filter((g) => filter === "all" || g.cat === filter);

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const next = (e) => {
    e?.stopPropagation();
    setLightbox((p) => (p + 1) % items.length);
  };
  const prev = (e) => {
    e?.stopPropagation();
    setLightbox((p) => (p - 1 + items.length) % items.length);
  };

  return (
    <section id="gallery" data-testid="gallery-section" className="section-pad bg-[#070d1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-overline">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            A glimpse into our <span className="italic gold-gradient-text">portfolio</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              data-testid={`gallery-filter-${f.key}`}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all border ${
                filter === f.key
                  ? "bg-[#D4AF37] text-[#0B132B] border-[#D4AF37]"
                  : "bg-transparent text-gray-300 border-white/15 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.button
                key={g.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => open(i)}
                data-testid={`gallery-item-${i}`}
                className="mb-4 w-full block break-inside-avoid relative group rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/40 transition-all"
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-widest uppercase text-[#D4AF37]">{g.cat}</span>
                    <h4 className="font-display text-lg text-white">{g.title}</h4>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={close}
            data-testid="lightbox-overlay"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white p-2"
              data-testid="lightbox-close"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <button
              onClick={prev}
              className="absolute left-6 text-white p-2"
              data-testid="lightbox-prev"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={items[lightbox].src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={items[lightbox].src}
              alt={items[lightbox].title}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={next}
              className="absolute right-6 text-white p-2"
              data-testid="lightbox-next"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
