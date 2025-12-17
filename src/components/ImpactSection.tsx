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
      value: 12500,
      suffix: "+",
      label: "Tons CO₂ Sequestered",
      description: "Permanently stored in our biochar cement products",
    },
    {
      value: 85,
      suffix: "%",
      label: "Waste Diverted",
      description: "Agricultural residues repurposed from landfills",
    },
    {
      value: 200,
      suffix: "+",
      label: "Partner Farms",
      description: "Local agricultural partnerships worldwide",
    },
    {
      value: 50,
      suffix: "M",
      label: "Investment Raised",
      description: "Backed by leading climate-tech investors",
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Measurable Climate Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Every project built with our biochar cement contributes to a healthier planet. 
            Track our real-time environmental impact.
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

        {/* Mission Statement */}
        <div className="mt-20 max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
              "Our mission is to decarbonize the construction industry—one of the largest 
              contributors to global emissions—by making carbon-negative materials the standard, 
              not the exception."
            </p>
            <footer className="text-muted-foreground">
              <cite className="not-italic font-medium text-foreground">Dr. Sarah Chen</cite>
              <span className="mx-2">·</span>
              <span>CEO & Co-Founder</span>
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
