import React, { useState } from 'react';
import './css/Card.css';
import { useInViewAnimation } from '../hooks/useInViewAnimation';




const Card = ({ title, desc, link, tech, code, img }) => {

     const { ref, className } = useInViewAnimation("animate__fadeInUp");

    const[isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        isFlipped === false ? setIsFlipped(true) : setIsFlipped(false);
    }

    const addClass = isFlipped ? "card is-flipped" : "card"
  
    return (
     <div className={`scene ${className} animate__delay-1s`} ref={ref} >
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
                                    <li><a href={code} target='_blank' rel='noopener noreferrer'>Code</a></li>
                                    <li><a href={link} target='_blank' rel='noopener noreferrer'>Live</a></li>
                                </ul>
                            </div>
                    </div>
     </div>
    
  );
};

export default Card;