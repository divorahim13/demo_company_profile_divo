import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tim',
  description:
    'Profil tim dan struktur organisasi CV. Samudera Abadi Teknik yang mendukung pelaksanaan proyek secara profesional.',
  alternates: { canonical: '/tim' },
};

export default function TimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
