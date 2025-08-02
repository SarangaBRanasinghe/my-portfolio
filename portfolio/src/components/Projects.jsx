'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: '🛍️',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#',
      image: '📋',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization and automated reporting.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      link: '#',
      image: '📊',
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform with video streaming, progress tracking, and interactive assessments.',
      tech: ['Angular', 'NestJS', 'MySQL', 'AWS'],
      link: '#',
      image: '🎓',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies and user-centered design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project icon/image */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {project.image}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-white/10 text-gray-200 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 text-white font-medium group-hover:text-purple-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${project.color} rounded-2xl transition-opacity duration-500 -z-10 blur-xl`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}