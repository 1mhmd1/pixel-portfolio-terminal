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
              I'm a motivated Computer Science student at Beirut Arab University (B.S. in CS, GPA: 3.1/4, graduating May 2025) 
              with a strong foundation in programming, algorithms, and software development.
            </p>
            
            <p className="font-terminal text-lg text-muted-foreground leading-relaxed">
              Experienced in team projects and building real-world applications using Python, Java, 
              and modern web technologies. I completed a 4-month Full Stack Web Development internship 
              at Octa Solution where I built responsive projects and collaborated on a Delivery Web Application.
            </p>
            
            <p className="font-terminal text-lg text-muted-foreground leading-relaxed">
              Passionate about solving complex problems and continuously learning new technologies. 
              Eager to contribute technical and analytical skills in a dynamic, growth-focused environment.
            </p>
            
            <p className="font-terminal text-lg text-muted-foreground leading-relaxed">
              <span className="text-accent">Languages:</span> Arabic (native), English (fluent)
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
