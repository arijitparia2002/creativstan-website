'use client'

import { motion } from 'framer-motion'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'
import portfolioData from '@/config/portfolio.json'

const worlds = [
  { label: 'Moments', detail: 'Wedding invitations / celebrations', filter: 'Wedding Invites', accent: 'bg-[#111111]', index: 0 },
  { label: 'Moving', detail: 'Reels / invitation films', filter: 'Reels', accent: 'bg-[var(--accent)]', index: 2 },
  { label: 'Business', detail: 'Ads / branding / promotions', filter: 'Posters', accent: 'bg-[#D9D9D4]', index: 4 },
  { label: 'Visuals', detail: 'Posters / thumbnails / social', filter: 'Posters', accent: 'bg-[#111111]', index: 6 },
  { label: 'Culture', detail: 'Religious / festival / traditional', filter: 'Religious/Cultural', accent: 'bg-[var(--accent)]', index: 9 },
]

export default function SelectWorlds() {
  return (
    <section id="worlds" className="border-b border-[var(--border)] py-24 md:py-32">
      <div className="editorial-container"><div className="mb-12 flex items-end justify-between gap-5"><div><p className="editorial-label mb-5">The work is the navigation</p><h2 className="text-5xl font-extrabold leading-[0.86] tracking-[-0.08em] md:text-8xl">Select<br /><span className="text-[var(--accent)]">a world.</span></h2></div><FaArrowDown className="mb-2 text-[var(--accent)]" /></div><div className="border-t-2 border-[var(--foreground)]">{worlds.map((world, index) => { const preview = portfolioData.portfolioItems[world.index]; return <motion.a key={world.label} href="#portfolio" whileHover={{ x: 10 }} className="group grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-[var(--border)] py-7 md:grid-cols-[72px_1fr_1fr_180px_auto]"><span className="text-xs font-bold text-[var(--muted)]">0{index + 1}</span><span className="text-3xl font-extrabold uppercase tracking-[-0.06em] md:text-5xl">{world.label}</span><span className="hidden text-sm text-[var(--muted)] md:block">{world.detail}</span><span className={`hidden aspect-[4/3] items-center justify-center overflow-hidden p-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 md:flex ${world.accent}`}>{preview?.title}</span><FaArrowRight className="transition-transform group-hover:translate-x-2" /></motion.a> })}</div></div>
    </section>
  )
}
