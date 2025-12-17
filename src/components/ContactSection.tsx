import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@biocarboncement.com",
      href: "mailto:hello@biocarboncement.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Ready to Build Carbon-Negative?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're a developer, architect, or construction company, we'd love to discuss 
              how biochar cement can transform your next project.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-card-gradient border border-border rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team will analyze your project requirements and provide a customized 
                  proposal with carbon impact estimates.
                </p>
                <Button variant="hero" size="lg">
                  Book a Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">{item.label}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Stay Updated on Climate Innovation
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
            <p className="text-muted-foreground text-sm mt-3">
              Join 5,000+ climate-conscious professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
