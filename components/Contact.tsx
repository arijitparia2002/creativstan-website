'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import content from '@/config/content.json'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: FaInstagram, url: content.socialMedia.instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaFacebook, url: content.socialMedia.facebook, label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaTwitter, url: content.socialMedia.twitter, label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: FaLinkedin, url: content.socialMedia.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
  ]

  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`
  const emailUrl = `mailto:${content.siteInfo.email}`

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-navy/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-raleway mb-4 text-gradient-primary">
            {content.contact.heading}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-raleway max-w-3xl mx-auto mb-2">
            {content.contact.title}
          </p>
          <p className="text-lg text-gray-400 font-raleway">
            {content.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between glow-teal hover:scale-105 transition-transform duration-300">
                <div>
                  <FaWhatsapp className="text-6xl text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-raleway font-bold text-white mb-4">
                    {content.contact.whatsappCard.title}
                  </h3>
                  <p className="text-green-100 text-lg mb-6">
                    {content.contact.whatsappCard.description}
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-green-700 font-raleway font-bold rounded-xl transition-all duration-300 text-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  {content.contact.whatsappCard.button}
                </a>
              </div>
            </motion.div>

            {/* Email CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-primary-teal to-primary-navy rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between glow-teal-strong hover:scale-105 transition-transform duration-300">
                <div>
                  <FaEnvelope className="text-6xl text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-raleway font-bold text-white mb-4">
                    {content.contact.emailCard.title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-6">
                    {content.contact.emailCard.description}
                  </p>
                </div>
                <a
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-primary-navy font-raleway font-bold rounded-xl transition-all duration-300 text-lg"
                >
                  <FaEnvelope className="text-2xl" />
                  {content.contact.emailCard.button}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social media links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6 font-raleway text-lg">
              {content.contact.socialMediaText}
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className={`w-14 h-14 rounded-full bg-dark-800 border border-primary-navy/30 flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-dark-800/50 border border-primary-navy/30 rounded-xl p-8">
              <h4 className="text-2xl font-raleway font-bold text-white mb-4">
                {content.contact.workingHours.title}
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-gray-400">
                <div>
                  <p className="font-semibold text-primary-teal mb-1">{content.contact.workingHours.weekdays.label}</p>
                  <p>{content.contact.workingHours.weekdays.hours}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-teal mb-1">{content.contact.workingHours.weekends.label}</p>
                  <p>{content.contact.workingHours.weekends.hours}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-teal mb-1">{content.contact.workingHours.emergency.label}</p>
                  <p>{content.contact.workingHours.emergency.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
