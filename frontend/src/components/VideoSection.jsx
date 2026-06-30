import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export default function VideoSection({ onBook }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section data-testid="video-section" className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1740120424442-ccd013ec9581?w=1920&q=80"
          alt="Cinematic event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B132B]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(108,99,255,0.18),_transparent_70%)]" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setPlaying(true)}
          data-testid="video-play-btn"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#D4AF37] text-[#0B132B] flex items-center justify-center mb-8 relative"
          aria-label="Play showreel"
        >
          <Play size={30} fill="currentColor" className="ml-1" />
          <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/60 animate-ping" />
        </motion.button>
        <span className="section-overline">Showreel 2025</span>
        <h2 className="font-display text-4xl md:text-6xl text-white mt-4 max-w-3xl">
          Watch the <span className="italic gold-gradient-text">magic</span> we create
        </h2>
        <button onClick={onBook} data-testid="video-book-btn" className="btn-gold mt-8">
          Book a Consultation
        </button>
      </div>

      {playing && (
        <div
          onClick={() => setPlaying(false)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          data-testid="video-modal"
        >
          <button
            onClick={() => setPlaying(false)}
            className="absolute top-6 right-6 text-white p-2"
            data-testid="video-modal-close"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&modestbranding=1&rel=0"
              title="K&P Events Showreel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
