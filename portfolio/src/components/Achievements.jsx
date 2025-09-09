'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const achievements = [
  {
    title: "Winner - Hackathon 2024",
    description: "Built an AI-powered health tracking app with a team of 4 and secured 1st place.",
    date: "March 2024",
    link: "#",
    image: "/images/achievements/hackathon.jpg",
  },
  {
    title: "Dean’s List Award",
    description: "Recognized for outstanding academic performance during IT undergraduate studies.",
    date: "2023",
    link: "#",
    image: "/images/achievements/deanslist.jpg",
  }
];

export default function Achievements() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="achievements"
      className="py-20 px-6 md:px-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Milestones I’m proud of in my journey.
        </motion.p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image Card */}
        <motion.div
          key={achievements[current].title}
          className="flex-1 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={achievements[current].image}
            alt={achievements[current].title}
            width={600}
            height={400}
            className="w-full h-72 object-cover"
          />
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          key={achievements[current].description}
          className="flex-1 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            {achievements[current].title}
          </h3>
          <p className="text-gray-300 mb-2">{achievements[current].description}</p>
          <p className="text-sm text-gray-400 mb-6">{achievements[current].date}</p>
          {achievements[current].link && (
            <a
              href={achievements[current].link}
              target="_blank"
              className="inline-block px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition"
            >
              Explore More
            </a>
          )}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
