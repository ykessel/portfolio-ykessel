'use client'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 60))
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-[18px] transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(11,11,10,.85)' } : {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* Logo */}
      <a
        href="#home"
        className="font-display font-extrabold text-xl tracking-tight text-primary leading-none"
      >
        YK<span className="text-accent">.</span>
      </a>

      {/* Nav links + CTA */}
      <nav className="flex items-center gap-[34px]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[12.5px] tracking-[.04em] text-secondary hover:text-primary transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:kesselyanniel@gmail.com"
          className="font-mono text-[12.5px] tracking-[.04em] text-primary px-[18px] py-[9px] rounded-full transition-colors duration-200 hover:border-secondary/50"
          style={{ border: '1px solid #2d2d27' }}
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  )
}
