'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BoltBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, UsersGroupTwoRoundedBoldDuotoneIcon, ShieldCheckBoldDuotoneIcon, ChatRoundBoldDuotoneIcon, TargetBoldDuotoneIcon, MedalRibbonStarBoldDuotoneIcon, CheckCircleBoldDuotoneIcon, UserBoldDuotoneIcon, SettingsBoldDuotoneIcon, ClipboardCheckBoldDuotoneIcon, CrownBoldDuotoneIcon, BillListBoldDuotoneIcon
} from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/public/background-baru-tim.jpeg';

/* ─── Data ────────────────────────────────────────────────────── */
const strukturInti = [
  {
    title: 'Komisaris',
    name: 'Andi Sultan D Dalle, SE',
    desc: 'Mengarahkan visi strategis dan pengembangan perusahaan secara berkelanjutan.',
    image: '/assets/uploads/IMG_6461.JPG',
    icon: <UserBoldDuotoneIcon className="w-4 h-4 text-white" />,
  },
  {
    title: 'Direktur',
    name: 'Sodikin, S.Kom',
    desc: 'Memimpin operasional perusahaan dan memastikan kualitas layanan SAT tetap profesional.',
    image: '/assets/uploads/sodikin.png',
    icon: <CrownBoldDuotoneIcon className="w-4 h-4 text-white" />,
  },
  {
    title: 'Project & Technical Manager',
    name: 'Tri Kornisah Baladiah',
    desc: 'Mengawasi perencanaan teknis, pelaksanaan project, dan koordinasi tim lapangan.',
    image: '/assets/uploads/tri-kornisah.jpeg',
    icon: <SettingsBoldDuotoneIcon className="w-4 h-4 text-white" />,
  },
  {
    title: 'Finance & Admin',
    name: 'Siwi Aryningsih, SE',
    desc: 'Mengelola administrasi, keuangan, dan dukungan operasional perusahaan secara terstruktur.',
    image: '/assets/uploads/IMG_6451.PNG',
    icon: <BillListBoldDuotoneIcon className="w-4 h-4 text-white" />,
  },
  {
    title: 'Project Advisor',
    name: 'Agus Dwi Retno',
    desc: 'Memberikan arahan teknis dan masukan strategis agar setiap project berjalan tepat sasaran.',
    image: '/assets/uploads/agus-dwi-retno.png',
    icon: <UserBoldDuotoneIcon className="w-4 h-4 text-white" />,
  },
  {
    title: 'Sosial Media Officer',
    name: 'Wahyu Jullian',
    desc: 'Mengelola komunikasi digital, dokumentasi lapangan, dan publikasi aktivitas SAT.',
    image: '/assets/uploads/IMG_6455.PNG',
    icon: <ChatRoundBoldDuotoneIcon className="w-4 h-4 text-white" />,
  },
];

const nilaiKerja = [
  { title: 'Solid',       desc: 'Bekerja dengan koordinasi dan kolaborasi yang kuat.',              icon: <UsersGroupTwoRoundedBoldDuotoneIcon className="w-7 h-7" /> },
  { title: 'Handal',      desc: 'Memiliki kompetensi teknis yang dapat diandalkan.',                icon: <ShieldCheckBoldDuotoneIcon className="w-7 h-7" /> },
  { title: 'Ramah',       desc: 'Mengedepankan komunikasi yang baik dengan klien dan mitra.',      icon: <ChatRoundBoldDuotoneIcon className="w-7 h-7" /> },
  { title: 'Berdedikasi', desc: 'Fokus pada kualitas kerja dan tanggung jawab.',                   icon: <TargetBoldDuotoneIcon className="w-7 h-7" /> },
  { title: 'Profesional', desc: 'Menjalankan pekerjaan sesuai standar dan etika kerja.',           icon: <MedalRibbonStarBoldDuotoneIcon className="w-7 h-7" /> },
];

const checklistTeknis = [
  'Teknisi berpengalaman',
  'Koordinasi lapangan yang baik',
  'Bekerja sesuai SOP',
  'Fokus pada keamanan dan kualitas',
  'Siap mendukung kebutuhan project',
];

