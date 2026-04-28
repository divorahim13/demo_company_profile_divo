'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MedalRibbonStarBoldDuotoneIcon, ClipboardCheckBoldDuotoneIcon } from './icons';

const VisionMission = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl border border-rose-100 bg-rose-50 text-[#e11d48] flex items-center justify-center">
                <MedalRibbonStarBoldDuotoneIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading text-[#0a1122] tracking-tight">Visi</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base italic" style={{fontFamily: 'var(--font-body)'}}>
              &quot;Menjadi perusahaan penyedia layanan sistem bangunan terdepan dan terpercaya di Indonesia dengan standar kualitas terbaik.&quot;
            </p>
          </motion.div>

          {/* Central Image with Parallelogram Mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] hidden lg:block"
          >
            <div className="absolute inset-0 skew-x-[-15deg] overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
              <div className="absolute inset-0 skew-x-[15deg] scale-125">
                <Image 
                  src="/assets/projects/project-6.webp"
                  alt="Modern skyscraper"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl border border-rose-100 bg-rose-50 text-[#e11d48] flex items-center justify-center">
                <ClipboardCheckBoldDuotoneIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading text-[#0a1122] tracking-tight">Misi</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Memberikan solusi teknis yang andal dan efisien.",
                "Menjaga kualitas kerja sesuai standar K3 dan SNI.",
                "Membangun hubungan jangka panjang dengan klien.",
                "Terus berinovasi meningkatkan performa layanan."
              ].map((misi, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2.5 transition-all group-hover:scale-150" />
                  <span className="text-gray-600 leading-tight text-sm" style={{fontFamily: 'var(--font-body)'}}>
                    {misi}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Mobile Image (no mask) */}
          <div className="lg:hidden relative h-[250px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/projects/project-6.webp"
              alt="Modern building"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
