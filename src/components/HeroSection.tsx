import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden grain"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating orbs with motion */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-primary/30 rounded-full blur-[180px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "20%", top: "30%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "15%", bottom: "20%" }}
      />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">
              DeepTech Climate Innovation
            </span>
          </motion.div>

          {/* Animated headline */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Carbon-Negative
            </motion.span>{" "}
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Concrete, Today.
            </motion.span>
          </motion.h1>

          {/* Single punchy line */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            We make biochar work in cement. 2-3x better loading. 15%+ cement
            replacement. Zero workflow changes.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" className="group">
                Partner With Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Minimal stats */}
          <motion.div
            className="flex items-center justify-center gap-8 md:gap-12 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            {[
              { value: "8%", label: "of global CO₂ is cement" },
              { value: "$5B", label: "beachhead market" },
              { value: "2050", label: "net-zero deadline" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="font-display text-3xl md:text-4xl font-bold text-foreground"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 1 + index * 0.1,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 max-w-[120px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
