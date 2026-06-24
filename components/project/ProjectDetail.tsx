'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})

type Props = {
  project: Project
  nextProject: Project
}

export default function ProjectDetail({ project, nextProject }: Props) {
  return (
    <main className="min-h-screen">
      <ProjectHero project={project} />
      <ProjectBody project={project} />
      <NextProjectCTA nextProject={nextProject} />
    </main>
  )
}

/* ─── Hero ─────────────────────────────────────────────── */

function ProjectHero({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-14 pb-16 pt-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[130px] pointer-events-none" />

      {/* Back button */}
      <motion.div
        className="absolute top-24 left-6 md:left-14"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-mono tracking-wide transition-colors duration-200 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200 inline-block">←</span>
          Back
        </Link>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Project number */}
        <motion.p
          variants={fadeUp(0)}
          className="text-secondary/40 font-mono text-xs tracking-[0.25em] uppercase mb-5"
        >
          {project.id} / {project.category} / {project.year}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp(0.05)}
          className="font-display font-bold text-primary leading-[0.88] tracking-tight mb-10"
          style={{ fontSize: 'clamp(3rem, 10vw, 8.5rem)' }}
        >
          {project.title}
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Meta row */}
        <motion.div
          variants={fadeUp(0.1)}
          className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-surface-2"
        >
          {[
            { label: 'Role', value: project.role },
            { label: 'Year', value: project.year },
            { label: 'Category', value: project.category },
          ].map((meta) => (
            <div key={meta.label}>
              <p className="text-secondary/50 text-[10px] font-mono tracking-[0.2em] uppercase mb-1">
                {meta.label}
              </p>
              <p className="text-primary text-sm font-mono">{meta.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 text-sm"
            >
              View Live
              <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">↗</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-surface-2 hover:border-secondary/40 text-secondary hover:text-primary rounded-full transition-all duration-200 text-sm font-mono"
            >
              Source Code ↗
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── Body ─────────────────────────────────────────────── */

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="px-6 md:px-14 py-20 max-w-7xl mx-auto space-y-24">
      {/* Overview + Challenge */}
      <TwoColumnSection
        left={<ContentBlock label="Overview" text={project.overview} delay={0} />}
        right={<ContentBlock label="The Challenge" text={project.challenge} delay={0.1} />}
      />

      {/* Screenshot placeholder */}
      <ScreenshotSection />

      {/* Key Features */}
      <FeaturesSection features={project.features} />

      {/* Tech stack */}
      <StackSection stack={project.stack} />
    </div>
  )
}

function TwoColumnSection({
  left,
  right,
}: {
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-20">
      {left}
      {right}
    </div>
  )
}

function ContentBlock({
  label,
  text,
  delay,
}: {
  label: string
  text: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <p className="text-secondary/50 text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
        {label}
      </p>
      <p className="text-secondary leading-relaxed text-base md:text-lg">{text}</p>
    </motion.div>
  )
}

function ScreenshotSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(0)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {/* Replace this div with an <Image> from next/image once you have screenshots */}
      <div className="w-full aspect-video bg-surface border border-surface-2 rounded-2xl flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-secondary/30 font-mono text-xs tracking-widest uppercase">
            Screenshot / Mockup
          </p>
          <p className="text-secondary/20 text-xs font-mono">
            Reemplaza con{' '}
            <code className="text-accent/40">&lt;Image&gt;</code> de next/image
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturesSection({ features }: { features: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(0)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <p className="text-secondary/50 text-[10px] font-mono tracking-[0.2em] uppercase mb-8">
        Key Features
      </p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-4 text-secondary text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-accent/60 font-mono text-sm mt-1 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function StackSection({ stack }: { stack: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(0)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <p className="text-secondary/50 text-[10px] font-mono tracking-[0.2em] uppercase mb-6">
        Built With
      </p>
      <div className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-surface border border-surface-2 text-secondary hover:border-accent/30 hover:text-primary rounded-full font-mono text-sm transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Next Project CTA ──────────────────────────────────── */

function NextProjectCTA({ nextProject }: { nextProject: Project }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative border-t border-surface-2 overflow-hidden"
    >
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group block px-6 md:px-14 py-24 md:py-32 max-w-7xl mx-auto"
      >
        {/* Hover background fill */}
        <motion.div
          className="absolute inset-0 bg-surface"
          initial={{ scaleY: 0 }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ transformOrigin: 'bottom' }}
        />

        <div className="relative z-10">
          <motion.p
            className="text-secondary/50 font-mono text-xs tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Next Project
          </motion.p>

          <motion.div
            className="flex items-end justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h2
              className="font-display font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-300"
              style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
            >
              {nextProject.title}
              <span className="text-accent group-hover:text-primary transition-colors duration-300">.</span>
            </h2>
            <span
              className="font-display font-bold text-secondary/20 group-hover:text-accent/30 transition-all duration-300 shrink-0 group-hover:translate-x-2 inline-block"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              →
            </span>
          </motion.div>

          <motion.p
            className="text-secondary text-sm font-mono mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {nextProject.category} · {nextProject.year}
          </motion.p>
        </div>
      </Link>
    </section>
  )
}
