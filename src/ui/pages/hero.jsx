import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Canvas animation for moving pixels
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial sizing
    handleResize();
    
    // Create particles
    const particlesArray = [];
    const numberOfParticles = Math.min(200, window.innerWidth / 5);
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the static dot pattern
      const dotSize = 1;
      const spacing = window.innerWidth < 768 ? 20 : 25;
      
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Update and draw each particle
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    window.addEventListener('resize', () => {
      handleResize();
      init();
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 bg-white overflow-hidden">
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* The new Navbar component */}
      <Navbar />
      

      {/* Main Content */}
      <motion.div 
        className="text-center z-10 px-2 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
      <motion.button 
    className="bg-gray-100 rounded-full px-4 py-2 text-sm hover:bg-gray-200 transition-colors"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Exclusively for the Ace student community 🎓!
  </motion.button>
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 tracking-tight"
          variants={itemVariants}
          style={{ lineHeight: "1.1" }}
        >
          Connect. Chat. <span>PeerUp<span className="text-blue-500">.</span></span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A hub for students to network, chat, and find like-minded peers.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={itemVariants}
        >
          <button className="bg-black text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors">
            I'm Student
          </button>
          <button className="bg-black text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors">
            Clubs & Chapters
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;