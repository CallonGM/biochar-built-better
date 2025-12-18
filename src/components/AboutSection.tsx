import logo from "@/assets/greenmixes-logo.png";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Visual */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-background border border-border overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float flex items-center justify-center">
                    <img src={logo} alt="GreenMixes" className="w-28 h-28 object-contain" />
                  </div>
                </div>
                {/* Floating particles */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/40 animate-float"
                    style={{
                      top: `${25 + i * 15}%`,
                      left: `${20 + i * 18}%`,
                      animationDelay: `${i * 0.6}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cambridge Science.<br />
                <span className="text-gradient">Global Impact.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Founded by materials scientists from University of Cambridge. We cracked the biochar-cement binding problem that others couldn't.
              </p>
              
              {/* Team */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-muted/20 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">🔬</div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Callon Peate</div>
                    <div className="text-muted-foreground text-sm">PhD Student, Cambridge</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-muted/20 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">🎓</div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Dr. Dushanth Seevaratnam</div>
                    <div className="text-muted-foreground text-sm">PhD Chemical Engineering, Cambridge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
