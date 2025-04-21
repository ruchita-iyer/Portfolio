import React, { useState } from 'react';
import '../styles/Experience.css';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('work');
  
  const workExperiences: Experience[] = [
    {
      id: 1,
      title: 'Frontend Engineer Intern',
      company: 'Imex Cargo',
      location: 'Remote, USA',
      period: 'Jan 2024 - Jun 2024',
      description: [
        'Developed and enhanced front-end components using WordPress, JavaScript, HTML5, and CSS3, improving UX and boosting customer engagement by 20%',
        'Built and deployed an internal application using Zoho Creator and HTML, saving employees 10+ hours monthly by streamlining order management workflows',
        'Collaborated with cross-functional teams to optimize SEO strategies and website performance',
        
      ],
      technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Associate Software Engineer',
      company: 'Cognizant',
      location: 'Bengaluru, India',
      period: 'Sep 2019 - Aug 2022',
      description: [
        'Engineered more than 50 SAP CPI workflows using Java and Groovy to streamline payroll data systems',
        'Collaborated with development and support teams to improve workflows based on user feedback via JIRA change requests, achieving a 15% improvement in process efficiency',
        'Conducted root cause analysis and pioneered solutions to improve SLA by 25%, enhancing user satisfaction',
        'Participated in agile development processes with bi-weekly sprints',
      ],
      technologies: ['Java', 'Groovy', 'XML', 'SAP CPI', 'Jira'],
    },
    {
      id: 3,
      title: 'Full stack Engineer Intern',
      company: 'Cognizant',
      location: 'Bengaluru, India',
      period: 'Jan 2019 - May 2019',
      description: [
        'Developed a web application using HTML, CSS, Java, Spring, Hibernate, and JavaScript, allowing customers to make purchases or modify orders from a catalog of over 100 items, enhancing user engagement',
        'Worked alongside 2 developers to implement APIs which helped the internal analytics team to increase the reporting speed by 20%',
        
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Sprin Boot', 'Hibernate'],
    },
  ];
  
  const educationExperiences: Experience[] = [
    {
      id: 1,
      title: 'Master of Science in Information Systems',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: '2022 - 2024',
      description: [
        'Specialized in Web Development and User Interface Design',
                
      ],
    },
    {
      id: 2,
      title: 'Bachelor of Engineering in Computer Science',
      company: 'BMS Institute of Technology',
      location: 'Bengaluru, India',
      period: '2015 - 2019',
      description: [
        'Coursework included Data Structures, Algorithms, Web Development, and Database Systems',
        
      ],
    },
  ];
  
  const experiences = activeTab === 'work' ? workExperiences : educationExperiences;
  
  return (
    <section id="experience" className="experience">
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <h2>My Experience</h2>
          <div className="underline"></div>
        </div>
        
        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              key={exp.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <div className="timeline-meta">
                    <span className="timeline-location">
                      <i className="fas fa-map-marker-alt"></i> {exp.location}
                    </span>
                    <span className="timeline-period">
                      <i className="fas fa-calendar-alt"></i> {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="timeline-body">
                  <ul className="timeline-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="timeline-tech">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;