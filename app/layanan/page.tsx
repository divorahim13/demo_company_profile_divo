'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SettingsBoldDuotoneIcon, BoltBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, ClipboardCheckBoldDuotoneIcon, ShieldCheckBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, CalendarBoldDuotoneIcon, UsersGroupTwoRoundedBoldDuotoneIcon, MedalRibbonStarBoldDuotoneIcon, ClockCircleBoldDuotoneIcon, ChatRoundBoldDuotoneIcon, MagniferBoldDuotoneIcon, FileTextBoldDuotoneIcon, HomeBoldDuotoneIcon, BuildingsBoldDuotoneIcon, CityBoldDuotoneIcon, AltArrowRightBoldDuotoneIcon
} from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/public/herosectionlayanankami.png';

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-[#0e1c2f] selection:bg-[#e63329] selection:text-white overflow-hidden">
      <Navbar />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#070d1f] overflow-hidden flex flex-col">

        {/* Right side Slanted Image Background */}
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-0 hidden lg:block">
          {/* Red background layer (Divider) */}
          <div 
            className="absolute inset-0 bg-[#e63329]"
            style={{ clipPath: 'polygon(32% 0, 100% 0, 100% 100%, 12% 100%)' }}
          />
          {/* Image layer */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: 'polygon(32.5% 0, 100% 0, 100% 100%, 12.5% 100%)' }}
          >
            <Image 
              src={heroBg} 
              alt="HVAC technician at work — CV. Samudera Abadi Teknik"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow flex items-center relative z-10 pt-32 pb-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="w-full lg:w-[55%]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-8 group">
                  <BoltBoldDuotoneIcon className="w-5 h-5 text-[#e63329] fill-[#e63329]" />
                  <nav className="flex items-center text-sm font-bold tracking-widest uppercase ml-1">
                    <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
                    <span className="mx-2 text-white/30 font-normal">{">"}</span>
                    <span className="text-white">Layanan</span>
                  </nav>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl xl:text-[5rem] font-bold text-white leading-[1.05] mb-8 tracking-tight">
                  Layanan Teknis SAT<br />
                  untuk Sistem Bangunan
                </h1>

                {/* Description */}
                <p className="text-[#a0aec0] text-base md:text-lg leading-relaxed mb-10 max-w-xl pr-4 font-medium">
                  Kami menyediakan layanan pengadaan, instalasi, perbaikan, dan perawatan untuk HVAC, cooling system, mechanical, electrical, CCTV, PABX, dan genset.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-20 lg:mb-24">
                  <Link href="/kontak" passHref>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#e63329] text-white px-8 py-4 font-bold flex items-center gap-2 transition-all hover:bg-[#c01040] text-sm tracking-widest"
                    >
                      KONSULTASI PROJECT
                      <ArrowRightBoldDuotoneIcon className="w-4 h-4 ml-1" />
                    </motion.button>
                  </Link>

                  <Link href="/kontak" passHref>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-white/30 text-white px-8 py-4 font-bold hover:border-white hover:bg-white/5 transition-all text-sm tracking-widest uppercase"
                    >
                      HUBUNGI KAMI
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="relative z-10 lg:bg-transparent bg-[#070d1f] border-t border-white/10 lg:border-none pb-8 lg:pb-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <CalendarBoldDuotoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-tight">
                  10+<br/>Tahun Pengalaman
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <UsersGroupTwoRoundedBoldDuotoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-tight">
                  500+<br/>Proyek Selesai
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <HeadphonesRoundSoundBoldDuotoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-tight">
                  24/7<br/>Layanan Respon Cepat
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <ShieldCheckBoldDuotoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-tight">
                  100%<br/>Komitmen pada Kualitas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION OVERVIEW SECTION ───────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div>
              <div className="mb-4">
                <span className="text-[#e63329] font-extrabold tracking-[0.2em] text-xs uppercase">
                  LAYANAN KAMI
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1c2f] leading-tight mb-6">
                Solusi Lengkap untuk<br />
                Kebutuhan Sistem Bangunan
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                SAT hadir sebagai mitra teknis terpercaya untuk memberikan solusi terintegrasi pada sistem bangunan di sektor residensial, bisnis, hingga komersial. Kami berkomitmen menghadirkan layanan berkualitas dengan standar kerja profesional.
              </p>
            </div>

            {/* Right Icons/Features */}
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
              <SolutionFeature 
                icon={<UsersGroupTwoRoundedBoldDuotoneIcon className="w-8 h-8 text-[#0e1c2f]" />} 
                label={<span>Teknisi<br/>Profesional</span>} 
              />
              <SolutionFeature 
                icon={<ShieldCheckBoldDuotoneIcon className="w-8 h-8 text-[#0e1c2f]" />} 
                label={<span>Sesuai Standar<br/>K3 & SOP</span>} 
              />
              <SolutionFeature 
                icon={<ClipboardCheckBoldDuotoneIcon className="w-8 h-8 text-[#0e1c2f]" />} 
                label={<span>Pengadaan hingga<br/>Maintenance</span>} 
              />
              <SolutionFeature 
                icon={<HeadphonesRoundSoundBoldDuotoneIcon className="w-8 h-8 text-[#0e1c2f]" />} 
                label={<span>Respon Cepat<br/>dan Andal</span>} 
              />
              <SolutionFeature 
                icon={<MedalRibbonStarBoldDuotoneIcon className="w-8 h-8 text-[#0e1c2f]" />} 
                label={<span>After Sales<br/>Support</span>} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-[#0e1c2f] uppercase mb-4">
              LAYANAN UTAMA KAMI
            </h2>
            <div className="w-12 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 01 HVAC & Cooling System */}
            <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl bg-[#0e1c2f] min-h-[350px] lg:h-[350px]">
              <Image 
                src="/assets/projects/project-2.webp"
                alt="HVAC & Cooling System"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1c2f] via-[#0e1c2f]/80 to-transparent p-12 flex flex-col justify-between">
                <div>
                  <div className="text-white/40 text-2xl font-bold mb-2">01</div>
                  <div className="text-[#e63329] text-xs font-extrabold tracking-widest uppercase mb-4">HVAC & COOLING SYSTEM</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">HVAC &<br />Cooling System</h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-8">
                    Pengadaan, instalasi, perawatan, dan perbaikan AC, chiller, AHU, FCU, VRV/VRF, cooling tower, dan sistem pendingin lainnya.
                  </p>
                </div>
                <Link href="/layanan/hvac" className="inline-flex items-center gap-2 text-[#e63329] font-bold text-xs tracking-[0.16em] uppercase group/link mt-auto">
                  PELAJARI LAYANAN
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* 02 Mechanical & Electrical */}
            <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[350px] lg:h-[350px]">
              <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[65%] z-10 bg-white p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-slate-200 text-2xl font-bold mb-2">02</div>
                  <div className="text-[#e63329] text-xs font-extrabold tracking-widest uppercase mb-4">MECHANICAL & ELECTRICAL</div>
                  <h3 className="text-3xl font-bold text-[#0e1c2f] mb-6 leading-tight">Mechanical &<br />Electrical</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-[95%]">
                    Pekerjaan sistem mekanikal dan elektrikal untuk mendukung operasional bangunan secara aman, efisien, dan sesuai standar.
                  </p>
                </div>
                <Link href="/layanan/me" className="inline-flex items-center gap-2 text-[#e63329] font-bold text-xs tracking-[0.16em] uppercase group/link mt-auto">
                  PELAJARI LAYANAN
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[35%] hidden lg:block overflow-hidden z-0 border-l border-slate-100">
                <Image 
                  src="/assets/projects/project-3.webp"
                  alt="Mechanical & Electrical"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 03 CCTV & PABX */}
            <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[320px] lg:min-h-[320px]">
              <div className="relative z-10 w-full lg:w-[60%] h-full flex flex-col p-8 lg:p-10 bg-white">
                <div className="flex-grow">
                  <div className="text-slate-200 text-xl font-bold mb-1">03</div>
                  <div className="text-[#e63329] text-[10px] font-extrabold tracking-widest uppercase mb-4">CCTV & PABX</div>
                  <h3 className="text-2xl font-bold text-[#0e1c2f] mb-4 leading-tight">CCTV & PABX</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-[95%]">
                    Instalasi, konfigurasi, dan maintenance sistem CCTV, PABX, access control, dan sistem komunikasi bangunan.
                  </p>
                </div>
                <Link href="/layanan/cctv" className="inline-flex items-center gap-2 text-[#e63329] font-bold text-xs tracking-[0.16em] uppercase group/link mt-auto">
                  PELAJARI LAYANAN
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[40%] hidden lg:block overflow-hidden z-0 border-l border-slate-100">
                <Image 
                  src="/assets/projects/project-4.webp"
                  alt="CCTV & PABX"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 04 Genset */}
            <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[320px] lg:min-h-[320px]">
              <div className="relative z-10 w-full lg:w-[60%] h-full flex flex-col p-8 lg:p-10 bg-white">
                <div className="flex-grow">
                  <div className="text-slate-200 text-xl font-bold mb-1">04</div>
                  <div className="text-[#e63329] text-[10px] font-extrabold tracking-widest uppercase mb-4">GENSET</div>
                  <h3 className="text-2xl font-bold text-[#0e1c2f] mb-4 leading-tight">Genset</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-[95%]">
                    Pengadaan, instalasi, perawatan, dan perbaikan genset sebagai solusi daya cadangan yang andal.
                  </p>
                </div>
                <Link href="/layanan/genset" className="inline-flex items-center gap-2 text-[#e63329] font-bold text-xs tracking-[0.16em] uppercase group/link mt-auto">
                  PELAJARI LAYANAN
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[40%] hidden lg:block overflow-hidden z-0 border-l border-slate-100">
                <Image 
                  src="/assets/projects/project-5.webp"
                  alt="Genset"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 05 Maintenance & After Sales */}
            <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[320px] lg:min-h-[320px]">
              <div className="relative z-10 w-full lg:w-[60%] h-full flex flex-col p-8 lg:p-10 bg-white">
                <div className="flex-grow">
                  <div className="text-slate-200 text-xl font-bold mb-1">05</div>
                  <div className="text-[#e63329] text-[10px] font-extrabold tracking-widest uppercase mb-4">MAINTENANCE & AFTER SALES</div>
                  <h3 className="text-2xl font-bold text-[#0e1c2f] mb-4 leading-tight">Maintenance & After Sales</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-[95%]">
                    Layanan maintenance berkala dan after sales support untuk menjaga performa sistem tetap optimal.
                  </p>
                </div>
                <Link href="/layanan/maintenance" className="inline-flex items-center gap-2 text-[#e63329] font-bold text-xs tracking-[0.16em] uppercase group/link mt-auto">
                  PELAJARI LAYANAN
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[40%] hidden lg:block overflow-hidden z-0 border-l border-slate-100">
                <Image 
                  src="/assets/projects/project-7.webp"
                  alt="Maintenance"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LAYANAN UNGGULAN ───────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <Image 
                src="/assets/projects/project-2.webp"
                alt="HVAC & Cooling System Installation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <div className="mb-4">
                <span className="text-[#e63329] font-black tracking-widest text-[11px] uppercase">
                  LAYANAN UNGGULAN
                </span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold text-[#0e1c2f] leading-tight mb-6">
                HVAC & Cooling System
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-8 max-w-lg">
                Kami menyediakan solusi lengkap untuk sistem tata udara dan pendinginan dengan teknologi modern, efisien, dan hemat energi.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">
                {[
                  'AC Split & Cassette',
                  'FCU & Cooling Tower',
                  'VRV / VRF System',
                  'Preventive Maintenance',
                  'Chiller & AHU'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ClipboardCheckBoldDuotoneIcon className="w-5 h-5 text-[#e63329] shrink-0" />
                    <span className="text-[14px] font-bold text-[#0e1c2f]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/layanan/hvac"
                className="inline-flex items-center justify-center bg-[#e63329] text-white px-8 py-4 rounded font-bold tracking-widest text-[11px] hover:bg-[#c92a22] transition-colors shadow-md"
              >
                PELAJARI SELENGKAPNYA
                <ArrowRightBoldDuotoneIcon className="w-4 h-4 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENGAPA LAYANAN SAT DIPERCAYA ────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-widest text-[#0e1c2f] uppercase mb-4">
              MENGAPA LAYANAN SAT DIPERCAYA
            </h2>
            <div className="w-12 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <UsersGroupTwoRoundedBoldDuotoneIcon />, title: 'Teknisi Profesional', desc: 'Tim teknisi berpengalaman, terlatih, dan bersertifikasi di bidangnya.' },
              { icon: <ShieldCheckBoldDuotoneIcon />, title: 'Sesuai Standar\nK3 & SOP', desc: 'Setiap pekerjaan mengikuti standar keselamatan dan prosedur kerja yang ketat.' },
              { icon: <ClipboardCheckBoldDuotoneIcon />, title: 'Pengadaan hingga\nMaintenance', desc: 'Layanan terintegrasi mulai dari pengadaan, instalasi, perbaikan, hingga perawatan berkala.' },
              { icon: <ClockCircleBoldDuotoneIcon />, title: 'Respon Cepat', desc: 'Siap merespon kebutuhan Anda dengan cepat dan solusi yang tepat.' },
              { icon: <HeadphonesRoundSoundBoldDuotoneIcon />, title: 'Sales\nSupport', desc: 'Dukungan purna jual yang responsif untuk menjaga kepuasan klien.' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start xl:items-center gap-4 mb-4">
                  <div className="text-[#0e1c2f] [&>svg]:w-7 [&>svg]:h-7 shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-[#0e1c2f] font-bold text-[13px] leading-snug whitespace-pre-line">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-[12px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ALUR LAYANAN SAT ───────────────────────────────────── */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[13px] font-black tracking-[0.1em] text-[#0e1c2f] uppercase mb-4">
              ALUR LAYANAN SAT
            </h2>
            <div className="w-8 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-2">
            {[
              { num: '01', title: 'Konsultasi\nKebutuhan', icon: <ChatRoundBoldDuotoneIcon />, desc: 'Memahami kebutuhan sistem dan tujuan project Anda.' },
              { num: '02', title: 'Survey & Analisa\nLapangan', icon: <MagniferBoldDuotoneIcon />, desc: 'Tim kami melakukan survey dan analisa untuk solusi terbaik.' },
              { num: '03', title: 'Penawaran &\nPerencanaan', icon: <FileTextBoldDuotoneIcon />, desc: 'Memberikan penawaran kompetitif dan rencana kerja terperinci.' },
              { num: '04', title: 'Pelaksanaan\nPekerjaan', icon: <SettingsBoldDuotoneIcon />, desc: 'Pekerjaan dilakukan oleh tenaga ahli dengan kontrol kualitas ketat.' },
              { num: '05', title: 'Maintenance &\nSupport', icon: <HeadphonesRoundSoundBoldDuotoneIcon />, desc: 'Layanan purna jual untuk menjaga performa sistem secara berkelanjutan.' }
            ].map((item, i, arr) => (
              <React.Fragment key={i}>
                <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex-1 min-w-[200px] relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#0e1c2f] text-white text-[11px] font-black px-2.5 py-1 rounded-md">
                      {item.num}
                    </div>
                    <h4 className="text-[#0e1c2f] font-bold text-[13px] leading-snug whitespace-pre-line flex-1 mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[#0e1c2f] [&>svg]:w-6 [&>svg]:h-6 shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center shrink-0">
                    <AltArrowRightBoldDuotoneIcon className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── KAMI MELAYANI BERBAGAI KEBUTUHAN ───────────────────── */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[13px] font-black tracking-[0.1em] text-[#0e1c2f] uppercase mb-4">
              KAMI MELAYANI BERBAGAI KEBUTUHAN
            </h2>
            <div className="w-8 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Residential',
                icon: <HomeBoldDuotoneIcon />,
                desc: 'Solusi sistem kebutuhan untuk hunian modern yang nyaman dan efisien.',
                img: '/assets/projects/project-6.webp'
              },
              {
                title: 'Business',
                icon: <BuildingsBoldDuotoneIcon />,
                desc: 'Mendukung operasional bisnis Anda dengan sistem yang andal dan hemat energi.',
                img: '/assets/projects/project-5.webp'
              },
              {
                title: 'Commercial',
                icon: <CityBoldDuotoneIcon />,
                desc: 'Solusi terpadu untuk gedung komersial, mall, hotel, rumah sakit, dan fasilitas publik.',
                img: '/assets/projects/project-6.webp'
              }
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden bg-white border border-slate-200 rounded-xl flex items-stretch min-h-[160px] group shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] transition-all">
                {/* Background Image on Right */}
                <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient to blend with white background on the left */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>

                {/* Content on Left */}
                <div className="relative z-10 w-[70%] p-6 flex flex-col justify-center">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#0e1c2f] flex items-center justify-center text-white shrink-0 mt-1 shadow-md border-2 border-white/10">
                      <div className="[&>svg]:w-6 [&>svg]:h-6">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-black text-[#0e1c2f] text-[15px] mb-2">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed pr-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section className="relative bg-[#050a18] py-16 lg:py-20 border-b border-white/5 overflow-hidden">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.07] grayscale mix-blend-luminosity">
          <Image
            src="/assets/projects/project-6.webp"
            alt="Buildings Background"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
            <div className="lg:w-[55%]">
              <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.2] tracking-tight">
                Butuh Solusi Teknis yang Tepat<br />untuk Project Anda?
              </h2>
            </div>
            <div className="lg:w-[45%]">
              <p className="text-slate-300 text-[15px] leading-relaxed mb-6 pr-4">
                Konsultasikan kebutuhan pengadaan, instalasi, dan maintenance sistem bangunan Anda bersama tim SAT.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center bg-[#e63329] text-white px-8 py-3.5 rounded font-bold tracking-wide text-[13px] hover:bg-[#c92a22] transition-colors"
              >
                HUBUNGI SAT
                <ArrowRightBoldDuotoneIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const SolutionFeature = ({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center px-4 lg:px-8 py-4 first:pl-0 last:pr-0">
    <div className="mb-4">
      {icon}
    </div>
    <span className="text-[10px] font-bold text-[#0e1c2f] leading-tight tracking-tight uppercase">
      {label}
    </span>
  </div>
);
