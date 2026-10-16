// Data dan aset portofolio Design dari folder src/assets/DESIGN

// 1. EVENT & PROMOTIONAL DESIGN
import solmedPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR.png'
import konserAmalPoster from '../assets/DESIGN/Event & Promotional Design/WhatsApp Image 2026-10-13 at 14.35.52.jpeg'
import jaulahSyaikhPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR (1).png'
import tablighPalembangPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR (2).png'
import uinPadangPoster from '../assets/DESIGN/Event & Promotional Design/SAFARI DAKWAH & TABLIGH AKBAR (3).png'

// 2. SOCIAL MEDIA & EDITORIAL DESIGN
import feedPalestina from '../assets/DESIGN/Social Media & Editorial Design/1.png'
import feedApapunDemiKamu from '../assets/DESIGN/Social Media & Editorial Design/2.png'
import feedImpactAnggaran from '../assets/DESIGN/Social Media & Editorial Design/3.png'
import feedSportqu from '../assets/DESIGN/Social Media & Editorial Design/4.jpg'
import feedAksiZakat from '../assets/DESIGN/Social Media & Editorial Design/5.png'

// Dua kategori utama sesuai struktur folder fisik di src/assets/DESIGN
export const designCategoriesData = [
  {
    id: 'event-promotional',
    folderName: 'Event & Promotional Design',
    title: 'Event & Promotional Design',
    badge: 'KATEGORI 01',
    scope: 'Stage Key Visuals • Grand Concert Posters • Roadshow Schedules',
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
      { label: 'Total Karya', value: '05 Poster' },
      { label: 'Standar Format', value: 'Print & Digital' },
      { label: 'Jangkauan Event', value: 'Nasional & Kampus' },
      { label: 'Tools Utama', value: 'Canva • Inkscape' }
    ],
    items: [
      {
        id: 'solmed',
        title: 'Safari Dakwah Bersama Ustadz Solmed',
        client: 'Qupro Indonesia & AKSI',
        categoryTag: 'Roadshow & Itinerary Poster',
        year: '2025 - 2026',
        format: 'A3 Print & Digital Poster',
        image: solmedPoster,
        desc: 'Poster jadwal roadshow dakwah dengan alur perjalanan terstruktur dan modul donasi Palestina resmi.'
      },
      {
        id: 'konser-amal',
        title: 'Konser Amal Palestina & Panggung Kreasi 606 (Opick)',
        client: 'Qupro Indonesia & Pesantren Aljahra Magetan',
        categoryTag: 'Grand Concert Key Visual',
        year: '2026',
        format: 'Grand Stage Poster',
        image: konserAmalPoster,
        desc: 'Key visual konser amal megah dengan pencahayaan panggung sinematik dan tata letak bintang tamu religi Opick.'
      },
      {
        id: 'jaulah-syaikh',
        title: 'Jaulah Syaikh Palestina (Ramadhan Tour)',
        client: 'Qupro Indonesia & AKSI',
        categoryTag: 'International Ramadhan Tour',
        year: '2026',
        format: 'Campaign & Roadshow Poster',
        image: jaulahSyaikhPoster,
        desc: 'Materi promosi safari ulama Palestina dengan tipografi retro-bold hangat dan aksen Kubah Ash-Sakhrah.'
      },
      {
        id: 'tabligh-palembang',
        title: 'Tabligh Akbar Palembang - DR. Hilmi Firdausi',
        client: 'Wakaf Marogan, HIPMI Syariah & Qupro',
        categoryTag: 'Official Seminar Poster',
        year: '2026',
        format: 'Event Poster & Banner',
        image: tablighPalembangPoster,
        desc: 'Visual keagamaan bernuansa hijau asri dengan kartu jadwal berstruktur rapi dan kolaborasi multi-instansi.'
      },
      {
        id: 'uin-padang',
        title: 'Tabligh Akbar & Mini Konser Religi UIN Padang',
        client: 'DEMA FTK UIN Imam Bonjol Padang & Qupro',
        categoryTag: 'Youth Campus Festival',
        year: '2026',
        format: 'Ticketed Concert Poster',
        image: uinPadangPoster,
        desc: 'Poster festival milenial "Lost, Tired & Overthinking" bersama Ust. Ari Jauharuddin & Adzando Davema.'
      }
    ]
  },
  {
    id: 'social-media-editorial',
    folderName: 'Social Media & Editorial Design',
    title: 'Social Media & Editorial Design',
    badge: 'KATEGORI 02',
    scope: 'Instagram Feeds • Educational Carousels • Digital Campaigns',
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
      { label: 'Total Karya', value: '05 Feeds' },
      { label: 'Rasio Optimal', value: '4:5 Feed & Square' },
      { label: 'Tujuan Desain', value: 'High Engagement' },
      { label: 'Tools Utama', value: 'Canva • Inkscape' }
    ],
    items: [
      {
        id: 'palestina-memanggil',
        title: 'Ketika Palestina Memanggil (Editorial Campaign)',
        client: 'Qupro Indonesia',
        categoryTag: 'Social Media Carousel Cover',
        year: '2025 - 2026',
        format: 'Instagram Feed (4:5)',
        image: feedPalestina,
        desc: 'Visual aktivisme kemanusiaan dengan maskot 3D megafon bersemangat dan mozaik dokumentasi nyata.'
      },
      {
        id: 'apapun-demi-kamu',
        title: 'Apapun Demi Kamu (Event Organizer Creative Feed)',
        client: 'Qupro Indonesia',
        categoryTag: 'Engagement & Brand Content',
        year: '2025 - 2026',
        format: 'Tweet-Style Social Feed',
        image: feedApapunDemiKamu,
        desc: 'Postingan kreatif bergaya tweet medsos viral dengan karakter 3D hijab ramah beridentitas kru EO.'
      },
      {
        id: 'impact-anggaran',
        title: 'Besarkan Impactnya Bukan Anggarannya (Partnership CTA)',
        client: 'Qupro Indonesia',
        categoryTag: 'B2B Partnership & Lead Gen',
        year: '2025 - 2026',
        format: 'Lead Generation Banner',
        image: feedImpactAnggaran,
        desc: 'Kartu miring 3D dengan ornamen lonceng dan QR code ukuran besar untuk kemudahan konversi pengajuan event.'
      },
      {
        id: 'sportqu',
        title: 'SportQu Fitness & Community Campaign',
        client: 'SportQu (@sportqu.id)',
        categoryTag: 'Brand & Lifestyle Feed',
        year: '2025 - 2026',
        format: 'Instagram Feed Post',
        image: feedSportqu,
        desc: 'Desain konten media sosial brand kebugaran dengan tipografi santai dan kurva gelombang neon dinamis.'
      },
      {
        id: 'aksi-zakat',
        title: 'Apa Itu AKSI Zakat? (Educational Carousel)',
        client: 'AKSI Zakat (@aksi.zakat)',
        categoryTag: 'Micro-Editorial Carousel',
        year: '2025 - 2026',
        format: 'Educational Carousel Cover',
        image: feedAksiZakat,
        desc: 'Visual edukasi literasi zakat dengan efek kertas sobek artistik dan pola blueprint grid modern.'
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
