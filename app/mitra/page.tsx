'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BoltBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, ShieldCheckBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, CalendarBoldDuotoneIcon, UsersGroupTwoRoundedBoldDuotoneIcon, BagBoldDuotoneIcon, BuildingsBoldDuotoneIcon, HeartPulseBoldDuotoneIcon, Buildings2BoldDuotoneIcon, CityBoldDuotoneIcon, ClipboardCheckBoldDuotoneIcon, ChatRoundBoldDuotoneIcon, SettingsBoldDuotoneIcon, QuestionCircleBoldDuotoneIcon, MagniferBoldDuotoneIcon, AltArrowRightBoldDuotoneIcon, AltArrowLeftBoldDuotoneIcon
} from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MitraPage() {
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
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0% 50%)' }}
          />
          {/* Image layer */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: 'polygon(15.5% 0, 100% 0, 100% 100%, 15.5% 100%, 0.5% 50%)' }}
          >
            <Image 
              src="/herosectionmitra.png" 
              alt="Mitra Bisnis SAT"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[72%_center]"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow flex items-center relative z-10 pt-32 pb-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="w-full lg:w-[48%] xl:w-[46%] lg:pr-8 xl:pr-12">
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
                    <span className="text-white">Mitra</span>
                  </nav>
                </div>

                {/* Headline */}
                <h1 className="max-w-[12ch] text-5xl md:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] font-bold text-white leading-[1.05] mb-8 tracking-tight">
                  Jaringan Kemitraan<br />
                  & Kolaborasi Bisnis
                </h1>

                {/* Description */}
                <p className="text-[#a0aec0] text-base md:text-lg leading-relaxed mb-10 max-w-xl pr-4 font-medium">
                  Kami bekerja sama dengan berbagai merek terkemuka dan institusi profesional untuk menjamin ketersediaan sparepart, material berkualitas, dan teknologi terbaru.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-20 lg:mb-24">
                  <Link href="/kontak" passHref>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#e63329] text-white px-8 py-4 font-bold flex items-center gap-2 transition-all hover:bg-[#c01040] text-sm tracking-widest"
                    >
                      JADI MITRA KAMI
                      <ArrowRightBoldDuotoneIcon className="w-4 h-4 ml-1" />
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
                  10+<br/>Brand Terpercaya
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <UsersGroupTwoRoundedBoldDuotoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-tight">
                  50+<br/>Jaringan Supplier
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <ShieldCheckBoldDuotoneIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-200 leading-tight">
                  100%<br/>Material Original
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER SEKTOR SECTION ──────────────────────────────── */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-center">
            
            {/* Left Side: Content */}
            <div>
              <span className="text-[#e63329] font-black tracking-[0.15em] text-xs uppercase mb-4 block">
                TENTANG KAMI
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0a1122] mb-6 leading-[1.15] tracking-tight">
                Partner Teknis untuk<br />Berbagai Sektor
              </h2>
              <div className="space-y-6 text-slate-500 text-sm md:text-base leading-[1.8] mb-10">
                <p>
                  CV. Samudera Abadi Teknik (SAT) adalah perusahaan penyedia layanan teknis sistem bangunan yang berpengalaman dalam pengadaan, instalasi, perbaikan, dan perawatan HVAC, cooling system, mechanical, electrical, CCTV, PABX, dan genset.
                </p>
                <p>
                  Kami berkomitmen memberikan solusi terbaik dengan kualitas kerja terukur, tepat waktu, dan sesuai standar keselamatan.
                </p>
              </div>
              <Link href="/tentang-kami" passHref>
                <button className="border-2 border-[#0a1122]/15 text-[#0a1122] font-bold px-8 py-4 text-xs md:text-sm uppercase tracking-widest hover:border-[#0a1122] transition-colors flex items-center gap-2 group rounded-md">
                  LEBIH TENTANG KAMI
                  <ArrowRightBoldDuotoneIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Right Side: Partners Grid */}
            <div className="w-full">
              {/* Header Grid */}
              <div className="text-center mb-8">
                <h3 className="text-xs font-black tracking-widest uppercase text-[#0a1122] mb-3">MITRA & KLIEN KAMI</h3>
                <div className="w-6 h-[3px] bg-[#e63329] mx-auto"></div>
              </div>

              {/* Grid 3 Columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
                {[
                  { name: 'PGN', category: 'Energi & Gas', domain: 'pgn.co.id' },
                  { name: 'WIKA', category: 'Konstruksi', domain: 'wika.co.id' },
                  { name: 'Ramayana', category: 'Retail', domain: 'ramayana.co.id' },
                  { name: 'Matahari', category: 'Retail', domain: 'matahari.com' },
                  { name: 'Elnusa', category: 'Energi', domain: 'elnusa.co.id' },
                  { name: 'Mitra Keluarga', category: 'Healthcare', domain: 'mitrakeluarga.com' },
                  { name: 'Mercedes-Benz', category: 'Automotive', domain: 'mercedes-benz.com' },
                  { name: 'Margocity', category: 'Mall', domain: 'margocity.com' },
                  { name: 'BNI', category: 'Perbankan', domain: 'bni.co.id' },
                ].map((item) => (
                  <div key={item.name} className="h-20 md:h-24 border border-slate-100 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow bg-white px-4">
                    <div className="flex items-center gap-2 min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
                        alt={`${item.name} logo`}
                        className="w-8 h-8 rounded-md border border-slate-100 bg-white object-contain"
                        loading="lazy"
                      />
                      <span className="text-base md:text-xl font-bold text-slate-800 truncate">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centered PLN Logo */}
              <div className="flex justify-center">
                <div className="w-1/2 md:w-[calc(33.333%-11px)] h-20 md:h-24 border border-slate-100 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow bg-white px-4">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.google.com/s2/favicons?domain=pln.co.id&sz=64"
                      alt="PLN logo"
                      className="w-8 h-8 rounded-md border border-slate-100 bg-white object-contain"
                      loading="lazy"
                    />
                    <span className="text-2xl md:text-3xl font-black text-blue-700 tracking-widest">PLN</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT PROJECT SECTION ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-sm font-black tracking-widest uppercase text-[#0a1122] mb-3">HIGHLIGHT PROJECT</h2>
            <div className="w-12 h-[3px] bg-[#e63329]"></div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/assets/projects/project-3.webp"
                  alt="Instalasi HVAC"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-[#e63329] text-white px-5 py-2 font-bold text-xl">
                  01
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a1122] mb-6 leading-snug tracking-tight min-h-[64px]">
                  Instalasi HVAC untuk Gedung Commercial
                </h3>
                <div className="grid grid-cols-[60px_10px_1fr] text-sm text-[#0a1122] mb-6 gap-y-1">
                  <span className="font-semibold">Lokasi</span>
                  <span>:</span>
                  <span className="text-slate-600">Jakarta</span>
                  
                  <span className="font-semibold">Sistem</span>
                  <span>:</span>
                  <span className="text-slate-600">HVAC, VRV, AHU, Chiller</span>
                </div>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  Instalasi sistem HVAC terintegrasi untuk gedung perkantoran bertingkat dengan efisiensi energi tinggi.
                </p>
                <Link href="#" className="text-[#e63329] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  LIHAT DETAIL PROJECT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/assets/projects/project-7.webp"
                  alt="Maintenance Cooling System"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-[#e63329] text-white px-5 py-2 font-bold text-xl">
                  02
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a1122] mb-6 leading-snug tracking-tight min-h-[64px]">
                  Maintenance Cooling System untuk Fasilitas Bisnis
                </h3>
                <div className="grid grid-cols-[60px_10px_1fr] text-sm text-[#0a1122] mb-6 gap-y-1">
                  <span className="font-semibold">Lokasi</span>
                  <span>:</span>
                  <span className="text-slate-600">Tangerang</span>
                  
                  <span className="font-semibold">Sistem</span>
                  <span>:</span>
                  <span className="text-slate-600">Cooling Tower, Chiller, Pump System</span>
                </div>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  Layanan maintenance berkala untuk memastikan performa cooling system tetap optimal dan andal.
                </p>
                <Link href="#" className="text-[#e63329] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  LIHAT DETAIL PROJECT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image 
                  src="/assets/projects/project-4.webp"
                  alt="Instalasi CCTV & PABX"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-[#e63329] text-white px-5 py-2 font-bold text-xl">
                  03
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a1122] mb-6 leading-snug tracking-tight min-h-[64px]">
                  Instalasi CCTV & PABX untuk Bangunan Operasional
                </h3>
                <div className="grid grid-cols-[60px_10px_1fr] text-sm text-[#0a1122] mb-6 gap-y-1">
                  <span className="font-semibold">Lokasi</span>
                  <span>:</span>
                  <span className="text-slate-600">Bekasi</span>
                  
                  <span className="font-semibold">Sistem</span>
                  <span>:</span>
                  <span className="text-slate-600">CCTV, PABX, Access Control</span>
                </div>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  Instalasi sistem keamanan dan komunikasi untuk mendukung operasional dan keamanan gedung.
                </p>
                <Link href="#" className="text-[#e63329] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  LIHAT DETAIL PROJECT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── SEKTOR YANG KAMI LAYANI SECTION ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-black tracking-widest uppercase text-[#0a1122] mb-3">
              SEKTOR YANG KAMI LAYANI
            </h2>
            <div className="w-8 h-[3px] bg-[#e63329] mx-auto"></div>
          </div>

          {/* Sektor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            
            {/* 1. Retail */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-slate-100 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center"
            >
              <BagBoldDuotoneIcon className="w-10 h-10 md:w-12 md:h-12 text-[#0a1122] mb-6 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm md:text-base mb-3">Retail</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Solusi sistem bangunan untuk pusat perbelanjaan dan retail modern.
              </p>
            </motion.div>

            {/* 2. Energi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-slate-100 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center"
            >
              <BuildingsBoldDuotoneIcon className="w-10 h-10 md:w-12 md:h-12 text-[#0a1122] mb-6 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm md:text-base mb-3">Energi</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mendukung fasilitas energi dengan sistem yang andal dan berkelanjutan.
              </p>
            </motion.div>

            {/* 3. Kesehatan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-slate-100 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center"
            >
              <HeartPulseBoldDuotoneIcon className="w-10 h-10 md:w-12 md:h-12 text-[#0a1122] mb-6 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm md:text-base mb-3">Kesehatan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sistem yang higienis dan aman untuk rumah sakit dan fasilitas kesehatan.
              </p>
            </motion.div>

            {/* 4. Properti */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-slate-100 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center"
            >
              <BuildingsBoldDuotoneIcon className="w-10 h-10 md:w-12 md:h-12 text-[#0a1122] mb-6 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm md:text-base mb-3">Properti</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Solusi teknis untuk gedung apartemen, perkantoran, dan kawasan properti.
              </p>
            </motion.div>

            {/* 5. Komersial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-slate-100 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center"
            >
              <Buildings2BoldDuotoneIcon className="w-10 h-10 md:w-12 md:h-12 text-[#0a1122] mb-6 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm md:text-base mb-3">Komersial</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mendukung operasional bisnis dengan sistem yang efisien dan stabil.
              </p>
            </motion.div>

            {/* 6. Layanan Publik */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border border-slate-100 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center"
            >
              <CityBoldDuotoneIcon className="w-10 h-10 md:w-12 md:h-12 text-[#0a1122] mb-6 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm md:text-base mb-3">Layanan Publik</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Melayani kebutuhan teknis di fasilitas dan instansi layanan publik.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MENGAPA MEMILIH SAT SECTION ─────────────────────────── */}
      <section className="relative py-20 bg-[#070d1f] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full opacity-5 pointer-events-none">
          <Image 
            src="/assets/projects/project-7.webp" 
            alt="Pipes Background" 
            fill 
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070d1f]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-base md:text-lg font-bold tracking-widest text-white mb-3">
              MENGAPA PERUSAHAAN MEMILIH SAT
            </h2>
            <div className="w-10 h-[3px] bg-[#e63329]"></div>
          </div>

          {/* Items Flex */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:divide-x divide-white/10">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex items-start gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
            >
              <ShieldCheckBoldDuotoneIcon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-bold text-white mb-2 leading-tight">Pengalaman Teknis</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Didukung tim berpengalaman di berbagai proyek dan kebutuhan sistem bangunan.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 flex items-start gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
            >
              <ClipboardCheckBoldDuotoneIcon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-bold text-white mb-2 leading-tight">Pengerjaan Sesuai Standar</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Setiap pekerjaan mengikuti standar K3, SOP, dan prosedur kerja yang ketat.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex items-start gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
            >
              <HeadphonesRoundSoundBoldDuotoneIcon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-bold text-white mb-2 leading-tight">Dukungan Maintenance</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Layanan perawatan berkala untuk menjaga performa sistem secara berkelanjutan.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 flex items-start gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
            >
              <ChatRoundBoldDuotoneIcon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-bold text-white mb-2 leading-tight">Tim Responsif</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tim kami siap membantu dengan respon cepat dan komunikasi yang jelas.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 flex items-start gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
            >
              <SettingsBoldDuotoneIcon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-bold text-white mb-2 leading-tight">Solusi yang Terukur</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Memberikan solusi efektif, efisien, dan tepat sesuai kebutuhan project Anda.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PENDEKATAN KAMI SECTION ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-black tracking-widest uppercase text-[#0a1122] mb-3">
              PENDEKATAN KAMI DALAM MENJALANKAN PROJECT
            </h2>
            <div className="w-8 h-[3px] bg-[#e63329] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 lg:gap-2 relative">
            
            {/* Step 1 */}
            <div className="flex-1 w-full border border-slate-100 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#0a1122] text-white flex items-center justify-center text-xs font-bold absolute -top-4 left-4">01</div>
              <QuestionCircleBoldDuotoneIcon className="w-10 h-10 text-[#0a1122] mb-4 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm mb-2">Analisa Kebutuhan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Memahami kebutuhan sistem dan tujuan project Anda.</p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AltArrowRightBoldDuotoneIcon className="w-5 h-5 text-slate-300" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 w-full border border-slate-100 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#0a1122] text-white flex items-center justify-center text-xs font-bold absolute -top-4 left-4">02</div>
              <MagniferBoldDuotoneIcon className="w-10 h-10 text-[#0a1122] mb-4 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm mb-2">Survey Lapangan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Melakukan survey dan pengumpulan data secara menyeluruh.</p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AltArrowRightBoldDuotoneIcon className="w-5 h-5 text-slate-300" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 w-full border border-slate-100 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#0a1122] text-white flex items-center justify-center text-xs font-bold absolute -top-4 left-4">03</div>
              <ClipboardCheckBoldDuotoneIcon className="w-10 h-10 text-[#0a1122] mb-4 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm mb-2">Perencanaan Teknis</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Menyusun perencanaan teknis dan solusi yang paling tepat.</p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AltArrowRightBoldDuotoneIcon className="w-5 h-5 text-slate-300" />
            </div>

            {/* Step 4 */}
            <div className="flex-1 w-full border border-slate-100 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#0a1122] text-white flex items-center justify-center text-xs font-bold absolute -top-4 left-4">04</div>
              <SettingsBoldDuotoneIcon className="w-10 h-10 text-[#0a1122] mb-4 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm mb-2">Pelaksanaan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Pekerjaan dilakukan oleh tenaga ahli dengan kontrol kualitas ketat.</p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AltArrowRightBoldDuotoneIcon className="w-5 h-5 text-slate-300" />
            </div>

            {/* Step 5 */}
            <div className="flex-1 w-full border border-slate-100 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#0a1122] text-white flex items-center justify-center text-xs font-bold absolute -top-4 left-4">05</div>
              <ClipboardCheckBoldDuotoneIcon className="w-10 h-10 text-[#0a1122] mb-4 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm mb-2">Testing & Handover</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Pengujian sistem dan serah terima dengan dokumentasi lengkap.</p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AltArrowRightBoldDuotoneIcon className="w-5 h-5 text-slate-300" />
            </div>

            {/* Step 6 */}
            <div className="flex-1 w-full border border-slate-100 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#0a1122] text-white flex items-center justify-center text-xs font-bold absolute -top-4 left-4">06</div>
              <HeadphonesRoundSoundBoldDuotoneIcon className="w-10 h-10 text-[#0a1122] mb-4 stroke-[1.2]" />
              <h3 className="font-bold text-[#0a1122] text-sm mb-2">After Sales Support</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Dukungan after sales untuk memastikan sistem berjalan optimal.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ─────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-black tracking-widest uppercase text-[#0a1122] mb-3">
              KEPERCAYAAN YANG DIBANGUN LEWAT KUALITAS KERJA
            </h2>
            <div className="w-8 h-[3px] bg-[#e63329] mx-auto"></div>
          </div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-6 lg:pr-16">
              
              {/* Testimonial 1 */}
              <div className="flex-1 border border-slate-100 rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center bg-white hover:shadow-md transition-all">
                <div className="w-24 h-12 md:w-32 md:h-16 relative flex items-center justify-center flex-shrink-0 bg-[#00529b] rounded-full shadow-inner">
                  <span className="text-white font-black text-xl tracking-wider">WIKA</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-slate-600 italic mb-4 leading-relaxed font-serif">
                    &quot;SAT merupakan partner yang profesional dan responsif. Pekerjaan instalasi HVAC berjalan sesuai standar dan timeline yang disepakati.&quot;
                  </p>
                  <p className="text-xs font-bold text-[#e63329]">
                    — Tim Facility Management PT WIKA
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-1 border border-slate-100 rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center bg-white hover:shadow-md transition-all">
                <div className="w-24 h-12 md:w-32 md:h-16 relative flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-[3px] border-red-600 border-r-transparent -rotate-45" />
                    <span className="text-lg md:text-[22px] font-black tracking-tight text-[#1f2937]">MATAHARI</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-slate-600 italic mb-4 leading-relaxed font-serif">
                    &quot;Maintenance rutin yang dilakukan SAT membantu kami menjaga kenyamanan dan efisiensi operasional di seluruh lokasi store.&quot;
                  </p>
                  <p className="text-xs font-bold text-[#e63329]">
                    — Tim Engineering Matahari
                  </p>
                </div>
              </div>

            </div>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex gap-2 absolute top-1/2 right-0 transform -translate-y-1/2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a1122] hover:border-[#0a1122] transition-colors bg-white hover:bg-slate-50">
                <AltArrowLeftBoldDuotoneIcon className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a1122] hover:border-[#0a1122] transition-colors bg-white hover:bg-slate-50">
                <AltArrowRightBoldDuotoneIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile Nav */}
            <div className="flex lg:hidden justify-center gap-4 mt-8">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a1122] hover:border-[#0a1122] transition-colors bg-white hover:bg-slate-50">
                <AltArrowLeftBoldDuotoneIcon className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a1122] hover:border-[#0a1122] transition-colors bg-white hover:bg-slate-50">
                <AltArrowRightBoldDuotoneIcon className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full h-auto min-h-[350px] lg:h-[400px] bg-[#070d1f] flex overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row relative z-10">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-0 relative z-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Siap Menjadi Mitra Teknis<br className="hidden md:block" /> untuk Project Anda
            </h2>
            <p className="text-sm md:text-base text-slate-400 mb-8 max-w-lg leading-relaxed">
              Konsultasikan kebutuhan project Anda bersama SAT untuk solusi sistem bangunan yang profesional, efisien, dan andal.
            </p>
            <div>
              <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#e63329] hover:bg-red-700 text-white px-8 py-3 text-sm font-bold transition-all hover:-translate-y-1 rounded-sm shadow-lg shadow-red-900/20">
                HUBUNGI SAT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Right Image Area (Absolute) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 overflow-hidden">
          {/* Red Slash Background */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[#e63329]"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
          ></div>
          {/* Image */}
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ clipPath: 'polygon(15.5% 0, 100% 0, 100% 100%, 0.5% 100%)' }}
          >
            <Image 
              src="/assets/projects/project-7.webp" 
              alt="SAT Technicians" 
              fill 
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover" 
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-[#070d1f]/10"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
