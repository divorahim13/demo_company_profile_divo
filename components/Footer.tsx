'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPointBoldDuotoneIcon, 
  PhoneBoldDuotoneIcon, 
  LetterBoldDuotoneIcon, 
  ClockCircleBoldDuotoneIcon, 
  InstagramFillIcon, 
  TiktokFillIcon,
  YoutubeFillIcon 
} from './icons';
import { contactInfo } from '@/lib/contact';

const Footer = () => {
  return (
    <footer className="bg-[#050a18] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative flex h-12 w-[116px] items-center rounded bg-white px-2 py-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Logo CV. Samudera Abadi Teknik"
                  width={1832}
                  height={758}
                  className="h-auto w-full"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xs font-bold text-white tracking-wide uppercase">CV. Samudera</span>
                <span className="text-xs font-bold text-white tracking-wide uppercase">Abadi Teknik</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Menyediakan layanan sistem bangunan yang andal dan terpercaya untuk berbagai kebutuhan Anda.
            </p>
            <div className="flex space-x-4">
              <SocialIcon label="Instagram" href={contactInfo.socials[0].href} icon={<InstagramFillIcon className="w-4 h-4" />} />
              <SocialIcon label="TikTok" href={contactInfo.socials[1].href} icon={<TiktokFillIcon className="w-4 h-4" />} />
              <SocialIcon label="YouTube" href={contactInfo.socials[2].href} icon={<YoutubeFillIcon className="w-4 h-4" />} />
            </div>
            <div className="space-y-1 text-xs text-gray-500">
              {contactInfo.socials.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  {social.label}: {social.handle}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Kontak Kami */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-300 relative ml-4">
              KONTAK KAMI
              <span className="absolute -left-4 top-0 bottom-0 w-1 bg-[#e63329]" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPointBoldDuotoneIcon className="w-5 h-5 text-[#e63329] shrink-0" />
                <span className="text-sm text-gray-400 leading-snug">
                  {contactInfo.address.short}
                </span>
              </li>
              <li className="flex gap-4">
                <PhoneBoldDuotoneIcon className="w-5 h-5 text-[#e63329] shrink-0" />
                <div className="text-sm text-gray-400 space-y-1">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone.tel} href={`tel:${phone.tel}`} className="block hover:text-white transition-colors">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <LetterBoldDuotoneIcon className="w-5 h-5 text-[#e63329] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-400 break-words hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-300 relative ml-4">
              QUICK LINKS
              <span className="absolute -left-4 top-0 bottom-0 w-1 bg-[#e63329]" />
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/tentang-kami">Tentang Kami</FooterLink>
              <FooterLink href="/layanan">Layanan</FooterLink>
              <FooterLink href="/proyek">Proyek</FooterLink>
              <FooterLink href="/kontak">Kontak</FooterLink>
            </ul>
          </div>

          {/* Column 4: Layanan Kami */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-300 relative ml-4">
              LAYANAN KAMI
              <span className="absolute -left-4 top-0 bottom-0 w-1 bg-[#e63329]" />
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">HVAC & Cooling System</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mechanical & Electrical</li>
              <li className="hover:text-white transition-colors cursor-pointer">CCTV & PABX</li>
              <li className="hover:text-white transition-colors cursor-pointer">Genset</li>
              <li className="hover:text-white transition-colors cursor-pointer">Maintenance & After Sales</li>
            </ul>
          </div>

          {/* Column 5: Jam Operasional */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-300 relative ml-4">
              JAM OPERASIONAL
              <span className="absolute -left-4 top-0 bottom-0 w-1 bg-[#e63329]" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <ClockCircleBoldDuotoneIcon className="w-5 h-5 text-[#e63329] shrink-0" />
                <div>
                  <span className="block text-sm text-white font-bold">Senin - Jumat</span>
                  <span className="block text-xs text-gray-400">08.00 - 17.00 WIB</span>
                </div>
              </li>
              <li className="flex gap-4">
                <PhoneBoldDuotoneIcon className="w-5 h-5 text-[#e63329] shrink-0" />
                <div>
                  <span className="block text-sm text-[#e63329] font-bold">Layanan Darurat (24/7)</span>
                  <a href={`tel:${contactInfo.emergency.tel}`} className="block text-xs text-gray-400 hover:text-white transition-colors">
                    {contactInfo.emergency.display}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} CV. Samudera Abadi Teknik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#e63329] hover:text-white hover:border-[#e63329] transition-all">
    {icon}
  </Link>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

export default Footer;
