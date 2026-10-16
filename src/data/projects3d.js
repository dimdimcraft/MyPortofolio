// Data dan aset 6 Project 3D dari folder src/assets/3D

// BALAIRUNG UI
import balairung1 from '../assets/3D/BALAIRUNG UI/1.png'
import balairung2 from '../assets/3D/BALAIRUNG UI/2.png'
import balairung3 from '../assets/3D/BALAIRUNG UI/3.png'

// GBK BASKET HALL
import gbk1 from '../assets/3D/GBK BASKET HALL/Enscape_2026-10-12-10-33-51.png'
import gbk2 from '../assets/3D/GBK BASKET HALL/Enscape_2026-10-12-10-35-15.png'
import gbk3 from '../assets/3D/GBK BASKET HALL/Enscape_2026-10-12-10-36-45.png'

// MAKO POLDA ACEH
import polda1 from '../assets/3D/MAKO POLDA ACEH/Enscape_2026-10-12-10-20-45.png'
import polda2 from '../assets/3D/MAKO POLDA ACEH/Enscape_2026-10-12-10-24-13.png'
import polda3 from '../assets/3D/MAKO POLDA ACEH/Enscape_2026-10-12-10-25-48.png'

// MONAS
import monas1 from '../assets/3D/MONAS/Enscape_2026-10-12-10-54-39.png'
import monas2 from '../assets/3D/MONAS/Enscape_2026-10-12-10-56-17.png'
import monas3 from '../assets/3D/MONAS/Enscape_2026-10-12-10-56-48.png'

// PADEPOKAN PENCAK SILAT TMII
import silat1 from '../assets/3D/PADEPOKAN PENCAK SILAT TMII/Enscape_2026-10-12-10-48-09.png'
import silat2 from '../assets/3D/PADEPOKAN PENCAK SILAT TMII/Enscape_2026-10-12-10-49-13.png'
import silat3 from '../assets/3D/PADEPOKAN PENCAK SILAT TMII/Enscape_2026-10-12-10-50-22.png'

// TAMAN BUKIT GELANGGANG
import gelanggang1 from '../assets/3D/TAMAN BUKIT GELANGGANG/Enscape_2026-10-12-10-42-10.png'
import gelanggang2 from '../assets/3D/TAMAN BUKIT GELANGGANG/Enscape_2026-10-12-10-43-16.png'
import gelanggang3 from '../assets/3D/TAMAN BUKIT GELANGGANG/Enscape_2026-10-12-10-43-59.png'

