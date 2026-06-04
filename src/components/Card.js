import React, { useState } from 'react';
import './css/Card.css';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Card = ({ title, desc, link, tech, code, img }) => {
  const { ref, className } = useInViewAnimation('animate__fadeInUp');
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`card-scene ${className}`}
      ref={ref}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed(r => !r)}
      aria-label={`Project: ${title}`}
    >
      {/* Image */}
      <img className="card-img" src={img} alt={title} loading="lazy" />

      {/* Always-visible title strip */}
      <div className="card-title-bar">
        <h3 className="card-title">{title}</h3>
        <ul className="card-tech-inline">
          {tech.slice(0, 3).map(t => <li key={t}>{t}</li>)}
          {tech.length > 3 && <li>+{tech.length - 3}</li>}
        </ul>
      </div>

      {/* Hover / tap overlay */}
      <div className={`card-overlay${revealed ? ' card-overlay--visible' : ''}`} aria-hidden={!revealed}>
        <div className="card-overlay-inner">
          <h3 className="card-overlay-title">{title}</h3>
          <p className="card-overlay-desc">{desc}</p>
          <ul className="card-overlay-tech">
            {tech.map(t => <li key={t}>{t}</li>)}
          </ul>
          <div className="card-overlay-links">
            <a href={code} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${title}`} onClick={e => e.stopPropagation()}>
              <FiGithub /> Code
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${title}`} onClick={e => e.stopPropagation()}>
              <FiExternalLink /> Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
