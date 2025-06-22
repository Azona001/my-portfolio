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

    const [value, setValue] = useState('');

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

        const handleChange = (e) => {
            setValue(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setValue('');
        };

    return (
        <div className="wrapper">
            <Nav />
           <Header />
            <main className="container">
             <About />
             <Project title={"Projects"} info={cardData}/>
             <Contact value={value} handleSubmit={handleSubmit} handleChange={handleChange} />
            </main>
           <Footer />
        </div>
    );
};


export default App;