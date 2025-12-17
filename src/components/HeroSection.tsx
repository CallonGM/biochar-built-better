import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden grain">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Carbon-Negative Construction</span>
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Building Tomorrow with{" "}
            <span className="text-gradient">Biochar Cement</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Revolutionary deeptech that transforms agricultural waste into carbon-sequestering 
            construction materials. Every ton of our cement removes CO₂ from the atmosphere.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              Explore Our Technology
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Impact Report
            </Button>
          </div>

          {/* Stats preview */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">40%</div>
              <div className="text-sm text-muted-foreground mt-1">Less CO₂ Emissions</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">500kg</div>
              <div className="text-sm text-muted-foreground mt-1">Carbon Stored/Ton</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">2x</div>
              <div className="text-sm text-muted-foreground mt-1">Durability Increase</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
