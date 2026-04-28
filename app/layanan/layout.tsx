import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'Layanan HVAC, Mechanical Electrical, CCTV/PABX, Genset, serta maintenance berkala untuk kebutuhan komersial, industri, dan residensial.',
  alternates: { canonical: '/layanan' },
};

export default function LayananLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
