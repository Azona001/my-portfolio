import React from "react";
import Card from "./Card";

const Project = ({title, info}) => {
  return (
      <section className="project-container">
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