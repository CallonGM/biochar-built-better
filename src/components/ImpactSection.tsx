import { useEffect, useState, useRef } from "react";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Big statement */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">The Problem</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cement = <span className="text-gradient">8%</span> of Global CO₂
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              The 2nd most used material after water. Industry faces $5-10B compliance costs annually. Net-zero by 2050 isn't optional.
            </p>
          </div>

          {/* Visual comparison */}
          <div className={`bg-card-gradient border border-border rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Current Solutions</div>
                <div className="space-y-3">
                  {["1-2% biochar loading", "~5% cement replacement", "High capex required", "Workflow disruptions"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-destructive/50" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="text-primary text-sm uppercase tracking-wider mb-2">GreenMixes</div>
                <div className="space-y-3">
                  {["2-3x biochar loading", ">15% cement replacement", "Zero capex", "Drop-in solution"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-muted-foreground text-sm mb-4">Industry leaders committed to net-zero:</p>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground/50 text-xs font-medium">
              {["CEMEX", "HOLCIM", "Heidelberg", "SKANSKA", "LAING O'ROURKE"].map((name) => (
                <span key={name} className="bg-muted/20 px-3 py-1.5 rounded-md">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
