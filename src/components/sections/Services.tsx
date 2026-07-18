'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Code2, Box, Zap } from 'lucide-react'
import { services } from '@/data/portfolio'

// Define a custom SVG for the bezier curve icon (Web Design)
const BezierIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18" />
    <path d="m18 9-5-5-5 5" />
    <path d="M13 4v16" />
    <rect width="4" height="4" x="3" y="19" rx="1" />
    <rect width="4" height="4" x="17" y="19" rx="1" />
    <rect width="4" height="4" x="10" y="3" rx="1" />
    <path d="M10 5a5 5 0 0 0-5 5" />
    <path d="M14 5a5 5 0 0 1 5 5" />
  </svg>
)

const icons = [
  <BezierIcon className="w-8 h-8 text-[#A87ffb]" />,
  <Code2 className="w-8 h-8 text-[#A87ffb]" />,
  <Box className="w-8 h-8 text-[#A87ffb]" />,
  <Zap className="w-8 h-8 text-[#A87ffb]" />
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#0b0c10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-8">
          
          {/* Left Text Section */}
          <div className="xl:w-1/4 flex flex-col justify-start pt-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#A87ffb] uppercase tracking-tight mb-6 flex items-start">
              <div className="flex flex-col leading-[1.1]">
                <span>WHAT</span>
                <span>I DO</span>
              </div>
              <Sparkles className="w-8 h-8 ml-4 mt-2 fill-current" />
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed pr-4 font-light">
              I design, build and ship modern websites and web applications that are fast, responsive and user-focused.
            </p>
          </div>

          {/* Cards Section */}
          <div className="xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-[#1f1f22] hover:bg-[#26262a] rounded-2xl p-6 flex flex-col h-full border border-white/5 hover:border-[#A87ffb]/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#A87ffb]/20 transition-all duration-500 ease-out cursor-default"
              >
                <div className="mb-10 mt-2">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-auto pb-8 font-light">
                  {service.description}
                </p>
                <span className="text-gray-600 font-bold text-xs mt-4 block">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
