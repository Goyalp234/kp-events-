import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp, CalendarHeart } from "lucide-react";

export default function FloatingButtons({ onBook }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 items-end">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="float-whatsapp"
          className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href="tel:+919876543210"
          data-testid="float-call"
          className="w-[52px] h-[52px] rounded-full bg-[#6C63FF] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call"
        >
          <Phone size={20} />
        </a>
        <button
          onClick={onBook}
          data-testid="float-book"
          className="px-5 h-[52px] rounded-full bg-[#D4AF37] text-[#0B132B] font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
          aria-label="Book Now"
        >
          <CalendarHeart size={18} />
          <span className="hidden sm:inline text-sm">Book Now</span>
        </button>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="back-to-top"
            className="fixed bottom-6 left-6 z-[90] w-12 h-12 rounded-full bg-[#0B132B] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B132B] transition-all shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
