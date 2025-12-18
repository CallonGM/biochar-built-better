import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import ImpactSection from "@/components/ImpactSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
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
      <main className="min-h-screen bg-background bg-dynamic-mesh relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern" />
          
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl animate-orb" />
          <div className="absolute top-2/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-accent/8 to-primary/5 blur-3xl animate-orb-reverse" />
          <div className="absolute top-1/2 left-2/3 w-64 h-64 rounded-full bg-gradient-to-br from-primary/6 to-transparent blur-2xl animate-mesh" />
          
          {/* Gradient lines */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/8 to-transparent" />
        </div>

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
