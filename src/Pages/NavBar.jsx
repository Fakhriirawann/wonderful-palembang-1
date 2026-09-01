import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function NavBar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "History", path: "/history" },
    { name: "Attractions", path: "/attractions" },
    { name: "Culture", path: "/culture" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-slate-200/50 dark:border-slate-800/80 fixed top-0 z-50 px-4 sm:px-6 transition-colors duration-300">
      <div className="flex-1 flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden mr-1">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-700 dark:text-slate-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl w-56 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`py-2 px-3 rounded-xl font-medium ${
                    location.pathname === link.path
                      ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 font-bold"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="divider my-1 dark:border-slate-800"></div>
            <li className="px-2 py-1">
              <div className="flex items-center justify-between hover:bg-transparent cursor-default">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tema Tampilan</span>
                <ThemeToggle compact />
              </div>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <Link to="/" className="btn btn-ghost flex items-center gap-2.5 px-2 hover:bg-primary/5 rounded-2xl">
          <img
            src="/logo.jpeg"
            alt="Wonderful Palembang"
            className="h-10 sm:h-12 w-auto rounded-lg shadow-sm"
          />
          <div className="flex flex-col items-start text-left">
            <span className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#f59e0b] bg-clip-text text-transparent leading-tight tracking-tight">
              Wonderful
            </span>
            <span className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-[#8C7A66] to-[#C1A175] dark:from-[#fbbf24] dark:to-[#38bdf8] bg-clip-text text-transparent -mt-1 tracking-widest uppercase">
              Palembang
            </span>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`btn btn-ghost btn-sm sm:btn-md rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/15 dark:bg-primary/25 text-primary dark:text-teal-300 font-bold shadow-sm"
                      : "text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Controls (Theme Toggle & CTA) */}
      <div className="flex-none flex items-center gap-3">
        {/* Desktop Theme Switcher */}
        <div className="hidden sm:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile quick theme toggle button */}
        <div className="sm:hidden flex items-center">
          <ThemeToggle compact />
        </div>

        <Link
          to="/contact"
          className="lg:hidden btn btn-sm rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] dark:from-[#d97706] dark:to-[#0891b2] text-white border-0 shadow-md hover:shadow-lg active:scale-95"
        >
          Visit
        </Link>
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn btn-md rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] dark:from-[#d97706] dark:to-[#0891b2] text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Visit Now
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
