'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ChatRoundBoldDuotoneIcon,
  ClipboardCheckBoldDuotoneIcon,
  HeadphonesRoundSoundBoldDuotoneIcon,
  MagniferBoldDuotoneIcon,
  SettingsBoldDuotoneIcon,
} from './icons';
import { Reveal, motionEase } from './motion-kit';

const steps = [
  {
    number: '01',
    title: 'Konsultasi',
    desc: 'Memahami kebutuhan teknis, target operasional, dan kondisi awal project.',
    icon: <ChatRoundBoldDuotoneIcon className="h-6 w-6" />,
  },
  {
    number: '02',
    title: 'Survey',
    desc: 'Observasi lapangan untuk menentukan jalur kerja, risiko, dan kebutuhan material.',
    icon: <MagniferBoldDuotoneIcon className="h-6 w-6" />,
  },
  {
    number: '03',
    title: 'Perencanaan',
    desc: 'Menyusun penawaran, metode kerja, jadwal, dan dokumen teknis pendukung.',
    icon: <ClipboardCheckBoldDuotoneIcon className="h-6 w-6" />,
  },
  {
    number: '04',
    title: 'Eksekusi',
    desc: 'Pekerjaan dilakukan oleh tenaga ahli dengan kontrol kualitas dan keselamatan.',
    icon: <SettingsBoldDuotoneIcon className="h-6 w-6" />,
  },
  {
    number: '05',
    title: 'Support',
    desc: 'Testing, handover, maintenance, dan after-sales support setelah pekerjaan selesai.',
    icon: <HeadphonesRoundSoundBoldDuotoneIcon className="h-6 w-6" />,
  },
];

export default function ProcessTimeline() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 72%', 'end 72%'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.2 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-slate-100 bg-slate-50 py-24 lg:py-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#e63329]">
            Alur Kerja
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#0a1122] md:text-5xl">
            Proses Teknis yang Rapi dari Awal hingga After Sales
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-slate-200 lg:hidden" />
          <motion.div
            className="absolute left-10 top-0 bottom-0 w-[2px] origin-top bg-[#e63329] lg:hidden"
            style={{ scaleY: lineScale }}
          />

          <div className="absolute left-[10%] right-[10%] top-10 hidden h-[2px] bg-slate-200 lg:block" />
          <motion.div
            className="absolute left-[10%] right-[10%] top-10 hidden h-[2px] origin-left bg-[#e63329] lg:block"
            style={{ scaleX: lineScale }}
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.1, duration: 0.72, ease: motionEase }}
                whileHover={{ y: -8 }}
                className="surface-card group relative ml-20 p-6 lg:ml-0 lg:pt-20"
              >
                <div className="absolute -left-[58px] top-5 lg:left-1/2 lg:top-0 lg:-translate-x-1/2">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#e63329] text-white shadow-lg shadow-[#e63329]/25"
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <div className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-slate-300">
                  Step {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0a1122]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
                <div className="mt-6 h-[2px] w-9 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-14 group-hover:bg-[#e63329]" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
