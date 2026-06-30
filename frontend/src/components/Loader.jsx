import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] loader-bg flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-6xl md:text-7xl gold-gradient-text tracking-wider"
          >
            K<span className="text-white mx-1">&</span>P
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-[2px] mt-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-xs tracking-[0.4em] uppercase text-gray-400"
          >
            K&P Events
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
