import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Sparkles } from 'lucide-react'

import mePortrait from '../../assets/ME.webp'

export default function Hero() {
  return (
    <section id="home" className="relative pt-8 pb-12 md:pt-14 md:pb-20 overflow-hidden bg-white text-[#0A213D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ========================================================== */}
          {/* LEFT COLUMN: INTRO & HEADLINE                              */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">

            {/* Design Bounding Box Tag (Figma / Vector Selection Style) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative inline-flex items-center px-4 py-1.5 border-2 border-[#0A213D] bg-white rounded-xs text-[#0A213D] text-xs font-bold tracking-wide shadow-2xs mb-6 select-none"
            >
              {/* 4 Corner Resizing Handles */}
              <span className="w-2 h-2 bg-[#FFB800] border border-[#0A213D] absolute -top-1 -left-1" />
              <span className="w-2 h-2 bg-[#FFB800] border border-[#0A213D] absolute -top-1 -right-1" />
              <span className="w-2 h-2 bg-[#FFB800] border border-[#0A213D] absolute -bottom-1 -left-1" />
              <span className="w-2 h-2 bg-[#FFB800] border border-[#0A213D] absolute -bottom-1 -right-1" />
              <span>Halo Semua! 👋</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0A213D] leading-[1.12] mb-6"
            >
              Saya{' '}
              <span className="text-[#FFB800] relative inline-block underline decoration-[#FFB800]/50 decoration-4 underline-offset-6">
                Aji
              </span>
              ,<br />
              Desainer Visual &amp; Digital<br />
              Berdomisili di Jakarta, Indonesia
            </motion.h1>

            {/* Subtext Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed mb-8 font-normal"
            >
              Mengubah gagasan menjadi solusi visual nyata. Mulai dari pemodelan tata ruang panggung 3D, materi desain grafis &amp; digital, hingga pengembangan website kustom.
            </motion.p>

            {/* Action Buttons (Dual Pill Button + Secondary WhatsApp Pill) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              {/* Dual-color pill button with attached yellow action circle */}
              <a
                href="#selected-works"
                className="group inline-flex items-center bg-[#0A213D] text-white pl-6 pr-2 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-[#122e54] transition-all duration-300 shadow-xl shadow-blue-950/20"
              >
                <span>Lihat Portofolio</span>
                <span className="w-8 h-8 rounded-full bg-[#FFB800] text-[#0A213D] flex items-center justify-center ml-3.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </a>
            </motion.div>

          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: PORTRAIT WITH ORGANIC BLOB & FLOATING TAGS   */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 relative flex justify-center items-center">

            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">

              {/* Main Yellow Blob Frame (Image is masked inside to perfectly match the shape) */}
              <div className="relative w-full h-full bg-[#FFB800] rounded-[48%_52%_46%_54%/52%_48%_54%_46%] overflow-hidden flex items-end justify-center shadow-2xl shadow-amber-500/20 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={mePortrait}
                  alt="Aji - Visual & Digital Designer"
                  className="w-full h-full object-cover object-bottom filter contrast-[1.03] select-none pointer-events-none"
                />
              </div>

              {/* ====================================================== */}
              {/* ROTATING CIRCULAR "HIRE ME" BADGE                      */}
              {/* ====================================================== */}
              <div className="absolute top-8 -right-4 sm:-right-8 z-20 group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">

                  {/* Rotating Outer Text Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[10.5px] font-black uppercase tracking-[2.8px] fill-[#0A213D]">
                        <textPath href="#circlePath">
                          • WELCOME • AJI PORTFOLIO
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>

                  {/* Inner Yellow Badge with Arrow */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A213D] text-[#FFB800] border-2 border-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* ====================================================== */}
              {/* FLOATING CURSOR DESIGNER BADGES (Figma Canvas Style)   */}
              {/* ====================================================== */}

              {/* Badge 1: 3D Visualizer (Navy Blue Pill with Cursor Arrow) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 left-2 sm:-left-4 z-20 flex items-center gap-1.5"
              >
                {/* Navy Pointer Cursor */}
                <svg
                  className="w-5 h-5 text-[#0A213D] fill-current drop-shadow-md -rotate-12 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <div className="bg-[#0A213D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl border border-blue-900/60 whitespace-nowrap">
                  Visualisator 3D
                </div>
              </motion.div>

              {/* Badge 2: WordPress / Web Developer (Yellow Pill with Cursor Arrow) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute bottom-20 -right-2 sm:-right-8 z-20 flex items-center gap-1.5"
              >
                {/* Yellow Pointer Cursor */}
                <svg
                  className="w-5 h-5 text-[#FFB800] fill-current drop-shadow-md -rotate-12 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <div className="bg-[#FFB800] text-[#0A213D] px-3.5 py-1.5 rounded-full text-xs font-black shadow-xl border border-amber-300 whitespace-nowrap">
                  WordPress &amp; Web
                </div>
              </motion.div>

              {/* Badge 3: UI/UX Design (Yellow Pill with Cursor Arrow) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute bottom-50 -right-2 sm:-right-8 z-20 flex items-center gap-1.5"
              >
                {/* Yellow Pointer Cursor */}
                <svg
                  className="w-5 h-5 text-[#FFB800] fill-current drop-shadow-md -rotate-12 shrink-0"
                  viewBox="0 0 30 "
                >
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <div className="bg-[#FFB800] text-[#0A213D] px-3.5 py-1.5 rounded-full text-xs font-black shadow-xl border border-amber-300 whitespace-nowrap">
                  Desainer Grafis
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
