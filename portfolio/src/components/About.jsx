'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full translate-y-32 -translate-x-32 opacity-30" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center md:text-left">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
            <span className="absolute -bottom-2 left-0 md:left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I'm Saranga, a passionate full stack developer who loves turning creative ideas into scalable, user-friendly web applications. With a keen eye for design and a deep understanding of modern technologies, I bridge the gap between beautiful interfaces and robust backend systems.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                My journey in software development is driven by the desire to create meaningful digital experiences that make a real impact on users' lives. I believe in writing clean, efficient code and following best practices to deliver exceptional results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {['Problem Solver', 'Creative Thinker', 'Team Player'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Projects Completed', value: '25+' },
                { label: 'Technologies Mastered', value: '10+' },
                { label: 'Client Satisfaction', value: '100%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-600 font-medium">{stat.label}</span>
                  <span className="text-xl font-bold text-gray-800">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}