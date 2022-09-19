// Component Imports
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUsSection/AboutUs";
import CounterSection from "../components/CounterSection/CounterSection";
import EventSection from "../components/EventSection/EventSection";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import BoardSection from "../components/BoardSection/BoardSection";
import FAQs from "../components/FAQs/FAQs";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <CounterSection />
      <EventSection />
      <PhotoGallery />
      {/* <BoardSection />
      <FAQs /> */}
      <Footer />
    </>
  );
}
