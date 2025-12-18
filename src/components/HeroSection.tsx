import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden grain">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Interactive glowing orbs */}
      <div 
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] transition-transform duration-1000"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] transition-transform duration-1000"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-6 animate-fade-in">
            <span className="text-gradient">Carbon-Negative</span>{" "}
            <br className="hidden md:block" />
            Concrete, Today.
          </h1>

          {/* Single punchy line */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            We make biochar work in cement. 2-3x better loading. 15%+ cement replacement. Zero workflow changes.
          </p>

          {/* CTA */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            <Button variant="hero" size="xl">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Minimal stats */}
          <div 
            className="flex items-center justify-center gap-12 mt-20 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            {[
              { value: "8%", label: "of global CO₂ is cement" },
              { value: "$5B", label: "beachhead market" },
              { value: "2050", label: "net-zero deadline" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 max-w-[120px]">{stat.label}</div>
              </div>
            ))}
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
