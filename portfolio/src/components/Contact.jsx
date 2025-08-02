'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gray-100 text-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Feel free to reach out via email or connect on LinkedIn.</p>
        <a href="mailto:you@example.com" className="text-blue-600 text-lg hover:underline">
          you@example.com
        </a>
      </div>
    </motion.section>
  );
}