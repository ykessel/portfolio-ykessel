'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="noise glow relative min-h-screen flex flex-col justify-center px-6 md:px-14 pt-20"
    >
      {/* Background accent blob */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Availability badge */}
        <motion.div variants={item} className="flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-secondary text-xs font-mono tracking-[0.2em] uppercase">
            Available for projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-bold leading-[0.88] tracking-tight text-primary mb-6"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
        >
          Yan
          <br />
          <span className="text-secondary">Kessel</span>
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Role line */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-accent/50" />
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">
            Web Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-secondary text-lg md:text-xl max-w-md leading-relaxed mb-12"
        >
          I build{' '}
          <span className="text-primary">fast, modern, and memorable</span>{' '}
          digital experiences. From concept to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 text-sm"
          >
            View Work
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-surface-2 hover:border-secondary/40 text-secondary hover:text-primary rounded-full transition-all duration-200 text-sm font-mono"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 mt-24 text-secondary/40"
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-secondary/40 to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        </motion.div>
      </motion.div>

      {/* Bottom label */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-14 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <p className="text-[10px] font-mono text-secondary/30 tracking-widest uppercase">
          Based in Colombia · Remote
        </p>
      </motion.div>
    </section>
  )
}
