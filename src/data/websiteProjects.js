// Data portofolio Web Development & Website Projects
// Sesuai spesifikasi prompt: 58 domain archive, 2 featured client projects, personal portfolio, UI concepts & tools

export const websiteHeroStats = [
  { label: 'Spesialisasi Bidang', value: 'Web Development', desc: 'CMS & Tata Letak Kustom' },
  { label: 'Periode Kontribusi', value: '2024 – 2025', desc: 'Arsip Proyek Klien' },
  { label: 'Total Pengalaman', value: '50+ Proyek Web', desc: 'Beragam Sektor Industri' },
  { label: 'Platform Utama', value: 'WordPress & Elementor', desc: 'Responsif & Semantik' },
]

export const featuredWebsites = [
  {
    id: 'cabin-furniture',
    name: 'Cabin Furniture',
    domain: 'cabinafurniture.com',
    category: 'Website Bisnis & Furnitur',
    platformTags: ['WordPress', 'Elementor', 'Desain Responsif', 'Katalog Produk'],
    description: 'Proyek website bisnis di bidang furnitur dan kerajinan kayu. Dirancang dengan fokus pada presentasi katalog produk berkualitas tinggi, kurasi koleksi interior ruang, serta kemudahan navigasi bagi calon pembeli furnitur residensial maupun komersial.',
    externalUrl: 'https://cabinafurniture.com/',
    highlights: [
      'Showcase Galeri Koleksi Furnitur & Woodcraft',
      'Layout Katalog Produk Responsif untuk Mobile & Desktop',
      'Integrasi Tombol WhatsApp Direct Inquiry untuk Pemesanan',
      'Optimasi Kecepatan Muat Gambar Portofolio'
    ],
    theme: {
      accent: '#D97706',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      gradient: 'from-[#1A1612] via-[#2A231C] to-[#17130F]',
      highlightColor: '#F59E0B'
    }
  },
  {
    id: 'branz-mega-kuningan',
    name: 'Apartemen Branz Mega Kuningan',
    domain: 'apartemenbranzmegakuningan.com',
    category: 'Website Properti & Apartemen',
    platformTags: ['WordPress', 'Elementor', 'Lead Generation', 'Presentasi Virtual'],
    description: 'Proyek website properti untuk informasi dan presentasi unit apartemen. Mengusung arsitektur visual mewah kelas premium untuk merefleksikan hunian prestisius di kawasan segitiga emas Jakarta, lengkap dengan denah unit, fasilitas apartemen, dan formulir perolehan prospek (lead capture) bagi agen properti.',
    externalUrl: 'https://apartemenbranzmegakuningan.com/',
    highlights: [
      'Presentasi Fasilitas Mewah & Peta Lokasi Segitiga Emas',
      'Spesifikasi Tipe Unit & Floorplan Interaktif',
      'Formulir Lead Capture Penjadwalan Private Show Unit',
      'Desain Tipografi Modern Sesuai Citra Hunian Kelas Atas'
    ],
    theme: {
      accent: '#0284C7',
      badgeBg: 'bg-sky-50 text-sky-900 border-sky-200',
      gradient: 'from-[#0B1526] via-[#10223E] to-[#0A172D]',
      highlightColor: '#38BDF8'
    }
  }
]

export const personalPortfolioProject = {
  title: 'Website Portofolio Pribadi',
  type: 'Website Portofolio Digital',
  role: 'Desainer UI & Pengembang Frontend',
  period: '2025 – 2026',
  description: 'Portofolio digital pribadi yang dirancang dan dikembangkan untuk menyatukan seluruh rekam jejak karya di bidang desain visual, pemodelan 3D, dan pengembangan web ke dalam satu pengalaman digital yang terpadu dan responsif.',
  categoryTags: ['Proyek Pribadi', 'Desain UI', 'Pengembangan Web', 'React + Vite', 'Tailwind CSS', 'Framer Motion'],
  features: [
    'Arsitektur Modular Multi-Disiplin (Tata Ruang 3D, Desain Grafis, dan Pengembangan Web)',
    'Pratinjau Gambar Lightbox Dinamis Beresolusi Penuh',
    'Tab Filter Interaktif & Navigasi Korsel Horizontal Responsif',
    'Hierarki Tipografi Kustom Berpadu Estetika Editorial Modern'
  ]
}


