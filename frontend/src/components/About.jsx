import { motion } from "framer-motion";
import { Award, Target, Eye, ShieldCheck } from "lucide-react";
import Counter from "./Counter";
import { STATS } from "../lib/data";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative section-pad bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80"
                alt="K&P Events team setting up a luxury wedding"
                className="w-full h-[560px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block glass rounded-2xl p-6 border-[#D4AF37]/30">
              <div className="text-5xl font-display gold-gradient-text">10+</div>
              <div className="text-xs tracking-widest uppercase text-gray-300 mt-2">Years of Craft</div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#6C63FF]/20 blur-3xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-overline">About K&P Events</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 leading-tight">
              Crafting <span className="italic gold-gradient-text">timeless</span> celebrations since 2015.
            </h2>
            <p className="text-gray-300 mt-6 leading-relaxed">
              We are a premium event management agency obsessed with detail. From intimate baby showers to grand
              destination weddings and global corporate summits — every K&P event is engineered with creativity,
              precision and soul.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                { icon: Target, title: "Mission", text: "Deliver flawless, unforgettable experiences that exceed every expectation." },
                { icon: Eye, title: "Vision", text: "To be India's most loved luxury event house — known for craft and care." },
                { icon: Award, title: "Experience", text: "10+ years orchestrating 500+ events across India and overseas." },
                { icon: ShieldCheck, title: "Why Us", text: "Senior planners, in-house décor crew and 24×7 dedicated support." },
              ].map((c, i) => (
                <div key={i} className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/40 transition-all">
                  <c.icon size={22} className="text-[#D4AF37] mb-3" />
                  <h4 className="font-display text-xl text-white">{c.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{c.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Inline counters */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`about-counter-${i}`}
              className="text-center p-6 rounded-2xl border border-[#D4AF37]/20 bg-white/[0.02]"
            >
              <div className="text-5xl md:text-6xl font-display">
                <Counter to={s.num} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400 mt-3">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
