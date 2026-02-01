import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'IntelligentWarehouseOS',
      description: 'AI-driven management system unifying warehouse inventory, multi-branch operations, and core business functions. Features RAG-based Intelligence Agent, SQL-to-Text NLQ Interface, and Forecasting & Demand Planning Model.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'LangChain', 'JavaScript', 'AJAX'],
      githubLink: 'https://github.com/1mhmd1',
      demoLink: null,
    },
    {
      name: 'AgriConnect',
      description: 'Senior Project: A platform connecting farmers with landowners, featuring an agricultural products store and AI risk alert system for farm management.',
      technologies: ['React', 'Tailwind CSS', 'Python', 'AI/ML'],
      githubLink: 'https://github.com/1mhmd1',
      demoLink: null,
    },
    {
      name: 'Delivery Web Application',
      description: 'Collaborative team project built during Octa Solution internship. Full-stack delivery platform with responsive UI and RESTful backend.',
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
      githubLink: 'https://github.com/1mhmd1',
      demoLink: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary text-glow mb-12">
          <span className="text-muted-foreground">&gt;</span> projects
        </h2>
        
        <div className="mb-6 font-terminal text-xl">
          <span className="text-primary">$</span> ls ./projects/
        </div>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-8 font-terminal text-muted-foreground text-center">
          <span className="text-primary">&gt;</span> More projects coming soon...
          <span className="cursor-blink text-primary ml-1">_</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
