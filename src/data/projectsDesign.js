// Data dan aset portofolio Design dari folder src/assets/DESIGN

// 1. EVENT & PROMOTIONAL DESIGN
import solmedPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR.webp'
import konserAmalPoster from '../assets/DESIGN/Event & Promotional Design/WhatsApp Image 2026-10-13 at 14.35.52.webp'
import jaulahSyaikhPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR (1).webp'
import tablighPalembangPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR (2).webp'
import uinPadangPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR (3).webp'
import wantedPoster from '../assets/DESIGN/Event & Promotional Design/PosterPemberitahuanEvent.webp'

// 2. SOCIAL MEDIA & EDITORIAL DESIGN
import feedPalestina from '../assets/DESIGN/Social Media & Editorial Design/1.webp'
import feedApapunDemiKamu from '../assets/DESIGN/Social Media & Editorial Design/2.webp'
import feedImpactAnggaran from '../assets/DESIGN/Social Media & Editorial Design/3.webp'
import feedSportqu from '../assets/DESIGN/Social Media & Editorial Design/4.webp'
import feedAksiZakat from '../assets/DESIGN/Social Media & Editorial Design/5.webp'
import feedKebutuhanQupro from '../assets/DESIGN/Social Media & Editorial Design/6.webp'

// 3. EVENT GATE & ENTRANCE DESIGN
import gateHni from '../assets/DESIGN/Event Gate & Entrance Design/1.webp'
import gatePalestinaRun from '../assets/DESIGN/Event Gate & Entrance Design/2.webp'

// 4. POSTER ART & CREATIVE EXPERIMENTS
import posterAgakLaen from '../assets/DESIGN/Poster Art & Creative Experiments/POSTER AGAK LAEN 2.webp'
import posterTwilight from '../assets/DESIGN/Poster Art & Creative Experiments/TWILLIGHT.webp'

