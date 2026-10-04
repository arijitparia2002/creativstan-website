'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import content from '@/config/content.json'

const startingPoints = [
  ['Posters', '₹199', 'Birthday, event and cultural designs'],
  ['Wedding Invites', '₹499', 'Digital invitations for every ceremony'],
  ['Reels & Motion', '₹599', 'Short-form content that moves'],
  ['Logo & Branding', '₹999', 'A visual starting point for your brand'],
]

export default function Pricing() {
  const orderUrl = (name: string) => `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(`Hi I want to order ${name}`)}`

  return (
    <section id="pricing" className="section-padding border-y border-[var(--border)]">
      <div className="editorial-container"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="editorial-label mb-5">Starting points</p><h2 className="max-w-2xl text-6xl font-extrabold leading-[0.86] tracking-[-0.08em] md:text-8xl">Clear prices.<br /><span className="text-[var(--accent)]">More room</span> to create.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">Simple starting prices for everyday creative needs. Larger or custom projects can be quoted separately.</p></div>
        <div className="border-t-2 border-[var(--foreground)]">{startingPoints.map(([name, price, description], index) => <motion.a key={name} href={orderUrl(name)} target="_blank" rel="noopener noreferrer" whileHover={{ x: 8 }} className="group grid grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-[var(--border)] py-6 md:grid-cols-[64px_1fr_1fr_auto]"><span className="text-xs font-bold text-[var(--muted)]">0{index + 1}</span><span className="text-xl font-bold tracking-[-0.04em] md:text-2xl">{name}</span><span className="hidden text-sm text-[var(--muted)] md:block">{description}</span><span className="flex items-center gap-4 text-lg font-bold">from {price} <FaArrowRight className="text-sm transition-transform group-hover:translate-x-2" /></span></motion.a>)}</div>
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-end"><div><p className="editorial-label mb-3">Need something custom?</p><h3 className="text-3xl font-extrabold tracking-[-0.06em] md:text-5xl">Your idea doesn&apos;t have to fit a package.</h3></div><a href={`https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.customPackage)}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em]">Let&apos;s talk <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a></div>
      </div>
    </section>
  )
}
