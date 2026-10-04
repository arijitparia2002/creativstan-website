'use client'

import { motion } from 'framer-motion'
import content from '@/config/content.json'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="editorial-container">
        <div className="grid gap-12 md:grid-cols-[1.35fr_0.65fr] md:gap-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="editorial-label mb-6">{content.about.heading}</p><h2 className="display-serif max-w-4xl text-5xl leading-[0.92] md:text-7xl">{content.about.title}</h2></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="self-end text-base leading-relaxed text-[var(--muted)] md:pb-2">{content.about.paragraphs.map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}</motion.div>
        </div>
        <div className="mt-20 grid border-t border-[var(--border)] md:grid-cols-3">
          {content.about.features.map((feature, index) => <div key={feature.title} className="border-b border-[var(--border)] py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><p className="editorial-label mb-5">0{index + 1}</p><h3 className="mb-2 text-lg font-bold">{feature.title}</h3><p className="text-sm leading-relaxed text-[var(--muted)]">{feature.description}</p></div>)}
        </div>
      </div>
    </section>
  )
}
