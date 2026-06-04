import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './css/About.css';

const highlights = [
  { value: '5+', label: 'Projects built' },
  { value: '🎨', label: 'Animation background' },
  { value: 'Full-Stack', label: 'Simplilearn Bootcamp' },
  { value: 'React', label: 'Primary focus' },
];

const About = () => {
  const { ref, className } = useInViewAnimation('animate__fadeInUp');

  return (
    <section className={`about-section`} id="about" ref={ref}>
      <div className={`about-inner ${className}`}>

        {/* Text column */}
        <div className="about-text">
          <h2>About Me</h2>
          <p className="p-intro">
            I'm a frontend developer with a background in animation and a recent
            graduate of Simplilearn's Full-Stack Development Bootcamp. I enjoy
            building responsive, accessible, and visually engaging websites. After
            years of bringing stories to life through animation, I now bring that
            creative energy into writing clean, user-friendly code.
          </p>
          <p className="p-intro">
            Currently, I'm focused on improving my JavaScript skills, exploring
            modern frameworks, and contributing to real-world projects.
          </p>
          <p className="currently-learning">
            <span className="learning-label">Currently learning</span>
            TypeScript &amp; Next.js
          </p>
        </div>

        {/* Highlights column */}
        <div className="about-highlights">
          {highlights.map(({ value, label }) => (
            <div key={label} className="highlight-card">
              <span className="highlight-value">{value}</span>
              <span className="highlight-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
