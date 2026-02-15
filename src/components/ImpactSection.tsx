import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Factory, Building2, Landmark, BarChart3 } from "lucide-react";

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
      description: "Swap in our admixture—same batching process, same plant, radically lower carbon footprint. No capex, no downtime.",
    },
    {
      icon: Building2,
      title: "Real Estate & Construction",
      description: "Every cubic metre poured becomes a verified carbon sink. Hit net-zero targets on projects already in your pipeline.",
    },
    {
      icon: Landmark,
      title: "Governments & Regulators",
      description: "Decarbonise public infrastructure with a solution validated at the University of Cambridge and ready for national-scale deployment.",
    },
    {
      icon: BarChart3,
      title: "Carbon Credit Buyers",
      description: "Access durable, physically locked carbon removal credits—quantifiable per building, auditable per tonne.",
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
          {/* Audience segments */}
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
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
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

        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
