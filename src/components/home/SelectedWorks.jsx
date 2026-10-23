import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Box,
  Layers,
  Globe,
  Palette,
  Eye,
  Sparkles,
  ArrowRight,
  Maximize2
} from 'lucide-react'
import { projectsData } from '../../data/projects'
import { projects3DData } from '../../data/projects3d'
import { projectsDesignData, designCategoriesData } from '../../data/projectsDesign'
import ResumeSection from './ResumeSection'
import { cn } from '../../utils/cn'

import canvaIcon from '../../assets/tools/canva.svg'
import sketchupIcon from '../../assets/tools/sketchup.svg'
import blenderIcon from '../../assets/tools/blender.svg'
import inkscapeIcon from '../../assets/tools/inkscape.svg'
import antigravityIcon from '../../assets/tools/antigravity.svg'
import wordpressIcon from '../../assets/tools/wordpress.svg'
import mePortrait from '../../assets/me2.webp'

const myTools = [
  { name: 'Canva', category: 'Design', icon: canvaIcon },
  { name: 'SketchUp', category: '3D Spatial', icon: sketchupIcon },
  { name: 'Blender', category: '3D Render', icon: blenderIcon },
  { name: 'Inkscape', category: 'Vector Art', icon: inkscapeIcon },
  { name: 'Anti Gravity IDE', category: 'Code / IDE', icon: antigravityIcon },
  { name: 'WordPress', category: 'CMS & Web', icon: wordpressIcon },
]

