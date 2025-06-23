import React from "react";
import Card from "./Card";
import { useInViewAnimation } from '../hooks/useInViewAnimation';



const Project = ({title, info}) => {

  const { ref, className } = useInViewAnimation("animate__fadeInUp");

  return (
      <section ref={ref} className= {`${className} project-container `} id="project-contain" >
                    <h2 id="project">{title}</h2>
                    <br></br>
                    <div className="grid">
                    {info.map((item,i) => (
                      <Card key={i} {...item} />
                    ))}
                    </div>
       </section>
  );
};

export default Project;