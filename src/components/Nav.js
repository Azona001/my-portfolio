import React from 'react';
import Hamburger from './Hamburger';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Nav = ({isClicked, onClick= f => f, clicked }) => {

      const {ref, className} = useInViewAnimation('animate__slideInDown')

  return (
    <div className={`${className} navbar`} ref={ref}>
        <div className='ham'>
        <Hamburger isClicked={isClicked} onClick={ onClick }/>
        </div>
        <ul className={clicked} isClicked={isClicked}>
            <li className='nav-home'><a href='/'>Azona Isagba</a></li>
            <li className='navlink'><a href='#about'>About</a></li>
            <li className='navlink'><a href='#project-contain'>Project</a></li>
            <li className='navlink'><a href='#contact'>Contact</a></li>
        </ul>
       

    </div>
  )
};

export default Nav;