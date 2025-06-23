import React, { useState } from "react";
import './App.css';
import Project from "./components/Project";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import library from './images/library-app.jpg';
import scroll from './images/Scroll-reveal.jpg';
import todo from './images/To-do App.png';
import weather from './images/Weather-app.jpg';



const App = () => {

    const [isClicked, setIsClicked] = useState(false);

 const cardData =    [
            {
              title: "Weather App",
              desc: "Live weather app using OpenWeather API with search and icon features.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
              code: "https://github.com/Azona001/Weather001",
              img: weather,
            },
            {
              title: "Todo List App",
              desc: "Classic todo list with smooth UI animations and local persistence.",
              link: "#",
              tech: ["React", "CSS"],
              code: "https://github.com/Azona001/MyTodo",
              img: todo,
            },
            {
              title: "Scroll Reveal Site",
              desc: "Scroll animations with JS. Customized from a YouTube tutorial.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript"],
              code: "https://github.com/Azona001/Scroll-reveal",
              img: scroll,
            },
             {
              title: "Library App",
              desc: "Track books with add/edit/delete features and localStorage.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript"],
              code: "https://github.com/Azona001/MyLibrary",
              img: library,
            },
        ];

        const handleClick = (isClicked) => {
            !isClicked ? setIsClicked(true) : setIsClicked(false);
    }

        const clicked = isClicked ? "nav hide" : "nav" ;

    return (
        <div className="wrapper">
            <Nav isClicked={isClicked} onClick={ handleClick } clicked={ clicked }/>
           <Header />
            <main className="container">
             <About />
             <Project title={"Projects"} info={cardData}/>
             <br />
             <Contact />
             <br />
             <Footer />
            </main>
           
        </div>
    );
};


export default App;