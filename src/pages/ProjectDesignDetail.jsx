import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Palette,
  Layers,
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Calendar,
  Eye,
  FileImage,
  PenTool,
  FolderOpen,
  Share2,
  Sparkle
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import { designCategoriesData } from '../data/projectsDesign'
import { cn } from '../utils/cn'
import canvaIcon from '../assets/tools/canva.svg'
import inkscapeIcon from '../assets/tools/inkscape.svg'
import affinityIcon from '../assets/tools/affinity.webp'

export default function ProjectDesignDetail() {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'event-promotional', 'social-media-editorial'
  const [activeImageModal, setActiveImageModal] = useState(null) // { title, images, currentIndex }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Filter categories to display
  const displayedCategories = activeTab === 'all'
    ? designCategoriesData
    : designCategoriesData.filter((cat) => cat.id === activeTab)

  // Lightbox handlers
  const openLightbox = (categoryTitle, images, index) => {
    setActiveImageModal({ title: categoryTitle, images, currentIndex: index })
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

  // Handle keyboard navigation for modal
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
        {/* HERO SECTION: SLEEK EDITORIAL BANNER (MATCHING 3D LAYOUT) */}
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
                  Desain Grafis &amp; Media Digital
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A213D] uppercase leading-[1.05] mb-5">
                  VISUAL<br />
                  <span className="text-[#0A213D] relative inline-block underline decoration-[#FFB800] decoration-4 underline-offset-8">
                    DESIGN.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed mb-8 font-normal">
                  Koleksi karya desain grafis terpadu: perancangan publikasi acara skala besar, konten media sosial &amp; editorial, gerbang gantry event, hingga seni poster sinematik siap cetak.
                </p>

                {/* Stylish Pill Button (Matching 3D Layout) */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#category-selector"
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
              {/* CENTER-RIGHT: VERTICAL CARD & FLYING DESIGN TOOLS      */}
              {/* ====================================================== */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 lg:py-4">
                <div className="relative w-full max-w-[320px] sm:max-w-[350px] flex justify-center items-center min-h-[340px] sm:min-h-[380px]">
                  
                  {/* The Vertical Deep Navy Pillar */}
                  <div className="w-48 sm:w-56 h-[320px] sm:h-[360px] bg-[#0A213D] rounded-3xl sm:rounded-[2rem] shadow-2xl shadow-[#0A213D]/30 border border-blue-900/40 relative flex flex-col justify-between items-center p-5 overflow-hidden">
                    {/* Subtle Top Label inside pillar */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFB800] font-bold">
                      Workflow Design
                    </span>

                    {/* Subtle Isometric Grid lines inside pillar */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    {/* Bottom Dots Indicator */}
                    <div className="flex items-center gap-1.5 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* 3 FLYING TOOLS OVERLAPPING THE PILLAR */}
                  {/* Tool 1: Inkscape (Flying Top-Left) */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                    className="absolute -top-3 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-900/15 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center p-1.5 shrink-0 border border-neutral-200">
                      <img src={inkscapeIcon} alt="Inkscape" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">Inkscape</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Vektor &amp; Cetak</span>
                    </div>
                  </motion.div>

                  {/* Tool 2: Canva Pro (Flying Prominent Center-Right) */}
                  <motion.div
                    animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
                    transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut', delay: 0.3 }}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-[#FFB800] shadow-2xl shadow-amber-500/20 flex items-center gap-3.5 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center p-2 shrink-0 border border-teal-200">
                      <img src={canvaIcon} alt="Canva Pro" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-mono font-bold uppercase text-amber-700">Real-Time</span>
                      </div>
                      <p className="text-xs sm:text-sm font-black text-[#0A213D] leading-tight">Canva Pro</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Tata Letak &amp; Desain</span>
                    </div>
                  </motion.div>

                  {/* Tool 3: Affinity (Flying Bottom-Left) */}
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-3, 1, -3] }}
                    transition={{ repeat: Infinity, duration: 5.1, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute -bottom-3 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-900/15 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-neutral-200 shadow-2xs">
                      <img src={affinityIcon} alt="Affinity" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">Affinity</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Aset Kreatif</span>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* ====================================================== */}
              {/* FAR RIGHT: VERTICAL "TOOLS PALETTE" BAR                */}
              {/* ====================================================== */}
              <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-5 py-2 border-l border-[#0A213D]/10 pl-4">
                {/* 5 Color Dots (Matching Palette & Tools) */}
                <div className="flex flex-col items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] ring-2 ring-[#FFB800]/40 shadow-xs" title="Amber Accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A213D] ring-2 ring-[#0A213D]/30 shadow-xs" title="Deep Navy" />
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-rose-500/30 shadow-xs" title="Editorial Rose" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C4CC] ring-2 ring-teal-400/30 shadow-xs" title="Canva Teal" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-neutral-300 shadow-xs" title="Clean White" />
                </div>

                {/* Vertical Text Label */}
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0A213D]/50 uppercase [writing-mode:vertical-rl] rotate-180 select-none">
                  PERANGKAT DESAIN
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* CATEGORY SWITCHER PILLS (STICKY / FILTER)                  */}
        {/* ========================================================== */}
        <div id="category-selector" className="mb-12 scroll-mt-28">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Bidang Desain Grafis</span>
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                Pilih Kategori Portofolio
              </h2>
            </div>

            <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200/60">
              Menampilkan {displayedCategories.length} dari {designCategoriesData.length} Bidang Desain
            </span>
          </div>

          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={cn(
                'px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer select-none flex items-center gap-2',
                activeTab === 'all'
                  ? 'bg-[#0A213D] text-white shadow-sm ring-2 ring-[#0A213D]/20'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
              )}
            >
              <Layers className="w-4 h-4" />
              <span>Semua Bidang ({designCategoriesData.length} Kategori)</span>
            </button>

            {designCategoriesData.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer select-none flex items-center gap-2',
                  activeTab === cat.id
                    ? 'bg-[#0A213D] text-white shadow-sm ring-2 ring-[#0A213D]/20'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
                )}
              >
                <FolderOpen className="w-4 h-4 text-[#FFB800]" />
                <span>{cat.title} ({cat.items.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 2 MAIN CATEGORY SECTIONS (EVENT & PROMOTION + SOCIAL MEDIA) */}
        {/* ========================================================== */}
        <div className="space-y-20">
          {displayedCategories.map((category, catIndex) => (
            <motion.section
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white rounded-3xl border border-neutral-200/90 p-6 md:p-8 lg:p-10 shadow-sm scroll-mt-24"
            >
              {/* Category Header Card */}
              <div className="pb-8 border-b border-neutral-100">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#0A213D] text-white">
                      {category.badge}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1.5">
                      <FolderOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>Folder: {category.folderName}</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {category.items.length} Karya Visual
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A213D] tracking-tight mb-2.5">
                    {category.title}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-neutral-700 mb-2">
                    {category.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl">
                    {category.description}
                  </p>
                </div>

                {/* Deliverables Pills */}
                <div className="mt-6 pt-5 border-t border-neutral-100/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400 font-medium mr-1">Ruang Lingkup &amp; Output:</span>
                  {category.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-flex items-center gap-1.5 text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery Title & Indicator */}
              <div className="pt-8 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
                    <FileImage className="w-4 h-4 text-[#FFB800]" />
                    <span>Koleksi Foto &amp; Artwork ({category.items.length} Karya)</span>
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Semua karya dari folder <span className="font-mono text-neutral-700">{category.folderName}</span>
                  </p>
                </div>
                <span className="text-[11px] text-neutral-400 italic">
                  Klik gambar untuk melihat resolusi penuh (Full Lightbox)
                </span>
              </div>

              {/* Grid of Photos / Artworks */}
              <div className={cn('grid gap-6', category.gridCols || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')}>
                {category.items.map((item, itemIdx) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      openLightbox(
                        `${category.title} — ${item.title}`,
                        category.items.map((i) => i.image),
                        itemIdx
                      )
                    }
                    className={cn(
                      'group relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-0.5',
                      category.cardAspect || 'aspect-[4/5] bg-neutral-900'
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={cn(
                        'w-full h-full group-hover:scale-103 transition-transform duration-500 ease-out',
                        category.imageFit || 'object-cover'
                      )}
                      loading="lazy"
                    />

                    {/* Subtle dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                      <div className="self-end bg-white/95 text-[#0A213D] p-2 rounded-full shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#FFB800] uppercase font-bold tracking-wider">
                          {item.categoryTag}
                        </span>
                        <p className="text-sm font-bold leading-tight mt-0.5">{item.title}</p>
                      </div>
                    </div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white/95 group-hover:opacity-0 transition-opacity">
                      {item.categoryTag}
                    </div>

                    {/* Number Index */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white/90 group-hover:opacity-0 transition-opacity">
                      0{itemIdx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* ========================================================== */}
        {/* BOTTOM CTA / INQUIRY BANNER                               */}
        {/* ========================================================== */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0A213D] text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FFB800] font-bold">
              Kolaborasi Desain Grafis &amp; Publikasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 mb-2">
              Punya Kebutuhan Desain Event, Gate, Social Media, atau Poster Sinematik?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Mulai dari perancangan materi publikasi konser, gerbang masuk event (Event Gate &amp; Entrance),
              poster film sinematik &amp; tribute wisuda, hingga paket visual feed media sosial yang konsisten dan berdampak.
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs text-neutral-300 font-mono flex-wrap">
              <span>dimdimcraft.id@gmail.com</span>
              <span>•</span>
              <span>+62 819-5912-5564</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/6281959125564"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFB800] hover:bg-[#e5a600] text-[#0A213D] font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Chat via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:dimdimcraft.id@gmail.com"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-full text-xs sm:text-sm transition-colors border border-white/15 inline-flex items-center gap-2"
            >
              <span>Kirim Email</span>
            </a>
            <Link
              to="/"
              className="bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white font-medium px-4 py-3.5 rounded-full text-xs transition-colors border border-white/10"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>

      {/* ============================================================ */}
      {/* FULLSCREEN LIGHTBOX MODAL WITH ZOOM & CONTROLS               */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-medium max-w-[80vw] truncate">
                <span className="font-bold">{activeImageModal.title}</span>
                <span className="text-neutral-400 ml-2 font-mono">
                  ({activeImageModal.currentIndex + 1} / {activeImageModal.images.length})
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="bg-white/15 hover:bg-white/30 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev Image Button */}
            {activeImageModal.images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                aria-label="Foto Sebelumnya"
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next Image Button */}
            {activeImageModal.images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Foto Selanjutnya"
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Modal Image */}
            <motion.div
              key={activeImageModal.currentIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] flex items-center justify-center p-2"
            >
              <img
                src={activeImageModal.images[activeImageModal.currentIndex]}
                alt={activeImageModal.title}
                className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-200 py-8 bg-[#0A213D] text-white text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Aji. Hak cipta dilindungi.</p>
      </footer>
    </div>
  )
}
