import React from 'react';
import { ArrowRight } from 'lucide-react';
import './projectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <a href={project.demoLink} className="demo-link">
          Demo <ArrowRight className="arrow-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;