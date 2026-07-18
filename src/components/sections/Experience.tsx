'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { experience } from '@/data/portfolio'

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            04. Journey
          </motion.span>
          <AnimatedText 
            text="Work Experience"
            el="h2"
            className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl"
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-accent origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-accent md:-translate-x-1.5 mt-2 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                  
                  {/* Content */}
                  <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="glass-card p-6 md:p-8 hover:border-accent/30 transition-colors duration-500">
                      <span className="text-accent font-medium text-sm mb-2 block">{job.period}</span>
                      <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                      <h4 className="text-xl text-gray-400 mb-4">{job.company}</h4>
                      <p className="text-gray-500 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
        
      </div>
    </section>
  )
}
