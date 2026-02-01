import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'Project One',
      description: 'A responsive web application built with React and Tailwind CSS. Features include user authentication, dynamic content loading, and modern UI design.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      name: 'Project Two',
      description: 'An interactive dashboard for data visualization using charts and graphs. Implements real-time updates and responsive layouts.',
      technologies: ['React', 'Chart.js', 'CSS Modules'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      name: 'Project Three',
      description: 'A portfolio website template with terminal-inspired design. Features smooth animations, dark theme, and pixel-perfect styling.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com',
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
