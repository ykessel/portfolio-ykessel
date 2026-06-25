'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects, type Project, type ProjectStatus } from '@/lib/data'

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  completed: {
    label: 'Completado',
    className: 'text-accent/80 border-accent/20 bg-accent/5',
  },
  'in-progress': {
    label: 'En progreso',
    className: 'text-amber-400/80 border-amber-400/20 bg-amber-400/5',
  },
  'coming-soon': {
    label: 'Próximamente',
    className: 'text-secondary/50 border-surface-2 bg-transparent',
  },
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const completed = projects.filter((p) => p.status === 'completed')
  const inProgress = projects.filter((p) => p.status === 'in-progress')
  const comingSoon = projects.filter((p) => p.status === 'coming-soon')

  const ordered = [...completed, ...inProgress, ...comingSoon]

  return (
    <section id="projects" ref={ref} className="px-6 md:px-14 py-28 md:py-36 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.span
          className="block font-display font-bold text-primary/[0.03] leading-none select-none"
          style={{ fontSize: 'clamp(6rem, 15vw, 11rem)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          02
        </motion.span>

        <motion.div
          className="-mt-6 md:-mt-10 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <h2
            className="font-display font-bold text-primary leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-6 mb-14 text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <span className="text-secondary">
            <span className="text-primary font-semibold">{projects.length}</span> proyectos totales
          </span>
          {completed.length > 0 && (
            <span className="text-accent/70">
              <span className="text-accent font-semibold">{completed.length}</span> completados
            </span>
          )}
          {inProgress.length > 0 && (
            <span className="text-amber-400/70">
              <span className="text-amber-400 font-semibold">{inProgress.length}</span> en progreso
            </span>
          )}
          <span className="text-secondary/50">
            <span className="text-secondary/70 font-semibold">{comingSoon.length}</span> próximamente
          </span>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4">
          {ordered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/ykessel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-mono tracking-wide transition-colors duration-200 group"
          >
            More on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isClickable = project.status !== 'coming-soon'
  const status = statusConfig[project.status]

  return (
    <div className="group relative">
      <div
        className={`relative border rounded-2xl p-6 md:p-7 transition-all duration-300 ${
          isClickable
            ? 'border-surface-2 bg-surface group-hover:border-accent/20 group-hover:bg-surface/80'
            : 'border-surface-2/50 bg-surface/40 opacity-60'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
          {/* Index */}
          <span className="shrink-0 font-mono text-xs text-secondary/20 pt-1">{project.id}</span>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <h3
                className={`font-display font-semibold text-xl md:text-2xl transition-colors duration-200 ${
                  isClickable ? 'text-primary group-hover:text-accent' : 'text-primary/60'
                }`}
              >
                {project.title}
              </h3>

              {/* Category badge */}
              <span className="text-[11px] text-secondary/60 bg-surface-2/60 border border-surface-2 px-2.5 py-0.5 rounded-full font-mono shrink-0">
                {project.category}
              </span>

              {/* Status badge */}
              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono border shrink-0 ${status.className}`}
              >
                {status.label}
              </span>
            </div>

            <p className="text-secondary/70 text-sm md:text-base leading-relaxed max-w-2xl mb-2.5">
              {project.description}
            </p>

            {project.status !== 'coming-soon' && (
              <p className="text-accent/60 text-xs font-mono leading-relaxed max-w-xl">
                ↳ {project.highlight}
              </p>
            )}
          </div>

          {/* Stack + actions */}
          <div className="flex flex-col items-start md:items-end gap-3.5 shrink-0">
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className={`text-[11px] border px-2 py-0.5 rounded-full font-mono ${
                    isClickable
                      ? 'text-accent/70 border-accent/15'
                      : 'text-secondary/30 border-surface-2/50'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="text-[11px] text-secondary/30 font-mono">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>

            {isClickable && (
              <div className="flex items-center gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent/60 hover:text-accent font-mono transition-colors duration-200"
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={`/projects/${project.slug}`}
                  className="text-xs text-secondary hover:text-accent font-mono transition-colors duration-200"
                >
                  Case Study →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
