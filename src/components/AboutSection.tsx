import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const team = [
    {
      name: "Callon Peate",
      role: "PhD Student, University of Cambridge",
      emoji: "🔬",
    },
    {
      name: "Dr. Dushanth Seevaratnam",
      role: "PhD Chemical Engineering, University of Cambridge",
      emoji: "🎓",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="max-w-2xl">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-primary font-medium text-sm uppercase tracking-wider mb-4"
                variants={itemVariants}
              >
                About Us
              </motion.p>
              <motion.h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                variants={itemVariants}
              >
                Cambridge Science.{" "}
                <span className="text-gradient">Global Impact.</span>
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg mb-10 leading-relaxed"
                variants={itemVariants}
              >
                Founded by materials scientists from the University of Cambridge, we cracked the biochar-cement binding problem that others couldn't—enabling significantly higher cement replacement without compromising performance.
              </motion.p>

              {/* Team */}
              <motion.div className="space-y-4" variants={containerVariants}>
                {team.map((member) => (
                  <motion.div
                    key={member.name}
                    className="flex items-center gap-4 bg-muted/20 rounded-xl p-4 border border-border/50"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "hsl(var(--primary) / 0.3)",
                      boxShadow: "0 0 30px hsl(152 45% 40% / 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-2xl shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {member.emoji}
                    </motion.div>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {member.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {member.role}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
