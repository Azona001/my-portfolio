import React, { useState } from "react";
import './App.css';
import Project from "./components/Project";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
// import library from './images/library-app.jpg';
import taskmanager from './images/taskmanager-app.png';
import todo from './images/To-do App.png';
import weather from './images/Weather-app.jpg';
import movieapp from './images/Movie-App.png';
import recipebox from './images/RecipeBox.png';
import 'animate.css';



const App = () => {

    const [isClicked, setIsClicked] = useState(false);

 const cardData =    [
           {
            title: "RecipeBox",
            desc: "Full-stack personal recipe manager with infinite scroll, search, categories, favourites, public share links, and print-to-PDF. Features skeleton loading, toast notifications, and dark/light theme support.",
            link: "https://recipebox-frontend-1c6wl1ep7-azona001s-projects.vercel.app",
            tech: ["React", "Node.js", "Express", "MySQL", "Auth0", "Cloudinary", "PWA"],
            code: "https://github.com/Azona001/recipebox-frontend",
            img: recipebox,
           },
           {
              title: "TaskManager",
              desc: "Full-stack task management app for teams. Features a kanban board, project creation, team collaboration, and real-time updates via WebSockets — changes appear instantly across all connected users without a page refresh.",
              link: "#",
              tech: ["React", "Node.js", "Express", "MySQL", "Socket.io", "JWT"],
              code: "https://github.com/Azona001/TaskManager-App",
              img: taskmanager,
           },
           {
            title: "Movie App",
              desc: "A movie discovery app that lets users search films via The Movie Database API and stores user interaction data using Appwrite’s backend services",
              link: "https://movie-app-seven-kappa-73.vercel.app/",
              tech: ["React", "Tailwind CSS", "Appwrite", "TMDB API"],
              code: "https://github.com/Azona001/movie-app",
              img: movieapp,
           },
            {
              title: "Todo List App",
              desc: "Minimal yet polished todo app built with React. Supports adding, completing, and deleting tasks with smooth CSS animations. Data persists across sessions using localStorage.",
              link: "https://my-todo-psi-nine.vercel.app/",
              tech: ["React", "CSS"],
              code: "https://github.com/Azona001/MyTodo",
              img: todo,
            },
            {
              title: "Weather App",
              desc: "Real-time weather dashboard built with vanilla JavaScript. Fetches live conditions, temperature, humidity, and weather icons from the OpenWeather API based on city search. Focused on clean UI and handling async data gracefully.",
              link: "#",
              tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
              code: "https://github.com/Azona001/Weather001",
              img: weather,
            },
            //  {
            //   title: "Library App",
            //   desc: "Track books with add/edit/delete features and localStorage.",
            //   link: "#",
            //   tech: ["HTML", "CSS", "JavaScript"],
            //   code: "https://github.com/Azona001/MyLibrary",
            //   img: library,
            // },
        ];

        const handleClick = (isClicked) => {
            !isClicked ? setIsClicked(true) : setIsClicked(false);
    }

        const clicked = isClicked ? "nav reveal" : "nav" ;

    return (
        <div className="wrapper">
            <Nav isClicked={isClicked} onClick={ handleClick } clicked={ clicked }/>
           <Header />
            <main className="container">
             <About />
             <Skills />
             <Project title={"Projects"} info={cardData}/>
             <div className="contact-section-wrap">
               <Contact />
             </div>

             <Footer />
            </main>
            
           
            <BackToTop />
            <ScrollProgress />
            <CustomCursor />
        </div>
    );
};


export default App;