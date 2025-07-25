'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import ExperimentCard from '@/components/ExperimentCard';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  const experiments = Array.from({ length: 10 }, (_, i) => i + 1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', updateMousePosition);
    }
    
    // Set loaded after a delay
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', updateMousePosition);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
        <div 
          className="absolute inset-0 mouse-glow"
          style={{
            '--mouse-x': `${typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth) * 100 : 50}%`,
            '--mouse-y': `${typeof window !== 'undefined' ? (mousePosition.y / window.innerHeight) * 100 : 50}%`,
          } as React.CSSProperties}
        />
        <div className="absolute inset-0 animated-grid" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) || 1000, -100],
              x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="flex flex-col items-center justify-center min-h-screen px-8 text-center relative z-10"
      >
        {/* Glowing orb behind title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-96 h-96 rounded-full bg-gradient-to-r from-white via-gray-300 to-white blur-3xl opacity-20"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Harsh Partap Jain
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative z-20"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 font-light tracking-wide">
            Full Stack 1 –{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-semibold">
                Experiments Showcase
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </span>
          </p>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                animate={{ y: [8, 20, 8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 blur-sm" />
            </div>
            <p className="text-xs text-gray-500 mt-2 tracking-widest">SCROLL</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experiments Grid */}
      <section id="experiments" className="px-8 py-32 max-w-7xl mx-auto relative z-10">
        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent mb-16 opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Experiments
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto max-w-xs mb-6"
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a collection of interactive experiments showcasing modern web technologies
            and creative coding solutions.
          </p>
        </motion.div>
        
        {/* Grid container with enhanced styling */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Grid background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 blur-3xl rounded-3xl" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 relative z-10">
            {experiments.map((experimentNumber, index) => (
              <ExperimentCard
                key={experimentNumber}
                experimentNumber={experimentNumber}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 py-16">
        {/* Footer divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8 opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-4"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Harsh Partap Jain
            </h3>
          </motion.div>
          
          <p className="text-gray-500 text-sm tracking-wide mb-6">
            © 2025 • Built with Next.js, Tailwind CSS & Framer Motion
          </p>
          
          {/* Tech stack indicators */}
          <div className="flex justify-center space-x-6 text-xs text-gray-600">
            {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 border border-gray-800 rounded-full hover:border-gray-600 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </footer>
      </div>
      <FloatingNav />
    </>
  );
}
