'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20create%20a%20poster%20/reel%20/invite"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          className="absolute right-full mr-4 px-4 py-2 bg-dark-800 border border-primary-teal/50 rounded-lg whitespace-nowrap pointer-events-none"
        >
          <p className="text-white font-raleway font-semibold">Chat with us!</p>
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-primary-teal/50"></div>
        </motion.div>

        {/* Button */}
        <div className="relative">
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

          {/* Main button */}
          <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg glow-teal-strong transition-colors">
            <FaWhatsapp className="text-4xl text-white" />
          </div>

          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-dark-900 animate-pulse"></span>
        </div>
      </motion.a>
    </motion.div>
  )
}
