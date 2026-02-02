import React from "react";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-terminal text-muted-foreground">
            <span className="text-primary">&gt;</span> Mohammad Salim ©{" "}
            {currentYear}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/1mhmd1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              <span className="font-terminal">GitHub</span>
            </a>
            <a
              href="mailto:Mohammad.salim.2003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              <span className="font-terminal">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
