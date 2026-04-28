import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitra',
  description:
    'Kemitraan CV. Samudera Abadi Teknik bersama brand dan institusi profesional untuk menjamin kualitas material dan layanan.',
  alternates: { canonical: '/mitra' },
};

export default function MitraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
