'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/SarangaBRanasinghe',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://lk.linkedin.com/in/saranga-ranasinghe-372288283',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Dribbble', 
      href: 'https://dribbble.com/Saranga183',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.285 5.737-.3-.1-3.3-.6-6.241-.3-.1-.2-.2-.4-.4-.7-.2-.4-.4-.8-.6-1.2 3.2-1.3 4.7-3.2 4.956-3.537zm-1.545 7.05c-.1.4-.3.8-.5 1.1-.4.6-.9 1.1-1.4 1.4-.6.4-1.2.6-1.9.6s-1.3-.2-1.9-.6c-.5-.3-1-.8-1.4-1.4-.2-.3-.4-.7-.5-1.1 2.9-.7 5.9-.3 6.141 0zm-6.617-8.9c.6.1 1.1.4 1.5.8.4.4.7.9.8 1.5-.3.1-2.9.7-5.7.2C8.326 3.7 9.4 2.8 11.406 3.452zm-2.882 1.05c-1.9.5-3.5 1.7-4.4 3.4-.1.2-.2.4-.2.6 2.7.4 5.4-.2 5.7-.3.1-.6.3-1.2.6-1.7.2-.5.4-.9.7-1.3-.1-.2-.2-.4-.4-.7zm-2.116 5.2c.1-.6.4-1.1.8-1.5.4-.4.9-.7 1.5-.8.6-.1 1.2 0 1.7.3-.1.3-.3.6-.5.9-.2.3-.5.5-.8.7-.6.4-1.2.6-1.9.6-.3 0-.5-.1-.8-.2zm1.282 2.9c.5.3 1 .4 1.6.4.6 0 1.1-.1 1.6-.4.4-.2.8-.5 1.1-.9.2-.3.4-.6.5-.9-2.8.6-5.6.1-5.9 0 .1.3.3.6.5.9.2.3.4.6.6.9zm7.314-.9c-.1-.4-.3-.7-.5-1-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.3s-.8.1-1.1.3c-.3.2-.6.5-.8.8-.2.3-.4.6-.5 1 2.7.5 5.5.1 5.8 0z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative">
      {/* Material Design elevation with subtle shadow */}
      <div className="absolute inset-0 shadow-[0_-2px_16px_rgba(0,0,0,0.3)]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand Section - Material Design typography hierarchy */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-normal tracking-wide mb-4 text-white">
              Saranga
            </h3>
            <p className="text-gray-300 leading-7 mb-8 max-w-md text-base font-normal">
              Full Stack Developer passionate about creating innovative web solutions that make a difference. Let's build something amazing together.
            </p>
            
            {/* Social links with Material Design touch targets (48dp minimum) */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  viewport={{ once: true }}
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Material Design spacing */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-6 text-white">Quick Links</h4>
            <nav>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.2 + index * 0.05,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ease-out text-base font-normal py-1 px-2 -mx-2 rounded hover:bg-white/10 inline-block focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info - Material Design icons and spacing */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="mailto:saranga@example.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ease-out focus:outline-none focus:underline"
                >
                  sarangaranasingheofficial@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a 
                  href="tel:+94771234567" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ease-out focus:outline-none focus:underline"
                >
                  +94 71 550 5206
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-red-500/20 text-red-400 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">Matale, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with Material Design specifications */}
        <div className="mt-12 mb-8">
          <div className="h-px bg-gray-700"></div>
        </div>

        {/* Bottom Section with Material Design layout */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm font-normal">
            © {currentYear} Saranga. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200 ease-out text-sm font-normal focus:outline-none focus:underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200 ease-out text-sm font-normal focus:outline-none focus:underline"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button - Material Design FAB */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-blue-400/50 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}
