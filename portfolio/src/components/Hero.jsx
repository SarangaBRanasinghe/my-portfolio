'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Smooch } from 'next/font/google';

const smooch = Smooch({ 
  subsets: ['latin'],
  weight: '400'
});

export default function Hero() {
  const [particles, setParticles] = useState([]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  // Animation controls
  const sectionControls = useAnimation();
  const imageControls = useAnimation();
  const helloControls = useAnimation();
  const nameControls = useAnimation();
  const roleControls = useAnimation();
  const buttonControls = useAnimation();
  
  const roles = ["Software Engineer", "UI/UX Designer"];

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

  // Navigation animation handler
  useEffect(() => {
    // Function to trigger animations
    const triggerAnimations = () => {
      sectionControls.start({ opacity: 1, y: 0 });
      imageControls.start({ scale: 1, opacity: 1 });
      helloControls.start({ opacity: 1, x: 0 });
      nameControls.start({ opacity: 1, x: 0 });
      roleControls.start({ opacity: 1, x: 0 });
      buttonControls.start({ opacity: 1, y: 0 });
    };

    // Listen for hash changes (navbar navigation)
    const handleHashChange = () => {
      if (window.location.hash === '#home' || window.location.hash === '') {
        setTimeout(triggerAnimations, 100);
      }
    };

    // Check if already on home section on mount
    if (window.location.hash === '#home' || window.location.hash === '' || window.location.pathname === '/') {
      setTimeout(triggerAnimations, 300);
    }

    // Add event listener for navigation
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionControls, imageControls, helloControls, nameControls, roleControls, buttonControls]);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-16 md:py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
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
<div className="container mx-auto flex flex-col items-center justify-center text-center z-10 space-y-6">
  {/* Profile Image */}
  <motion.div 
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={imageControls}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-xl opacity-30 scale-110" />
    <img 
      src="/profile.png" 
      alt="Saranga Profile" 
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/10 shadow-2xl" 
    />
  </motion.div>

  {/* Text Content */}
  <motion.h2 
    className={`text-3xl sm:text-4xl md:text-5xl text-gray-100 ${smooch.className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    Hello,
  </motion.h2>

  <motion.h1 
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    I AM SARANGA
  </motion.h1>

  {/* Animated Role Text */}
  <motion.div
    className="h-12 sm:h-14 md:h-16 flex items-center justify-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <motion.p 
      key={currentRoleIndex}
      className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300"
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {roles[currentRoleIndex]}
    </motion.p>
  </motion.div>

  {/* Resume Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
    >
      Download Resume
    </a>
  </motion.div>
</div>


    </motion.section>
  );
}