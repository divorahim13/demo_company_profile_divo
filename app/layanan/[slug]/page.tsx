import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRightBoldDuotoneIcon } from '@/components/icons';
import { getServiceBySlug, serviceDetails } from '@/lib/service-details';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Detail Layanan' };

  return {
    title: `${service.title} - Detail Layanan`,
    description: service.subtitle,
    alternates: { canonical: `/layanan/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const otherServices = serviceDetails.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f8fb] selection:bg-[#e63329] selection:text-white">
      <Navbar />

      <section className="relative min-h-[60vh] bg-[#070d1f] pt-24 overflow-hidden">
        <Image src={service.heroImage} alt={service.title} fill className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/85 to-[#070d1f]/70" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-[#e63329] text-xs font-semibold tracking-[0.18em] uppercase mb-6">Detail Layanan</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">{service.title}</h1>
          <p className="text-slate-300 mt-6 max-w-3xl leading-relaxed">{service.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="surface-card p-7 md:p-8">
              <h2 className="text-2xl font-bold text-[#0a1122] mb-3">Ringkasan Layanan</h2>
              <p className="text-slate-600 leading-relaxed">{service.summary}</p>
            </div>

            <div className="surface-card p-7 md:p-8">
              <h2 className="text-2xl font-bold text-[#0a1122] mb-6">Nilai Tambah Layanan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-[#0a1122] text-white p-5">
                  <p className="text-xs tracking-[0.14em] uppercase text-slate-300">Pendekatan</p>
                  <p className="mt-2 font-semibold">Survey, desain, eksekusi, validasi</p>
                </div>
                <div className="rounded-xl bg-[#10213f] text-white p-5">
                  <p className="text-xs tracking-[0.14em] uppercase text-slate-300">Kualitas</p>
                  <p className="mt-2 font-semibold">Standar kerja terukur dan terdokumentasi</p>
                </div>
                <div className="rounded-xl bg-[#e63329] text-white p-5">
                  <p className="text-xs tracking-[0.14em] uppercase text-white/80">Dukungan</p>
                  <p className="mt-2 font-semibold">Respons cepat dan after-sales aktif</p>
                </div>
              </div>
            </div>

            <div className="surface-card p-7 md:p-8">
              <h2 className="text-2xl font-bold text-[#0a1122] mb-3">Ruang Lingkup Pekerjaan</h2>
              <ul className="space-y-2">
                {service.scope.map((item, index) => (
                  <li key={item} className="text-sm text-slate-700 flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e63329] text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-7 md:p-8">
              <h2 className="text-2xl font-bold text-[#0a1122] mb-3">Deliverables</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-sm text-slate-700 flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e63329]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6 md:p-7">
              <h3 className="text-lg font-semibold text-[#0a1122] mb-4">Penggunaan Umum</h3>
              <div className="flex flex-wrap gap-2">
                {service.useCases.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card p-6 md:p-7">
              <h3 className="text-lg font-semibold text-[#0a1122] mb-4">Indikator Kinerja</h3>
              <div className="space-y-3">
                {service.kpi.map((kpi) => (
                  <div key={kpi.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{kpi.label}</p>
                    <p className="text-base font-semibold text-[#0a1122] mt-1">{kpi.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0a1122] p-7 text-white">
              <p className="text-xs tracking-[0.14em] uppercase text-slate-300">Komitmen SAT</p>
              <h3 className="text-2xl font-bold mt-3 leading-tight">Solusi teknis yang presisi dan berkelanjutan</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Setiap proyek dipantau tim berpengalaman agar target biaya, mutu, dan jadwal tetap terjaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="surface-card p-7 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-7">
              <div>
                <p className="text-[#e63329] text-xs font-semibold tracking-[0.14em] uppercase">Layanan Terkait</p>
                <h3 className="text-2xl font-bold text-[#0a1122] mt-2">Eksplorasi Solusi Lainnya</h3>
              </div>
              <Link href="/layanan" className="text-sm font-semibold text-[#0a1122] hover:text-[#e63329] transition-colors">
                Lihat semua layanan
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/layanan/${item.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-[#e63329]/50 hover:shadow-sm transition-all"
                >
                  <p className="text-lg font-semibold text-[#0a1122] group-hover:text-[#e63329] transition-colors">{item.title}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0a1122]">Ingin Implementasi Layanan Ini?</h3>
            <p className="text-slate-600 mt-2">Diskusikan kebutuhan proyek Anda bersama tim SAT untuk scope dan estimasi yang tepat.</p>
          </div>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#e63329] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c01040] transition-colors">
            Konsultasi Sekarang
            <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
