'use client';

import Link from 'next/link';
import { PhoneBoldDuotoneIcon } from '@/components/icons';

const whatsappNumber = '6285693596638';
const defaultMessage =
  'Halo tim CV. Samudera Abadi Teknik, saya ingin konsultasi kebutuhan proyek kami.';

export default function WhatsAppSticky() {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
    >
      <PhoneBoldDuotoneIcon className="h-4 w-4" />
      WhatsApp
    </Link>
  );
}
