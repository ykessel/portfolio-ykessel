import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/lib/data'
import ProjectDetail from '@/components/project/ProjectDetail'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Yan Kessel`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)

  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return <ProjectDetail project={project} nextProject={nextProject} />
}