export const projects3DData = [
  {
    id: 'balairung-ui',
    slug: 'balairung-ui',
    title: 'Balairung UI (Universitas Indonesia)',
    location: 'Depok, Jawa Barat',
    category: 'Academic & Grand Convocation Stage',
    year: '2024',
    shortDesc: 'Tata ruang panggung utama & tata letak kursi sidang terbuka/wisuda skala besar di Balairung Universitas Indonesia.',
    context: 'Perancangan tata letak panggung wisuda dan upacara resmi universitas. Fokus perancangan mencakup panggung utama bertingkat dengan backdrop LED megah, penempatan mimbar senat akademik, jalur prosesi wisudawan, serta orientasi ribuan kursi peserta untuk visibilitas maksimal.',
    tools: ['SketchUp', 'Enscape 3D'],
    scale: '1:1 Skala Lapangan',
    venueType: 'Indoor University Auditorium / Grand Hall',
    coverImage: balairung1,
    images: [balairung1, balairung2, balairung3],
    highlights: [
      'Panggung utama bertingkat dengan modul LED display tengah',
      'Layout penataan kursi berundak & sirkulasi prosesi wisudawan',
      'Visualisasi tata pencahayaan hangat untuk formal ceremony'
    ]
  },
  {
    id: 'gbk-basket-hall',
    slug: 'gbk-basket-hall',
    title: 'GBK Basket Hall (Gelora Bung Karno)',
    location: 'Senayan, Jakarta Pusat',
    category: 'Sports Arena & Entertainment Staging',
    year: '2024',
    shortDesc: 'Transformasi arena indoor Hall Basket GBK menjadi panggung konser, award ceremony, dan multimedia live performance.',
    context: 'Pemodelan tata panggung event berskala nasional di dalam stadion Hall Basket GBK. Merancang panggung pertunjukan dengan rigging lighting overhead, wall LED vertikal, serta konfigurasi tempat duduk VIP di area lapangan utama (court) dengan memperhatikan akses keluar masuk darurat.',
    tools: ['SketchUp', 'Enscape 3D'],
    scale: '1:1 Presisi Ruang',
    venueType: 'Indoor Sports Arena & Concert Hall',
    coverImage: gbk1,
    images: [gbk1, gbk2, gbk3],
    highlights: [
      'Rigging lighting gantung terintegrasi struktur atap kubah',
      'Area VIP floor seating dan barikade panggung terstruktur',
      'Pencahayaan atmosfer panggung konser dengan efek haze dinamis'
    ]
  },
  {
    id: 'mako-polda-aceh',
    slug: 'mako-polda-aceh',
    title: 'Mako Polda Aceh',
    location: 'Banda Aceh, Aceh',
    category: 'Official Ceremonial & Formal Hall',
    year: '2024',
    shortDesc: 'Penataan panggung kedinasan, mimbar kehormatan, dan tata ruang aula resmi Markas Komando Polda Aceh.',
    context: 'Desain visual tata letak aula serbaguna untuk upacara kenegaraan, pisah sambut pimpinan, dan rapat koordinasi terpadu di Mako Polda Aceh. Panggung dirancang formal dengan aksen lambang kesatuan, background videotron, dan jalur karpet merah VIP berstandar protokoler.',
    tools: ['SketchUp', 'Enscape 3D'],
    scale: '1:1 Akurat Struktural',
    venueType: 'Official Government & Police Headquarter Hall',
    coverImage: polda1,
    images: [polda1, polda2, polda3],
    highlights: [
      'Backdrop kenegaraan formal dengan panel LED terintegrasi',
      'Jalur karpet merah protokoler dan penataan meja rapat VIP',
      'Pencahayaan simetris elegan untuk suasana seremonial'
    ]
  },
  {
    id: 'monas',
    slug: 'monas',
    title: 'Monas (Monumen Nasional)',
    location: 'Gambir, Jakarta Pusat',
    category: 'Outdoor Mega Stage & National Festival',
    year: '2024',
    shortDesc: 'Konsep panggung festival outdoor raksasa di kawasan ikonik Monas dengan latar belakang Tugu Monumen Nasional.',
    context: 'Perancangan panggung hiburan rakyat dan peringatan hari besar di pelataran Monas. Menggabungkan struktur mega-truss terbuka, panggung multi-level berkapasitas besar, screen LED raksasa di sayap panggung, serta zonasi penonton dan tenda pengamanan.',
    tools: ['SketchUp', 'Enscape 3D'],
    scale: '1:1 Skala Kawasan Terbuka',
    venueType: 'National Outdoor Plaza & Public Festival Ground',
    coverImage: monas1,
    images: [monas1, monas2, monas3],
    highlights: [
      'Mega-truss aluminium dengan instalasi sound line array gantung',
      'Backdrop visual terbuka yang mengoptimalkan siluet Tugu Monas',
      'Pengaturan zonasi penonton, FOH mixer, dan jalur keselamatan'
    ]
  },
  {
    id: 'padepokan-pencak-silat-tmii',
    slug: 'padepokan-pencak-silat-tmii',
    title: 'Padepokan Pencak Silat TMII',
    location: 'Taman Mini Indonesia Indah, Jakarta Timur',
    category: 'Martial Arts Arena & Championship Setup',
    year: '2024',
    shortDesc: 'Tata letak gelanggang kejuaraan pencak silat nasional lengkap dengan tribun wasit, panggung VIP, dan matras laga.',
    context: 'Visualisasi 3D spatial untuk penyelenggaraan kejuaraan pencak silat nasional di Padepokan TMII. Mengatur penempatan matras pertandingan berstandar IPSI/PERSILAT, meja dewan juri & perangkat pertandingan, panggung pembukaan, serta branding identitas budaya nusantara.',
    tools: ['SketchUp', 'Enscape 3D'],
    scale: '1:1 Sesuai Regulasi Cabang Olahraga',
    venueType: 'Indoor Martial Arts Stadium & Cultural Arena',
    coverImage: silat1,
    images: [silat1, silat2, silat3],
    highlights: [
      'Layout matras tanding standar kompetisi dengan batas aman',
      'Panggung podium VIP dan tata letak meja juri terintegrasi',
      'Visual identitas budaya silat pada backdrop & banner arena'
    ]
  },
  {
    id: 'taman-bukit-gelanggang',
    slug: 'taman-bukit-gelanggang',
    title: 'Taman Bukit Gelanggang',
    location: 'Dumai, Riau',
    category: 'Public Square & Cultural Open-Air Stage',
    year: '2024',
    shortDesc: 'Perencanaan panggung pertunjukan terbuka, tenda festival, dan tata ruang alun-alun publik Taman Bukit Gelanggang.',
    context: 'Penataan panggung festival budaya daerah dan pameran ekonomi kreatif di alun-alun terbuka Taman Bukit Gelanggang, Dumai. Menghadirkan panggung semi-outdoor dengan atap lengkung, penataan booth bazar UMKM, dan area penonton outdoor yang ramah pengunjung.',
    tools: ['SketchUp', 'Enscape 3D'],
    scale: '1:1 Skala Lanskap',
    venueType: 'Public City Plaza & Amphitheater Ground',
    coverImage: gelanggang1,
    images: [gelanggang1, gelanggang2, gelanggang3],
    highlights: [
      'Panggung semi-permanen dengan atap kanopi melengkung modern',
      'Penataan sirkulasi pengunjung terpadu antara panggung dan bazar',
      'Simulasi pencahayaan malam hari dengan ambient floodlight'
    ]
  }
]
