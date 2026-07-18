'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from './MagneticButton'

interface AnimatedTextProps {
  text: string
  className?: string
  el?: keyof JSX.IntrinsicElements
  once?: boolean
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once = true,
}: AnimatedTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })

  return (
    <Wrapper className={cn(className)} ref={ref}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        aria-hidden
      >
        {text.split(' ').map((word, wordIndex) => (
          <span className="inline-block" key={`${word}-${wordIndex}`}>
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                className="inline-block"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
