'use client'

import { FaArrowUp, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import content from '@/config/content.json'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.general)}`
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="dark-footer border-t border-[#3A302B] py-12">
      <div className="editorial-container">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <button onClick={scrollToTop} className="brand-wordmark text-5xl lowercase">{content.siteInfo.title}</button>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">{content.footer.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-[0.12em]">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"><FaWhatsapp /> WhatsApp</a>
            <a href={`mailto:${content.siteInfo.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"><FaEnvelope /> Email</a>
            <a href={content.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"><FaInstagram /> Instagram</a>
            <button onClick={scrollToTop} className="ml-2 inline-flex items-center gap-2 border-l border-[var(--border)] pl-5 transition-colors hover:text-[var(--accent)]" aria-label="Back to top">Top <FaArrowUp /></button>
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-t border-[var(--border)] pt-8 text-sm md:grid-cols-2">
          <div><p className="editorial-label mb-4">{content.footer.quickLinks.title}</p><div className="flex flex-wrap gap-x-5 gap-y-2 text-[var(--muted)]">{content.footer.quickLinks.links.map((link) => <a key={link} href={`#${link === 'Our Work' ? 'stories' : link.toLowerCase()}`} className="transition-colors hover:text-[var(--foreground)]">{link}</a>)}</div></div>
          <div><p className="editorial-label mb-4">{content.footer.services.title}</p><p className="leading-relaxed text-[var(--muted)]">{content.footer.services.items.join(' / ')}</p></div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)] md:flex-row"><span>© {new Date().getFullYear()} {content.footer.copyright}</span><span>{content.footer.madeWith} by {content.siteInfo.title}</span></div>
      </div>
    </footer>
  )
}
