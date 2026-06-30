import { useState } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedEvents from "./components/FeaturedEvents";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Team from "./components/Team";
import VideoSection from "./components/VideoSection";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="App relative">
      <Loader />
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <About />
        <Services onBook={openBooking} />
        <FeaturedEvents onBook={openBooking} />
        <Gallery />
        <Packages onBook={openBooking} />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Stats />
        <Team />
        <VideoSection onBook={openBooking} />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons onBook={openBooking} />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "#0B132B",
            border: "1px solid rgba(212,175,55,0.4)",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
