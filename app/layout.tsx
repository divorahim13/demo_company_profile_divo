import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';
import WhatsAppSticky from '@/components/WhatsAppSticky';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | CV. Samudera Abadi Teknik',
  },
  description: siteConfig.description,
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
  return (
    <html lang="id" className="overflow-x-hidden">
      <body className="font-body antialiased bg-zinc-900 text-white overflow-x-hidden w-full" suppressHydrationWarning>
        {children}
        <WhatsAppSticky />
      </body>
    </html>
  );
}
