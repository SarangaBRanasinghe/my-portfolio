'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Projects() {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: '🛍️',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#',
      image: '📋',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization and automated reporting.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      link: '#',
      image: '📊',
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform with video streaming, progress tracking, and interactive assessments.',
      tech: ['Angular', 'NestJS', 'MySQL', 'AWS'],
      link: '#',
      image: '🎓',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const projectStats = [
    { number: '06+', label: 'Web Projects' },
    { number: '05+', label: 'Mobile Apps' },
    { number: '10+', label: 'UI/UX Designs' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 2;
  const totalGroups = Math.ceil(projectList.length / cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalGroups]);

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerView;
    const end = start + cardsPerView;
    return projectList.slice(start, end);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 100, scale: 0.8, rotateX: 45 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        delay: index * 0.2,
        duration: 0.8
      }
    }),
    exit: (index) => ({
      opacity: 0,
      y: -100,
      scale: 0.8,
      rotateX: -45,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 25,
        delay: index * 0.1,
        duration: 0.6
      }
    }),
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          My <span className="text-white-400">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Check out my latest Web, UI/UX, and Mobile App projects.
          <br />
          Click below to explore my portfolio!
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Side - Project Summary */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6">
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Summary Text */}
            <motion.div
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Project Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Showcasing innovative web applications, mobile solutions, and UI/UX designs. 
                Each project demonstrates modern development practices, user-centered design, 
                and cutting-edge technologies.
              </p>
            </motion.div>

            {/* Explore Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Center - Project Cards */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {getCurrentCards().map((project, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      custom={index}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover="hover"
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
                    >
                      {/* Project Content */}
                      <div className="flex gap-4 items-start">
                        {/* Project Icon */}
                        <motion.div 
                          className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} text-white text-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {project.image}
                        </motion.div>

                        {/* Project Details */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs bg-white/10 text-gray-200 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <motion.div 
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${project.color} rounded-2xl transition-opacity duration-500 -z-10 blur-xl`}
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups)}
                className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 text-white text-xl font-bold transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </motion.button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalGroups }).map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-blue-400 w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % totalGroups)}
                className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 text-white text-xl font-bold transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - View All Projects */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center items-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Main CTA */}
            <motion.div
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                🚀
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to See More?
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore my complete portfolio with detailed case studies, 
                live demos, and source code.
              </p>
              
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View All Projects
              </motion.a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-400">
                Interested in collaboration?
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Let's Work Together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}