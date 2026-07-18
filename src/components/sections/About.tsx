'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { GlassCard } from '../ui/GlassCard'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
          
          {/* Left Column - Heading */}
          <div className="w-full md:w-1/3">
            <div className="sticky top-32">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
              >
                01. About Me
              </motion.span>
              <AnimatedText 
                text="Crafting digital excellence."
                el="h2"
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-2/3">
            <GlassCard delay={0.2} className="mb-8 p-8 md:p-12 border-accent/20">
              <AnimatedText
                text="Front-End Designer with 7+ years of experience specializing in UI/UX design and modern web development."
                el="h3"
                className="text-2xl md:text-3xl font-medium text-white mb-6 leading-tight"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6 text-gray-400 text-lg leading-relaxed"
              >
                <p>
                  I am skilled in creating clean, responsive interfaces that prioritize user experience, accessibility, and breathtaking aesthetics. My approach blends artistic vision with technical precision.
                </p>
                <p>
                  I am proficient in turning complex design concepts into functional, pixel-perfect web applications. I am deeply passionate about design systems, usability, and leveraging AI technologies to deliver high-quality, next-generation digital experiences.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-8">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-1">7+</h4>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-1">20+</h4>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Clients</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-accent mb-1">100%</h4>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">AI Ready</span>
                  </div>
                </div>
              </motion.div>
            </GlassCard>
          </div>
          
        </div>
      </div>
    </section>
  )
}
