import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import USPSection from "./components/USPSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FunctionsSection from "./components/FunctionsSection";
import FAQSection from "./components/FAQSection";
import GallerySection from "./components/GallerySection";
import OutdoorDiningSection from "./components/OutdoorDiningSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MobileStickyNav from "./components/MobileStickyNav";
import FloatingOrderButton from "./components/FloatingOrderButton";

export default function Home() {
  return (
    <>
      {/* Hero Block - announcement + header float over this */}
      <div className="relative w-full m-0 p-0 border-none outline-none">
        <AnnouncementBar />
        <Header />
        <Hero />
      </div>

      <main>
        <USPSection />
        <OutdoorDiningSection />
        <MenuSection />
        <TestimonialsSection />
        <FAQSection />
        <GallerySection />
        <FunctionsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyNav />
      <FloatingOrderButton />
    </>
  );
}
