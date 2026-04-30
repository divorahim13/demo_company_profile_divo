'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightBoldDuotoneIcon, Buildings2BoldDuotoneIcon, MapPointBoldDuotoneIcon } from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { projectCategories, projectList, type ProjectCategory } from '@/lib/projects';

// You can swap this with another project image if preferred
import heroBg from '@/public/assets/projects/project-6.webp';

export default function ProyekPage() {
  const [active, setActive] = useState<'Semua' | ProjectCategory>('Semua');
  const filtered = active === 'Semua' ? projectList : projectList.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-zinc-50 selection:bg-[#e63329] selection:text-white">
      <Navbar />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] bg-[#070d1f] overflow-hidden flex flex-col pt-24 pb-16">
        {/* Right side Slanted Image Background (Matching Mitra Page Style) */}
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-0 hidden lg:block">
          <div 
            className="absolute inset-0 bg-[#e63329]"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0% 50%)' }}
          />
          <div 
            className="absolute inset-0"
            style={{ clipPath: 'polygon(15.5% 0, 100% 0, 100% 100%, 15.5% 100%, 0.5% 50%)' }}
          >
            <Image 
              src={heroBg} 
              alt="Project SAT"
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        {/* Mobile Background */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image 
            src={heroBg} 
            alt="Project SAT"
            placeholder="blur"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/80 to-transparent" />
        </div>

        {/* Content Area */}
        <div className="flex-grow flex items-center relative z-10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
            <div className="w-full lg:w-[50%] xl:w-[46%]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-px bg-[#e63329]" />
                  <nav className="flex items-center text-xs font-bold tracking-widest uppercase">
                    <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
                    <span className="mx-2 text-white/30 font-normal">/</span>
                    <span className="text-white">Proyek</span>
                  </nav>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                  Portofolio Kerja &<br />
                  Keberhasilan <span className="text-[#e63329]">Proyek</span>
                </h1>

                {/* Description */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                  Menampilkan dedikasi kami dalam menghadirkan sistem infrastruktur bangunan yang andal di berbagai sektor industri di Indonesia, dari komersial hingga fasilitas vital.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 max-w-xl">
                  {[
                    { value: '500+', label: 'PROYEK SELESAI' },
                    { value: '10+', label: 'TAHUN PENGALAMAN' },
                    { value: '100%', label: 'SUCCESS RATE' },
                    { value: '24/7', label: 'DUKUNGAN' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <span className="text-[#e63329] font-bold text-[10px] tracking-widest uppercase mb-2 block">KARYA KAMI</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1122]">Jelajahi Proyek SAT</h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 border ${
                    active === cat
                      ? 'bg-[#0a1122] text-white border-[#0a1122] shadow-md'
                      : 'bg-white text-zinc-500 border-zinc-200 hover:border-[#e63329] hover:text-[#e63329] hover:bg-zinc-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-zinc-300"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#e63329] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-[#e63329] text-[10px] font-bold tracking-widest uppercase">{project.tag}</span>
                      <span className="text-zinc-400 text-[10px] font-bold tracking-wider">{project.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#0a1122] leading-snug mb-4 group-hover:text-[#e63329] transition-colors">
                      <Link href={`/proyek/${project.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.title}
                      </Link>
                    </h3>
                    
                    <div className="mt-auto space-y-2 pt-4 border-t border-zinc-100">
                      <div className="flex items-center gap-2 text-zinc-500 text-xs">
                        <Buildings2BoldDuotoneIcon className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                        <span className="truncate">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 text-xs">
                        <MapPointBoldDuotoneIcon className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <CTA />

      <Footer />
    </main>
  );
}
