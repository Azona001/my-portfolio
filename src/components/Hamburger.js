import React from 'react';
import './css/Hamburger.css';

const Hamburger = ({isClicked, onClick= f => f }) => {

  return (
   
    <div className="background" isClicked={isClicked} onClick={ () => onClick(isClicked)}>
    <button className="menu__icon">
        <span></span>
        <span></span>
        <span></span>
    </button>
    </div>
    )
}

export default Hamburger;