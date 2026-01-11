
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfos = [
    { icon: <Mail />, title: 'Email Me', value: 'customwebxcontact@gmail.com' },
    { icon: <Phone />, title: 'Call/WhatsApp', value: '+92 314 0465045' },
    { icon: <MapPin />, title: 'Location', value: 'Pakistan (Global Service)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h4 className="text-[#00e5ff] font-bold mb-4">GET IN TOUCH</h4>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Start Your <span className="text-[#00e5ff]">Digital Revolution?</span></h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Whether you have a fully-formed idea or just the beginnings of one, I'm here to help you bring it to life. Contact me through any of the channels below or use the form.
          </p>

          <div className="space-y-8">
            {contactInfos.map((info, i) => (
              <div key={i} className="flex items-center space-x-6">
                <div className="p-4 glass rounded-2xl text-[#00e5ff]">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">{info.title}</h4>
                  <p className="text-xl font-bold text-white">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-10 rounded-3xl border-white/10 relative"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
               <div className="w-20 h-20 bg-[#00ff88]/20 text-[#00ff88] rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle size={40} />
               </div>
               <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
               <p className="text-gray-400">Thank you for reaching out. Sufyan will get back to you within 24 hours.</p>
               <button onClick={() => setSubmitted(false)} className="px-8 py-3 glass rounded-xl text-[#00e5ff] font-bold border-[#00e5ff]/20">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-all"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Your Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-all"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Your Message</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="How can I help you today?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00e5ff] transition-all resize-none"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#00e5ff] text-[#0a192f] rounded-xl font-bold text-lg flex items-center justify-center space-x-2 shadow-[0_10px_30px_rgba(0,229,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
