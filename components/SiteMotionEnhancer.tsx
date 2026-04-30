'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  'main > section:not(:first-of-type) h2',
  'main > section:not(:first-of-type) h3',
  'main > section:not(:first-of-type) article',
  'main > section:not(:first-of-type) .surface-card',
  'main > section:not(:first-of-type) [class*="rounded-2xl"]',
  'main > section:not(:first-of-type) [class*="rounded-3xl"]',
  'main > section:not(:first-of-type) [class*="shadow"]',
  'main > section:not(:first-of-type) img',
  'main > section:not(:first-of-type) li',
].join(',');

export default function SiteMotionEnhancer() {
  const pathname = usePathname();

  React.useEffect(() => {
    document.documentElement.classList.add('motion-ready');

    const heroSections = Array.from(document.querySelectorAll<HTMLElement>('main > section:first-of-type'));
    heroSections.forEach((section) => {
      section.classList.add('page-hero-boost');
    });

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
      .filter((element) => !element.closest('nav') && !element.closest('footer'));

    elements.forEach((element, index) => {
      if (element.classList.contains('auto-reveal')) return;
      element.classList.add('auto-reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
      heroSections.forEach((section) => section.classList.remove('page-hero-boost'));
      elements.forEach((element) => {
        element.classList.remove('auto-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, [pathname]);

  return null;
}
