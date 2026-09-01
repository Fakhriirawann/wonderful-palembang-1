import React from "react";
import { Link } from "react-router-dom";
import { Home, PhoneCall, Sparkles } from "lucide-react";

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 dark:bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-300">
      <div className="text-center max-w-lg mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-cyan-300 text-xs font-bold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>404 Error</span>
        </div>
        <h1 className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-primary via-accent to-secondary dark:from-cyan-400 dark:via-amber-300 dark:to-teal-300 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-800 dark:text-white">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Maaf, halaman tujuan yang Anda cari tidak tersedia atau telah dipindahkan ke destinasi lain.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto btn btn-md rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto btn btn-md rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Bantuan Wisata
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;