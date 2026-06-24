'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { socialLinks } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="px-6 md:px-14 py-28 md:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Section number */}
        <motion.span
          className="block font-display font-bold text-primary/[0.03] leading-none select-none"
          style={{ fontSize: 'clamp(6rem, 15vw, 11rem)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          03
        </motion.span>

        <div className="-mt-6 md:-mt-10">
          {/* Label */}
          <motion.p
            className="text-secondary text-xs font-mono tracking-[0.2em] uppercase mb-5"
            variants={fadeUp(0.05)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Contact
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="font-display font-bold text-primary leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Let's build
            <br />
            <span className="text-accent">something great.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            className="text-secondary text-lg md:text-xl max-w-md leading-relaxed mb-10"
            variants={fadeUp(0.18)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            Available for freelance projects and full-time roles. If you have an idea,
            let's make it real.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp(0.24)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <a
              href="mailto:kesselyanniel@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 text-base"
            >
              kesselyanniel@gmail.com
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-6 mt-10"
            variants={fadeUp(0.32)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors duration-200 text-sm font-mono tracking-wide group"
              >
                {link.label}
                <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-200 ml-0.5">
                  ↗
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-6 border-t border-surface-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-secondary/40 text-xs font-mono"
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <span>© 2026 Yan Kessel. All rights reserved.</span>
          <span>Built with Next.js · Framer Motion · Tailwind CSS</span>
        </motion.div>
      </div>
    </section>
  )
}
