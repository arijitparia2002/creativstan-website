'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="editorial-container grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:items-end">
        <div><p className="editorial-label mb-5">Kind words</p><h2 className="display-serif text-6xl leading-[0.9] md:text-8xl">It&apos;s always better when others say it.</h2></div>
        <motion.blockquote initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-[var(--foreground)] pt-8"><p className="display-serif max-w-4xl text-4xl leading-tight md:text-6xl">&quot;We use Creativstan for all our event posters now. Creative, responsive, and always delivers on time. A true professional!&quot;</p><footer className="mt-8 text-sm font-bold uppercase tracking-[0.12em]">Vikram Singh <span className="ml-3 font-normal text-[var(--muted)]">Event Organizer</span></footer></motion.blockquote>
      </div>
    </section>
  )
}
