import React from 'react';
import Hamburger from './Hamburger';

const Nav = ({isClicked, onClick= f => f, clicked }) => {
  return (
    <div className='navbar'>
        <div className='ham'>
        <Hamburger isClicked={isClicked} onClick={ onClick }/>
        </div>
        <ul className={clicked} isClicked={isClicked}>
            <li className='nav-home'><a href='/'>Azona Isagba</a></li>
            <li className='navlink'><a href='#about'>About</a></li>
            <li className='navlink'><a href='#project'>Project</a></li>
            <li className='navlink'><a href='#contact'>Contact</a></li>
        </ul>
       

    </div>
  )
};

export default Nav;