// Empat kategori utama sesuai struktur folder fisik di src/assets/DESIGN
export const designCategoriesData = [
  {
    id: 'event-promotional',
    folderName: 'Event & Promotional Design',
    title: 'Event & Promotional Design',
    badge: 'KATEGORI 01',
    scope: 'Key Visual Panggung • Poster Konser Akbar • Jadwal Roadshow',
    summary: 'Spesialisasi perancangan materi publikasi visual skala besar untuk konser amal kemanusiaan, festival akbar kampus, panggung seni, hingga roadshow safari dakwah nasional.',
    description: 'Fokus perancangan meliputi keterbacaan hierarki informasi (jadwal, lokasi, narasumber/bintang tamu), tipografi headline berdaya tarik tinggi, serta modul resmi donasi dan barcode QRIS terintegrasi yang siap cetak (print-ready) maupun publikasi digital.',
    tools: ['Canva Pro', 'Photoshop', 'Inkscape'],
    deliverables: [
      'Key Visual Panggung Konser & Panggung Kreasi Akbar',
      'Poster Cetak Resolusi Tinggi (A3/A2 Print Ready)',
      'E-Flyer Jadwal Roadshow Multi-Titik Lokasi',
      'Integrasi Rekening Resmi Donasi & Barcode QRIS',
      'Branding Multi-Logo Instansi & Kolaborator Resmi'
    ],
    stats: [
      { label: 'Total Karya', value: '06 Poster' },
      { label: 'Standar Format', value: 'Print & Digital' },
      { label: 'Jangkauan Event', value: 'Nasional & Kampus' },
      { label: 'Tools Utama', value: 'Canva • Inkscape' }
    ],
    items: [
      {
        id: 'solmed',
        title: 'Safari Dakwah Bersama Ustadz Solmed',
        client: 'Qupro Indonesia & AKSI',
        categoryTag: 'Poster Jadwal & Roadshow',
        year: '2025 - 2026',
        format: 'A3 Print & Digital Poster',
        image: solmedPoster,
        desc: 'Poster jadwal roadshow dakwah dengan alur perjalanan terstruktur dan modul donasi Palestina resmi.'
      },
      {
        id: 'konser-amal',
        title: 'Konser Amal Palestina & Panggung Kreasi 606 (Opick)',
        client: 'Qupro Indonesia & Pesantren Aljahra Magetan',
        categoryTag: 'Key Visual Konser Akbar',
        year: '2026',
        format: 'Grand Stage Poster',
        image: konserAmalPoster,
        desc: 'Key visual konser amal megah dengan pencahayaan panggung sinematik dan tata letak bintang tamu religi Opick.'
      },
      {
        id: 'jaulah-syaikh',
        title: 'Jaulah Syaikh Palestina (Ramadhan Tour)',
        client: 'Qupro Indonesia & AKSI',
        categoryTag: 'Safari Ramadhan Internasional',
        year: '2026',
        format: 'Campaign & Roadshow Poster',
        image: jaulahSyaikhPoster,
        desc: 'Materi promosi safari ulama Palestina dengan tipografi retro-bold hangat dan aksen Kubah Ash-Sakhrah.'
      },
      {
        id: 'tabligh-palembang',
        title: 'Tabligh Akbar Palembang - DR. Hilmi Firdausi',
        client: 'Wakaf Marogan, HIPMI Syariah & Qupro',
        categoryTag: 'Poster Seminar & Tabligh Akbar',
        year: '2026',
        format: 'Event Poster & Banner',
        image: tablighPalembangPoster,
        desc: 'Visual keagamaan bernuansa hijau asri dengan kartu jadwal berstruktur rapi dan kolaborasi multi-instansi.'
      },
      {
        id: 'uin-padang',
        title: 'Tabligh Akbar & Mini Konser Religi UIN Padang',
        client: 'DEMA FTK UIN Imam Bonjol Padang & Qupro',
        categoryTag: 'Festival Pemuda & Kampus',
        year: '2026',
        format: 'Ticketed Concert Poster',
        image: uinPadangPoster,
        desc: 'Poster festival milenial "Lost, Tired & Overthinking" bersama Ust. Ari Jauharuddin & Adzando Davema.'
      },
      {
        id: 'wanted-palestina-run',
        title: 'Wanted Runner Notice - Palestina Run Sumbar 2026',
        client: 'Qupro Indonesia, AKSI & Pemprov Sumbar',
        categoryTag: 'Pengumuman Resmi & Notifikasi Event',
        year: '2026',
        format: 'A3 Digital & Print Notice Poster',
        image: wantedPoster,
        desc: 'Poster pemberitahuan darurat (Wanted style) pencarian pemenang Podium 3 Perempuan Palestina Run 2026 dengan nomor BIB 1334, menonjolkan tipografi grunge, hierarki nomor BIB terpusat, dan integrasi penuh logo sponsor serta media partner.'
      }
    ]
  },
  {
    id: 'social-media-editorial',
    folderName: 'Social Media & Editorial Design',
    title: 'Social Media & Editorial Design',
    badge: 'KATEGORI 02',
    scope: 'Feed Instagram • Carousel Edukasi • Kampanye Digital',
    summary: 'Perancangan konten komunikasi visual untuk platform media sosial digital dengan memadukan estetika modern, ilustrasi 3D, copywriting komunikatif, dan efek visual artistik.',
    description: 'Mengedepankan *visual stop-power* di linimasa feed untuk meningkatkan *click-through rate (CTR)* dan interaksi audiens, mulai dari cover carousel bernuansa kertas sobek (*torn paper*), tweet-card viral, hingga materi *lead generation* kemitraan B2B.',
    tools: ['Canva Pro', 'Photoshop', 'Inkscape'],
    deliverables: [
      'Cover Carousel Edukasi Instagram (Rasio 4:5)',
      'Konten Engagement Kreatif & Brand Persona',
      'Visual Ajakan Kemitraan (B2B Lead Generation)',
      'Kampanye Komunitas Gaya Hidup & Kebugaran',
      'Eksplorasi Efek Tekstur Torn-Paper & Grid Blueprint'
    ],
    stats: [
      { label: 'Total Karya', value: '06 Feeds' },
      { label: 'Rasio Optimal', value: '4:5 Feed & Square' },
      { label: 'Tujuan Desain', value: 'High Engagement' },
      { label: 'Tools Utama', value: 'Canva • Inkscape' }
    ],
    items: [
      {
        id: 'palestina-memanggil',
        title: 'Ketika Palestina Memanggil (Editorial Campaign)',
        client: 'Qupro Indonesia',
        categoryTag: 'Cover Carousel Media Sosial',
        year: '2025 - 2026',
        format: 'Instagram Feed (4:5)',
        image: feedPalestina,
        desc: 'Visual aktivisme kemanusiaan dengan maskot 3D megafon bersemangat dan mozaik dokumentasi nyata.'
      },
      {
        id: 'apapun-demi-kamu',
        title: 'Apapun Demi Kamu (Event Organizer Creative Feed)',
        client: 'Qupro Indonesia',
        categoryTag: 'Konten Interaksi & Brand',
        year: '2025 - 2026',
        format: 'Tweet-Style Social Feed',
        image: feedApapunDemiKamu,
        desc: 'Postingan kreatif bergaya tweet medsos viral dengan karakter 3D hijab ramah beridentitas kru EO.'
      },
      {
        id: 'impact-anggaran',
        title: 'Besarkan Impactnya Bukan Anggarannya (Partnership CTA)',
        client: 'Qupro Indonesia',
        categoryTag: 'Kemitraan B2B & Prospek Klien',
        year: '2025 - 2026',
        format: 'Lead Generation Banner',
        image: feedImpactAnggaran,
        desc: 'Kartu miring 3D dengan ornamen lonceng dan QR code ukuran besar untuk kemudahan konversi pengajuan event.'
      },
      {
        id: 'sportqu',
        title: 'SportQu Fitness & Community Campaign',
        client: 'SportQu (@sportqu.id)',
        categoryTag: 'Feed Brand & Gaya Hidup',
        year: '2025 - 2026',
        format: 'Instagram Feed Post',
        image: feedSportqu,
        desc: 'Desain konten media sosial brand kebugaran dengan tipografi santai dan kurva gelombang neon dinamis.'
      },
      {
        id: 'aksi-zakat',
        title: 'Apa Itu AKSI Zakat? (Educational Carousel)',
        client: 'AKSI Zakat (@aksi.zakat)',
        categoryTag: 'Carousel Edukasi Mikro',
        year: '2025 - 2026',
        format: 'Educational Carousel Cover',
        image: feedAksiZakat,
        desc: 'Visual edukasi literasi zakat dengan efek kertas sobek artistik dan pola blueprint grid modern.'
      },
      {
        id: 'kebutuhan-qupro',
        title: 'Hari Ini Kamu Butuh yang Mana? (Qupro Service Portfolio)',
        client: 'Qupro Indonesia',
        categoryTag: 'Feed Promosi Interaktif',
        year: '2025 - 2026',
        format: 'Instagram Feed (4:5)',
        image: feedKebutuhanQupro,
        desc: 'Konten feed interaktif bergaya origami kertas lipat yang merangkum 4 pilar layanan utama Qupro: Creative Design, Talent, Produksi Event, dan Multimedia.'
      }
    ]
  },
  {
    id: 'event-gate-entrance',
    folderName: 'Event Gate & Entrance Design',
    title: 'Event Gate & Entrance Design',
    badge: 'KATEGORI 03',
    scope: 'Gerbang Masuk Utama • Gantry Start & Finish • Portal Layering 3D',
    summary: 'Perancangan gerbang penyambutan utama (Main Gate), portal registrasi, dan gantry start/finish interaktif untuk event lari kemanusiaan, festival, perayaan milad, hingga agenda korporat skala besar.',
    description: 'Fokus desain mencakup penataan bidang branding sponsor, integrasi ornamen 3D sirip akrilik/kayu, hierarki signage nama acara yang megah, serta rancang bangun visual portal yang presisi untuk kebutuhan fabrikasi panggung.',
    tools: ['Canva Pro', 'Photoshop', 'Inkscape', 'SketchUp'],
    deliverables: [
      'Desain Gerbang Utama Event (Main Entrance Arch)',
      'Gantry Start & Finish Lintasan Lari / Olahraga',
      'Struktur Ornamen Layering 3D & Sirip Akrilik/Tripleks',
      'Penempatan Sponsor Wall & Spot Branding Resmi'
    ],
    stats: [
      { label: 'Total Karya', value: '02 Gerbang' },
      { label: 'Tipe Konstruksi', value: 'Arch & Gantry' },
      { label: 'Jangkauan Event', value: 'Sport & Corporate' },
      { label: 'Tools Utama', value: 'Vector • 3D Layout' }
    ],
    cardAspect: 'aspect-[16/11] bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950',
    imageFit: 'object-contain p-3 sm:p-5',
    gridCols: 'grid-cols-1 md:grid-cols-2',
    items: [
      {
        id: 'gate-hni-beyond',
        title: 'Main Entrance Gate HNI 12th Beyond',
        client: 'Halal Network International (HNI)',
        categoryTag: 'Gerbang Acara Korporat',
        year: '2025 - 2026',
        format: '3D Archway & Key Visual Gate',
        image: gateHni,
        desc: 'Desain gerbang utama perayaan milad ke-12 HNI (Beyond - Building the Future Together) dengan arsitektur sirip 3D dinamis dan aksen warna korporat toska, hijau, biru, dan oranye.'
      },
      {
        id: 'gate-palestina-run',
        title: 'Start & Finish Gate Arch - Palestina Run Sumatera Barat',
        client: 'Qupro Indonesia, AKSI & Pemprov Sumbar',
        categoryTag: 'Gerbang Lintasan Olahraga',
        year: '2026',
        format: 'Modular Truss & Rigging Arch Gate',
        image: gatePalestinaRun,
        desc: "Desain gerbang lintasan Start / Finish event lari amal kemanusiaan 'Palestina Run Sumatera Barat 2026' dengan tema grafis halftone dinamis, branding kolaborator, dan lambang resmi Tuah Sakato."
      }
    ]
  },
  {
    id: 'poster-art-creative',
    folderName: 'Poster Art & Creative Experiments',
    title: 'Poster Art & Creative Experiments',
    badge: 'KATEGORI 04',
    scope: 'Parodi Film Sinematik • Penghormatan Wisuda • Narasi Visual',
    summary: 'Eksplorasi seni poster kreatif, manipulasi foto sinematik, dan parodi poster film layar lebar untuk tribute kelulusan, perayaan wisuda, serta proyek seni personal.',
    description: 'Menggabungkan teknik compositing multi-layer, color grading sinematik moody dan dramatic spotlight, tipografi display bertema film layar lebar, serta narasi visual yang berkesan kuat sekaligus menghibur.',
    tools: ['Photoshop', 'Canva Pro', 'Inkscape', 'Lightroom'],
    deliverables: [
      'Desain Poster Film Layar Lebar & Parodi Sinematik',
      'Graduation / Milestone Commemorative Poster',
      'Manipulasi & Compositing Foto Karakter Multi-Layer',
      'Color Grading Mood Sinematik (Dark Twilight & Dramatic Spotlight)',
      'Kustom Tipografi Judul & Layout Bintang/Kredit Film'
    ],
    stats: [
      { label: 'Total Karya', value: '02 Poster Seni' },
      { label: 'Format Desain', value: 'Cinematic Movie Poster' },
      { label: 'Genre Visual', value: 'Parody & Memorial Art' },
      { label: 'Teknik Utama', value: 'Compositing • Grading' }
    ],
    cardAspect: 'aspect-[3/4] sm:aspect-[4/5] bg-neutral-900',
    imageFit: 'object-cover',
    gridCols: 'grid-cols-1 md:grid-cols-2',
    items: [
      {
        id: 'twilight-breaking-dawn-graduation',
        title: 'The Twilight Saga: Breaking Dawn Part 2 (Graduation Edition)',
        client: 'STT Terpadu Nurul Fikri Class of 2026',
        categoryTag: 'Tribute Poster Film Sinematik',
        year: '2026',
        format: 'Movie Poster (High-Res Print & Digital)',
        image: posterTwilight,
        desc: 'Karya tribute wisuda epik bernuansa film Twilight Breaking Dawn Part 2, menampilkan para wisudawan bertoga dengan latar hutan pinus berkabut tebal, pencahayaan dingin sinematik, serta tipografi emas khas saga Twilight.'
      },
      {
        id: 'agak-laen-menyala-pantiku',
        title: 'Agak Laen: Menyala Pantiku! (Movie Poster Parody)',
        client: 'Creative Tribute & Graduation Project',
        categoryTag: 'Seni Parodi & Tipografi Kreatif',
        year: '2026',
        format: 'Official Movie Teaser Poster',
        image: posterAgakLaen,
        desc: 'Parodi kreatif poster box office "Agak Laen" dengan siluet lubang kunci ikonik (keyhole composition), ekspresi komikal para karakter, tata teks kredit film jenaka seputar tugas akhir dan dosen pembimbing, serta grading kontras tinggi.'
      }
    ]
  }
]

// Flattened projects for backwards compatibility / direct item access
export const projectsDesignData = designCategoriesData.flatMap((cat) =>
  cat.items.map((item) => ({
    id: item.id,
    slug: item.id,
    title: item.title,
    client: item.client,
    category: cat.title,
    folderName: cat.folderName,
    year: item.year,
    format: item.format,
    shortDesc: item.desc,
    coverImage: item.image,
    images: [item.image],
    highlights: cat.deliverables.slice(0, 3),
    tools: cat.tools
  }))
)
