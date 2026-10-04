'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import portfolioData from '@/config/portfolio.json'
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

// Custom hook for lazy loading embeds
function useLazyEmbed(itemId: number) {
  const embedRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '200px', // Start loading 200px before item enters viewport
        threshold: 0.01
      }
    )

    if (embedRef.current) {
      observer.observe(embedRef.current)
    }

    return () => observer.disconnect()
  }, [shouldLoad])

  return { embedRef, shouldLoad }
}

const categories = [
  { label: 'All', value: 'All' },
  { label: 'Posters', value: 'Posters' },
  { label: 'Wedding', value: 'Wedding Invites' },
  { label: 'Reels', value: 'Reels' },
  { label: 'YouTube', value: 'YouTube Thumbnails' },
  { label: 'Cultural', value: 'Religious/Cultural' },
]

type PortfolioItem = {
  id: number
  category: string
  title: string
  shortDesc: string
  longDesc: string
  thumbnail?: string
  canvaLink: string
  embedCode?: string
  isVideo: boolean
}

const projectAction = (item: PortfolioItem) => item.isVideo ? (item.title === 'Demo Film' ? 'Watch Film' : 'Watch Reel') : 'View Project'

// Portfolio Item Component with lazy loading
function PortfolioItemCard({ item, index, hoveredItem, setHoveredItem, openCanvaLink }: {
  item: PortfolioItem
  index: number
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
  openCanvaLink: (link: string) => void
}) {
  const { embedRef, shouldLoad } = useLazyEmbed(item.id)
  const [isLoaded, setIsLoaded] = useState(false)

  const parseEmbedCode = (embedCode?: string) => {
    if (!embedCode) return null
    const srcMatch = embedCode.match(/src="([^"]+)"/)
    const embedUrl = srcMatch ? srcMatch[1] : null
    const paddingMatch = embedCode.match(/padding-top:\s*([\d.]+)%/)
    const aspectRatio = paddingMatch ? parseFloat(paddingMatch[1]) : 177.7778
    return embedUrl ? { embedUrl, aspectRatio } : null
  }

  const embedData = parseEmbedCode(item.embedCode)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.4,
        delay: index * 0.03,
        ease: "easeOut"
      }}
      className="break-inside-avoid group relative cursor-pointer"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      onClick={() => openCanvaLink(item.canvaLink)}
    >
      <div className="relative overflow-hidden rounded-xl bg-dark-800 border border-primary-navy/20 hover:border-primary-teal/50 transition-all duration-300">
        {embedData ? (
          <div
            ref={embedRef}
            className="relative h-[min(70vh,620px)] w-full max-w-[520px] overflow-hidden"
            style={{
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              borderRadius: '8px',
              willChange: 'transform'
            }}
          >
            {/* Premium loading placeholder */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/5 via-transparent to-primary-navy/5 animate-pulse"></div>

                {/* Expanding rings effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-primary-teal/30 animate-[ringExpand_3s_ease-out_infinite]"></div>
                  <div className="w-32 h-32 rounded-full border-2 border-primary-teal/30 animate-[ringExpand_3s_ease-out_infinite_1s] absolute"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bottom-0 w-1 h-1 rounded-full bg-primary-teal/40"
                      style={{
                        left: `${15 + i * 12}%`,
                        animation: `particleFloat ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    />
                  ))}
                </div>

                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  {/* Logo with floating animation and glow */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-primary-teal/20 blur-2xl rounded-full animate-pulse"></div>
                    <Image
                      src="/thumbnails/creativstan.jpg"
                      alt="Loading"
                      width={140}
                      height={140}
                      className="rounded-xl relative z-10 shadow-2xl"
                      style={{
                        animation: 'logoFloat 3s ease-in-out infinite'
                      }}
                    />
                  </motion.div>

                  {/* Progress bar with gradient */}
                  <div className="w-48 h-1.5 bg-dark-700 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #2A9D8F 0%, #E9C46A 50%, #F4A261 75%, #E76F51 100%)',
                        animation: 'progressGlow 2s ease-in-out infinite'
                      }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity
                      }}
                    />
                  </div>

                  {/* Loading text with gradient */}
                  <motion.p
                    className="text-sm font-raleway font-medium text-gradient-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Loading masterpiece...
                  </motion.p>
                </div>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            )}

            {/* Only load iframe when in viewport */}
            {shouldLoad && (
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
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
                src={embedData.embedUrl}
                allowFullScreen
                allow="fullscreen"
                onLoad={() => setIsLoaded(true)}
              />
            )}

            {/* Hover overlay - light and clean */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-all duration-300 flex flex-col justify-end p-4 pointer-events-none ${
              hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="transform transition-transform duration-300" style={{
                transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(10px)'
              }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-white font-raleway bg-primary-teal/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                    {item.category}
                  </span>
                  <FaExternalLinkAlt className="text-white text-sm drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {item.title}
                </h3>
                <p className="text-sm text-white/95 line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.shortDesc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-primary-teal hover:brightness-110 px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  <span>{projectAction(item)}</span>
                  <FaExternalLinkAlt className="text-xs" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative aspect-[4/5]">
            <Image
              src={item.thumbnail || '/thumbnails/placeholder.jpg'}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {item.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary-teal/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-2xl text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Quick info (always visible on mobile) */}
        <div className="md:hidden bg-dark-900/80 p-3">
          <p className="text-xs text-primary-teal font-raleway mb-1">{item.category}</p>
          <h3 className="text-base font-raleway font-bold text-white">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  )
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
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="editorial-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div><p className="editorial-label mb-5">Selected work / {String(filteredItems.length).padStart(2, '0')} pieces</p><h2 className="display-serif text-6xl leading-none md:text-8xl">The portfolio.</h2></div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)] md:text-right">Explore the work. Each piece opens in Canva for a closer look and customisation.</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-[var(--border)] pb-5"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`pb-1 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                activeCategory === category.value
                  ? 'border-b border-[var(--foreground)] text-[var(--foreground)]'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          layout
          className="columns-1 gap-10 space-y-10 md:columns-2 md:gap-16 md:space-y-16"
        >
          {filteredItems.map((item, index) => (
            <PortfolioItemCard
              key={item.id}
              item={item}
              index={index}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              openCanvaLink={openCanvaLink}
            />
          ))}
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-block border-y border-[var(--border)] px-6 py-4">
            <p className="text-sm text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">Open a piece</span> to view it in Canva.
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
            className="inline-flex items-center border-b border-[var(--foreground)] pb-2 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Order Custom Design
          </a>
        </motion.div>
      </div>
    </section>
  )
}
