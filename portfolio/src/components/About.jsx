'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full translate-y-32 -translate-x-32 opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center md:text-left">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
            {/* <span className="absolute -bottom-2 left-0 md:left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" /> */}
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Left side - Text content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                I am Saranga, a passionate Software Engineer and UI/UX Designer dedicated to transforming creative ideas into engaging, user-friendly digital experiences. With clean design and functional development, I create seamless interfaces and scalable web applications that are both beautiful and intuitive. I stay up to date with modern technologies and adapt quickly to evolving trends.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Whether I am wireframing a user flow or deploying a full-stack application, I bring both a designer's eye for detail and a developer's precision to every project.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
              My goal is to create meaningful digital products that not only look good but also effectively solve real-world problems.
              </p>
              
      
            </div>
            
            {/* Right side - Professional Circular Image */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                {/* Layered circular backgrounds for depth */}
                <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full opacity-20 scale-110" />
                <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 scale-105" />
                
                {/* Main circular image container */}
                <motion.div
                  className="relative w-67 h-67 rounded-full overflow-hidden bg-white shadow-2xl border-4 border-white"
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
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Professional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-full" />
                  
                  {/* Professional status indicator */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm" />
                  </div>
                </motion.div>
                
                {/* Floating professional badges */}
                <motion.div
                  className="absolute -top-3 -left-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-medium text-blue-600">UI/UX</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-3 -right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-medium text-purple-600">Full-Stack</span>
                </motion.div>
                
                {/* Subtle geometric accents */}
                <div className="absolute top-8 -left-4 w-3 h-3 border-2 border-purple-300 rounded-full opacity-60" />
                <div className="absolute bottom-8 -right-4 w-2 h-2 bg-blue-400 rounded-full opacity-70 shadow-sm" />
                
                {/* Professional glow effect */}
                <div className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}