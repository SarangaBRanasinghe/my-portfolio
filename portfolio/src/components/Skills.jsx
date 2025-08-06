'use client';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiAngular,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiLaravel,
  SiFigma,
  SiGithub,
  SiPostman,
  SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Custom C icon as SVG since react-icons doesn't have a good C icon
const CIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M16.5985 9.4414c-.6172-.8789-1.4648-1.5117-2.543-1.8984-.6406-.2305-1.3359-.3457-2.0859-.3457-1.2539 0-2.3789.2891-3.375.8672-.9961.5781-1.7773 1.3867-2.3438 2.4258-.5664 1.0391-.8496 2.2266-.8496 3.5625 0 1.3359.2832 2.5234.8496 3.5625.5665 1.0391 1.3477 1.8477 2.3438 2.4258.9961.5781 2.1211.8672 3.375.8672.75 0 1.4453-.1152 2.0859-.3457 1.0782-.3867 1.9258-1.0195 2.543-1.8984l-2.25-1.5c-.3516.4922-.7734.8516-1.2656 1.0781-.4922.2266-.9961.3398-1.5117.3398-.7969 0-1.4961-.1875-2.0977-.5625-.6016-.375-1.0664-.8906-1.3945-1.5469-.3281-.6563-.4922-1.3945-.4922-2.2148 0-.8203.1641-1.5586.4922-2.2148.3281-.6563.793-1.1719 1.3945-1.5469.6016-.375 1.3008-.5625 2.0977-.5625.5156 0 1.0195.1133 1.5117.3398.4922.2266.9141.5859 1.2656 1.0781l2.25-1.5z"/>
  </svg>
);

// Custom MS SQL Server icon as SVG
const MSSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M18.5 2.5c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2h-13c-1.1 0-2-.9-2-2v-15c0-1.1.9-2 2-2h13m0-1.5h-13c-1.9 0-3.5 1.6-3.5 3.5v15c0 1.9 1.6 3.5 3.5 3.5h13c1.9 0 3.5-1.6 3.5-3.5v-15c0-1.9-1.6-3.5-3.5-3.5z"/>
    <path d="M7.5 7h9v1.5h-9V7zm0 3h9v1.5h-9V10zm0 3h6v1.5h-6V13zm0 3h9v1.5h-9V16z"/>
  </svg>
);

const skills = {
  'Programming Languages': [
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { Icon: CIcon, color: '#A8B9CC', name: 'C' },
    { Icon: SiPhp, color: '#777BB4', name: 'PHP' },
    { Icon: FaJava, color: '#ED8B00', name: 'Java' }
  ],
  'Frameworks': [
    { Icon: SiAngular, color: '#DD0031', name: 'Angular' },
    { Icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
    { Icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
    { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
    { Icon: SiLaravel, color: '#FF2D20', name: 'Laravel' }
  ],
  'Tools': [
    { Icon: SiFigma, color: '#F24E1E', name: 'Figma' },
    { Icon: SiGithub, color: '#181717', name: 'GitHub' },
    { Icon: SiPostman, color: '#FF6C37', name: 'Postman' }
  ],
  'Databases': [
    { Icon: SiMysql, color: '#4479A1', name: 'MySQL' },
    { Icon: MSSQLIcon, color: '#CC2927', name: 'MS SQL' }
  ]
};

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Background decoration following material design */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl -z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl -z-10"></div>
        <motion.h2 
          className="text-5xl font-bold mb-16 text-white text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div 
            key={category} 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 + 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {skillList.map(({ Icon, color, name }, i) => (
                <motion.div
                  key={i}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + categoryIndex * 0.2 + 0.4 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center shadow-xl border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div 
                      className="transition-all duration-300 filter drop-shadow-lg"
                      style={{ color: color }}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}