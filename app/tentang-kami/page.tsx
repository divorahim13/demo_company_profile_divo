'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  UsersGroupTwoRoundedBoldDuotoneIcon, TargetBoldDuotoneIcon, MedalRibbonStarBoldDuotoneIcon, ShieldCheckBoldDuotoneIcon, ClockCircleBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, ClipboardCheckBoldDuotoneIcon, EyeBoldDuotoneIcon, SettingsBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, BoltBoldDuotoneIcon, CalendarBoldDuotoneIcon, SnowflakeBoldDuotoneIcon, CameraBoldDuotoneIcon, HandShakeBoldDuotoneIcon, AltArrowLeftBoldDuotoneIcon, AltArrowRightBoldDuotoneIcon
} from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/public/assets/uploads/herosectiontentangkamiterbaru.png';

const teamMembers = [
  {
    name: 'Andi Sultan D Dalle, SE',
    role: 'Komisaris',
    image: '/assets/uploads/IMG_6461.JPG',
  },
  {
    name: 'Sodikin, S.Kom',
    role: 'Direktur',
    image: '/assets/uploads/sodikin.png',
  },
  {
    name: 'Tri Kornisah Baladiah',
    role: 'Project & Technical Manager',
    image: '/assets/uploads/tri-kornisah.jpeg',
  },
  {
    name: 'Siwi Aryningsih, SE',
    role: 'Finance & Admin',
    image: '/assets/uploads/IMG_6451.PNG',
  },
  {
    name: 'Agus Dwi Retno',
    role: 'Project Advisor',
    image: '/assets/uploads/agus-dwi-retno.png',
  },
  {
    name: 'Wahyu Jullian',
    role: 'Sosial Media Officer',
    image: '/assets/uploads/IMG_6455.PNG',
  }
];

const misiList = [
  {
    no: '01',
    title: 'Layanan Berkualitas Tinggi',
    desc: 'Memberikan layanan pengadaan, instalasi, dan perawatan sistem HVAC, mekanikal, dan elektrikal dengan standar profesionalisme tertinggi.',
  },
  {
    no: '02',
    title: 'Solusi Tepat & Efisien',
    desc: 'Memahami kebutuhan spesifik setiap pelanggan untuk memberikan solusi teknik yang paling efektif dan efisien secara biaya.',
  },
  {
    no: '03',
    title: 'SDM Unggul & Terlatih',
    desc: 'Terus mengasah kompetensi tim teknisi melalui pelatihan berkala agar selalu relevan dengan perkembangan teknologi terbaru.',
  },
  {
    no: '04',
    title: 'Kemitraan Jangka Panjang',
    desc: 'Membangun kepercayaan melalui kejujuran dan hasil kerja yang nyata untuk menjalin hubungan berkelanjutan dengan klien.',
  },
];

