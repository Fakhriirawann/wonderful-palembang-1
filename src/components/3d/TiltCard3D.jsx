import React, { useState, useRef } from "react";

export default function TiltCard3D({
  children,
  className = "",
  glare = true,
  maxTilt = 12,
  scale = 1.02,
  style = {},
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center from -1 to 1
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    setCoords({
      x: Math.max(-1, Math.min(1, mouseX)),
      y: Math.max(-1, Math.min(1, mouseY)),
      rawX: e.clientX - rect.left,
      rawY: e.clientY - rect.top,
      width,
      height,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Rotation: tilting towards cursor
  const rotX = isHovered ? -coords.y * maxTilt : 0;
  const rotY = isHovered ? coords.x * maxTilt : 0;
  const currentScale = isHovered ? scale : 1;

  // Glare position percentage
  const glareX = coords.rawX ? (coords.rawX / coords.width) * 100 : 50;
  const glareY = coords.rawY ? (coords.rawY / coords.height) * 100 : 50;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${currentScale}, ${currentScale}, ${currentScale})`,
        ...style,
      }}
    >
      {/* Card Content with 3D depth */}
      <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
        {children}

        {/* Dynamic Specular Glare Effect */}
        {glare && (
          <div
            className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ${
              isHovered ? "opacity-35 dark:opacity-25" : "opacity-0"
            }`}
            style={{
              background: `radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255,255,255,0.8), rgba(255,255,255,0) 80%)`,
              mixBlendMode: "overlay",
              zIndex: 30,
            }}
          />
        )}
      </div>
    </div>
  );
}
