'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheck, FaWhatsapp, FaStar } from 'react-icons/fa'

const pricingPlans = [
  {
    name: 'Basic Poster',
    price: '₹199',
    description: 'Perfect for simple designs',
    features: [
      '1 simple design',
      'Basic editing',
      '24hr delivery',
      'HD quality',
      '1 revision'
    ],
    popular: false,
    gradient: 'from-wine-800 to-wine-900',
  },
  {
    name: 'Professional Poster',
    price: '₹399',
    description: 'Most popular choice',
    features: [
      'Premium design',
      'Custom elements',
      '12hr delivery',
      'Ultra HD quality',
      'Unlimited revisions',
      'Source files included'
    ],
    popular: true,
    gradient: 'from-wine-600 to-wine-800',
  },
  {
    name: 'Premium Reel',
    price: '₹799',
    description: 'Stand out on social media',
    features: [
      '10-12 sec video',
      'Professional transitions',
      'Music sync',
      'Motion graphics',
      'Same day delivery',
      'Multiple formats'
    ],
    popular: false,
    gradient: 'from-wine-700 to-wine-900',
  },
  {
    name: 'Wedding Invite',
    price: '₹499',
    description: 'Make your day special',
    features: [
      'Custom theme design',
      'Animated elements',
      'Background music',
      'Multiple ceremony cards',
      '2 revisions',
      'Print-ready files'
    ],
    popular: false,
    gradient: 'from-wine-800 to-wine-950',
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-wine-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-wine-800/10 rounded-full blur-3xl"></div>

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
            PRICING
          </h2>
          <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            Transparent pricing for high-quality creative work. All packages include premium support.
          </p>
        </motion.div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-wine-500 to-wine-700 text-white px-4 py-1 rounded-full font-poppins font-semibold text-sm flex items-center gap-1 glow-wine">
                    <FaStar className="text-xs" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-gradient-to-br ${plan.gradient} rounded-2xl p-8 border ${plan.popular ? 'border-wine-500 scale-105 glow-wine-strong' : 'border-wine-900/30'} transition-all duration-300 hover:scale-105 hover:glow-wine`}>
                {/* Plan header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-5xl font-bebas text-white">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-wine-400/20 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-wine-300 text-xs" />
                      </div>
                      <span className="text-gray-200 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <a
                  href={`https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-white text-wine-700 hover:bg-gray-100'
                      : 'bg-wine-600 text-white hover:bg-wine-700'
                  }`}
                >
                  <FaWhatsapp className="text-xl" />
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-dark-800/50 border border-wine-900/30 rounded-xl p-8">
            <h3 className="text-2xl font-poppins font-bold text-white mb-3">
              Need a Custom Package?
            </h3>
            <p className="text-gray-400 mb-6">
              Every project is unique. Get a personalized quote for bulk orders, premium services, or special requirements.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20I%20need%20a%20custom%20package%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-wine-600 to-wine-800 hover:from-wine-700 hover:to-wine-900 text-white font-poppins font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-wine"
            >
              <FaWhatsapp className="text-xl" />
              Get Custom Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
