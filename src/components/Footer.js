import React from 'react';
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import Dark from "./Dark";
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Footer = () => {
         const { ref, className } = useInViewAnimation('animate__fadeInUp');


  return (
      <footer ref={ref} className={className}>
        <div className='footer-container'>
          <nav aria-label='Socials and theme' className='socials'>
                <ul className='icons'>
                    <li><a href='https://www.linkedin.com/in/azonachukwu-isagba-50a43a146/'  target="_blank"
            rel="noopener noreferrer" aria-label='linkedin'><SlSocialLinkedin /></a></li>
                    <li><a href='https://github.com/Azona001'  target="_blank"
            rel="noopener noreferrer" aria-label='github'><VscGithubAlt /></a></li>
                </ul>
            
          </nav>
          <div className='footer-contact'>
            <nav aria-labelledby='footer-contact'>
                <ul className='footer-nav'>
                    <li><a href='#top-header'>Top</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#project-contain'>Project</a></li>
                    <li><a href='#contact'>Contact</a></li>

                </ul>
            </nav>
            <div className='footer-info'>
            <span >isagbaazona@gmail.com</span>
            <span >+1(323)-331-5617</span>
            </div>
              <Dark />
          </div>
        </div>
         
          <span className='footer-note'>Azona Isagba  &copy;2025</span>
                
                
      </footer>
  );
};

export default Footer;