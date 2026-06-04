import React, { useState } from "react";
import Card from "./Card";
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './css/Project.css';

const FILTERS = ['All', 'React', 'JavaScript', 'Full Stack'];

const techMap = {
  'React': (tech) => tech.some(t => t.toLowerCase().includes('react')),
  'JavaScript': (tech) => tech.some(t => ['javascript', 'html', 'css'].includes(t.toLowerCase())),
  'Full Stack': (tech) => tech.some(t => ['node.js', 'express', 'mysql', 'express.js'].includes(t.toLowerCase())),
};

const Project = ({ title, info }) => {
  const { ref, className } = useInViewAnimation("animate__fadeInUp");
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? info
    : info.filter(item => techMap[active]?.(item.tech));

  return (
    <section ref={ref} className={`${className} project-container`} id="project-contain">
      <h2 id="project">{title}</h2>

      <div className="filter-bar" role="group" aria-label="Filter projects">
        {FILTERS.map(filter => (
          <button
            key={filter}
            className={`filter-btn${active === filter ? ' filter-btn--active' : ''}`}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((item, i) => (
          <Card key={item.title + i} {...item} />
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
};

export default Project;
