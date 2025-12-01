'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-lg border-b border-primary-navy/30 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('#')}
            >
              <h1 className="text-2xl md:text-3xl font-raleway text-gradient-primary">
                CREATIVSTAN
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-primary-teal font-raleway font-medium transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20create%20a%20poster%20/reel%20/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary-teal hover:bg-primary-navy text-white font-raleway font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-dark-900 border-l border-primary-navy/30 z-50 md:hidden"
      >
        <div className="flex flex-col p-6 pt-24 gap-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-300 hover:text-primary-teal font-raleway font-medium text-left transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20create%20a%20poster%20/reel%20/invite"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-teal hover:bg-primary-navy text-white font-raleway font-semibold rounded-lg transition-all duration-300 text-center"
          >
            Get Started
          </a>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  )
}
