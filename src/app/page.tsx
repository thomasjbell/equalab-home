"use client";

import { motion } from "framer-motion";
import { 
  BeakerIcon, 
  CalculatorIcon, 
  SparklesIcon,
  ArrowTopRightOnSquareIcon 
} from "@heroicons/react/24/outline";
import LittleLogo from "./components/ui/LittleLogo";
import LittleMaterials from "./components/ui/LittleMaterials";
import LittleEquations from "./components/ui/LittleEquations";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400 to-blue-600 rounded-3xl blur-2xl opacity-25"></div>
            
                  <LittleLogo className="w-24 h-24" />
       
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                EquaLab
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive tools for scientists and engineers
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                <SparklesIcon className="w-4 h-4" />
                <span>Advanced Calculations</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                <BeakerIcon className="w-4 h-4" />
                <span>Material Properties</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                <CalculatorIcon className="w-4 h-4" />
                <span>Symbolic Math</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Tool Cards */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={itemVariants}
          >
            {/* Materials Card */}
            <motion.a
              href="https://materials.equalab.uk"
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 overflow-hidden transition-all duration-200 hover:shadow-2xl hover:border-emerald-300/50 dark:hover:border-emerald-600/50">
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <LittleMaterials className="w-10 h-10" />
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Materials
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Access our comprehensive database of material properties, from metals and ceramics to polymers and composites.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm font-medium rounded-full">
                      Properties Database
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 text-sm font-medium rounded-full">
                      Material Search
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all group-hover:shadow-lg">
                    <BeakerIcon className="w-5 h-5" />
                    Explore Materials
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Equations Card */}
            <motion.a
              href="https://equations.equalab.uk"
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 overflow-hidden transition-all duration-200 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-600/50">
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <LittleEquations className="w-10 h-10" />
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Equations
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Calculate and visualise scientific and mathematical equations with exact symbolic computation and interactive tools.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      Symbolic Maths
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
                      Interactive Solver
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all group-hover:shadow-lg">
                    <CalculatorIcon className="w-5 h-5" />
                    Explore Equations
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div 
            className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Tools Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're expanding the EquaLab toolkit with additional scientific and engineering tools. 
              Stay tuned for data analysis, simulation tools, and more.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.footer 
            className="text-center pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
            variants={itemVariants}
          >
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} EquaLab | Created by{" "}          
                  <a
                    href="https://webbldesign.vercel.app"
                    className="hover:bg-gradient-to-r hover:from-violet-400 hover:to-fuchsia-400 bg-clip-text text-transparent transition-colors bg-gray-400 duration-200"
                  >
                    webbl design
                  </a>
           
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}