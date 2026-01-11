
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, Terminal } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#00e5ff] to-[#7b1fa2] rounded-3xl blur-2xl opacity-20 animate-pulse" />
          <div className="relative aspect-square rounded-3xl overflow-hidden glass border-white/10 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-[#00e5ff]/20 rounded-full flex items-center justify-center border-2 border-[#00e5ff]/50 overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Katro87/project-assets/main/sufyan1.jpeg"
                  alt="User Avatar"
                  className="w-full h-full object-AI "
                />
              </div>

              <h2 className="text-3xl font-bold mb-2">Sufyan Rasheed</h2>
              <p className="text-[#00e5ff] font-medium tracking-widest uppercase text-sm">Digital Architect</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-[#00e5ff] font-bold mb-4 flex items-center">
            <span className="h-px w-8 bg-[#00e5ff] mr-4" />
            WHO I AM
          </h4>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Building Bridges Between Ideas and <span className="text-[#00e5ff]">Digital Reality</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I am a Full Stack Developer and UI/UX Specialist based in Pakistan, serving clients globally. My philosophy is simple: technology should empower, not complicate. I specialize in building intelligent web experiences that marry cutting-edge AI with practical business solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              { label: 'Experience', val: '4+ Years' },
              { label: 'Projects', val: '50+' },
              { label: 'Clients', val: '20+' },
              { label: 'Skills', val: '25+' }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-white">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 glass rounded-lg text-[#00e5ff]"><Rocket size={20} /></div>
              <div>
                <h4 className="font-bold mb-1">Driven by Innovation</h4>
                <p className="text-sm text-gray-400">Always learning the latest stacks to deliver future-proof solutions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 glass rounded-lg text-[#00e5ff]"><Terminal size={20} /></div>
              <div>
                <h4 className="font-bold mb-1">Full Stack Mastery</h4>
                <p className="text-sm text-gray-400">From complex backend architectures to pixel-perfect frontends.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-32">
        <h3 className="text-3xl font-black text-center mb-16">Technical <span className="text-[#00e5ff]">Arsenal</span></h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind', 'Next.js', 'MongoDB', 'PostgreSQL', 'Three.js', 'Gemini AI', 'GSAP', 'Figma'].map((skill, i) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 229, 255, 0.4)' }}
              className="glass p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center space-y-3 cursor-default"
            >
              <div className="w-10 h-10 bg-[#00e5ff]/10 rounded-xl flex items-center justify-center">
                <Cpu size={20} className="text-[#00e5ff]" />
              </div>
              <span className="text-sm font-bold text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const User = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

export default About;
