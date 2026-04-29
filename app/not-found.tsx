import Link from 'next/link';
import { ShieldAlertIcon, ArrowLeftIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center p-6 text-white pt-24 pb-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-3xl bg-red-600/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)]">
            <ShieldAlertIcon className="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight font-heading text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto leading-relaxed">
            Maaf, halaman yang Anda cari mungkin telah dihapus, dipindahkan, atau tidak pernah ada.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all duration-300 shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_-5px_rgba(220,38,38,0.7)] hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Beranda</span>
          </Link>
          
          <Link
            href="/layanan"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all duration-300 w-full sm:w-auto"
          >
            Lihat Layanan Kami
          </Link>
        </div>
      </div>
    </main>
  );
}
