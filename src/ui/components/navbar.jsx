import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 bg-white transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-3xl font-bold mb-4 md:mb-0">
            PeerUp<span className="text-blue-500">.</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center mb-4 md:mb-0">
            <div className="bg-gray-100 rounded-full px-6 py-2 text-sm whitespace-nowrap hover:bg-gray-200 transition-colors cursor-pointer">
              Join Waitlist
            </div>
            <div className="bg-gray-100 rounded-full px-6 py-2 text-sm text-center">
              Exclusively for the Ace student community!
            </div>
          </div>
          <div className="bg-gray-100 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors cursor-pointer">
            • About
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;