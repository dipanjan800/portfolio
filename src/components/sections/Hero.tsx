'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { AnimatedText } from '../ui/AnimatedText'
import { MagneticButton } from '../ui/MagneticButton'
import { ArrowDown } from 'lucide-react'

// Simple ThreeJS AI Core Particle Component
function AICore() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Holographic Core
    const geometry = new THREE.IcosahedronGeometry(2, 2)
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x3b82f6, 
      wireframe: true,
      transparent: true,
      opacity: 0.5
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 700
    const posArray = new Float32Array(particlesCount * 3)

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX)
      mouseY = (event.clientY - windowHalfY)
    }

    document.addEventListener('mousemove', onDocumentMouseMove)

    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      targetX = mouseX * 0.001
      targetY = mouseY * 0.001

      sphere.rotation.y += 0.005
      sphere.rotation.x += 0.002
      
      sphere.rotation.y += 0.05 * (targetX - sphere.rotation.y)
      sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x)

      particlesMesh.rotation.y = -elapsedTime * 0.05

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', onDocumentMouseMove)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 60%)'
      }}
    />
  )
}

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center overflow-hidden pt-24 pb-20">
      <AICore />
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center flex-1 justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-md"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Available for work</span>
        </motion.div>
        
        <AnimatedText 
          text="DIPANJAN MURMU" 
          el="h1" 
          className="font-heading text-[34px] sm:text-[46px] md:text-[70px] lg:text-[126px] font-extrabold tracking-tighter mb-4 text-white whitespace-nowrap" 
        />
        
        <div className="h-12 md:h-16 mb-6">
          <motion.h2 
            className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 font-medium">
              AI Website Developer
            </span> & Creative Technologist
          </motion.h2>
        </div>
        
        <motion.p 
          className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          "I design intelligent digital experiences that combine beautiful interfaces, automation, and AI."
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <MagneticButton onClick={() => router.push('/work')} className="bg-accent text-white hover:bg-accent/90 px-8 py-4">
            Explore My Work
          </MagneticButton>
          <MagneticButton onClick={() => {
            const link = document.createElement('a');
            link.href = '/cv.pdf';
            link.download = 'Dipanjan_Murmu_CV.pdf';
            link.click();
          }} className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-4">
            Download CV
          </MagneticButton>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-gray-500 flex flex-col items-center gap-2 z-20 mt-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  )
}
