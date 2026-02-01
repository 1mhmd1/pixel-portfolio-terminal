import React from 'react';
import { Lightbulb, Code, MessageSquare, Shield, Zap } from 'lucide-react';

const HireMe = () => {
  const reasons = [
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: 'Quick Learner',
      description: 'I adapt quickly to new technologies and frameworks, always staying current with industry trends.',
    },
    {
      icon: <Code className="text-primary" size={24} />,
      title: 'Clean Code Advocate',
      description: 'I write maintainable, well-documented code following best practices and coding standards.',
    },
    {
      icon: <MessageSquare className="text-primary" size={24} />,
      title: 'Strong Communicator',
      description: 'Clear communication and collaboration skills ensure smooth teamwork and project delivery.',
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: 'Reliable & Committed',
      description: 'I take ownership of my work and deliver on time with attention to quality and detail.',
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges and finding efficient, elegant solutions.',
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
