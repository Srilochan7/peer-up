import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  const orbitalElements = [
    { id: 1, icon: "👨‍🎓", label: "Alumini", color: "bg-purple-500" },
    { id: 2, icon: "🏢", label: "Campus", color: "bg-blue-400" },
    { id: 3, icon: "🔍", label: "Connections", color: "bg-purple-500" },
    { id: 4, icon: "🚀", label: "Launch", color: "bg-red-500" },
    { id: 5, icon: "📊", label: "Collaborations", color: "bg-green-500" },
    { id: 6, icon: "🌍", label: "Communities", color: "bg-yellow-500" } // Added Communities
  ];

  const orbitSize = 180;
  const speed = 10; // Animation speed

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute right-0 w-1/2 h-full bg-gray-50"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 46%, #f0f0f0 47%, #f0f0f0 53%, transparent 54%)",
            backgroundSize: "20px 20px"
          }}
        ></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side Content */}
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-3 text-blue-500 font-medium">
            Exclusive to Ace Students
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connect, Collaborate, and Grow with Your Ace Community
          </h1>

          <p className="text-gray-700 text-lg">
            An exclusive networking hub for Ace students—sign up only with a{" "}
            <a href="#" className="text-blue-500 hover:underline">
              ......@aceec.ac.in 
            </a>
            .
            <br/> 
            <a href="#" className="text-purple-500"> Connect with peers</a>
            ,
            <a href="#" className="text-purple-500"> collaborate on projects</a>
            ,
            <a href="#" className="text-purple-500"> join Communities </a>
            and
            <a href="#" className="text-purple-500"> seamlessly transition into the alumni network</a>
             . Build meaningful relationships that extend beyond graduation.🚀
          </p>
        </div>

        {/* Right Side - Orbit Animation */}
        <div className="relative h-80 md:h-96 flex items-center justify-center">
          {/* Visible orbit circle */}
          <div
            className="absolute border border-gray-200 rounded-full"
            style={{
              width: `${orbitSize * 2}px`,
              height: `${orbitSize * 2}px`
            }}
          ></div>

          {/* Central Static Logo */}
          <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-black flex items-center justify-center shadow-lg z-20">
            <span className="text-white text-3xl md:text-4xl font-bold">PU</span>
          </div>

          {/* Rotating Orbit Container */}
          <motion.div
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${orbitSize * 2}px`,
              height: `${orbitSize * 2}px`,
              position: "absolute"
            }}
          >
            {orbitalElements.map((element, index) => {
              const angle = (index / orbitalElements.length) * (2 * Math.PI);
              const x = Math.cos(angle) * orbitSize;
              const y = Math.sin(angle) * orbitSize;

              return (
                <motion.div
                  key={element.id}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${orbitSize + x}px`,
                    top: `${orbitSize + y}px`,
                    transform: "translate(-50%, -50%)" // Center elements properly
                  }}
                >
                  <motion.div
                    className={`${element.color} w-10 h-10 rounded-md flex items-center justify-center text-white shadow-md`}
                    animate={{ rotate: -360 }} // Keeps icons upright
                    transition={{
                      duration: speed,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ transformOrigin: "center" }}
                  >
                    {element.icon}
                  </motion.div>
                  <motion.span
                    className="text-xs font-medium bg-white px-2 py-1 rounded-full shadow-sm mt-1"
                    animate={{ rotate: -360 }} // Keeps text upright
                    transition={{
                      duration: speed,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {element.label}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
