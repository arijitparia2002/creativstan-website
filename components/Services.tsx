'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import content from '@/config/content.json'

const services = [
  ['Birthday Posters', 'MAKE THEIR DAY LOOK AS SPECIAL AS IT FEELS.', 'Personalized birthday posters designed around the person, theme and mood.', 'Starts at ₹199', 'Create Yours'],
  ['Wedding Invitations', 'YOUR STORY, INVITED.', 'Digital wedding invitations designed for every part of the celebration - Haldi, Sangeet, Wedding, Reception and everything in between.', 'Starts at ₹499', 'Plan Your Invite'],
  ['Business Advertisements', 'MAKE YOUR BRAND HARD TO IGNORE.', 'Creative digital advertisements for launches, offers, promotions and social media campaigns.', 'Starts at ₹399', 'Promote My Business'],
  ['Reels & Motion', 'DESIGN THAT MOVES.', 'Short-form reels with transitions, music sync, motion graphics and a visual style made for social media.', 'Starts at ₹599', 'Create a Reel'],
  ['Logo & Branding', 'GIVE YOUR BRAND A DISTINCTIVE FACE.', 'Logo design and visual identity for businesses, creators and new ideas.', 'Starts at ₹999', 'Build My Brand'],
  ['Festival & Cultural Designs', 'CELEBRATE IT YOUR WAY.', 'Posters and digital creatives for festivals, cultural events, religious occasions and celebrations.', 'Starts at ₹249', 'Create a Design'],
  ['Corporate Creatives', 'MAKE BUSINESS LOOK BETTER.', 'Presentation graphics, promotional creatives, announcements and marketing visuals for businesses.', 'Starts at ₹599', 'Start a Project'],
  ['AI-Powered Creatives', 'WHEN CREATIVITY MEETS AI.', 'Experimental and commercial visuals created using modern AI tools combined with human art direction.', 'Starts at ₹699', 'Create Something New'],
]

export default function Services() {
  const whatsappUrl = (service: string) => `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(`Hi I want to order ${service}`)}`

  return (
    <section id="services" className="section-padding border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="editorial-container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="editorial-label mb-5">{content.services.heading}</p><h2 className="display-serif text-6xl leading-none md:text-8xl">From moments<br />to moving stories.</h2></div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">{content.services.subtitle}</p>
        </div>
        <div className="border-t border-[var(--foreground)]">
          {services.map(([title, headline, description, price, cta], index) => <motion.a key={title} href={whatsappUrl(title)} target="_blank" rel="noopener noreferrer" whileHover={{ x: 8 }} className="group grid gap-4 border-b border-[var(--border)] py-7 transition-colors hover:text-[var(--accent)] md:grid-cols-[64px_1.1fr_1.5fr_auto] md:items-center"><span className="editorial-label">0{index + 1}</span><span className="text-lg font-semibold md:text-xl">{title}<span className="mt-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{price}</span></span><span className="text-sm leading-relaxed text-[var(--muted)]"><strong className="mb-1 block text-xs uppercase tracking-[0.12em] text-[var(--foreground)]">{headline}</strong>{description}</span><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">{cta} <FaArrowRight className="text-sm transition-transform group-hover:translate-x-2" /></span></motion.a>)}
        </div>
        <div className="mt-16 border-t border-[var(--foreground)] pt-10 md:flex md:items-end md:justify-between"><div><p className="editorial-label mb-4">Custom projects</p><h3 className="display-serif max-w-2xl text-5xl leading-none md:text-7xl">Don&apos;t see what you need?</h3><p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--muted)]">{content.services.customNote}</p></div><a href={`https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.custom)}`} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-3 border-b border-[var(--foreground)] pb-2 text-sm font-bold uppercase tracking-[0.12em] md:mt-0">{content.services.customButton} <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a></div>
      </div>
    </section>
  )
}
