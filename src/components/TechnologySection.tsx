import { useEffect, useRef, useState } from "react";

const TechnologySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Source", description: "Biochar from sustainable biomass" },
    { title: "Formulate", description: "Proprietary binders transform biochar" },
    { title: "Integrate", description: "Drop-in admixture replaces cement" },
    { title: "Sequester", description: "CO₂ locked permanently in buildings" },
  ];

  return (
    <section id="technology" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Drop-in solution. No capex. No workflow changes.
            </p>
          </div>

          {/* Animated Process */}
          <div className="relative mb-16">
            {/* Progress bar */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${(activeStep + 1) * 25}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className={`text-center pt-10 transition-all duration-500 cursor-pointer ${
                    index <= activeStep ? "opacity-100" : "opacity-40"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-500 ${
                      index === activeStep 
                        ? "bg-primary border-primary text-primary-foreground scale-110" 
                        : index < activeStep
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted border-border text-muted-foreground"
                    }`}
                  >
                    <span className="font-display font-bold">{index + 1}</span>
                  </div>
                  <div className="font-display font-semibold text-foreground">{step.title}</div>
                  <div className="text-muted-foreground text-xs mt-1 hidden md:block">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key differentiators */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "2-3x", label: "Higher biochar loading vs competitors" },
              { stat: ">15%", label: "Cement replacement (vs 5% standard)" },
              { stat: "100%", label: "Strength retention" },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="bg-muted/30 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="font-display text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {item.stat}
                </div>
                <div className="text-muted-foreground text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
