import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { FAQS } from "../lib/data";

export default function FAQ() {
  return (
    <section data-testid="faq-section" className="section-pad bg-[#070d1f]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="section-overline">Frequently Asked</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Your questions, <span className="italic gold-gradient-text">answered</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 data-[state=open]:border-[#D4AF37]/40 transition-all"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="font-display text-lg md:text-xl text-white hover:text-[#D4AF37] hover:no-underline text-left py-5"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
