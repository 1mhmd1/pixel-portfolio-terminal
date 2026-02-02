import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  name,
  description,
  technologies,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="border border-border bg-card p-6 shadow-[inset_0_0_30px_hsl(120_100%_50%/0.05)] hover:border-primary transition-colors group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-pixel text-xs text-primary drop-shadow-[0_0_10px_hsl(120_100%_50%/0.5)] group-hover:drop-shadow-[0_0_10px_hsl(120_100%_50%/0.8)] transition-all">
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
