import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ name, description, technologies, githubLink, demoLink }) => {
  return (
    <div className="terminal-card border border-border p-6 hover:border-primary transition-colors group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-pixel text-xs text-primary text-glow group-hover:text-glow-strong transition-all">
          {name}
        </h3>
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="font-terminal text-lg text-muted-foreground mb-4">
        <span className="text-primary">&gt;</span> {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="font-terminal text-sm px-2 py-1 border border-border text-primary"
          >
            [{tech}]
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
