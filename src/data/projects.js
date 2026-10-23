import balairung1 from '../assets/3D/BALAIRUNG UI/1.webp'
import balairung2 from '../assets/3D/BALAIRUNG UI/2.webp'
import gbk1 from '../assets/3D/GBK BASKET HALL/Enscape_2026-10-12-10-33-51.webp'
import monas1 from '../assets/3D/MONAS/Enscape_2026-10-12-10-54-39.webp'

// Sesuai rules.md Section 6, 7, 19, & 23 & Permintaan User: Kategori Design, 3D Layout, dan WordPress
export const projectsData = [
  {
    id: 'qupro-event-stage-2024',
    slug: '3d-portfolio',
    title: 'Merancang Pengalaman Spasial Panggung & Acara',
    category: '3D Layout',
    year: '2024',
    tagline: 'Tata Ruang Panggung & Pameran 3D',
    shortDescription: 'Visualisasi panggung 3D dan stan pameran dengan tata letak modular serta pencahayaan dinamis yang terukur.',
    client: 'Desain Tata Ruang Acara',
    role: 'Desainer & Visualisator 3D',
    tools: ['SketchUp', 'Enscape 3D', 'Blender'],
    coverImage: balairung1,
    featured: true,
    stats: [
      { label: 'Proyek Selesai', value: '30+' },
      { label: 'Skala Presisi', value: '1:1' }
    ],
    floatingHighlights: [
      {
        title: '01 — Wisuda Balairung UI',
        subtitle: 'SketchUp · Perencanaan Tata Ruang 3D',
        image: balairung1
      },
      {
        title: '02 — Panggung Acara GBK Basket Hall',
        subtitle: 'SketchUp · Rendering Enscape 3D',
        image: gbk1
      },
      {
        title: '03 — Festival Panggung Megah Monas',
        subtitle: 'Tata Letak Acara · Konsep Spasial',
        image: monas1
      }
    ],
    overview: 'Konseptualisasi tata ruang panggung dan venue pameran berskala besar dengan pencahayaan dinamis dan tata letak modular untuk 6 venue strategis.',
    contribution: 'Membuat model 3D panggung secara mendetail di SketchUp, rendering visual realistis di Enscape & Blender, serta menyusun materi panduan instalasi visual.',
    process: 'Dimulai dari brief kebutuhan kapasitas panggung, drafting tata letak modular, penyesuaian pencahayaan dramatis, hingga final render resolusi tinggi untuk persetujuan klien.',
    gallery: [
      balairung1,
      balairung2,
      gbk1
    ]
  },
  {
    id: 'beewhite-brand-identity',
    slug: 'beewhite-brand-identity',
    title: 'Sistem Editorial & Identitas Visual Beewhite',
    category: 'Design',
    year: '2023',
    tagline: 'Desain Editorial & Panduan Identitas Merek',
    shortDescription: 'Panduan identitas visual komprehensif, publikasi editorial, hierarki tipografi bersih, dan materi pendukung korporat.',
    client: 'Beewhite',
    role: 'Desainer Visual',
    tools: ['Affinity Designer', 'Canva', 'Inkscape'],
    coverImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    floatingHighlights: [
      {
        title: 'Sistem Tipografi',
        subtitle: 'Tipografi geometris dengan hierarki editorial',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=200&q=80'
      },
      {
        title: 'Buku Panduan Brand',
        subtitle: 'Buku panduan manual identitas merek 48 halaman',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=200&q=80'
      }
    ],
    overview: 'Pengembangan identitas visual baru yang mengedepankan kesederhanaan editorial, palet netral berkelas, dan keterbacaan tinggi untuk publikasi cetak dan digital.',
    contribution: 'Menentukan panduan tipografi, merancang sistem grid editorial buku panduan, dan memproduksi template visual media sosial.',
    process: 'Riset referensi tipografi modern, eksplorasi logo mark, perancangan layout editorial, serta standarisasi aset digital untuk konsistensi tim.',
    gallery: [
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'startup-campus-lms-portal',
    slug: 'startup-campus-lms-portal',
    title: 'Portal Akademi Pembelajaran Startup Campus',
    category: 'WordPress',
    year: '2023',
    tagline: 'Portal Pembelajaran & Showcase Program Kustom',
    shortDescription: 'Portal pembelajaran korporat modern berbasis WordPress & Elementor, dilengkapi kurikulum modular dan tata letak responsif cepat.',
    client: 'Startup Campus',
    role: 'Spesialis WordPress & Desainer UI',
    tools: ['WordPress', 'Elementor Pro', 'CSS3', 'PHP'],
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    floatingHighlights: [
      {
        title: 'Arsitektur Responsif',
        subtitle: 'Dioptimalkan untuk pengguna ponsel & tablet',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80'
      },
      {
        title: 'Tipe Post Kustom',
        subtitle: 'Alur program dinamis & profil mentor terpadu',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=200&q=80'
      }
    ],
    overview: 'Pembuatan platform web edukasi berbasis WordPress dengan navigasi intuitif untuk memfasilitasi ratusan peserta pelatihan intensif.',
    contribution: 'Mendesain layout landing page kustom di Elementor, menyusun arsitektur informasi terstruktur, dan optimasi kecepatan muat halaman.',
    process: 'Penyelarasan konten program, perancangan wireframe komponen, integrasi form pendaftaran dinamis, dan audit responsivitas layar ponsel.',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'sabana-grand-ballroom-3d',
    slug: 'sabana-grand-ballroom-3d',
    title: 'Konsep Spasial & Aula Sabana Grand Ballroom',
    category: '3D Layout',
    year: '2024',
    tagline: 'Tata Ruang Venue & Acara Arsitektural',
    shortDescription: 'Visualisasi 3D aula ballroom lengkap dengan susunan tempat duduk VIP, backdrop LED megah, dan instalasi foyer pintu masuk.',
    client: 'Event Production Partner',
    role: 'Visualisator Acara 3D',
    tools: ['SketchUp', 'Enscape'],
    coverImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    overview: 'Visualisasi 3D tata ruang ballroom megah dengan detail pencahayaan ambient hangat, tata letak meja bulat banquet, dan panggung LED utama.',
    contribution: 'Modeling 3D keseluruhan venue, simulasi sudut pandang audiens (sightlines), dan render animasi walkthrough.',
    process: 'Pemetaan denah arsitektur 2D, pemodelan 3D di SketchUp, texturing material kain & kayu, serta rendering realistis Enscape.',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'editorial-poster-campaign',
    slug: 'editorial-poster-campaign',
    title: 'Seri Poster Nusantara Creative Festival',
    category: 'Design',
    year: '2024',
    tagline: 'Tipografi & Poster Pameran Seni',
    shortDescription: 'Rangkaian poster tipografi editorial dan pengumuman media sosial yang memadukan motif warisan budaya dengan grid modern.',
    client: 'Creative Collective',
    role: 'Desainer Grafis',
    tools: ['Canva', 'Affinity Designer', 'Inkscape'],
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    overview: 'Eksplorasi tipografi berani dan komposisi tata letak editorial untuk serial poster promosi festival kebudayaan modern.',
    contribution: 'Pengembangan konsep visual, eksperimen tata letak asimetris, dan penyiapan file cetak resolusi tinggi 300 DPI.',
    process: 'Eksplorasi tipografi display, komposisi ruang negatif, penentuan palet monokrom kontras tinggi, dan adaptasi format sosial media.',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'corporate-showcase-wp',
    slug: 'corporate-showcase-wp',
    title: 'Website Korporat WordPress Nexora Media',
    category: 'WordPress',
    year: '2023',
    tagline: 'CMS Korporat Bersih & Portofolio Agensi',
    shortDescription: 'Website bisnis berkecepatan tinggi dengan filter portofolio kustom, formulir penangkap prospek, dan struktur semantik rapi.',
    client: 'Nexora Media',
    role: 'Pengembang WordPress',
    tools: ['WordPress', 'Elementor', 'Tailwind / CSS'],
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    overview: 'Pembangunan website perusahaan dengan performa tinggi, sistem pengelolaan proyek mandiri bagi klien, dan tampilan modern elegan.',
    contribution: 'Setup WordPress, pembuatan template custom, integrasi formulir leads, dan optimasi Core Web Vitals.',
    process: 'Struktur arsitektur informasi, prototyping komponen, integrasi backend CMS, dan pengujian lintas peramban.',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ]
  }
]
