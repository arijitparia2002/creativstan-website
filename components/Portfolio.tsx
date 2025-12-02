'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import portfolioData from '@/config/portfolio.json'
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const categories = ['All', 'Posters', 'Wedding Invites', 'Reels', 'YouTube Thumbnails', 'Religious/Cultural']

type PortfolioItem = {
  id: number
  category: string
  title: string
  shortDesc: string
  longDesc: string
  canvaLink: string
  isVideo: boolean
}

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const portfolioItems: PortfolioItem[] = portfolioData.portfolioItems

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  const openCanvaLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-raleway mb-4 text-gradient-primary">
            PORTFOLIO
          </h2>
          <p className="text-xl text-gray-400 font-raleway max-w-2xl mx-auto">
            Explore our creative work. Click any design to view and edit in Canva!
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-raleway font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-teal text-white glow-teal'
                  : 'bg-dark-800 text-gray-400 hover:bg-primary-teal/20 hover:text-primary-teal'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid group relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => openCanvaLink(item.canvaLink)}
            >
              <div className="relative overflow-hidden rounded-xl bg-dark-800 border border-primary-navy/20 hover:border-primary-teal/50 transition-all duration-300">
                {/* Canva Embed */}
                <div className="relative aspect-[4/5]">
                  <iframe
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                      padding: 0,
                      margin: 0,
                    }}
                    src={`https://www.canva.com/design/${item.canvaLink.split('/d/')[1]}/view?embed`}
                    allowFullScreen
                    allow="fullscreen"
                  />

                  {/* Video indicator */}
                  {item.isVideo && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-primary-teal/90 flex items-center justify-center pointer-events-none">
                        <FaPlay className="text-sm text-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary-navy/95 via-primary-navy/70 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-primary-yellow/60 font-raleway bg-primary-navy/50 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <FaExternalLinkAlt className="text-primary-yellow/60 text-sm" />
                      </div>
                      <h3 className="text-lg font-raleway font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {item.shortDesc}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-primary-yellow/60 text-sm font-semibold">
                        <span>View in Canva</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick info (always visible on mobile) */}
                <div className="md:hidden bg-dark-900/80 p-3">
                  <p className="text-xs text-primary-teal font-raleway mb-1">{item.category}</p>
                  <h3 className="text-base font-raleway font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-dark-800/50 border border-primary-navy/30 rounded-xl px-6 py-4">
            <p className="text-gray-400 font-raleway">
              <span className="text-primary-teal font-semibold">💡 Pro Tip:</span> Click on any design to view and customize it in Canva!
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-lg text-gray-400 mb-4">
            Love what you see? Let&apos;s create something amazing for you!
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20create%20something%20similar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary-teal hover:bg-primary-navy text-white font-raleway font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-teal"
          >
            Order Custom Design
          </a>
        </motion.div>
      </div>
    </section>
  )
}
