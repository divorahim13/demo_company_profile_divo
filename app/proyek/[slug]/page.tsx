import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
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
    <main className="min-h-screen bg-zinc-50 selection:bg-[#e63329] selection:text-white">
      <Navbar />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] bg-[#070d1f] pt-24 pb-16 overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-25" 
            sizes="100vw" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/85 to-[#070d1f]/60" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <div className="w-6 h-px bg-[#e63329] hidden sm:block" />
            <nav className="flex items-center text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Link href="/" className="text-[#e63329] hover:text-white transition-colors">Beranda</Link>
              <span className="mx-2 text-white/30 font-normal">/</span>
              <Link href="/proyek" className="text-[#e63329] hover:text-white transition-colors">Proyek</Link>
              <span className="mx-2 text-white/30 font-normal">/</span>
              <span className="text-white truncate max-w-[150px] sm:max-w-xs">{project.title}</span>
            </nav>
          </div>

          <p className="text-[#e63329] text-[10px] font-bold tracking-widest uppercase mb-4">
            {project.category} • {project.tag}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl mb-6">
            {project.title}
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-3xl leading-relaxed">
            {project.overview}
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl border-t border-white/10 pt-8">
            {[
              { label: 'Klien', value: project.client },
              { label: 'Lokasi', value: project.location },
              { label: 'Durasi', value: project.duration },
              { label: 'Tim', value: project.teamSize },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white text-sm font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1122] mb-4">Latar Belakang Proyek</h2>
              <p className="text-zinc-600 leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1122] mb-4">Tantangan Utama</h2>
              <p className="text-zinc-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1122] mb-4">Solusi SAT</h2>
              <p className="text-zinc-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Lingkup Pekerjaan */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#0a1122] mb-3">Lingkup Pekerjaan</h3>
              <p className="text-zinc-500 text-sm mb-5 leading-relaxed">{project.scope}</p>
              <ul className="space-y-3">
                {project.deliverables.map((item) => (
                  <li key={item} className="text-sm font-medium text-[#0a1122] flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e63329] flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teknologi / Perangkat */}
            <div className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#0a1122] mb-4">Perangkat & Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-zinc-100 rounded-md text-[11px] font-bold text-zinc-600 uppercase tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── GALLERY SECTION ────────────────────────────────────────── */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-10 text-center md:text-left">
            <span className="text-[#e63329] font-bold text-[10px] tracking-widest uppercase mb-2 block">DOKUMENTASI</span>
            <h2 className="text-3xl font-bold text-[#0a1122]">Galeri Proyek</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div key={`${img}-${idx}`} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm group">
                <Image 
                  src={img} 
                  alt={`${project.title} ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" 
                  priority
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  );
}
