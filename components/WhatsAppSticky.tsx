'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneBoldDuotoneIcon } from '@/components/icons';
import { contactInfo, emergencyMessage } from '@/lib/contact';

export default function WhatsAppSticky() {
  const href = `https://wa.me/${contactInfo.emergency.whatsapp}?text=${encodeURIComponent(emergencyMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 right-5 z-[70]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 pulse-ring" />
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi layanan darurat SAT via WhatsApp"
        className="relative inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
      >
        <PhoneBoldDuotoneIcon className="h-4 w-4" />
        WhatsApp
      </Link>
    </motion.div>
  );
}
