import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full py-32 md:py-48 overflow-hidden border-t border-glass-border bg-[#030712]"
    >
      {/* Dynamic Background Elements replacing the water wave */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
              <MessageSquare className="text-teal-400" size={24} />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-white/50">Contact Me</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
            Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">conversation.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed font-light drop-shadow-md mx-auto max-w-2xl">
            My inbox is always open. Whether you have a question, a project idea, or just want to engineer something cool together—I'll try my best to get back to you!
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:13ruchitaiyer@gmail.com"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl relative group overflow-hidden"
          >
            {/* Button Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <Mail size={24} className="relative z-10" />
            <span className="relative z-10">Get In Touch</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
