import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { PACKAGES } from "../lib/data";

export default function Packages({ onBook }) {
  return (
    <section id="packages" data-testid="packages-section" className="section-pad bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Pricing Packages</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Choose the <span className="italic gold-gradient-text">perfect tier</span> for your event
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              data-testid={`package-card-${p.name.toLowerCase()}`}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                p.highlight
                  ? "bg-gradient-to-b from-[#1a1a3a] to-[#0B132B] border-2 border-[#D4AF37] md:scale-105 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
                  : "bg-white/[0.02] border border-white/10 hover:border-[#6C63FF]/50"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#0B132B] text-xs font-bold tracking-wider uppercase">
                  <Crown size={13} />
                  Most Popular
                </div>
              )}

              <h3 className={`font-display text-3xl ${p.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                {p.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Tailored for {p.name === "Silver" ? "intimate" : p.name === "Gold" ? "mid-scale premium" : "grand luxury"} events.
              </p>

              <div className="mt-7 mb-2">
                <span className="text-4xl md:text-5xl font-display gold-gradient-text">{p.price}</span>
                <span className="text-gray-400 ml-2 text-sm">{p.unit}</span>
              </div>

              <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-200">
                    <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.highlight ? "bg-[#D4AF37]" : "bg-[#6C63FF]/20"}`}>
                      <Check size={12} className={p.highlight ? "text-[#0B132B]" : "text-[#6C63FF]"} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onBook}
                data-testid={`package-book-${p.name.toLowerCase()}`}
                className={p.highlight ? "btn-gold w-full justify-center" : "btn-outline-gold w-full justify-center"}
              >
                Book {p.name} Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
