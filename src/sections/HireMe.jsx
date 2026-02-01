import React from 'react';
import { Lightbulb, Code, MessageSquare, Shield, Zap } from 'lucide-react';

const HireMe = () => {
  const reasons = [
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: 'Full Stack Experience',
      description: 'Proven internship experience at Octa Solution building complete web applications with React, Laravel, and modern technologies.',
    },
    {
      icon: <Code className="text-primary" size={24} />,
      title: 'AI Integration Skills',
      description: 'Experience building AI-driven systems with RAG, NLQ interfaces, and forecasting models using LangChain/LlamaIndex.',
    },
    {
      icon: <MessageSquare className="text-primary" size={24} />,
      title: 'Strong Team Player',
      description: 'Successfully collaborated on multiple team projects including a senior capstone and internship delivery application.',
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: 'Solid CS Foundation',
      description: 'B.S. in Computer Science with strong background in algorithms, data structures, and software development principles.',
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: 'Quick Learner',
      description: 'Rapidly mastered React, Tailwind, Laravel, and Django during internship. Always eager to learn new technologies.',
    },
  ];

  return (
    <section id="hire-me" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary text-glow mb-12">
          <span className="text-muted-foreground">&gt;</span> why_hire_me
        </h2>
        
        <div className="terminal-card">
          <div className="font-terminal text-xl mb-6">
            <span className="text-primary">$</span> ./show-value-proposition.sh
          </div>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-pixel text-xs text-accent mb-2">
                    {reason.title}
                  </h3>
                  <p className="font-terminal text-lg text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 font-terminal text-primary text-center">
            <span className="text-muted-foreground">&gt;</span> Ready to contribute to your team!
            <span className="cursor-blink ml-1">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
