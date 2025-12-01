'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBirthdayCake, FaRing, FaBullhorn, FaVideo, FaPalette, FaGift, FaBriefcase, FaMagic } from 'react-icons/fa'

const services = [
  {
    icon: FaBirthdayCake,
    title: 'Birthday Posters',
    description: 'Stunning birthday posters with custom themes and vibrant designs',
    price: 'Starting ₹199',
  },
  {
    icon: FaRing,
    title: 'Wedding Invites',
    description: 'Beautiful digital invites for all ceremonies - Haldi, Sangeet, Shaadi, Reception',
    price: 'Starting ₹499',
  },
  {
    icon: FaBullhorn,
    title: 'Digital Business Ads',
    description: 'Eye-catching advertisements for your business promotions',
    price: 'Starting ₹399',
  },
  {
    icon: FaVideo,
    title: 'Reels Creation',
    description: 'Trending Instagram reels with smooth transitions and music sync',
    price: 'Starting ₹799',
  },
  {
    icon: FaPalette,
    title: 'Logo & Branding',
    description: 'Professional logo design and complete brand identity packages',
    price: 'Starting ₹999',
  },
  {
    icon: FaGift,
    title: 'Festival Posters',
    description: 'Special occasion posters for all festivals and celebrations',
    price: 'Starting ₹249',
  },
  {
    icon: FaBriefcase,
    title: 'Corporate Promotions',
    description: 'Professional corporate marketing materials and presentations',
    price: 'Starting ₹599',
  },
  {
    icon: FaMagic,
    title: 'AI-Based Creatives',
    description: 'Next-gen AI-powered designs for modern digital presence',
    price: 'Starting ₹699',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-wine-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bebas mb-4 text-gradient-wine">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            From posters to reels, we create stunning digital content that makes you stand out
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-dark-800 rounded-xl p-6 h-full border border-wine-900/20 card-hover relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wine-600/0 to-wine-900/0 group-hover:from-wine-600/10 group-hover:to-wine-900/10 transition-all duration-300 rounded-xl"></div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-wine-600/20 rounded-lg flex items-center justify-center group-hover:bg-wine-600/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="text-3xl text-wine-400 group-hover:text-wine-300 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-poppins font-bold mb-2 text-white group-hover:text-wine-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-wine-400 font-semibold font-poppins mb-4">
                      {service.price}
                    </p>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-4 py-2 bg-wine-600 hover:bg-wine-700 text-white font-poppins font-medium rounded-lg transition-all duration-300 group-hover:scale-105"
                    >
                      DM to Order
                    </a>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-wine-600/50"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Custom service CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-400 mb-4">
            Need something custom? Let&apos;s talk!
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20I%20have%20a%20custom%20project%20in%20mind"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-wine-600 to-wine-800 hover:from-wine-700 hover:to-wine-900 text-white font-poppins font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-wine"
          >
            Contact for Custom Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
