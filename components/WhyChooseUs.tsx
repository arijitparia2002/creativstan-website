'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBolt, FaPalette, FaDollarSign, FaRedo, FaUsers, FaChartLine, FaRobot, FaTrophy } from 'react-icons/fa'

const features = [
  {
    icon: FaBolt,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality. Most projects delivered within 24 hours.',
  },
  {
    icon: FaPalette,
    title: 'Original Designs',
    description: '100% custom creations tailored to your vision. No templates, just pure creativity.',
  },
  {
    icon: FaDollarSign,
    title: 'Affordable Packages',
    description: 'Premium quality at competitive prices. Great value for individuals and businesses.',
  },
  {
    icon: FaRedo,
    title: 'Unlimited Revisions',
    description: 'We perfect your design until you\'re completely satisfied. Your happiness matters.',
  },
  {
    icon: FaUsers,
    title: '300+ Happy Clients',
    description: 'Trusted by hundreds of satisfied customers across India for their creative needs.',
  },
  {
    icon: FaChartLine,
    title: 'Trending Styles',
    description: 'Stay ahead with the latest design trends and viral reel formats.',
  },
  {
    icon: FaRobot,
    title: 'AI-Powered',
    description: 'Leveraging cutting-edge AI tools combined with human creativity for stunning results.',
  },
  {
    icon: FaTrophy,
    title: 'High-Quality Output',
    description: 'Professional-grade work with ultra HD resolution and print-ready formats.',
  },
]

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-navy/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy/20 rounded-full blur-3xl"></div>

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
            WHY CHOOSE CREATIVSTAN?
          </h2>
          <p className="text-xl text-gray-400 font-raleway max-w-2xl mx-auto">
            We don&apos;t just create designs — we bring your vision to life with passion and precision
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-navy/20 hover:border-primary-teal/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/0 to-primary-navy/0 group-hover:from-primary-teal/5 group-hover:to-primary-navy/5 transition-all duration-300 rounded-xl"></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/20 to-primary-navy/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-3xl text-primary-teal" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-raleway font-bold mb-3 text-white group-hover:text-primary-yellow/60 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {[
            { number: '300+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Done' },
            { number: '24hrs', label: 'Avg Delivery' },
            { number: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-dark-800/30 rounded-xl border border-primary-navy/20"
            >
              <div className="text-4xl md:text-5xl font-raleway text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-raleway">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
