import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Selected Works', href: '#selected-works' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 lg:px-8">
      {/* Floating Pill Bar in Deep Blue (#0A213D) */}
      <div className="max-w-6xl mx-auto bg-[#0A213D] text-white rounded-full px-5 py-2.5 sm:py-3 shadow-xl shadow-blue-950/15 border border-blue-900/40 flex items-center justify-between transition-all">
        
        {/* Brand / Logo (Yellow Circle + Bold White Text) */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#FFB800] text-[#0A213D] font-extrabold text-sm flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors">
            Aji<span className="text-[#FFB800]">.</span>
          </span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors py-1 ${
                link.active
                  ? 'text-[#FFB800] font-bold'
                  : 'text-neutral-300 hover:text-[#FFB800]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Pill White Button) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-white text-[#0A213D] hover:bg-[#FFB800] hover:text-[#0A213D] px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-1.5 rounded-full hover:bg-blue-900/60 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-[#0A213D] border border-blue-900/50 rounded-2xl p-5 shadow-2xl text-white"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                    link.active
                      ? 'bg-blue-900/50 text-[#FFB800] font-bold'
                      : 'text-neutral-300 hover:bg-blue-900/40 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-blue-900/60">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#FFB800] text-[#0A213D] font-bold text-center py-2.5 rounded-xl block text-xs"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
