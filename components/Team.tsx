'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AltArrowLeftBoldDuotoneIcon, AltArrowRightBoldDuotoneIcon } from './icons';

const team = [
  {
    name: 'Dodi Kurniawan',
    role: 'Direktur',
    desc: 'Memimpin strategi dan pengembangan perusahaan.',
    image: '/assets/projects/project-1.webp',
  },
  {
    name: 'Fachrizal A.',
    role: 'Manajer Operasional',
    desc: 'Bertanggung jawab atas pelaksanaan operasional lapangan.',
    image: '/assets/projects/project-4.webp',
  },
  {
    name: 'Rudi Hermawan',
    role: 'Manajer Teknik',
    desc: 'Menjamin kualitas dan keandalan setiap sistem.',
    image: '/assets/projects/project-2.webp',
  },
  {
    name: 'Ahmad Fachreza',
    role: 'Manajer Proyek',
    desc: 'Mengelola eksekusi proyek secara efektif.',
    image: '/assets/projects/project-3.webp',
  },
  {
    name: 'Bayu Setiawan',
    role: 'Supervisor Service',
    desc: 'Memastikan layanan purna jual berjalan dengan responsif.',
    image: '/assets/projects/project-7.webp',
  }
];

const Team = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading text-[#0a1122]">
            Tim <span className="text-[#e63329]">Profesional</span> di Balik Setiap Solusi
          </h2>
          <div className="w-16 h-[2px] bg-[#e63329] mx-auto mt-3" />
        </div>

        <div className="relative group px-12">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#e63329] hover:border-[#e63329] transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <AltArrowLeftBoldDuotoneIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20">
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#e63329] hover:border-[#e63329] transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <AltArrowRightBoldDuotoneIcon className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x hide-scrollbar px-4"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[350px] surface-card overflow-hidden group snap-center"
              >
                <div className="flex h-full">
                  <div className="w-2/5 relative h-[220px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-[#e63329] font-semibold text-xs mb-3 tracking-[0.04em] uppercase">{member.role}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
