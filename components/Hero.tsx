'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ShieldCheckBoldDuotoneIcon, HeadphonesRoundSoundBoldDuotoneIcon, ArrowRightBoldDuotoneIcon, ClockCircleBoldDuotoneIcon } from './icons';
import Link from 'next/link';
import heroBg from '@/public/herosectionrumahberanda.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#070d1f] overflow-hidden flex flex-col">
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y, scale: imageScale }}
      >
        <Image
          src={heroBg}
          alt="Teknisi SAT melayani instalasi di rumah"
          fill
          sizes="100vw"
          className="object-cover object-[center_25%] lg:object-[60%_20%]"
          priority
          placeholder="blur"
        />
        {/* Gradient overlay — darker left for text, transparent right to show technician */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1f]/85 via-[#070d1f]/60 to-[#070d1f]/90 lg:bg-none lg:bg-transparent" />
        <div className="absolute inset-0 hidden lg:block" style={{
          background: 'linear-gradient(to right, rgba(7,13,31,0.92) 0%, rgba(7,13,31,0.82) 35%, rgba(7,13,31,0.35) 60%, rgba(7,13,31,0.15) 100%)'
        }} />
      </motion.div>

      {/* Content Area */}
      <div className="flex-grow flex items-center relative z-10 pt-28 lg:pt-32 pb-6 lg:pb-0">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          
          <div className="w-full lg:w-[52%] xl:w-[48%]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Eyebrow Badge */}
              <motion.div variants={itemVariants} className="mb-5">
                <span className="inline-flex items-center gap-2 text-[#e63329] text-xs font-bold tracking-[0.2em] uppercase border border-[#e63329]/30 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e63329] animate-pulse" />
                  Melayani Rumah Tangga & Bisnis
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Jasa AC, Listrik &{' '}
                <br className="hidden sm:block" />
                Perawatan Bangunan{' '}
                <br />
                <span className="text-[#e63329]">Profesional</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p variants={itemVariants} className="text-slate-300 text-base lg:text-lg leading-relaxed mb-6 max-w-lg">
                Butuh pasang AC rumah, perbaikan listrik, atau maintenance gedung?
                Tim berpengalaman kami siap bantu. Hubungi kami via WhatsApp sekarang.
              </motion.p>

              {/* Quick Benefit Checklist */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                <BenefitCheck text="Survei & Konsultasi Gratis" />
                <BenefitCheck text="Garansi Resmi" />
                <BenefitCheck text="Respon Cepat" />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link href="/kontak" passHref>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 28px -5px rgba(230, 51, 41, 0.45)" }}
                    whileTap={{ scale: 0.98 }}
                    className="sheen-button inline-flex items-center gap-2.5 bg-[#e63329] text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-[#c01040] transition-all shadow-lg shadow-[#e63329]/30 hover:shadow-xl hover:shadow-[#e63329]/40 hover:-translate-y-0.5"
                  >
                    <span>HUBUNGI VIA WHATSAPP</span>
                    <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
                  </motion.button>
                </Link>

                <Link href="/layanan" passHref>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-white/10 transition-all"
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mt-auto"
      >
        <div className="bg-[#070d1f]/80 backdrop-blur-md border-t border-white/[0.08]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-5">
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <TrustBadge 
                  icon={<ShieldCheckBoldDuotoneIcon className="w-5 h-5 text-[#e63329]" />} 
                  label="Teknisi Bersertifikat" 
                />
                <TrustBadge 
                  icon={<ClockCircleBoldDuotoneIcon className="w-5 h-5 text-[#e63329]" />} 
                  label="10+ Tahun Pengalaman" 
                />
                <TrustBadge 
                  icon={<HeadphonesRoundSoundBoldDuotoneIcon className="w-5 h-5 text-[#e63329]" />} 
                  label="Layanan Purna Jual" 
                />
              </div>
              {/* Rating/Social proof */}
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
                <span className="text-slate-300 font-medium">4.9</span>
                <span className="text-slate-500">•</span>
                <span>Dipercaya 500+ pelanggan</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

/* ── Small Helper Components ───────────────────── */

const BenefitCheck = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1.5 text-sm text-slate-300">
    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const TrustBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2.5 group cursor-default">
    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all group-hover:bg-white/[0.1] group-hover:border-white/[0.15]">
      {icon}
    </div>
    <span className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors">
      {label}
    </span>
  </div>
);

export default Hero;
