import React from "react";
import { Github } from "lucide-react";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-pixel text-xs text-primary drop-shadow-[0_0_10px_hsl(120_100%_50%/0.5)]">
            &gt;_portfolio
          </div>
          <ul className="hidden md:flex items-center gap-6 font-terminal text-lg">
            {[
              "about",
              "technologies",
              "skills",
              "projects",
              "hire-me",
              "contact",
            ].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-[0_0_10px_hsl(120_100%_50%/0.5)]"
                >
                  [{item}]
                </button>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com"
            className="text-primary hover:drop-shadow-[0_0_10px_hsl(120_100%_50%/0.8)] transition-all"
          >
            <Github size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
