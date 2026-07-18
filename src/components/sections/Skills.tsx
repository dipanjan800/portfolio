'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { skills } from '@/data/portfolio'

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section className="py-24 md:py-32 relative bg-black/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            05. Arsenal
          </motion.span>
          <AnimatedText 
            text="Skills & Technologies"
            el="h2"
            className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Frontend</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.frontend.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-default">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Design</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.design.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-default">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">AI</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.ai.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-default">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Soft Skills</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.soft.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-colors cursor-default">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
