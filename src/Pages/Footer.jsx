import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-100 via-teal-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-200 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-black bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: "10s" }} />
                Wonderful Palembang
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Discover the Venice of the East and experience the harmonious blend of ancient Sriwijaya kingdom heritage, culinary artistry, and modern living along the Musi River.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow hover:scale-110 active:scale-95 transition-transform text-white font-bold text-sm"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow hover:scale-110 active:scale-95 transition-transform text-white font-bold text-sm"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-accent to-emerald-500 rounded-2xl flex items-center justify-center shadow hover:scale-110 active:scale-95 transition-transform text-white font-bold text-sm"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  History & Legacy
                </Link>
              </li>
              <li>
                <Link to="/attractions" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Top Attractions
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Culture & Culinary
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-800 dark:text-white">Support & Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  Tourist Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                  COVID & Health Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Wonderful Palembang Tourism. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> for South Sumatra Heritage
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
