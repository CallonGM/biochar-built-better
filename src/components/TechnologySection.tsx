import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Leaf, Flame, FlaskConical, Building2, ArrowRight } from "lucide-react";

const TechnologySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Leaf,
      title: "Biomass Residues",
      description: "Agricultural waste containing sequestered carbon",
    },
    {
      icon: Flame,
      title: "Biochar Production",
      description: "Pyrolysis converts waste into stable carbon",
    },
    {
      icon: FlaskConical,
      title: "GreenMixes Processing",
      description: "Proprietary binders create high-performance admixtures",
      highlight: true,
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Carbon locked permanently into building structures",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="technology" ref={sectionRef} className="py-28 bg-card relative overflow-hidden">
      {/* Top gradient line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="max-w-3xl mb-20" variants={itemVariants}>
            <motion.p
              className="text-primary font-medium text-sm uppercase tracking-wider mb-4"
              variants={itemVariants}
            >
              From Waste to Carbon Sink
            </motion.p>
            <motion.h2
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              variants={itemVariants}
            >
              How We Turn Biomass Into{" "}
              <span className="text-gradient">Permanent Carbon Storage</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              variants={itemVariants}
            >
              Our Carbon-to-Concrete platform integrates seamlessly into existing construction workflows—no capex, no disruption.
            </motion.p>
          </motion.div>

          {/* Process Flow - horizontal like ecoLocked */}
          <motion.div className="relative mb-20" variants={itemVariants}>
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  >
                    {/* Step number + icon */}
                    <motion.div
                      className={`w-32 h-32 mx-auto rounded-2xl border-2 flex flex-col items-center justify-center mb-6 relative ${
                        step.highlight
                          ? "bg-primary/10 border-primary shadow-glow"
                          : "bg-muted/30 border-border"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "hsl(var(--primary))",
                        boxShadow: "0 0 60px hsl(152 45% 40% / 0.15)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                        Step {index + 1}
                      </span>
                      <Icon className={`w-8 h-8 ${step.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    </motion.div>

                    {/* Arrow between steps (mobile hidden) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden md:flex absolute top-16 -right-4 z-10 text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    )}

                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Advantage cards - inspired by Solid Carbon */}
          <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants}>
            {[
              {
                stat: "2-3×",
                label: "Higher Biochar Loading",
                description: "Our proprietary binders enable industry-leading biochar incorporation rates",
              },
              {
                stat: ">15%",
                label: "Cement Replacement",
                description: "Far exceeding the industry standard of ~5%, dramatically reducing emissions",
              },
              {
                stat: "100%",
                label: "Strength Retention",
                description: "No compromise on structural performance—meets all industry standards",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-muted/20 border border-border rounded-2xl p-8 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  borderColor: "hsl(var(--primary) / 0.4)",
                  boxShadow: "0 0 80px hsl(152 45% 40% / 0.1)",
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  className="font-display text-5xl font-bold text-gradient mb-3 relative z-10"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.8 + index * 0.15 }}
                >
                  {item.stat}
                </motion.div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2 relative z-10">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm relative z-10 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
