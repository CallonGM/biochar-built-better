import { Recycle, Zap, Shield, Leaf } from "lucide-react";

const TechnologySection = () => {
  const steps = [
    {
      icon: Recycle,
      title: "Biomass Collection",
      description: "Agricultural residues and organic waste are collected from local farms and industries.",
    },
    {
      icon: Zap,
      title: "Pyrolysis Process",
      description: "High-temperature treatment converts biomass into stable biochar, locking carbon for centuries.",
    },
    {
      icon: Shield,
      title: "Cement Integration",
      description: "Biochar is precisely engineered into cement mixtures, enhancing strength and durability.",
    },
    {
      icon: Leaf,
      title: "Carbon-Negative Output",
      description: "The final product stores more carbon than emitted during production—true negative emissions.",
    },
  ];

  const features = [
    {
      stat: "800°C",
      label: "Pyrolysis Temperature",
      description: "Optimal temperature for maximum carbon stability",
    },
    {
      stat: "1000+",
      label: "Years Stability",
      description: "Carbon locked away for over a millennium",
    },
    {
      stat: "30%",
      label: "Strength Increase",
      description: "Enhanced mechanical properties vs traditional cement",
    },
  ];

  return (
    <section id="technology" className="py-24 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            The Science of Carbon-Negative Cement
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proprietary process transforms agricultural waste into high-performance construction 
            materials while permanently sequestering atmospheric carbon.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative bg-card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stats */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {feature.stat}
                </div>
                <div className="font-display font-semibold text-foreground mb-1">
                  {feature.label}
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
