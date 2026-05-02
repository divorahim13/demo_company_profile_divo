'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BoltBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, ShieldCheckBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, CalendarBoldDuotoneIcon, UsersGroupTwoRoundedBoldDuotoneIcon, BagBoldDuotoneIcon, BuildingsBoldDuotoneIcon, HeartPulseBoldDuotoneIcon, Buildings2BoldDuotoneIcon, CityBoldDuotoneIcon, ClipboardCheckBoldDuotoneIcon, ChatRoundBoldDuotoneIcon, SettingsBoldDuotoneIcon, QuestionCircleBoldDuotoneIcon, MagniferBoldDuotoneIcon, AltArrowRightBoldDuotoneIcon, AltArrowLeftBoldDuotoneIcon,
} from '@/components/icons';
import { ShoppingBag, Zap, HeartPulse, Building, Building2, Landmark, Search, Map, PenTool, Settings, CheckSquare, Headset } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/public/herosectionmitra.png';

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
              src={heroBg} 
              alt="Mitra Bisnis SAT"
              placeholder="blur"
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

              {/* Grid Columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { name: 'Pertamina', domain: 'pertamina.com', customLogo: '/brands/logopertamina.png' },
                  { name: 'Telkom Indonesia', domain: 'telkom.co.id', customLogo: '/brands/logotelkom.png' },
                  { name: 'Indofood', domain: 'indofood.com', customLogo: '/brands/logoindofood.png' },
                  { name: 'WIKA', domain: 'wika.co.id', customLogo: '/brands/logowika.png' },
                  { name: 'PGN', domain: 'pgn.co.id', customLogo: '/logopgnterbaru.png' },
                  { name: 'Elnusa', domain: 'elnusa.co.id', customLogo: '/brands/Elnusa.png' },
                  { name: 'Ramayana', domain: 'ramayana.co.id' },
                  { name: 'Matahari', domain: 'matahari.com', customLogo: '/brands/logomatahari.png' },
                  { name: 'BNI', domain: 'bni.co.id' },
                  { name: 'PLN', domain: 'pln.co.id', customLogo: '/brands/plnlogo.png' },
                  { name: 'Service City', domain: 'servicecity.co.id', customLogo: '/brands/servicecity.jpeg' },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="h-20 md:h-24 border border-slate-200 shadow-sm hover:border-[#e63329]/50 rounded-lg flex items-center justify-center hover:shadow-md transition-all bg-white px-5 md:px-6"
                    aria-label={item.name}
                  >
                    <div className="flex items-center min-w-0 w-full h-full justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.customLogo || `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`}
                        alt={`${item.name} logo`}
                        className="h-full max-h-12 md:max-h-14 w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
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
                  src="/instalasiaccentralvrvsystem.jpeg"
                  alt="Instalasi AC Central VRV System"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 bg-[#e63329] text-white px-5 py-2 font-bold text-xl">
                  01
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a1122] mb-6 leading-snug tracking-tight min-h-[64px]">
                  Instalasi AC Central VRV System
                </h3>
                <div className="grid grid-cols-[60px_10px_1fr] text-sm text-[#0a1122] mb-6 gap-y-1">
                  <span className="font-semibold">Lokasi</span>
                  <span>:</span>
                  <span className="text-slate-600">Jakarta Selatan</span>
                  
                  <span className="font-semibold">Sistem</span>
                  <span>:</span>
                  <span className="text-slate-600">VRV System 30 PK, 4 lantai</span>
                </div>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  Proyek instalasi dan perbaikan sistem VRV untuk gedung perkantoran 4 lantai dengan fokus pada efisiensi energi, kenyamanan area kerja, dan kemudahan maintenance.
                </p>
                <Link href="/proyek/instalasi-ac-central-vrv-system" className="text-[#e63329] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all w-fit">
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
                  alt="Maintenance Tahunan AC Split"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 bg-[#e63329] text-white px-5 py-2 font-bold text-xl">
                  02
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a1122] mb-6 leading-snug tracking-tight min-h-[64px]">
                  Maintenance Tahunan AC Split
                </h3>
                <div className="grid grid-cols-[60px_10px_1fr] text-sm text-[#0a1122] mb-6 gap-y-1">
                  <span className="font-semibold">Lokasi</span>
                  <span>:</span>
                  <span className="text-slate-600">Jakarta Selatan</span>
                  
                  <span className="font-semibold">Sistem</span>
                  <span>:</span>
                  <span className="text-slate-600">48 unit AC Split</span>
                </div>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  Program maintenance preventif dan korektif untuk 48 unit AC split di kawasan hunian premium dengan target menjaga performa pendinginan stabil sepanjang tahun.
                </p>
                <Link href="/proyek/maintenance-tahunan-ac-split" className="text-[#e63329] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all w-fit">
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
                  src="/assets/uploads/cctv.jpeg"
                  alt="Smart CCTV & Monitoring System"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 bg-[#e63329] text-white px-5 py-2 font-bold text-xl">
                  03
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-[#0a1122] mb-6 leading-snug tracking-tight min-h-[64px]">
                  Smart CCTV & Monitoring System
                </h3>
                <div className="grid grid-cols-[60px_10px_1fr] text-sm text-[#0a1122] mb-6 gap-y-1">
                  <span className="font-semibold">Lokasi</span>
                  <span>:</span>
                  <span className="text-slate-600">Cikarang</span>
                  
                  <span className="font-semibold">Sistem</span>
                  <span>:</span>
                  <span className="text-slate-600">32 Kamera IP CCTV + Remote Monitoring</span>
                </div>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">
                  Pembangunan sistem CCTV IP terpadu untuk area warehouse dan loading dock dengan kemampuan live monitoring dan playback rekaman terstruktur.
                </p>
                <Link href="/proyek/smart-cctv-monitoring-system" className="text-[#e63329] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  LIHAT DETAIL PROJECT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── SEKTOR YANG KAMI LAYANI SECTION ──────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e63329]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0a1122]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-[#e63329]"></div>
                <h2 className="text-xs md:text-sm font-black tracking-widest uppercase text-[#e63329]">
                  CAKUPAN LAYANAN
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1122] leading-[1.1] tracking-tight">
                Sektor yang Kami Layani
              </h3>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
              Kami membawa keahlian teknis dan standar industri tertinggi ke berbagai sektor, memastikan setiap fasilitas beroperasi pada performa puncaknya.
            </p>
          </div>

          {/* Sektor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 1. Retail */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm">
                  <ShoppingBag className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0a1122] mb-4 group-hover:text-[#e63329] transition-colors duration-300">Retail & Mall</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  Solusi sistem bangunan terintegrasi untuk pusat perbelanjaan dan retail modern yang membutuhkan kenyamanan pengunjung 24/7.
                </p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-16 transition-all duration-300 mt-auto"></div>
              </div>
            </motion.div>

            {/* 2. Energi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm">
                  <Zap className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0a1122] mb-4 group-hover:text-[#e63329] transition-colors duration-300">Energi & Migas</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  Mendukung fasilitas energi dengan sistem operasional yang andal, memenuhi standar keamanan dan berkelanjutan yang ketat.
                </p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-16 transition-all duration-300 mt-auto"></div>
              </div>
            </motion.div>

            {/* 3. Kesehatan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm">
                  <HeartPulse className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0a1122] mb-4 group-hover:text-[#e63329] transition-colors duration-300">Fasilitas Kesehatan</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  Sistem tata udara dan kelistrikan yang higienis serta aman untuk rumah sakit, klinik, dan fasilitas kesehatan lainnya.
                </p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-16 transition-all duration-300 mt-auto"></div>
              </div>
            </motion.div>

            {/* 4. Properti */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm">
                  <Building className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0a1122] mb-4 group-hover:text-[#e63329] transition-colors duration-300">Properti & Residensial</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  Solusi teknis menyeluruh untuk gedung apartemen, perumahan, perkantoran, dan kawasan properti skala besar.
                </p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-16 transition-all duration-300 mt-auto"></div>
              </div>
            </motion.div>

            {/* 5. Komersial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm">
                  <Building2 className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0a1122] mb-4 group-hover:text-[#e63329] transition-colors duration-300">Komersial & Bisnis</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  Mendukung operasional ruang komersial dengan sistem yang efisien, stabil, dan maintenance berkala yang terjamin.
                </p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-16 transition-all duration-300 mt-auto"></div>
              </div>
            </motion.div>

            {/* 6. Layanan Publik */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group bg-white border border-slate-200 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm">
                  <Landmark className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0a1122] mb-4 group-hover:text-[#e63329] transition-colors duration-300">Layanan Publik</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                  Melayani kebutuhan teknis di fasilitas umum dan instansi pemerintah dengan standarisasi proyek yang transparan dan akuntabel.
                </p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-16 transition-all duration-300 mt-auto"></div>
              </div>
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
            priority 
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="group border border-slate-200 hover:border-[#e63329]/30 rounded-2xl p-8 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100/50 leading-none select-none transition-colors duration-300 z-0">01</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Search className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0a1122] text-lg mb-3">Analisa Kebutuhan</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Memahami secara mendalam kebutuhan sistem operasional dan tujuan utama project Anda.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group border border-slate-200 hover:border-[#e63329]/30 rounded-2xl p-8 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100/50 leading-none select-none transition-colors duration-300 z-0">02</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Map className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0a1122] text-lg mb-3">Survey Lapangan</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Melakukan observasi dan pengumpulan data teknis secara menyeluruh di lokasi project.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group border border-slate-200 hover:border-[#e63329]/30 rounded-2xl p-8 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100/50 leading-none select-none transition-colors duration-300 z-0">03</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-6 transition-colors duration-300">
                  <PenTool className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0a1122] text-lg mb-3">Perencanaan Teknis</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Menyusun desain engineering, perhitungan teknis, dan rancangan solusi yang paling optimal.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group border border-slate-200 hover:border-[#e63329]/30 rounded-2xl p-8 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100/50 leading-none select-none transition-colors duration-300 z-0">04</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Settings className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0a1122] text-lg mb-3">Pelaksanaan</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Eksekusi pekerjaan oleh tenaga ahli bersertifikasi dengan pengawasan kualitas yang ketat.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group border border-slate-200 hover:border-[#e63329]/30 rounded-2xl p-8 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100/50 leading-none select-none transition-colors duration-300 z-0">05</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-6 transition-colors duration-300">
                  <CheckSquare className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0a1122] text-lg mb-3">Testing & Handover</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Pengujian sistem menyeluruh (commissioning) dan serah terima dengan dokumentasi lengkap.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="group border border-slate-200 hover:border-[#e63329]/30 rounded-2xl p-8 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-slate-50 group-hover:text-slate-100/50 leading-none select-none transition-colors duration-300 z-0">06</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#e63329] group-hover:text-white text-[#0a1122] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Headset className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0a1122] text-lg mb-3">After Sales Support</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Dukungan teknis berkala dan respons cepat untuk memastikan sistem beroperasi optimal 24/7.</p>
              </div>
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
                <div className="w-24 h-12 md:w-32 md:h-16 relative flex items-center justify-center flex-shrink-0 p-2">
                  <Image
                    src="/brands/logowika.png"
                    alt="WIKA logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-slate-600 italic mb-4 leading-relaxed font-serif">
                    &quot;SAT merupakan partner yang profesional dan responsif. Pekerjaan instalasi HVAC berjalan sesuai standar dan timeline yang disepakati.&quot;
                  </p>
                  <p className="text-xs font-bold text-[#e63329]">
                    - Tim Facility Management PT WIKA
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-1 border border-slate-100 rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center bg-white hover:shadow-md transition-all">
                <div className="w-24 h-12 md:w-32 md:h-16 relative flex items-center justify-center flex-shrink-0 p-2">
                  <Image
                    src="/brands/logomatahari.png"
                    alt="Matahari logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-slate-600 italic mb-4 leading-relaxed font-serif">
                    &quot;Maintenance rutin yang dilakukan SAT membantu kami menjaga kenyamanan dan efisiensi operasional di seluruh lokasi store.&quot;
                  </p>
                  <p className="text-xs font-bold text-[#e63329]">
                    - Tim Engineering Matahari
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
              priority 
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
