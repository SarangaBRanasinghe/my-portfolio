'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiUser,
  HiPaperAirplane
} from 'react-icons/hi';
import {
  FaLinkedinIn
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'sarangaranasingheofficial@gmail.com',
      href: 'mailto:sarangaranasingheofficial@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Send me an email anytime'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+94 71 550 5206',
      href: 'tel:+94715505206',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Call for immediate response'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Matale, Sri Lanka',
      href: 'https://maps.app.goo.gl/eCNUi69bfin9K9ha7',
      gradient: 'from-red-500 to-pink-500',
      description: 'Available for local meetings'
    },
    {
      icon: FaLinkedinIn,
      title: 'LinkedIn',
      value: 'linkedin.com/in/saranga',
      href: 'https://lk.linkedin.com/in/saranga-ranasinghe-372288283',
      gradient: 'from-blue-600 to-blue-800',
      description: 'Connect professionally'
    }
  ];

  const socialLinks = [];

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-sm">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I would love to hear about your project and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mr-4">
                <HiPaperAirplane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Send Me a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="flex items-center text-gray-200 font-medium mb-3">
                  <HiUser className="w-5 h-5 mr-2 text-purple-400" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-white/30"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="flex items-center text-gray-200 font-medium mb-3">
                  <HiMail className="w-5 h-5 mr-2 text-blue-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 group-hover:border-white/30"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="flex items-center text-gray-200 font-medium mb-3">
                  <HiPaperAirplane className="w-5 h-5 mr-2 text-pink-400" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:bg-white/15 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 resize-none group-hover:border-white/30"
                  placeholder="Tell me about your project, ideas, or questions..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                I am always open to discussing new opportunities, interesting projects, and creative collaborations. Whether you have a question or just want to say hi, I will try my best to get back to you!
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300 block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 p-2 bg-gradient-to-r ${info.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-white font-semibold text-base mb-1">{info.title}</h4>
                      <p className="text-gray-300 text-sm truncate group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}