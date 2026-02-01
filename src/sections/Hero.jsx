import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl">
        <div className="font-terminal text-xl text-muted-foreground mb-4">
          <span className="text-primary">&gt;</span> initializing...
        </div>
        
        <h1 className="font-pixel text-2xl md:text-4xl text-primary text-glow-strong mb-6 leading-relaxed">
          Hi, I'm Mohammad Salim
        </h1>
        
        <div className="font-pixel text-lg md:text-xl text-accent mb-8">
          {displayText}<span className="cursor-blink text-primary">_</span>
        </div>
        
        <p className="font-terminal text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          <span className="text-primary">&gt;</span> CS Student passionate about solving complex problems and building real-world applications using Python, Java, and web technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="font-terminal text-lg px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:text-glow"
          >
            [ View Projects ]
          </button>
          <button
            onClick={scrollToContact}
            className="font-terminal text-lg px-8 py-3 border-2 border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary transition-all"
          >
            [ Contact Me ]
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="text-primary text-glow" size={32} />
      </div>
    </section>
  );
};

export default Hero;
