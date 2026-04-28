import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi CV. Samudera Abadi Teknik untuk konsultasi pengadaan, instalasi, perbaikan, dan maintenance sistem bangunan.',
  alternates: { canonical: '/kontak' },
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
