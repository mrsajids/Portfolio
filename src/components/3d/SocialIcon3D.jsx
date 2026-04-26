import React from 'react';

// Get official icon URLs from reliable CDNs
const getOfficialIcon = (name) => {
  switch (name) {
    case 'LinkedIn':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg';
    case 'GitHub':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
    case 'LeetCode':
      return 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png';
    case 'WhatsApp':
      return 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    default:
      return null;
  }
};

// Check if social.icon is a React component (Lucide) or a string (local import)
const isReactComponent = (icon) => typeof icon === 'function';

export default function SocialIcon3D({ social, index }) {
  const iconUrl = getOfficialIcon(social.name);
  const isLucideIcon = isReactComponent(social.icon);

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    // Show fallback text or icon
    const fallback = e.target.parentElement.querySelector('.fallback-icon');
    if (fallback) fallback.style.display = 'block';
  };

  return (
    <div className="w-20 h-20 cursor-pointer group">
      <div className="relative w-full h-full">
        {/* Background with gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105`}></div>

        {/* Icon container */}
        <div className="relative w-full h-full flex items-center justify-center p-4 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300">
          {/* Priority: Local import > CDN > Lucide icon */}
          {social.icon && typeof social.icon === 'string' ? (
            // Local SVG import (like WhatsApp)
            <img
              src={social.icon}
              alt={`${social.name} icon`}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          ) : iconUrl ? (
            // CDN icon with fallback
            <>
              <img
                src={iconUrl}
                alt={`${social.name} icon`}
                className="w-10 h-10 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                onError={handleImageError}
                style={{
                  filter: social.name === 'WhatsApp' ? 'brightness(0.7) invert(0)' : 'brightness(0) invert(1)'
                }}
              />
              {/* Fallback icon */}
              <div className="fallback-icon hidden">
                {isLucideIcon ? (
                  <social.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.name.charAt(0)}
                  </div>
                )}
              </div>
            </>
          ) : (
            // Final fallback
            isLucideIcon ? (
              <social.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {social.name.charAt(0)}
              </div>
            )
          )}
        </div>

        {/* Subtle glow effect */}
        <div className={`absolute -inset-2 bg-gradient-to-br ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
      </div>
    </div>
  );
}
