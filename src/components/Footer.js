import React from 'react';
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import Dark from "./Dark";

const Footer = () => {
  return (
      <footer>
          <nav aria-label='Socials and theme'>
                <ul className='icons'>
                    <li><a href='https://www.linkedin.com/in/azonachukwu-isagba-50a43a146/'  target="_blank"
            rel="noopener noreferrer" aria-label='linkedin'><SlSocialLinkedin /></a></li>
                    <li><a href='https://github.com/Azona001'  target="_blank"
            rel="noopener noreferrer" aria-label='github'><VscGithubAlt /></a></li>
                    <li className='dark-theme'><Dark /></li>
                </ul>
          </nav>
                <span className='footer-note'>Azona Isagba  &copy;2025</span>
                
      </footer>
  );
};

export default Footer;