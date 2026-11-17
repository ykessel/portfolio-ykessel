'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { projects, type Project, type ProjectStatus } from '@/lib/data'

// Only shown for work that is not finished yet — "completed" is the default and needs no badge.
const statusLabel: Partial<Record<ProjectStatus, string>> = {
  'in-progress': 'In progress',
  'coming-soon': 'Coming soon',
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.filter((p) => p.featured)
  const [lead, ...secondary] = featured
  const rest = projects.filter((p) => !p.featured)

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  })

  return (
    <section id="projects" ref={ref} className="px-6 md:px-14 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="flex flex-wrap items-end justify-between gap-4 mb-10" {...reveal(0)}>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[13px] tracking-[.08em] uppercase" style={{ color: '#8F8A7E' }}>
              01 — Selected work
            </span>
            <h2
              className="font-display font-bold text-primary leading-tight m-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-.03em' }}
            >
              Products I’ve shipped
            </h2>
          </div>
          <a
            href="#all-projects"
            className="font-mono text-[14px] py-3 text-[#C9C4B8] hover:text-accent transition-colors duration-200"
          >
            All {projects.length} projects →
          </a>
        </motion.div>

        {/* Lead project — full width */}
        {lead && (
          <motion.div className="mb-6" {...reveal(0.08)}>
            <FeaturedCard project={lead} wide />
          </motion.div>
        )}

        {/* Other featured projects */}
        {secondary.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {secondary.map((project, i) => (
              <motion.div key={project.id} {...reveal(0.16 + i * 0.08)}>
                <FeaturedCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Everything else — compact list */}
        {rest.length > 0 && (
          <div id="all-projects" className="mt-14 border-t border-border scroll-mt-24">
            {rest.map((project, i) => (
              <motion.div key={project.id} {...reveal(0.3 + i * 0.05)}>
                <ProjectRow project={project} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div className="mt-10" {...reveal(0.5)}>
          <a
            href="https://github.com/ykessel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 text-secondary hover:text-primary text-sm font-mono tracking-wide transition-colors duration-200 group"
          >
            More on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const label = statusLabel[status]
  if (!label) return null
  return (
    <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono border border-amber-400/30 text-amber-300">
      {label}
    </span>
  )
}

function FeaturedCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <article
      className={`group h-full rounded-[18px] border border-border bg-surface p-3 transition-colors duration-300 hover:border-accent/30 ${
        wide ? 'grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-center' : 'flex flex-col gap-4'
      }`}
    >
      <a
        href={`/projects/${project.slug}`}
        className="block relative w-full aspect-[16/10] rounded-[12px] overflow-hidden border border-surface-2 bg-surface-2"
        aria-label={`${project.title} case study`}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes={wide ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 768px) 100vw, 50vw'}
            priority={wide}
          />
        )}
      </a>

      <div className={`flex flex-col gap-3 ${wide ? 'px-3 pb-3 lg:px-0 lg:pr-6' : 'px-3 pb-4'}`}>
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className="font-display font-semibold text-primary m-0"
            style={{ fontSize: wide ? 'clamp(1.75rem, 3vw, 2.5rem)' : '1.5rem', letterSpacing: '-.02em' }}
          >
            {project.title}
          </h3>
          <span className="font-mono text-[12px] shrink-0" style={{ color: '#8F8A7E' }}>
            {project.category}
          </span>
        </div>
        <StatusBadge status={project.status} />
        <p className="m-0 text-[16px] leading-relaxed" style={{ color: '#B8B3A7' }}>
          {wide ? project.description : project.highlight}
        </p>
        <p className="m-0 font-mono text-[12px]" style={{ color: '#8F8A7E' }}>
          {project.stack.slice(0, 4).join(' · ')}
        </p>
        <div className="flex items-center gap-6 pt-1">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] py-2 text-accent hover:brightness-110"
            >
              Live demo ↗
            </a>
          )}
          <a href={`/projects/${project.slug}`} className="text-[15px] py-2 text-primary hover:text-accent transition-colors">
            Case study →
          </a>
        </div>
      </div>
    </article>
  )
}

function ProjectRow({ project }: { project: Project }) {
  const clickable = project.status !== 'coming-soon'
  const Tag = clickable ? 'a' : 'div'
  return (
    <Tag
      {...(clickable ? { href: `/projects/${project.slug}` } : {})}
      className="group flex flex-wrap items-center gap-x-8 gap-y-2 py-5 px-1 border-b border-border transition-colors duration-200 hover:bg-surface/60"
    >
      <span className="font-mono text-[13px] w-8 shrink-0" style={{ color: '#8F8A7E' }}>
        {project.id}
      </span>
      <span className="font-display font-semibold text-[20px] md:text-[22px] text-primary md:w-[200px] shrink-0 group-hover:text-accent transition-colors">
        {project.title}
      </span>
      <span className="text-[15px] md:text-[16px] flex-1 min-w-[240px]" style={{ color: '#B8B3A7' }}>
        {project.subtitle}
      </span>
      <StatusBadge status={project.status} />
      <span className="font-mono text-[12px]" style={{ color: '#8F8A7E' }}>
        {project.category}
      </span>
      {clickable && <span className="text-accent" aria-hidden="true">→</span>}
    </Tag>
  )
}
