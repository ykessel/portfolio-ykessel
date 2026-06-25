'use client'

import { motion } from 'framer-motion'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const, delay },
})

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: 'easeOut' as const, delay },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col px-6 md:px-14 pt-[74px]"
    >
      {/* Divider — growX animation */}
      <motion.div
        className="h-px mt-8"
        style={{ background: '#211f1a', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
      />

      {/* Main content — 2 columns */}
      <div className="flex-1 flex items-center justify-between gap-12 py-2">

        {/* Left: name + subtitle */}
        <div className="flex-1">

          {/* Available badge */}
          <motion.div className="flex items-center gap-[11px] mb-[30px]" {...rise(0.25)}>
            <span
              className="w-[7px] h-[7px] rounded-full flex-shrink-0"
              style={{ background: '#FF7A59', animation: 'pulseDot 2.4s ease-in-out infinite' }}
            />
            <span className="font-mono text-[12px] tracking-[.22em] uppercase text-secondary">
              Available for new projects
            </span>
          </motion.div>

          {/* Massive name */}
          <motion.h1
            className="font-display font-extrabold m-0"
            style={{
              fontSize: 'clamp(72px, 11.6vw, 158px)',
              lineHeight: 0.9,
              letterSpacing: '-.045em',
            }}
            {...rise(0.35)}
          >
            Yan
            <br />
            <span style={{ color: '#86867d', fontWeight: 600 }}>
              Kessel<span style={{ color: '#FF7A59' }}>.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="mt-[30px] text-secondary"
            style={{ fontSize: 21 }}
            {...rise(0.5)}
          >
            Web{' '}
            <span
              className="font-serif italic text-primary"
              style={{ fontSize: 27 }}
            >
              Developer
            </span>{' '}
            &amp; interface engineer
          </motion.div>
        </div>

        {/* Right: info table */}
        <motion.div className="w-[278px] flex-shrink-0" {...rise(0.6)}>
          {[
            { label: 'Status', value: 'Open · Q3 2026' },
            { label: 'Role',   value: 'Web Developer' },
            { label: 'Focus',  value: 'Frontend · Web apps' },
            { label: 'Based',  value: 'Colombia — Remote' },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              className="flex justify-between gap-4 py-[15px] text-[14px]"
              style={{
                borderTop: '1px solid #211f1a',
                ...(i === 3 ? { borderBottom: '1px solid #211f1a' } : {}),
              }}
            >
              <span className="font-mono text-[11px] tracking-[.12em] uppercase" style={{ color: '#6e6e64' }}>
                {label}
              </span>
              <span className="text-primary text-right">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer: description + CTAs + scroll */}
      <motion.div
        className="flex justify-between items-end gap-10 pb-12 pt-2"
        {...rise(0.7)}
      >
        {/* Description + CTA buttons */}
        <div className="max-w-[560px]">
          <p className="text-[18px] leading-[1.5] mb-[26px]" style={{ color: '#86867d' }}>
            <span className="text-primary">I build fast, modern, and memorable</span>{' '}
            digital products — taking each one from first concept through to a polished,
            production-ready deploy.
          </p>
          <div className="flex gap-[14px] flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-[10px] font-display font-bold text-[15px] px-[26px] py-[15px] rounded-full hover:brightness-110 transition-all duration-200"
              style={{ background: '#FF7A59', color: '#1a0d08' }}
            >
              View work <span style={{ fontSize: 17 }}>→</span>
            </a>
            <a
              href="mailto:kesselyanniel@gmail.com"
              className="inline-flex items-center font-mono text-[13px] tracking-[.04em] text-primary px-[26px] py-[15px] rounded-full transition-colors duration-200"
              style={{ border: '1px solid #2d2d27' }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="text-right font-mono text-[11px] tracking-[.16em] uppercase flex-shrink-0"
          style={{ color: '#5f5f56' }}
        >
          <div className="mb-2">Scroll</div>
          <div className="w-px h-[42px] ml-auto" style={{ background: '#2d2d27' }} />
        </div>
      </motion.div>
    </section>
  )
}
