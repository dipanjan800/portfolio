'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '../ui/MagneticButton'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "flex items-center justify-between mx-auto max-w-5xl rounded-full transition-all duration-500",
          scrolled ? "bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 shadow-2xl" : "px-2 py-2"
        )}>
          <Link href="/" className="font-heading font-bold text-xl tracking-tighter text-white">
            DM<span className="text-accent">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={pathname === '/' ? item.href : `/${item.href}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link 
            href={pathname === '/' ? '#contact' : '/#contact'} 
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black font-medium text-sm transition-transform hover:scale-105 active:scale-95"
          >
            Let's Talk
          </Link>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
