import { Recycle, Zap, Shield, Leaf } from "lucide-react";

const TechnologySection = () => {
  const steps = [
    {
      icon: Recycle,
      title: "Biochar Sourcing",
      description: "Unprocessed biochar is sourced from sustainable biomass conversion processes.",
    },
    {
      icon: Zap,
      title: "GreenMixes Formulation",
      description: "Our proprietary binders and process transform biochar into a high-performance admixture.",
    },
    {
      icon: Shield,
      title: "Concrete Integration",
      description: "GreenMixes admixture is mixed with cement, enabling partial cement replacement.",
    },
    {
      icon: Leaf,
      title: "Carbon-Negative Output",
      description: "The final carbon-negative concrete product sequesters CO₂ permanently in buildings.",
    },
  ];

  const features = [
    {
      stat: "2-3x",
      label: "Enhanced Loading",
      description: "Higher biochar loading than current solutions (vs 1-2%)",
    },
    {
      stat: ">15%",
      label: "Cement Replacement",
      description: "High cement replacement rate vs industry standard 5%",
    },
    {
      stat: "100%",
      label: "Comparable Strength",
      description: "Matches traditional concrete strength and durability",
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
            Drop-In Carbon-Sink Additive
          </h2>
          <p className="text-muted-foreground text-lg">
            We enable biochar to bind with cement better than anyone else. Our proprietary 
            binders and process create a cost-competitive, scalable solution with no capex required.
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

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-primary font-bold text-lg mb-2">✓ Minimal Workflow Disruptions</div>
            <p className="text-muted-foreground text-sm">Drop-in solution requires no capex or infrastructure changes</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-primary font-bold text-lg mb-2">✓ Carbon Reduction + Sequestering</div>
            <p className="text-muted-foreground text-sm">Combines reduced emissions with permanent carbon storage</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-primary font-bold text-lg mb-2">✓ Low Regulation Barrier</div>
            <p className="text-muted-foreground text-sm">Easy adoption pathway compared to alternative technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
