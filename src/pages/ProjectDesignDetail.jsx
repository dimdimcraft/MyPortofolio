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
import affinityIcon from '../assets/tools/affinity.svg'

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
        {/* HERO SECTION: SLEEK EDITORIAL BANNER FOR DESIGN PORTFOLIO */}
        {/* ========================================================== */}
        <div className="relative mb-14 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A213D] via-[#102B4E] to-[#0A213D] text-white p-8 md:p-12 lg:p-14 shadow-2xl border border-neutral-800">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Micro Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10">
            {/* Top Category Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFB800] text-[#0A213D] shadow-sm">
                <Palette className="w-3.5 h-3.5" />
                <span>Graphic Design Disciplines</span>
              </span>
              <span className="text-xs font-mono text-neutral-300">
                3 Bidang Utama: Event &amp; Promotion • Social Media • Gate &amp; Entrance
              </span>
            </div>

            {/* Main Editorial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Heading, Subtitle & Metadata Stats */}
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-5 text-white">
                  Visual Design Across Event Staging &amp; Digital Media
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  Menampilkan portofolio desain visual terpadu: perancangan materi publikasi
                  acara skala besar (*Event &amp; Promotional Design*), konten kampanye digital
                  (*Social Media &amp; Editorial Design*), gerbang penyambutan &amp; gantry maraton (*Event Gate &amp; Entrance Design*), serta seni poster sinematik &amp; eksperimen kreatif (*Poster Art &amp; Creative Experiments*).
                </p>

                {/* 4 Feature Stats in Compact Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#FFB800]">
                      {designCategoriesData.length} Bidang
                    </div>
                    <div className="text-[10px] font-mono text-neutral-300 uppercase tracking-wider mt-0.5">Kategori Utama</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-white">
                      {designCategoriesData.reduce((acc, cat) => acc + cat.items.length, 0)} Karya
                    </div>
                    <div className="text-[10px] font-mono text-neutral-300 uppercase tracking-wider mt-0.5">Aset Foto Pilihan</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#FFB800]">Print, Arch &amp; Feed</div>
                    <div className="text-[10px] font-mono text-neutral-300 uppercase tracking-wider mt-0.5">Format Fleksibel</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-white">Multi Tools</div>
                    <div className="text-[10px] font-mono text-neutral-300 uppercase tracking-wider mt-0.5">Canva • Inkscape</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-4 relative flex items-center justify-center pt-6 pb-2">
                <div className="relative w-full max-w-[340px]">

                  {/* Floating Tool Badge 1: Inkscape (Top Left) */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.3 }}
                    className="absolute -top-4 -left-3 sm:-left-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white shadow-xl shadow-black/20 flex items-center gap-2.5 select-none"
                  >
                    <div className="w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center p-1.5 border border-neutral-200 shadow-2xs">
                      <img src={inkscapeIcon} alt="Inkscape" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">Inkscape</p>
                      <span className="text-[9px] font-mono font-semibold text-neutral-500 block leading-tight">Vector &amp; Print</span>
                    </div>
                  </motion.div>

                  {/* Floating Tool Badge 2: Canva (Top Right) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
                    className="absolute -top-4 -right-3 sm:-right-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white shadow-xl shadow-black/20 flex items-center gap-2.5 select-none"
                  >
                    <div className="w-7 h-7 rounded-xl bg-teal-50 flex items-center justify-center p-1.5 border border-teal-100 shadow-2xs">
                      <img src={canvaIcon} alt="Canva" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">Canva Pro</p>
                      <span className="text-[9px] font-mono font-semibold text-neutral-500 block leading-tight">Layout Design</span>
                    </div>
                  </motion.div>

                  {/* The Image Card itself with overflow-hidden */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900 group">
                    <img
                      src={designCategoriesData[0]?.items[0]?.image}
                      alt="Featured Design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono uppercase bg-[#FFB800] text-[#0A213D] px-2 py-0.5 rounded font-bold">
                        Kategori Pilihan
                      </span>
                      <p className="text-sm font-bold mt-1 line-clamp-1">{designCategoriesData[0]?.title}</p>
                      <p className="text-[11px] text-neutral-300">{designCategoriesData[0]?.items?.length || 6} Materi Desain Siap Cetak &amp; Publikasi</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Far Right Vertical Bar */}
              <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-5 py-2 border-l border-white/10 pl-4">
                <div className="flex flex-col items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] ring-2 ring-[#FFB800]/40" title="Amber Accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-rose-500/40" title="Editorial Rose" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40" title="Emerald Fresh" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-blue-500/40" title="Qupro Blue" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-white/40" title="Clean White" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase [writing-mode:vertical-rl] rotate-180 select-none">
                  DESIGN SUITE
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
                  <span className="text-xs font-mono text-neutral-400 font-medium mr-1">Scope &amp; Output:</span>
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
        <p>&copy; {new Date().getFullYear()} Aji. All rights reserved.</p>
      </footer>
    </div>
  )
}
