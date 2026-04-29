'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightBoldDuotoneIcon } from './icons';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#050a18] py-24">
      {/* Background Image for the whole section */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/uploads/IMG_3762.JPG.jpeg"
          alt="Modern buildings background"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-[0.05] grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a18] via-[#050a18]/90 to-transparent" />
      </div>

      {/* The Full-Height Red Diagonal Slash */}
      <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 z-10">
        <div className="h-full bg-[#e11d48] -skew-x-[25deg] shadow-[0_0_40px_rgba(225,29,72,0.5)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text Block */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading text-white leading-tight max-w-md"
            >
              Butuh Mitra Teknis untuk Project Anda?
            </motion.h2>
          </div>

          {/* Right Content Block */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-16"
            >
              <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed font-medium">
                Konsultasikan kebutuhan sistem bangunan Anda bersama tim ahli kami. SAT siap menjadi partner terbaik untuk kesuksesan project Anda.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e11d48] text-white px-8 py-4 rounded-sm font-bold flex items-center gap-2 group shadow-xl shadow-red-900/20 tracking-wide"
              >
                HUBUNGI KAMI
                <ArrowRightBoldDuotoneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;

