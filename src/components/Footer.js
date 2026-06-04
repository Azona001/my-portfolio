import React from 'react';
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import Dark from "./Dark";
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './css/Footer.css';

const Footer = () => {
  const { ref, className } = useInViewAnimation('animate__fadeInUp');

  return (
    <footer ref={ref} className={`footer ${className}`}>
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <span className="footer-name">Azona Isagba</span>
          <p className="footer-bio">
            Frontend developer crafting clean, accessible UIs with React and JavaScript.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/azonachukwu-isagba-50a43a146/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-icon-link"
            >
              <SlSocialLinkedin />
            </a>
            <a
              href="https://github.com/Azona001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-icon-link"
            >
              <VscGithubAlt />
            </a>
            <a
              href="mailto:isagbaazona@gmail.com"
              aria-label="Email"
              className="footer-icon-link"
            >
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        {/* Nav column */}
        <nav aria-label="Footer navigation" className="footer-nav-col">
          <h4 className="footer-col-heading">Navigation</h4>
          <ul className="footer-nav-list">
            <li><a href="#top-header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project-contain">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Contact & theme column */}
        <div className="footer-contact-col">
          <h4 className="footer-col-heading">Get in touch</h4>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:isagbaazona@gmail.com">isagbaazona@gmail.com</a>
            </li>
            <li>
              <a href="tel:+13233315617">+1 (323) 331-5617</a>
            </li>
          </ul>
          <Dark />
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Azona Isagba. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
