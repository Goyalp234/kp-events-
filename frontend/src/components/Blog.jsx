import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BLOG } from "../lib/data";

export default function Blog() {
  return (
    <section data-testid="blog-section" className="section-pad bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Journal</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Stories, ideas & <span className="italic gold-gradient-text">inspiration</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG.map((b, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`blog-card-${i}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/40 transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] tracking-wider mb-3">
                  <Calendar size={12} />
                  {b.date}
                </div>
                <h3 className="font-display text-xl text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{b.excerpt}</p>
                <button
                  data-testid={`blog-read-more-${i}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:gap-3 transition-all"
                >
                  Read More <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
