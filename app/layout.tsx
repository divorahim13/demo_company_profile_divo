import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';
import { contactInfo } from '@/lib/contact';
import WhatsAppSticky from '@/components/WhatsAppSticky';
import SiteMotionEnhancer from '@/components/SiteMotionEnhancer';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | CV. Samudera Abadi Teknik',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Schema for AEO (Answer Engine Optimization) & LocalBusiness SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness', 'Organization'],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/brand/sat-logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia'
    },
    knowsAbout: [
      'HVAC Installation',
      'HVAC Maintenance',
      'Mechanical Electrical Plumbing (MEP)',
      'CCTV Installation',
      'PABX Systems',
      'Generator Set (Genset) Maintenance',
      'Cooling Systems'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.emergency.tel,
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English']
    },
    sameAs: contactInfo.socials.map((social) => social.href),
  };

  return (
    <html lang="id" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-zinc-900 text-white overflow-x-hidden w-full" suppressHydrationWarning>
        {children}
        <SiteMotionEnhancer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
