import React from 'react';
import profile from '../images/profile.PNG';

const Header = () => {
  return (
    <header>
            <div className='header' id='top-header'>
                <h3 className='top'>FrontEnd Developer</h3>
                <h1 className='name-intro'>Hi, my name is Azona Isagba</h1>
                <p>Crafting clean, responsive websites with HTML, CSS, and JavaScript</p>
                <div className="buttons">
                    
                        <a href="#project" className='project project-link'>View Projects</a>
                   
                </div>
            </div>
            <div className='profile'>
                <img className='profile-img' src={profile} alt='Azona' /> 
          </div>
     </header>
  );
};

export default Header;