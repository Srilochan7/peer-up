import { div } from 'framer-motion/client';
import React from 'react';

const College = () => {
    return (
        
        <div className="min-h-screen w-full bg-white flex items-center relative overflow-hidden">
          {/* Background pattern - matches the pattern from Content component */}
        
          
          {/* Main content container */}
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 relative z-10">
            {/* Left side content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Ready to get started?</h1>
              <p className="text-lg text-gray-600">
                Start your college adventure with PeerUp today and make real connections that last!
              </p>
              
              <button className="flex items-center bg-white border border-gray-300 rounded-full px-6 py-3 text-gray-800 font-medium w-fit hover:bg-gray-50 transition-all duration-300">
                <span className="mr-2 text-black">•</span>
                Join Waitlist
              </button>
            </div>
            
            {/* Right side image with image-based glow effect */}
            <div className="relative w-full h-100 md:h-100">
              {/* Image-based glow using duplicate image with blur */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl blur-xl opacity-40 scale-105">
                <img 
                  src="/assets/college.jpeg" 
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Main image */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="/assets/college.jpeg" 
                  alt="College campus with buildings and lake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      );
};

export default College;