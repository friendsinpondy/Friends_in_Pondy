import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE] text-[#1B4D57]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
