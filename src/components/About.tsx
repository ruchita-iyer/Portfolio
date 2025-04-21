import React from 'react';
import '../styles/About.css';
import aboutImg from '../images/me_about.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            {/* You can add your profile image here */}
            {/* <div className="about-img-placeholder"> */}
       
            <img src={aboutImg} alt="my portrait" className="about-img"/>
           
          </div>
          
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript,
              TypeScript, and React. I love creating intuitive and engaging user experiences.
            </p>
            <p>
              With a background in software devlopment, I bring a unique perspective to my 
              development work, focusing on performance, accessibility, and clean code practices.
            </p>
            <p>
              When I'm not coding, you can find me Reading thiller novels or watching thriller shows.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-title">Name:</span>
                <span className="detail-value">Ruchita Iyer</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Email:</span>
                <span className="detail-value">13ruchitaiyer@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Location:</span>
                <span className="detail-value">Boston MA, USA</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Availability:</span>
                <span className="detail-value">Open to Opportunities</span>
              </div>
            </div>
            
            <a href="https://drive.google.com/file/d/1Am8vkjcnFVdAic8bHngqfer37kvL4Nwj/view?usp=drive_link" className="btn btn-primary" download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;