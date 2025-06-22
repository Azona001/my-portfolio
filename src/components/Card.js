import React, { useState } from 'react';
import './css/Card.css';




const Card = ({ title, desc, link, tech, code, img }) => {
    const[isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        isFlipped === false ? setIsFlipped(true) : setIsFlipped(false);
    }

    const addClass = isFlipped ? "card is-flipped" : "card"
  
    return (
     <div className="scene">
                    <div className={addClass} onClick={ handleFlip} isFlipped={isFlipped} >
                            <div className="front face" >
                                <img className='img' src= {img} alt={title} />
                                <span className='msg'>Click for more</span>
                            </div>
                            <div className="back face">
                                <h3>{title}</h3>
                                <p>{desc}</p>
                                <ul className='tech'>
                                <li >{tech.join(" • ")}</li>
                                </ul>
                                <ul>
                                    <li><a href={code} >Code</a></li>
                                    <li><a href={link}>Live</a></li>
                                </ul>
                            </div>
                    </div>
     </div>
    
  );
};

export default Card;