import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary text-glow mb-12">
          <span className="text-muted-foreground">&gt;</span> about_me
        </h2>
        
        <div className="terminal-card space-y-6">
          <div className="font-terminal text-xl leading-relaxed">
            <span className="text-primary">$</span> cat about.txt
          </div>
          
          <div className="pl-4 border-l-2 border-primary space-y-4">
            <p className="font-terminal text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Frontend Developer with a strong foundation in building 
              responsive and user-friendly web applications. My journey in web development 
              started with curiosity about how websites work, and it has evolved into a 
              deep commitment to creating clean, efficient code.
            </p>
            
            <p className="font-terminal text-lg text-muted-foreground leading-relaxed">
              Currently focused on mastering React and modern JavaScript frameworks, 
              I enjoy the challenge of turning complex problems into simple, elegant 
              solutions. I believe in writing maintainable code and following best 
              practices that make collaboration seamless.
            </p>
            
            <p className="font-terminal text-lg text-muted-foreground leading-relaxed">
              My goal is to become a well-rounded developer who can contribute to 
              meaningful projects while continuously learning and growing in this 
              ever-evolving field.
            </p>
          </div>
          
          <div className="font-terminal text-primary">
            <span className="cursor-blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
