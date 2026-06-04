import React from 'react';
import profile from '../images/profile.PNG';

const Header = () => {
  return (
    <header>
      <div className='header' id='top-header'>
        <p className='top'>Available for work</p>
        <h1 className='name-intro'>
          Turning ideas into<br />
          <span className='name-highlight'>fast, accessible</span> web experiences.
        </h1>
        <p className='tagline'>
          I'm <strong>Azona Isagba</strong> — a frontend developer who builds clean,
          responsive interfaces with React and JavaScript.
        </p>
        <div className="buttons">
          <a href="#project-contain" className='project project-link'>View Projects</a>
          <a href="/resume.pdf" download className='project project-link resume-link'>Download Resume</a>
        </div>
      </div>
      <div className='profile'>
        <div className='profile-ring'>
          <img className='profile-img' src={profile} alt='Azona Isagba' loading="lazy" />
        </div>
        <div className='profile-badge'>
          <span className='profile-badge__dot' />
          Open to opportunities
        </div>
      </div>
    </header>
  );
};

export default Header;
