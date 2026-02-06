import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Large floating orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
        initial={{ x: "-20%", y: "10%" }}
        animate={{
          x: ["-20%", "-10%", "-25%", "-20%"],
          y: ["10%", "5%", "15%", "10%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/15 via-accent/5 to-transparent blur-3xl"
        initial={{ x: "60%", y: "50%" }}
        animate={{
          x: ["60%", "55%", "65%", "60%"],
          y: ["50%", "45%", "55%", "50%"],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl"
        initial={{ x: "30%", y: "70%" }}
        animate={{
          x: ["30%", "35%", "25%", "30%"],
          y: ["70%", "65%", "75%", "70%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated mesh grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 blur-sm"
          style={{
            width: 4 + (i % 3) * 4,
            height: 4 + (i % 3) * 4,
            left: `${8 + i * 7.5}%`,
            top: `${10 + (i % 5) * 18}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, i % 2 === 0 ? 30 : -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Diagonal light streaks */}
      <motion.div
        className="absolute top-0 -left-full w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ transform: "rotate(25deg) translateY(30vh)" }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />
      <motion.div
        className="absolute top-0 -left-full w-[200%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        style={{ transform: "rotate(25deg) translateY(60vh)" }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
          repeatDelay: 2,
        }}
      />

      {/* Radial pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] rounded-full border border-primary/5"
        animate={{
          scale: [0.5, 1.5],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] rounded-full border border-accent/5"
        animate={{
          scale: [0.5, 1.5],
          opacity: [0.2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 4,
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
