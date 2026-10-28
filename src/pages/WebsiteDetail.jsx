import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Layers,
  Sparkles,
  CheckCircle2,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  Monitor,
  Smartphone,
  Search,
  Building2,
  Hammer,
  Truck,
  Compass,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Sprout,
  Palette,
  FileCode2,
  Flame
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import {
  websiteHeroStats,
  featuredWebsites,
  personalPortfolioProject,
  websiteArchiveGroups
} from '../data/websiteProjects'
import { cn } from '../utils/cn'
import wordpressIcon from '../assets/tools/wordpress.svg'
import antigravityIcon from '../assets/tools/antigravity.svg'

// Icon helper for Archive Categories
const getCategoryIconComponent = (iconName) => {
  switch (iconName) {
    case 'Building2': return Building2
    case 'Hammer': return Hammer
    case 'Truck': return Truck
    case 'Compass': return Compass
    case 'Briefcase': return Briefcase
    case 'HeartPulse': return HeartPulse
    case 'GraduationCap': return GraduationCap
    case 'Sprout': return Sprout
    default: return Globe
  }
}

export default function WebsiteDetail() {
  const [activeCategoryTab, setActiveCategoryTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedGroups, setExpandedGroups] = useState({
    'property-interior': true,
    'construction-industrial': false,
    'automotive-logistics': false,
    'travel-hospitality': false,
    'services-business': false,
    'health-beauty': false,
    'education-community': false,
    'agriculture-others': false
  })

  // Horizontal scroll tabs state & refs for Archive categories
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
    const offset = direction === 'left' ? -260 : 260
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
    setActiveCategoryTab(id)
  }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Toggle single group accordion
  const toggleGroup = (groupId) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId]
    }))
  }

  // Expand all / Collapse all groups
  const toggleAllGroups = (expand) => {
    const updated = {}
    websiteArchiveGroups.forEach((g) => {
      updated[g.id] = expand
    })
    setExpandedGroups(updated)
  }

  // Filtered Archive Groups based on tab and search
  const filteredArchiveGroups = websiteArchiveGroups
    .filter((g) => activeCategoryTab === 'all' || g.id === activeCategoryTab)
    .map((g) => {
      if (!searchQuery.trim()) return g
      const matchingDomains = g.domains.filter((d) =>
        d.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
      return {
        ...g,
        domains: matchingDomains
      }
    })
    .filter((g) => g.domains.length > 0)

  // Total matching domains
  const totalMatchingDomains = filteredArchiveGroups.reduce(
    (acc, g) => acc + g.domains.length,
    0
  )

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
        {/* HERO SECTION: SLEEK EDITORIAL BANNER (MATCHING 3D DETAIL)  */}
        {/* ========================================================== */}
        <div className="relative mb-14">
          {/* Decorative Corner Sunbursts */}
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

              {/* Left Column: Heading, Subtitle & Jump Button */}
              <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0A213D]/70 uppercase font-sans mb-3 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#FFB800]" />
                  <span>PENGEMBANGAN WEBSITE</span>
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A213D] leading-[1.08] mb-5">
                  Situs Web untuk<br />
                  <span className="text-[#0A213D] relative inline-block underline decoration-[#FFB800] decoration-4 underline-offset-8">
                    Kebutuhan Bisnis Nyata.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed mb-8 font-normal">
                  Mengeksplorasi karya pengembangan web, presentasi digital, dan perancangan UI — mulai dari situs web klien hingga proyek personal dan konsep antarmuka.
                </p>

                {/* Stylish Pill Action Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#selected-projects"
                    className="inline-flex items-center gap-3 bg-[#0A213D] text-white pl-2.5 pr-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#122e54] transition-all shadow-lg shadow-[#0A213D]/25 group"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#FFB800] text-[#0A213D] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>Jelajahi Proyek Web</span>
                  </a>

                  <a
                    href="#archive-section"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#0A213D] hover:text-[#FFB800] transition-colors"
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>58 Arsip Web</span>
                  </a>
                </div>
              </div>

              {/* Center-Right Column: Floating Web Dev Showcase Pillar */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 lg:py-4">
                <div className="relative w-full max-w-[320px] sm:max-w-[350px] flex justify-center items-center min-h-[340px] sm:min-h-[380px]">

                  {/* Deep Navy Pillar */}
                  <div className="w-48 sm:w-56 h-[320px] sm:h-[360px] bg-[#0A213D] rounded-3xl sm:rounded-[2rem] shadow-2xl shadow-[#0A213D]/30 border border-blue-900/40 relative flex flex-col justify-between items-center p-5 overflow-hidden">
                    {/* Top Label */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFB800] font-bold">
                      Arsitektur Web
                    </span>

                    {/* Subtle Blueprint Grid Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    {/* Center Code Symbol */}
                    <div className="my-auto text-white/20 text-5xl font-mono select-none font-light">
                      &lt;/&gt;
                    </div>

                    {/* Bottom Dots Indicator */}
                    <div className="flex items-center gap-1.5 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* Tool 1: WordPress (Flying Top-Left) */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                    className="absolute -top-3 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-900/15 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center p-1.5 shrink-0 border border-blue-100">
                      <img src={wordpressIcon} alt="WordPress" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">WordPress</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Platform CMS</span>
                    </div>
                  </motion.div>

                  {/* Tool 2: Elementor Pro (Flying Center-Right) */}
                  <motion.div
                    animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
                    transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut', delay: 0.3 }}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-[#FFB800] shadow-2xl shadow-amber-500/20 flex items-center gap-3.5 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center p-2 shrink-0 border border-rose-200">
                      <div className="w-7 h-7 rounded-lg bg-[#92003B] text-white flex items-center justify-center font-black text-xs">
                        E
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-mono font-bold uppercase text-amber-700">Page Builder</span>
                      </div>
                      <p className="text-xs sm:text-sm font-black text-[#0A213D] leading-tight">Elementor Pro</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Tata Letak Kustom</span>
                    </div>
                  </motion.div>

                  {/* Tool 3: HTML & CSS (Flying Bottom-Left) */}
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-3, 1, -3] }}
                    transition={{ repeat: Infinity, duration: 5.1, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute -bottom-3 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-900/15 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center p-1.5 shrink-0 border border-amber-100 text-[#0A213D]">
                      <FileCode2 className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A213D] leading-tight">HTML5 • CSS3</p>
                      <span className="text-[10px] font-semibold text-neutral-500 block leading-tight">Web Semantik</span>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Far Right: Vertical Bar */}
              <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-5 py-2 border-l border-[#0A213D]/10 pl-4">
                <div className="flex flex-col items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] ring-2 ring-[#FFB800]/40 shadow-xs" title="Amber Accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A213D] ring-2 ring-[#0A213D]/30 shadow-xs" title="Deep Navy" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0073AA] ring-2 ring-blue-500/30 shadow-xs" title="WordPress Blue" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#92003B] ring-2 ring-rose-500/30 shadow-xs" title="Elementor Crimson" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-neutral-300 shadow-xs" title="Clean White" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0A213D]/50 uppercase [writing-mode:vertical-rl] rotate-180 select-none">
                  PENGEMBANGAN WEB
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* METADATA STATS CARDS (GRID OF 4 - MATCHING SPEC)           */}
        {/* ========================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {websiteHeroStats.map((st, sIdx) => (
            <div
              key={sIdx}
              className="bg-white rounded-2xl border border-neutral-200/90 p-5 shadow-2xs hover:shadow-md transition-shadow"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                {st.label}
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#0A213D] tracking-tight">
                {st.value}
              </p>
              <p className="text-xs text-neutral-500 mt-1 font-medium">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================== */}
        {/* SECTION 1: SELECTED CLIENT WEBSITE PROJECTS                */}
        {/* ========================================================== */}
        <section id="selected-projects" className="mb-24 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FFB800] font-bold block mb-1">
                Karya Unggulan Klien
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A213D] tracking-tight">
                Proyek Website Pilihan
              </h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-xl">
                Pilihan proyek website klien yang merepresentasikan berbagai sektor industri dan kebutuhan bisnis.
              </p>
            </div>

            <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200/60 shrink-0">
              2 Proyek Unggulan
            </span>
          </div>

          {/* 2 Featured Large Cards */}
          <div className="space-y-12">
            {featuredWebsites.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Browser Mockup Chrome Header */}
                <div className="bg-neutral-100/90 border-b border-neutral-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400/90 border border-rose-500/30" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/30" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90 border border-emerald-500/30" />
                  </div>

                  {/* Browser URL Pill */}
                  <div className="bg-white px-4 py-1 rounded-full border border-neutral-200/80 text-xs font-mono text-neutral-600 flex items-center gap-2 max-w-md w-full justify-center shadow-2xs">
                    <Globe className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="truncate">{project.domain}</span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-neutral-400 hidden sm:inline">
                    PROYEK 0{idx + 1}
                  </span>
                </div>

                {/* Card Content Grid */}
                <div className="p-4 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

                  {/* Left Column: Visual Browser Preview Area */}
                  <div className="lg:col-span-7">
                    <div className={cn(
                      "relative min-h-[250px] sm:min-h-0 sm:aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-800 shadow-xl bg-gradient-to-br flex flex-col justify-between p-4 sm:p-7 text-white group",
                      project.theme.gradient
                    )}>
                      {/* Subtle Ambient Glow */}
                      <div
                        className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: project.theme.accent }}
                      />

                      {/* Header Inside Visual Mockup */}
                      <div className="flex items-center justify-between gap-2 relative z-10">
                        <span className="text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 whitespace-nowrap">
                          <span className="sm:hidden">{project.category.replace('Website ', '')}</span>
                          <span className="hidden sm:inline">{project.category}</span>
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-neutral-300 flex items-center gap-1 shrink-0 whitespace-nowrap bg-black/20 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-full">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                          <span>WordPress Ready</span>
                        </span>
                      </div>

                      {/* Center Mockup Stage */}
                      <div className="my-auto text-center relative z-10 py-3 sm:py-6">
                        <h4 className="text-xl sm:text-3xl font-black tracking-tight text-white mb-1.5 sm:mb-2">
                          {project.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Bottom Mockup Action & Meta Bar */}
                      <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          <span className="font-mono text-neutral-300 text-[11px] sm:text-xs truncate">{project.domain}</span>
                        </div>
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white text-[#0A213D] hover:bg-[#FFB800] transition-colors shadow-sm text-[10px] sm:text-xs shrink-0 whitespace-nowrap"
                        >
                          <span>Kunjungi Domain</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Information & Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Category Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={cn('text-xs font-semibold px-2.5 py-0.5 rounded-md border', project.theme.badgeBg)}>
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-400">
                          Website Produksi
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-3xl font-black text-[#0A213D] tracking-tight mb-2 sm:mb-3">
                        {project.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 sm:mb-6">
                        {project.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="space-y-2 mb-4 sm:mb-6">
                        <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                          Hasil &amp; Fitur Utama:
                        </span>
                        {project.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-6 sm:mb-8">
                        {project.platformTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visit Website CTA */}
                    <div>
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-[#0A213D] text-white hover:bg-[#122e54] px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md group w-full sm:w-auto"
                      >
                        <span>Kunjungi Website</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/* SECTION 2: PERSONAL PORTFOLIO WEBSITE                      */}
        {/* ========================================================== */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-[#0A213D] via-[#102B4E] to-[#0A213D] rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#FFB800] text-[#0A213D]">
                    {personalPortfolioProject.type}
                  </span>
                  <span className="text-xs font-mono text-neutral-300">
                    Role: {personalPortfolioProject.role} ({personalPortfolioProject.period})
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
                  {personalPortfolioProject.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-2xl">
                  {personalPortfolioProject.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {personalPortfolioProject.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB800] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {personalPortfolioProject.categoryTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Status Box */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center shadow-lg">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFB800] text-[#0A213D] flex items-center justify-center mx-auto mb-4 font-black text-xl shadow-md">
                    A
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Live Active Deployment
                  </h4>
                  <p className="text-xs text-neutral-300 mb-5">
                    Halaman portofolio digital interaktif yang saat ini sedang Anda jelajahi.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-white text-[#0A213D] font-bold text-xs px-5 py-2.5 rounded-full hover:bg-[#FFB800] transition-colors shadow-sm"
                  >
                    <span>Eksplorasi Beranda Utama</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SECTION 3: WEBSITE PROJECT ARCHIVE (58 RECORDS ACCORDION)  */}
        {/* ========================================================== */}
        <section id="archive-section" className="mb-24 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FFB800] font-bold block mb-1">
                Direktori Portofolio Historis
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A213D] tracking-tight">
                Lebih Banyak Website, Berbagai Sektor Industri.
              </h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-xl">
                Selain proyek unggulan, saya telah berkontribusi dalam perancangan dan pengembangan website di beragam sektor industri, terutama pada periode 2024–2025.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono font-bold text-[#0A213D] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                58 Domain Terverifikasi
              </span>
              <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200/60 hidden sm:inline">
                2024 – 2025
              </span>

              {/* Prev / Next Scroll Buttons (Slide Navigation) */}
              <div className="flex items-center gap-1 bg-neutral-100/80 p-1 rounded-full border border-neutral-200/80">
                <button
                  type="button"
                  onClick={() => scrollTabs('left')}
                  disabled={!canScrollLeft}
                  aria-label="Slide ke kiri"
                  title="Slide ke kiri"
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
                  aria-label="Slide ke kanan"
                  title="Slide ke kanan"
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

          {/* Archive Filter & Search Controls Bar */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-4 sm:p-5 shadow-2xs mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari domain web (e.g. cabina, rental, branz)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB800] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
                >
                  Hapus
                </button>
              )}
            </div>

            {/* Quick Action: Expand / Collapse All */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-400 font-mono hidden sm:inline">Tampilan:</span>
              <button
                type="button"
                onClick={() => toggleAllGroups(true)}
                className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition-colors cursor-pointer"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={() => toggleAllGroups(false)}
                className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition-colors cursor-pointer"
              >
                Tutup Semua
              </button>
            </div>
          </div>

          {/* Category Filter Pills (Horizontal Scrollable with Slide Hints) */}
          <div className="relative group/tabs mb-6">
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-2 w-8 sm:w-12 bg-gradient-to-r from-[#FDFDFD] via-[#FDFDFD]/90 to-transparent pointer-events-none z-10" />
            )}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-2 w-8 sm:w-12 bg-gradient-to-l from-[#FDFDFD] via-[#FDFDFD]/90 to-transparent pointer-events-none z-10" />
            )}

            <div
              ref={tabsRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scroll-smooth select-none cursor-grab active:cursor-grabbing touch-pan-x [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-track]:bg-neutral-100/60 [&::-webkit-scrollbar-track]:rounded-full"
            >
              <button
                type="button"
                onClick={() => handleTabClick('all')}
                className={cn(
                  'shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer select-none flex items-center gap-1.5',
                  activeCategoryTab === 'all'
                    ? 'bg-[#0A213D] text-white shadow-sm ring-2 ring-[#0A213D]/20'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
                )}
              >
                <span className="sm:hidden">Semua ({websiteArchiveGroups.length})</span>
                <span className="hidden sm:inline">Semua Sektor (8 Kategori)</span>
              </button>

              {websiteArchiveGroups.map((group) => {
                const getShortGroupName = (name) => {
                  if (name.includes('Property')) return 'Property & Interior'
                  if (name.includes('Construction')) return 'Construction'
                  if (name.includes('Automotive')) return 'Automotive & Transport'
                  if (name.includes('Travel')) return 'Travel & Hospitality'
                  if (name.includes('Services')) return 'Services & Business'
                  if (name.includes('Health')) return 'Health & Beauty'
                  if (name.includes('Education')) return 'Education'
                  if (name.includes('Agriculture')) return 'Agriculture'
                  return name
                }

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => handleTabClick(group.id)}
                    className={cn(
                      'shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer select-none flex items-center gap-1.5',
                      activeCategoryTab === group.id
                        ? 'bg-[#0A213D] text-white shadow-sm ring-2 ring-[#0A213D]/20'
                        : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
                    )}
                  >
                    <span className="font-mono text-[#FFB800]">{group.code}.</span>
                    <span className="sm:hidden">{getShortGroupName(group.name)}</span>
                    <span className="hidden sm:inline">{group.name}</span>
                    <span className="text-[10px] opacity-70">({group.domains.length})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Group Accordions */}
          {filteredArchiveGroups.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center text-neutral-500">
              <Globe className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
              <p className="font-bold text-sm">Tidak ditemukan domain yang cocok</p>
              <p className="text-xs text-neutral-400 mt-1">Coba kata kunci pencarian yang lain.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArchiveGroups.map((group) => {
                const IconComponent = getCategoryIconComponent(group.icon)
                const isExpanded = expandedGroups[group.id] || searchQuery.trim().length > 0

                return (
                  <div
                    key={group.id}
                    className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-2xs transition-all"
                  >
                    {/* Accordion Header Button */}
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.id)}
                      className="w-full p-3.5 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left hover:bg-neutral-50/70 transition-colors cursor-pointer select-none"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0A213D]/5 border border-[#0A213D]/10 flex items-center justify-center shrink-0 text-[#0A213D]">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A213D]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          {/* Mobile Layout: Badge + Domain Count on top line, full Name underneath */}
                          <div className="flex items-center gap-2 mb-1 sm:hidden">
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FFB800] text-[#0A213D]">
                              GROUP {group.code}
                            </span>
                            <span className="text-[10px] font-mono font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                              {group.domains.length} Domain
                            </span>
                          </div>

                          {/* Desktop Layout: Badge + Name in one row */}
                          <div className="hidden sm:flex items-center gap-2">
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FFB800] text-[#0A213D] shrink-0">
                              GROUP {group.code}
                            </span>
                            <h4 className="text-base font-extrabold text-[#0A213D]">
                              {group.name}
                            </h4>
                          </div>

                          {/* Mobile Name: Clean, Bold, Never Truncated */}
                          <h4 className="text-xs sm:hidden font-extrabold text-[#0A213D] leading-snug">
                            {group.name}
                          </h4>

                          <p className="text-xs text-neutral-500 mt-0.5 hidden sm:block">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="text-xs font-mono font-bold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full hidden sm:inline-block">
                          {group.domains.length} Domain
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Accordion Content: Domain Grid */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 sm:p-6 pt-0 border-t border-neutral-100">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-4">
                              {group.domains.map((domain, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="bg-neutral-50/80 hover:bg-white rounded-xl border border-neutral-200/70 hover:border-neutral-300 p-3 flex items-center justify-between gap-2 transition-all group"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="font-mono text-xs text-[#0A213D] font-semibold truncate group-hover:text-blue-700 transition-colors">
                                      {domain}
                                    </span>
                                  </div>

                                  {domain.includes('.') && (
                                    <a
                                      href={`https://${domain}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-neutral-400 hover:text-[#0A213D] p-1 rounded transition-colors"
                                      title={`Buka ${domain}`}
                                    >
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          )}

          {/* Archive Integrity Note */}
          <div className="mt-6 p-4 rounded-2xl bg-neutral-100/70 border border-neutral-200/60 text-center text-xs text-neutral-500 font-mono">
            <span>Data arsip merepresentasikan 58 domain proyek historis pada periode 2024–2025. Status aktif &amp; versi tampilan saat ini dapat berbeda dengan kontribusi awal.</span>
          </div>
        </section>

        {/* ========================================================== */}
        {/* CLOSING SECTION: CTA (MATCHING SPEC)                       */}
        {/* ========================================================== */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0A213D] text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FFB800] font-bold">
              Kolaborasi &amp; Solusi Digital
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 mb-2">
              Punya Rencana Proyek?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Saya terbuka untuk peluang kerja sama dan kolaborasi yang menggabungkan desain fungsional serta solusi digital yang solutif.
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs text-neutral-300 font-mono flex-wrap">
              <span>dimdimcraft.id@gmail.com</span>
              <span>•</span>
              <span>+62 819-5912-5564</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/6281959125564"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#e5a600] text-[#0A213D] font-bold px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap text-center"
            >
              <span>Chat via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>
            <a
              href="mailto:dimdimcraft.id@gmail.com"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm transition-colors border border-white/15 whitespace-nowrap text-center"
            >
              <span>Kirim Email</span>
            </a>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-200 py-10 bg-[#0A213D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Aji — Visual &amp; Digital Designer.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-[#FFB800] transition-colors">Beranda</Link>
            <Link to="/work/3d-portfolio" className="hover:text-[#FFB800] transition-colors">3D Layout</Link>
            <Link to="/work/design-portfolio" className="hover:text-[#FFB800] transition-colors">Design</Link>
            <Link to="/#contact" className="hover:text-[#FFB800] transition-colors">Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
