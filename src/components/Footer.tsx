import React from 'react';
import { Code2, User } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-glass-border bg-background pt-16 pb-8 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-heading font-bold text-white mb-2">
            Ruchita<span className="text-primary">.</span>
          </a>
          <p className="text-foreground/60 text-sm">Building beautiful digital experiences.</p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/ruchita-iyer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary transition-all hover:-translate-y-1 shadow-lg"
          >
            <Code2 size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ruchita-iyer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary transition-all hover:-translate-y-1 shadow-lg"
          >
            <User size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-glass-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
        <p>&copy; {currentYear} Ruchita Iyer. All rights reserved.</p>
        <p>Designed with ❤️ and built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;