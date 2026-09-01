import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "", compact = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
      className={`relative group inline-flex items-center gap-2 p-1.5 rounded-full transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 ${
        isDark
          ? "bg-slate-800/90 border border-slate-700/80 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(8,145,178,0.35)]"
          : "bg-slate-100/90 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-amber-400/60 hover:shadow-[0_0_15px_rgba(217,119,6,0.25)]"
      } ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "500px",
      }}
    >
      {/* 3D Track */}
      <div
        className={`relative flex items-center justify-between w-14 h-7 rounded-full p-0.5 transition-colors duration-300 ${
          isDark ? "bg-slate-900" : "bg-slate-200"
        }`}
      >
        {/* Sun Icon inside track */}
        <Sun
          className={`w-3.5 h-3.5 ml-1 transition-opacity duration-300 ${
            isDark ? "opacity-30 text-slate-500" : "opacity-100 text-amber-500"
          }`}
        />

        {/* Moon Icon inside track */}
        <Moon
          className={`w-3.5 h-3.5 mr-1 transition-opacity duration-300 ${
            isDark ? "opacity-100 text-cyan-400" : "opacity-30 text-slate-400"
          }`}
        />

        {/* 3D Sliding Thumb */}
        <div
          className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 transform shadow-md ${
            isDark
              ? "translate-x-7 bg-gradient-to-tr from-cyan-600 to-teal-400 text-white shadow-[0_0_10px_rgba(6,182,212,0.6)] rotate-180"
              : "translate-x-0 bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-900 shadow-[0_0_10px_rgba(251,191,36,0.6)] rotate-0"
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
          ) : (
            <Sun className="w-3.5 h-3.5 fill-current text-amber-900" />
          )}
        </div>
      </div>

      {!compact && (
        <span className="hidden sm:inline-block text-xs font-semibold px-1 text-slate-600 dark:text-slate-300">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
