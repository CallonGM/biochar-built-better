import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/greenmixes-logo.png";

const Footer = () => {
  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#technology" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="GreenMixes Logo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-lg text-foreground">
                Green<span className="text-primary">Mixes</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Building a carbon-negative future through innovative biochar cement technology. 
              Drop-in solution for the construction industry.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 GreenMixes Ltd. All rights reserved. Cambridge, UK.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
