  import React from 'react';

  const About = () => {
    return (
      <div className="bg-white text-black min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          {/* Mission Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1 border border-black rounded-full text-sm">
              Our Mission
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
            Building Meaningful Connections.
            <br />
            Anytime, Anywhere.
          </h1>
          
          {/* Mission Description */}
          <p className="text-xl max-w-3xl mb-16">
            'PairUp' isn't just another platform—it's a movement. Whether you want to
            network, collaborate, or make real friends, we provide a seamless way to
            connect with like-minded people in your college and beyond.
          </p>
          
          {/* Image Grid - Polaroid Style */}
          <div className="flex flex-wrap gap-6 justify-center">
            {/* First Image - Take Away */}
            <div className="relative">
              <div className="bg-white border-4 border-black rounded-lg p-3 pb-16 shadow-lg transform rotate-0 max-w-xs">
                <img 
                  src="/assets/mark.jpg" 
                  alt="Take Away neon sign" 
                  className="w-full h-auto object-cover rounded-sm"
                />
                <p className="absolute bottom-6 left-0 right-0 text-center text-lg">Find Your Tribe</p>
              </div>
            </div>
            
            {/* Second Image - The tribe */}
            <div className="relative">
              <div className="bg-white border-4 border-black rounded-lg p-3 pb-16 shadow-lg transform -rotate-2 max-w-xs mt-4">
                <img 
                  src="/assets/collab.jpg" 
                  alt="Digital glitch art of a face" 
                  className="w-full h-auto object-cover rounded-sm"
                />
                <p className="absolute bottom-6 left-0 right-0 text-center text-lg">Connect & Focus</p>
              </div>
            </div>
            
            {/* Third Image - Launch */}
            <div className="relative">
              <div className="bg-white border-4 border-black rounded-lg p-3 pb-16 shadow-lg transform rotate-2 max-w-xs mt-8">
                <img 
                  src="/assets/rocket.jpg" 
                  alt="Rocket launch" 
                  className="w-full h-auto object-cover rounded-sm"
                />
                <p className="absolute bottom-6 left-0 right-0 text-center text-lg">launching soon !!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;