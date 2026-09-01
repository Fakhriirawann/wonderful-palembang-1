import React from "react";

export default function FloatingElements3D({ variant = "hero" }) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* 3D Floating Gem 1 */}
        <div
          className="absolute top-1/4 left-[8%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#C1A175]/30 to-[#316D7C]/40 backdrop-blur-md border border-white/20 shadow-2xl animate-bounce"
          style={{
            animationDuration: "7s",
            transform: "rotate(45deg) perspective(600px) rotateX(25deg) rotateY(25deg)",
          }}
        />

        {/* 3D Floating Sphere with Glow */}
        <div
          className="absolute top-1/3 right-[10%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-400/25 via-teal-500/20 to-cyan-400/30 backdrop-blur-lg border border-white/30 shadow-[0_0_30px_rgba(49,109,124,0.3)] animate-pulse"
          style={{
            animationDuration: "5s",
          }}
        />

        {/* 3D Floating Ring / Torus */}
        <div
          className="absolute bottom-1/4 left-[15%] w-24 h-24 rounded-full border-4 border-dashed border-amber-300/30 dark:border-amber-400/20 animate-spin"
          style={{
            animationDuration: "25s",
            transform: "perspective(800px) rotateX(60deg) rotateZ(30deg)",
          }}
        />

        {/* 3D Floating Mini Cube */}
        <div
          className="absolute bottom-1/3 right-[18%] w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-rose-400/20 backdrop-blur-sm border border-white/20 animate-bounce"
          style={{
            animationDuration: "9s",
            animationDelay: "1.5s",
            transform: "rotate(15deg) perspective(400px) rotateY(40deg)",
          }}
        />
      </div>
    );
  }

  // Section variant
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-2xl"
      />
      <div
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-secondary/10 via-primary/10 to-transparent blur-2xl"
      />
    </div>
  );
}
