'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import content from '@/config/content.json'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`
  return (
    <section id="contact" className="section-padding">
      <div className="editorial-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl"><p className="editorial-label mb-6">Have an idea?</p><h2 className="display-serif text-[clamp(4rem,10vw,9rem)] leading-[0.84]">Let&apos;s make<br />it real.</h2><p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--muted)]">{content.contact.title}</p><div className="mt-10 flex flex-wrap gap-6"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border-b border-[var(--foreground)] pb-2 text-sm font-bold uppercase tracking-[0.12em] hover:border-[var(--accent)] hover:text-[var(--accent)]">Chat on WhatsApp <FaWhatsapp className="transition-transform group-hover:translate-x-1" /></a><a href={`mailto:${content.siteInfo.email}`} className="group inline-flex items-center gap-3 border-b border-[var(--foreground)] pb-2 text-sm font-bold uppercase tracking-[0.12em] hover:border-[var(--accent)] hover:text-[var(--accent)]">Send an Email <FaEnvelope className="transition-transform group-hover:translate-x-1" /></a></div><p className="mt-8 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{content.contact.subtitle}</p></motion.div>
        <div className="mt-24 grid border-t border-[var(--border)] pt-7 md:grid-cols-2"><div><p className="editorial-label mb-4">Contact details</p><p className="text-sm text-[var(--muted)]">WhatsApp / {content.siteInfo.whatsappNumber}<br />Email / {content.siteInfo.email}</p></div><div className="md:text-right"><p className="editorial-label mb-4">Follow the work</p><a href={content.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] hover:text-[var(--accent)]">Instagram <FaInstagram /></a></div></div>
      </div>
    </section>
  )
}
