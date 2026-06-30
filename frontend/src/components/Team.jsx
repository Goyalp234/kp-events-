import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { TEAM } from "../lib/data";

export default function Team() {
  return (
    <section data-testid="team-section" className="section-pad bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Our Team</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            The <span className="italic gold-gradient-text">artists</span> behind every event
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`team-card-${i}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 translate-y-10 group-hover:translate-y-0">
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-3">
                    {[Instagram, Linkedin, Twitter].map((Icon, j) => (
                      <button
                        key={j}
                        data-testid={`team-${i}-social-${j}`}
                        className="w-9 h-9 rounded-full bg-[#D4AF37] text-[#0B132B] flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="Social link"
                      >
                        <Icon size={15} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-white">{m.name}</h3>
                <p className="text-xs tracking-widest uppercase text-[#D4AF37] mt-1">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
