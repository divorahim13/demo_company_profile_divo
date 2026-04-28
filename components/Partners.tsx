'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    id: 'daikin',
    name: 'Daikin',
    logo: 'https://www.google.com/s2/favicons?domain=daikin.com&sz=64',
    category: 'HVAC',
    initials: 'DK',
  },
  {
    id: 'mitsubishi-electric',
    name: 'Mitsubishi Electric',
    logo: 'https://www.google.com/s2/favicons?domain=mitsubishielectric.com&sz=64',
    category: 'HVAC & Building Systems',
    initials: 'ME',
  },
  {
    id: 'schneider-electric',
    name: 'Schneider Electric',
    logo: 'https://www.google.com/s2/favicons?domain=se.com&sz=64',
    category: 'Electrical & Automation',
    initials: 'SE',
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    logo: 'https://www.google.com/s2/favicons?domain=panasonic.com&sz=64',
    category: 'HVAC & Electronics',
    initials: 'PN',
  },
  {
    id: 'trane',
    name: 'Trane Technologies',
    logo: 'https://www.google.com/s2/favicons?domain=trane.com&sz=64',
    category: 'HVAC',
    initials: 'TT',
  },
  {
    id: 'lg',
    name: 'LG Electronics',
    logo: 'https://www.google.com/s2/favicons?domain=lg.com&sz=64',
    category: 'HVAC & Building Solutions',
    initials: 'LG',
  },
];

function PartnerLogo({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div className="h-10 w-10 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center text-[11px] font-semibold tracking-[0.08em] text-slate-600">
        {initials}
      </div>
    );
  }

  return (
    <div className="h-10 w-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden p-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-7 w-7 object-contain"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
              className="surface-card px-5 py-4 flex items-center gap-3 text-slate-600 hover:text-slate-800"
            >
              <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} initials={partner.initials} />
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-[0.01em]">{partner.name}</span>
                <span className="text-[11px] text-slate-400">{partner.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
