import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import memory from '../images/memory.png'
import snakeImg from '../images/snake.png';
import dalleImg from '../images/dalle.png';
import giveawayImg from '../images/giveaway.png';
import hotelImg from '../images/hotel.png';
import flavourFusionImg from '../images/flavourfusion.png';

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
      title: 'Flavour Fusion',
      description: 'Built a full-stack Next.js app with Gemini AI generating dynamic content, deployed on Vercel with responsive Tailwind CSS/ShadCN UI across devices.',
      technologies: ['Next.js', 'React', 'Node.js', 'Gemini AI', 'Firebase studio'],
      image: flavourFusionImg,
      liveUrl: 'https://flavour-fusion-inky.vercel.app/',
      repoUrl: 'https://github.com/ruchita-iyer/Flavour-Fusion'
    },
    {
      id: 2,
      title: 'Memory Master Game',
      description: 'Built an interactive TypeScript game with progressive difficulty and responsive UI, demonstrating strong fundamentals in core web technologies.',
      technologies: ['TypeScript', 'HTML', 'CSS'],
      image: memory,
      liveUrl: 'https://memory-game-six-virid.vercel.app/',
      repoUrl: 'https://github.com/ruchita-iyer/Memory-game'
    },
    {
      id: 3,
      title: 'NeuroSnake Game',
      description: 'A modern take on the classic Snake game where players navigate a snake to collect food.',
      technologies: ['TypeScript', 'HTML/CSS', 'Node'],
      image: snakeImg,
      liveUrl: 'https://snake-game-nine-rose.vercel.app/',
      repoUrl: 'https://github.com/ruchita-iyer/Snake-game'
    },
    {
      id: 4,
      title: 'AI Image Generation App',
      description: 'Shipped a MERN stack app with Express middleware for optimized API performance, featuring reusable React component architecture and clean state management.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI'],
      image: dalleImg,
      repoUrl: 'https://github.com/ruchita-iyer/Dall-e'
    },
    {
      id: 5,
      title: 'Giveaway App',
      description: 'Native iOS application built using Swift to facilitate buying and selling within local neighborhoods.',
      technologies: ['Swift', 'Xcode', 'iOS'],
      image: giveawayImg,
      repoUrl: 'https://github.com/ruchita-iyer/Giveaway-app'
    },
    {
      id: 6,
      title: 'Hotel Booking API',
      description: 'Comprehensive MERN stack system for managing hotel reservations, users, and room availability.',
      technologies: ['JavaScript', 'React', 'Express', 'MongoDB'],
      image: hotelImg,
      repoUrl: 'https://github.com/ruchita-iyer/Hotel-booking-website'
    }
  ];
  
  const filters = ['all', 'React', 'TypeScript', 'AI', 'Node', 'MongoDB', 'Swift'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <motion.button 
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg shadow-primary/30 border border-transparent' 
                  : 'bg-glass border border-glass-border text-foreground/80 hover:text-white hover:bg-glass/80 hover:border-white/20'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-3xl overflow-hidden glass-card flex flex-col h-full border border-glass-border/50 hover:border-primary/50 relative bg-background/50 backdrop-blur-xl"
                style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)' }}
              >
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative h-64 overflow-hidden bg-background">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90"></div>
                  
                  {/* Action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-sm z-20">
                    {project.liveUrl && (
                      <motion.a 
                        whileHover={{ scale: 1.1, rotate: 5 }} 
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                        className="p-4 bg-gradient-to-r from-primary to-indigo-500 text-white rounded-full shadow-xl shadow-primary/30"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    )}
                    {project.repoUrl && (
                      <motion.a 
                        whileHover={{ scale: 1.1, rotate: -5 }} 
                        whileTap={{ scale: 0.9 }}
                        href={project.repoUrl} target="_blank" rel="noopener noreferrer" 
                        className="p-4 bg-white text-black rounded-full shadow-xl"
                      >
                        <Code2 size={24} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-transparent group-hover:from-white/10 group-hover:to-primary/5 transition-colors duration-700">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{project.title}</h3>
                  <p className="text-foreground/70 text-[15px] mb-8 flex-grow leading-relaxed group-hover:text-foreground/90 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;