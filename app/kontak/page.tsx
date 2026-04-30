'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BoltBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, MapPointBoldDuotoneIcon, PhoneBoldDuotoneIcon, LetterBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, AltArrowDownBoldDuotoneIcon } from '@/components/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/public/herosectionkontak.png';

export default function KontakPage() {
  const whatsappHref =
    'https://wa.me/6285693596638?text=Halo%20tim%20CV.%20Samudera%20Abadi%20Teknik%2C%20saya%20ingin%20konsultasi%20kebutuhan%20project.';

  return (
    <main className="min-h-screen bg-white selection:bg-[#e63329] selection:text-white">
      <Navbar />

      {/* ====== HERO ====== */}
      <section className="relative min-h-screen bg-[#070d1f] overflow-hidden flex items-center">
        {/* Right image - full height, NO clip-path, uses gradient blend */}
        <div className="absolute right-0 top-0 w-full lg:w-[58%] h-full z-0 hidden lg:block">
          <Image
            src={heroBg}
            alt="Customer Service CV. Samudera Abadi Teknik"
            placeholder="blur"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center"
            priority
          />
          {/* Gradient fade from dark bg into image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f] via-[#070d1f]/50 to-transparent" style={{ width: '45%' }} />
          {/* Subtle overall darken for text readability */}
          <div className="absolute inset-0 bg-black/5" />

        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src={heroBg}
            alt="Customer Service CV. Samudera Abadi Teknik"
            placeholder="blur"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#070d1f]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-32 lg:py-0">
          <div className="w-full lg:w-[42%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-10">
                <BoltBoldDuotoneIcon className="w-4 h-4 text-[#e63329]" />
                <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
                <span className="text-[#e63329]/60">/</span>
                <span className="text-white/80">Kontak</span>
              </div>

              {/* Eyebrow */}
              <span className="inline-block text-[#e63329] text-xs font-bold tracking-[0.2em] uppercase mb-4 border border-[#e63329]/30 px-3 py-1.5 rounded-full">Hubungi Kami</span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Hubungi SAT untuk<br />Kebutuhan <span className="text-[#e63329]">Project</span> Anda
              </h1>

              <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-md mb-10">
                Tim SAT siap membantu kebutuhan pengadaan, instalasi, perbaikan, dan maintenance sistem bangunan Anda.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 bg-[#e63329] text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-[#c01040] transition-all shadow-lg shadow-[#e63329]/30 hover:shadow-xl hover:shadow-[#e63329]/40 hover:-translate-y-0.5"
                >
                  KIRIM INQUIRY <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+6285693596638"
                  className="inline-flex items-center gap-2.5 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-white/10 transition-all"
                >
                  <PhoneBoldDuotoneIcon className="w-4 h-4" /> HUBUNGI KAMI
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT FORM & INFO
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#e63329] text-sm font-bold tracking-widest uppercase mb-3 block">HUBUNGI KAMI</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1122] mb-4">Siap Berdiskusi dengan Tim SAT</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Kami terbuka untuk konsultasi kebutuhan project, informasi layanan, 
              dan pertanyaan seputar sistem bangunan. Tim kami akan merespons dengan cepat dan profesional.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left: Informasi Kontak */}
              <div className="w-full lg:w-[40%] bg-[#0a1122] text-white p-8 md:p-12 flex flex-col relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#e63329]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-2xl font-bold mb-8 relative pb-4 inline-block z-10">
                  Informasi Kontak
                  <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-[#e63329]"></span>
                </h3>

                <div className="flex flex-col gap-8 flex-1 z-10">
                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e63329] group-hover:border-[#e63329] transition-all">
                      <MapPointBoldDuotoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Alamat Kantor</h4>
                      <p className="text-white text-sm leading-relaxed">
                        Jln. Sepakat III No.61, RT.08/01,<br/>
                        Kel. Cilangkap, Kec. Cipayung,<br/>
                        Jakarta Timur
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e63329] group-hover:border-[#e63329] transition-all">
                      <PhoneBoldDuotoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Hubungi Kami</h4>
                      <p className="text-white text-sm leading-relaxed font-semibold">
                        +62 856-9359-6638<br/>
                        +62 856-9359-6626
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e63329] group-hover:border-[#e63329] transition-all">
                      <LetterBoldDuotoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Email Resmi</h4>
                      <p className="text-white text-sm font-semibold">
                        sat.samuderaabaditeknik@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-12 pt-8 border-t border-white/10 z-10">
                  <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-70">Terhubung Dengan Kami</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://instagram.com/samuderaabaditeknik" target="_blank" rel="noopener noreferrer" 
                      className="flex-1 min-w-[240px] flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#e63329] hover:border-[#e63329] transition-all duration-300 group">
                      <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 group-hover:text-white/80">Instagram</span>
                        <span className="text-sm font-semibold text-white truncate">@samuderaabaditeknik</span>
                      </div>
                    </a>

                    <a href="https://tiktok.com/@samuderaabadi_tek" target="_blank" rel="noopener noreferrer"
                      className="flex-1 min-w-[240px] flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#e63329] hover:border-[#e63329] transition-all duration-300 group">
                      <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                        </svg>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 group-hover:text-white/80">TikTok</span>
                        <span className="text-sm font-semibold text-white truncate">@samuderaabadi_tek</span>
                      </div>
                    </a>

                    <a href="https://youtube.com/@samuderaabaditeknik" target="_blank" rel="noopener noreferrer"
                      className="flex-1 min-w-[240px] flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#e63329] hover:border-[#e63329] transition-all duration-300 group">
                      <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/>
                        </svg>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 group-hover:text-white/80">YouTube</span>
                        <span className="text-sm font-semibold text-white truncate">@samuderaabaditeknik</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Kirim Inquiry */}
              <div className="w-full lg:w-[60%] bg-white p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#0a1122] mb-8 relative pb-4 inline-block">
                  Kirim Pesan
                  <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-[#e63329]"></span>
                </h3>

                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Nama Lengkap</label>
                      <input 
                        type="text" 
                        placeholder="Masukkan nama Anda" 
                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Instansi / Perusahaan</label>
                      <input 
                        type="text" 
                        placeholder="Nama perusahaan" 
                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Nomor WhatsApp</label>
                      <input 
                        type="tel" 
                        placeholder="Contoh: 08123456789" 
                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Alamat Email</label>
                      <input 
                        type="email" 
                        placeholder="email@perusahaan.com" 
                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Jenis Kebutuhan</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 appearance-none focus:bg-white focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all cursor-pointer">
                        <option value="">Pilih kebutuhan layanan Anda</option>
                        <option value="pengadaan">Pengadaan Unit HVAC/Chiller</option>
                        <option value="instalasi">Instalasi Sistem</option>
                        <option value="maintenance">Maintenance Berkala</option>
                        <option value="perbaikan">Perbaikan / Trouble</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                      <AltArrowDownBoldDuotoneIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Detail Project / Pesan</label>
                    <textarea 
                      placeholder="Jelaskan secara singkat mengenai kebutuhan project atau permasalahan sistem Anda..." 
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    className="w-full bg-[#e63329] text-white py-4 rounded-lg font-bold text-sm hover:bg-[#c01040] hover:shadow-lg hover:shadow-[#e63329]/30 hover:-translate-y-0.5 transition-all mt-2 flex items-center justify-center gap-2 group"
                  >
                    KIRIM INQUIRY <ArrowRightBoldDuotoneIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUICK CONTACT OPTIONS
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50/40 relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0a1122] mb-4 relative pb-3 inline-block">
              Opsi Kontak Cepat
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#e63329]"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* Telp */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#e63329] transition-colors">
                <PhoneBoldDuotoneIcon className="w-6 h-6 text-[#0e1c2f] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1122] mb-2 text-sm">Telepon Langsung</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Hubungi kami langsung untuk respon cepat dari tim SAT.
                </p>
                <a href="tel:+6285693596638" className="text-[#e63329] font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  +62 856-9359-6638 <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#e63329] transition-colors">
                <LetterBoldDuotoneIcon className="w-6 h-6 text-[#0e1c2f] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1122] mb-2 text-sm">Kirim Email</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Sampaikan kebutuhan Anda melalui email resmi SAT.
                </p>
                <a href="mailto:sat.samuderaabaditeknik@gmail.com" className="text-[#e63329] font-bold text-[13px] inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform break-all">
                  sat.samuderaabaditeknik@gmail.com <ArrowRightBoldDuotoneIcon className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#e63329] transition-colors">
                <div className="w-6 h-6 text-[#0e1c2f] group-hover:text-white flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1122] mb-2 text-sm">Konsultasi WhatsApp</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Diskusikan kebutuhan project Anda melalui WhatsApp.
                </p>
                <a href="https://wa.me/6285693596638" target="_blank" rel="noopener noreferrer" className="text-[#e63329] font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  +62 856-9359-6638 <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              MAP AND FAQ
          ══════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm">
            
            {/* Lokasi Kami */}
            <div>
              <h2 className="text-xl font-bold text-[#0a1122] mb-8 relative pb-3 inline-block">
                Lokasi Kami
                <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#e63329]"></span>
              </h2>
              
              <div className="relative w-full h-[350px] rounded-xl overflow-hidden bg-slate-100 group">
                {/* Google Maps Iframe */}
                <iframe 
                  src="https://maps.google.com/maps?q=Jl.+Sepakat+III+No.61,+Cilangkap,+Cipayung,+Jakarta+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80 mix-blend-luminosity grayscale group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
                
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[320px] bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-white/20">
                  <h4 className="font-bold text-[#0a1122] text-[13px] mb-1.5">CV. Samudera Abadi Teknik</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Jln. Sepakat III No.61, RT.08/01, Kel. Cilangkap, Kec. Cipayung, Jakarta Timur
                  </p>
                  <a href="https://maps.google.com/maps?q=Jl.+Sepakat+III+No.61,+Cilangkap,+Cipayung,+Jakarta+Timur" target="_blank" rel="noreferrer" className="text-[#e63329] font-bold text-[11px] uppercase tracking-wide inline-flex items-center gap-1.5 hover:text-[#c01040]">
                    Lihat di Google Maps <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Pertanyaan Umum */}
            <div>
              <h2 className="text-xl font-bold text-[#0a1122] mb-8 relative pb-3 inline-block">
                Pertanyaan Umum
                <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#e63329]"></span>
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  "Apakah SAT melayani survey lokasi gratis?",
                  "Apakah SAT melayani instalasi proyek komersial?",
                  "Apakah tersedia layanan maintenance rutin/berkala?",
                  "Bagaimana cara konsultasi awal untuk project baru?"
                ].map((q, i) => (
                  <div key={i} className="group border border-slate-100 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-slate-200 hover:bg-slate-50 transition-all">
                    <span className="font-semibold text-slate-700 text-sm group-hover:text-[#e63329] transition-colors">{q}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#e63329]/10 transition-colors">
                      <AltArrowDownBoldDuotoneIcon className="w-4 h-4 text-slate-400 group-hover:text-[#e63329] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA BOTTOM
      ══════════════════════════════════════════════════ */}
      <section className="relative py-16 bg-[#070d1f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/assets/projects/project-7.webp" 
            alt="Pipes background" 
            fill 
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover" 
          />
        </div>
        
        {/* Red Diagonal Slash on left */}
        <div 
          className="absolute left-0 top-0 w-32 h-full bg-[#e63329] hidden md:block"
          style={{ clipPath: 'polygon(0 0, 10% 0, 100% 100%, 0 100%)' }}
        ></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:pl-32">
          <div className="md:w-[40%]">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Butuh Mitra Teknis yang Responsif dan Andal?
            </h2>
          </div>
          
          <div className="md:w-[35%]">
            <p className="text-slate-300 text-sm leading-relaxed">
              Hubungi SAT untuk mendiskusikan kebutuhan sistem bangunan Anda secara lebih detail.
            </p>
          </div>

          <div className="md:w-[25%] flex md:justify-end w-full">
            <button className="bg-[#e63329] text-white px-8 py-4 rounded font-bold text-sm hover:bg-[#c01040] transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-lg shadow-[#e63329]/20">
              HUBUNGI SAT <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

