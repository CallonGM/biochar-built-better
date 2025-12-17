import { useEffect, useState, useRef } from "react";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const impacts = [
    {
      value: 8,
      suffix: "%",
      label: "Global CO₂ Emissions",
      description: "Cement industry's contribution to global carbon emissions",
    },
    {
      value: 12,
      suffix: "%",
      label: "Industry Growth by 2050",
      description: "Expected cement demand increase, requiring urgent decarbonisation",
    },
    {
      value: 5,
      suffix: "B",
      label: "Market Size (Pavers)",
      description: "Beachhead market for concrete pavers globally",
    },
    {
      value: 800,
      suffix: "B+",
      label: "Ready-Mix Market",
      description: "Total addressable market for ready-mix concrete",
    },
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Cement Needs Urgent Decarbonisation
          </h2>
          <p className="text-muted-foreground text-lg">
            Cement is the 2nd most used material on Earth after water. The industry faces 
            compliance costs of $5-10 billion annually with net-zero commitments by 2050.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={impact.label}
              className={`bg-card-gradient border border-border rounded-2xl p-8 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient mb-2">
                {isVisible ? (
                  <CountUp end={impact.value} suffix={impact.suffix} />
                ) : (
                  `0${impact.suffix}`
                )}
              </div>
              <div className="font-display font-semibold text-foreground text-lg mb-2">
                {impact.label}
              </div>
              <p className="text-muted-foreground text-sm">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Partners */}
        <div className="mt-20 max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            Key stakeholders who have pledged 2030-2045 net-zero compliance:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground/60 text-sm font-medium">
            <span className="bg-muted/30 px-4 py-2 rounded-lg">SKANSKA</span>
            <span className="bg-muted/30 px-4 py-2 rounded-lg">CEMEX</span>
            <span className="bg-muted/30 px-4 py-2 rounded-lg">HOLCIM</span>
            <span className="bg-muted/30 px-4 py-2 rounded-lg">Heidelberg Materials</span>
            <span className="bg-muted/30 px-4 py-2 rounded-lg">LAING O'ROURKE</span>
            <span className="bg-muted/30 px-4 py-2 rounded-lg">WILLMOTT DIXON</span>
            <span className="bg-muted/30 px-4 py-2 rounded-lg">MOTT MACDONALD</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
              "Our mission is to decarbonize the construction industry by making 
              carbon-negative materials the standard, not the exception—with zero 
              workflow disruptions."
            </p>
            <footer className="text-muted-foreground">
              <cite className="not-italic font-medium text-foreground">GreenMixes Team</cite>
              <span className="mx-2">·</span>
              <span>Cambridge, UK</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

// Animated counter component
const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}{suffix}
    </>
  );
};

export default ImpactSection;
