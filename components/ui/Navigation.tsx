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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 transition-all duration-500 ${
        scrolled
          ? 'bg-background/75 backdrop-blur-xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Logo */}
      <a
        href="#home"
        className="font-display font-bold text-lg text-primary tracking-tight hover:text-accent transition-colors duration-200"
      >
        YK<span className="text-accent">.</span>
      </a>

      {/* Nav links */}
      <nav className="flex items-center gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-secondary hover:text-primary text-sm font-mono tracking-wide transition-colors duration-200"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="mailto:kesselyanniel@gmail.com"
          className="ml-4 px-4 py-2 border border-surface-2 hover:border-accent/40 text-secondary hover:text-primary text-sm font-mono rounded-full transition-all duration-200"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Hire me
        </motion.a>
      </nav>
    </motion.header>
  )
}
