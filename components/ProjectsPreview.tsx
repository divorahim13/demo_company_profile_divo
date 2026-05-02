'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightBoldDuotoneIcon, Buildings2BoldDuotoneIcon, MapPointBoldDuotoneIcon } from './icons';
import { projectList } from '@/lib/projects';
import { Reveal, motionEase } from './motion-kit';

const featuredProjects = projectList.slice(0, 3);

export default function ProjectsPreview() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal direction="right" className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#e63329]">
              <span className="h-[2px] w-10 bg-[#e63329]" />
              Project SAT
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#0a1122] md:text-5xl">
              Gerak Nyata di Lapangan, Terlihat dari Portofolio
            </h2>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="max-w-xl">
            <p className="mb-6 text-sm leading-relaxed text-slate-500 md:text-base">
              Beberapa pekerjaan yang menunjukkan cakupan layanan SAT dari HVAC, maintenance, keamanan, hingga sistem daya cadangan.
            </p>
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#e63329] transition-all hover:gap-3"
            >
              Lihat Semua Project
              <ArrowRightBoldDuotoneIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.12, duration: 0.75, ease: motionEase }}
              whileHover={{ y: -9 }}
              className="surface-card group overflow-hidden"
            >
              <Link href={`/proyek/${project.slug}`} className="block h-full">
                <motion.div
                  className="image-reveal-mask relative aspect-[4/3] overflow-hidden bg-slate-100"
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ delay: index * 0.12 + 0.15, duration: 0.85, ease: motionEase }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/75 via-[#0a1122]/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-5 top-5 rounded bg-[#e63329] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#e63329]"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '42%' }}
                    transition={{ delay: index * 0.12 + 0.55, duration: 0.6, ease: motionEase }}
                  />
                </motion.div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e63329]">
                      {project.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="mb-5 text-xl font-bold leading-snug text-[#0a1122] transition-colors group-hover:text-[#e63329]">
                    {project.title}
                  </h3>
                  <div className="space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Buildings2BoldDuotoneIcon className="h-4 w-4 text-slate-400" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPointBoldDuotoneIcon className="h-4 w-4 text-slate-400" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
