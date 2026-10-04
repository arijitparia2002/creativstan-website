'use client'

import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import content from '@/config/content.json'

const links = [['Work', '#stories'], ['Services', '#services'], ['About', '#about'], ['Pricing', '#pricing'], ['Contact', '#contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#stories')
  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`

  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setActiveSection(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(`#${visible.target.id}`)
    }, { rootMargin: '-28% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] })
    links.forEach(([, href]) => { const section = document.querySelector(href); if (section) observer.observe(section) })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  return (
    <>
      <motion.nav initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${scrolled ? 'border-b border-[var(--border)] bg-[var(--background)]/94 shadow-[0_8px_30px_rgba(40,54,24,0.06)] backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-16 w-[calc(100%-32px)] max-w-[1440px] items-center justify-between gap-6 md:h-20 md:w-[calc(100%-48px)]">
          <a href="#" className="brand-wordmark whitespace-nowrap text-2xl text-[var(--accent)] md:text-3xl">creativstan</a>
          <div className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <a key={label} href={href} onClick={(event) => navigateTo(event, href)} className={`text-[11px] font-semibold ${activeSection === href ? 'border-b border-[var(--accent)] pb-2 text-[var(--accent)]' : 'text-[var(--foreground)]'} transition-colors duration-300 hover:text-[var(--accent)]`}>{label}</a>)}</div>
          <div className="hidden items-center gap-3 md:flex"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-xs font-bold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"><FaWhatsapp /> WhatsApp</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold text-white transition-transform duration-300 hover:-translate-y-1">Let&apos;s Create <span className="ml-2">→</span></a></div>
          <button onClick={() => setOpen(!open)} className="text-[var(--foreground)] md:hidden" aria-label="Toggle menu">{open ? <FaTimes /> : <FaBars />}</button>
        </div>
      </motion.nav>
      {open && <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-0 z-40 bg-[var(--background)] px-6 pt-24 md:pt-28"><div className="flex flex-col gap-6">{links.map(([label, href], index) => <motion.a key={label} href={href} onClick={(event) => navigateTo(event, href)} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} className={`display-serif text-5xl ${activeSection === href ? 'text-[var(--accent)]' : ''}`}>{label}</motion.a>)}<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 w-fit rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white">Let&apos;s Create →</a></div></motion.div>}
    </>
  )
}
