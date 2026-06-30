import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FEATURED_EVENTS } from "../lib/data";

export default function FeaturedEvents({ onBook }) {
  return (
    <section id="featured" data-testid="featured-section" className="section-pad bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Featured Events</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Signature <span className="italic gold-gradient-text">experiences</span> we deliver
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURED_EVENTS.map((e, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.15, duration: 0.7 }}
              data-testid={`featured-card-${i}`}
              className="relative rounded-3xl overflow-hidden group border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all"
            >
              <div className="relative h-[460px] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 image-overlay" />

                <div className="absolute top-5 right-5 px-4 py-2 rounded-full glass border-[#D4AF37]/40">
                  <span className="text-xs tracking-widest uppercase text-[#D4AF37] font-bold">Starting {e.price}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-3">{e.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-5 max-w-md">{e.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {e.features.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-gray-200 flex items-center gap-1.5"
                      >
                        <Check size={11} className="text-[#D4AF37]" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onBook}
                    data-testid={`featured-book-${i}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B132B] bg-[#D4AF37] hover:bg-[#E8C765] px-6 py-3 rounded-full transition-all"
                  >
                    Book Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
