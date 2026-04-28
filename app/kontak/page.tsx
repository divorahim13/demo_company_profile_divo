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

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#070d1f] overflow-hidden pt-20">
        {/* ── Right diagonal image ── */}
        <div className="absolute right-0 top-0 w-full lg:w-[50%] h-full z-0 hidden lg:block">
          <div
            className="absolute inset-0 bg-[#e63329]"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: 'polygon(15.5% 0, 100% 0, 100% 100%, 0.5% 100%)' }}
          >
            {/* Menggunakan gambar HVAC chiller di atap gedung sebagai ilustrasi */}
            <Image
              src={heroBg}
              alt="Instalasi Chiller HVAC SAT"
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-24">
          <div className="w-full lg:w-[50%] lg:pr-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-wide mb-8">
                <BoltBoldDuotoneIcon className="w-4 h-4 text-[#e63329]" />
                <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
                <span className="text-[#e63329]">&gt;</span>
                <span className="text-white">Kontak</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Hubungi SAT untuk<br />Kebutuhan Project Anda
              </h1>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg mb-10">
                Tim SAT siap membantu kebutuhan pengadaan, instalasi, perbaikan, dan maintenance sistem bangunan Anda.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#e63329] text-white px-7 py-3.5 rounded font-bold text-sm hover:bg-[#c01040] transition-colors shadow-lg shadow-[#e63329]/30"
                >
                  KIRIM INQUIRY <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
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

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Informasi Kontak */}
            <div className="w-full lg:w-[40%] bg-white rounded-xl border border-slate-100 p-8 md:p-10 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-[#0a1122] mb-8 relative pb-4 inline-block">
                Informasi Kontak
                <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#e63329]"></span>
              </h3>

              <div className="flex flex-col gap-8 flex-1">
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-xl bg-[#070d1f] flex items-center justify-center shrink-0">
                    <MapPointBoldDuotoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#e63329] font-bold text-sm mb-2">Alamat</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Jln. Sepakat III No.61, RT.08/01,<br/>
                      Kel. Cilangkap, Kec. Cipayung,<br/>
                      Jakarta Timur
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-xl bg-[#070d1f] flex items-center justify-center shrink-0">
                    <PhoneBoldDuotoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#e63329] font-bold text-sm mb-2">Telepon</h4>
                    <p className="text-[#0a1122] font-bold text-sm leading-relaxed">
                      +62 856-9359-6638<br/>
                      +62 856-9359-6626
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-xl bg-[#070d1f] flex items-center justify-center shrink-0">
                    <LetterBoldDuotoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#e63329] font-bold text-sm mb-2">Email</h4>
                    <p className="text-[#0a1122] font-bold text-sm">
                      sat.samuderaabaditeknik@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#070d1f] rounded-xl p-6 flex gap-4 items-center">
                <HeadphonesRoundSoundBoldDuotoneIcon className="w-8 h-8 text-white shrink-0" />
                <p className="text-white/90 text-xs leading-relaxed">
                  Silakan hubungi kami untuk konsultasi awal, kebutuhan survey, atau diskusi project.
                </p>
              </div>
            </div>

            {/* Right: Kirim Inquiry */}
            <div className="w-full lg:w-[60%] bg-white rounded-xl border border-slate-100 p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a1122] mb-8 relative pb-4 inline-block">
                Kirim Inquiry
                <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#e63329]"></span>
              </h3>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    className="w-full px-4 py-3.5 rounded bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Nama Perusahaan" 
                    className="w-full px-4 py-3.5 rounded bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="tel" 
                    placeholder="Nomor WhatsApp" 
                    className="w-full px-4 py-3.5 rounded bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3.5 rounded bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all"
                  />
                </div>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 rounded bg-white border border-slate-200 text-sm text-slate-500 appearance-none focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all">
                    <option value="">Jenis Kebutuhan</option>
                    <option value="pengadaan">Pengadaan Unit</option>
                    <option value="instalasi">Instalasi Sistem</option>
                    <option value="maintenance">Maintenance Berkala</option>
                    <option value="perbaikan">Perbaikan / Trouble</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                  <AltArrowDownBoldDuotoneIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                <textarea 
                  placeholder="Pesan / Detail Project" 
                  rows={5}
                  className="w-full px-4 py-3.5 rounded bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#e63329] focus:ring-1 focus:ring-[#e63329] transition-all resize-none"
                ></textarea>
                
                <Link
                  href={whatsappHref}
                  target="_blank"
                  className="w-full bg-[#e63329] text-white py-4 rounded font-bold text-sm hover:bg-[#c01040] transition-colors mt-2 flex items-center justify-center gap-2"
                >
                  KIRIM INQUIRY <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUICK CONTACT OPTIONS
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0a1122] mb-4 relative pb-3 inline-block">
              Opsi Kontak Cepat
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#e63329]"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* Telp */}
            <div className="border border-slate-100 rounded-xl p-8 hover:shadow-lg hover:border-slate-200 transition-all group flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-[#e63329] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <PhoneBoldDuotoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1122] mb-2 text-sm">Telepon Langsung</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Hubungi kami langsung untuk respon cepat dari tim SAT.
                </p>
                <a href="#" className="text-[#e63329] font-bold text-sm inline-flex items-center gap-2">
                  +62 856-9359-6638 <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="border border-slate-100 rounded-xl p-8 hover:shadow-lg hover:border-slate-200 transition-all group flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-[#e63329] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LetterBoldDuotoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1122] mb-2 text-sm">Kirim Email</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Sampaikan kebutuhan Anda melalui email resmi SAT.
                </p>
                <a href="#" className="text-[#e63329] font-bold text-xs inline-flex items-center gap-2 break-all">
                  sat.samuderaabaditeknik@gmail.com <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="border border-slate-100 rounded-xl p-8 hover:shadow-lg hover:border-slate-200 transition-all group flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-[#e63329] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 text-white flex items-center justify-center">
                  {/* WhatsApp SVG Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1122] mb-2 text-sm">Konsultasi WhatsApp</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Diskusikan kebutuhan project Anda melalui WhatsApp.
                </p>
                <a href="#" className="text-[#e63329] font-bold text-sm inline-flex items-center gap-2">
                  +62 856-9359-6638 <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              MAP AND FAQ
          ══════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Lokasi Kami */}
            <div>
              <h2 className="text-xl font-bold text-[#0a1122] mb-8 relative pb-3 inline-block">
                Lokasi Kami
                <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#e63329]"></span>
              </h2>
              
              <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                {/* Embed Map Here, using image placeholder for now as seen in screenshot */}
                <Image 
                  src="/assets/permits/permit-1.webp" 
                  alt="Map Location" 
                  fill 
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-60 mix-blend-luminosity grayscale" 
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[320px] bg-white rounded-xl p-5 shadow-xl border border-slate-100">
                  <h4 className="font-bold text-[#0a1122] text-sm mb-2">CV. Samudera Abadi Teknik</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Jln. Sepakat III No.61, RT.08/01, Kel. Cilangkap, Kec. Cipayung, Jakarta Timur
                  </p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[#e63329] font-bold text-xs inline-flex items-center gap-1.5 hover:underline">
                    Lihat di Google Maps <ArrowRightBoldDuotoneIcon className="w-3 h-3" />
                  </a>
                </div>
                
                {/* Pin Icon overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#e63329]">
                  <MapPointBoldDuotoneIcon className="w-12 h-12 drop-shadow-md text-[#e63329]" />
                </div>
              </div>
            </div>

            {/* Pertanyaan Umum */}
            <div>
              <h2 className="text-xl font-bold text-[#0a1122] mb-8 relative pb-3 inline-block">
                Pertanyaan Umum
                <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#e63329]"></span>
              </h2>

              <div className="flex flex-col gap-3">
                {[
                  "Apakah SAT melayani survey lokasi?",
                  "Apakah SAT melayani proyek commercial?",
                  "Apakah tersedia maintenance berkala?",
                  "Bagaimana cara konsultasi awal?"
                ].map((q, i) => (
                  <div key={i} className="border border-slate-100 rounded-lg p-5 flex items-center justify-between cursor-pointer hover:border-slate-200 hover:shadow-sm transition-all bg-white">
                    <span className="font-semibold text-slate-800 text-sm">{q}</span>
                    <AltArrowDownBoldDuotoneIcon className="w-5 h-5 text-slate-400" />
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

