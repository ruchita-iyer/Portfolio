import React from 'react';
import '../styles/Hero.css';
import meImage from '../images/me.png';

import TypedText from './TypedText';

const Hero: React.FC = () => {
  const typedTexts = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "React Specialist",
    "Web Designer"
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Ruchita Iyer</span></h1>
          <h2>
            <TypedText 
              textArray={typedTexts} 
              typingSpeed={100} 
              deletingSpeed={50} 
              delayBetweenTexts={2000} 
            />
          </h2>
          <p>
            I create engaging and responsive web experiences with clean, efficient code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            {/* <a href="#contact" className="btn btn-secondary">Contact Me</a> */}
          </div>
        </div>
        <div className="hero-image">
          {/* <div className="placeholder-image"></div> */}
          <img src={meImage} alt="Professional headshot" className="hero-img" />
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about">
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;