import React from 'react'

const Header = () => {
  return (
    <header>
                <h3 className='top'>FrontEnd Developer</h3>
                <h1 className='name-intro'>Hi, my name is Azona Isagba</h1>
                <p>Crafting clean, responsive websites with HTML, CSS, and JavaScript</p>
                <div className="buttons">
                    <button type="button" className="project" >
                        <a href="#project" className='project-link'>View Projects</a>
                    </button>
                    
                </div>
     </header>
  );
};

export default Header;