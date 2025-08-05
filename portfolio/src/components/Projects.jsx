'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Projects() {
  const projectList = [
    {
      title: 'PLAYFIT SPORTS MANAGEMENT SYSTEM',
      description: ' PlayFit is a centralized, web-based sports management system developed to streamline the coordination between players, coaches, stadium owners, health officers, and administrators. ',
      tech: [
        { name: '', icon: '/devicon--angular.svg' },
        { name: '', icon: '/logos--nodejs.svg' },
        { name: '', icon: '/logos--bootstrap.svg' },
        { name: '', icon: '/devicon--mysql-wordmark (1).svg' }
      ],
      link: 'https://github.com/orgs/TheCodeExplorers-PlayFit/repositories',
      image: '/playfit landing.png',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AUTO VAULT - FREE VEHICLE REGISTRATION SYSTEM ',
 
      description: 'AutoVault is a web-based vehicle registration system that allows users to register, add, update, and remove vehicle information with ease. ',
      tech: [
        { name: '', icon: '/devicon--html5-wordmark.svg' },
        { name: '', icon: '/logos--tailwindcss-icon.svg' },
        { name: '', icon: '/material-icon-theme--laravel.svg' },
        { name: '', icon: '/devicon--mysql-wordmark (1).svg' }
      ],
      link: 'https://github.com/SarangaBRanasinghe/my-crud-app',
      image: '/laravelp.png',
      color: 'from-pink-500 to-red-50'
    },
    {
      title: 'KIDNEY TRACK – MOBILE APP UI',
      description: 'User-friendly, accessible, and research-aligned interfaces tailored to medical requirements and user needs.',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/ckd.png',
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'LINE DRAWING ROBOT',
      description: ' Marquer is a cutting-edge device designed to conveniently and precisely mark grounds with the ability to draw lines in any direction, save and reuse designs as  presets, and control the device remotely via a user-friendly web app.',
      tech: [
        { name: '', icon: '/simple-icons--easyeda.svg' },
        { name: '', icon: '/hugeicons--c-programming.svg' },
        { name: '', icon: '/devicon--arduino.svg' }
      ],
      link: 'https://www.linkedin.com/posts/activity-7236297034708754432-HfeM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETrCAYBMqUBReyyJ1_rNue-Z3-_fFZAYPE',
      image: '/hardwarep.jpg',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: ' LASSANA LANKA – SMART WASTE MANAGEMENT SYSTEM MOBILE APP UI',
      description: 'Smart waste management concept aimed to tackle waste overflow and irregular garbage collection by leveraging IoT-enabled technology and a mobile application.',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/lassana lanka.png',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'ENTREMATE LANKA – ONLINE FUNDRAISING PLATFORM UI',
      description: 'A web-based fundraising platform aimed at connecting social entrepreneurs in Sri Lanka with investors and financial institutions.User-friendly interface tailored to enhance engagement, accessibility, and ease of use.',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/entrimate lanka.png',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'ONLINE SHOPPING WEB SITE UI',
      description: 'An intuitive online shopping website! Designed with a clean, user-friendly interface, this platform offers a seamless shopping experience with easy navigation and vibrant product displays.',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      ink: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/fashion store.png',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'FLORABLOOM APP UI DESIGN',
      description: 'A sleek and floral-themed UI for a flower shop app, designed to provide a delightful user experience. From easy login to browsing and purchasing gorgeous bouquets,this app makes every step enjoyable.',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/floora (1).png',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'FURNITURE MOBILE APP UI DESIGN',
      description: 'Explore this clean, modern, and intuitive UI for StyleNest, a furniture shopping app that blends elegant design with a seamless user experience. Featuring a calming color palette and clear navigation, the app showcases various furniture collections, allowing users to browse and customize their interior selections effortlessly.',
      tech: [
       { name: '', icon: '/logos--figma.svg' }
      ],
       link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/stylenest.png',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'COFFEE SHOP MOBILE APP UI DESIGN',
      description: 'The warm earthy tones combined with a touch of gold bring out the cozy ambiance of favorite coffee shop. This UI makes browsing and selecting  perfect brew simple, seamless, and oh-so-inviting',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/coffe ui.png',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'PLAYFIT SPORTS MANAGEMENT SYSTEM UI DESIGN',
      description: 'A clean and modern UI design for PlayFit, a web-based sports management system. This interface focuses on user-friendly navigation for stadium owners, coaches, and health officers to manage bookings, player records, and appointments efficiently.',
      tech: [
        { name: '', icon: '/logos--figma.svg' }
      ],
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
      image: '/pf1.png',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const projectStats = [
    { number: '02+', label: 'Web Projects' },
    { number: '07+', label: 'UI/UX Designs' },
    { number: '01+', label: 'Other' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 1;
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
          Check out my latest Web, UI/UX, and Other projects.
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
                Showcasing innovative web applications, UI/UX designs and other projects. 
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
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Project Link Overlay */}
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack - Updated */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <div className="relative w-6 h-6 flex items-center justify-center">
                                <Image
                                  src={tech.icon}
                                  alt={tech.name}
                                  width={24}
                                  height={24}
                                  className="object-contain max-w-6 max-h-6"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Project Actions */}
                        <div className="flex items-center justify-between">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            View Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.a>
                          
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.color}`} />
                        </div>
                      </div>

                      {/* Hover effect overlay - Updated with lower opacity */}
                      <motion.div 
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${project.color} rounded-2xl transition-opacity duration-500 -z-10 blur-xl`}
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
                href="https://github.com/SarangaBRanasinghe"
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