
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Home, User, Briefcase, Settings, ShoppingBag, 
  LogIn, Mail, MessageSquare, ChevronRight, Github, 
  Linkedin, Facebook, Phone, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import AuthModal from './components/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', path: '/', icon: <Home size={18} /> },
    { name: 'ABOUT', path: '/about', icon: <User size={18} /> },
    { name: 'PROJECTS', path: '/projects', icon: <Briefcase size={18} /> },
    { name: 'SERVICES', path: '/services', icon: <Settings size={18} /> },
    { name: 'CONTACT', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md h-16 shadow-lg border-b border-white/10' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00e5ff] to-[#7b1fa2] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">X</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white group-hover:text-[#00e5ff] transition-colors">
            CustomWeb<span className="text-[#00e5ff]">X</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`flex items-center space-x-1 text-sm font-medium tracking-wide transition-all hover:text-[#00e5ff] relative py-1 ${location.pathname === item.path ? 'text-[#00e5ff]' : 'text-gray-300'}`}
            >
              {item.icon}
              <span>{item.name}</span>
              {location.pathname === item.path && (
                <motion.div layoutId="navUnderline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              )}
            </Link>
          ))}
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-auth'))} className="px-5 py-2 glass rounded-full text-sm font-semibold hover:bg-[#00e5ff] hover:text-[#0a192f] transition-all border-[#00e5ff]/30">
            LOGIN
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#00e5ff]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0a192f] border-b border-white/10 p-6 flex flex-col space-y-4"
          >
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-lg font-medium text-gray-300 hover:text-[#00e5ff]"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <button className="w-full py-3 bg-[#00e5ff] text-[#0a192f] rounded-xl font-bold">
              GET STARTED
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BackgroundEffects = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[#0a192f]" />
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7b1fa2]/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00e5ff]/10 blur-[150px] rounded-full" />
    <div className="grid-bg absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <BackgroundEffects />
        <Navbar />
        
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="bg-[#0a192f] border-t border-white/5 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <span className="text-[#00e5ff]">CustomWebX</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering businesses with intelligent digital solutions. Designed and engineered by Sufyan Rasheed.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 glass rounded-lg hover:text-[#00e5ff] transition-colors"><Github size={18}/></a>
                <a href="#" className="p-2 glass rounded-lg hover:text-[#00e5ff] transition-colors"><Linkedin size={18}/></a>
                <a href="#" className="p-2 glass rounded-lg hover:text-[#00e5ff] transition-colors"><Facebook size={18}/></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-[#00e5ff]">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#00e5ff]">About Sufyan</Link></li>
                <li><Link to="/projects" className="hover:text-[#00e5ff]">Portfolio</Link></li>
                <li><Link to="/services" className="hover:text-[#00e5ff]">Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Custom Websites</li>
                <li>AI Chatbots</li>
                <li>API Integration</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail size={14} className="text-[#00e5ff]"/>
                  <span>customwebxcontact@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={14} className="text-[#00e5ff]"/>
                  <span>+92 314 0465045</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} CustomWebX. All Rights Reserved. Created by Sufyan Rasheed.
          </div>
        </footer>

        <ChatBot />
        <AuthModal />
      </div>
    </Router>
  );
};

export default App;
