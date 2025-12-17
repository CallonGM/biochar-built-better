import { Building2, Users, Award, Globe } from "lucide-react";
import logo from "@/assets/greenmixes-logo.png";

const AboutSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Cambridge Research",
      description: "PhD research from University of Cambridge",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "PhDs in Chemical Engineering & Chemistry",
    },
    {
      icon: Award,
      title: "Proprietary Technology",
      description: "Unique binders & process for biochar-cement binding",
    },
    {
      icon: Globe,
      title: "Kilogram Scale",
      description: "Already producing admixture at production scale",
    },
  ];

  const team = [
    {
      name: "Dr. Dushanth Seevaratnam",
      role: "Co-Founder",
      credentials: "PhD in Chemical Engineering (UoC), BSI Member in Circular Economy",
    },
    {
      name: "Callon Peate",
      role: "Co-Founder",
      credentials: "MSci in Chemistry (Imperial), Co-founder of Safe Air For Everyone",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About GreenMixes</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              A Material Science Approach to Construction
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              GreenMixes was founded by a team of materials scientists from the University of Cambridge 
              with deep expertise in sustainable formulations, nanotechnology, and circular economy.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our breakthrough came from understanding that biochar—when properly treated with our 
              proprietary binders—could not only replace significant amounts of cement but also 
              achieve carbon-negative concrete while maintaining structural integrity.
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
              
              {/* Central element - Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float flex items-center justify-center">
                  <img src={logo} alt="GreenMixes Logo" className="w-32 h-32 object-contain" />
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

            {/* Team badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">Cambridge Founded</div>
                  <div className="text-muted-foreground text-sm">UK Research Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-12">Founding Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-muted/20 border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display font-semibold text-foreground text-lg">{member.name}</div>
                <div className="text-primary text-sm font-medium mb-2">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
