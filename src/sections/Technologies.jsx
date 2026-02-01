import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: 'HTML5', icon: '📄' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'npm', icon: '📥' },
    { name: 'Vite', icon: '⚡' },
  ];

  return (
    <section id="technologies" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary text-glow mb-12">
          <span className="text-muted-foreground">&gt;</span> technologies
        </h2>
        
        <div className="terminal-card">
          <div className="font-terminal text-xl mb-6">
            <span className="text-primary">$</span> ls ./tech-stack/
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="border border-border p-4 text-center hover:border-primary hover:bg-secondary/30 transition-all group"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-terminal text-lg text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 font-terminal text-muted-foreground">
            <span className="text-primary">&gt;</span> 12 items listed
            <span className="cursor-blink text-primary ml-1">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
