export type ServiceDetail = {
  slug: 'hvac' | 'me' | 'cctv' | 'genset' | 'maintenance';
  title: string;
  subtitle: string;
  heroImage: string;
  summary: string;
  useCases: string[];
  scope: string[];
  deliverables: string[];
  kpi: Array<{ label: string; value: string }>;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'hvac',
    title: 'HVAC & Cooling System',
    subtitle: 'Solusi pendinginan terintegrasi untuk bangunan komersial, industri, dan residensial.',
    heroImage: '/assets/uploads/ac-central-3.jpeg',
    summary:
      'Layanan mencakup pengadaan, instalasi, perbaikan, dan preventive maintenance sistem HVAC untuk menjaga kenyamanan dan efisiensi energi bangunan.',
    useCases: ['Gedung Perkantoran', 'Hotel & Hospitality', 'Fasilitas Retail', 'Area Produksi'],
    scope: ['Survey kebutuhan kapasitas pendinginan', 'Desain jalur ducting dan refrigerant', 'Instalasi unit indoor/outdoor', 'Testing & commissioning'],
    deliverables: ['As-built drawing', 'Checklist commissioning', 'Laporan performa awal', 'SOP operasional dasar'],
    kpi: [
      { label: 'Estimasi Durasi', value: '4-10 minggu' },
      { label: 'Efisiensi Energi', value: 'Hingga 20% lebih optimal' },
      { label: 'SLA Respons', value: '< 24 jam' },
    ],
  },
  {
    slug: 'me',
    title: 'Mechanical & Electrical',
    subtitle: 'Sistem mekanikal dan elektrikal yang aman, stabil, dan sesuai standar.',
    heroImage: '/assets/projects/project-3.webp',
    summary:
      'Tim SAT menangani pekerjaan M&E dari tahap perencanaan sampai serah terima, termasuk panel distribusi, wiring, dan integrasi utilitas bangunan.',
    useCases: ['Pabrik Manufaktur', 'Bangunan Komersial', 'Warehouse', 'Fasilitas Publik'],
    scope: ['Perencanaan load dan proteksi', 'Instalasi panel MDP/sub-panel', 'Jalur kabel tray dan terminasi', 'Pengujian grounding dan proteksi'],
    deliverables: ['Single line diagram', 'As-built drawing M&E', 'Berita acara testing', 'Dokumen handover'],
    kpi: [
      { label: 'Standar', value: 'SNI, PUIL, K3' },
      { label: 'Akurasi Instalasi', value: '> 98%' },
      { label: 'Downtime Cutover', value: 'Minimal' },
    ],
  },
  {
    slug: 'cctv',
    title: 'CCTV & PABX',
    subtitle: 'Sistem keamanan dan komunikasi internal yang terintegrasi.',
    heroImage: '/assets/projects/project-4.webp',
    summary:
      'Layanan pemasangan CCTV, PABX, access control, serta konfigurasi monitoring untuk meningkatkan keamanan dan kelancaran operasional.',
    useCases: ['Warehouse', 'Retail Store', 'Office Building', 'Kawasan Hunian'],
    scope: ['Site survey titik kamera', 'Instalasi perangkat dan kabel data', 'Setup NVR/PBX', 'Training user operator'],
    deliverables: ['Layout titik kamera', 'Konfigurasi user akses', 'Dokumen IP/device list', 'Panduan operasional'],
    kpi: [
      { label: 'Cakupan Area', value: 'Sesuai titik kritikal' },
      { label: 'Retensi Data', value: '14-60 hari' },
      { label: 'Remote Monitoring', value: 'Aktif 24/7' },
    ],
  },
  {
    slug: 'genset',
    title: 'Genset',
    subtitle: 'Daya cadangan andal untuk operasional tanpa gangguan.',
    heroImage: '/assets/projects/project-5.webp',
    summary:
      'Pengadaan dan instalasi genset lengkap dengan panel ATS/AMF untuk memastikan transisi daya otomatis saat terjadi gangguan listrik utama.',
    useCases: ['Rumah Sakit', 'Data Room', 'Pabrik', 'Gedung Perkantoran'],
    scope: ['Sizing kapasitas genset', 'Instalasi unit & panel ATS/AMF', 'Pengujian transfer beban', 'Program preventive maintenance'],
    deliverables: ['Laporan load test', 'Checklist safety', 'Dokumen operasi genset', 'Jadwal maintenance berkala'],
    kpi: [
      { label: 'Waktu Transfer', value: '< 15 detik' },
      { label: 'Availability', value: 'High uptime' },
      { label: 'Inspeksi Berkala', value: 'Bulanan / Triwulan' },
    ],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance & After Sales',
    subtitle: 'Program perawatan terjadwal untuk menjaga performa sistem tetap optimal.',
    heroImage: '/assets/projects/project-7.webp',
    summary:
      'SAT menyediakan layanan preventive dan corrective maintenance dengan dokumentasi berkala agar sistem bangunan lebih andal dan umur pakai lebih panjang.',
    useCases: ['Cluster Residential', 'Commercial Building', 'Retail Network', 'Fasilitas Operasional'],
    scope: ['Pembersihan unit dan inspeksi komponen', 'Pengecekan parameter performa', 'Perbaikan minor komponen', 'Laporan dan rekomendasi teknis'],
    deliverables: ['Checklist maintenance', 'Laporan bulanan', 'Daftar tindak lanjut', 'Riwayat pekerjaan'],
    kpi: [
      { label: 'Frekuensi Kunjungan', value: 'Sesuai SLA kontrak' },
      { label: 'Penurunan Breakdown', value: 'Signifikan' },
      { label: 'Waktu Respons', value: '< 24 jam' },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((item) => item.slug === slug);
}
