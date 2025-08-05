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
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full translate-y-32 -translate-x-32 opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center md:text-left">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={titleControls}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            About Me
            
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-2 gap-6 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={contentControls}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100/50">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  I am Saranga, a passionate Software Engineer and UI/UX Designer dedicated to transforming creative ideas into engaging, user-friendly digital experiences. With clean design and functional development, I create seamless interfaces and scalable web applications that are both beautiful and intuitive.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Whether I am wireframing a user flow or deploying a full-stack application, I bring both a designer's eye for detail and a developer's precision to every project.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  My goal is to create meaningful digital products that not only look good but also effectively solve real-world problems.
                </p>
              </div>

               
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
                {/* Material Design elevation layers */}
                <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full opacity-20 scale-110" />
                <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 scale-105" />
                
                {/* Main circular image container with Material elevation */}
                <motion.div
                  className="relative w-64 h-64 rounded-full overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                >
                  {/* Circular image */}
                  <img 
                    src="/who am i.png" 
                    alt="Saranga - Software Engineer & UI/UX Designer" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Material overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-full" />
                  
                  {/* Status indicator following Material Design */}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md border border-gray-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </motion.div>
                
                {/* Material Design floating action buttons style badges */}
                <motion.div
                  className="absolute -top-2 -left-4 bg-white rounded-full px-3 py-1 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="text-xs font-medium text-blue-600">Designer</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -right-4 bg-white rounded-full px-3 py-1 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <span className="text-xs font-medium text-purple-600">Developer</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}