'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Smooch } from 'next/font/google';

const smooch = Smooch({ 
  subsets: ['latin'],
  weight: '400'
});

export default function Hero() {
  const [particles, setParticles] = useState([]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = ["Software Engineer", "UI UX Designer"];

  // Generate particles only on client side after component mounts
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }));
    };

    setParticles(generateParticles());
  }, []);

  // Role switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
      
      {/* Floating particles effect - only render after hydration */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Updated container with better spacing distribution */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-24 z-10">
        {/* Profile Image */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-xl opacity-30 scale-110" />
            <img 
              src="/profile.png" 
              alt="Saranga Profile" 
              className="relative w-72 h-72 md:w-82 md:h-82 rounded-full object-cover border-4 border-white/10 shadow-2xl" 
            />
          </div>
        </motion.div>

        {/* Text Content with better positioning */}
        <div className="text-center md:text-left text-white max-w-2xl">
          <motion.h2 
            className={`text-6xl md:text-7xl lg:text-8xl mb-6 text-gray-100 ${smooch.className}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello,
          </motion.h2>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I AM SARANGA
          </motion.h1>
          
          <motion.div
            className="h-16 md:h-20 flex items-center mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.p 
              key={currentRoleIndex}
              className="text-2xl md:text-3xl font-medium text-gray-200"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ 
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] // Material Design easing
              }}
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Download Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}