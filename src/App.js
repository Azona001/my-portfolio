import React, { useState } from "react";
import './App.css';
import Project from "./components/Project";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";



const App = () => {

    const [value, setValue] = useState('');

 const cardData =    [
            {
              title: "Weather App",
              desc: "Live weather app using OpenWeather API with search and icon features.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
              code: "https://github.com/Azona001/Weather001",
              img: "/my-portfolio/src/images/Weather-app.jpg",
            },
            {
              title: "Todo List App",
              desc: "Classic todo list with smooth UI animations and local persistence.",
              link: "#",
              tech: ["React", "CSS"],
              code: "https://github.com/Azona001/MyTodo",
              img: "/my-portfolio/src/images/Todo-App.jpg",
            },
            {
              title: "Scroll Reveal Site",
              desc: "Scroll animations with JS. Customized from a YouTube tutorial.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript"],
              code: "https://github.com/Azona001/Scroll-reveal",
              img: "/my-portfolio/src/images/Scroll-reveal.jpg",
            },
             {
              title: "Library App",
              desc: "Track books with add/edit/delete features and localStorage.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript"],
              code: "https://github.com/Azona001/MyLibrary",
              img: "/my-portfolio/src/images/library-app.jpg",
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