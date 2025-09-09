'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
      link: 'https://dribbble.com/shots/26326133-KIDNEY-TRACK?utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Saranga183&utm_content=KIDNEY%20TRACK&utm_medium=Social_Share',
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
  const [isVisible, setIsVisible] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('initial');
  const sectionRef = useRef(null);
  const router = useRouter();
  
  const cardsPerView = 1;
  const totalGroups = Math.ceil(projectList.length / cardsPerView);

  // Enhanced navigation detection
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#projects') {
        setHasNavigated(true);
        setAnimationPhase('entering');
        
        // Smooth scroll to section
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    };

    // Check initial hash
    if (window.location.hash === '#projects') {
      setHasNavigated(true);
      setAnimationPhase('entering');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Project carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalGroups]);

  // Enhanced intersection observer with navigation detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (hasNavigated && animationPhase === 'entering') {
            setAnimationPhase('visible');
          }
        } else {
          if (!hasNavigated) {
            setIsVisible(false);
          }
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasNavigated, animationPhase]);

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerView;
    const end = start + cardsPerView;
    return projectList.slice(start, end);
  };

  const handleExploreClick = () => {
    window.location.href = '/projects';
  };

  // Enhanced animation variants for navigation
  const navigationContainerVariants = {
    initial: { 
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    entering: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  };

  const navigationItemVariants = {
    initial: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
      rotateX: 20
    },
    entering: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  // Regular animation variants (for scroll-based animation)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24,
      scale: 0.96
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  // Enhanced card variants for navigation
  const navigationCardVariants = {
    initial: { 
      opacity: 0, 
      y: 80, 
      scale: 0.8, 
      rotateX: 30,
      rotateY: -10
    },
    entering: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.4 + index * 0.15,
        duration: 0.8
      }
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        delay: index * 0.1,
        duration: 0.6
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
      rotateY: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    }
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  // Determine which animation variant set to use
  const shouldUseNavigationAnimation = hasNavigated && (animationPhase !== 'idle');
  const currentContainerVariants = shouldUseNavigationAnimation ? navigationContainerVariants : containerVariants;
  const currentItemVariants = shouldUseNavigationAnimation ? navigationItemVariants : itemVariants;
  const currentCardVariants = shouldUseNavigationAnimation ? navigationCardVariants : cardVariants;
  const animationState = shouldUseNavigationAnimation ? animationPhase : (isVisible ? "visible" : "hidden");

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden"
      variants={currentContainerVariants}
      initial="initial"
      animate={animationState}
      viewport={{ once: false, margin: "-100px" }}
    >
      {/* Background Elements for Enhanced Visual Appeal */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        variants={currentItemVariants}
      >
      
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          variants={currentItemVariants}
        >
          My <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Projects
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          variants={currentItemVariants}
        >
          Check out my latest Web, UI/UX, and Other projects.
          <br />
          <motion.span
            className="inline-block"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Click below to explore my portfolio!
          </motion.span>
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-start"
          variants={currentContainerVariants}
        >
          
          {/* Left Side - Project Summary */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={currentItemVariants}
          >
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={currentContainerVariants}
            >
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                  variants={currentItemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: {
                      duration: 0.2,
                      ease: [0.4, 0.0, 0.2, 1]
                    }
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                  
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: shouldUseNavigationAnimation ? 0.8 + index * 0.1 : 0.6 + index * 0.1,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-300 font-medium relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            

            {/* Explore Button with Enhanced Animation */}
            <motion.div
              className="text-center"
              variants={currentItemVariants}
            >
              <motion.button  
                onClick={handleExploreClick}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                {/* Enhanced ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                />
                <motion.span 
                  className="relative z-10"
                  animate={shouldUseNavigationAnimation && animationPhase === 'entering' ? 
                    { x: [0, 5, 0] } : {}
                  }
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Explore Now
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Center - Project Cards */}
          <motion.div 
            className="lg:col-span-1"
            variants={currentItemVariants}
          >
            <div className="relative min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                >
                  {getCurrentCards().map((project, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      custom={index}
                      variants={currentCardVariants}
                      initial="initial"
                      animate={shouldUseNavigationAnimation ? animationPhase : "animate"}
                      exit="exit"
                      whileHover="hover"
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
                    >
                      {/* Enhanced glow effect */}
                      <motion.div 
                        className={`absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r ${project.color} rounded-2xl transition-opacity duration-500 blur-xl -z-10`}
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                          initial={{ opacity: 0.6 }}
                          whileHover={{ opacity: 0.8 }}
                        />
                        
                        {/* Project Link Overlay */}
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 relative z-10">
                        <motion.h3 
                          className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: shouldUseNavigationAnimation ? 1.0 + index * 0.1 : 0.3 + index * 0.1 
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: shouldUseNavigationAnimation ? 1.1 + index * 0.1 : 0.4 + index * 0.1 
                          }}
                        >
                          {project.description}
                        </motion.p>
                        
                        {/* Tech Stack */}
                        <motion.div 
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: shouldUseNavigationAnimation ? 1.2 + index * 0.1 : 0.5 + index * 0.1 
                          }}
                        >
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
                              whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                              initial={{ scale: 0, rotate: 180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: shouldUseNavigationAnimation ? 1.3 + techIndex * 0.05 : 0.6 + techIndex * 0.05 
                              }}
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
                        </motion.div>

                        {/* Project Actions */}
                        <motion.div 
                          className="flex items-center justify-between"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: shouldUseNavigationAnimation ? 1.4 + index * 0.1 : 0.7 + index * 0.1 
                          }}
                        >
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300 cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            View Project
                            <motion.svg 
                              className="w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                          </motion.a>
                          
                          <motion.div 
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.color}`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-8"
              variants={currentItemVariants}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: shouldUseNavigationAnimation ? 1.6 : 0.8 
              }}
            >
              <motion.button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups)}
                className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 text-white text-xl font-bold transition-all duration-300 cursor-pointer relative overflow-hidden group"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">←</span>
              </motion.button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalGroups }).map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentIndex ? 'bg-blue-400 w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: shouldUseNavigationAnimation ? 1.7 + i * 0.05 : 0.9 + i * 0.05 
                    }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % totalGroups)}
                className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 text-white text-xl font-bold transition-all duration-300 cursor-pointer relative overflow-hidden group"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">→</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - View All Projects */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center items-center space-y-8"
            variants={currentItemVariants}
          >
            {/* Main CTA */}
            <motion.div
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: [0.4, 0.0, 0.2, 1]
                }
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: shouldUseNavigationAnimation ? 1.8 : 1.0 
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl relative z-10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                🚀
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-white mb-4 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: shouldUseNavigationAnimation ? 1.9 : 1.1 
                }}
              >
                Ready to See More?
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: shouldUseNavigationAnimation ? 2.0 : 1.2 
                }}
              >
                Explore my complete portfolio with detailed case studies, 
                live demos, and source code.
              </motion.p>
              
              <motion.a
                href="https://github.com/SarangaBRanasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: shouldUseNavigationAnimation ? 2.1 : 1.3 
                }}
              >
                {/* Enhanced ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                />
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative z-10">View All Projects</span>
              </motion.a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="text-center space-y-4"
              variants={currentItemVariants}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: shouldUseNavigationAnimation ? 2.2 : 1.4 
              }}
            >
              <motion.p 
                className="text-sm text-gray-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Interested in collaboration?
              </motion.p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5, scale: 1.05 }}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: shouldUseNavigationAnimation ? 2.3 : 1.5 
                }}
              >
                Let's Work Together
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .cursor-pointer {
          cursor: pointer !important;
        }
        
        /* Enhanced cursor effects */
        .group:hover {
          cursor: pointer;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Material Design ripple effect */
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        /* Enhanced glow effects */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
          }
        }
        
        .ripple-effect {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .ripple-effect:hover::before {
          width: 300px;
          height: 300px;
        }
        
        /* Line clamp utility */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
        
        /* Enhanced focus states for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid rgba(139, 92, 246, 0.5);
          outline-offset: 2px;
        }
        
        /* Perspective for 3D effects */
        .perspective {
          perspective: 1000px;
        }
        
        /* Enhanced background animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
}