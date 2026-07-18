'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { projects } from '@/data/portfolio'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import { LikeButton } from '@/components/ui/LikeButton'

export default function WorkPage() {
  const [filter, setFilter] = useState('ALL')
  const categories = ['ALL', ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <main className="pt-32 pb-24 min-h-screen bg-black/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-8 group">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-colors">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">Back to Home</span>
          </Link>
          <AnimatedText 
            text="All Works"
            el="h1"
            className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          />
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive collection of my design, development, and creative projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-accent text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col gap-6"
              >
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-2xl relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-white/5 border border-white/10">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      ['APP UI', 'MOVIE POSTER', 'FLYER', 'SOCIAL MEDIA POST'].includes(project.category) ? 'object-contain p-6' : 'object-cover'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="flex items-center gap-2 text-accent font-medium uppercase tracking-wider text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Case Study <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm tracking-wider uppercase">{project.category}</span>
                    <LikeButton slug={project.slug} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <Link href={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </main>
  )
}
