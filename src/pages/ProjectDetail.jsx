import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Box, Palette, Globe, Layers, CheckCircle2 } from 'lucide-react'
import { projectsData } from '../data/projects'
import Navbar from '../components/layout/Navbar'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0]

  const getCategoryIcon = (category) => {
    switch (category) {
      case '3D Layout':
        return <Box className="w-4 h-4" />
      case 'Design':
        return <Palette className="w-4 h-4" />
      case 'WordPress':
        return <Globe className="w-4 h-4" />
      default:
        return <Layers className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#0A213D]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-16">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0A213D] hover:text-[#FFB800] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Project Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFB800] text-[#0A213D]">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </span>
            <span className="text-xs font-mono text-neutral-500">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A213D] leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#0A213D] text-white rounded-3xl mb-12 shadow-xl">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Client</span>
            <p className="font-bold text-sm text-white mt-1">{project.client}</p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Role</span>
            <p className="font-bold text-sm text-[#FFB800] mt-1">{project.role}</p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Year</span>
            <p className="font-bold text-sm text-white mt-1">{project.year}</p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Tools</span>
            <p className="font-bold text-xs text-neutral-200 mt-1">{project.tools.join(' • ')}</p>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#0A213D]/10 aspect-[16/9] mb-14 shadow-md bg-neutral-100">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-xl font-black text-[#0A213D] tracking-tight mb-2">Project Overview</h2>
            <div className="w-10 h-1 bg-[#FFB800] rounded-full mb-4" />
          </div>
          <div className="md:col-span-2">
            <p className="text-base text-neutral-700 leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="md:col-span-1 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-black text-[#0A213D] tracking-tight mb-2">Aji&apos;s Contribution</h2>
            <div className="w-10 h-1 bg-[#FFB800] rounded-full mb-4" />
          </div>
          <div className="md:col-span-2 border-t border-neutral-200 pt-8">
            <p className="text-base text-neutral-700 leading-relaxed">
              {project.contribution}
            </p>
          </div>

          <div className="md:col-span-1 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-black text-[#0A213D] tracking-tight mb-2">Process &amp; Execution</h2>
            <div className="w-10 h-1 bg-[#FFB800] rounded-full mb-4" />
          </div>
          <div className="md:col-span-2 border-t border-neutral-200 pt-8">
            <p className="text-base text-neutral-700 leading-relaxed">
              {project.process}
            </p>
          </div>
        </div>

        {/* Gallery Visuals */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-black text-[#0A213D] tracking-tight mb-6">Visual Showcase</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100 shadow-sm">
                  <img src={img} alt={`${project.title} - Visual ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next / Back CTA */}
        <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="font-bold text-lg text-[#0A213D]">Tertarik Berkolaborasi?</h4>
            <p className="text-xs text-neutral-500">Mulai diskusi proyek desain grafis, visualisasi 3D, atau pengembangan website.</p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href="https://wa.me/6281959125564"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0A213D] text-white hover:bg-[#FFB800] hover:text-[#0A213D] px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>Chat WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:dimdimcraft.id@gmail.com"
              className="bg-white border border-neutral-200 text-[#0A213D] hover:bg-neutral-50 px-5 py-3 rounded-full text-xs font-bold transition-all"
            >
              Kirim Email
            </a>
          </div>
        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-200 py-8 bg-[#0A213D] text-white text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Aji. All rights reserved.</p>
      </footer>
    </div>
  )
}
