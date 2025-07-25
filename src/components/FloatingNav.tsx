'use client';

import { motion } from 'framer-motion';
import { Home, Code, User, Github, Linkedin } from 'lucide-react';

export default function FloatingNav() {
const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Code, label: 'Experiments', href: '#experiments' },
    { icon: User, label: 'About', href: 'https://www.harshpartapjain.site' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/harshkuro' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/harshpartapjain' },
];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/80 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3">
        <div className="flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group relative"
            >
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              
              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
