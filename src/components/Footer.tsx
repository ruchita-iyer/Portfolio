import React, { useRef } from 'react';
import { Code2, User } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, href, className }: { children: React.ReactNode, href: string, className: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-glass-border bg-[#030712] pt-24 pb-8 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <a href="#home" className="text-3xl font-heading font-bold text-white mb-2 relative group">
            Ruchita<span className="text-primary">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <p className="text-foreground/60 text-sm">Building beautiful digital experiences.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6 relative z-20"
        >
          <MagneticButton 
            href="https://github.com/ruchita-iyer" 
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary hover:bg-white/10 transition-colors shadow-lg relative group"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <Code2 size={20} className="relative z-10 pointer-events-none" />
          </MagneticButton>
          <MagneticButton 
            href="https://www.linkedin.com/in/ruchita-iyer/" 
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary hover:bg-white/10 transition-colors shadow-lg relative group"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <User size={20} className="relative z-10 pointer-events-none" />
          </MagneticButton>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-glass-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50"
      >
        <p>&copy; {currentYear} Ruchita Iyer. All rights reserved.</p>
        <p className="group cursor-default">
          Designed with <span className="inline-block group-hover:animate-bounce text-rose-500">❤️</span> and built with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">React</span>.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;