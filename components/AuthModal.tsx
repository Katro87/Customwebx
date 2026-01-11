
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Github, Facebook } from 'lucide-react';

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-auth', handler);
    return () => window.removeEventListener('open-auth', handler);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-sm" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative glass w-full max-w-md p-10 rounded-3xl border-white/10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00e5ff] to-[#7b1fa2]" />
        
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black mb-2">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-gray-400 text-sm">Join the CustomWebX community today.</p>
        </div>

        <div className="space-y-4 mb-8">
           <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#00e5ff] transition-all" />
           </div>
           <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#00e5ff] transition-all" />
           </div>
           <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#00e5ff] transition-all" />
           </div>
        </div>

        <button className="w-full py-4 bg-[#00e5ff] text-[#0a192f] rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(0,229,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all mb-8">
          {mode === 'login' ? 'LOGIN' : 'SIGN UP'}
        </button>

        <div className="relative mb-8">
           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
           <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0a192f] px-2 text-gray-500 font-bold">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
           <button className="flex items-center justify-center space-x-2 glass py-3 rounded-xl hover:bg-white/10 transition-all">
              <Github size={18}/>
              <span className="text-sm font-bold">GitHub</span>
           </button>
           <button className="flex items-center justify-center space-x-2 glass py-3 rounded-xl hover:bg-white/10 transition-all">
              <Facebook size={18}/>
              <span className="text-sm font-bold">Facebook</span>
           </button>
        </div>

        <p className="text-center text-sm text-gray-500">
           {mode === 'login' ? "Don't have an account?" : "Already have an account?"} 
           <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="ml-2 text-[#00e5ff] font-bold hover:underline">
              {mode === 'login' ? 'Sign Up' : 'Login'}
           </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthModal;
