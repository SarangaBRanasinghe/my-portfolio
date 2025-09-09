'use client';

import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Winner - Hackathon 2024",
    description: "Built an AI-powered health tracking app with a team of 4 and secured 1st place.",
    date: "March 2024",
    link: "#", // replace with certificate or LinkedIn post
    icon: "🏆"
  },
  {
    title: "Dean’s List Award",
    description: "Recognized for outstanding academic performance during IT undergraduate studies.",
    date: "2023",
    link: "#",
    icon: "🎓"
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white"
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
          Some of the milestones I’m proud of in my journey as a developer.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achieve, index) => (
          <motion.div
            key={index}
            className="bg-white/10 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-4xl mb-4">{achieve.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{achieve.title}</h3>
            <p className="text-gray-300 mb-3">{achieve.description}</p>
            <p className="text-sm text-gray-400 mb-4">{achieve.date}</p>
            {achieve.link && (
              <a
                href={achieve.link}
                target="_blank"
                className="inline-block text-sm font-medium text-purple-400 hover:text-purple-300 transition"
              >
                View Certificate ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
