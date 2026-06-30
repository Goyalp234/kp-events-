import { motion } from "framer-motion";
import { PROCESS } from "../lib/data";

export default function Process() {
  return (
    <section data-testid="process-section" className="section-pad bg-[#0B132B]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Our Process</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            From spark to <span className="italic gold-gradient-text">celebration</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="relative">
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent md:-translate-x-1/2" />

          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`process-step-${i}`}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 pl-20 md:pl-0 md:px-10">
                <div className={`p-7 rounded-2xl glass border-[#D4AF37]/20 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <span className="section-overline">Step {p.step}</span>
                  <h3 className="font-display text-3xl text-white mt-2 mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 timeline-node">
                {p.step}
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
