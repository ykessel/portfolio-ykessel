'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const, delay },
})

const stack = ['Next.js', 'TypeScript', 'React', 'Supabase', 'Stripe', 'D3.js', 'Framer Motion']

export default function Hero() {
  return (
    <section id="home" className="relative px-6 md:px-14 pt-[110px] md:pt-[130px] pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-14 lg:gap-16 items-center">
        {/* Left: value proposition */}
        <div className="flex flex-col gap-7">
          <motion.div className="flex items-center gap-[10px]" {...rise(0.15)}>
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#4ADE80', boxShadow: '0 0 0 4px rgba(74,222,128,.15)' }}
            />
            <span className="font-mono text-[12px] md:text-[13px] tracking-[.12em] uppercase text-[#B8B3A7]">
              Available for new projects · Remote
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold m-0 text-primary"
            style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 0.98, letterSpacing: '-.035em' }}
            {...rise(0.25)}
          >
            I build web products that feel{' '}
            <span className="font-serif italic font-normal text-accent" style={{ letterSpacing: '-.01em' }}>
              finished.
            </span>
          </motion.h1>

          <motion.p
            className="text-[17px] md:text-[20px] leading-[1.55] max-w-[560px] m-0"
            style={{ color: '#B8B3A7' }}
            {...rise(0.35)}
          >
            <span className="text-primary">Yan Kessel — software engineer &amp; frontend developer.</span>{' '}
            Next.js, TypeScript and real-time interfaces, taken from first sketch to production
            deploy. Every project below ships with a live demo.
          </motion.p>

          <motion.div className="flex gap-3 flex-wrap items-center" {...rise(0.45)}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-[10px] font-display font-semibold text-[16px] px-7 py-4 rounded-full hover:brightness-110 transition-all duration-200 w-full sm:w-auto"
              style={{ background: '#FF7A59', color: '#1a0d08' }}
            >
              See selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              href="mailto:kesselyanniel@gmail.com"
              className="inline-flex items-center justify-center text-[16px] text-primary px-6 py-[15px] rounded-full border border-border-2 hover:border-secondary/60 transition-colors duration-200 w-full sm:w-auto"
            >
              kesselyanniel@gmail.com
            </a>
          </motion.div>

          <motion.ul
            className="flex flex-wrap gap-x-5 gap-y-2 pt-5 border-t border-border font-mono text-[13px] list-none m-0 p-0"
            style={{ color: '#8F8A7E', paddingTop: 20 }}
            aria-label="Main stack"
            {...rise(0.55)}
          >
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </motion.ul>
        </div>

        {/* Right: real work, above the fold */}
        <motion.div className="relative h-[300px] sm:h-[420px] lg:h-[500px]" {...rise(0.4)}>
          <div className="absolute right-0 top-0 w-[72%] rounded-[14px] overflow-hidden border border-surface-2 opacity-55">
            <Image
              src="/images/syncboard.png"
              alt="Syncboard — real-time collaborative kanban"
              width={1533}
              height={792}
              className="block w-full h-auto"
              sizes="(max-width: 1024px) 70vw, 36vw"
            />
          </div>
          <div
            className="absolute left-0 bottom-10 w-[86%] rounded-2xl overflow-hidden border border-border-2"
            style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,.7)' }}
          >
            <Image
              src="/images/dashapp.png"
              alt="DashApp — team workspace home dashboard"
              width={1040}
              height={650}
              className="block w-full h-auto"
              sizes="(max-width: 1024px) 86vw, 44vw"
              priority
            />
          </div>
          <a
            href="/projects/dashapp"
            className="absolute right-2 bottom-0 flex flex-col gap-1 min-w-[230px] rounded-xl px-[18px] py-[14px] border border-border-2 hover:border-accent/40 transition-colors duration-200"
            style={{ background: '#171614' }}
          >
            <span className="font-mono text-[12px] tracking-[.08em] uppercase" style={{ color: '#8F8A7E' }}>
              Latest · SaaS
            </span>
            <span className="text-[17px] font-semibold text-primary">
              DashApp <span className="text-accent">→</span>
            </span>
            <span className="text-[14px]" style={{ color: '#B8B3A7' }}>
              Team workspace: tasks, calendar, insights
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
