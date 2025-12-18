import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Moving gradient waves */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-wave-slow">
          <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[35%] h-[35%] rounded-full bg-gradient-radial from-accent/12 via-accent/4 to-transparent blur-3xl" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl animate-float-random"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive glow following mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/25 via-primary/8 to-transparent blur-[100px] transition-all duration-[2000ms] ease-out"
        style={{
          left: `calc(50% + ${mousePosition.x * 3}px)`,
          top: `calc(40% + ${mousePosition.y * 3}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-[80px] transition-all duration-[2500ms] ease-out"
        style={{
          right: `calc(30% + ${-mousePosition.x * 2}px)`,
          bottom: `calc(30% + ${-mousePosition.y * 2}px)`,
          transform: "translate(50%, 50%)",
        }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-move" />
      </div>

      {/* Diagonal light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-full w-[200%] h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-[25deg] translate-y-[30vh] animate-streak" />
        <div className="absolute top-0 -left-full w-[200%] h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-[25deg] translate-y-[60vh] animate-streak-delayed" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
