'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import content from '@/config/content.json'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' })
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`
  const links = content.navbar.links

  return (
    <>
      <motion.nav initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="editorial-container flex h-20 items-center justify-between">
          <button onClick={() => scrollToSection('#')} className="brand-wordmark text-3xl lowercase text-[var(--accent)] md:text-4xl">{content.siteInfo.title}</button>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">{link.name}</button>)}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">{content.navbar.ctaButton} <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" /></a>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] md:hidden" aria-label="Toggle menu">{isMobileMenuOpen ? <FaTimes /> : <FaBars />} <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span></button>
        </div>
      </motion.nav>

      {isMobileMenuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-40 bg-[var(--background)] px-5 pt-28 md:hidden">
        <div className="flex flex-col gap-6">
          {links.map((link, index) => <motion.button key={link.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} onClick={() => scrollToSection(link.href)} className="display-serif text-left text-5xl">{link.name}</motion.button>)}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em]">{content.navbar.ctaButton} <FaArrowRight /></a>
        </div>
      </motion.div>}
    </>
  )
}
