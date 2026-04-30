'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SnowflakeBoldDuotoneIcon, SettingsBoldDuotoneIcon, VideocameraBoldDuotoneIcon, BoltBoldDuotoneIcon, ArrowRightBoldDuotoneIcon } from './icons';

const services = [
  {
    title: 'HVAC &\nCooling System',
    description: 'Pengadaan, instalasi, dan perawatan AC, Chiller, AHU, Cooling Tower, dan sistem terkait.',
    icon: <SnowflakeBoldDuotoneIcon className="w-8 h-8" />,
    image: '/assets/uploads/ac-central-2.jpeg',
  },
  {
    title: 'Mechanical &\nElectrical',
    description: 'Pekerjaan sistem mekanikal dan elektrikal untuk mendukung operasional bangunan.',
    icon: <SettingsBoldDuotoneIcon className="w-8 h-8" />,
    image: '/assets/uploads/IMG_6421.PNG',
  },
  {
    title: 'CCTV &\nPABX',
    description: 'Instalasi dan konfigurasi sistem CCTV, PABX, access control, dan jaringan komunikasi.',
    icon: <VideocameraBoldDuotoneIcon className="w-8 h-8" />,
    image: '/assets/uploads/cctv.jpeg',
  },
  {
    title: 'Genset',
    description: 'Pengadaan, instalasi, perawatan, dan perbaikan genset untuk kebutuhan daya cadangan.',
    icon: <BoltBoldDuotoneIcon className="w-8 h-8" />,
    image: '/assets/uploads/genset.jpeg',
  },
  {
    title: 'Maintenance &\nAfter Sales',
    description: 'Layanan maintenance berkala dan after sales support untuk kinerja sistem yang optimal.',
    icon: <SettingsBoldDuotoneIcon className="w-8 h-8" />,
    image: '/assets/uploads/IMG_6436.PNG',
  }
];

const Services = () => {
  return (
    <section id="layanan" className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[#e63329] font-semibold text-xs tracking-[0.15em] uppercase mb-4" style={{fontFamily: 'var(--font-body)'}}>
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1122] relative inline-block tracking-tight">
            Solusi Lengkap Sistem Bangunan
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#e63329]"></span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="surface-card overflow-hidden flex flex-col h-full group"
            >
              <div className="p-6 lg:p-7 flex-grow flex flex-col">
                {/* Icon */}
                <div className="icon-chip mb-6">
                  {service.icon}
                </div>
                {/* Title */}
                <h3 className="text-[#0a1122] font-semibold text-[19px] mb-3 leading-tight whitespace-pre-line tracking-tight">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow" style={{fontFamily: 'var(--font-body)'}}>
                  {service.description}
                </p>
                {/* Link */}
                <Link href="#" className="inline-flex items-center gap-2 text-[#0a1122] group-hover:text-[#e63329] font-semibold text-sm transition-colors mt-auto group/link">
                  Pelajari lebih lanjut 
                  <span className="text-[#e63329] transition-transform duration-200 group-hover/link:translate-x-0.5">
                    <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                  </span>
                </Link>
              </div>
              {/* Image */}
              <div className="relative h-44 w-full mt-auto overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title.replace('\n', ' ')} 
                  fill 
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
