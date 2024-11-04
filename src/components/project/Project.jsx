import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import FilterButtons from './FilterButtons';
import { projectInfo } from '../../data/projectInfo';
import './project.css';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web', 'App', 'Design'];

  const filteredProjects = projectInfo.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <FilterButtons 
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;