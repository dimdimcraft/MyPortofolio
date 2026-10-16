import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import MarqueeBanner from './components/home/MarqueeBanner'
import SelectedWorks from './components/home/SelectedWorks'
import Contact from './components/home/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Project3DDetail from './pages/Project3DDetail'
import ProjectDesignDetail from './pages/ProjectDesignDetail'

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0A213D] selection:bg-[#FFB800] selection:text-[#0A213D]">

      {/* Floating Pill Navbar in Deep Blue with Yellow Accent */}
      <Navbar />

      {/* Hero Section (Selection Box Tag, Dual-Pill Button, Organic Yellow Blob Portrait, Rotating Badge, Floating Cursors) */}
      <Hero />

      {/* Marquee Banner Ticker (Yellow Strip with Asterisks & Blue Text) */}
      <MarqueeBanner />

      {/* Selected Works Section */}
      <SelectedWorks />

      {/* Contact Section */}
      <Contact />

      {/* Minimalist Footer in Deep Blue (#0A213D) */}
      <footer className="border-t-2 border-[#0A213D]/10 py-12 bg-[#0A213D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-neutral-300">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-[#FFB800] text-[#0A213D] font-bold text-xs flex items-center justify-center">
                A
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">AJI.</span>
            </div>
            <p className="text-neutral-400">
              Visual &amp; Digital Designer — 3D Event Layout, Design &amp; WordPress Development
            </p>
          </div>
          <div className="flex flex-wrap gap-6 font-semibold text-neutral-200">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FFB800] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#FFB800] transition-colors">
              GitHub
            </a>
            <a href="mailto:aji@example.com" className="hover:text-[#FFB800] transition-colors">
              Email Aji
            </a>
          </div>
          <p className="text-neutral-400">&copy; {new Date().getFullYear()} Aji. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/3d-portfolio" element={<Project3DDetail />} />
        <Route path="/work/3d-projects" element={<Project3DDetail />} />
        <Route path="/work/qupro-event-stage-2024" element={<Project3DDetail />} />
        <Route path="/work/design-portfolio" element={<ProjectDesignDetail />} />
        <Route path="/work/design-detail" element={<ProjectDesignDetail />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
