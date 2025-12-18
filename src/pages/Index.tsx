import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import ImpactSection from "@/components/ImpactSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GreenMixes | Carbon-Negative Concrete</title>
        <meta 
          name="description" 
          content="Revolutionary deeptech transforming agricultural waste into carbon-sequestering cement. Build sustainably with our biochar cement technology that removes CO₂ from the atmosphere." 
        />
        <meta name="keywords" content="biochar cement, carbon negative, sustainable construction, green building materials, carbon sequestration, GreenMixes" />
      </Helmet>
      <main className="min-h-screen bg-background relative overflow-hidden">
        <AnimatedBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <TechnologySection />
          <ImpactSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
