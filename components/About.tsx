'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ArrowRightBoldDuotoneIcon } from './icons';
import { AnimatedCounter } from './motion-kit';

const About = () => {
  return (
    <section id="tentang-kami" className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Red top-left bracket accent */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#e63329] z-10" />

            <div className="relative rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] h-[480px]">
              <Image
                src="/assets/uploads/benerin-ac-central.png"
                alt="HVAC Systems — Rooftop Installation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            </div>

            {/* Red bottom-right bracket accent */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-[#e63329]" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#e63329]" />
              <span className="text-[#e63329] font-semibold tracking-[0.15em] text-xs uppercase" style={{fontFamily: 'var(--font-body)'}}>
                Tentang Kami
              </span>
            </div>

            <h2 className="text-5xl xl:text-6xl font-bold text-[#0a1122] leading-[1.05] tracking-tight mb-8">
              Mitra Anda dari<br />
              Pengadaan hingga<br />
              Perawatan
            </h2>

            {/* Short scannable description */}
            <div className="space-y-4 text-slate-600 mb-10 text-base leading-[1.75]">
              <p>
                CV. Samudera Abadi Teknik didirikan untuk merespons tingginya kebutuhan akan mitra teknis yang andal seiring dengan pesatnya perkembangan teknologi dan infrastruktur. Kami hadir dengan komitmen memberikan solusi sistem bangunan terbaik, didukung oleh para ahli yang memiliki rekam jejak puluhan tahun di bidangnya.
              </p>
              <p>
                Kami mengutamakan keunggulan kualitas, integritas, dan profesionalisme di setiap proyek. Didukung oleh tim teknisi terlatih yang terus berinovasi, kami memastikan setiap pekerjaan, mulai dari instalasi hingga perawatan, diselesaikan dengan standar operasional yang ketat demi kepuasan klien dan mitra bisnis kami.
              </p>
            </div>

            {/* Key differentiators */}
            <ul className="space-y-2.5 mb-12">
              {[
                'Pengerjaan sesuai standar K3, SNI, dan ISO',
                'Didukung teknisi berpengalaman & bersertifikasi',
                'Garansi pekerjaan dan respons cepat 24/7',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#e63329] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats Row */}
            <div className="grid grid-cols-4 border-t border-slate-100 pt-8 gap-4">
              <StatItem value={10} suffix="+" line1="Tahun" line2="Pengalaman" />
              <StatItem value={500} suffix="+" line1="Proyek" line2="Selesai" hasDivider />
              <StatItem value={100} suffix="%" line1="Komitmen" line2="Kualitas" hasDivider />
              <StatItem value={24} suffix="/7" line1="Layanan" line2="Darurat" hasDivider />
            </div>

            {/* CTA link */}
            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-2 mt-10 text-sm font-bold text-[#e63329] hover:gap-3 transition-all tracking-wide uppercase group"
            >
              Lihat Profil Perusahaan
              <ArrowRightBoldDuotoneIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, suffix = '', line1, line2, hasDivider }: { value: number; suffix?: string; line1: string; line2: string; hasDivider?: boolean }) => (
  <div className={`relative text-center px-3 ${hasDivider ? 'border-l border-slate-200' : ''}`}>
    <AnimatedCounter value={value} suffix={suffix} className="block text-3xl font-bold text-[#e63329] leading-none mb-1.5" />
    <p className="text-[10px] font-semibold text-slate-400 leading-tight uppercase tracking-widest text-center" style={{fontFamily: 'var(--font-body)'}}>
      {line1}<br />{line2}
    </p>
  </div>
);

export default About;
