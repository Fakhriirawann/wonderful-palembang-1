import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function PalembangSilhouetteBackground({
  variant = "fixed", // "fixed" | "section" | "footer"
  className = "",
  opacityClass = "",
}) {
  const { isDark } = useTheme();

  const isFixed = variant === "fixed";

  return (
    <div
      aria-hidden="true"
      className={`${
        isFixed ? "fixed inset-0 pointer-events-none z-0 overflow-hidden" : "relative w-full overflow-hidden pointer-events-none"
      } select-none ${className}`}
    >
      {/* 1. Subtle Photographic Landscape Duotone Backdrop */}
      <div
        className={`absolute inset-0 bg-cover bg-bottom bg-no-repeat transition-opacity duration-700 ${
          opacityClass || (isDark ? "opacity-[0.06] mix-blend-screen filter grayscale contrast-125" : "opacity-[0.04] mix-blend-multiply filter contrast-110")
        }`}
        style={{
          backgroundImage: `url('/ampera.jpeg')`,
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 85%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 85%)",
        }}
      />

      {/* 2. Secondary Musi River Water Texture Texture Layer */}
      <div
        className={`absolute bottom-0 inset-x-0 h-96 bg-cover bg-center transition-opacity duration-700 ${
          isDark ? "opacity-[0.04] mix-blend-screen" : "opacity-[0.025] mix-blend-multiply"
        }`}
        style={{
          backgroundImage: `url('/musi.jpeg')`,
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* 3. Detailed Vector Skyline Silhouette (Ampera Bridge, Masjid Agung, Monpera, LRT, Musi River) */}
      <div className="absolute bottom-0 inset-x-0 w-full flex items-end justify-center pointer-events-none">
        <svg
          viewBox="0 0 1920 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full h-44 sm:h-56 md:h-72 transition-all duration-700 ${
            isDark ? "text-cyan-400 opacity-[0.08]" : "text-[#316D7C] opacity-[0.05]"
          }`}
        >
          {/* Distant City Skyline Layer */}
          <path
            d="M0,320 L0,260 L40,260 L40,245 L70,245 L70,260 L120,260 L120,230 L150,230 L150,260 L220,260 L220,215 L250,215 L250,260 L310,260 L310,240 L340,240 L340,260 L420,260 L450,260 L450,225 L475,225 L475,260 L540,260 L570,260 L570,200 L595,200 L595,260 L680,260 L720,260 L720,240 L750,240 L750,260 L850,260 L850,220 L880,220 L880,260 L960,260 L990,260 L990,210 L1020,210 L1020,260 L1100,260 L1140,260 L1140,235 L1170,235 L1170,260 L1260,260 L1300,260 L1300,215 L1335,215 L1335,260 L1420,260 L1460,260 L1460,240 L1490,240 L1490,260 L1580,260 L1610,260 L1610,220 L1640,220 L1640,260 L1720,260 L1760,260 L1760,230 L1790,230 L1790,260 L1860,260 L1920,260 L1920,320 Z"
            fill="currentColor"
            opacity="0.4"
          />

          {/* Masjid Agung Palembang Dome & Minarets Silhouette (Left Side) */}
          {/* Minaret 1 */}
          <rect x="260" y="140" width="8" height="120" fill="currentColor" />
          <polygon points="260,140 264,120 268,140" fill="currentColor" />
          {/* Main Dome */}
          <path d="M 285 260 Q 285 170 320 170 Q 355 170 355 260 Z" fill="currentColor" />
          <polygon points="318,170 320,150 322,170" fill="currentColor" />

          {/* Monpera Monument Silhouette (Right Mid Side) */}
          <polygon points="1520,260 1535,130 1545,130 1560,260" fill="currentColor" />
          <polygon points="1530,260 1540,110 1550,260" fill="currentColor" opacity="0.8" />

          {/* LRT Viaduct Bridge Structure Silhouette */}
          <rect x="0" y="255" width="1920" height="6" fill="currentColor" />
          {/* Viaduct Pillars */}
          {Array.from({ length: 24 }).map((_, i) => (
            <rect key={i} x={i * 80 + 30} y="255" width="8" height="35" fill="currentColor" />
          ))}

          {/* Iconic Jembatan Ampera Center Structure Silhouette */}
          {/* Bridge Road Deck */}
          <rect x="640" y="235" width="640" height="8" fill="currentColor" />

          {/* Tower 1 (West Tower) */}
          <rect x="780" y="60" width="16" height="195" fill="currentColor" />
          <rect x="830" y="60" width="16" height="195" fill="currentColor" />
          {/* Tower 1 Crossbars */}
          <rect x="780" y="65" width="66" height="14" fill="currentColor" />
          <rect x="780" y="125" width="66" height="12" fill="currentColor" />
          <rect x="780" y="185" width="66" height="10" fill="currentColor" />
          {/* Tower 1 Crowns */}
          <polygon points="780,60 788,38 796,60" fill="currentColor" />
          <polygon points="830,60 838,38 846,60" fill="currentColor" />

          {/* Tower 2 (East Tower) */}
          <rect x="1080" y="60" width="16" height="195" fill="currentColor" />
          <rect x="1130" y="60" width="16" height="195" fill="currentColor" />
          {/* Tower 2 Crossbars */}
          <rect x="1080" y="65" width="66" height="14" fill="currentColor" />
          <rect x="1080" y="125" width="66" height="12" fill="currentColor" />
          <rect x="1080" y="185" width="66" height="10" fill="currentColor" />
          {/* Tower 2 Crowns */}
          <polygon points="1080,60 1088,38 1096,60" fill="currentColor" />
          <polygon points="1130,60 1138,38 1146,60" fill="currentColor" />

          {/* Suspension Main & Stay Cables */}
          {/* West Tower Cables */}
          <line x1="790" y1="70" x2="650" y2="235" stroke="currentColor" strokeWidth="2" />
          <line x1="790" y1="70" x2="710" y2="235" stroke="currentColor" strokeWidth="1.5" />
          <line x1="840" y1="70" x2="900" y2="235" stroke="currentColor" strokeWidth="1.5" />
          <line x1="840" y1="70" x2="960" y2="235" stroke="currentColor" strokeWidth="2" />

          {/* East Tower Cables */}
          <line x1="1090" y1="70" x2="960" y2="235" stroke="currentColor" strokeWidth="2" />
          <line x1="1090" y1="70" x2="1020" y2="235" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1140" y1="70" x2="1210" y2="235" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1140" y1="70" x2="1270" y2="235" stroke="currentColor" strokeWidth="2" />

          {/* Traditional Boat (Perahu Bidar / Ketek) on Musi River */}
          <path d="M 680 290 Q 710 300 740 290 Q 710 286 680 290 Z" fill="currentColor" />
          <rect x="705" y="280" width="10" height="8" fill="currentColor" />
          <polygon points="680,290 670,285 680,288" fill="currentColor" />

          {/* Musi River Water Line and Ripples */}
          <path
            d="M0,285 Q 240,280 480,285 T 960,285 T 1440,285 T 1920,285 L 1920,320 L 0,320 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M0,298 Q 240,295 480,298 T 960,298 T 1440,298 T 1920,298 L 1920,320 L 0,320 Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* 4. Ambient Radial Glow Effect */}
      <div
        className={`absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t transition-opacity duration-700 ${
          isDark
            ? "from-cyan-950/20 via-teal-900/10 to-transparent"
            : "from-amber-500/5 via-teal-500/5 to-transparent"
        }`}
      />
    </div>
  );
}
