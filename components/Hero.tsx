'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ShieldCheckBoldDuotoneIcon, MedalRibbonStarBoldDuotoneIcon, SettingsBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, ArrowRightBoldDuotoneIcon } from './icons';
import Link from 'next/link';
import heroBg from '@/public/hero-home-new.jpeg';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);
  
  // Staggered reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#070d1f] overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-[1] bg-engineering-grid opacity-[0.14] pointer-events-none" />
      <div className="absolute left-0 top-0 z-[2] hidden h-full w-[58%] blueprint-scan bg-gradient-to-r from-white/[0.035] to-transparent pointer-events-none lg:block" />
      <motion.div
        className="absolute left-[7%] top-[22%] z-[2] hidden h-px w-44 origin-left bg-white/30 lg:block"
        animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 0.55, 0.55, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[12%] bottom-[18%] z-[2] hidden h-24 w-px origin-bottom bg-[#e63329]/50 lg:block"
        animate={{ scaleY: [0, 1, 1, 0], opacity: [0, 0.65, 0.65, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      <motion.div
        className="absolute inset-0 z-0 lg:hidden"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={heroBg}
          alt="Teknisi SAT di area proyek"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-[#070d1f]/78" />
      </motion.div>

      {/* Right side Slanted Image Background */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full z-0 hidden lg:block overflow-hidden">
        {/* Red background layer (Divider) */}
        <motion.div 
          className="absolute inset-0 bg-[#e63329]"
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ clipPath: 'polygon(32% 0, 100% 0, 100% 100%, 12% 100%)' }}
        />
        {/* Image layer */}
        <motion.div 
          className="absolute inset-0"
          style={{ clipPath: 'polygon(32.5% 0, 100% 0, 100% 100%, 12.5% 100%)', y, scale: imageScale }}
        >
          <Image 
            src={heroBg} 
            alt="Teknisi SAT di area proyek"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[90%_20%]"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="flex-grow flex items-center relative z-10 pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="w-full lg:w-[50%]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Eyebrow */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="text-[#ff4a40] font-semibold tracking-[0.15em] text-xs uppercase" style={{fontFamily: 'var(--font-body)'}}>
                  Dari Pengadaan hingga Perawatan, Kami Mitra Terpercaya Anda
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                Solusi Terpercaya untuk<br />
                Pengadaan, Instalasi, dan<br />
                Perawatan Sistem Bangunan
              </motion.h1>

              {/* Sub-headline */}
              <motion.p variants={itemVariants} className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl pr-4" style={{fontFamily: 'var(--font-body)'}}>
                CV. Samudera Abadi Teknik menyediakan solusi teknis komprehensif di bidang pengadaan, instalasi, dan perawatan sistem HVAC, Mekanikal, Elektrikal, CCTV, PABX, serta Genset untuk kebutuhan komersial dan industri.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
                <Link href="/kontak" passHref>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(230, 51, 41, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="sheen-button bg-[#e63329] text-white px-8 py-4 font-bold flex items-center gap-2 transition-colors hover:bg-[#c01040] text-sm"
                  >
                    <span>KONSULTASI PROJECT</span>
                    <ArrowRightBoldDuotoneIcon className="w-5 h-5 ml-1" />
                  </motion.button>
                </Link>

                <Link href="/layanan" passHref>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-white/30 text-white px-8 py-4 font-bold hover:border-white hover:bg-white/5 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)] transition-all text-sm"
                  >
                    LIHAT LAYANAN
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Trust Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 lg:bg-transparent bg-[#070d1f] border-t border-white/10 lg:border-none pb-8 lg:pb-12"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            <TrustBadge icon={<ShieldCheckBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>Teknisi<br/>Profesional</span>} />
            <TrustBadge icon={<MedalRibbonStarBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>Sesuai Standar<br/>ISO & SNI</span>} />
            <TrustBadge icon={<SettingsBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>Maintenance &<br/>After Sales</span>} />
            <TrustBadge icon={<HeadphonesRoundSoundBoldDuotoneIcon className="w-6 h-6 text-white" />} label={<span>After Sales<br/>Support</span>} />
          </div>
        </div>
      </motion.div>

    </section>
  );
};

const TrustBadge = ({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className="flex items-center gap-4 group cursor-default"
  >
    <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
      <span className="absolute inset-1 rounded-full bg-[#e63329]/35 pulse-ring opacity-40" />
      <span className="relative z-10">
      {icon}
      </span>
    </div>
    <span className="text-sm font-medium text-slate-200 leading-tight">
      {label}
    </span>
  </motion.div>
);

export default Hero;
