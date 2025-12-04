'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import content from '@/config/content.json'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Generate particle data on client only to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{
    id: number
    width: number
    height: number
    left: number
    top: number
    opacity: number
    xMovement: number
    duration: number
  }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        width: Math.random() * 6 + 2,
        height: Math.random() * 6 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.2,
        xMovement: Math.random() * 20 - 10,
        duration: Math.random() * 3 + 2,
      }))
    )
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-navy to-dark-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-teal rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-navy rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-navy rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Video background overlay (placeholder - add your video) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-raleway text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">{content.hero.title}</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-raleway font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 font-raleway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content.hero.services}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-primary-teal hover:brightness-110 text-white font-raleway font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-teal-strong text-lg"
            >
              {content.hero.buttons.portfolio}
            </button>

            <a
              href={`https://wa.me/91${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-raleway font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
            >
              <FaWhatsapp className="text-2xl" />
              {content.hero.buttons.whatsapp}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-primary-teal hover:text-primary-yellow/60 transition-colors"
        >
          <FaArrowDown className="text-3xl" />
        </button>
      </motion.div>

      {/* Floating particles */}
      {particles.length > 0 && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="particle bg-primary-teal/100"
              initial={{ opacity: 0 }}
              animate={{
                opacity: particle.opacity,
                y: [0, -30, 0],
                x: [0, particle.xMovement, 0],
              }}
              style={{
                width: particle.width + 'px',
                height: particle.height + 'px',
                left: particle.left + '%',
                top: particle.top + '%',
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                x: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
