import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Skills',
      skills: [
        'Component-based development',
        'Responsive design',
        'State management',
        'API integration',
        'Cross-browser compatibility',
      ],
    },
    {
      title: 'UI/UX Basics',
      skills: [
        'User-centered design',
        'Wireframing concepts',
        'Color theory',
        'Typography principles',
        'Accessibility awareness',
      ],
    },
    {
      title: 'Problem Solving',
      skills: [
        'Debugging techniques',
        'Algorithm thinking',
        'Code optimization',
        'Research skills',
        'Critical analysis',
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Team collaboration',
        'Clear communication',
        'Time management',
        'Adaptability',
        'Continuous learning',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary text-glow mb-12">
          <span className="text-muted-foreground">&gt;</span> skills
        </h2>
        
        <div className="terminal-card">
          <div className="font-terminal text-xl mb-6">
            <span className="text-primary">$</span> cat skills.json
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="border border-border p-4">
                <h3 className="font-pixel text-xs text-accent mb-4">
                  {'{'}"{category.title}":{']'}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="font-terminal text-lg text-muted-foreground flex items-center gap-2"
                    >
                      <span className="text-primary">├──</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-6 font-terminal text-primary">
            <span className="cursor-blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
