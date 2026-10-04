'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import portfolioData from '@/config/portfolio.json'

export default function VideoStories() {
  const films = portfolioData.portfolioItems.filter((item) => item.isVideo)

  return (
    <section id="stories" className="section-padding border-y border-[var(--border)] bg-[var(--background)]">
      <div className="editorial-container"><div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end"><div><p className="editorial-label mb-5 reference-red">Invitations in motion</p><h2 className="display-serif text-6xl leading-[0.88] md:text-8xl">Some stories<br />are better<br /><span className="accent-script reference-red">when they move.</span></h2></div><p className="text-sm leading-relaxed text-[var(--muted)]">From the first frame to the final celebration, invitation films turn a simple announcement into an experience.</p></div><div className="grid gap-8 md:grid-cols-2">{films.map((film, index) => <motion.a key={film.id} href={film.canvaLink} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group block border-t border-[var(--foreground)] pt-5"><div className="flex aspect-[4/3] items-center justify-center bg-[#2A2420] text-[var(--background)] transition-colors duration-500 group-hover:bg-[var(--accent)]"><FaPlay className="text-3xl transition-transform duration-500 group-hover:scale-125" /></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="editorial-label mb-2">{film.category}</p><h3 className="text-xl font-bold">{film.title}</h3></div><FaArrowRight className="mt-1 transition-transform group-hover:translate-x-2" /></div></motion.a>)}</div></div>
    </section>
  )
}
