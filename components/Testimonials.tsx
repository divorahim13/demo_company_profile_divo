'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    logo: '/brands/logowika.png',
    company: 'PT WIKA',
    name: 'Tim Facility Management',
    text: 'SAT responsif dalam koordinasi lapangan. Pekerjaan instalasi dan pengecekan sistem berjalan rapi sesuai jadwal.',
  },
  {
    logo: '/brands/logomatahari.png',
    company: 'Matahari',
    name: 'Tim Engineering Store',
    text: 'Program maintenance dari SAT membantu menjaga kenyamanan area operasional dan memudahkan tindak lanjut teknis.',
  },
  {
    logo: '/brands/logopertamina.png',
    company: 'Pertamina',
    name: 'Tim Operasional',
    text: 'Komunikasi teknis jelas, laporan pekerjaan mudah dipahami, dan tim lapangan bekerja dengan standar keselamatan yang baik.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="text-[#e63329] font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Testimony
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-[#0a1122] tracking-tight">
              Kepercayaan Klien pada Kualitas Kerja SAT
            </h2>
          </div>
          <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed">
            Setiap pekerjaan dijalankan dengan komunikasi terbuka, dokumentasi rapi, dan dukungan teknis setelah proyek selesai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -8 }}
              className="surface-card p-6 md:p-7"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="relative h-12 w-28">
                  <Image src={item.logo} alt={`${item.company} logo`} fill sizes="112px" className="object-contain object-left" />
                </div>
                <div className="flex items-center gap-1 text-[#e63329]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <Quote className="mb-4 h-8 w-8 text-slate-200" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                &quot;{item.text}&quot;
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-[#0a1122]">{item.name}</p>
                <p className="text-xs text-slate-400 mt-1">{item.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
