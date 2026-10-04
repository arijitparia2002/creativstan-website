'use client'

import { motion } from 'framer-motion'
import content from '@/config/content.json'

const principles = [
  ['Made For You', 'Your design starts with your requirements, not a fixed template.'],
  ['Quick Turnaround', 'Most everyday projects can be delivered within 24 hours.'],
  ['Thoughtful Design', 'Every font, image, colour and movement has a reason.'],
  ['Flexible Revisions', "We'll keep refining until the design feels right."],
  ['Accessible Creativity', "Good design shouldn't always come with a huge price tag."],
  ['Human + AI', 'Modern AI tools meet human creativity, editing and direction.'],
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding">
      <div className="editorial-container">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-24"><div><p className="editorial-label mb-5">{content.whyChooseUs.heading}</p><h2 className="display-serif text-6xl leading-[0.9] md:text-8xl">{content.whyChooseUs.subtitle}</h2></div><div className="border-t border-[var(--foreground)]">{principles.map(([title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="grid gap-3 border-b border-[var(--border)] py-5 md:grid-cols-[70px_1fr_1.4fr] md:items-start"><span className="editorial-label">0{index + 1}</span><h3 className="font-bold">{title}</h3><p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p></motion.div>)}</div></div>
        <div className="mt-24 grid grid-cols-2 border-t border-[var(--foreground)] md:grid-cols-4">{content.whyChooseUs.stats.map((stat) => <div key={stat.label} className="border-b border-[var(--border)] py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><p className="display-serif text-6xl md:text-8xl">{stat.number}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</p></div>)}</div>
      </div>
    </section>
  )
}
