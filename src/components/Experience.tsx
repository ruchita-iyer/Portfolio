import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  gradient: string;
  glowColor: string;
}

const workExperiences: ExperienceData[] = [
  {
    id: 1,
    title: 'Frontend Engineer',
    company: 'ImEx Cargo',
    location: 'Remote, USA',
    period: 'Apr 2025 - Feb 2026',
    description: [
      'Increased user engagement by 37% and reduced task completion time 25% by building and shipping production React/TypeScript components for an enterprise logistics platform',
      'Cut page load time 35% and improved Core Web Vitals scores by implementing lazy loading, code splitting, and render optimization across devices and browsers',
      'Achieved 95+ Lighthouse accessibility scores by building responsive interfaces following WCAG 2.1, tested across screen readers, keyboard navigation, and multiple viewport sizes',
      'Improved UI consistency and reduced frontend regressions by creating a reusable component library used across 4 product teams',
      'Measured feature impact on activation and retention by partnering with Product, Design, and Analytics to run A/B experiments using GA4',
    ],
    technologies: ['React', 'TypeScript', 'WCAG 2.1', 'Core Web Vitals'],
    gradient: 'from-blue-400 to-indigo-500',
    glowColor: 'rgba(96,165,250,0.5)',
  },
  {
    id: 2,
    title: 'Frontend Engineer Intern',
    company: 'ImEx Cargo',
    location: 'Remote, USA',
    period: 'Jan 2024 - Jun 2024',
    description: [
      'Cut page load time 33% and increased engagement by 20% by building scalable, responsive React components and using Google Analytics to find user drop-off points',
      'Saved the operations team 10+ hours per month by shipping 3 internal tools using vanilla JavaScript and DOM manipulation to automate data entry workflows',
      'Grew organic traffic 50% over 6 months by driving SEO optimization including semantic HTML, meta tag structure, and structured data',
    ],
    technologies: ['React', 'JavaScript', 'Google Analytics', 'SEO'],
    gradient: 'from-emerald-400 to-teal-500',
    glowColor: 'rgba(52,211,153,0.5)',
  },
  {
    id: 3,
    title: 'Associate Software Engineer',
    company: 'Cognizant',
    location: 'Bengaluru, India',
    period: 'Sep 2019 - Aug 2022',
    description: [
      'Engineered 50+ workflow integrations in Java and Groovy for a healthcare client supporting 10,000+ users, improving payroll processing efficiency 15%',
      'Built and maintained web-facing dashboards and internal tools, collaborating cross-functionally with developers, QA, and stakeholders in Agile sprints',
      'Delivered iterative enhancements driven by data and stakeholder feedback, contributing to CI/CD deployment cycles and continuous improvement practices',
    ],
    technologies: ['Java', 'Groovy', 'Agile', 'CI/CD'],
    gradient: 'from-purple-400 to-pink-500',
    glowColor: 'rgba(192,132,252,0.5)',
  },
  {
    id: 4,
    title: 'Software Engineer Intern',
    company: 'Cognizant',
    location: 'Bengaluru, India',
    period: 'Jan 2019 - May 2019',
    description: [
      'Supported 100+ product workflows by building a full-stack web application with React, Java, Spring, and MySQL using reusable component architecture',
      'Improved reporting accuracy by 20% by developing reusable React components and RESTful APIs',
    ],
    technologies: ['React', 'Java', 'Spring', 'MySQL'],
    gradient: 'from-amber-400 to-orange-500',
    glowColor: 'rgba(251,191,36,0.5)',
  },
];

const educationExperiences: ExperienceData[] = [
  {
    id: 1,
    title: 'MS in Information Systems',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: '',
    description: [],
    gradient: 'from-rose-400 to-red-500',
    glowColor: 'rgba(251,113,133,0.5)',
  },
  {
    id: 2,
    title: 'BE in Computer Science and Engineering',
    company: 'BMS Institute of Technology and Management',
    location: 'Bengaluru, India',
    period: '',
    description: [],
    gradient: 'from-amber-400 to-orange-500',
    glowColor: 'rgba(251,191,36,0.5)',
  },
];

const ExperienceCard: React.FC<{ exp: ExperienceData; index: number }> = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="relative pl-8 md:pl-10 group"
    >
      {/* Timeline Line (connects nodes) */}
      <div className="absolute left-0 top-12 bottom-0 w-px bg-glass-border group-last:bg-gradient-to-b group-last:from-glass-border group-last:to-transparent"></div>

      {/* Glowing Node */}
      <div className="absolute left-[-5px] top-10 flex items-center justify-center z-20">
        <motion.div 
          whileHover={{ scale: 1.5 }}
          className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.gradient} border-2 border-background`}
          style={{ boxShadow: `0 0 15px ${exp.glowColor}` }}
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.gradient} animate-ping opacity-50`}></div>
        </motion.div>
      </div>

      {/* Card Body */}
      <motion.div 
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 z-10 bg-background/40 hover:bg-gradient-to-br hover:from-white/10 hover:to-background/80 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer"
        style={{ boxShadow: '0 8px 30px -10px rgba(0,0,0,0.5)' }}
      >
        {/* Animated gradient top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{exp.title}</h3>
        
        <div className={`font-bold py-1 text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`}>{exp.company}</div>
        
        <div className="flex flex-wrap gap-3 text-sm text-foreground/60 mb-5 bg-white/5 inline-flex p-2 rounded-lg backdrop-blur-sm border border-white/5 items-center">
          <div className="flex items-center gap-1.5"><Calendar size={14} className="text-foreground/80" />{exp.period}</div>
          <div className="w-px h-3 bg-white/20"></div>
          <div className="flex items-center gap-1.5"><MapPin size={14} className="text-foreground/80" />{exp.location}</div>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.description.map((item, idx) => (
            <li key={idx} className="flex items-start text-foreground/80 text-[14px] md:text-[15px] leading-relaxed group/item">
              <ChevronRight size={16} className={`mt-0.5 mr-2 shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {exp.technologies && (
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map(tech => (
              <span key={tech} className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 shadow-sm leading-none flex items-center justify-center">
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-glass/10 border-y border-glass-border overflow-hidden">
      {/* Background glow ambiance */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey & Milestones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-rose-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
          {/* Work Experience Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10 pl-2 lg:pl-0"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/20">
                <Briefcase className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold break-words">Work Experience</h3>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {workExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10 pl-2 lg:pl-0 mt-8 lg:mt-0"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/20 border border-rose-500/30 shadow-lg shadow-rose-500/20">
                <GraduationCap className="text-rose-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {educationExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;