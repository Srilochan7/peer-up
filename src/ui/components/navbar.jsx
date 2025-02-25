import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-white/70 shadow-md`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold relative">
            <SparklingLogo />
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <div className="bg-gray-100 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              Join Waitlist
            </div>
            
            <div className="bg-gray-100 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              • About
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-6 absolute top-full left-0 w-full flex flex-col space-y-2">
            <div className="bg-gray-100 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              Join Waitlist
            </div>
            
            <div className="bg-gray-100 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              • About
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

// Star SVG component
const StarIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill={color}
    />
  </svg>
);

// Sparkling Logo Component
const SparklingLogo = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create new particles every 150ms (increased frequency)
    const particleInterval = setInterval(() => {
      // Create 2 particles at once for more intensity
      const newParticles = Array(2).fill().map(() => ({
        id: Date.now() + Math.random(),
        size: Math.random() * 6 + 2, // Slightly larger stars
        left: Math.random() * 120 - 10, // Wider spread
        top: Math.random() * 120 - 10, // Wider spread
        duration: Math.random() * 1.5 + 0.8,
        delay: Math.random() * 0.3,
        rotation: Math.random() * 360,
        color: ['#0ea5e9', '#a855f7', '#f472b6', '#f59e0b'][Math.floor(Math.random() * 4)], // More color variety
        scale: Math.random() * 0.5 + 0.8
      }));
      
      setParticles(prev => [...prev, ...newParticles]);
      
      // Remove particles after animation completes
      newParticles.forEach(particle => {
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== particle.id));
        }, (particle.duration + particle.delay) * 1000 + 100);
      });
    }, 150);
    
    return () => clearInterval(particleInterval);
  }, []);
  
  return (
    <div className="relative inline-block">
      {/* Particles container */}
      <div className="absolute -inset-6 z-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
              opacity: 0,
              animation: `starSparkle ${particle.duration}s ease-in-out ${particle.delay}s forwards`
            }}
          >
            <StarIcon size={particle.size} color={particle.color} />
          </div>
        ))}
      </div>
      
      {/* Logo */}
      <span className="relative z-10">
        <span className="tracking-tight">Peer</span>
        <span className="tracking-tight font-black">Up</span>
        <span 
          className="absolute text-cyan-500"
          style={{ 
            right: '-0.5rem', 
            fontSize: '2rem',
            lineHeight: '0.5'
          }}
        >
          .
        </span>
      </span>
      <span 
        className="absolute -bottom-1 -left-1 text-purple-300 opacity-40 text-xs font-light"
        style={{ transform: 'rotate(-10deg)' }}
      >
        *
      </span>
      
      {/* CSS Animation for star particles */}
      <style jsx>{`
        @keyframes starSparkle {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.9; }
          50% { opacity: 0.6; }
          100% { transform: scale(1.2) rotate(${Math.random() * 90 - 45}deg); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Navbar;