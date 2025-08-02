'use client';

import { motion } from 'framer-motion';


export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-white text-gray-800 text-center md:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m Saranga, a passionate full stack developer who loves turning ideas into scalable, user-friendly web apps. I enjoy building intuitive UIs and robust backend systems. My goal is to create software that makes a real impact.
        </p>
      </div>
    </motion.section>
  );
}
