'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git', 'Figma'
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-white text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
