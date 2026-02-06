import logo from "@/assets/greenmixes-logo.png";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const team = [
    {
      name: "Callon Peate",
      role: "PhD Student, Cambridge",
      emoji: "🔬",
    },
    {
      name: "Dr. Dushanth Seevaratnam",
      role: "PhD Chemical Engineering, Cambridge",
      emoji: "🎓",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <motion.div
              className="relative order-2 md:order-1"
              variants={itemVariants}
            >
              <motion.div
                className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-background border border-border overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.img
                      src={logo}
                      alt="GreenMixes"
                      className="w-28 h-28 object-contain"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/40"
                    initial={{
                      x: 50 + i * 40,
                      y: 30 + (i % 3) * 60,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, i % 2 === 0 ? 20 : -20, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${15 + i * 12}%`,
                      top: `${20 + (i % 4) * 18}%`,
                    }}
                  />
                ))}

                {/* Orbiting ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div className="order-1 md:order-2" variants={itemVariants}>
              <motion.h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={itemVariants}
              >
                Cambridge Science.
                <br />
                <motion.span
                  className="text-gradient inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Global Impact.
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Founded by materials scientists from University of Cambridge. We
                cracked the biochar-cement binding problem that others couldn't.
              </motion.p>

              {/* Team */}
              <motion.div className="space-y-4" variants={containerVariants}>
                {team.map((member, index) => (
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
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-2xl"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {member.emoji}
                    </motion.div>
                    <div>
                      <motion.div
                        className="font-display font-semibold text-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {member.name}
                      </motion.div>
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
