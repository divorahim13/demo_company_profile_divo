'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    id: 'pertamina',
    name: 'PT Pertamina (Persero)',
    logo: '/brands/logopertamina.png',
    initials: 'PR',
  },
  {
    id: 'telkom',
    name: 'PT Telkom Indonesia',
    logo: '/brands/logotelkom.png',
    initials: 'TK',
  },
  {
    id: 'indofood',
    name: 'Indofood Sukses Makmur',
    logo: '/brands/logoindofood.png',
    initials: 'ID',
  },
  {
    id: 'wika',
    name: 'PT Wijaya Karya',
    logo: '/brands/logowika.png',
    initials: 'WK',
  },
  {
    id: 'pgn',
    name: 'PGN',
    logo: '/brands/pgnlogo.png',
    initials: 'PG',
  },
  {
    id: 'elnusa',
    name: 'Elnusa',
    logo: '/brands/Elnusa.png',
    initials: 'EL',
  },
  {
    id: 'matahari',
    name: 'Matahari',
    logo: '/brands/logomatahari.png',
    initials: 'MH',
  },
  {
    id: 'pln',
    name: 'PLN',
    logo: '/brands/plnlogo.png',
    initials: 'PL',
  },
  {
    id: 'service-city',
    name: 'Service City',
    logo: '/brands/servicecity.jpeg',
    initials: 'SC',
  },
];

function PartnerLogo({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div className="h-20 w-full rounded-lg border border-slate-200 shadow-sm hover:border-[#e63329]/50 bg-slate-100 flex items-center justify-center text-[11px] md:text-sm font-semibold tracking-[0.08em] text-slate-600 transition-colors">
        {initials}
      </div>
    );
  }

  return (
    <div className="h-20 w-full rounded-lg border border-slate-200 shadow-sm hover:border-[#e63329]/50 bg-white flex items-center justify-center overflow-hidden p-4 transition-colors">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

const Partners = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[#e11d48] font-semibold tracking-[0.15em] text-xs uppercase mb-4"
            >
              <span className="w-10 h-[2px] bg-[#e11d48]"></span>
              Mitra & Klien
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#0a1122] tracking-tight">
              Dipercaya Perusahaan
              <br className="hidden md:block" />
              di Berbagai Sektor
            </h2>
          </div>
          <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed lg:col-span-5 lg:self-end">
            Kolaborasi kami dibangun atas ketepatan eksekusi, komunikasi yang jelas, dan komitmen kualitas layanan teknis di setiap proyek.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="surface-card px-4 py-4 flex items-center justify-center"
              aria-label={partner.name}
            >
              <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} initials={partner.initials} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
