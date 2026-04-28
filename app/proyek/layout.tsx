import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyek',
  description:
    'Portofolio proyek CV. Samudera Abadi Teknik di sektor komersial, industri, hospitality, dan residensial.',
  alternates: { canonical: '/proyek' },
};

export default function ProyekLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
