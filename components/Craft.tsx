'use client'

import { motion } from 'framer-motion'
import content from '@/config/content.json'

const details = content.about.features

export default function Craft() {
  return <section className="bg-[var(--background)] py-24 md:py-32"><div className="mx-auto grid w-[calc(100%-48px)] max-w-[1440px] gap-12 md:grid-cols-2 md:gap-24"><div><p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">◆ {content.services.heading}</p><h2 className="display-serif max-w-md text-6xl leading-[0.88] md:text-8xl">What I<br />create.</h2><p className="mt-7 max-w-sm text-sm leading-relaxed text-[var(--muted)]">{content.services.subtitle}</p></div><div className="border-t border-[var(--border)]">{details.map((detail, index) => <motion.div key={detail.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-[12px_1fr] gap-4 border-b border-[var(--border)] py-5"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /><div><h3 className="text-sm font-bold">{detail.title}</h3><p className="mt-1 text-xs text-[var(--muted)]">{detail.description}</p></div></motion.div>)}</div></div></section>
}
