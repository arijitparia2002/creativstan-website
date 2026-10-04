'use client'

import { motion } from 'framer-motion'
import { FaArrowDown, FaArrowRight, FaPlay } from 'react-icons/fa'
import content from '@/config/content.json'
import portfolioData from '@/config/portfolio.json'

export default function Hero() {
  const film = portfolioData.portfolioItems.find((item) => item.isVideo) ?? portfolioData.portfolioItems[0]
  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] pt-28 md:pt-36">
      <div className="editorial-container relative z-10 pb-24 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
            <p className="editorial-label reference-red mb-7">CREATIVE DESIGNER · DIGITAL CREATOR</p>
            <h1 className="display-serif max-w-4xl text-[clamp(4rem,8.5vw,8.5rem)] leading-[0.84] tracking-[-0.035em]">
              I TURN IDEAS<br />INTO <span className="accent-script reference-red">VISUAL</span><br />EXPERIENCES.
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{content.hero.subtitle}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">{content.hero.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)] transition-transform hover:-translate-y-1">{content.hero.buttons.whatsapp} <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a>
              <button onClick={() => scrollToSection('portfolio')} className="group inline-flex items-center gap-3 border-b border-[var(--foreground)] pb-2 text-xs font-bold uppercase tracking-[0.12em]">{content.hero.buttons.portfolio} <FaArrowDown className="transition-transform group-hover:translate-y-1" /></button>
            </div>
          </motion.div>

          <motion.a href={film.canvaLink} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="group relative mx-auto block w-full max-w-[430px] lg:mr-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#2A2420] shadow-[18px_20px_0_rgba(201,46,53,0.12)] transition-transform duration-700 group-hover:-translate-y-2">
              <div className="absolute inset-5 border border-white/25" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-[var(--background)]"><span className="editorial-label mb-6 text-[var(--background)]/70">Featured invitation film</span><span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-transform duration-500 group-hover:scale-110"><FaPlay className="ml-1" /></span><h2 className="display-serif mt-8 text-4xl leading-none">{film.title}</h2><p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--background)]/70">{film.category} · Watch the film</p></div>
              <span className="absolute right-5 top-5 text-xs font-bold text-[var(--background)]">01 / 03</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]"><span>Open featured work</span><FaArrowRight className="transition-transform group-hover:translate-x-2" /></div>
          </motion.a>
        </div>

      </div>
    </section>
  )
}
