import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Scenarios", href: "#scenarios" },
    { name: "Demo", href: "#demo" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Support", href: "#support" },
    { name: "API", href: "#api" },
    { name: "Training", href: "#training" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[hsl(222_47%_8%)] border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary to-[hsl(35_95%_55%)] p-2 rounded-lg">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                SafetyAR
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transforming workplace safety through immersive AR training experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 SafetyAR. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built for safer workplaces worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
