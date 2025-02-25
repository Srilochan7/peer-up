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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 bg-white transition-all duration-300 flex justify-between items-center">
        <div className="text-3xl font-bold">
          PeerUp<span className="text-blue-500">.</span>
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
          <div className="bg-gray-100 rounded-full px-6 py-2 text-sm">
            Exclusively for the VIT student community!
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
          <div className="bg-gray-100 rounded-full px-6 py-2 text-sm">
            Exclusively for the VIT student community!
          </div>
          <div className="bg-gray-100 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors cursor-pointer">
            • About
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;