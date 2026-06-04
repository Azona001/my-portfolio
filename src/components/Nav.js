import React, { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { label: 'About',    href: '#about',          id: 'about' },
  { label: 'Skills',   href: '#skills',          id: 'skills' },
  { label: 'Projects', href: '#project-contain', id: 'project-contain' },
  { label: 'Contact',  href: '#contact',         id: 'contact' },
];

const Nav = ({ isClicked, onClick = f => f, clicked }) => {
  const active = useActiveSection();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top-header');
      if (!hero) return;
      setPastHero(window.scrollY > hero.offsetHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className="navbar">
      <div className="ham">
        <Hamburger isClicked={isClicked} onClick={onClick} />
      </div>
      <ul className={clicked}>
        <li className="nav-home">
          <a href="/" aria-current="page">Azona Isagba</a>
        </li>
        {navLinks.map(({ label, href, id }) => (
          <li key={id} className="nav-item">
            <a
              href={href}
              className={active === id ? 'nav-link nav-link--active' : 'nav-link'}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
        <li className={`nav-item nav-resume${pastHero ? ' nav-resume--visible' : ''}`}>
          <a href="/resume.pdf" download className="nav-resume-btn">
            Resume ↓
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
