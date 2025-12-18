import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Go Carbon-Negative?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Let's discuss how GreenMixes can transform your next project.
          </p>
          
          <Button variant="hero" size="xl">
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Button>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Cambridge, UK • <a href="mailto:hello@greenmixes.com" className="text-primary hover:underline">hello@greenmixes.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
