
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constant';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
        <div>
          <h4 className="text-[#00e5ff] font-bold mb-4 flex items-center">
            <span className="h-px w-8 bg-[#00e5ff] mr-4" />
            MY PORTFOLIO
          </h4>
          <h2 className="text-4xl md:text-5xl font-black">Featured <span className="text-[#00e5ff]">Creations</span></h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-[#00e5ff] text-[#0a192f] shadow-[0_0_15px_#00e5ff]' : 'glass text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative glass rounded-3xl overflow-hidden border-white/5 hover:border-[#00e5ff]/40 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-black rounded-lg uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex space-x-3">
                    {project.github && <a href={project.github} className="text-gray-400 hover:text-[#00e5ff] transition-colors"><Github size={20} /></a>}
                    {project.link && <a href={project.link} className="text-gray-400 hover:text-[#00e5ff] transition-colors"><ExternalLink size={20} /></a>}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="flex items-center space-x-1 glass px-3 py-1 rounded-lg text-[10px] font-bold text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-[#00e5ff]" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
