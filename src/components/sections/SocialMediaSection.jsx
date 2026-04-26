import React from 'react';
import { socialMedia } from '../../data/constants';
import SocialIcon3D from '../3d/SocialIcon3D';

export default function SocialMediaSection() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-center">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            CONNECT WITH ME
          </span>
        </h2>
        <p className="text-center text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Follow my journey and stay updated with my latest projects, tutorials, and tech insights
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {socialMedia.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              {/* 3D Icon Container */}
              <div className="relative mb-4">
                <div className={`absolute -inset-4 bg-gradient-to-br ${social.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-4 border border-white/10 group-hover:border-white/30 transition-all backdrop-blur-sm">
                  <SocialIcon3D social={social} index={idx} />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="font-bold text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {social.followers}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* Additional Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Let's collaborate and build something amazing together!</p>
          <div className="flex justify-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
              <span className="text-sm font-medium">Open for opportunities</span>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30">
              <span className="text-sm font-medium">Available for freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
