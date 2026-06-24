'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
  Backend: ['Node.js', 'REST APIs', 'PostgreSQL'],
  Tools: ['Git', 'Figma', 'Vercel', 'VS Code'],
  Animations: ['Framer Motion', 'GSAP'],
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-14 py-28 md:py-36">
      <div className="max-w-7xl mx-auto">
        {/* Section number */}
        <motion.span
          className="block font-display font-bold text-primary/[0.03] leading-none select-none"
          style={{ fontSize: 'clamp(6rem, 15vw, 11rem)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          01
        </motion.span>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 -mt-6 md:-mt-10">
          {/* Left: bio */}
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <h2
              className="font-display font-bold text-primary leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              About Me
            </h2>

            <div className="space-y-4 text-secondary leading-relaxed text-base md:text-lg">
              <p>
                I'm a web developer passionate about building interfaces that are both
                beautiful and <span className="text-primary">functional</span>. I care
                deeply about the details — the ones users feel but don't always notice.
              </p>
              <p>
                I work across the full stack with a strong focus on the frontend. I love
                turning ideas into polished digital products with attention to{' '}
                <span className="text-primary">performance, accessibility,</span> and
                user experience.
              </p>
              <p className="text-accent/75">
                When I'm not coding, I'm exploring design, listening to music, or
                thinking about the next project.
              </p>
            </div>

            {/* Mini stats */}
            <div className="flex gap-10 mt-10">
              {[
                { value: '2+', label: 'Years building' },
                { value: '10+', label: 'Projects shipped' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-3xl text-primary">{stat.value}</p>
                  <p className="text-secondary text-sm font-mono mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            variants={fadeUp(0.18)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <p className="text-secondary text-xs tracking-[0.2em] uppercase font-mono mb-7">
              Tech Stack
            </p>

            <div className="space-y-7">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-secondary/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2.5">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-surface border border-surface-2 text-secondary rounded-full hover:border-accent/30 hover:text-primary transition-all duration-200 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
