'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  Menu,
  Moon,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kuazom%20hero-bcK88Zrd9RaQWZrm5u3h03t2fJ2wbl.jpg'
const logoImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuzaom%20Clean%20red%20%20logo-S7OYuqzjQQBKAc0q2kWwrxKzPQOS31.jpg'
const businessVideo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Business%20video-Ip310HU6Cbkylxp8dzTCTkUdO8dvGx.mp4'

const services = [
  {
    number: '01',
    icon: Scissors,
    title: 'Bulk cloth ironing',
    description: 'Crisp, crease-free clothing without giving up your evening or weekend.',
    detail: 'Ideal for workwear, family laundry and weekly wardrobes.',
    image: '/images/service-ironing.png',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Shoe polishing',
    description: 'Oxford and loafer care that helps every step look considered.',
    detail: 'A refined polish for work shoes, occasions and daily wear.',
    image: '/images/service-polishing.png',
  },
]

export default function Page() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [headlineText, setHeadlineText] = useState('Cloth Ironing')

  useEffect(() => {
    const headlines = ['Cloth Ironing', 'Shoe Polishing']
    let headlineIndex = 0
    let characterIndex = headlines[0].length
    let deleting = true
    let timeoutId: ReturnType<typeof setTimeout>

    const animateHeadline = () => {
      const currentHeadline = headlines[headlineIndex]
      characterIndex += deleting ? -1 : 1
      setHeadlineText(currentHeadline.slice(0, characterIndex))

      if (characterIndex === 0) {
        deleting = false
        headlineIndex = (headlineIndex + 1) % headlines.length
      } else if (characterIndex === headlines[headlineIndex].length) {
        deleting = true
        timeoutId = setTimeout(animateHeadline, 1500)
        return
      }

      timeoutId = setTimeout(animateHeadline, deleting ? 65 : 105)
    }

    timeoutId = setTimeout(animateHeadline, 1500)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className={dark ? 'site-shell dark' : 'site-shell'}>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Kuazom Clean home">
            <img src={logoImage} alt="Kuazom Clean" className="brand-mark" />
            <span className="brand-name">Kuazom<span>Clean</span></span>
          </a>
          <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#why-kuazom" onClick={() => setMenuOpen(false)}>Why Kuazom</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDark(!dark)}>
              {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <a className="button button-small button-red desktop-cta" href="#book">Book a service <ArrowRight aria-hidden="true" /></a>
            <button className="menu-button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container reveal-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> TIME BACK, CLOTHES IRONED</p>
            <h1><span className="typing-headline" aria-live="polite">{headlineText}</span><br /><em>At Its Best</em></h1>
            <p className="hero-text">You have better things to do than spend your evening ironing or polishing shoes. Leave the finishing touches to Kuazom Clean.</p>
            <div className="hero-actions">
              <a className="button button-red" href="#book">Book a service <ArrowRight aria-hidden="true" /></a>
              <a className="text-link" href="#services">Explore services <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="trust-row"><span className="trust-highlight"><Check aria-hidden="true" /> Careful, professional service</span><span className="trust-highlight"><Check aria-hidden="true" /> Pickup and Delivery in Ontario and Alberta</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Professional pressing a white shirt with an iron" className="hero-image" />
              <div className="image-caption"><span className="caption-dot" /><span>Cloth ironing and shoe cleaning<br /><strong>at its best</strong></span></div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="What Kuazom Clean is for"><div className="proof-track"><div className="proof-grid"><span>FOR BUSY DAYS</span><span className="proof-divider" /><span>FOR SHARP WARDROBES</span><span className="proof-divider" /><span>FOR A LITTLE MORE EASE</span><span className="proof-divider" /></div><div className="proof-grid" aria-hidden="true"><span>FOR BUSY DAYS</span><span className="proof-divider" /><span>FOR SHARP WARDROBES</span><span className="proof-divider" /><span>FOR A LITTLE MORE EASE</span><span className="proof-divider" /></div></div></section>

        <section className="section container reveal-section" id="services">
          <div className="section-heading"><div><p className="eyebrow">WHAT WE TAKE OFF YOUR PLATE</p><h2>Small tasks.<br /><em>Big difference.</em></h2></div><p className="section-intro">The things you keep putting off are exactly the things we are here to handle. Choose one service or make it a regular part of your routine.</p></div>
          <div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.number}><img className="service-card-image" src={service.image} alt={`${service.title} service`} /><div className="card-top"><span className="card-number">{service.number}</span><Icon aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.description}</p><span className="card-detail">{service.detail}</span><a href="#book" className="card-link">Book this service <ArrowRight aria-hidden="true" /></a></article> })}</div>
        </section>

        <section className="split-section" id="how-it-works"><div className="split-video" aria-hidden="true"><video src={businessVideo} autoPlay muted loop playsInline preload="metadata" /></div><div className="split-overlay" aria-hidden="true" /><div className="container split-grid"><div className="split-copy"><p className="eyebrow">THE EASY PART</p><h2>Your wardrobe,<br /><em>without the work.</em></h2><p>Kuazom Clean keeps the process simple. Tell us what needs attention, choose a time that works for you, and get back to the parts of your day that matter.</p><div className="steps"><div><span>1</span><p><strong>Tell us what you need</strong><br />A quick message is all it takes to get started.</p></div><div><span>2</span><p><strong>We take care of the details</strong><br />Your clothes and shoes receive thoughtful, professional care.</p></div><div><span>3</span><p><strong>Enjoy the finished result</strong><br />Step out looking polished, with one less thing to think about.</p></div></div><a className="button button-dark" href="#book">Get started <ArrowRight aria-hidden="true" /></a></div></div></section>

        <section className="section container why-section reveal-section" id="why-kuazom"><div className="section-heading"><div><p className="eyebrow">WHY IT FEELS DIFFERENT</p><h2>Care that respects<br /><em>your time.</em></h2></div><p className="section-intro">Premium does not have to mean complicated. It means dependable attention, a thoughtful finish and a service that fits around your life.</p></div><div className="benefit-grid"><div><ShieldCheck aria-hidden="true" /><h3>Handled with care</h3><p>Professional service for the clothes and shoes you rely on every day.</p></div><div><Clock3 aria-hidden="true" /><h3>Built for busy people</h3><p>Convenient support for professionals, families and people with full calendars.</p></div></div></section>

        <section className="booking-section" id="book"><div className="container booking-grid"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Make your next<br /><em>busy day lighter.</em></h2><p>Send a quick note with what you need cleaned, pressed or polished. We will help you take it from there.</p><div className="contact-list"><a href="tel:+14385051448"><Phone aria-hidden="true" /> +1 (438) 505-1448 (Ontario)</a><a href="tel:+15878899099"><Phone aria-hidden="true" /> +1 (587) 889-9099 (Alberta)</a><a href="mailto:support@kuazomclean.ca"><Mail aria-hidden="true" /> support@kuazomclean.ca</a></div></div><div className="booking-card"><div className="booking-card-top"><span>QUICK BOOKING</span><Sparkles aria-hidden="true" /></div><h3>Start with a message.</h3><p>Tell us which service you need and the best way to reach you.</p><a className="button button-red full-button" href="mailto:support@kuazomclean.ca?subject=Service%20booking%20request">Email Kuazom Clean <ArrowRight aria-hidden="true" /></a><a className="whatsapp-link" href="https://wa.me/14385051448">Or message us on WhatsApp <ArrowRight aria-hidden="true" /></a></div></div></section>
      </main>

      <footer className="footer" id="contact"><div className="container footer-top"><div><a href="#top" className="brand footer-brand"><img src={logoImage} alt="Kuazom Clean" className="brand-mark" /><span className="brand-name">Kuazom<span>Clean</span></span></a><p>Cloth ironing and shoe cleaning at its best.</p></div><div className="footer-address"><span>LOCATION</span><p>Serving Ontario and Alberta in Canada</p></div><div className="footer-address"><span>CONNECT</span><a href="mailto:support@kuazomclean.ca">support@kuazomclean.ca</a><a href="tel:+14385051448">+1 (438) 505-1448</a><a href="tel:+15878899099">+1 (587) 889-9099</a></div></div><div className="container footer-bottom"><span>© 2026 KuazomClean. Built by <a href="https://bainaraydigitals.com" target="_blank" rel="noreferrer">Bainaray</a></span><span>Made for a more polished day.</span></div></footer>
    </div>
  )
}
