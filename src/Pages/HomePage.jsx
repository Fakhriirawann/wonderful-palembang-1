import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  Play,
  MapPin,
  Users,
  Calendar,
  Camera,
  Star,
  ArrowRight,
  Sparkles,
  Layers,
  Compass,
} from "lucide-react";
import AmperaCanvas3D from "../components/3d/AmperaCanvas3D";
import TiltCard3D from "../components/3d/TiltCard3D";
import FloatingElements3D from "../components/3d/FloatingElements3D";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <NavBar />
      <HeroSection />
      <Interactive3DSection />
      <StatsSection />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center pt-20 pb-16">
      {/* High Definition Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-105 dark:brightness-85 dark:contrast-110"
      >
        <source src="/vid-banner.mp4" type="video/mp4" />
      </video>

      {/* Clean Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/40 dark:from-slate-950/90 dark:via-slate-950/40 dark:to-slate-950/50 z-0" />

      {/* Hero Content (No icons, non-colliding layout) */}
      <div className="relative z-10 text-center text-white px-4 py-8 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full bg-white/20 dark:bg-slate-900/70 backdrop-blur-md text-white font-semibold text-xs sm:text-sm border border-white/30 dark:border-slate-700 shadow-lg tracking-wide uppercase">
            Discover Indonesia's Hidden Gem
          </span>
        </div>

        <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-2xl leading-tight tracking-tight">
          Wonderful{" "}
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#C1A175] to-[#67E8F9] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent">
            Palembang
          </span>
        </h1>

        <p className="mb-10 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
          Discover the Venice of the East, where ancient traditions meet modern innovation.
          Experience the rich culture, delicious cuisine, and warm hospitality along the mighty Musi River.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/attractions"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Explore Attractions
          </Link>
          <Link
            to="/history"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 dark:bg-slate-900/60 backdrop-blur-md text-white font-bold border border-white/40 dark:border-slate-700 hover:bg-white/30 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Learn History
          </Link>
        </div>
      </div>
    </div>
  );
}

function Interactive3DSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 dark:from-cyan-950/80 dark:to-teal-950/80 text-primary dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-4 border border-primary/20 dark:border-cyan-800/40">
            <Compass className="w-4 h-4 mr-2" />
            Eksplorasi Virtual 3D Real-Time
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
            Ikon Jembatan Ampera & Sungai Musi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Putar sudut pandang 360°, amati pergerakan perahu ketek dan gemerlap lampu malam Ampera
            yang berganti dinamis sesuai tema Light/Dark mode.
          </p>
        </div>

        {/* 3D Canvas Visualizer */}
        <div className="max-w-5xl mx-auto">
          <AmperaCanvas3D />
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "1.7M+",
      label: "Population",
      desc: "Friendly locals ready to welcome you warmly",
      bgImage: "/lrt.jpeg?height=400&width=600",
      gradient: "from-[#316D7C] to-[#8C7A66]",
      borderHover: "hover:border-[#316D7C]/30",
    },
    {
      icon: Calendar,
      value: "682 AD",
      label: "Founded",
      desc: "Over 1,300 years of rich historic legacy",
      bgImage: "/ampera-dulu.jpg?height=400&width=600",
      gradient: "from-[#8C7A66] to-[#C1A175]",
      borderHover: "hover:border-[#8C7A66]/30",
    },
    {
      icon: MapPin,
      value: "400 km²",
      label: "City Area",
      desc: "Urban paradise majestically along the Musi River",
      bgImage: "/musi.jpeg?height=400&width=600",
      gradient: "from-[#C1A175] to-[#316D7C]",
      borderHover: "hover:border-[#C1A175]/30",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <TiltCard3D key={idx} maxTilt={14} scale={1.03}>
                <div className={`relative bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl dark:shadow-slate-950/50 p-8 border border-slate-100 dark:border-slate-700/70 ${stat.borderHover} overflow-hidden h-full flex flex-col justify-between`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-15 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url('${stat.bgImage}')`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg text-white`}
                        style={{ transform: "translateZ(25px)" }}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-right" style={{ transform: "translateZ(20px)" }}>
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] dark:from-cyan-400 dark:via-amber-300 dark:to-teal-300 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 font-semibold text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2" style={{ transform: "translateZ(10px)" }}>
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Section3() {
  const experiences = [
    {
      img: "/museum.jpeg",
      title: "Rich Heritage",
      desc: "Explore ancient Srivijaya kingdom ruins and traditional architecture that tells stories of centuries past.",
      tag: "Heritage",
      color: "border-primary/20",
    },
    {
      img: "/pempek.jpeg",
      title: "Culinary Paradise",
      desc: "Taste authentic Pempek, Tekwan, and other local delicacies that will tantalize your taste buds.",
      tag: "Gastronomy",
      color: "border-amber-500/20",
    },
    {
      img: "/ampera.jpeg",
      title: "River City",
      desc: "Experience life along the mighty Musi River and its vibrant floating culture and scenic bridges.",
      tag: "River Culture",
      color: "border-cyan-500/20",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-r from-slate-50 to-teal-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary dark:text-teal-300 font-semibold text-sm mb-4">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Palembang
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Unforgettable Experiences
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Discover what makes our historic city magical and creates lasting memories for every traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <TiltCard3D key={idx} maxTilt={10} scale={1.03}>
              <div className={`bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-slate-950/40 border border-slate-200/80 dark:border-slate-700/70 h-full flex flex-col justify-between overflow-hidden group`}>
                <div>
                  <div className="w-full h-52 mb-6 overflow-hidden rounded-2xl shadow-md relative">
                    <img
                      src={exp.img}
                      alt={exp.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 shadow">
                      {exp.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors" style={{ transform: "translateZ(15px)" }}>
                    {exp.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed" style={{ transform: "translateZ(8px)" }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#316D7C] via-[#8C7A66] to-[#C1A175] dark:from-slate-900 dark:via-slate-800 dark:to-cyan-950 relative overflow-hidden transition-colors duration-300">
      {/* 3D Floating Decorations */}
      <FloatingElements3D variant="section" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Ready to Explore{" "}
            <span className="bg-gradient-to-r from-[#FDE68A] to-[#FBBF24] dark:from-cyan-300 dark:to-amber-300 bg-clip-text text-transparent">
              Palembang?
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Join thousands of travelers who have fallen in love with our rich heritage,
            culinary wonders, and stunning river landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn btn-lg rounded-full bg-white dark:bg-cyan-500 text-primary dark:text-slate-950 font-bold hover:bg-slate-100 dark:hover:bg-cyan-400 border-0 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Plan Your Visit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/attractions"
              className="btn btn-lg rounded-full bg-white/20 dark:bg-slate-900/60 backdrop-blur-md text-white border-white/40 dark:border-slate-700 hover:bg-white/30 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Camera className="w-5 h-5 mr-2" />
              View Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