// 58 Original Records dari sumber arsip portofolio web (2024-2025)
// Setiap domain dipelihara persis sesuai catatan sumber asli
export const websiteArchiveGroups = [
  {
    id: 'property-interior',
    name: 'Property, Interior & Furniture',
    code: 'A',
    icon: 'Building2',
    description: 'Pengembangan web sektor residensial, apartemen, studio interior, dan kerajinan furnitur.',
    domains: [
      'Apartemenbranzmegakuningan.com',
      'Cabinafurniture.com',
      'Griya-alumnium.com',
      'Grhainterior.com',
      'Tamandepan.com',
      'Park-serpong-lippoland.com',
      'Luminousinteriourstudio.com',
    ]
  },
  {
    id: 'construction-industrial',
    name: 'Construction, Materials & Industrial',
    code: 'B',
    icon: 'Hammer',
    description: 'Portal perusahaan kontraktor, supplier material baja, beton precast, dan manufaktur.',
    domains: [
      'Elangsaktijasatama.com',
      'Surtatamasejati.com',
      'Sandwichpaneland.com',
      'Pondasirizqi.com',
      'Cvusahamandiriputra.com',
      'Pusak-rakbesi.com',
      'Teknikaintiwiguna.com',
      'Jasa-aspalhotmix.com',
      'Jasabuangpuingdansampah.com',
      'Bintangmasvariase.com',
      'Purnalogamjaya.com',
      'A3precastconcrete.my.id',
      'Ajf.co.id',
      'Insc-depalindo.com',
    ]
  },
  {
    id: 'automotive-logistics',
    name: 'Automotive, Transport & Logistics',
    code: 'C',
    icon: 'Truck',
    description: 'Website armada kargo ekspedisi, rental kendaraan, dealer resmi, dan layanan transportasi.',
    domains: [
      'Gmjcargo',
      'Sekaimotor-cardealer.com',
      'Toyoyabalikpapankaltim.com',
      'Srutrentalmedan.com',
      'Mobilgeelyindonesia.com',
      'Psnbus.com',
      'Deatamovers.my.id',
      'Mandirirentalmobilkupang.com',
      'Cherypikjakarta.com',
      'Beleautowrappsticker.com',
    ]
  },
  {
    id: 'travel-hospitality',
    name: 'Travel, Tourism & Hospitality',
    code: 'D',
    icon: 'Compass',
    description: 'Landing page biro perjalanan wisata, wedding organizer, paket tour, dan hospitality.',
    domains: [
      'Prayanawedding.com',
      'Havilahtravel.com',
      'Berkahsindorosumbing.com',
      'Baliborneo.com',
      'Sukajalanjalan.xyz',
    ]
  },
  {
    id: 'services-business',
    name: 'Professional Services & Business',
    code: 'E',
    icon: 'Briefcase',
    description: 'Solusi website kantor konsultan, jasa kebersihan, drone survey, perizinan, dan perpajakan.',
    domains: [
      'Ptggi.com',
      'Simpelpajak.com',
      'Shineonsisted.id',
      'Silangitgoingcavation.com',
      'Rumahraudhoh.com',
      'Jasa-drone.com',
      'Greatbusinessconsulting.com',
      '2barch.my.id',
      'Berkahbersih.com',
      'Promobydtangsel.com',
      'Sukacleanerservice.com',
      'Sedotwctanggetangselatan.my.id',
      'Sedotwc-profesional.my.id',
      'Ptslb.com',
    ]
  },
  {
    id: 'health-beauty',
    name: 'Health, Beauty & Lifestyle',
    code: 'F',
    icon: 'HeartPulse',
    description: 'Klinik estetika, produk kesehatan herbal, skincare, dan perawatan diri.',
    domains: [
      'Cyn-clinic.com',
      'Ilove-cure.com',
      'Ovisurgold.com',
      'Passionbeautie.com',
    ]
  },
  {
    id: 'education-community',
    name: 'Education, Community & Organizations',
    code: 'G',
    icon: 'GraduationCap',
    description: 'Lembaga kursus bahasa, sekolah kejuruan kreatif, dan pusat percetakan digital.',
    domains: [
      'Arabiclearningctr.com',
      'Smkindustrikreatif.com',
      'Nusantaradigitalprint.com',
    ]
  },
  {
    id: 'agriculture-others',
    name: 'Agriculture & Other Industries',
    code: 'H',
    icon: 'Sprout',
    description: 'Inovasi agrobisnis pertanian, teknologi pangan, dan sektor industri khusus lainnya.',
    domains: [
      'Inspiraagro.id',
    ]
  }
]
