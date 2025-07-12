import React from 'react';
import Hamburger from './Hamburger';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Nav = ({isClicked, onClick= f => f, clicked }) => {

      const {ref, className} = useInViewAnimation('animate__slideInDown')

  return (
    <nav aria-label='Main navigation' className={`${className} navbar`} ref={ref}>
        <div className='ham'>
        <Hamburger isClicked={isClicked} onClick={ onClick }/>
        </div>
        <ul className={clicked} isClicked={isClicked}>
            <li className='nav-home'><a href='/' aria-current='page'>Azona Isagba</a></li>
            <li className='nav-item'><a href='#about'>About</a></li>
            <li className='nav-item'><a href='#project-contain'>Projects</a></li>
            <li className='nav-item'><a href='#contact'>Contact</a></li>
        </ul>
       

    </nav>
  )
};

export default Nav;