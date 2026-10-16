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
                <span>Direct Collaboration</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
                Have a project in mind across 3D, Design, or Web?
              </h2>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8 max-w-lg">
                Whether you need a full 1:1 scale event stage layout in SketchUp &amp; Enscape, refined editorial branding, or a custom WordPress solution, let&apos;s build something exceptional.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  <span>3D Event &amp; Exhibition Spatial Concepts</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  <span>Visual Identity &amp; Editorial Publication Systems</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  <span>Custom WordPress &amp; High-Performance Web</span>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col justify-between gap-8">
              <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Available for projects</p>
                <p className="text-xl md:text-2xl font-bold text-white mb-6">aji@example.com</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:aji@example.com"
                    className="bg-white text-neutral-950 px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send an Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/dimasaji_ngrho/"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-neutral-600 text-neutral-200 px-6 py-3 rounded-full text-sm font-semibold hover:border-neutral-400 hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <p className="text-xs text-neutral-500 text-center lg:text-left">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
