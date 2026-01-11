
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Code, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer & AI Integration Specialist";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 inline-flex items-center space-x-2 px-4 py-2 glass rounded-full text-[#00e5ff] text-sm font-medium border-[#00e5ff]/20"
      >
        <Zap size={16} />
        <span>Welcome to the Future of Digital Experience</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
      >
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#7b1fa2] to-[#ff6b35]">Sufyan Rasheed</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-400 font-medium h-8 mb-12 fira-code"
      >
        {typedText}<span className="animate-pulse">|</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
      >
        <Link 
          to="/projects"
          className="group relative px-8 py-4 bg-[#00e5ff] text-[#0a192f] rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center">
            View My Projects <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </Link>
        <Link 
          to="/contact"
          className="px-8 py-4 glass rounded-xl font-bold text-lg border-white/10 hover:border-[#00e5ff]/50 transition-all text-white"
        >
          Work With Me
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full"
      >
        {[
          { icon: <Code className="text-[#00e5ff]" />, title: 'Clean Architecture', desc: 'Scalable, maintainable, and robust codebases.' },
          { icon: <Zap className="text-[#ff6b35]" />, title: 'High Performance', desc: 'Optimized for speed and flawless user experience.' },
          { icon: <Shield className="text-[#7b1fa2]" />, title: 'Secure Design', desc: 'Enterprise-grade security standards applied to every build.' }
        ].map((feature, i) => (
          <div key={i} className="glass p-8 rounded-2xl border-white/5 text-left hover:border-[#00e5ff]/30 transition-all">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
