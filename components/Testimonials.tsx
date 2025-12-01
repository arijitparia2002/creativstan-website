'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    image: '👰',
    rating: 5,
    text: 'Creativstan made our wedding invites absolutely stunning! The attention to detail and creativity exceeded our expectations. Highly recommended!',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    image: '👨‍💼',
    rating: 5,
    text: 'Amazing work on our business ads! The designs are modern and professional. Sales increased by 40% after using their creatives.',
  },
  {
    name: 'Anjali Mehta',
    role: 'Social Media Influencer',
    image: '👩‍💻',
    rating: 5,
    text: 'Best reels creator I\'ve worked with! Fast delivery, trending styles, and the engagement on my posts doubled. Worth every penny!',
  },
  {
    name: 'Vikram Singh',
    role: 'Event Organizer',
    image: '🎭',
    rating: 5,
    text: 'We use Creativstan for all our event posters now. Creative, responsive, and always delivers on time. A true professional!',
  },
  {
    name: 'Sneha Patel',
    role: 'Mom',
    image: '👩',
    rating: 5,
    text: 'Made the most beautiful birthday poster for my daughter! She was so happy. The design was perfect and delivery was super quick.',
  },
  {
    name: 'Arjun Reddy',
    role: 'Startup Founder',
    image: '🚀',
    rating: 5,
    text: 'Helped us build our entire brand identity from scratch. Logo, business cards, social media templates - everything was perfect!',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      const next = prev + newDirection
      if (next < 0) return testimonials.length - 1
      if (next >= testimonials.length) return 0
      return next
    })
  }

  return (
    <section id="testimonials" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine-950/10 to-transparent"></div>

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
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[400px] md:h-[350px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 md:p-12 border border-wine-900/30 glow-wine">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <FaQuoteLeft className="text-4xl text-wine-600/50" />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-xl md:text-2xl text-gray-300 font-inter leading-relaxed mb-8">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-2xl text-wine-500" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-wine-600 to-wine-900 flex items-center justify-center text-3xl">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <h4 className="text-xl font-poppins font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-wine-400 font-inter">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-wine-600/20 hover:bg-wine-600/40 border border-wine-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-wine-400" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-wine-600'
                      : 'w-3 h-3 bg-wine-900/50 hover:bg-wine-700/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-wine-600/20 hover:bg-wine-600/40 border border-wine-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-wine-400" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bebas text-wine-400">4.9/5</div>
            <div className="text-gray-500 text-sm">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-wine-900/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bebas text-wine-400">300+</div>
            <div className="text-gray-500 text-sm">Happy Clients</div>
          </div>
          <div className="h-12 w-px bg-wine-900/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bebas text-wine-400">100%</div>
            <div className="text-gray-500 text-sm">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
