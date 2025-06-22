import React, { useState } from 'react';
import './css/Card.css';
import library from '../images/library-app.jpg';
import scroll from '../images/Scroll-reveal.jpg';
import todo from '../images/Todo-App.jpg';
import weather from '../images/Weather-app.jpg';



const Card = ({ title, desc, link, tech, code, img }) => {
    const[isFlipped, setIsFlipped] = useState(false);

    const images = [weather, todo, scroll, library];
    const source = images.map((image) => image);

    const handleFlip = () => {
        isFlipped === false ? setIsFlipped(true) : setIsFlipped(false);
    }

    const addClass = isFlipped ? "card is-flipped" : "card"
  
    return (
     <div className="scene">
                    <div className={addClass} onClick={ handleFlip} isFlipped={isFlipped} >
                            <div className="front face" >
                                <img className='img' src= {source} alt={title} />
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