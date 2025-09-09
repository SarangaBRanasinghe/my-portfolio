'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const achievements = [
  {
    title: "🏆 CodeRush 2024 – Merit Award (7th Place))",
    description: `Secured a Merit Award (7th place) at CodeRush 2024, the hackathon organized by INTECS, University of Moratuwa. Collaborated with an amazing team to solve real-world challenges under tight deadlines, showcasing creativity, teamwork, and problem-solving skills.`,
    date: "2024",
    images: [
      "/sr 2.jpg",
      "/cr 1.jpg",
      
    ],
    linkedin: "https://www.linkedin.com/posts/activity-7356594640407416832-DMQa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETrCAYBMqUBReyyJ1_rNue-Z3-_fFZAYPE",
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
  },
];

export default function Achievements() {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const prevAchievement = () => {
    setCurrentAchievement((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
    setCurrentImage(0);
  };

  const nextAchievement = () => {
    setCurrentAchievement((prev) =>
      prev === achievements.length - 1 ? 0 : prev + 1
    );
    setCurrentImage(0);
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
        <p className="text-lg text-gray-300">
          Celebrating milestones from my journey so far.
        </p>
      </div>

      {/* Main Card */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image slider */}
        <motion.div
          key={achievement.title + currentImage}
          className="flex-1 rounded-2xl overflow-hidden shadow-lg relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={achievement.images[currentImage]}
            alt={achievement.title}
            width={600}
            height={400}
            className="w-full h-72 object-cover"
          />

          {/* Image slider controls */}
          {achievement.images.length > 1 && (
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={prevImage}
                className="bg-black/40 hover:bg-black/60 p-2 rounded-full"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="bg-black/40 hover:bg-black/60 p-2 rounded-full"
              >
                →
              </button>
            </div>
          )}
        </motion.div>

        {/* Right: Text */}
<motion.div
  key={achievement.description}
  className="flex-1 text-left"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-2xl font-semibold mb-2">{achievement.title}</h3>
  <p className="text-gray-300 whitespace-pre-line mb-2">{achievement.description}</p>
  <p className="text-sm text-gray-400 mb-6">{achievement.date}</p>

  {/* ✅ Add LinkedIn button here */}
  {achievement.linkedin && (
    <a
      href={achievement.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
    >
      View on LinkedIn
    </a>
  )}
</motion.div>

      </div>

      {/* Achievement navigation */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prevAchievement}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          ←
        </button>
        <button
          onClick={nextAchievement}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
