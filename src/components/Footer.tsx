import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Ruchita Iyer</a>
          </div>
          
          <div className="footer-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/ruchita-iyer" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ruchita-iyer/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear}</p>
          <p className="credits">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;