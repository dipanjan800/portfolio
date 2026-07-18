import React from 'react'
import Link from 'next/link'
import { AnimatedText } from '../ui/AnimatedText'

export function Footer() {
  return (
    <footer className="bg-black py-12 md:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
              Let's build something <span className="text-accent">extraordinary.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg mb-8">
              Available for freelance opportunities and full-time roles in AI Website Development, UI/UX Design, and Front-End Engineering.
            </p>
            <a href="mailto:dipanjan800@gmail.com" className="inline-block text-2xl font-medium text-white border-b-2 border-accent pb-1 hover:text-accent transition-colors">
              dipanjan800@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex flex-col gap-4 text-left md:text-right">
              <h3 className="font-heading text-xl font-bold text-white mb-2">Connect</h3>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="https://dipanjanmurmu.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">WordPress Portfolio</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
            
            <div className="mt-12 md:mt-0 text-left md:text-right">
              <p className="text-gray-500">© {new Date().getFullYear()} Dipanjan Murmu.</p>
              <p className="text-gray-600 text-sm mt-1">Designed with passion and code.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
