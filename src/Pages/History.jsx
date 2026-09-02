import React from "react";
import { Clock, Globe, Award, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TiltCard3D from "../components/3d/TiltCard3D";

function History() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <NavBar />
      <HeroSection />
      <MainContent />
      <Timeline />
      <KeyFacts />
      <ActionSection />
      <Footer />
    </div>
  );
}

export default History;

function HeroSection() {
  const historyHighlights = [
    { label: "Prasasti Kedukan Bukit", val: "682 M" },
    { label: "Kemaharajaan Sriwijaya", val: "Maritim" },
    { label: "Kesultanan Darussalam", val: "Abad 16" },
    { label: "Kota Tertua di Indonesia", val: "1,340+ Thn" },
  ];

  return (
    <div className="relative w-full min-h-[70vh] mt-16 overflow-hidden flex items-center justify-center pt-20 pb-16">
      {/* High Definition Photographic Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg-hd transform scale-105"
        style={{
          backgroundImage: `url('/masjid_agung.jpg')`,
        }}
      />

      {/* Clean Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 dark:from-slate-950/95 dark:via-slate-950/70 dark:to-slate-950/50 z-0" />

      {/* Hero Content (No icons, non-colliding layout) */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full bg-white/20 dark:bg-slate-900/70 backdrop-blur-md text-white font-semibold text-xs sm:text-sm border border-white/30 dark:border-slate-700 shadow-lg tracking-wide uppercase">
            Warisan Peradaban 1.340+ Tahun
          </span>
        </div>

        <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-2xl leading-tight tracking-tight">
          Sejarah & Kejayaan{" "}
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#C1A175] to-[#67E8F9] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent">
            Palembang
          </span>
        </h1>

        <p className="mb-10 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow">
          Menelusuri jejak kegemilangan Kemaharajaan Maritim Sriwijaya, keagungan Kesultanan Palembang Darussalam, hingga evolusi modern.
        </p>

        {/* Historical Highlights Pills (No icons/emojis) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {historyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/15 dark:bg-slate-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 dark:border-slate-700/60 text-center"
            >
              <div className="font-black text-base sm:text-lg text-amber-300 dark:text-cyan-300">{item.val}</div>
              <div className="text-[11px] sm:text-xs text-white/80 font-medium truncate">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Breadcrumb Navigation */}
        <div className="breadcrumbs text-xs sm:text-sm text-white/80 justify-center">
          <ul className="bg-black/40 dark:bg-slate-950/70 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex border border-white/20 dark:border-slate-700/50">
            <li>
              <Link to="/" className="hover:text-amber-300 transition-colors font-medium">
                Beranda
              </Link>
            </li>
            <li className="text-amber-300 font-bold">Sejarah Palembang</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-24">
        {/* Text Section */}
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold text-xs sm:text-sm mb-6">
            <Globe className="w-4 h-4 mr-2" />
            The Venice of the East
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent leading-tight">
            A City of Timeless Splendor
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Palembang, the historic capital of South Sumatra, Indonesia, holds over 1,300 years of glorious civilization. Known worldwide as the "Venice of the East," it sits majestically along the Musi River, which has served as the lifeblood of commerce and culture.
          </p>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            As the nerve center of the formidable Sriwijaya maritime empire, Palembang connected China, India, and the ancient Malay archipelago. Today, modern progress blends harmoniously with royal heritage.
          </p>
          <Link
            to="/attractions"
            className="btn btn-md sm:btn-lg rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore Historical Sites
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="relative">
          <TiltCard3D maxTilt={10} scale={1.02}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative">
              <img
                src="/ampera-dulu.jpg?height=500&width=700"
                alt="Historic Palembang"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </TiltCard3D>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const epochs = [
    {
      era: "7th Century",
      title: "Sriwijaya Empire",
      desc: "Establishment of the world-famous maritime kingdom, making Palembang an international Buddhist learning and spice trading epicenter.",
      img: "/abad-4.jpg",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      era: "14th Century",
      title: "Majapahit Era",
      desc: "Influence of the Majapahit empire and transitional maritime governance across the Musi river basin.",
      img: "/abad-14.jpg",
      gradient: "from-indigo-500 to-pink-500",
    },
    {
      era: "16th Century",
      title: "Palembang Sultanate",
      desc: "Rise of the Palembang Darussalam Sultanate under Sultan Mahmud Badaruddin, flourishing Islamic arts, and resistance against colonial fleets.",
      img: "/abad-16.jpg",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      era: "Modern Era",
      title: "Progress & Modernity",
      desc: "Host of the 2018 Asian Games, home to Indonesia's first Light Rail Transit (LRT), and a premier Southeast Asian cultural destination.",
      img: "/modern.jpeg",
      gradient: "from-orange-500 to-purple-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-semibold text-xs sm:text-sm mb-4">
          <Clock className="w-4 h-4 mr-2" />
          Historical Journey
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Through the Ages
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {epochs.map((ep, idx) => (
          <TiltCard3D key={idx} maxTilt={14} scale={1.03}>
            <div className="relative rounded-3xl overflow-hidden group shadow-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 h-full p-8 flex flex-col justify-between">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-15 group-hover:opacity-35 transition-opacity duration-500"
                style={{ backgroundImage: `url('${ep.img}')` }}
              />
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${ep.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:rotate-6 transition-transform`}
                  style={{ transform: "translateZ(25px)" }}
                >
                  <Clock className="w-7 h-7" />
                </div>
                <div
                  className={`text-xl font-bold bg-gradient-to-r ${ep.gradient} bg-clip-text text-transparent mb-1`}
                  style={{ transform: "translateZ(18px)" }}
                >
                  {ep.era}
                </div>
                <h3
                  className="text-lg font-bold text-slate-800 dark:text-white mb-3"
                  style={{ transform: "translateZ(14px)" }}
                >
                  {ep.title}
                </h3>
                <p
                  className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                  style={{ transform: "translateZ(8px)" }}
                >
                  {ep.desc}
                </p>
              </div>
            </div>
          </TiltCard3D>
        ))}
      </div>
    </div>
  );
}

function KeyFacts() {
  const facts = [
    {
      icon: Globe,
      title: "Strategic Location",
      desc: "Located strategically along the Musi River, 80km from the Bangka Strait, making it historically accessible for international ocean traders.",
      img: "/ampera.jpeg",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Cultural Heritage",
      desc: "Home to over 50 registered cultural heritage treasures, traditional Limas architecture, songket weaving, and authentic cuko culinary art.",
      img: "/masjid_agung.jpg",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Modern Development",
      desc: "Rapidly advancing modern metropolis with international sport arenas (Jakabaring) and the Ampera skyline while proudly protecting ancient roots.",
      img: "/bundaran.jpg",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facts.map((fact, idx) => {
          const Icon = fact.icon;
          return (
            <TiltCard3D key={idx} maxTilt={12} scale={1.03}>
              <div className="relative rounded-3xl overflow-hidden group shadow-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 h-full p-8 flex flex-col justify-between">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-15 group-hover:opacity-35 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${fact.img}')` }}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${fact.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:rotate-6 transition-transform`}
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 text-slate-800 dark:text-white"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {fact.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {fact.desc}
                  </p>
                </div>
              </div>
            </TiltCard3D>
          );
        })}
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="text-center bg-gradient-to-br from-slate-100 to-teal-50 dark:from-slate-900 dark:via-slate-800/80 dark:to-cyan-950/40 rounded-3xl p-10 sm:p-16 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Experience Palembang Today
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          From ancient Buddhist inscriptions to the lively night river promenade, witness the enduring spirit of Palembang.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/attractions"
            className="btn btn-md sm:btn-lg rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Attractions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            to="/culture"
            className="btn btn-md sm:btn-lg rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Learn About Culture
          </Link>
        </div>
      </div>
    </div>
  );
}