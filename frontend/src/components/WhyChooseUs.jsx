import { motion } from "framer-motion";
import { Users, Tag, Headphones, Palette, Sparkles, Utensils, Award, Clock, Heart } from "lucide-react";

const ITEMS = [
  { icon: Users, title: "Professional Team", desc: "Senior planners with 10+ years of luxury event experience." },
  { icon: Tag, title: "Affordable Pricing", desc: "Premium quality without inflated agency markups." },
  { icon: Headphones, title: "24×7 Support", desc: "Dedicated event manager reachable any hour, any day." },
  { icon: Palette, title: "Creative Designs", desc: "Custom mood boards and 3D décor previews for every event." },
  { icon: Sparkles, title: "Premium Decoration", desc: "Imported florals, custom installations, designer staging." },
  { icon: Utensils, title: "Quality Catering", desc: "Curated chefs and gourmet multi-cuisine spreads." },
  { icon: Award, title: "Experienced Staff", desc: "Background-verified, trained on-ground execution team." },
  { icon: Clock, title: "On-Time Delivery", desc: "Production schedules planned to the minute, always on time." },
  { icon: Heart, title: "100% Satisfaction", desc: "Outcomes loved by 300+ clients — and counting." },
];

export default function WhyChooseUs() {
  return (
    <section data-testid="why-section" className="section-pad bg-gradient-to-b from-[#070d1f] via-[#0B132B] to-[#070d1f] relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-overline">Why K&P Events</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Crafted with <span className="italic gold-gradient-text">obsessive</span> care
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                data-testid={`why-card-${i}`}
                className="group p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#6C63FF]/20 flex items-center justify-center border border-[#D4AF37]/30 mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-xl text-white mb-2">{it.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
