
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, SERVICE_ICONS } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h4 className="text-[#00e5ff] font-bold mb-4">SOLUTIONS HUB</h4>
        <h2 className="text-4xl md:text-5xl font-black mb-6">Expertise That <span className="text-[#00e5ff]">Drives Growth</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">From concept to deployment, I provide full-spectrum digital services to help your business thrive in the modern era.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative glass p-8 rounded-3xl border-white/5 hover:border-[#00e5ff]/30 transition-all overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00e5ff]/5 rounded-full blur-3xl group-hover:bg-[#00e5ff]/10 transition-colors" />
            
            <div className="mb-8 p-4 glass w-fit rounded-2xl">
              {SERVICE_ICONS[service.icon]}
            </div>

            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">{service.description}</p>

            <ul className="space-y-4 mb-10">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm font-medium text-gray-300">
                  <CheckCircle2 size={16} className="text-[#00e5ff]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Investment</p>
                <p className="text-white font-black">{service.priceRange}</p>
              </div>
              <button className="p-3 bg-[#00e5ff]/10 text-[#00e5ff] rounded-xl hover:bg-[#00e5ff] hover:text-[#0a192f] transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 glass p-12 rounded-3xl text-center border-[#00e5ff]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/5 to-transparent pointer-events-none" />
        <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Don't see exactly what you're looking for? Let's discuss your unique project requirements and build something amazing together.</p>
        <button className="px-10 py-4 bg-[#00e5ff] text-[#0a192f] rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_20px_#00e5ff]">
          GET A FREE QUOTE
        </button>
      </div>
    </div>
  );
};

export default Services;