const aboutFloatingCards = [
  {
    title: '3D Layout',
    tools: 'SketchUp • Blender',
    icon: sketchupIcon,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200/80',
  },
  {
    title: 'Design',
    tools: 'Canva • Inkscape',
    icon: canvaIcon,
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200/80',
    offset: true,
  },
  {
    title: 'Website',
    tools: 'WordPress • Elementor',
    icon: wordpressIcon,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200/80',
  },
]

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [active3DPreviewIndex, setActive3DPreviewIndex] = useState(0)
  const [activeDesignPreviewIndex, setActiveDesignPreviewIndex] = useState(0)
  const [activeWebsitePreviewIndex, setActiveWebsitePreviewIndex] = useState(0)

  const categories = ['All', '3D Layout', 'Design', 'Website']

  // Filter projects based on selected tab
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) =>
        activeCategory === 'Website'
          ? (p.category === 'Website' || p.category === 'WordPress')
          : p.category === activeCategory
      )

  // Primary featured project for top bento card
  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0] || projectsData[0]

  const getCategoryIcon = (category) => {
    switch (category) {
      case '3D Layout':
        return <Box className="w-4 h-4" />
      case 'Design':
        return <Palette className="w-4 h-4" />
      case 'Website':
      case 'WordPress':
        return <Globe className="w-4 h-4" />
      default:
        return <Layers className="w-4 h-4" />
    }
  }

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAFA] text-[#111111] overflow-hidden scroll-mt-6">
      {/* Anchor for backward compatibility with #selected-works */}
      <div id="selected-works" className="-mt-20 pt-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ========================================================== */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Pill Tag*/}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold tracking-wide uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
              <span>Proyek &amp; Profil</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Tentang Saya
            </h2>
          </div>

          {/* Category Filter Pills*/}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 rounded-full border border-neutral-200/80 w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer',
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                  )}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 1. TOP BENTO HERO CARD                                     */}
        {/* ========================================================== */}
        {activeCategory === 'All' ? (
          /* ========================================================== */
          /* ABOUT ME BENTO HERO CARD (WHEN "ALL" IS ACTIVE)            */
          /* ========================================================== */
          <motion.div
            key="about-me-featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl border border-neutral-200/80 p-6 md:p-8 lg:p-10 shadow-sm mb-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: About Me Greeting, Bio & Tool Logos */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase bg-[#FFB800]/15 text-[#0A213D] border border-[#FFB800]/40 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                      <span>Tentang Saya</span>
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      Desainer Visual &amp; Digital
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3 leading-[1.15]">
                    Halo, saya <span className="text-[#0A213D] relative inline-block underline decoration-[#FFB800] decoration-4 underline-offset-4">Aji</span>, dan ini adalah ruang eksplorasi kreatif saya.
                  </h3>

                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    Saya menerjemahkan konsep menjadi tata ruang panggung 3D yang presisi terukur, identitas visual yang berkesan kuat, serta pengalaman web kustom yang rapi dan responsif. Rangkaian perangkat utama saya meliputi:
                  </p>

                  {/* Tools Showcase: Icon-only Grid with Hover Tooltips */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3 max-w-md">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                        Alat &amp; Perangkat Lunak
                      </span>
                    </div>

                    <div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-md">
                      {myTools.map((tool) => (
                        <div
                          key={tool.name}
                          className="relative group flex items-center justify-center"
                        >
                          {/* Tool Icon Button */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-50/90 hover:bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-2xs hover:shadow-md flex items-center justify-center p-2.5 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                            />
                          </div>

                          {/* Floating Hover Tooltip */}
                          <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900 text-white text-[11px] font-semibold rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-top-10 transition-all duration-200 whitespace-nowrap z-30">
                            <span>{tool.name}</span>
                            {/* Tooltip Arrow */}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100">
                  <a
                    href="https://www.instagram.com/dimasaji_ngrho/"
                    className="inline-flex items-center gap-2 bg-[#0A213D] text-white text-xs md:text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#122e54] transition-colors shadow-sm"
                  >
                    <span>Hubungi Saya</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Aji Portrait + 3 Dynamic Floating Discipline Cards */}
              <div className="lg:col-span-7 relative">
                <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 bg-gradient-to-br from-amber-50/60 via-neutral-100 to-blue-50/50 shadow-inner group flex items-end justify-center">

                  {/* Subtle Background Ambience & Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#0a213d_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.035]" />
                  <div className="absolute w-64 h-64 rounded-full bg-[#FFB800]/20 blur-3xl -top-10 -left-10 pointer-events-none" />
                  <div className="absolute w-64 h-64 rounded-full bg-blue-500/15 blur-3xl -bottom-10 -right-10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-200/50 to-transparent pointer-events-none z-1" />

                  {/* Aji's Portrait Image (me2.webp) - Half-Body Zoom (Setengah Badan) */}
                  <img
                    src={mePortrait}
                    alt="Aji - Visual & Digital Designer"
                    className="relative z-0 max-h-[96%] w-auto object-contain object-bottom filter contrast-[1.02] drop-shadow-2xl scale-[1.32] sm:scale-[1.44] origin-top translate-y-2 sm:translate-y-3 -translate-x-4 sm:-translate-x-10 md:-translate-x-14 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />

                  {/* Floating Pill Badge top left */}
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/90 shadow-sm flex items-center gap-2 text-xs font-bold text-[#0A213D]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Aji • Visual &amp; Digital</span>
                  </div>

                  {/* 3 FLOATING DISCIPLINE CARDS (Pushed to the right edge to avoid overlapping the photo) */}
                  <div className="absolute right-2 sm:right-3 top-4 bottom-4 flex flex-col justify-center gap-2.5 pointer-events-none z-10 max-w-[210px] sm:max-w-[225px] hidden sm:flex">
                    {aboutFloatingCards.map((card, idx) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                        className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-neutral-200/90 shadow-xl shadow-black/8 flex items-center gap-2.5 pointer-events-auto hover:scale-102 transition-transform"
                      >
                        <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center p-2 shrink-0 border', card.bgColor, card.borderColor)}>
                          <img
                            src={card.icon}
                            alt={card.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 pr-1">
                          <p className="text-xs font-bold text-neutral-900 truncate leading-snug">
                            {card.title}
                          </p>
                          <p className="text-[10px] text-neutral-500 truncate leading-snug mt-0.5 font-medium">
                            {card.tools}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          /* ========================================================== */
          /* CATEGORY FEATURED PROJECT BENTO CARD (WHEN TAB FILTERED)   */
          /* ========================================================== */
          <motion.div
            key={`featured-${featuredProject.id}-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl border border-neutral-200/80 p-6 md:p-8 lg:p-10 shadow-sm mb-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Project Editorial Information */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-800 border border-neutral-200">
                      {activeCategory === '3D Layout' ? '3D Layout' : activeCategory === 'Design' ? 'Design' : activeCategory === 'Website' ? 'Website' : featuredProject.category}
                    </span>
                    {activeCategory !== '3D Layout' && activeCategory !== 'Design' && activeCategory !== 'Website' && (
                      <span className="text-xs text-neutral-400 font-mono">
                        {featuredProject.year} • {featuredProject.client}
                      </span>
                    )}
                    {activeCategory === 'Design' && (
                      <span className="text-xs text-neutral-400 font-mono">
                        Poster Acara &amp; Konten Editorial
                      </span>
                    )}
                    {activeCategory === 'Website' && (
                      <span className="text-xs text-neutral-400 font-mono">
                        Website Klien &amp; 58 Arsip Proyek
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
                    {activeCategory === '3D Layout'
                      ? 'Merancang Tata Ruang Panggung & Pengalaman Spasial 3D'
                      : activeCategory === 'Design'
                        ? 'Merancang Identitas Visual, Poster Acara & Feed Editorial'
                        : activeCategory === 'Website'
                          ? 'Website Berkinerja Tinggi untuk Kebutuhan Bisnis.'
                          : featuredProject.title}
                  </h3>

                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {activeCategory === '3D Layout'
                      ? featuredProject.shortDescription
                      : activeCategory === 'Design'
                        ? 'Koleksi desain komunikasi visual untuk event akbar kemanusiaan, konser amal, publikasi tabligh akbar, serta konten kreatif media sosial.'
                        : activeCategory === 'Website'
                          ? 'Mengeksplorasi karya pengembangan web, presentasi digital, dan perancangan UI — mulai dari situs web klien hingga proyek personal dan konsep antarmuka.'
                          : featuredProject.shortDescription}
                  </p>

                  {/* Stats Display: Custom Box for 3D, Design, Website vs 4-Pill stats for others */}
                  {activeCategory === '3D Layout' ? (
                    <div className="grid grid-cols-1 gap-3.5 my-6">
                      <div className="bg-neutral-50/90 hover:bg-neutral-50 border border-neutral-200/90 hover:border-neutral-300 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs group">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-3xl sm:text-4xl font-extrabold text-[#0A213D] tracking-tight group-hover:text-black transition-colors">
                            30+
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFB800]/20 text-[#0A213D] border border-[#FFB800]/40">
                            Portofolio
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 mb-1 leading-snug">
                            Proyek 3D Terselesaikan
                          </h4>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Lebih dari 30+ proyek 3D tata ruang panggung, exhibition booth, dan convention venue telah sukses dikerjakan.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : activeCategory === 'Design' ? (
                    <div className="grid grid-cols-1 gap-3.5 my-6">
                      <div className="bg-neutral-50/90 hover:bg-neutral-50 border border-neutral-200/90 hover:border-neutral-300 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs group">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-3xl sm:text-4xl font-extrabold text-[#0A213D] tracking-tight group-hover:text-black transition-colors">
                            100+
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFB800]/20 text-[#0A213D] border border-[#FFB800]/40">
                            Portofolio
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 mb-1 leading-snug">
                            Karya Desain Grafis &amp; Editorial
                          </h4>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Materi cetak publikasi A3/poster event, festival kampus, hingga cover carousel dan branding media sosial.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : activeCategory === 'Website' ? (
                    <div className="grid grid-cols-1 gap-3.5 my-6">
                      <div className="bg-neutral-50/90 hover:bg-neutral-50 border border-neutral-200/90 hover:border-neutral-300 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs group">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-3xl sm:text-4xl font-extrabold text-[#0A213D] tracking-tight group-hover:text-black transition-colors">
                            50+
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFB800]/20 text-[#0A213D] border border-[#FFB800]/40">
                            Arsip
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 mb-1 leading-snug">
                            Proyek Website &amp; Direktori Arsip Historis
                          </h4>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Koleksi pengembangan website bisnis, properti, kontraktor, dan digital catalog berbasis WordPress &amp; Elementor.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    featuredProject.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                        {featuredProject.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="bg-neutral-50/80 border border-neutral-200/70 rounded-2xl p-3 text-center"
                          >
                            <div className="text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                              {stat.value}
                            </div>
                            <div className="text-[11px] text-neutral-500 font-medium mt-0.5">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {/* Tools Used Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {(activeCategory === 'Design'
                      ? ['Canva Pro', 'Inkscape']
                      : activeCategory === 'Website'
                        ? ['WordPress', 'Elementor', 'HTML5', 'CSS3', 'Responsive Design']
                        : featuredProject.tools
                    ).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100">
                  <Link
                    to={
                      activeCategory === '3D Layout'
                        ? '/work/3d-portfolio'
                        : activeCategory === 'Design'
                          ? '/work/design-portfolio'
                          : activeCategory === 'Website'
                            ? '/work/website-portfolio'
                            : `/work/${featuredProject.slug}`
                    }
                    className="inline-flex items-center gap-2 bg-[#0A213D] text-white text-xs md:text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#122e54] transition-colors shadow-sm"
                  >
                    <span>
                      {activeCategory === '3D Layout'
                        ? 'Lihat Portofolio Lengkap'
                        : activeCategory === 'Design'
                          ? 'Lihat Portofolio Desain'
                          : activeCategory === 'Website'
                            ? 'Lihat Portofolio Website'
                            : 'Lihat Studi Kasus'}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  {activeCategory !== '3D Layout' && activeCategory !== 'Design' && activeCategory !== 'Website' && (
                    <span className="text-xs text-neutral-500 font-mono px-3 py-2">
                      Peran: {featuredProject.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: 3D Layout vs Design Preview Showcase vs Default Bento Image */}
              {activeCategory === '3D Layout' ? (
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 bg-neutral-900 shadow-inner group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={active3DPreviewIndex}
                        src={projects3DData[active3DPreviewIndex]?.coverImage}
                        alt={projects3DData[active3DPreviewIndex]?.title}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Bar inside preview */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-200/80 shadow-md flex items-center gap-2 text-xs font-bold text-[#0A213D]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="truncate max-w-[200px] sm:max-w-none">
                          {projects3DData[active3DPreviewIndex]?.title}
                        </span>
                      </div>

                      <Link
                        to="/work/3d-portfolio"
                        className="bg-black/60 hover:bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <span>Halaman Detail 3D</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Floating mini highlight cards on the right */}
                    <div className="absolute right-3 sm:right-4 top-14 bottom-4 flex flex-col justify-center gap-2 pointer-events-none z-10 max-w-[210px] sm:max-w-[230px]">
                      {projects3DData.slice(0, 3).map((hl, idx) => (
                        <button
                          key={hl.id}
                          type="button"
                          onClick={() => setActive3DPreviewIndex(idx)}
                          className={cn(
                            'bg-white/95 backdrop-blur-md p-2 rounded-xl border border-neutral-200/90 shadow-xl shadow-black/20 flex items-center gap-2.5 pointer-events-auto hover:scale-102 transition-all cursor-pointer text-left',
                            active3DPreviewIndex === idx
                              ? 'ring-2 ring-[#FFB800] shadow-amber-500/25 bg-amber-50/90'
                              : 'opacity-85 hover:opacity-100',
                            idx === 1 ? '-translate-x-1.5 sm:-translate-x-2' : ''
                          )}
                        >
                          <img
                            src={hl.coverImage}
                            alt={hl.title}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover border border-neutral-200/80 shrink-0 shadow-2xs"
                          />
                          <div className="min-w-0 pr-1">
                            <p className="text-[10px] sm:text-[11px] font-bold text-neutral-900 leading-snug tracking-tight truncate">
                              {hl.title.split(' (')[0]}
                            </p>
                            <p className="text-[9px] text-neutral-500 leading-snug font-medium truncate">
                              {hl.location}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : activeCategory === 'Design' ? (
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 bg-neutral-900 shadow-inner group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeDesignPreviewIndex}
                        src={projectsDesignData[activeDesignPreviewIndex]?.coverImage}
                        alt={projectsDesignData[activeDesignPreviewIndex]?.title}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className={cn(
                          'w-full h-full transition-transform duration-700 ease-out group-hover:scale-102',
                          projectsDesignData[activeDesignPreviewIndex]?.folderName === 'Event Gate & Entrance Design'
                            ? 'object-contain p-4 bg-neutral-950'
                            : 'object-cover'
                        )}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Bar inside preview */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-200/80 shadow-md flex items-center gap-2 text-xs font-bold text-[#0A213D]">
                        <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
                        <span className="truncate max-w-[200px] sm:max-w-none">
                          {projectsDesignData[activeDesignPreviewIndex]?.title}
                        </span>
                      </div>

                      <Link
                        to="/work/design-portfolio"
                        className="bg-black/60 hover:bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <span>Halaman Detail Desain</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Floating mini highlight cards on the right */}
                    <div className="absolute right-3 sm:right-4 top-14 bottom-4 flex flex-col justify-center gap-1.5 sm:gap-2 pointer-events-none z-10 max-w-[210px] sm:max-w-[230px]">
                      {designCategoriesData.map((cat, idx) => {
                        const catStartIndex = designCategoriesData
                          .slice(0, idx)
                          .reduce((acc, c) => acc + c.items.length, 0)
                        const shortTitles = [
                          'Event & Promotion',
                          'Social & Editorial',
                          'Gate & Entrance',
                          'Poster Art & Parody'
                        ]
                        const subtitles = [
                          `${cat.items.length} Poster Event & Konser`,
                          `${cat.items.length} Feed & Konten Medsos`,
                          `${cat.items.length} Gerbang & Gantry Event`,
                          `${cat.items.length} Poster Seni & Film`
                        ]
                        const isSelected =
                          activeDesignPreviewIndex >= catStartIndex &&
                          activeDesignPreviewIndex < catStartIndex + cat.items.length

                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setActiveDesignPreviewIndex(catStartIndex)}
                            className={cn(
                              'bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-xl border border-neutral-200/90 shadow-xl shadow-black/20 flex items-center gap-2 sm:gap-2.5 pointer-events-auto hover:scale-102 transition-all cursor-pointer text-left',
                              isSelected
                                ? 'ring-2 ring-[#FFB800] shadow-amber-500/25 bg-amber-50/90'
                                : 'opacity-85 hover:opacity-100',
                              idx % 2 === 1 ? '-translate-x-1 sm:-translate-x-1.5' : ''
                            )}
                          >
                            <img
                              src={cat.items[0]?.image}
                              alt={cat.title}
                              className={cn(
                                'w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-neutral-200/80 shrink-0 shadow-2xs',
                                cat.folderName === 'Event Gate & Entrance Design'
                                  ? 'object-contain bg-neutral-900 p-0.5'
                                  : 'object-cover'
                              )}
                            />
                            <div className="min-w-0 pr-1">
                              <p className="text-[10px] sm:text-[11px] font-bold text-neutral-900 leading-snug tracking-tight truncate">
                                {shortTitles[idx] || cat.title}
                              </p>
                              <p className="text-[8px] sm:text-[9px] text-neutral-500 leading-snug font-medium truncate">
                                {subtitles[idx] || `${cat.items.length} Karya`}
                              </p>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : activeCategory === 'Website' ? (
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 bg-neutral-900 shadow-inner group">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeWebsitePreviewIndex}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className={cn(
                          'w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white relative',
                          activeWebsitePreviewIndex === 0
                            ? 'bg-gradient-to-br from-[#1A1612] via-[#2A231C] to-[#17130F]'
                            : activeWebsitePreviewIndex === 1
                              ? 'bg-gradient-to-br from-[#0B1526] via-[#10223E] to-[#0A172D]'
                              : 'bg-gradient-to-br from-[#0A213D] via-[#132E50] to-[#0D1C2E]'
                        )}
                      >
                        {/* Browser Chrome header */}
                        <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-white/10 relative z-10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                          </div>
                          <span className="text-white/60 text-[11px] font-mono">
                            {activeWebsitePreviewIndex === 0
                              ? 'cabinafurniture.com'
                              : activeWebsitePreviewIndex === 1
                                ? 'apartemenbranzmegakuningan.com'
                                : '58-websites-archive.directory'}
                          </span>
                        </div>

                        {/* Center Stage */}
                        <div className="my-auto text-left max-w-sm relative z-10">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFB800] text-[#0A213D] font-bold inline-block mb-2">
                            {activeWebsitePreviewIndex === 0
                              ? 'Featured 01 — Furniture'
                              : activeWebsitePreviewIndex === 1
                                ? 'Featured 02 — Property'
                                : 'Archive — 8 Sektor'}
                          </span>
                          <h4 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                            {activeWebsitePreviewIndex === 0
                              ? 'Cabin Furniture'
                              : activeWebsitePreviewIndex === 1
                                ? 'Apartemen Branz Mega Kuningan'
                                : '58 Website Projects Archive'}
                          </h4>
                          <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                            {activeWebsitePreviewIndex === 0
                              ? 'Proyek website bisnis di sektor furnitur dan interior kustom.'
                              : activeWebsitePreviewIndex === 1
                                ? 'Proyek website properti untuk presentasi dan pemasaran unit apartemen.'
                                : 'Beyond selected projects: 58 domain arsip historis periode 2024–2025.'}
                          </p>
                        </div>

                        {/* Bottom Bar */}
                        <div className="flex items-center justify-between text-xs pt-4 border-t border-white/10 relative z-10">
                          <span className="text-[11px] font-mono text-neutral-400">
                            {activeWebsitePreviewIndex === 2 ? '58 Domain Terverifikasi' : 'WordPress & Elementor'}
                          </span>
                          <Link
                            to="/work/website-portfolio"
                            className="inline-flex items-center gap-1.5 font-bold text-[#FFB800] hover:text-white transition-colors"
                          >
                            <span>Lihat Detail</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Top Bar Link */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                      <Link
                        to="/work/website-portfolio"
                        className="bg-black/60 hover:bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <span>Halaman Detail Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Floating mini highlight cards on the right */}
                    <div className="absolute right-3 sm:right-4 top-14 bottom-4 flex flex-col justify-center gap-2 pointer-events-none z-10 max-w-[210px] sm:max-w-[230px]">
                      {[
                        { index: 0, title: 'Cabin Furniture', subtitle: 'Katalog Web & Furnitur' },
                        { index: 1, title: 'Branz Mega Kuningan', subtitle: 'Showcase Properti Mewah' },
                        { index: 2, title: '58 Web Archive', subtitle: '8 Industri (2024–2025)' }
                      ].map((hl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveWebsitePreviewIndex(hl.index)}
                          className={cn(
                            'bg-white/95 backdrop-blur-md p-2 rounded-xl border border-neutral-200/90 shadow-xl shadow-black/20 flex items-center gap-2.5 pointer-events-auto hover:scale-102 transition-all cursor-pointer text-left',
                            activeWebsitePreviewIndex === hl.index
                              ? 'ring-2 ring-[#FFB800] shadow-amber-500/25 bg-amber-50/90'
                              : 'opacity-85 hover:opacity-100',
                            idx === 1 ? '-translate-x-1.5 sm:-translate-x-2' : ''
                          )}
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0A213D] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                            {idx === 0 ? 'CF' : idx === 1 ? 'BMK' : '58+'}
                          </div>
                          <div className="min-w-0 pr-1">
                            <p className="text-[10px] sm:text-[11px] font-bold text-neutral-900 leading-snug tracking-tight truncate">
                              {hl.title}
                            </p>
                            <p className="text-[9px] text-neutral-500 leading-snug font-medium truncate">
                              {hl.subtitle}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner group">
                    <img
                      src={featuredProject.coverImage}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                    {/* Floating pill badge top left */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-sm flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Visual Interaktif</span>
                    </div>

                    {/* FLOATING MINI CARDS */}
                    {featuredProject.floatingHighlights && (
                      <div className="absolute right-3 sm:right-4 top-3 bottom-3 sm:top-4 sm:bottom-4 flex flex-col justify-center gap-2.5 sm:gap-3 pointer-events-none z-10 max-w-[275px] sm:max-w-[290px] hidden sm:flex">
                        {featuredProject.floatingHighlights.map((hl, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                            className={cn(
                              'bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-neutral-200/90 shadow-xl shadow-black/10 flex items-center gap-3 pointer-events-auto hover:scale-102 transition-transform',
                              idx === 1 ? '-translate-x-3' : ''
                            )}
                          >
                            <img
                              src={hl.image}
                              alt={hl.title}
                              className="w-10 h-10 rounded-xl object-cover border border-neutral-200/80 shrink-0 shadow-2xs"
                            />
                            <div className="min-w-0 pr-1">
                              <p className="text-xs font-bold text-neutral-900 leading-snug tracking-tight">
                                {hl.title}
                              </p>
                              <p className="text-[10px] text-neutral-500 leading-snug mt-0.5 font-medium">
                                {hl.subtitle}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}

        {/* ========================================================== */}
        {/* 2. DAFTAR RIWAYAT HIDUP (CURRICULUM VITAE) SECTION         */}
        {/* ========================================================== */}
        <ResumeSection />


      </div>
    </section>
  )
}
