'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectList } from '@/lib/projects';

export default function ProjectDetailPage({ params }) {
  // Unwrap the params Promise
  const resolvedParams = use(params);
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Find the project by slug
  useEffect(() => {
    const foundProject = projectList.find(p => p.slug === resolvedParams.slug);
    if (foundProject) {
      setProject(foundProject);
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    } else {
      notFound();
    }
  }, [resolvedParams.slug]);

  // Get related projects (same category, different project)
  const getRelatedProjects = () => {
    if (!project) return [];
    
    const getProjectCategory = (proj) => {
      if (proj.tech.some(t => t.icon.includes('angular') || t.icon.includes('laravel') || t.icon.includes('html5') || t.icon.includes('nodejs'))) {
        return 'web';
      }
      if (proj.tech.some(t => t.icon.includes('figma'))) {
        return 'ui';
      }
      if (proj.tech.some(t => t.icon.includes('arduino') || t.icon.includes('easyeda') || t.icon.includes('c-programming'))) {
        return 'hardware';
      }
      return 'other';
    };

    const currentCategory = getProjectCategory(project);
    return projectList
      .filter(p => p.slug !== project.slug && getProjectCategory(p) === currentCategory)
      .slice(0, 3);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
        <motion.div
          className="text-white text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background Elements */}
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

      <div className="relative z-10">
        {/* Navigation Header */}
        <motion.nav 
          className="px-6 py-8"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto">
          </div>
        </motion.nav>
         <br /><br />
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {/* Hero Section */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            {/* Project Title & Description */}
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>

              {/* Project Links */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Project
                </motion.a>

                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigator.share && navigator.share({ title: project.title, url: window.location.href })}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share Project
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div 
            className="mb-16 relative max-w-5xl mx-auto"
            variants={imageVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Glow effect */}
              <motion.div 
                className={`absolute -inset-4 opacity-20 bg-gradient-to-r ${project.color} rounded-3xl blur-xl`}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Technologies Used */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {project.tech.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
                      <div className="w-12 h-12 mx-auto flex items-center justify-center">
                        <Image
                          src={tech.icon}
                          alt={tech.name || 'Technology'}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Info Sidebar */}
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Project Category */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.some(t => t.icon.includes('figma')) && (
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                      UI/UX Design
                    </span>
                  )}
                  {project.tech.some(t => t.icon.includes('angular') || t.icon.includes('laravel') || t.icon.includes('html5') || t.icon.includes('nodejs')) && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                      Web Development
                    </span>
                  )}
                  {project.tech.some(t => t.icon.includes('arduino') || t.icon.includes('easyeda') || t.icon.includes('c-programming')) && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                      Hardware
                    </span>
                  )}
                </div>
              </div>

              {/* Tech Stack Count */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {project.tech.length}
                </div>
                <p className="text-gray-300 text-sm">Technologies Used</p>
              </div>

              {/* Project Status */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Status</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Completed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Projects */}
          {getRelatedProjects().length > 0 && (
            <motion.div
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {getRelatedProjects().map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.slug}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <Link href={`/projects/${relatedProject.slug}`} className="block h-full">
                      <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                            {relatedProject.title}
                          </h3>
                          <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                            {relatedProject.description}
                          </p>
                          <div className="flex items-center text-blue-400 text-sm font-medium">
                            View Project
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <div className="p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-6">Interested in Working Together?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects. 
                Let's connect and create something amazing together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.div>
  );
}