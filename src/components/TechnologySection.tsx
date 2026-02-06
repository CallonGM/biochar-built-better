import { useRef, useState, useEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Beaker, Layers, Building, Leaf } from "lucide-react";

const TechnologySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Source",
      description: "Biochar from sustainable biomass",
      icon: Leaf,
    },
    {
      title: "Formulate",
      description: "Proprietary binders transform biochar",
      icon: Beaker,
    },
    {
      title: "Integrate",
      description: "Drop-in admixture replaces cement",
      icon: Layers,
    },
    {
      title: "Sequester",
      description: "CO₂ locked permanently in buildings",
      icon: Building,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-24 bg-card relative overflow-hidden"
    >
      {/* Top gradient line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              variants={itemVariants}
            >
              Drop-in solution. No capex. No workflow changes.
            </motion.p>
          </motion.div>

          {/* Animated Process */}
          <motion.div className="relative mb-16" variants={itemVariants}>
            {/* Progress bar background */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep + 1) * 25}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className={`text-center pt-12 cursor-pointer`}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index <= activeStep ? 1 : 0.4,
                      y: 0,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`w-14 h-14 mx-auto rounded-xl border-2 flex items-center justify-center mb-4 transition-all duration-500 ${
                        index === activeStep
                          ? "bg-primary border-primary text-primary-foreground shadow-glow"
                          : index < activeStep
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted border-border text-muted-foreground"
                      }`}
                      animate={{
                        scale: index === activeStep ? 1.1 : 1,
                        rotate: index === activeStep ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div className="font-display font-semibold text-foreground">
                      {step.title}
                    </div>
                    <div className="text-muted-foreground text-xs mt-1 hidden md:block">
                      {step.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Key differentiators */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              { stat: "2-3x", label: "Higher biochar loading vs competitors" },
              { stat: ">15%", label: "Cement replacement (vs 5% standard)" },
              { stat: "100%", label: "Strength retention" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-muted/30 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 60px hsl(152 45% 40% / 0.15)",
                }}
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div
                  className="font-display text-4xl font-bold text-gradient mb-2 relative z-10"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.5 + index * 0.15,
                  }}
                >
                  {item.stat}
                </motion.div>
                <div className="text-muted-foreground text-sm relative z-10">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
