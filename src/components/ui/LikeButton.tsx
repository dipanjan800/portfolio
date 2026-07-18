'use client'

import React, { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface LikeButtonProps {
  slug: string
}

export function LikeButton({ slug }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Generate a deterministic random initial like count based on the slug string
    const initialLikes = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 400 + 50
    
    // Check if user has liked this before
    const savedLiked = localStorage.getItem(`liked_${slug}`) === 'true'
    setLiked(savedLiked)
    setLikes(savedLiked ? initialLikes + 1 : initialLikes)
    setMounted(true)
  }, [slug])

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (liked) {
      setLiked(false)
      setLikes(prev => prev - 1)
      localStorage.setItem(`liked_${slug}`, 'false')
    } else {
      setLiked(true)
      setLikes(prev => prev + 1)
      localStorage.setItem(`liked_${slug}`, 'true')
    }
  }

  if (!mounted) {
    // Placeholder to prevent layout shift before hydration
    return <div className="h-6 w-16" />
  }

  return (
    <button 
      onClick={handleLike}
      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-500 transition-colors focus:outline-none group z-20 relative cursor-pointer"
    >
      <span className="font-medium text-gray-300 min-w-[3ch] text-right">{likes}</span>
      <motion.div
        whileTap={{ scale: 0.8 }}
        animate={liked ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <Heart 
          size={18} 
          className={`transition-colors duration-300 ${liked ? 'fill-red-500 text-red-500' : 'group-hover:text-red-500'}`} 
        />
      </motion.div>
    </button>
  )
}
