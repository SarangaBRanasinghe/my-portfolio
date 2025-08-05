'use client';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiPostman,
  SiJira,
  SiDart
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const skills = {
  'Programming Languages': [SiJavascript, SiTypescript, FaCode, FaJava, SiDart],
  'Frameworks': [SiReact],
  'Tools & Platforms': [SiTailwindcss, SiFigma, SiGithub, SiPostman, SiJira],
  'Database': [SiJavascript, SiTypescript], // Placeholder, replace with actual database icons if needed
};

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-white text-center">My Skills</h2>
      {Object.entries(skills).map(([category, icons]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {icons.map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="text-5xl text-blue-400"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}
