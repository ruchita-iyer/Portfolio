import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

interface Skill {
  name: string;
  level: number;
  icon?: string;
  color?: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const technicalSkills: Skill[] = [
    { name: 'HTML', level: 90, color: '#E44D26' },
    { name: 'CSS', level: 85, color: '#264DE4' },
    { name: 'JavaScript', level: 80, color: '#F0DB4F' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'Redux', level: 70, color: '#764ABC' },
    { name: 'Responsive Design', level: 90, color: '#FF6B6B' },
    { name: 'Git', level: 75, color: '#F05032' },
  ];
  
  const softSkills: Skill[] = [
    { name: 'Problem Solving', level: 90, color: '#41B883' },
    { name: 'Communication', level: 85, color: '#FF9A8B' },
    { name: 'Teamwork', level: 90, color: '#74C0FC' },
    { name: 'Time Management', level: 80, color: '#9775FA' },
    { name: 'Adaptability', level: 85, color: '#66D9E8' },
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-hexagon-grid">
              {technicalSkills.map((skill, index) => (
                <div 
                  className="skill-hexagon" 
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    backgroundColor: skill.color
                  }}
                >
                  <div className="hexagon-content">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-card-grid">
              {softSkills.map((skill, index) => (
                <div 
                  className="skill-card" 
                  key={index}
                  style={{
                    animationDelay: `${(index + technicalSkills.length) * 0.1}s`,
                    borderColor: skill.color
                  }}
                >
                  <div className="skill-card-content">
                    <span className="skill-name" style={{ color: skill.color }}>{skill.name}</span>
                    <div className="skill-circle" style={{ background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, #f0f0f0 0deg)` }}>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;