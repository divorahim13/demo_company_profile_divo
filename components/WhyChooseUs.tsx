'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheckBoldDuotoneIcon,
  UsersGroupTwoRoundedBoldDuotoneIcon,
  SettingsBoldDuotoneIcon,
  HeadphonesRoundSoundBoldDuotoneIcon
} from './icons';

const reasons = [
  {
    title: 'Bekerja Sesuai Standar',
    description: 'Setiap pekerjaan kami pastikan mematuhi standar keamanan dan kualitas, baik untuk rumah tinggal maupun industri.',
    icon: <ShieldCheckBoldDuotoneIcon className="w-7 h-7" />,
  },
  {
    title: 'Teknisi Profesional',
    description: 'Kebutuhan Anda ditangani langsung oleh tim teknisi bersertifikasi yang bekerja secara efisien dan tepat waktu.',
    icon: <UsersGroupTwoRoundedBoldDuotoneIcon className="w-7 h-7" />,
  },
  {
    title: 'Instalasi & Perawatan',
    description: 'Menyediakan layanan penuh dari pengadaan, instalasi awal, hingga program perawatan rutin agar perangkat Anda awet.',
    icon: <SettingsBoldDuotoneIcon className="w-7 h-7" />,
  },
  {
    title: 'After-Sales Support',
    description: 'Kami memberikan garansi pengerjaan dan dukungan teknis yang responsif untuk kenyamanan Anda.',
    icon: <HeadphonesRoundSoundBoldDuotoneIcon className="w-7 h-7" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-white border-t border-slate-100 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 flex-shrink-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#e63329]" />
              <span className="text-[#e63329] font-bold tracking-[0.15em] text-xs uppercase">
                Mengapa Kami
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-heading text-[#0a1122] leading-[1.1] tracking-tight">
              Komitmen pada<br />
              Kualitas,<br />
              Keselamatan,<br />
              dan Kepuasan
            </h2>
          </motion.div>

          <div className="lg:w-1/2 flex flex-col justify-end w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-32 sm:h-40 lg:h-36 max-w-md w-full rounded-2xl overflow-hidden mb-6 shadow-md"
            >
              <Image
                src="/assets/uploads/IMG_6440.PNG"
                alt="Engineering Excellence"
                fill
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 100vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0a1122]/30 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/30"
                >
                  <ShieldCheckBoldDuotoneIcon className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>

            <p className="text-slate-500 max-w-md text-base leading-[1.8]">
              Kami percaya bahwa kepercayaan pelanggan dibangun melalui konsistensi kerja, standar yang tidak kompromi, dan layanan purna jual yang nyata, bukan sekadar janji.
            </p>
          </div>
        </div>

        {/* Reasons Grid — Left Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="surface-card p-6 group"
            >
              {/* Icon */}
              <div className="icon-chip mb-6">
                {reason.icon}
              </div>

              {/* Number */}
              <div className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase mb-3">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="text-xl font-bold text-[#0a1122] mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-sm leading-[1.75]">
                {reason.description}
              </p>

              {/* Decorative bottom line */}
              <div className="mt-8 w-8 h-[2px] bg-slate-200 group-hover:bg-[#e63329] group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
