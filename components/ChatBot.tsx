
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Paperclip, Smile } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { MessageRole, ChatMessage } from '../types';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: MessageRole.ASSISTANT, 
      content: "Hi! I'm the official CustomWebX AI Assistant. I work for Sufyan Rasheed. How can I assist you with your project today?", 
      timestamp: new Date() 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: MessageRole.USER, content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role === MessageRole.USER ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await getGeminiResponse(input, history);
    
    setMessages(prev => [...prev, { 
      role: MessageRole.ASSISTANT, 
      content: response || "I'm sorry, I couldn't process that. Please contact Sufyan directly.", 
      timestamp: new Date() 
    }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[9999]">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#7b1fa2] flex items-center justify-center shadow-[0_10px_30px_rgba(0,229,255,0.4)] text-white relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? <X key="x" size={30} /> : <MessageCircle key="msg" size={30} />}
        </AnimatePresence>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#0a192f] rounded-full" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            className="absolute bottom-20 right-0 w-[400px] h-[600px] glass rounded-3xl flex flex-col shadow-2xl border-white/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0a192f] to-[#1a237e] p-6 border-b border-white/10 flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#00e5ff]/20 rounded-full flex items-center justify-center border border-[#00e5ff]/50">
                <Bot size={24} className="text-[#00e5ff]" />
              </div>
              <div>
                <h3 className="font-bold text-white leading-none">CustomWebX AI</h3>
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Online Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="ml-auto text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.role === MessageRole.USER 
                      ? 'bg-[#00e5ff] text-[#0a192f] font-medium rounded-tr-none' 
                      : 'glass border-white/10 text-gray-200 rounded-tl-none'
                  }`}>
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a {...props} target="_blank" rel="noopener noreferrer" className="underline text-blue-400" />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong {...props} className="font-bold" />
                        )
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                    <div className={`text-[8px] mt-2 opacity-60 ${msg.role === MessageRole.USER ? 'text-[#0a192f]' : 'text-gray-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass border-white/10 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-[#00e5ff] transition-colors"><Smile size={20}/></button>
              <input 
                type="text" 
                placeholder="Ask me about projects or services..."
                className="flex-grow bg-transparent text-sm focus:outline-none text-white px-2"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-3 bg-[#00e5ff] text-[#0a192f] rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
