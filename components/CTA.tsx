'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightBoldDuotoneIcon } from './icons';

const CTA = () => {
  return (
    <section className="relative w-full h-auto min-h-[350px] lg:h-[400px] bg-[#070d1f] flex overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-0 relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Tingkatkan Performa<br className="hidden md:block" /> Fasilitas Anda Bersama SAT
          </h2>
          <p className="text-sm md:text-base text-slate-400 mb-8 max-w-lg leading-relaxed font-medium">
            Dapatkan solusi sistem bangunan terintegrasi yang tepat waktu, aman, dan efisien. Tim teknisi ahli kami siap mendukung kelancaran operasional bisnis Anda.
          </p>
          <div>
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#e63329] hover:bg-[#c01040] text-white px-8 py-4 text-sm font-bold transition-all hover:-translate-y-1 rounded-sm shadow-lg shadow-red-900/20 tracking-wide">
              KONSULTASI SEKARANG <ArrowRightBoldDuotoneIcon className="w-5 h-5 ml-1" />
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
            src="/singapore-skyline.jpg" 
            alt="Singapore Skyline SAT" 
            fill 
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center" 
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-[#070d1f]/10"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
