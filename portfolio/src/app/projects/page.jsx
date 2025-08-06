'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectList } from '@/lib/projects';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projectList);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const pageRef = useRef(null);

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All Projects', count: projectList.length },
    { id: 'web', label: 'Web Development', count: projectList.filter(p => 
      p.tech.some(t => t.icon.includes('angular') || t.icon.includes('laravel') || t.icon.includes('html5'))
    ).length },
    { id: 'ui', label: 'UI/UX Design', count: projectList.filter(p => 
      p.tech.some(t => t.icon.includes('figma'))
    ).length },
    { id: 'hardware', label: 'Hardware', count: projectList.filter(p => 
      p.tech.some(t => t.icon.includes('arduino') || t.icon.includes('easyeda'))
    ).length }
  ];

  // Page load animation trigger
  useEffect(() => {
    setHasLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects based on category and search
  useEffect(() => {
    let filtered = projectList;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => {
        switch (activeFilter) {
          case 'web':
            return project.tech.some(t => 
              t.icon.includes('angular') || 
              t.icon.includes('laravel') || 
              t.icon.includes('html5') ||
              t.icon.includes('nodejs')
            );
          case 'ui':
            return project.tech.some(t => t.icon.includes('figma'));
          case 'hardware':
            return project.tech.some(t => 
              t.icon.includes('arduino') || 
              t.icon.includes('easyeda') ||
              t.icon.includes('c-programming')
            );
          default:
            return true;
        }
      });
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery]);

  // Enhanced animation variants following Material Design
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: 20
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 2,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      ref={pageRef}
      className="min-h-screen py-16 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <br />
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            All <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Projects
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Explore my complete portfolio of web applications, UI/UX designs, and innovative projects.
          </motion.p>

          {/* Project Stats */}
          <motion.div 
            className="flex justify-center gap-8 mb-12"
            variants={containerVariants}
          >
            {[
              { label: 'Total Projects', value: projectList.length },
              { label: 'Categories', value: categories.length - 1 },
              { label: 'Technologies', value: new Set(projectList.flatMap(p => p.tech.map(t => t.icon))).size }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                >
                  {stat.value}+
                </motion.div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          className="mb-12 space-y-6"
          variants={itemVariants}
        >
          {/* Search Bar */}
          <motion.div 
            className="max-w-md mx-auto"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.div 
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: searchQuery ? 0 : 360 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border backdrop-blur-sm ${
                  activeFilter === category.id
                    ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/30'
                }`}
                variants={filterVariants}
                custom={index}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  {category.label}
                  <motion.span 
                    className="ml-2 text-xs opacity-75"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ({category.count})
                  </motion.span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeFilter}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative perspective"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full"
                >
                  <motion.div 
                    className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 relative"
                    whileHover={{
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect */}
                    <motion.div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${project.color} rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* Project Image */}
                    <div className="relative h-52 overflow-hidden">
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
                      
                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <motion.div
                          className="text-white text-lg font-semibold"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          View Details
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <motion.h2 
                        className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {project.title}
                      </motion.h2>
                      
                      <motion.p 
                        className="text-gray-300 text-sm line-clamp-3 leading-relaxed"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Tech Stack */}
                      <motion.div 
                        className="flex flex-wrap gap-2 pt-2"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                      >
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="w-8 h-8 p-1 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.05 + 0.3 + techIndex * 0.05 
                            }}
                          >
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </motion.div>
                        ))}
                        {project.tech.length > 4 && (
                          <motion.div
                            className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
                          >
                            +{project.tech.length - 4}
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Project Link Arrow */}
                      <motion.div 
                        className="flex items-center justify-between pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 + 0.4 }}
                      >
                        <motion.span 
                          className="text-blue-400 text-sm font-medium"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          View Project
                        </motion.span>
                        <motion.div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <motion.button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        /* Custom scrollbar */
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
        
        /* Enhanced focus states */
        button:focus,
        input:focus {
          outline: 2px solid rgba(139, 92, 246, 0.5);
          outline-offset: 2px;
        }
        
        /* Smooth transitions */
        * {
          transition-property: color, background-color, border-color, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        }
      `}</style>
    </motion.section>
  );
}