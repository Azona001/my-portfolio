import React from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const About = () => {

     const { ref, className } = useInViewAnimation('animate__fadeInUp');
    
  return (
      <section className={`${className} intro`} id='about' ref={ref}>
                    <h2 >About Me</h2>
                    <p ref={ref} className={`p-intro ${className} animate__delay-1s`} >
                         I'm a frontend developer with a background in animation and a recent
          graduate of Simplilearn's Full-Stack Development Bootcamp. I enjoy
          building responsive, accessible, and visually engaging websites. After
          years of bringing stories to life through animation, I now bring that
          creative energy into writing clean, user-friendly code.
                    </p>
                    <p ref={ref} className={`p-intro ${className} animate__delay-2s`}>
                        Currently, I'm focused on improving my JavaScript skills, exploring modern frameworks, and contributing to real-world projects.
                    </p>
        </section>

  );
};

export default About;