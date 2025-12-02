'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPaintBrush, FaRocket, FaHeart } from 'react-icons/fa'
import content from '@/config/content.json'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Avatar */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Placeholder for your image - replace with actual image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-teal to-primary-navy flex items-center justify-center glow-teal-strong">
                <div className="text-center p-8">
                  <FaPaintBrush className="text-9xl text-white mb-4 mx-auto animate-float" />
                  <p className="text-2xl font-raleway text-white">Creative Designer</p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-teal/100 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-navy rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-raleway mb-6 text-gradient-primary">
              {content.about.heading}
            </h2>

            <h3 className="text-3xl font-raleway font-bold mb-6 text-white">
              {content.about.title}
            </h3>

            {content.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 mb-6 leading-relaxed font-raleway">
                {paragraph}
              </p>
            ))}

            {/* Key features */}
            <div className="space-y-4">
              {content.about.features.map((feature, index) => {
                const icons = [FaRocket, FaPaintBrush, FaHeart]
                const Icon = icons[index] || FaPaintBrush
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-teal/20 rounded-lg flex items-center justify-center">
                      <Icon className="text-2xl text-primary-teal" />
                    </div>
                    <div>
                      <h4 className="text-xl font-raleway font-semibold mb-1 text-white">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
