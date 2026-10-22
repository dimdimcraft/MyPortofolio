import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFA] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between bg-neutral-900 text-white rounded-3xl p-8 md:p-12 lg:p-16 border border-neutral-800 shadow-sm relative overflow-hidden"
        >
          {/* Background glow effects */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-neutral-800 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-neutral-800 rounded-full blur-3xl opacity-25 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-semibold tracking-wide uppercase mb-6">
                <span>Kolaborasi Langsung</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
                Punya rencana proyek 3D, Desain, atau Website?
              </h2>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8 max-w-lg">
                Baik kebutuhan tata ruang panggung skala 1:1 di SketchUp &amp; Enscape, identitas editorial yang matang, hingga solusi website WordPress kustom, mari wujudkan bersama.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  <span>Konsep Tata Ruang 3D Event &amp; Pameran Booth</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  <span>Identitas Visual &amp; Publikasi Editorial Acara</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  <span>Website WordPress Kustom &amp; Berkinerja Tinggi</span>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col justify-between gap-6">
              <div className="bg-neutral-800/70 border border-neutral-700/70 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Tersedia untuk proyek baru</p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Siap Berkolaborasi
                  </span>
                </div>

                <div className="space-y-1 mb-6">
                  <a
                    href="mailto:dimdimcraft.id@gmail.com"
                    className="text-xl md:text-2xl font-bold text-white hover:text-[#FFB800] transition-colors block truncate"
                  >
                    dimdimcraft.id@gmail.com
                  </a>
                  <p className="text-sm font-mono text-neutral-300">
                    +62 819-5912-5564 • Bogor &amp; Jakarta, ID
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <a
                    href="https://wa.me/6281959125564"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#FFB800] text-[#0A213D] hover:bg-amber-400 font-bold px-5 py-3 rounded-full text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Chat WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="mailto:dimdimcraft.id@gmail.com"
                    className="bg-white text-neutral-950 hover:bg-neutral-100 font-bold px-5 py-3 rounded-full text-xs sm:text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Kirim Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Social Badges */}
                <div className="flex items-center gap-2 pt-4 border-t border-neutral-700/60 text-xs flex-wrap">
                  <span className="text-neutral-400 text-[11px] mr-1">Terhubung:</span>
                  <a
                    href="https://www.linkedin.com/in/dimas-aji-nugroho"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-neutral-700/60 hover:bg-blue-600/30 text-neutral-200 hover:text-white border border-neutral-600/60 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/dimasaji_ngrho/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-neutral-700/60 hover:bg-rose-600/30 text-neutral-200 hover:text-white border border-neutral-600/60 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              <p className="text-xs text-neutral-400 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Respons cepat via WhatsApp &amp; Email (maksimal 24 jam).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
