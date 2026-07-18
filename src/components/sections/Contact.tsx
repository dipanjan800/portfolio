'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { GlassCard } from '../ui/GlassCard'
import { MagneticButton } from '../ui/MagneticButton'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-black/60">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
            >
              07. Contact
            </motion.span>
            <AnimatedText 
              text="Let's start a project together."
              el="h2"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
            />
            <p className="text-gray-400 text-lg mb-8">
              Fill out the form and I'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                <a href="mailto:dipanjan800@gmail.com" className="text-white text-lg hover:text-accent transition-colors">dipanjan800@gmail.com</a>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Phone</h4>
                <a href="tel:+917076689384" className="text-white text-lg hover:text-accent transition-colors">+91 7076689384</a>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                <p className="text-white text-lg">Debra, Paschim Medinipur</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-gray-400">What's your name?</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 focus:border-accent text-white py-2 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-gray-400">What's your email?</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 focus:border-accent text-white py-2 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Tell me about your project</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-transparent border-b border-white/20 focus:border-accent text-white py-2 outline-none transition-colors resize-none"
                    placeholder="Hello Dipanjan, can you help me with..."
                  />
                </div>
                
                <MagneticButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-accent text-white hover:bg-accent/90 w-fit mt-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </MagneticButton>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  )
}
