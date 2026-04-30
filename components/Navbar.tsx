'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneBoldDuotoneIcon, HamburgerMenuBoldDuotoneIcon, CloseCircleBoldDuotoneIcon } from './icons';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Mitra', href: '/mitra' },
  { label: 'Tim', href: '/tim' },
  { label: 'Kontak', href: '/kontak' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0e1c2f]/92 backdrop-blur-md border-b border-white/10 py-0 shadow-md'
          : 'bg-transparent border-transparent py-1'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <motion.div
              whileHover={{ y: -1, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-10 w-[98px] items-center rounded bg-white px-2 py-1 shadow-sm"
            >
              <Image
                src="/logo.png"
                alt="Logo CV. Samudera Abadi Teknik"
                width={1832}
                height={758}
                className="h-auto w-full"
                priority
              />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-[1]">
              <span className="font-heading text-[13px] font-semibold tracking-[0.04em] text-white">
                CV. Samudera
              </span>
              <span className="font-heading text-[13px] font-semibold tracking-[0.04em] text-white">
                Abadi Teknik
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`motion-underline relative font-heading text-[14px] font-semibold tracking-[0.02em] transition-colors py-1.5 group flex items-center ${
                  isActive(link.href) ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="navbar-active-line"
                    className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-[#e63329] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/kontak">
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="sheen-button hidden lg:flex items-center space-x-2 bg-[#e63329] text-white px-4 py-2.5 rounded-md font-heading text-[12px] font-semibold tracking-[0.03em] cursor-pointer shadow-md shadow-[#e63329]/20"
              >
                <PhoneBoldDuotoneIcon className="w-3.5 h-3.5" />
                <span>Hubungi Kami</span>
              </motion.div>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseCircleBoldDuotoneIcon className="w-6 h-6" /> : <HamburgerMenuBoldDuotoneIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0e1c2f] border-t border-white/5 overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
              }}
              className="px-4 py-3 space-y-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'bg-[#e63329]/10 text-[#e63329]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                <Link
                  href="/kontak"
                  onClick={() => setMobileOpen(false)}
                  className="sheen-button block mt-3 bg-[#e63329] text-white px-4 py-2.5 text-sm font-semibold text-center rounded-md hover:bg-[#c01040] transition-colors"
                >
                  <span>Hubungi Kami</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#e63329]"
        style={{ scaleX: progressScale }}
      />
    </nav>
  );
};

export default Navbar;
