import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRightBoldDuotoneIcon } from '@/components/icons';
import { getProjectBySlug, projectList } from '@/lib/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: 'Detail Proyek' };
  }

  return {
    title: `${project.title} - Detail Proyek`,
    description: `${project.client} | ${project.scope} | ${project.location}`,
    alternates: { canonical: `/proyek/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white selection:bg-[#e63329] selection:text-white">
      <Navbar />

      <section className="relative min-h-[56vh] bg-[#070d1f] pt-24 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/85 to-[#070d1f]/60" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-[#e63329] text-xs font-semibold tracking-[0.18em] uppercase mb-6">{project.category} • {project.tag}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">{project.title}</h1>
          <p className="text-slate-300 mt-6 max-w-3xl leading-relaxed">{project.overview}</p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {[
              { label: 'Klien', value: project.client },
              { label: 'Lokasi', value: project.location },
              { label: 'Durasi', value: project.duration },
              { label: 'Tim', value: project.teamSize },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.16em] mb-1">{item.label}</p>
                <p className="text-white text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0a1122] mb-3">Latar Belakang Proyek</h2>
              <p className="text-slate-600 leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a1122] mb-3">Tantangan Utama</h2>
              <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a1122] mb-3">Solusi SAT</h2>
              <p className="text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6">
              <h3 className="text-lg font-semibold text-[#0a1122] mb-4">Lingkup Pekerjaan</h3>
              <p className="text-slate-600 text-sm mb-4">{project.scope}</p>
              <ul className="space-y-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e63329]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-lg font-semibold text-[#0a1122] mb-4">Perangkat / Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0a1122] mb-6">Dokumentasi Proyek</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.gallery.map((img, idx) => (
              <div key={`${img}-${idx}`} className="relative h-64 rounded-2xl overflow-hidden border border-slate-100">
                <Image src={img} alt={`${project.title} ${idx + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0a1122]">Butuh Detail Teknis Serupa?</h3>
            <p className="text-slate-600 mt-2">Tim kami siap menyiapkan scope, estimasi, dan rencana implementasi untuk proyek Anda.</p>
          </div>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#e63329] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c01040] transition-colors">
            Konsultasi Proyek
            <ArrowRightBoldDuotoneIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
