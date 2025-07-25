'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap } from 'lucide-react';

interface ExperimentCardProps {
  experimentNumber: number;
  index: number;
}

export default function ExperimentCard({ experimentNumber, index }: ExperimentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      className="group perspective-1000"
    >
      <a
        href={`/experiments/exp-${experimentNumber}/index.html`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
      >
        {/* Card background with gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-white rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />
        
        {/* Main card */}
        <div className="relative bg-black border border-gray-800 group-hover:border-white transition-all duration-500 rounded-xl p-6 backdrop-blur-sm">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl" />
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-white bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300"
              >
                <Code className="w-4 h-4" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                  Experiment {experimentNumber}
                </h3>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Zap className="w-3 h-3" />
                  <span>Interactive</span>
                </div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ 
                rotate: 45,
                scale: 1.2
              }}
              transition={{ duration: 0.3 }}
              className="p-2 bg-gradient-to-r from-white to-gray-300 rounded-lg text-black group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>
          
          {/* Content area */}
          <div className="space-y-4">
            {/* Simulated code preview */}
            <div className="bg-gray-900 rounded-lg p-3 border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-500">index.html</span>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-gradient-to-r from-blue-500/30 to-transparent rounded"></div>
                <div className="h-2 bg-gradient-to-r from-green-500/30 to-transparent rounded w-4/5"></div>
                <div className="h-2 bg-gradient-to-r from-purple-500/30 to-transparent rounded w-3/5"></div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Interactive web experiment showcasing modern techniques
            </p>
            
            {/* Status indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span className="text-xs text-green-400">Ready</span>
              </div>
              
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-xs text-gray-500 group-hover:text-white transition-all duration-300"
              >
                View Experiment →
              </motion.span>
            </div>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl blur-xl pointer-events-none" />
        </div>
      </a>
    </motion.div>
  );
}
