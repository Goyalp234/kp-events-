import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../lib/data";

export default function Services({ onBook }) {
  return (
    <section id="services" data-testid="services-section" className="relative section-pad bg-gradient-to-b from-[#0B132B] via-[#0a1129] to-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Premium event services <span className="italic gold-gradient-text">curated for you</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                data-testid={`service-card-${i}`}
                className="premium-card group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl glass flex items-center justify-center border border-[#D4AF37]/40">
                    <Icon size={20} className="text-[#D4AF37]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.points.slice(0, 4).map((p, j) => (
                      <li key={j} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onBook}
                    data-testid={`service-cta-${i}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:gap-3 transition-all"
                  >
                    Read More <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
