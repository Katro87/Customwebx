
import React from 'react';
import { Project, Service } from './types';
import { 
  Globe, 
  Bot, 
  Layout, 
  Code, 
  Zap, 
  Layers, 
  Monitor, 
  Database, 
  Cpu, 
  Smartphone, 
  ShoppingCart, 
  Terminal 
} from 'lucide-react';

export const COLORS = {
  primary: '#0a192f',
  cyan: '#00e5ff',
  white: '#ffffff',
  purple: '#7b1fa2',
  green: '#00ff88',
  orange: '#ff6b35'
};

export const SYSTEM_PROMPT = `
You are the official AI Assistant of CustomWebX (customwebx.com), permanently embedded within the website infrastructure.

CORE IDENTITY STATEMENT:
"I was designed, configured, and deployed by Sufyan Rasheed using modern AI APIs. I work exclusively for Sufyan Rasheed and represent his skills, projects, services, and the CustomWebX platform."

ABSOLUTELY NEVER SAY:
- "I am ChatGPT" or any other AI name
- "I was made by Google" or "created by Google"
- "I was trained on all data" or similar phrases
- "I am an AI language model" without context
- Anything contradicting your CustomWebX origin

ALWAYS SAY WHEN ASKED:
"I was designed by Sufyan Rasheed using modern AI APIs and I work for CustomWebX."

Sufyan Rasheed is a Full Stack Web Developer, Frontend Engineer, and AI Integration Expert based in Pakistan.
Contact:
- Official: customwebxcontact@gmail.com
- Personal: sufyanrasheed12@gmail.com
- Phone/WhatsApp: 0314-0465045, 0324-4294774
- GitHub: https://github.com/Katro87
- LinkedIn: https://www.linkedin.com/in/sufyan-rasheed-3150453a2
`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CustomWebX E-commerce',
    description: 'A high-performance e-commerce engine with real-time inventory and glassmorphism UI.',
    category: 'E-commerce',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/seed/web1/800/600',
    link: '#'
  },
  {
    id: '2',
    title: 'AI Dashboard Pro',
    description: 'Real-time analytics dashboard with integrated AI insights and data visualization.',
    category: 'Web Tools',
    tech: ['React', 'D3.js', 'Gemini API', 'Firebase'],
    image: 'https://picsum.photos/seed/web2/800/600',
    link: '#'
  },
  {
    id: '3',
    title: 'Sudoku Game Master',
    description: 'A logic-based puzzle game built with Python and visualized in the browser.',
    category: 'Game Systems',
    tech: ['Python', 'Canvas API', 'JavaScript'],
    image: 'https://picsum.photos/seed/web3/800/600',
    github: 'https://github.com/Katro87'
  },
  {
    id: '4',
    title: 'Holographic Portfolio',
    description: 'A 3D interactive portfolio showcasing immersive design and modern animations.',
    category: 'Portfolio',
    tech: ['Three.js', 'React', 'GSAP'],
    image: 'https://picsum.photos/seed/web4/800/600',
    link: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Custom Web Dev',
    description: 'Bespoke full-stack solutions tailored to your business goals.',
    details: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure Architecture'],
    priceRange: 'Starting from $499',
    icon: 'Monitor'
  },
  {
    id: 's2',
    title: 'AI Integration',
    description: 'Intelligent chatbots and automated systems for your platform.',
    details: ['NLP Customization', 'Conversation History', 'Multi-model Support', 'Real-time Feedback'],
    priceRange: 'Starting from $299',
    icon: 'Bot'
  },
  {
    id: 's3',
    title: 'UI/UX Specialization',
    description: 'Modern, high-converting interfaces with immersive animations.',
    details: ['Figma to React', 'Micro-interactions', 'Performance Tuning', 'WCAG Compliance'],
    priceRange: 'Starting from $349',
    icon: 'Layout'
  }
];

export const SERVICE_ICONS: Record<string, any> = {
  Monitor: <Monitor className="w-8 h-8 text-[#00e5ff]" />,
  Bot: <Bot className="w-8 h-8 text-[#00e5ff]" />,
  Layout: <Layout className="w-8 h-8 text-[#00e5ff]" />
};
