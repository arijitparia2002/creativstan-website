'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import content from '@/config/content.json'

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href={whatsappUrl}
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
          className="absolute right-full mr-4 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-[var(--foreground)] shadow-lg pointer-events-none"
        >
          <p className="text-sm font-semibold">{content.floatingWhatsApp.tooltip}</p>
        </motion.div>

        {/* Button */}
        <div className="relative">
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

          {/* Main button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] shadow-lg transition-transform hover:scale-105">
            <FaWhatsapp className="text-4xl text-white" />
          </div>

          {/* Notification dot */}
          <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full border-2 border-[var(--background)] bg-[var(--foreground)]"></span>
        </div>
      </motion.a>
    </motion.div>
  )
}
