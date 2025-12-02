'use client'

import { FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa'
import content from '@/config/content.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`
  const emailUrl = `mailto:${content.siteInfo.email}`

  return (
    <footer className="bg-dark-900 border-t border-primary-navy/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-raleway text-gradient-primary mb-4">
              {content.siteInfo.title.toUpperCase()}
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              {content.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
              <a
                href={emailUrl}
                className="flex items-center gap-2 px-4 py-2 bg-primary-teal hover:bg-primary-navy text-white rounded-lg transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
                Email
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-raleway font-bold text-white mb-4">{content.footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {content.footer.quickLinks.links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-gray-400 hover:text-primary-teal transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-raleway font-bold text-white mb-4">{content.footer.services.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {content.footer.services.items.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-navy/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {content.footer.copyright}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            {content.footer.madeWith} <FaHeart className="text-primary-teal/100" /> by {content.siteInfo.title}
          </p>
        </div>
      </div>
    </footer>
  )
}
