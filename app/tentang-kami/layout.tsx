import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Profil perusahaan, visi, misi, dan tim ahli CV. Samudera Abadi Teknik yang berpengalaman puluhan tahun di bidang HVAC dan M&E.',
  alternates: { canonical: '/tentang-kami' },
};

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
