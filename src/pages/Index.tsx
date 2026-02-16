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
        {/* Standard SEO */}
        <title>GreenMixes | Carbon-Negative Concrete </title>
        <meta 
          name="description" 
          content="Revolutionary deeptech transforming agricultural waste into carbon-sequestering cement. Build sustainably with GreenMixes biochar technology." 
        />
        <meta name="keywords" content="biochar cement, carbon negative, sustainable construction, green building materials, carbon sequestration, GreenMixes, decarbonizing construction" />
        <meta name="author" content="GreenMixes" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenmixes.com/" />
        <meta property="og:title" content="GreenMixes | Carbon-Negative Concrete, at scale." />
        <meta property="og:description" content="Transforming agricultural waste into carbon-sequestering cement. Join the sustainable construction revolution." />
        <meta property="og:image" content="https://greenmixes.com/greenmixes-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenmixes.com/" />
        <meta name="twitter:title" content="GreenMixes | Carbon-Negative Concrete" />
        <meta name="twitter:description" content="Transforming agricultural waste into carbon-sequestering cement." />
        <meta name="twitter:image" content="https://greenmixes.com/greenmixes-logo.png" />
        
        {/* Canonical Link (Tells Google this is the main version of the site) */}
        <link rel="canonical" href="https://greenmixes.com/" />
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
