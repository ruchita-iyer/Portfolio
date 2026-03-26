import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Coffee, Code2, Terminal, MonitorSmartphone } from 'lucide-react';
import aboutImg from '../images/me_about.jpg';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    { name: 'React.js & Next.js', icon: <MonitorSmartphone size={20} /> },
    { name: 'TypeScript / ES6+', icon: <Code2 size={20} /> },
    { name: 'CSS3 & Tailwind', icon: <Terminal size={20} /> },
    { name: 'MERN Stack', icon: <MonitorSmartphone size={20} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bio Card - Takes up 2 columns on desktop */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:bg-white/10 transition-colors duration-700 cursor-default">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white relative z-10">
              Frontend Engineer specializing in scalable, high-performance web applications.
            </h3>
            
            <div className="space-y-6 text-lg text-foreground/80 relative z-10 leading-relaxed font-light">
              <p>
                I am a Frontend Engineer with 4+ years of experience building scalable, high-performance web applications using React, TypeScript, Next.js, and modern JavaScript (ES6+).
              </p>
              <p>
                My background in product design strengthens collaboration with Product, Design, and Engineering teams. I have a proven track record of shipping production features, optimizing Core Web Vitals, and focusing on accessibility (WCAG), design systems, and pixel-perfect implementations.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 relative z-10">
              <a 
                href="https://drive.google.com/file/d/1Am8vkjcnFVdAic8bHngqfer37kvL4Nwj/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Photo Card */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-4 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             {aboutImg ? (
               <img src={aboutImg} alt="Ruchita" className="w-full h-full object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700" />
             ) : (
               <div className="w-full h-full min-h-[300px] rounded-2xl bg-white/5 flex items-center justify-center text-foreground/50">Portrait</div>
             )}
          </motion.div>

          {/* Details Card */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/10 transition-colors duration-700 cursor-default">
            <h4 className="text-xl font-bold mb-6 text-white">Quick Facts</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Location</p>
                  <p className="font-medium text-white">Boston MA, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Email</p>
                  <a href="mailto:13ruchitaiyer@gmail.com" className="font-medium text-white hover:text-purple-400 transition-colors">13ruchitaiyer@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <Coffee size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">On a Break?</p>
                  <p className="font-medium text-white">Reading thriller novels</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Carousel / Grid Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-card rounded-3xl p-8 group hover:bg-white/5 transition-colors duration-700">
            <h4 className="text-xl font-bold mb-6 text-white">Core Competencies</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 items-center text-center hover:bg-gradient-to-t hover:from-primary/20 hover:to-purple-500/20 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer">
                  <div className="text-foreground/50 group-hover:text-primary transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm text-white/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;