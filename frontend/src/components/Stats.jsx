import { motion } from "framer-motion";
import Counter from "./Counter";
import { STATS } from "../lib/data";

export default function Stats() {
  return (
    <section data-testid="stats-section" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt="Elegant event setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B132B]/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            data-testid={`stat-${i}`}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-display">
              <Counter to={s.num} suffix={s.suffix} />
            </div>
            <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-300 mt-3">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
