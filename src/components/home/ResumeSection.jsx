import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  Award,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building2,
  Code2,
  Palette,
  Database,
  ArrowUpRight,
  Layers,
  Clock,
  ChevronRight
} from 'lucide-react'
import mePhoto from '../../assets/ME.png'
import { cn } from '../../utils/cn'

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'experience', 'certifications'
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dimdimcraft.id@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  // Work Experiences Data
  const workExperiences = [
    {
      id: 'qupro-designer',
      role: 'Desainer Grafis & 3D',
      company: 'Qupro Indonesia',
      location: 'Jakarta, Indonesia',
      period: 'Feb 2025 – Sekarang',
      current: true,
      category: 'work',
      icon: Palette,
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      bullets: [
        'Merancang dan memproduksi berbagai aset kreatif digital, termasuk feed media sosial, poster publikasi, dan materi visual acara yang selaras dengan identitas merek.',
        'Mengembangkan model tata ruang 3D terperinci untuk panggung dan venue acara guna memberikan visualisasi spasial presisi dalam perencanaan tata letak.',
        'Berkolaborasi aktif dengan tim kreatif untuk menerjemahkan brief proyek menjadi desain berkualitas tinggi dengan ketelitian detail dan standar estetika terbaik.'
      ],
      skills: ['3D Event Layout', 'Key Visuals', 'Social Media Feeds', 'Spatial Visualization', 'Canva Pro', 'Inkscape']
    },
    {
      id: 'dewarangga-wp',
      role: 'Pengembang WordPress Lepas (Freelance)',
      company: 'Dewarangga',
      location: 'Jakarta, Indonesia',
      period: 'Sep 2024 – Agu 2025',
      current: false,
      category: 'work',
      icon: Code2,
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      bullets: [
        'Mengembangkan dan mengelola situs web berbasis WordPress sesuai spesifikasi klien, memastikan tata letak responsif serta performa optimal.',
        'Berkolaborasi dengan klien untuk memahami kebutuhan fitur dan preferensi desain, lalu mengimplementasikannya melalui integrasi plugin dan kustomisasi tema.',
        'Melakukan pemeliharaan berkala, pembaruan konten, dan pengoptimalan fungsi website agar senantiasa memenuhi standar praktik terbaik SEO.'
      ],
      skills: ['WordPress', 'Elementor', 'Theme Customization', 'Responsive Web', 'SEO Standards', 'Site Maintenance']
    },
    {
      id: 'rumahweb-support',
      role: 'Dukungan Teknis (Technical Support)',
      company: 'Rumahweb Indonesia',
      location: 'Jakarta, Indonesia',
      period: 'Mar 2024 – Agu 2024',
      current: false,
      category: 'work',
      icon: Building2,
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      bullets: [
        'Mendokumentasikan kendala teknis dan solusi penanganannya untuk kasus-kasus baru sebagai materi pembelajaran dan panduan tim technical support.',
        'Memberikan bantuan teknis bagi pelanggan terkait pengelolaan hosting, domain, dan server Rumahweb melalui saluran live chat, tiket, email, dan telepon.'
      ],
      skills: ['Web Hosting Support', 'Troubleshooting', 'Technical Documentation', 'Customer Communication', 'DNS & Servers']
    },
    {
      id: 'beewhite-teacher',
      role: 'Instruktur Ekstrakurikuler Public Speaking',
      company: 'Beewhite Management',
      location: 'Jakarta, Indonesia',
      period: 'Agu 2023 – Sep 2023',
      current: false,
      category: 'work',
      icon: Briefcase,
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      bullets: [
        'Menyampaikan materi pelatihan untuk membangun rasa percaya diri dan keberanian siswa dalam berbicara di depan umum.',
        'Memberikan pelatihan teknik komunikasi efektif, olah vokal, bahasa tubuh, ekspresi wajah, serta penyampaian presentasi yang menarik.',
        'Mengevaluasi dan memantau perkembangan kemampuan berbicara di depan umum siswa secara rutin setiap minggu.'
      ],
      skills: ['Public Speaking', 'Effective Communication', 'Mentoring & Coaching', 'Presentation Skills']
    }
  ]

  // Certifications
  const certifications = [
    {
      id: 'startup-campus-ds',
      title: 'Sertifikasi – Data Science: Greener Future with Data-Driven Solutions',
      provider: 'Startup Campus',
      period: 'Kampus Merdeka Certified',
      category: 'certifications',
      bullets: [
        'Menyelesaikan program pelatihan intensif Data Science yang berfokus pada solusi analitik data untuk keberlanjutan dan Green Economy.',
        'Menerapkan konsep ESG (Environmental, Social, Governance) dalam pemrosesan dan perancangan alur analitik data (data pipeline).',
        'Meraih tiga sertifikat resmi untuk partisipasi, uji kompetensi, dan kelulusan terbaik, dengan akses khusus ke Google Career Certificate.'
      ],
      skills: ['Data Science', 'Python', 'ESG Analysis', 'Sustainability Metrics', 'Google Career Certificate']
    },
    {
      id: 'pt-nfci-fullstack',
      title: 'Sertifikasi – Fullstack Web Developer',
      provider: 'PT Nurul Fikri Cipta Inovasi',
      period: 'Kampus Merdeka Certified',
      category: 'certifications',
      bullets: [
        'Mengembangkan aplikasi web modern menggunakan HTML, CSS, Bootstrap, JavaScript, React JS, PHP, dan Laravel dengan integrasi basis data serta REST API.',
        'Menerapkan pengelolaan basis data SQL/MySQL/MariaDB, Git/GitHub, metodologi Agile/Kanban, desain UI/UX, dan penyusunan dokumentasi proyek teknis.'
      ],
      skills: ['React JS', 'Laravel & PHP', 'REST API', 'MySQL/MariaDB', 'Git/GitHub', 'Agile/Kanban', 'UI/UX']
    }
  ]

  return (
    <section id="curriculum-vitae" className="mb-20 pt-10 scroll-mt-28">
      {/* Anchor for Navbar link */}
      <div id="experience" className="-mt-28 pt-28" />
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Curriculum Vitae &amp; Background</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A213D] tracking-tight">
            Daftar Riwayat Hidup
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 max-w-2xl leading-relaxed">
            Rekam jejak profesional, pengalaman kerja, serta program sertifikasi kompetensi.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="w-fit self-start inline-flex items-center gap-1 sm:gap-1.5 p-1.5 bg-neutral-100 rounded-2xl border border-neutral-200/80 overflow-x-auto max-w-full scrollbar-none shrink-0">
          {[
            { id: 'all', label: 'Semua Riwayat', icon: Layers },
            { id: 'experience', label: 'Pengalaman Kerja', icon: Briefcase },
            { id: 'certifications', label: 'Sertifikasi', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer select-none whitespace-nowrap shrink-0',
                  isActive
                    ? 'bg-[#0A213D] text-white shadow-sm ring-1 ring-[#0A213D]/20'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                )}
              >
                <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-[#FFB800]' : 'text-neutral-500')} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Grid: Left Identity Bio Card + Right Dynamic Timelines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ======================================================== */}
        {/* LEFT COLUMN: PROFILE CARD WITH ME.PNG & QUICK CONTACTS   */}
        {/* ======================================================== */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 shadow-sm overflow-hidden relative group">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-amber-200/40 via-blue-100/20 to-transparent rounded-full blur-2xl -z-10 pointer-events-none" />

            {/* Profile Photo Area */}
            <div className="relative mb-5 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-gradient-to-br from-neutral-800 to-neutral-950 p-1 group-hover:scale-102 transition-transform duration-300">
                <img
                  src={mePhoto}
                  alt="Dimas Aji Nugroho"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" title="Active & Available" />
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-[#0A213D] mt-2 tracking-tight">
                DIMAS AJI NUGROHO
              </h4>
              <p className="text-xs font-semibold text-[#FFB800] bg-[#0A213D] px-3 py-1 rounded-full mt-1.5 inline-block">
                Designer • 3D Spatial Visualizer • Web Developer
              </p>
            </div>

            {/* Contact Details Pill List */}
            <div className="space-y-2.5 pt-4 border-t border-neutral-100 text-xs text-neutral-700">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-medium text-neutral-800">Bogor, Jawa Barat, Indonesia</span>
              </div>

              <a
                href="https://wa.me/6281959125564"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all group/contact"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-mono text-neutral-800 group-hover/contact:text-emerald-900 truncate">
                    +62 819-5912-5564
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/contact:text-emerald-600 shrink-0" />
              </a>

              <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all group/email">
                <a
                  href="mailto:dimdimcraft.id@gmail.com"
                  className="flex items-center gap-2.5 min-w-0 flex-1 truncate"
                >
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-mono text-neutral-800 group-hover/email:text-amber-900 truncate text-[11px]">
                    dimdimcraft.id@gmail.com
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 ml-1 shrink-0"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <a
                href="https://www.linkedin.com/in/dimas-aji-nugroho"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group/in"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <LinkedInIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium text-neutral-800 group-hover/in:text-blue-900 truncate text-[11px]">
                    in/dimas-aji-nugroho
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/in:text-blue-600 shrink-0" />
              </a>
            </div>

            {/* Professional Summary Paragraph */}
            <div className="mt-5 pt-4 border-t border-neutral-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-1.5">
                Ringkasan Profesional
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                Mahasiswa Sistem Informasi yang memadukan keahlian teknis dan kreativitas di bidang teknologi digital, data, dan desain. Berpengalaman dalam pengembangan web, analitik data, business intelligence, basis data, serta desain visual dan pemodelan 3D. Terbiasa memimpin proyek dari eksplorasi ide hingga eksekusi solusi visual siap pakai.
              </p>
            </div>


          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: TIMELINES & EXPERIENCES LIST               */}
        {/* ======================================================== */}
        <div className="lg:col-span-8 space-y-10">

          {/* 1. WORK EXPERIENCES */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0A213D] text-[#FFB800] flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#0A213D] tracking-tight">
                    Pengalaman Kerja
                  </h4>
                </div>
                <span className="text-xs font-mono text-neutral-500 font-medium">
                  {workExperiences.length} Posisi
                </span>
              </div>

              <div className="space-y-4">
                {workExperiences.map((exp, idx) => {
                  const Icon = exp.icon
                  return (
                    <div
                      key={exp.id}
                      className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      {/* Top Row: Role, Company, Period */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-start sm:items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-[#0A213D] shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h5 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                                {exp.role}
                              </h5>
                              {exp.current && (
                                <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                                  Posisi Aktif
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-neutral-700 flex items-center gap-1.5 mt-0.5">
                              <span className="text-[#0A213D]">{exp.company}</span>
                              <span className="text-neutral-300">•</span>
                              <span className="text-neutral-500 font-normal">{exp.location}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs font-mono text-neutral-500 bg-neutral-100/90 px-3 py-1 rounded-full w-fit self-start sm:self-center border border-neutral-200/60 shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-2 my-3.5 text-xs sm:text-[13px] text-neutral-600 leading-relaxed pl-1">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-50 text-neutral-600 border border-neutral-200/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* 2. CERTIFICATIONS */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0A213D] text-[#FFB800] flex items-center justify-center">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#0A213D] tracking-tight">
                    Sertifikasi &amp; Pelatihan
                  </h4>
                </div>
                <span className="text-xs font-mono text-neutral-500 font-medium">
                  {certifications.length} Program
                </span>
              </div>

              <div className="space-y-4">
                {certifications.map((study) => (
                  <div
                    key={study.id}
                    className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 inline-block mb-1">
                          {study.provider}
                        </span>
                        <h5 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                          {study.title}
                        </h5>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full self-start sm:self-center border border-neutral-200/60 shrink-0">
                        {study.period}
                      </span>
                    </div>

                    <ul className="space-y-2 my-3 text-xs sm:text-[13px] text-neutral-600 leading-relaxed pl-1">
                      {study.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                      {study.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-50 text-neutral-600 border border-neutral-200/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  )
}
