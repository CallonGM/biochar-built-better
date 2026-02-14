import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, Factory, Building2, Landmark, BarChart3 } from "lucide-react";

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const audiences = [
    {
      icon: Factory,
      title: "Concrete Manufacturers",
      description: "Create CO₂-reduced and carbon-storing concrete with a drop-in admixture. Meet regulatory demands without retooling.",
    },
    {
      icon: Building2,
      title: "Real Estate & Construction",
      description: "Turn your projects into carbon sinks. Cut embodied carbon and boost sustainability credentials with zero workflow changes.",
    },
    {
      icon: Landmark,
      title: "Governments & Regulators",
      description: "Enable net-zero construction targets with proven, scalable carbon removal technology backed by Cambridge science.",
    },
    {
      icon: BarChart3,
      title: "Carbon Credit Buyers",
      description: "Offset hard-to-abate emissions with permanent, measurable carbon removal locked into physical structures.",
    },
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Big impact statement - inspired by ecoLocked's "1,000,000,000" */}
          <motion.div className="text-center mb-24" variants={itemVariants}>
            <motion.p
              className="text-primary font-medium text-sm uppercase tracking-wider mb-6"
              variants={itemVariants}
            >
              The Opportunity
            </motion.p>
            <motion.div
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 tracking-tighter"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              4.4<span className="text-gradient">Gt</span>
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4"
              variants={itemVariants}
            >
              of CO₂ emitted by the cement industry every year.
            </motion.p>
            <motion.p
              className="text-muted-foreground max-w-xl mx-auto"
              variants={itemVariants}
            >
              The 2nd most used material after water. Net-zero by 2050 isn't optional—it's mandated. GreenMixes turns this challenge into an opportunity.
            </motion.p>
          </motion.div>

          {/* Audience segments - inspired by ecoLocked */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              Our solution for:
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-12 max-w-lg"
              variants={itemVariants}
            >
              GreenMixes integrates across the entire construction value chain.
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.title}
                  className="group bg-card border border-border rounded-2xl p-8 relative overflow-hidden cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    borderColor: "hsl(var(--primary) / 0.3)",
                    boxShadow: "0 0 60px hsl(152 45% 40% / 0.08)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <motion.div
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                      {audience.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust logos */}
          <motion.div className="mt-20 text-center" variants={itemVariants}>
            <motion.p className="text-muted-foreground text-sm mb-6" variants={itemVariants}>
              Industry leaders committed to net-zero construction
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {["CEMEX", "HOLCIM", "Heidelberg", "SKANSKA", "LAING O'ROURKE"].map(
                (name, index) => (
                  <motion.span
                    key={name}
                    className="bg-muted/20 px-5 py-2.5 rounded-lg text-muted-foreground/60 text-sm font-display font-medium border border-border/50 tracking-wide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted) / 0.4)" }}
                  >
                    {name}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
