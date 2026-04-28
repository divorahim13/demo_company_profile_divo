'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightBoldDuotoneIcon, Buildings2BoldDuotoneIcon } from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectCategories, projectList, type ProjectCategory } from '@/lib/projects';

export default function ProyekPage() {
  const [active, setActive] = useState<'Semua' | ProjectCategory>('Semua');
  const filtered = active === 'Semua' ? projectList : projectList.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-white selection:bg-[#e11d48] selection:text-white">
      <Navbar />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#070d1f]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#070d1f] z-10" />
          <Image
            src="/assets/projects/project-6.webp"
            alt="Projects Background"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-20 scale-110"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="text-[#e11d48] font-black tracking-[0.5em] text-[10px] uppercase italic">Our Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase italic">
              KARYA NYATA <span className="text-[#e11d48]">SOLUSI</span><br />
              TEKNIK KAMI.
            </h1>

            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Menampilkan dedikasi kami dalam menghadirkan sistem infrastruktur yang andal di berbagai sektor industri di Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
            <div className="flex flex-wrap items-center gap-3">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-8 py-3.5 text-[10px] font-black uppercase tracking-widest rounded-full border-2 transition-all duration-300 ${
                    active === cat
                      ? 'bg-[#e11d48] text-white border-[#e11d48] shadow-xl shadow-[#e11d48]/30'
                      : 'bg-white text-slate-400 border-slate-100 hover:border-[#e11d48] hover:text-[#e11d48]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase">
              Showing {filtered.length} Selected Projects
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-700"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="bg-[#e11d48] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-white/20">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">
                        {project.year} • {project.client}
                      </p>
                      <h3 className="text-white text-2xl font-black italic uppercase leading-none tracking-tighter mb-4">{project.title}</h3>
                      <Link href={`/proyek/${project.slug}`} className="flex items-center gap-2 text-[#e11d48] font-black text-[10px] tracking-widest uppercase">
                        View Details <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-8 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-black text-[#0a1122] leading-tight mb-4 tracking-tight uppercase italic">{project.title}</h3>
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-bold">
                      <Buildings2BoldDuotoneIcon className="w-4 h-4 text-[#e11d48]" />
                      <span className="truncate">{project.client}</span>
                    </div>
                    <Link href={`/proyek/${project.slug}`} className="inline-flex items-center gap-2 mt-5 text-[#e11d48] text-[10px] font-black tracking-widest uppercase">
                      Detail Proyek <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-32 pt-20 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { value: '500+', label: 'COMPLETED PROJECTS' },
              { value: '10+', label: 'YEARS OF JOURNEY' },
              { value: '100%', label: 'SUCCESS RATE' },
              { value: '24/7', label: 'CLIENT SUPPORT' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-black text-[#0a1122] tracking-tighter mb-2 italic">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#070d1f] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
              REPUTASI KAMI<br />ADALAH <span className="text-[#e11d48]">HASIL</span> KERJA.
            </h2>
            <p className="text-slate-400 text-base mb-16 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Percayakan sistem teknis bangunan Anda kepada tim yang telah terbukti menyelesaikan ratusan proyek dengan sukses.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-4 bg-[#e11d48] text-white px-16 py-7 rounded-full font-black tracking-widest text-xs hover:bg-white hover:text-[#0a1122] transition-all shadow-2xl shadow-[#e11d48]/40 active:scale-95 group"
            >
              MULAI PROYEK ANDA SEKARANG
              <ArrowRightBoldDuotoneIcon className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
