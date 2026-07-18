import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'

// Note: Next.js 15 uses params as a Promise for dynamic routes
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Work
          </Link>

          <header className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{project.category}</span>
              <span className="text-gray-500 text-sm">{project.year}</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              {project.overview}
            </p>
          </header>

          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 md:mb-24 border border-white/10 bg-white/5">
            <Image 
              src={project.image}
              alt={project.title}
              fill
              priority
              className={['APP UI', 'MOVIE POSTER', 'FLYER', 'SOCIAL MEDIA POST'].includes(project.category) ? 'object-contain py-4 md:py-8' : 'object-cover'}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Challenge</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{project.problem}</p>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Solution</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Results</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{project.results}</p>
              </section>
            </div>
            
            <div className="space-y-12">
              <div className="glass-card p-8 border-accent/20">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-8 border-accent/20">
                <h3 className="text-xl font-bold text-white mb-4">Process</h3>
                <ul className="space-y-3">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  Live Preview <ArrowUpRight size={18} />
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  View Code <Code2 size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </article>
      
      <Footer />
    </main>
  )
}
