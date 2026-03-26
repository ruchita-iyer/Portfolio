import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import meImage from '../images/me.png';
import ThreeDBackground from './ThreeDBackground';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      {/* 3D Morphing Sphere Background */}
      <ThreeDBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block border border-glass-border bg-glass px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Frontend Engineer & UI/UX Enthusiast</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">digital</span><br/>experiences.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg leading-relaxed">
            I'm Ruchita Iyer, building responsive, scalable, and beautifully designed web applications with a focus on seamless user interactions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400 }} href="#projects" className="group flex items-center gap-2 bg-gradient-to-r from-primary to-purple-500 hover:from-primary hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/25 hover:shadow-primary/50">
              View Work <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400 }} href="#about" className="flex items-center gap-2 bg-transparent border-2 border-glass-border hover:bg-white/5 hover:border-white/30 text-foreground px-8 py-4 rounded-full font-bold transition-all">
              About Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-2xl opacity-20"></div>
            <img 
              src={meImage} 
              alt="Ruchita Iyer" 
              className="w-full h-full object-cover rounded-full border border-glass-border p-2 bg-background/50 backdrop-blur-md shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;