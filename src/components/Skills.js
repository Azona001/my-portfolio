import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './css/Skills.css';

const skills = [
  { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Tailwind CSS', 'Animate.css'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Appwrite', 'Formspree'] },
  { category: 'APIs & Services', items: ['TMDB API', 'OpenWeather API'] },
];

const Skills = () => {
  const { ref, className } = useInViewAnimation('animate__fadeInUp');

  return (
    <section className={`${className} skills-section`} id="skills" ref={ref}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(({ category, items }) => (
          <div key={category} className="skill-group">
            <h3 className="skill-category">{category}</h3>
            <ul className="skill-list">
              {items.map((skill) => (
                <li key={skill} className="skill-badge">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
