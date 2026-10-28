import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Box,
  Layers,
  Sparkles,
  Sparkle,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Compass,
  Calendar,
  Building2,
  Eye
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import { projects3DData } from '../data/projects3d'
import { cn } from '../utils/cn'
import sketchupIcon from '../assets/tools/sketchup.svg'
import enscapeIcon from '../assets/tools/enscape.svg'
import blenderIcon from '../assets/tools/blender.svg'

export default function Project3DDetail() {
  const [selectedProject, setSelectedProject] = useState('all')
  const [activeImageModal, setActiveImageModal] = useState(null) // { projectTitle, images, currentIndex }

  // Horizontal scroll tabs state & refs
  const tabsRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const isDownRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasDraggedRef = useRef(false)

  const checkTabsScroll = () => {
    if (!tabsRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current
    setCanScrollLeft(scrollLeft > 6)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6)
  }

  useEffect(() => {
    const el = tabsRef.current
    if (!el) return

    checkTabsScroll()

    const handleScroll = () => checkTabsScroll()

    // Smooth horizontal wheel scroll
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 0) {
        const atLeft = el.scrollLeft <= 0 && e.deltaY < 0
        const atRight = el.scrollLeft >= el.scrollWidth - el.clientWidth && e.deltaY > 0
        if (!atLeft && !atRight) {
          e.preventDefault()
          el.scrollLeft += e.deltaY * 0.9
        }
      }
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    el.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('resize', checkTabsScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
      el.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', checkTabsScroll)
    }
  }, [])

  const scrollTabs = (direction) => {
    if (!tabsRef.current) return
    const offset = direction === 'left' ? -280 : 280
    tabsRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const handleMouseDown = (e) => {
    if (!tabsRef.current) return
    isDownRef.current = true
    hasDraggedRef.current = false
    startXRef.current = e.pageX - tabsRef.current.offsetLeft
    scrollLeftRef.current = tabsRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDownRef.current = false
  }

  const handleMouseUp = () => {
    isDownRef.current = false
  }

  const handleMouseMove = (e) => {
    if (!isDownRef.current || !tabsRef.current) return
    const x = e.pageX - tabsRef.current.offsetLeft
    const walk = x - startXRef.current
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true
    }
    tabsRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handleTabClick = (id) => {
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false
      return
    }
    setSelectedProject(id)
  }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Filter projects if specific one selected
  const displayedProjects = selectedProject === 'all'
    ? projects3DData
    : projects3DData.filter((p) => p.id === selectedProject)

  // Lightbox handlers
  const openLightbox = (projectTitle, images, index) => {
    setActiveImageModal({ projectTitle, images, currentIndex: index })
  }

  const closeLightbox = () => {
    setActiveImageModal(null)
  }

  const prevImage = (e) => {
    e?.stopPropagation()
    if (!activeImageModal) return
    setActiveImageModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }))
  }

  const nextImage = (e) => {
    e?.stopPropagation()
    if (!activeImageModal) return
    setActiveImageModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }))
  }

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeImageModal) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageModal])

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#0A213D] selection:bg-[#FFB800] selection:text-[#0A213D]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-16">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#0A213D] hover:text-[#FFB800] transition-colors group px-4 py-2 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Beranda Portfolio</span>
          </Link>
        </div>

        {/* ========================================================== */}
        {/* HERO SECTION: SLEEK EDITORIAL BANNER (INSPIRED BY REFERENCE) */}
        {/* ========================================================== */}
        <div className="relative mb-12">
          {/* Decorative Corner Sunbursts (Top-Left & Bottom-Left) */}
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#0A213D]/25" fill="none">
              {Array.from({ length: 36 }).map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 48 * Math.cos((i * 10 * Math.PI) / 180)}
                  y2={50 + 48 * Math.sin((i * 10 * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="50" cy="50" r="14" fill="#0A213D" fillOpacity="0.06" />
            </svg>
          </div>

          <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#0A213D]/20" fill="none">
              {Array.from({ length: 32 }).map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 46 * Math.cos((i * 11.25 * Math.PI) / 180)}
                  y2={50 + 46 * Math.sin((i * 11.25 * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="50" cy="50" r="12" fill="#0A213D" fillOpacity="0.05" />
            </svg>
          </div>

          {/* Main Card Container with Soft Ice-Blue Gradient */}
          <div className="relative z-10 bg-gradient-to-br from-[#EAF0F6] via-[#F4F8FA] to-[#E3ECF3] rounded-3xl md:rounded-[2.5rem] border border-white/80 shadow-xl shadow-slate-900/5 p-6 sm:p-10 lg:p-12 overflow-hidden">
            {/* Subtle card surface lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              
              {/* ====================================================== */}
              {/* LEFT COLUMN: TITLE & INTRO                             */}
              {/* ====================================================== */}
              <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0A213D]/70 uppercase font-sans mb-3">
                  Eksplorasi Tata Ruang 3D &amp; Panggung Event
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A213D] uppercase leading-[1.05] mb-5">
                  LEAVE A<br />
                  <span className="text-[#0A213D] relative inline-block underline decoration-[#FFB800] decoration-4 underline-offset-8">
                    TRACE.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed mb-8 font-normal">
                  Koleksi pemodelan tata ruang panggung, venue arena, dan ekshibisi event nasional.
                  Dirancang presisi terukur skala 1:1 serta visualisasi photorealistic.
                </p>

                {/* Stylish Pill Button (Matching Reference [ ▶ SHOP NOW ]) */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#project-selector"
                    className="inline-flex items-center gap-3 bg-[#0A213D] text-white pl-2.5 pr-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#122e54] transition-all shadow-lg shadow-[#0A213D]/25 group"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#FFB800] text-[#0A213D] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>Jelajahi Proyek</span>
                  </a>

                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#0A213D] hover:text-[#FFB800] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Ke Beranda</span>
                  </Link>
                </div>
              </div>

              {/* ====================================================== */}
              {/* CENTER-RIGHT: VERTICAL CARD & FLYING 3D TOOLS          */}
              {/* ====================================================== */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 lg:py-4">
                <div className="relative w-full max-w-[320px] sm:max-w-[350px] flex justify-center items-center min-h-[340px] sm:min-h-[380px]">
                  
                  {/* The Vertical Deep Navy Pillar (Like in Reference) */}
                  <div className="w-48 sm:w-56 h-[320px] sm:h-[360px] bg-[#0A213D] rounded-3xl sm:rounded-[2rem] shadow-2xl shadow-[#0A213D]/30 border border-blue-900/40 relative flex flex-col justify-between items-center p-5 overflow-hidden">
                    {/* Subtle Top Label inside pillar */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFB800] font-bold">
                      Workflow 3D
                    </span>

                    {/* Subtle Isometric Grid lines inside pillar */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    {/* Bottom Dots Indicator (Exactly like Reference) */}
                    <div className="flex items-center gap-1.5 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* ================================================== */}
                  {/* 3 FLYING TOOLS OVERLAPPING THE PILLAR (In Place of Shoe) */}
                  {/* ================================================== */}

                  {/* Tool 1: SketchUp (Flying Top-Left) */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                    className="absolute -top-3 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-900/15 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center p-1.5 shrink-0 border border-red-100">
                      <img src={sketchupIcon} alt="SketchUp" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">SketchUp</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Pemodelan Skala 1:1</span>
                    </div>
                  </motion.div>

                  {/* Tool 2: Enscape (Flying Prominent Center-Right) */}
                  <motion.div
                    animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
                    transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut', delay: 0.3 }}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-[#FFB800] shadow-2xl shadow-amber-500/20 flex items-center gap-3.5 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center p-2 shrink-0 border border-amber-200">
                      <img src={enscapeIcon} alt="Enscape 3D" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-mono font-bold uppercase text-amber-700">Real-Time</span>
                      </div>
                      <p className="text-xs sm:text-sm font-black text-[#0A213D] leading-tight">Enscape 3D</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Render Fotorealistis</span>
                    </div>
                  </motion.div>

                  {/* Tool 3: Blender (Flying Bottom-Left) */}
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-3, 1, -3] }}
                    transition={{ repeat: Infinity, duration: 5.1, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute -bottom-3 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-900/15 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center p-1.5 shrink-0 border border-blue-100">
                      <img src={blenderIcon} alt="Blender" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">Blender</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Pencahayaan &amp; Panggung</span>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* ====================================================== */}
              {/* FAR RIGHT: VERTICAL "TOOLS PALETTE" BAR (Like Reference) */}
              {/* ====================================================== */}
              <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-5 py-2 border-l border-[#0A213D]/10 pl-4">
                {/* 5 Color Dots (Matching Palette & Tools) */}
                <div className="flex flex-col items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] ring-2 ring-[#FFB800]/40 shadow-xs" title="Amber Accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A213D] ring-2 ring-[#0A213D]/30 shadow-xs" title="Deep Navy" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA2127] ring-2 ring-red-500/30 shadow-xs" title="SketchUp Red" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7941D] ring-2 ring-amber-500/30 shadow-xs" title="Enscape Orange" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-neutral-300 shadow-xs" title="Clean White" />
                </div>

                {/* Vertical Text Label */}
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0A213D]/50 uppercase [writing-mode:vertical-rl] rotate-180 select-none">
                  PERANGKAT 3D UTAMA
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div id="project-selector" className="mb-10 scroll-mt-28">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Daftar Proyek 3D</span>
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                Pilih Proyek Tata Ruang
              </h2>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200/60">
                Menampilkan {displayedProjects.length} dari 6 Proyek
              </span>

              {/* Prev / Next Scroll Buttons */}
              <div className="flex items-center gap-1 bg-neutral-100/80 p-1 rounded-full border border-neutral-200/80">
                <button
                  type="button"
                  onClick={() => scrollTabs('left')}
                  disabled={!canScrollLeft}
                  aria-label="Scroll ke kiri"
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer',
                    canScrollLeft
                      ? 'bg-white text-[#0A213D] shadow-2xs hover:bg-[#FFB800] hover:text-[#0A213D]'
                      : 'text-neutral-300 opacity-40 cursor-not-allowed'
                  )}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTabs('right')}
                  disabled={!canScrollRight}
                  aria-label="Scroll ke kanan"
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer',
                    canScrollRight
                      ? 'bg-white text-[#0A213D] shadow-2xs hover:bg-[#FFB800] hover:text-[#0A213D]'
                      : 'text-neutral-300 opacity-40 cursor-not-allowed'
                  )}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Tabs Wrapper with subtle Left/Right Fade Gradients */}
          <div className="relative group/tabs">
            {/* Left fade gradient */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-3 w-8 sm:w-12 bg-gradient-to-r from-[#FDFDFD] via-[#FDFDFD]/90 to-transparent pointer-events-none z-10" />
            )}

            {/* Right fade gradient */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-3 w-8 sm:w-12 bg-gradient-to-l from-[#FDFDFD] via-[#FDFDFD]/90 to-transparent pointer-events-none z-10" />
            )}

            <div
              ref={tabsRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scroll-smooth select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-track]:bg-neutral-100/60 [&::-webkit-scrollbar-track]:rounded-full"
            >
              <button
                type="button"
                onClick={() => handleTabClick('all')}
                className={cn(
                  'shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer select-none',
                  selectedProject === 'all'
                    ? 'bg-[#0A213D] text-white shadow-sm ring-2 ring-[#0A213D]/20'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
                )}
              >
                Semua Proyek (6)
              </button>
              {projects3DData.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleTabClick(proj.id)}
                  className={cn(
                    'shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer select-none',
                    selectedProject === proj.id
                      ? 'bg-[#0A213D] text-white shadow-sm ring-2 ring-[#0A213D]/20'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
                  )}
                >
                  {proj.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* List of 6 Projects */}
        <div className="space-y-16">
          {displayedProjects.map((project, index) => (
            <motion.section
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              id={project.id}
              className="bg-white rounded-3xl border border-neutral-200/90 p-6 md:p-8 lg:p-10 shadow-sm scroll-mt-24"
            >
              {/* Project Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-neutral-100">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#0A213D]/10 text-[#0A213D]">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-neutral-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A213D] tracking-tight mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Specs Pill Box */}
                <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 bg-neutral-50/80 p-3.5 rounded-2xl border border-neutral-200/70 text-xs">
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-neutral-500">Skala:</span>
                    <span className="font-semibold text-neutral-800">{project.scale}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-neutral-500">Tipe Venue:</span>
                    <span className="font-semibold text-neutral-800">{project.venueType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Box className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span className="text-neutral-500">Perangkat:</span>
                    <span className="font-semibold text-neutral-800">{project.tools.join(' • ')}</span>
                  </div>
                </div>
              </div>

              {/* Context & Description Paragraphs */}
              <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    Konteks &amp; Perencanaan Tata Ruang
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {project.context}
                  </p>
                </div>

                <div className="lg:col-span-5 bg-neutral-50/80 rounded-2xl p-4 sm:p-5 border border-neutral-200/70">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span>Fitur &amp; Elemen Spatial Utama</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3D Visual Showcase Grid (3 Images per Folder) */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Render Visual ({project.images.length} Sudut Pandang)</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 italic">
                    Klik gambar untuk memperbesar (Full Lightbox)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => openLightbox(project.title, project.images, imgIdx)}
                      className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <img
                        src={imgSrc}
                        alt={`${project.title} - Render ${imgIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3.5 text-white">
                        <div className="self-end bg-white/90 text-[#0A213D] p-1.5 rounded-full shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono opacity-80">Sudut Pandang 0{imgIdx + 1}</span>
                          <p className="text-xs font-bold leading-tight truncate">{project.title}</p>
                        </div>
                      </div>

                      {/* Angle Badge */}
                      <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white/90 group-hover:opacity-0 transition-opacity">
                        Sudut 0{imgIdx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom CTA / Inquiry Card */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0A213D] text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FFB800] font-bold">
              Kolaborasi &amp; Konsultasi Visual 3D
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 mb-2">
              Butuh Desain Tata Ruang Panggung atau Venue Event?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Mulai dari panggung wisuda, konser arena, pameran booth, hingga hall kedinasan.
              Saya siap membantu visualisasi 3D presisi skala 1:1 sebelum proses produksi nyata.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/6281959125564"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FFB800] text-[#0A213D] font-bold text-xs sm:text-sm px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-white transition-all shadow-md text-center whitespace-nowrap"
            >
              <span>Hubungi Saya</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>
            <Link
              to="/"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-white/20 transition-all border border-white/20 text-center whitespace-nowrap"
            >
              <span>Lihat Kategori Lain</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Lightbox Modal for High-Res Image Preview */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all cursor-pointer hidden sm:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all cursor-pointer hidden sm:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <img
                src={activeImageModal.images[activeImageModal.currentIndex]}
                alt={`${activeImageModal.projectTitle} - Detail`}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Caption & Navigation Controls */}
              <div className="mt-4 flex items-center justify-between w-full max-w-2xl px-4 text-white">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">{activeImageModal.projectTitle}</h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    Sudut Pandang {activeImageModal.currentIndex + 1} dari {activeImageModal.images.length}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:hidden">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-white/20 text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-white/20 text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10 bg-[#0A213D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Aji — 3D Event Spaces &amp; Spatial Visualizer.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-[#FFB800] transition-colors">Beranda</Link>
            <Link to="/#about" className="hover:text-[#FFB800] transition-colors">Tentang &amp; Portofolio</Link>
            <Link to="/#contact" className="hover:text-[#FFB800] transition-colors">Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
