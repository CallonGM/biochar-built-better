import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { X, Check } from "lucide-react";

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const currentSolutions = [
    "1-2% biochar loading",
    "~5% cement replacement",
    "High capex required",
    "Workflow disruptions",
  ];

  const greenMixesSolutions = [
    "2-3x biochar loading",
    ">15% cement replacement",
    "Zero capex",
    "Drop-in solution",
  ];

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Big statement */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-primary font-medium text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              The Problem
            </motion.p>
            <motion.h2
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              Cement ={" "}
              <motion.span
                className="text-gradient inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.4,
                }}
              >
                8%
              </motion.span>{" "}
              of Global CO₂
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              The 2nd most used material after water. Industry faces $5-10B
              compliance costs annually. Net-zero by 2050 isn't optional.
            </motion.p>
          </motion.div>

          {/* Visual comparison */}
          <motion.div
            className="bg-card-gradient border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0"
              animate={{
                opacity: isInView ? [0, 0.5, 0] : 0,
                boxShadow: isInView
                  ? [
                      "inset 0 0 0 1px transparent",
                      "inset 0 0 0 1px hsl(152 45% 40% / 0.3)",
                      "inset 0 0 0 1px transparent",
                    ]
                  : "none",
              }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Current Solutions */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                  Current Solutions
                </div>
                <div className="space-y-3">
                  {currentSolutions.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <X className="w-3 h-3 text-destructive" />
                      </motion.div>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* GreenMixes */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-primary text-sm uppercase tracking-wider mb-4">
                  GreenMixes
                </div>
                <div className="space-y-3">
                  {greenMixesSolutions.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 text-foreground font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-3 h-3 text-primary" />
                      </motion.div>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div className="mt-12" variants={itemVariants}>
            <motion.p
              className="text-muted-foreground text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              Industry leaders committed to net-zero:
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {["CEMEX", "HOLCIM", "Heidelberg", "SKANSKA", "LAING O'ROURKE"].map(
                (name, index) => (
                  <motion.span
                    key={name}
                    className="bg-muted/20 px-4 py-2 rounded-lg text-muted-foreground/70 text-sm font-medium border border-border/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "hsl(var(--muted) / 0.4)",
                    }}
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
