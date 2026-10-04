'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const reviews = [
  { quote: 'We use Creativstan for all our event posters now. Creative, responsive, and always delivers on time. A true professional!', name: 'Vikram Singh', role: 'Event Organizer' },
  { quote: 'The wedding invite felt completely personal. Every detail, from the colours to the music, felt like us.', name: 'Priya Sharma', role: 'Bride' },
  { quote: 'I shared a rough idea and received something I was genuinely excited to send to my clients.', name: 'Rajesh Kumar', role: 'Business Owner' },
  { quote: 'The reel had the right pace, the right feeling and was delivered exactly when I needed it.', name: 'Anjali Mehta', role: 'Creator' },
  { quote: 'Fast replies, thoughtful design and no feeling that I was choosing from a fixed template.', name: 'Sneha Patel', role: 'Client' },
]

export default function Testimonials() {
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveReview((current) => (current + 1) % reviews.length), 6000)
    return () => window.clearInterval(timer)
  }, [])

  const review = reviews[activeReview]
  const moveReview = (direction: number) => setActiveReview((current) => (current + direction + reviews.length) % reviews.length)

  return <section id="testimonials" className="section-padding border-y border-[var(--border)] bg-[var(--surface)]"><div className="editorial-container grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:items-end"><div><p className="editorial-label mb-5">Kind words</p><h2 className="display-serif text-6xl leading-[0.9] md:text-8xl">It&apos;s always better when others say it.</h2><div className="mt-8 flex items-center gap-4"><button onClick={() => moveReview(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label="Previous review"><FaArrowLeft className="text-xs" /></button><span className="text-xs font-bold text-[var(--muted)]">{String(activeReview + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span><button onClick={() => moveReview(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label="Next review"><FaArrowRight className="text-xs" /></button></div></div><AnimatePresence mode="wait"><motion.blockquote key={activeReview} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }} className="border-t border-[var(--foreground)] pt-8"><p className="display-serif max-w-4xl text-4xl leading-tight md:text-6xl">&quot;{review.quote}&quot;</p><footer className="mt-8 text-sm font-bold uppercase tracking-[0.12em]">{review.name} <span className="ml-3 font-normal text-[var(--muted)]">{review.role}</span></footer></motion.blockquote></AnimatePresence></div></section>
}