const permitDocs = [
  {
    title: 'Nomor Induk Berusaha (NIB) Risiko Rendah',
    number: 'NIB - RENDAH',
    type: 'Legalitas Usaha',
    year: 'Aktif',
    preview: '/assets/permits/permit-1-thumb.webp',
    file: '/assets/permits/permit-1.webp',
  },
  {
    title: 'Nomor Induk Berusaha (NIB) Risiko Tinggi',
    number: 'NIB - TINGGI',
    type: 'Legalitas Usaha',
    year: 'Aktif',
    preview: '/assets/permits/permit-2-thumb.webp',
    file: '/assets/permits/permit-2.webp',
  },
  {
    title: 'Sertifikat Standar KBLI 43213',
    number: 'KBLI 43213',
    type: 'Sertifikat Standar',
    year: 'Aktif',
    preview: '/assets/permits/permit-3-thumb.webp',
    file: '/assets/permits/permit-3.webp',
  },
  {
    title: 'Sertifikat Standar KBLI 43224',
    number: 'KBLI 43224',
    type: 'Sertifikat Standar',
    year: 'Aktif',
    preview: '/assets/permits/permit-4-thumb.webp',
    file: '/assets/permits/permit-4.webp',
  },
];

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#e63329] selection:text-white">
      <Navbar />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[#070d1f] overflow-hidden pt-20">
        
        {/* ── Full width background image ── */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src={heroBg} 
            alt="Teknisi CV. Samudera Abadi Teknik"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            placeholder="blur"
          />
          {/* Gradient overlay for text readability on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f]/95 via-[#070d1f]/60 to-transparent" />
          {/* Darker overlay on mobile for contrast */}
          <div className="absolute inset-0 bg-[#070d1f]/70 lg:hidden" />
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="w-full lg:w-[60%] lg:pr-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-wide mb-8">
                <BoltBoldDuotoneIcon className="w-4 h-4 text-[#e63329]" />
                <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
                <span className="text-slate-500">&gt;</span>
                <span className="text-white">Tentang Kami</span>
              </div>

              {/* Title */}
              <div className="text-[#e63329] font-black tracking-widest text-sm uppercase mb-4">
                TENTANG KAMI
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl xl:text-[5rem] font-bold text-white mb-6 leading-[1.05] tracking-tight">
                CV. Samudera<br />Abadi Teknik
              </h1>

              {/* Subheadline */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 max-w-xl leading-snug">
                Membawa Kenyamanan dan Kesejukan ke Setiap Ruangan
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                CV. Samudera Abadi Teknik menyediakan solusi teknis komprehensif di bidang pengadaan, instalasi, dan perawatan sistem HVAC, Mekanikal, Elektrikal, CCTV, PABX, serta Genset untuk kebutuhan rumah tangga maupun komersial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TENTANG SAT SECTION ─────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#e63329] font-black tracking-widest text-sm uppercase mb-6">
                TENTANG SAT
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1122] leading-[1.1] mb-8 tracking-tight">
                Solusi Terpercaya untuk<br />Rumah & Bangunan Anda
              </h2>
              
              <div className="space-y-6 text-zinc-600 text-sm leading-relaxed mb-10 pr-4" style={{fontFamily: 'var(--font-body)'}}>
                <p>
                  CV. Samudera Abadi Teknik didirikan untuk merespons tingginya kebutuhan akan solusi teknis yang andal untuk hunian maupun bangunan komersial. Kami hadir dengan komitmen memberikan solusi sistem terbaik, didukung oleh para ahli yang memiliki rekam jejak puluhan tahun di bidangnya.
                </p>
                <p>
                  Kami mengutamakan keunggulan kualitas, integritas, dan profesionalisme di setiap pengerjaan. Didukung oleh tim teknisi terlatih yang terus berinovasi, kami memastikan setiap pekerjaan—mulai dari instalasi di rumah hingga perawatan rutin di perusahaan—diselesaikan dengan standar operasional yang ketat demi kepuasan seluruh pelanggan kami.
                </p>
              </div>

              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-[#e63329] text-white px-8 py-4 rounded font-bold tracking-wide text-sm hover:bg-[#c01040] transition-colors shadow-lg shadow-[#e63329]/20"
              >
                KONSULTASI PROJECT
                <ArrowRightBoldDuotoneIcon className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Right: Grid Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2"
            >
              {/* Item 1 */}
              <div className="flex items-start gap-5 p-8 border-b sm:border-r border-slate-200">
                <div className="text-[#0a1122]">
                  <CalendarBoldDuotoneIcon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e63329] mb-1">10+</div>
                  <div className="text-sm font-medium text-slate-600 leading-snug">Tahun<br />Pengalaman</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-5 p-8 border-b border-slate-200">
                <div className="text-[#0a1122]">
                  <UsersGroupTwoRoundedBoldDuotoneIcon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e63329] mb-1">500+</div>
                  <div className="text-sm font-medium text-slate-600 leading-snug">Proyek<br />Selesai</div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-5 p-8 sm:border-r border-b sm:border-b-0 border-slate-200">
                <div className="text-[#0a1122]">
                  <ShieldCheckBoldDuotoneIcon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e63329] mb-1">100%</div>
                  <div className="text-sm font-medium text-slate-600 leading-snug">Komitmen pada<br />Kualitas</div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-5 p-8 border-slate-200">
                <div className="text-[#0a1122]">
                  <HeadphonesRoundSoundBoldDuotoneIcon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e63329] mb-1">24/7</div>
                  <div className="text-sm font-medium text-slate-600 leading-snug">Layanan<br />Respon Cepat</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── BIDANG LAYANAN KAMI ─────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-16">
            <div className="text-[#e63329] font-bold text-xs tracking-[0.2em] uppercase mb-4">
              BIDANG LAYANAN KAMI
            </div>
            <h2 className="text-4xl font-bold text-[#0a1122]">
              Solusi Lengkap Sistem Bangunan
            </h2>
          </div>

          {/* Premium Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {[
              {
                title: 'HVAC & Cooling System',
                icon: <SnowflakeBoldDuotoneIcon className="w-7 h-7" />,
                image: '/assets/uploads/benerin-ac-central.png',
                desc: 'Perancangan, instalasi, dan pemeliharaan sistem tata udara untuk kenyamanan dan efisiensi energi yang optimal di berbagai fasilitas.',
                width: 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)]'
              },
              {
                title: 'Mechanical & Electrical',
                icon: <SettingsBoldDuotoneIcon className="w-7 h-7" />,
                image: '/assets/projects/project-3.webp',
                desc: 'Solusi mekanikal dan kelistrikan terpadu yang memastikan infrastruktur bangunan Anda beroperasi dengan aman dan andal.',
                width: 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)]'
              },
              {
                title: 'CCTV & PABX',
                icon: <CameraBoldDuotoneIcon className="w-7 h-7" />,
                image: '/assets/uploads/cctv.jpeg',
                desc: 'Sistem keamanan terintegrasi dan infrastruktur telekomunikasi internal untuk mendukung kelancaran operasional bisnis.',
                width: 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)]'
              },
              {
                title: 'Genset & Power',
                icon: <BoltBoldDuotoneIcon className="w-7 h-7" />,
                image: '/assets/uploads/genset.jpeg',
                desc: 'Instalasi dan perawatan generator set untuk menjamin ketersediaan daya cadangan yang stabil tanpa gangguan.',
                width: 'w-full md:w-[calc(50%-12px)] lg:w-[calc(40%-16px)]'
              },
              {
                title: 'Maintenance & After Sales',
                icon: <SettingsBoldDuotoneIcon className="w-7 h-7" />,
                image: '/assets/projects/project-7.webp',
                desc: 'Dukungan purna jual responsif dan program perawatan rutin untuk memperpanjang usia pakai aset teknis Anda.',
                width: 'w-full md:w-[calc(50%-12px)] lg:w-[calc(40%-16px)]'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${service.width} relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-500 min-h-[380px] lg:min-h-[420px] flex items-end`}
              >
                {/* Background Image with Zoom Effect */}
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                />
                
                {/* Dark Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-[#0a1122]/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#e63329]/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-500 z-10" />

                {/* Content */}
                <div className="relative z-20 p-8 lg:p-10 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center mb-6 group-hover:bg-[#e63329] group-hover:border-[#e63329] group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Hidden description that reveals on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-10 h-1 bg-[#e63329] mt-6 group-hover:w-full transition-all duration-700 ease-out rounded-full opacity-50 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── NILAI-NILAI KAMI ───────────────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Heading */}
            <div className="lg:col-span-4">
              <div className="text-[#e63329] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                NILAI-NILAI KAMI
              </div>
              <h2 className="text-4xl font-bold text-[#0a1122] leading-tight">
                Komitmen pada Kualitas, Keselamatan, dan Kepuasan
              </h2>
            </div>

            {/* Right: Values Row */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {[
                  {
                    title: 'Profesional',
                    desc: 'Tim berpengalaman dan bersertifikasi di bidangnya.',
                    icon: <UsersGroupTwoRoundedBoldDuotoneIcon className="w-10 h-10" />
                  },
                  {
                    title: 'Integritas',
                    desc: 'Bekerja jujur, transparan, dan bertanggung jawab.',
                    icon: <ShieldCheckBoldDuotoneIcon className="w-10 h-10" />
                  },
                  {
                    title: 'Kualitas',
                    desc: 'Mengutamakan standar tertinggi di setiap pekerjaan.',
                    icon: <MedalRibbonStarBoldDuotoneIcon className="w-10 h-10" />
                  },
                  {
                    title: 'Kepuasan Klien',
                    desc: 'Fokus pada kebutuhan klien dan hasil yang optimal.',
                    icon: <HandShakeBoldDuotoneIcon className="w-10 h-10" />
                  }
                ].map((value, i) => (
                  <div key={i} className={`p-6 flex flex-col items-start gap-4 ${i !== 0 ? 'lg:border-l lg:border-slate-200' : ''}`}>
                    <div className="text-slate-800 mb-2">
                      {value.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[#0a1122] font-bold text-lg">{value.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROYEK KAMI ────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Info */}
            <div className="lg:w-1/3">
              <div className="text-[#e63329] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                PROYEK KAMI
              </div>
              <h2 className="text-4xl font-bold text-[#0a1122] mb-6 leading-tight">
                Pengalaman di Berbagai Industri
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Kami telah dipercaya menangani berbagai proyek di sektor komersial, industri, dan residensial di seluruh Indonesia.
              </p>
              <Link
                href="/proyek"
                className="inline-flex items-center gap-3 bg-[#e63329] text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-[#c01040] transition-all group"
              >
                LIHAT PROYEK
                <ArrowRightBoldDuotoneIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Projects Cards with Navigation */}
            <div className="lg:w-2/3 relative">
              <div className="flex justify-end gap-2 mb-6">
                <button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                  <AltArrowLeftBoldDuotoneIcon className="w-5 h-5 text-slate-600" />
                </button>
                <button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                  <AltArrowRightBoldDuotoneIcon className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'Gedung Perkantoran',
                    location: 'Jakarta',
                    image: '/assets/projects/project-6.webp'
                  },
                  {
                    title: 'Pabrik Industri',
                    location: 'Bekasi',
                    image: '/assets/projects/project-2.webp'
                  },
                  {
                    title: 'Hotel & Hospitality',
                    location: 'Bandung',
                    image: '/assets/projects/project-4.webp'
                  },
                  {
                    title: 'Pusat Perbelanjaan',
                    location: 'Surabaya',
                    image: '/assets/projects/project-5.webp'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm"
                  >
                    <div className="relative h-48 w-full">
                      <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-[#0a1122] font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs">{item.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOKUMEN IZIN */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="text-[#e63329] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                DOKUMEN IZIN
              </div>
              <h2 className="text-4xl font-bold text-[#0a1122] mb-6 leading-tight">
                Legalitas Perusahaan yang Terstruktur
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Seluruh dokumen perizinan utama kami disusun rapi dan dapat ditinjau untuk memastikan transparansi serta kepatuhan terhadap regulasi.
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {permitDocs.map((doc, i) => (
                  <motion.div
                    key={doc.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                  >
                    <div className="relative h-52 w-full bg-slate-100">
                      <Image
                        src={doc.preview}
                        alt={doc.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold tracking-wide text-[#e63329] uppercase">
                          {doc.type}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                          {doc.year}
                        </span>
                      </div>

                      <h3 className="text-[#0a1122] text-sm font-bold leading-relaxed mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">No. Dokumen: {doc.number}</p>

                      <Link
                        href={doc.file}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1122] hover:text-[#e63329] transition-colors"
                      >
                        <EyeBoldDuotoneIcon className="w-4 h-4" />
                        Lihat Dokumen
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY PROFILE ──────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#070d1f]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e63329] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            
            {/* Abstract Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 p-8 md:p-14 lg:p-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase mb-6 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#e63329] animate-pulse"></span>
                  COMPANY PROFILE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]">
                  Dapatkan <span className="text-[#e63329]">Profil Perusahaan</span> Kami Secara Lengkap
                </h2>
                <p className="text-slate-300 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
                  Pelajari lebih dalam mengenai sejarah, layanan unggulan, sertifikasi legalitas, hingga portofolio proyek berskala nasional yang telah kami selesaikan. Unduh dokumen Company Profile resmi CV. Samudera Abadi Teknik sekarang.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <Link
                    href="/Company-Profile-SAT.pdf"
                    target="_blank"
                    download="Company-Profile-CV-Samudera-Abadi-Teknik.pdf"
                    className="flex items-center justify-center gap-3 bg-[#e63329] text-white px-8 py-4 rounded font-bold text-sm hover:bg-white hover:text-[#e63329] transition-all shadow-lg shadow-[#e63329]/30 group w-full sm:w-auto"
                  >
                    <ClipboardCheckBoldDuotoneIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    DOWNLOAD PDF
                  </Link>
                  <span className="text-slate-400 text-xs font-medium">Ukuran File: ~11 MB</span>
                </div>
              </div>

              {/* Right side mockup */}
              <div className="w-full md:w-[45%] flex justify-center md:justify-end relative">
                <div className="relative">
                  {/* Glowing shadow behind the image */}
                  <div className="absolute inset-0 bg-[#e63329] blur-[40px] opacity-30 transform scale-90 translate-y-4 rounded-xl"></div>
                  
                  {/* The Document Image */}
                  <motion.div 
                    whileHover={{ y: -10, rotateY: -5 }}
                    className="relative w-56 h-80 sm:w-64 sm:h-96 rounded-lg overflow-hidden border-[4px] border-white/80 bg-slate-100 shadow-2xl backdrop-blur-sm z-10 transition-transform duration-500 ease-out"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Image 
                      src="/assets/compro-cover.png" 
                      alt="Cover Company Profile SAT" 
                      fill 
                      sizes="(max-width: 768px) 250px, 400px" 
                      className="object-cover" 
                      priority
                    />
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50 pointer-events-none"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERJALANAN KAMI (TIMELINE) ────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24">
            <div className="text-[#e63329] font-bold text-xs tracking-[0.2em] uppercase mb-4">
              PERJALANAN KAMI
            </div>
            <h2 className="text-4xl font-bold text-[#0a1122]">
              Tumbuh Bersama Klien, Melangkah dengan Inovasi
            </h2>
          </div>

          <div className="relative">
            {/* The Timeline Line (MD+) - Positioned exactly at the center of the 20px circles */}
            {/* Calculation: Year container (40px) + Margin (16px) + Circle center (10px) = 66px */}
            <div className="absolute top-[66px] left-[10%] right-[10%] h-[2px] bg-slate-200 hidden md:block" />
            
            {/* The Timeline Line (Mobile) - Continuous vertical line */}
            <div className="absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[2px] bg-slate-100 md:hidden" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-4 relative z-10">
              {[
                {
                  year: '2014',
                  desc: 'SAT didirikan dengan fokus pada layanan teknis sistem bangunan.'
                },
                {
                  year: '2016',
                  desc: 'Memperluas layanan ke HVAC, Mechanical, Electrical, dan Genset.'
                },
                {
                  year: '2018',
                  desc: 'Meningkatkan kapabilitas tim dan memperoleh kepercayaan klien besar.'
                },
                {
                  year: '2020',
                  desc: 'Mengembangkan layanan maintenance & after sales secara berkelanjutan.'
                },
                {
                  year: '2023+',
                  desc: 'Terus berinovasi untuk memberikan solusi terbaik bagi setiap klien.'
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group relative z-10">
                  {/* Year (Above) - Fixed Height with background to mask the line */}
                  <div className="h-10 flex items-center justify-center mb-4 bg-white px-4 relative z-10">
                    <span className="text-2xl font-bold text-[#0a1122] group-hover:text-[#e63329] transition-colors duration-300">
                      {step.year}
                    </span>
                  </div>
                  
                  {/* Circle (Center) - Fixed Height with background to mask the line */}
                  <div className="h-5 flex items-center justify-center mb-8 relative z-10 bg-white px-2">
                    <div className="w-5 h-5 rounded-full bg-white border-4 border-[#e63329] shadow-md group-hover:scale-125 transition-transform duration-300 relative z-20" />
                  </div>
                  
                  {/* Description (Below) with background to mask the line */}
                  <div className="relative z-10 bg-white px-4 py-2">
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] text-center">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FINAL CALL TO ACTION ────────────────────────────────── */}
      <section className="relative w-full h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/projects/project-6.webp" 
            alt="Industrial Background" 
            fill 
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f] via-[#070d1f]/90 to-[#070d1f]/40" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Siap Memulai Project Anda?
            </h2>
            <p className="text-slate-200 text-base md:text-lg mb-8 leading-relaxed">
              Konsultasikan kebutuhan sistem bangunan Anda bersama tim ahli kami.<br />
              SAT siap menjadi partner terbaik untuk kesuksesan project Anda.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#e63329] text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-[#c01040] transition-colors"
            >
              HUBUNGI KAMI
              <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
