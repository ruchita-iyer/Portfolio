import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  gradient: string;
  textColor: string;
  category: 'work' | 'education';
  spanClass: string; 
}

const bentoExperiences: ExperienceData[] = [
  {
    id: 'w1',
    title: 'Frontend React Developer',
    company: 'ImEx Cargo',
    location: 'Boston, MA',
    period: 'Feb 2025 - Present',
    description: [
      'Architected a real-time shipment-tracking dashboard using Figma, React.js, and TypeScript to help customers monitor cargo movement, delivery milestones, and transit status.',
      'Engineered a dynamic booking and scheduling module with multi-step workflows, input validation, and conditional rendering to simplify cargo reservation processes for logistics operators.',
      'Designed responsive, mobile-first logistics interfaces using Tailwind CSS, Sass/SCSS, and CSS Modules, ensuring seamless access for field agents using tablets and mobile devices at warehouses and ports.',
    ],
    technologies: ['React.js', 'TypeScript', 'Figma', 'Tailwind CSS', 'Sass/SCSS', 'CSS Modules'],
    gradient: 'from-blue-400 to-indigo-500',
    textColor: 'text-blue-400',
    category: 'work',
    spanClass: 'md:col-span-2 md:row-span-2', // Large Focus Card
  },
  {
    id: 'e1',
    title: 'MS in Info Systems',
    company: 'Northeastern Univ.',
    location: 'Boston, MA',
    period: 'Expected 2025',
    description: [
      'Focusing on full-stack web development and scalable system architecture.',
    ],
    technologies: ['Web Dev', 'DB Design'],
    gradient: 'from-rose-400 to-red-500',
    textColor: 'text-rose-400',
    category: 'education',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'w2',
    title: 'Frontend React Developer',
    company: 'Nomad Health',
    location: 'New York, NY',
    period: 'Aug 2023 - Dec 2024',
    description: [
      'Developed a clinician onboarding portal using React.js and TypeScript, streamlining credential submission, license verification, document upload, and compliance tracking for healthcare staffing workflows.',
      'Built an advanced job search and filtering interface with faceted search, geolocation-based results, specialty matching, and saved search functionality to improve clinician-job matching efficiency.',
      'Implemented Context API and custom React Hooks for managing complex multi-step credentialing forms, session persistence, and shared application state across the clinician dashboard.',
    ],
    technologies: ['React.js', 'TypeScript', 'Context API', 'React Hooks', 'Geolocation'],
    gradient: 'from-emerald-400 to-teal-500',
    textColor: 'text-emerald-400',
    category: 'work',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'w3',
    title: 'Software Engineer - Frontend React',
    company: 'Cognizant',
    location: 'Bengaluru, India',
    period: 'Sep 2019 - Aug 2022',
    description: [
      'Developed responsive user interfaces and interactive dashboards using React.js, TypeScript, and JavaScript to enhance user experience and data visualization.',
      'Collaborated with cross-functional teams in an Agile environment to design, build, and deploy reusable UI components and integrate with RESTful APIs.',
      'Optimized front-end performance, resolving rendering issues and improving site load speed and responsiveness across devices.',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux', 'JavaScript', 'Agile'],
    gradient: 'from-purple-400 to-pink-500',
    textColor: 'text-purple-400',
    category: 'work',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'e2',
    title: 'BE in Computer Science',
    company: 'BMS Institute',
    location: 'Bengaluru, India',
    period: '2015 - 2019',
    description: [
      'Graduated with distinct honors.',
    ],
    technologies: ['Data Structures', 'Algorithms'],
    gradient: 'from-amber-400 to-orange-500',
    textColor: 'text-amber-400',
    category: 'education',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'w4',
    title: 'Associate Software Engineer- Frontend React',
    company: 'Smallcase',
    location: 'Bengaluru, India',
    period: 'Jun 2018 - Aug 2019',
    description: [
      'Designed and implemented interactive financial dashboards and micro-frontends using React.js, Redux, and JavaScript (ES6+).',
      'Collaborated with designers and product managers to build reusable component libraries and unified design patterns across investor tools.',
      'Improved web application performance and modularity, contributing to a seamless and responsive platform UI.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'REST APIs', 'Webpack'],
    gradient: 'from-fuchsia-400 to-purple-500',
    textColor: 'text-fuchsia-400',
    category: 'work',
    spanClass: 'md:col-span-3 md:row-span-1', // Full width span at the bottom
  },
];

const BentoCard: React.FC<{ exp: ExperienceData; index: number }> = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
      className={`relative group overflow-hidden rounded-3xl glass-card border border-white/10 bg-background/40 hover:bg-white/5 transition-all duration-500 flex flex-col p-6 md:p-8 ${exp.spanClass}`}
      style={{ boxShadow: '0 8px 30px -10px rgba(0,0,0,0.5)' }}
    >
      {/* Top Gradient Border Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
      {/* Inner Glow Reveal */}
      <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}></div>

      {/* Header section with icon and date */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg text-white">
          {exp.category === 'work' ? <Briefcase size={22} className="opacity-80" /> : <GraduationCap size={22} className="opacity-80" />}
        </div>
        {exp.period && (
          <div className="flex items-center gap-2 text-xs font-bold text-foreground/60 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm tracking-wide">
            <Calendar size={12} />
            {exp.period}
          </div>
        )}
      </div>

      <h3 className="text-xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:scale-[1.01] origin-left transition-transform duration-300">{exp.title}</h3>
      <div className={`text-md md:text-lg font-bold mb-4 ${exp.textColor} tracking-wide`}>{exp.company}</div>
      
      <div className="flex items-center gap-1.5 text-xs text-foreground/50 mb-6 font-medium">
        <MapPin size={14} className="opacity-70" />
        {exp.location}
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {exp.description.map((item, idx) => (
            <li key={idx} className="flex items-start text-foreground/70 text-[13px] md:text-[14.5px] leading-relaxed group/item transition-colors duration-300 group-hover:text-foreground/90">
              <ChevronRight size={16} className="mt-0.5 mr-2 shrink-0 text-white/30 group-hover:text-white/60 transition-colors" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {exp.technologies && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 relative z-10">
          {exp.technologies.map(tech => (
            <span key={tech} className="text-[11px] font-bold px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/5 text-white/80 transition-all duration-300 group-hover:border-white/20 group-hover:bg-black/60 shadow-inner">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-glass/10 border-y border-glass-border overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Work Experience Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-primary">
              <Briefcase size={22} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Work Experience</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(0,auto)] gap-6 relative">
            {bentoExperiences
              .filter(exp => exp.category === 'work')
              .map((exp, index) => (
                <BentoCard key={exp.id} exp={exp} index={index} />
              ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-rose-400">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {bentoExperiences
              .filter(exp => exp.category === 'education')
              .map((exp, index) => (
                <BentoCard key={exp.id} exp={exp} index={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;