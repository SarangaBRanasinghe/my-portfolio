'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-32 bg-gradient-to-br from-purple-800 to-blue-900 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 z-0" />

      <div className="z-10 mb-8 md:mb-0 md:mr-12">
        <img src="/profile.png" alt="Profile" className="w-60 h-auto rounded-full object-cover" />
      </div>

      <div className="z-10 text-center md:text-left text-white">
        <h2 className="text-3xl italic mb-2">Hello,</h2>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">I AM SARANGA</h1>
        <p className="text-2xl font-semibold mb-6">Full stack Developer</p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 rounded-full text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}