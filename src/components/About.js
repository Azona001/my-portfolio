import React from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import "./css/About.css";

const highlights = [
  { value: "5+", label: "Projects built" },
  { value: "🎨", label: "Animation background" },
  { value: "Full-Stack", label: "Simplilearn Bootcamp" },
  { value: "React", label: "Primary focus" },
];

const About = () => {
  const { ref, className } = useInViewAnimation("animate__fadeInUp");

  return (
    <section className={`about-section`} id="about" ref={ref}>
      <div className={`about-inner ${className}`}>
        {/* Text column */}
        <div className="about-text">
          <h2>About Me</h2>
          <p className="p-intro">
            Animation taught me that good design is felt before it's understood
            — the right timing, the right weight, the right hierarchy. I brought
            that sensibility into software development when I completed
            Simplilearn's Full Stack Development Bootcamp in 2025. Today I build
            full-stack web applications with React on the frontend and Node.js,
            Express, and MySQL on the backend. The creative instincts stayed.
            The tools just got more technical.
          </p>
          <p className="p-intro">
            Currently, I'm focused on improving my JavaScript skills, exploring
            modern frameworks, and contributing to real-world projects.
          </p>
          <p className="currently-learning">
            <span className="learning-label">Currently learning</span>
            Next.js
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
