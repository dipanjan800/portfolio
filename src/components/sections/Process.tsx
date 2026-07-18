'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { Search, PenTool, Code, Rocket } from 'lucide-react'

const steps = [
  {
    title: 'Research',
    description: 'Competitor Analysis & Wireframes',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'UI Design',
    description: 'Figma, Photoshop, Illustrator',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Development',
    description: 'Modern Front-End, React, Next.js',
    icon: <Code className="w-6 h-6" />
  },
  {
    title: 'Launch',
    description: 'Testing, Optimization & Deployment',
    icon: <Rocket className="w-6 h-6" />
  }
]

export function Process() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            06. Workflow
          </motion.span>
          <AnimatedText 
            text="Design Process"
            el="h2"
            className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Indicator */}
                <div className="w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center text-xl font-bold text-gray-400 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 z-10 mb-6 bg-black relative">
                  0{index + 1}
                  <div className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
                
                <div className="glass p-6 rounded-2xl w-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 text-accent">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
