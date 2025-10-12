import React, { useState } from 'react';
import { Mail, Github, Linkedin, Sparkles, PhoneCall } from 'lucide-react';
import ContactModal from '../ContactModal';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contactInfo = [
    { 
      icon: PhoneCall, 
      label: 'Call', 
      text: '+91 7218771578',
      url: 'tel:7218771578'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      text: 'sajeedsyed39@gmail.com',
      url: 'mailto:sajeedsyed39@gmail.com'
    },
    // { 
    //   icon: Github, 
    //   label: 'GitHub', 
    //   text: '@mrsajids',
    //   url: 'https://github.com/mrsajids'
    // },
    // { 
    //   icon: Linkedin, 
    //   label: 'LinkedIn', 
    //   text: '/in/syed-sajeed-2ba32a1a6',
    //   url: 'https://www.linkedin.com/in/syed-sajeed-2ba32a1a6'
    // }
  ];

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50"></div>
          <h2 className="relative text-5xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              LET'S CREATE
            </span>
          </h2>
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-16 font-light">
          Ready to build something <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">extraordinary</span> together?
        </p>
        
        <div className="flex gap-6 justify-center mb-16 flex-wrap">
          {contactInfo.map((contact, idx) => (
            <a
              key={idx}
              href={contact.url}
              target={contact.url.startsWith('http') ? '_blank' : undefined}
              rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl px-6 py-4 border border-white/10 group-hover:border-white/30 transition-all flex items-center gap-4 hover:scale-105">
                <contact.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase font-bold">{contact.label}</p>
                  <p className="text-sm font-semibold group-hover:text-purple-300 transition-colors">{contact.text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative px-16 py-6 overflow-hidden rounded-full font-black text-xl cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-transform group-hover:scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative z-10 flex items-center gap-3">
            GET IN TOUCH <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          </span>
        </button>

      </div>
        {/* Contact Modal */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
    </section>
  );
}
