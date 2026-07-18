'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from './MagneticButton'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn('glass-card p-6 md:p-8', className)}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
