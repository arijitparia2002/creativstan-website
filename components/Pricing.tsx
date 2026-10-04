'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import content from '@/config/content.json'

const pricingPlans = [
  { name: 'Basic Poster', price: 'Starts at ₹199', description: 'For simple, clean designs.', features: ['1 custom design', 'Basic editing', 'HD output', '1 revision', '24-hour delivery'], cta: 'Order Poster' },
  { name: 'Professional Poster', price: 'Starts at ₹399', description: 'For designs that need a little more.', features: ['Premium composition', 'Custom elements', 'Ultra HD output', 'Unlimited revisions', 'Source files', 'Up to 12-hour delivery'], cta: 'Choose This', popular: true },
  { name: 'Premium Reel', price: 'Starts at ₹599', description: 'For social content that moves.', features: ['10-12 second reel', 'Smooth transitions', 'Music sync', 'Motion graphics', 'Multiple formats', 'Same-day delivery'], cta: 'Create a Reel' },
  { name: 'Wedding Invite', price: 'Starts at ₹499', description: 'For celebrations worth announcing beautifully.', features: ['Custom theme', 'Animated elements', 'Background music', 'Multiple ceremony cards', '2 revisions', 'Print-ready files'], cta: 'Create My Invite' },
]

export default function Pricing() {
  const orderUrl = (name: string) => `https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(`Hi I want to order ${name}`)}`

  return (
    <section id="pricing" className="section-padding border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="editorial-container">
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end"><div><p className="editorial-label mb-5">{content.pricing.heading}</p><h2 className="display-serif max-w-3xl text-6xl leading-[0.9] md:text-8xl">Start small.<br />Create something great.</h2></div><p className="text-sm leading-relaxed text-[var(--muted)]">{content.pricing.subtitle}</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => <motion.article key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={`relative flex min-h-[530px] flex-col rounded-lg border px-6 py-7 shadow-[0_8px_24px_rgba(72,52,38,0.04)] transition-shadow duration-500 hover:border-[var(--accent)] hover:shadow-[0_20px_45px_rgba(72,52,38,0.12)] md:px-7 ${plan.popular ? 'border-[var(--accent)] bg-[var(--background)]' : 'border-[var(--border)] bg-[var(--surface)]'}`}>
            {plan.popular && <p className="editorial-label mb-6 inline-flex w-fit border-b border-[var(--accent)] pb-2 text-[var(--accent)]">Most popular</p>}
            <h3 className="text-xl font-bold tracking-[-0.02em]">{plan.name}</h3><p className="mt-3 min-h-10 text-sm leading-relaxed text-[var(--muted)]">{plan.description}</p><p className="my-7 border-b border-[var(--border)] pb-6"><span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Starting from</span><span className="display-serif block text-5xl leading-none">{plan.price.replace('Starts at ', '')}</span></p>
            <ul className="mb-8 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-[var(--muted)]"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />{feature}</li>)}</ul>
            <a href={orderUrl(plan.name)} target="_blank" rel="noopener noreferrer" className="group mt-auto inline-flex w-fit items-center gap-3 border-b border-[var(--foreground)] pb-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">{plan.cta} <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a>
          </motion.article>)}
        </div>
        <div className="mt-20 grid gap-6 border-t border-[var(--foreground)] pt-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="editorial-label mb-4">Custom package</p><h3 className="display-serif max-w-3xl text-5xl leading-none md:text-7xl">{content.pricing.customPackage.title}</h3><p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{content.pricing.customPackage.description}</p></div><a href={`https://wa.me/${content.siteInfo.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessages.customPackage)}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border-b border-[var(--foreground)] pb-2 text-sm font-bold uppercase tracking-[0.12em] hover:text-[var(--accent)]">{content.pricing.customPackage.button} <FaWhatsapp className="transition-transform group-hover:translate-x-1" /></a></div>
      </div>
    </section>
  )
}
