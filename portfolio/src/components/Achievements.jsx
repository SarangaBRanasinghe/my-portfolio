'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const achievements = [
  {
    title: "🏆 CodeRush 2024 – Merit Award (7th Place)",
    description: `Secured a Merit Award (7th place) at CodeRush 2024, the hackathon organized by INTECS, University of Moratuwa. Collaborated with an amazing team to solve real-world challenges under tight deadlines, showcasing creativity, teamwork, and problem-solving skills.`,
    date: "2024",
    images: [
      "/sr 2.jpg",
      "/cr 1.jpg",
    ],
    linkedin: "https://www.linkedin.com/posts/activity-7356594640407416832-DMQa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETrCAYBMqUBReyyJ1_rNue-Z3-_fFZAYPE",
    category: "Hackathon",
    skills: ["Problem Solving", "Teamwork", "Innovation"],
  },
  {
    title: "🚀 HackElite 1.0 – Finalist",
    description: `Selected as finalists at HackElite 1.0 Ideathon, organized by the University of Moratuwa WIE IEEE Student Branch. Worked with a talented team to brainstorm and present innovative solutions, making it to the top 7 teams of the competition.`,
    date: "2024",
    images: [
      "/selestialhero2.jpg",
      "/selestial3.jpg",
      "/selestialhero1.jpg",
    ],
    linkedin: "https://www.linkedin.com/posts/activity-7251838230642241536-4H9V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETrCAYBMqUBReyyJ1_rNue-Z3-_fFZAYPE",
    category: "Ideathon",
    skills: ["Innovation", "Presentation", "Strategic Thinking"],
  },
];

export default function Achievements() {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const switchAchievement = (newIndex) => {
    if (isAnimating || newIndex === currentAchievement) return;
    
    setIsAnimating(true);
    setCurrentAchievement(newIndex);
    setCurrentImage(0);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevAchievement = () => {
    const newIndex = currentAchievement === 0 ? achievements.length - 1 : currentAchievement - 1;
    switchAchievement(newIndex);
  };

  const nextAchievement = () => {
    const newIndex = currentAchievement === achievements.length - 1 ? 0 : currentAchievement + 1;
    switchAchievement(newIndex);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0
        ? achievements[currentAchievement].images.length - 1
        : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === achievements[currentAchievement].images.length - 1
        ? 0
        : prev + 1
    );
  };

  const achievement = achievements[currentAchievement];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="achievements"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium mb-4 border border-purple-500/30">
              My Journey
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Achievements
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Celebrating milestones and recognitions from my journey in technology and innovation.
          </motion.p>
        </div>

        {/* Achievement Counter */}
        <motion.div 
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <div className="flex gap-3">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => switchAchievement(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAchievement 
                    ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/50' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Achievement Card */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={cardVariants}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <motion.div
                  key={achievement.title + currentImage}
                  className="relative h-64 md:h-80 lg:h-96"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={achievement.images[currentImage]}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Image navigation */}
                  {achievement.images.length > 1 && (
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                      <motion.button
                        onClick={prevImage}
                        className="w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        onClick={nextImage}
                        className="w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  )}
                  
                  {/* Image indicators */}
                  {achievement.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {achievement.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
                      {achievement.category}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {achievement.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn Button */}
                  {achievement.linkedin && (
                    <motion.a
                      href={achievement.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 rounded-xl text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="relative z-10">View on LinkedIn</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div 
          className="flex justify-center gap-4 mt-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={prevAchievement}
            disabled={isAnimating}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={nextAchievement}
            disabled={isAnimating}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}