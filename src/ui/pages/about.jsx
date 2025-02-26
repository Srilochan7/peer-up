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
        <div className="flex flex-wrap gap-6 justify-center mb-20">
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
        
        {/* What We Strive For Section */}
        <div className="mt-16 mb-16">
        <h2 className="text-5xl font-bold mb-8">What We Strive For</h2>
        
        <div className="text-lg space-y-6">
          <p>
            We strive to create a platform that empowers students by helping them build meaningful relationships, collaborate on projects, and engage in real-time through features like <span className="font-semibold">chats</span>, <span className="font-semibold">communities</span>, and <span className="font-semibold">alumni connections</span>.
          </p>
          
          <p>
            In the long term, once <span className="font-semibold">PairUp</span> gains traction and reaches critical mass, we plan to <span className="font-semibold">host events</span> and expand <span className="font-semibold">alumni engagement</span> and platform capabilities. Ultimately, our goal is to foster <span className="font-semibold">career growth</span>, <span className="font-semibold">networking</span>, and <span className="font-semibold">collaboration</span> for students and graduates alike.
          </p>
          
          <p className="text-blue-500 font-medium italic">- Scope.</p>

        </div>
      </div>

      </div>
    </div>
  );
};

export default About;