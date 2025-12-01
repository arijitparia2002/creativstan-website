'use client'

import { FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 border-t border-wine-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-wine-800/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bebas text-gradient-wine mb-4">
              CREATIVSTAN
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Your personal digital creator for posters, reels, wedding invites, ads, and branding.
              Fast delivery. Modern designs. 100% custom work.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20create%20a%20poster%20/reel%20/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
              <a
                href="mailto:creativstan@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-wine-600 hover:bg-wine-700 text-white rounded-lg transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
                Email
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-poppins font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-gray-400 hover:text-wine-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-poppins font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Birthday Posters</li>
              <li>Wedding Invites</li>
              <li>Business Ads</li>
              <li>Reels Creation</li>
              <li>Logo & Branding</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wine-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Creativstan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-wine-500" /> by Creativstan
          </p>
        </div>
      </div>
    </footer>
  )
}
