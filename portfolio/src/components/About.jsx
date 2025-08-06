'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function About() {
  const controls = useAnimation();
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Function to trigger animations
    const triggerAnimations = () => {
      controls.start({ opacity: 1, y: 0 });
      titleControls.start({ opacity: 1, x: 0 });
      contentControls.start({ opacity: 1, y: 0 });
      imageControls.start({ opacity: 1, scale: 1 });
    };

    // Listen for hash changes (navbar navigation)
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setTimeout(triggerAnimations, 100); // Small delay to ensure smooth scroll completes
      }
    };

    // Check if already on about section on mount
    if (window.location.hash === '#about') {
      setTimeout(triggerAnimations, 300);
    }

    // Add event listener for navigation
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [controls, titleControls, contentControls, imageControls]);

  return (
    <motion.section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background decoration with Material Design elevation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30" />
      </motion.div>

      {/* Grid pattern overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px] opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center md:text-left">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-white relative"
            initial={{ opacity: 0, x: -50 }}
            animate={titleControls}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            About Me
            
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={contentControls}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Left side - Text content */}
            <div className="space-y-6">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  I am Saranga, a passionate Software Engineer and UI/UX Designer dedicated to transforming creative ideas into engaging, user-friendly digital experiences. With clean design and functional development, I create seamless interfaces and scalable web applications that are both beautiful and intuitive.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  Whether I am wireframing a user flow or deploying a full-stack application, I bring both a designer's eye for detail and a developer's precision to every project.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-200">
                  My goal is to create meaningful digital products that not only look good but also effectively solve real-world problems.
                </p>

                {/* Material Design progress indicators */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">UI/UX Design</span>
                    <span className="text-blue-400">95%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Frontend Development</span>
                    <span className="text-green-400">90%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Backend Development</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Professional Circular Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imageControls}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="relative group">
                {/* Material Design elevation layers with glow effect */}
                <motion.div 
                  className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full scale-110 blur-xl"
                  animate={{ 
                    scale: [1.1, 1.15, 1.1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main circular image container with Material elevation */}
                <motion.div
                  className="relative w-64 h-64 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20"
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                >
                  {/* Circular image */}
                  <img 
                    src="/who am i.png" 
                    alt="Saranga - Software Engineer & UI/UX Designer" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Material overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
                  
                  {/* Status indicator following Material Design */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  </motion.div>
                </motion.div>
                
                {/* Material Design floating badges */}
                <motion.div
                  className="absolute -top-4 -left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-sm font-medium text-blue-300">Designer</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-sm font-medium text-purple-300">Developer</span>
                </motion.div>

                {/* Additional floating elements */}
                <motion.div
                  className="absolute top-1/2 -left-8 transform -translate-y-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}