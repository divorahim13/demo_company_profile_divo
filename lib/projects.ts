export type ProjectCategory = 'HVAC' | 'M&E' | 'CCTV & PABX' | 'Genset' | 'Maintenance';

export type ProjectItem = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  scope: string;
  image: string;
  year: string;
  tag: string;
  location: string;
  duration: string;
  teamSize: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  tools: string[];
  gallery: string[];
};

export const projectList: ProjectItem[] = [
  {
    slug: 'instalasi-ac-central-vrv-system',
    title: 'Instalasi AC Central VRV System',
    client: 'Gedung Perkantoran Sudirman',
    category: 'HVAC',
    scope: 'Instalasi VRV System 30 PK, 4 lantai',
    image: '/assets/projects/project-2.webp',
    year: '2024',
    tag: 'Corporate',
    location: 'Jakarta Selatan',
    duration: '10 minggu',
    teamSize: '12 personel',
    overview:
      'Proyek instalasi sistem VRV untuk gedung perkantoran 4 lantai dengan fokus pada efisiensi energi, kenyamanan area kerja, dan kemudahan maintenance.',
    challenge:
      'Keterbatasan jalur ducting dan penempatan outdoor unit di area rooftop yang padat utilitas serta jadwal pekerjaan yang harus mengikuti jam operasional tenant.',
    solution:
      'Tim SAT melakukan perencanaan jalur refrigerant modular, penjadwalan kerja malam untuk area kritis, dan balancing airflow per zona sebelum commissioning.',
    deliverables: [
      'Instalasi outdoor & indoor VRV lengkap',
      'Piping refrigerant dan thermal insulation',
      'Testing, commissioning, dan balancing',
      'As-built drawing dan dokumen serah terima',
    ],
    tools: ['VRV System', 'Air Balancing Kit', 'Digital Manifold', 'Insulation System'],
    gallery: ['/assets/projects/project-2.webp', '/assets/projects/project-6.webp', '/assets/projects/project-7.webp'],
  },
  {
    slug: 'maintenance-tahunan-ac-split',
    title: 'Maintenance Tahunan AC Split',
    client: 'Residential Cluster Kemang',
    category: 'Maintenance',
    scope: 'Maintenance berkala 48 unit AC Split',
    image: '/assets/projects/project-7.webp',
    year: '2024',
    tag: 'Residential',
    location: 'Jakarta Selatan',
    duration: '12 bulan (kontrak tahunan)',
    teamSize: '6 teknisi rotasi',
    overview:
      'Program maintenance preventif dan korektif untuk 48 unit AC split di kawasan hunian premium dengan target menjaga performa pendinginan stabil sepanjang tahun.',
    challenge:
      'Variasi usia unit dan beban pemakaian antar rumah membuat jadwal maintenance harus fleksibel namun tetap terdokumentasi.',
    solution:
      'SAT menerapkan checklist digital berkala, prioritas unit kritikal, dan laporan bulanan performa serta rekomendasi replacement unit.',
    deliverables: [
      'Cleaning evaporator & condenser berkala',
      'Pengecekan arus, tekanan, dan temperatur',
      'Perbaikan ringan komponen unit',
      'Laporan maintenance bulanan',
    ],
    tools: ['Cleaning Pump', 'Clamp Meter', 'Pressure Gauge', 'Service Checklist'],
    gallery: ['/assets/projects/project-7.webp', '/assets/projects/project-5.webp', '/assets/projects/project-2.webp'],
  },
  {
    slug: 'smart-cctv-monitoring-system',
    title: 'Smart CCTV & Monitoring System',
    client: 'Warehouse Logistik Cikarang',
    category: 'CCTV & PABX',
    scope: '32 Kamera IP CCTV + Remote Monitoring',
    image: '/assets/projects/project-4.webp',
    year: '2024',
    tag: 'Industrial',
    location: 'Cikarang',
    duration: '6 minggu',
    teamSize: '8 personel',
    overview:
      'Pembangunan sistem CCTV IP terpadu untuk area warehouse dan loading dock dengan kemampuan live monitoring dan playback rekaman terstruktur.',
    challenge:
      'Area cakupan luas dengan blind spot di jalur forklift dan kebutuhan retensi data rekaman untuk audit operasional.',
    solution:
      'Tim melakukan mapping titik kamera berdasarkan jalur aktivitas, instalasi backbone network tersegmentasi, serta konfigurasi NVR dengan retensi sesuai kebutuhan audit.',
    deliverables: [
      'Instalasi 32 titik kamera IP',
      'Konfigurasi NVR & storage recording',
      'Setup remote monitoring user level',
      'Training operator dan SOP pemantauan',
    ],
    tools: ['IP Camera', 'NVR', 'PoE Switch', 'Structured Cabling'],
    gallery: ['/assets/projects/project-4.webp', '/assets/projects/project-3.webp', '/assets/projects/project-6.webp'],
  },
  {
    slug: 'power-backup-genset-250-kva',
    title: 'Power Backup Genset 250 KVA',
    client: 'Rumah Sakit Internasional',
    category: 'Genset',
    scope: 'Genset Diesel + Panel ATS/AMF',
    image: '/assets/projects/project-5.webp',
    year: '2023',
    tag: 'Medical',
    location: 'Tangerang',
    duration: '8 minggu',
    teamSize: '10 personel',
    overview:
      'Pengadaan dan instalasi genset 250 KVA untuk menjamin continuity listrik fasilitas medis kritikal termasuk area ICU dan lab diagnostik.',
    challenge:
      'Kebutuhan perpindahan daya otomatis dengan downtime minimum serta persyaratan noise control di area sekitar bangunan.',
    solution:
      'SAT memasang panel ATS/AMF terintegrasi, melakukan simulasi blackout berkala, dan menambahkan sistem peredam suara sesuai standar fasilitas kesehatan.',
    deliverables: [
      'Instalasi genset 250 KVA',
      'Panel ATS/AMF dan sinkronisasi beban',
      'Uji fungsi auto transfer',
      'Dokumentasi operasional & preventive maintenance',
    ],
    tools: ['Diesel Genset', 'ATS/AMF Panel', 'Power Analyzer', 'Acoustic Enclosure'],
    gallery: ['/assets/projects/project-5.webp', '/assets/projects/project-3.webp', '/assets/projects/project-7.webp'],
  },
  {
    slug: 'panel-mdp-electrical-wiring',
    title: 'Panel MDP & Electrical Wiring',
    client: 'Pabrik Manufaktur Tangerang',
    category: 'M&E',
    scope: 'Instalasi Panel Utama & Kabel Tray',
    image: '/assets/projects/project-3.webp',
    year: '2023',
    tag: 'Industrial',
    location: 'Tangerang',
    duration: '9 minggu',
    teamSize: '14 personel',
    overview:
      'Pekerjaan electrical utama untuk pabrik manufaktur meliputi panel MDP, distribusi sub-panel, dan jalur kabel tray ke area produksi.',
    challenge:
      'Koordinasi pekerjaan dengan aktivitas produksi eksisting agar tidak mengganggu target output harian pabrik.',
    solution:
      'Pekerjaan dilakukan bertahap per zona dengan shutdown terjadwal, commissioning panel per line, dan verifikasi proteksi overcurrent sebelum handover.',
    deliverables: [
      'Instalasi panel MDP dan sub-panel',
      'Pemasangan kabel tray & terminasi',
      'Pengujian proteksi dan grounding',
      'As-built drawing dan single line diagram',
    ],
    tools: ['MDP Panel', 'Cable Tray', 'Megger', 'Earth Tester'],
    gallery: ['/assets/projects/project-3.webp', '/assets/projects/project-2.webp', '/assets/projects/project-4.webp'],
  },
  {
    slug: 'ip-pbx-communication-network',
    title: 'IP-PBX Communication Network',
    client: 'Grand Hotel & Resort Jakarta',
    category: 'CCTV & PABX',
    scope: 'Sistem Telepon 120 Extension',
    image: '/assets/projects/project-6.webp',
    year: '2023',
    tag: 'Hospitality',
    location: 'Jakarta Pusat',
    duration: '7 minggu',
    teamSize: '7 personel',
    overview:
      'Implementasi sistem komunikasi hotel berbasis IP-PBX untuk mendukung operasional front office, housekeeping, engineering, dan management.',
    challenge:
      'Migrasi dari sistem lama ke IP telephony tanpa mengganggu operasional layanan tamu harian.',
    solution:
      'SAT menerapkan cutover bertahap antar departemen, konfigurasi call flow per unit, serta pelatihan user untuk memastikan transisi mulus.',
    deliverables: [
      'Instalasi server IP-PBX',
      'Konfigurasi 120 extension dan call group',
      'Integrasi trunk line & recording',
      'Panduan operasional untuk tim hotel',
    ],
    tools: ['IP-PBX Server', 'VoIP Phone', 'Network Switch', 'Monitoring Dashboard'],
    gallery: ['/assets/projects/project-6.webp', '/assets/projects/project-4.webp', '/assets/projects/project-7.webp'],
  },
];

export const projectCategories: Array<'Semua' | ProjectCategory> = [
  'Semua',
  'HVAC',
  'M&E',
  'CCTV & PABX',
  'Genset',
  'Maintenance',
];

export function getProjectBySlug(slug: string) {
  return projectList.find((item) => item.slug === slug);
}
