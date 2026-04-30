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
              alt="HVAC technician at work - CV. Samudera Abadi Teknik"
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
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-[45%]">
              <div className="mb-4">
                <span className="text-[#e63329] font-extrabold tracking-[0.2em] text-xs uppercase">
                  LAYANAN KAMI
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0e1c2f] leading-[1.15] mb-6">
                Solusi Lengkap untuk<br className="hidden md:block" /> Kebutuhan Sistem Bangunan
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10">
                CV. Samudera Abadi Teknik menyediakan layanan teknis end-to-end yang mengintegrasikan pengadaan, instalasi, dan perawatan. Fokus kami adalah memastikan sistem HVAC, Mekanikal, Elektrikal, hingga Keamanan Anda berjalan dengan efisiensi maksimal dan tanpa gangguan operasional.
              </p>
              
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 shadow-sm">
                    <MedalRibbonStarBoldDuotoneIcon className="w-6 h-6 text-[#e63329]" />
                  </div>
                  <span className="text-sm font-bold text-[#0e1c2f] leading-tight">Bersertifikasi<br/>& Bergaransi</span>
                </div>
                <div className="hidden sm:block w-[1px] h-10 bg-slate-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 shadow-sm">
                    <BuildingsBoldDuotoneIcon className="w-6 h-6 text-[#e63329]" />
                  </div>
                  <span className="text-sm font-bold text-[#0e1c2f] leading-tight">Skala Industri<br/>& Komersial</span>
                </div>
              </div>
            </div>

            {/* Right Image Collage */}
            <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
                <Image 
                  src="/assets/projects/project-3.webp"
                  alt="Instalasi Sistem Bangunan"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0e1c2f]/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 border border-slate-100 z-20"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e63329]/10 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheckBoldDuotoneIcon className="w-5 h-5 md:w-6 md:h-6 text-[#e63329]" />
                </div>
                <div>
                  <div className="text-[#0e1c2f] font-black text-lg md:text-xl leading-none">100%</div>
                  <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">Keamanan & SOP</div>
                </div>
              </motion.div>
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
            <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl bg-[#0e1c2f] min-h-[420px] lg:h-[450px]">
              <Image 
                src="/assets/uploads/ac-central-3.jpeg"
                alt="HVAC & Cooling System"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1c2f] via-[#0e1c2f]/80 to-transparent p-12 flex flex-col justify-between">
                <div>
                  <div className="text-white text-3xl md:text-4xl font-black mb-3">01</div>
                  <div className="text-[#e63329] text-xs font-extrabold tracking-widest uppercase mb-4">HVAC & COOLING SYSTEM</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">HVAC &<br />Cooling System</h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-8">
                    Pengadaan, instalasi, perawatan, dan perbaikan AC, chiller, AHU, FCU, VRV/VRF, cooling tower, dan sistem pendingin lainnya.
                  </p>
                </div>
                <Link href="/layanan/hvac" className="inline-flex items-center gap-2 bg-[#e63329] text-white hover:bg-white hover:text-[#e63329] px-6 py-3.5 rounded-lg font-bold text-xs tracking-[0.16em] uppercase group/link mt-auto w-fit transition-all duration-300 shadow-md">
                  PELAJARI LAYANAN
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* 02 Mechanical & Electrical */}
            <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl bg-slate-100 min-h-[420px] lg:h-[450px]">
              <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[65%] z-10 bg-white p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-[#0e1c2f] text-3xl md:text-4xl font-black mb-3 opacity-90">02</div>
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
                  src="/assets/uploads/IMG_6421.PNG"
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
                  <div className="text-[#0e1c2f] text-2xl md:text-3xl font-black mb-2 opacity-90">03</div>
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
                  src="/assets/uploads/cctv.jpeg"
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
                  <div className="text-[#0e1c2f] text-2xl md:text-3xl font-black mb-2 opacity-90">04</div>
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
                  src="/assets/uploads/genset.jpeg"
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
                  <div className="text-[#0e1c2f] text-2xl md:text-3xl font-black mb-2 opacity-90">05</div>
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
                  src="/assets/uploads/IMG_6436.PNG"
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
                src="/assets/uploads/ac-central-3.jpeg"
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
      <section className="py-20 lg:py-28 bg-[#0e1c2f] border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e63329]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[13px] font-black tracking-[0.2em] text-white uppercase mb-4 opacity-90">
              MENGAPA LAYANAN SAT DIPERCAYA
            </h2>
            <div className="w-12 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-8">
            {[
              { icon: <UsersGroupTwoRoundedBoldDuotoneIcon />, title: 'Teknisi Profesional', desc: 'Tim teknisi berpengalaman, terlatih, dan bersertifikasi di bidangnya.' },
              { icon: <ShieldCheckBoldDuotoneIcon />, title: 'Sesuai Standar\nK3 & SOP', desc: 'Setiap pekerjaan mengikuti standar keselamatan dan prosedur kerja yang ketat.' },
              { icon: <ClipboardCheckBoldDuotoneIcon />, title: 'Pengadaan hingga\nMaintenance', desc: 'Layanan terintegrasi mulai dari pengadaan, instalasi, perbaikan, hingga perawatan berkala.' },
              { icon: <ClockCircleBoldDuotoneIcon />, title: 'Respon Cepat', desc: 'Siap merespon kebutuhan Anda dengan cepat dan memberikan solusi yang tepat.' },
              { icon: <HeadphonesRoundSoundBoldDuotoneIcon />, title: 'Sales\nSupport', desc: 'Dukungan purna jual yang sangat responsif untuk menjaga kepuasan klien kami.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#e63329] group-hover:border-[#e63329] group-hover:-translate-y-2 transition-all duration-300 shrink-0 shadow-lg">
                  <div className="[&>svg]:w-8 [&>svg]:h-8">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-white font-bold text-[16px] leading-snug whitespace-pre-line mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-[13px] leading-relaxed max-w-[250px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ALUR KERJA KAMI ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[13px] font-black tracking-[0.2em] text-[#0e1c2f] uppercase mb-4">
              ALUR KERJA KAMI
            </h2>
            <div className="w-12 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="relative">
            {/* Horizontal Line connecting steps (hidden on mobile, visible on lg) */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-slate-100 -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
              {[
                { num: '01', title: 'Konsultasi\nKebutuhan', icon: <ChatRoundBoldDuotoneIcon />, desc: 'Memahami kebutuhan sistem dan tujuan project Anda secara detail.' },
                { num: '02', title: 'Survey &\nAnalisa', icon: <MagniferBoldDuotoneIcon />, desc: 'Tim kami melakukan survey lapangan untuk merancang solusi terbaik.' },
                { num: '03', title: 'Penawaran &\nPerencanaan', icon: <FileTextBoldDuotoneIcon />, desc: 'Memberikan penawaran kompetitif dan rencana kerja terperinci.' },
                { num: '04', title: 'Pelaksanaan\nPekerjaan', icon: <SettingsBoldDuotoneIcon />, desc: 'Pekerjaan dilakukan oleh tenaga ahli dengan kontrol kualitas ketat.' },
                { num: '05', title: 'Maintenance\n& Support', icon: <HeadphonesRoundSoundBoldDuotoneIcon />, desc: 'Layanan purna jual untuk menjaga performa sistem berkelanjutan.' }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  {/* Step Number Badge */}
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center mb-6 relative z-10 group-hover:border-[#e63329] group-hover:-translate-y-2 transition-all duration-300">
                    <span className="text-[#e63329] text-[10px] font-black tracking-widest opacity-80 mb-[-2px]">STEP</span>
                    <span className="text-[#0e1c2f] font-black text-2xl leading-none">{item.num}</span>
                  </div>
                  
                  <div className="text-[#e63329] [&>svg]:w-6 [&>svg]:h-6 mb-4 opacity-80 group-hover:opacity-100 transition-opacity shrink-0">
                    {item.icon}
                  </div>
                  
                  <h4 className="text-[#0e1c2f] font-bold text-[16px] leading-snug whitespace-pre-line mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed max-w-[220px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KAMI MELAYANI BERBAGAI KEBUTUHAN ───────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[13px] font-black tracking-[0.2em] text-[#0e1c2f] uppercase mb-4">
              KAMI MELAYANI BERBAGAI KEBUTUHAN
            </h2>
            <div className="w-12 h-1 bg-[#e63329] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 h-auto lg:h-[480px]">
            {[
              {
                title: 'Residential',
                icon: <HomeBoldDuotoneIcon className="w-7 h-7" />,
                desc: 'Solusi sistem kelistrikan dan tata udara premium untuk hunian modern yang nyaman, aman, dan efisien.',
                img: '/assets/uploads/IMG_6420.PNG'
              },
              {
                title: 'Business',
                icon: <BuildingsBoldDuotoneIcon className="w-7 h-7" />,
                desc: 'Mendukung operasional bisnis dan retail Anda dengan sistem infrastruktur yang andal dan hemat energi.',
                img: '/assets/projects/project-5.webp'
              },
              {
                title: 'Commercial',
                icon: <CityBoldDuotoneIcon className="w-7 h-7" />,
                desc: 'Solusi terpadu skala besar untuk gedung komersial, mall, hotel, rumah sakit, dan fasilitas publik.',
                img: '/assets/projects/project-6.webp'
              }
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl group min-h-[380px] md:min-h-full flex items-end shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/50">
                {/* Background Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/95 via-[#0e1c2f]/30 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#e63329]/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-500 z-10" />

                {/* Content */}
                <div className="relative z-20 p-8 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center mb-6 group-hover:bg-[#e63329] group-hover:border-[#e63329] group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="font-bold text-white text-2xl lg:text-3xl mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Hover Reveal Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-[13px] leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-10 h-1 bg-[#e63329] mt-6 group-hover:w-full transition-all duration-700 ease-out rounded-full opacity-50 group-hover:opacity-100" />
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


