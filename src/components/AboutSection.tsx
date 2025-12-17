import { Building2, Users, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Founded in 2021",
      description: "Born from MIT research on sustainable materials",
    },
    {
      icon: Users,
      title: "60+ Team Members",
      description: "Scientists, engineers, and sustainability experts",
    },
    {
      icon: Award,
      title: "Patent Portfolio",
      description: "12 patents protecting our proprietary technology",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operations across 3 continents",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Pioneering the Future of Construction
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              BioCarbon Cement was founded by a team of materials scientists and climate 
              entrepreneurs with a shared vision: to transform the construction industry 
              from a major carbon emitter into a carbon sink.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our breakthrough came from understanding that biochar—a stable form of carbon 
              produced from organic waste—could not only enhance cement performance but also 
              permanently sequester CO₂. Today, we're scaling this technology to meet the 
              demands of a decarbonizing world.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-sm">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-background border border-border overflow-hidden relative">
              {/* Abstract visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Hexagonal grid pattern representing molecular structure */}
                <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
                  <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <polygon 
                      points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1"
                      className="text-primary"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
              </div>
              
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/40 animate-float"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${15 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">B Corp Certified</div>
                  <div className="text-muted-foreground text-sm">Since 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