/* ─── Page ─────────────────────────────────────────────────────── */
export default function TimPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#e63329] selection:text-white">
      <Navbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#070d1f] overflow-hidden pt-20">
        {/* ── Full width background image ── */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroBg}
            alt="Tim Profesional SAT"
            placeholder="blur"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay for readability: softened to ensure the whole team is visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f]/90 via-[#070d1f]/40 to-transparent" />
          {/* Darken on mobile for better text contrast */}
          <div className="absolute inset-0 bg-[#070d1f]/60 lg:hidden" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-24">
          <div className="w-full lg:w-[60%] lg:pr-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-wide mb-8">
                <BoltBoldDuotoneIcon className="w-4 h-4 text-[#e63329]" />
                <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
                <span className="text-zinc-500">&gt;</span>
                <span className="text-white">Tim</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <UsersGroupTwoRoundedBoldDuotoneIcon className="w-4 h-4 text-[#e63329]" />
                <span className="text-white font-bold tracking-widest text-xs uppercase">TIM KAMI</span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-[5.5rem] font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Tim Profesional<br />di Balik SAT
              </h1>

              <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl mb-10" style={{fontFamily: 'var(--font-body)'}}>
                SAT didukung oleh tim yang berpengalaman, solid, dan berkomitmen penuh untuk memberikan layanan teknis yang profesional, responsif, dan memenuhi standar industri tertinggi.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-[#e63329] text-white px-7 py-3.5 rounded font-bold text-sm hover:bg-[#c01040] transition-colors shadow-lg shadow-[#e63329]/30"
                >
                  DISKUSIKAN PROJECT
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded font-bold text-sm hover:bg-white/10 transition-colors"
                >
                  HUBUNGI KAMI <BoltBoldDuotoneIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 1 — TENTANG TIM + STRUKTUR INTI
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">

            {/* Left: Intro */}
            <div className="w-full xl:w-[28%] xl:pt-2 flex-shrink-0">
              <div className="text-[#e63329] font-bold text-[10px] tracking-[0.25em] uppercase mb-3">
                TENTANG TIM KAMI
              </div>
              <h2 className="text-3xl font-bold text-[#0a1122] mb-5 leading-[1.25]">
                Orang-Orang yang Menjalankan Kualitas Layanan SAT
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Tim SAT terdiri dari tenaga profesional yang memiliki peran penting dalam perencanaan, koordinasi, pelaksanaan, serta dukungan operasional untuk setiap kebutuhan project dan layanan teknis.
              </p>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 border border-[#0a1122] text-[#0a1122] px-5 py-2.5 rounded text-sm font-bold hover:bg-[#0a1122] hover:text-white transition-colors group"
              >
                LEBIH TENTANG KAMI
                <ArrowRightBoldDuotoneIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Team Cards */}
            <div className="flex-1">
              {/* Sub-heading */}
              <div className="text-center mb-10">
                <span className="text-[#0a1122] font-bold text-sm tracking-widest uppercase relative inline-block">
                  STRUKTUR INTI SAT
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-[2px] bg-[#e63329]" />
                </span>
              </div>

              {/* Team Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {strukturInti.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white rounded-sm border border-zinc-200 shadow-sm overflow-visible flex flex-col"
                    style={{ marginTop: '16px' }}
                  >
                    {/* Photo & Icon Wrapper */}
                    <div className="relative w-full">
                      <div className="relative h-44 w-full overflow-hidden rounded-t-sm bg-zinc-100">
                        <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top" />
                      </div>
                      {/* Floating red circle icon */}
                      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-9 h-9 bg-[#e63329] rounded-full flex items-center justify-center border-[3px] border-white shadow z-10">
                        {item.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-7 pb-5 px-3 flex flex-col flex-1 text-center">
                      <h4 className="text-[#0a1122] font-bold text-sm mb-1 leading-snug flex items-center justify-center">
                        {item.name}
                      </h4>
                      <p className="text-[#e63329] font-bold text-[10px] uppercase tracking-wider mb-2">
                        {item.title}
                      </p>
                      <p className="text-zinc-500 text-[10px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — NILAI KERJA
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-12">
            <span className="text-[#0a1122] font-bold text-sm tracking-widest uppercase relative inline-block">
              NILAI YANG MEMBENTUK CARA KERJA KAMI
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-[2px] bg-[#e63329]" />
            </span>
          </div>

          {/* 5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 md:divide-x divide-slate-200 bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden">
            {nilaiKerja.map((val, i) => (
              <div key={i} className="p-8 flex flex-col items-center text-center gap-3">
                {/* Icon circle with red dot */}
                <div className="relative w-14 h-14 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-[#0a1122]">
                  {val.icon}
                  <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 bg-[#e63329] rounded-full border-[2px] border-white" />
                </div>
                <h4 className="text-[#0a1122] font-bold text-sm">{val.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — TIM TEKNIS (Image + Checklist)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden shadow-xl h-[420px]"
            >
              <Image
                src="/assets/projects/project-7.webp"
                alt="Tim Teknis SAT di lapangan"
                fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[#e63329] font-bold text-[10px] tracking-[0.25em] uppercase mb-3">
                TIM TEKNIS KAMI
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1122] leading-[1.2] mb-5">
                Didukung Tenaga Teknis yang Siap Bekerja di Lapangan
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Selain tim inti manajemen, SAT juga didukung oleh tenaga teknis yang siap menangani kebutuhan pengadaan, instalasi, perbaikan, dan maintenance untuk berbagai sistem bangunan.
              </p>
              <ul className="space-y-3">
                {checklistTeknis.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircleBoldDuotoneIcon className="w-4 h-4 text-[#e63329] flex-shrink-0" />
                    <span className="text-[#0a1122] text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — STRUKTUR ORGANISASI
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="text-[#0a1122] font-bold text-sm tracking-widest uppercase relative inline-block">
              STRUKTUR ORGANISASI
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-[2px] bg-[#e63329]" />
            </span>
          </div>

          {/* Org Chart — SVG connector approach */}
          {/* Org Chart */}
          <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
            
            {/* Level 1: Komisaris */}
            <div className="bg-[#0a1122] text-white px-8 py-3.5 rounded-xl flex items-center gap-3 w-full max-w-[260px] justify-center shadow-lg border border-zinc-800 relative z-10">
              <UserBoldDuotoneIcon className="w-[18px] h-[18px] text-zinc-400" />
              <span className="font-bold tracking-[0.15em] text-xs">KOMISARIS</span>
            </div>

            {/* Vertical Line */}
            <div className="w-[2px] h-8 bg-zinc-200" />

            {/* Level 2: Direktur */}
            <div className="bg-[#e63329] text-white px-8 py-3.5 rounded-xl flex items-center gap-3 w-full max-w-[260px] justify-center shadow-lg border border-[#c01040]/50 relative z-10">
              <CrownBoldDuotoneIcon className="w-[18px] h-[18px] text-white/90" />
              <span className="font-bold tracking-[0.15em] text-xs">DIREKTUR</span>
            </div>

            {/* Vertical Line going to the fork */}
            <div className="w-[2px] h-8 bg-zinc-200 hidden md:block" />

            {/* Horizontal Fork (Desktop Only) */}
            <div className="relative w-full max-w-[960px] hidden md:block">
              {/* The horizontal bar connecting the children */}
              <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-zinc-200" />
              {/* Vertical drops */}
              <div className="flex justify-between px-[12.5%]">
                <div className="w-[2px] h-8 bg-zinc-200" />
                <div className="w-[2px] h-8 bg-zinc-200" />
                <div className="w-[2px] h-8 bg-zinc-200" />
                <div className="w-[2px] h-8 bg-zinc-200" />
              </div>
            </div>

            {/* Mobile Vertical Line */}
            <div className="w-[2px] h-8 bg-zinc-200 md:hidden" />

            {/* Level 3 boxes */}
            <div className="flex flex-col md:grid md:grid-cols-4 gap-0 md:gap-6 w-full max-w-[960px]">
              {[
                { label: 'PROJECT &\nTECHNICAL MANAGER', icon: <SettingsBoldDuotoneIcon className="w-6 h-6" /> },
                { label: 'FINANCE &\nADMIN',              icon: <ClipboardCheckBoldDuotoneIcon className="w-6 h-6" /> },
                { label: 'PROJECT\nADVISOR',              icon: <UserBoldDuotoneIcon className="w-6 h-6" /> },
                { label: 'SOSIAL MEDIA\nOFFICER',         icon: <ChatRoundBoldDuotoneIcon className="w-6 h-6" /> },
              ].map((b, i) => (
                <React.Fragment key={i}>
                  {/* Vertical connector for mobile between items */}
                  {i > 0 && <div className="w-[2px] h-6 bg-zinc-200 mx-auto md:hidden" />}
                  
                  {/* Box */}
                  <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#e63329]/40 hover:-translate-y-1 group relative z-10">
                    <div className="w-14 h-14 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-red-50 group-hover:text-[#e63329] group-hover:border-red-100 transition-colors duration-300">
                      {b.icon}
                    </div>
                    <span className="font-bold text-[#0a1122] text-xs tracking-[0.1em] text-center whitespace-pre-line leading-relaxed uppercase">{b.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070d1f] overflow-hidden">
        {/* Faint background image overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            src="/assets/projects/project-6.webp"
            alt="bg"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left */}
            <div className="lg:max-w-[38%]">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                Diskusikan Kebutuhan Project Anda bersama Tim Profesional SAT
              </h3>
            </div>

            {/* Middle */}
            <div className="lg:max-w-[36%]">
              <p className="text-zinc-400 text-sm leading-relaxed">
                Kami siap menjadi partner teknis yang andal untuk solusi sistem bangunan yang efisien, berkualitas, dan sesuai kebutuhan Anda.
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-[#e63329] text-white px-8 py-4 rounded font-bold text-sm hover:bg-[#c01040] transition-colors shadow-lg"
              >
                HUBUNGI SAT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


