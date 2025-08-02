'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      title: 'MyPortfolio',
      description: 'Personal site built with Next.js and Tailwind.',
      tech: 'Next.js, Tailwind CSS',
      link: '#',
    },
    {
      title: 'TaskTracker',
      description: 'A full-stack todo app with auth and DB.',
      tech: 'React, Node.js, MongoDB',
      link: '#',
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-600 mb-4">Tech: {project.tech}</p>
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}