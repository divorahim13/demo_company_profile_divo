'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheckBoldDuotoneIcon, MedalRibbonStarBoldDuotoneIcon, SettingsBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, ArrowRightBoldDuotoneIcon } from './icons';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#070d1f] overflow-hidden flex flex-col">

      {/* Right side Slanted Image Background */}
      <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-0 hidden lg:block">
        {/* Red background layer (Divider) */}
        <div 
          className="absolute inset-0 bg-[#e63329]"
          style={{ clipPath: 'polygon(32% 0, 100% 0, 100% 100%, 12% 100%)' }}
        />
        {/* Image layer */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: 'polygon(32.5% 0, 100% 0, 100% 100%, 12.5% 100%)' }}
        >
          <Image 
            src="/herosection1.png" 
            alt="HVAC technician at work — CV. Samudera Abadi Teknik"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[72%_center]"
            priority
          />
          {/* Subtle overlay to ensure text/navbar readability if needed, though mostly covered by the slant */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow flex items-center relative z-10 pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="w-full lg:w-[55%]">
            <div>
              {/* Eyebrow */}
              <div className="mb-6">
                <span className="text-[#e63329] font-semibold tracking-[0.15em] text-xs uppercase" style={{fontFamily: 'var(--font-body)'}}>
                  Mitra Teknis Andal &amp; Terpercaya
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                Solusi Terpercaya untuk<br />
                Pengadaan, Instalasi, dan<br />
                Perawatan Sistem Bangunan
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl pr-4" style={{fontFamily: 'var(--font-body)'}}>
                CV. Samudera Abadi Teknik melayani kebutuhan HVAC, cooling system, mechanical, electrical, CCTV, PABX, dan genset untuk residensial, bisnis, dan commercial building.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/kontak" passHref>
                  <button
                    className="bg-[#e63329] text-white px-8 py-4 font-bold flex items-center gap-2 transition-all hover:bg-[#c01040] text-sm"
                  >
                    KONSULTASI PROJECT
                    <ArrowRightBoldDuotoneIcon className="w-5 h-5 ml-1" />
                  </button>
                </Link>

                <Link href="/layanan" passHref>
                  <button
                    className="border-2 border-white/30 text-white px-8 py-4 font-bold hover:border-white hover:bg-white/5 transition-all text-sm"
                  >
                    LIHAT LAYANAN
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="relative z-10 lg:bg-transparent bg-[#070d1f] border-t border-white/10 lg:border-none pb-8 lg:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            <TrustBadge icon={<ShieldCheckBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>Teknisi<br/>Profesional</span>} />
            <TrustBadge icon={<MedalRibbonStarBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>Sesuai Standar<br/>ISO & SNI</span>} />
            <TrustBadge icon={<SettingsBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>Maintenance &<br/>After Sales</span>} />
            <TrustBadge icon={<HeadphonesRoundSoundBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>After Sales<br/>Support</span>} />
          </div>
        </div>
      </div>

    </section>
  );
};

const TrustBadge = ({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) => (
  <div className="flex items-center gap-4 group">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium text-slate-200 leading-tight">
      {label}
    </span>
  </div>
);

export default Hero;
