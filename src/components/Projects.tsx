import React, { useState } from 'react';
import '../styles/Projects.css';
import memory from '../images/memory.png'
import snakeImg from '../images/snake.png';
import dalleImg from '../images/dalle.png';
import giveawayImg from '../images/giveaway.png';
import hotelImg from '../images/hotel.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Memory Master Game',
      description: 'A brain-teasing card matching game where players flip pairs of cards to find matches, testing and improving memory skills with increasing difficulty levels.',
      technologies: ['TypeScript', 'HTML', 'CSS', 'Node'],
      image: memory,
      liveUrl: 'https://memory-game-six-virid.vercel.app/',
      repoUrl: 'https://github.com/ruchita-iyer/Memory-game'
    },
    {
      id: 2,
      title: 'NeuroSnake Game',
      description: 'A modern take on the classic Snake game where players navigate a snake to collect food and grow longer without colliding with walls or itself.',
      technologies: ['TypeScript', 'HTML', 'CSS', 'Node'],
      image: snakeImg,
      liveUrl: 'https://snake-game-nine-rose.vercel.app/',
      repoUrl: 'https://github.com/ruchita-iyer/Snake-game'
    },
    {
      id: 3,
      title: 'Full-Stack AI Image Generation App',
      description: 'MERN stack project with OpenAI Dall-e API to generate images',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenAI API', 'React', 'Express', 'MongoDB'],
      image: dalleImg,
      // liveUrl: '#',
      repoUrl: 'https://github.com/ruchita-iyer/Dall-e'
    },
    {
      id: 4,
      title: 'Giveaway App',
      description: 'iOS App built using Swift to buy or sell 2nd hand items in your neighbourhood',
      technologies: ['Swift', 'Xcode'],
      image: giveawayImg,
      // liveUrl: '#',
      repoUrl: 'https://github.com/ruchita-iyer/Giveaway-app'
    },
    {
      id: 3,
      title: 'Hotel booking website',
      description: 'MERN stack project for booking and managing hotels',
      technologies: ['JavaScript', 'HTML', 'CSS',  'React', 'Express', 'MongoDB'],
      image: hotelImg,
      // liveUrl: '#',
      repoUrl: 'https://github.com/ruchita-iyer/Hotel-booking-website'
    },
    // Add more projects as needed
  ];
  
  const filters = ['all', 'React', 'TypeScript', 'JavaScript'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="project-filters">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;