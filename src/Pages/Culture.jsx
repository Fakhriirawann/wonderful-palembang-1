import React from "react";
import {
  Music,
  Utensils,
  Palette,
  Users,
  ArrowRight,
  Sparkles,
  Heart,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeritageModelViewer3D from "../components/3d/HeritageModelViewer3D";
import TiltCard3D from "../components/3d/TiltCard3D";

function Culture() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <NavBar />
      <HeroSection />
      <CultureSection />
      <ActionSection />
      <Footer />
    </div>
  );
}

export default Culture;

function HeroSection() {
  const cultureHighlights = [
    { label: "Tenun Songket Emas", val: "Ratu Kain" },
    { label: "Kuliner Pempek Otentik", val: "Gastronomi" },
    { label: "Tari Gending Sriwijaya", val: "Tari Sakral" },
    { label: "Perahu Bidar Musi", val: "Tradisi Air" },
  ];

  return (
    <div className="relative w-full min-h-[70vh] mt-16 overflow-hidden flex items-center justify-center pt-20 pb-16">
      {/* High Definition Cultural Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg-hd transform scale-105"
        style={{
          backgroundImage: `url('/culture_hd.jpg')`,
        }}
      />

      {/* Clean Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 dark:from-slate-950/95 dark:via-slate-950/70 dark:to-slate-950/50 z-0" />

      {/* Hero Content (No icons, non-colliding layout) */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full bg-white/20 dark:bg-slate-900/70 backdrop-blur-md text-white font-semibold text-xs sm:text-sm border border-white/30 dark:border-slate-700 shadow-lg tracking-wide uppercase">
            Living Heritage & Mahakarya Sriwijaya
          </span>
        </div>

        <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-2xl leading-tight tracking-tight">
          Culture &{" "}
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#C1A175] to-[#67E8F9] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent">
            Heritage
          </span>
        </h1>

        <p className="mb-10 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow">
          Menyelami kekayaan seni tenun songket berlapis emas, kelezatan kuliner pempek otentik, kemegahan tarian istana, dan filosofi luhur wong kito galo.
        </p>

        {/* Culture Highlight Pills (No icons/emojis) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {cultureHighlights.map((item, idx) => (
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
            <li className="text-amber-300 font-bold">Budaya & Seni Palembang</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CultureSection() {
  const pillars = [
    {
      icon: Utensils,
      title: "Culinary Arts",
      desc: "Famous for Pempek, Tekwan, and traditional spices that tell stories of centuries-old maritime trade.",
      bgImage: "/pempek2.jpeg",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Music,
      title: "Traditional Music",
      desc: "Rich musical heritage including Gambus, Batanghari Sembilan, and noble royal melodies.",
      bgImage: "/culture_hd.jpg",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      desc: "Exquisite gold-threaded Songket weaving, authentic wood carvings, and traditional lacquerware.",
      bgImage: "/songket.jpeg",
      gradient: "from-accent to-emerald-600",
    },
    {
      icon: Users,
      title: "Festivals",
      desc: "Vibrant boat races and annual cultural pageants celebrating the enduring spirit of Sriwijaya.",
      bgImage: "/bidar.jpeg",
      gradient: "from-emerald-600 to-primary",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* 3D Heritage Model Viewer Interactive Feature */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-cyan-300 font-semibold text-xs sm:text-sm mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Eksplorasi Objek 3D Interaktif
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Warisan Agung Sriwijaya & Palembang
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Rotasikan objek 3D 360° secara langsung untuk mengamati detail mahkota Tanjak, tenun Songket emas, Rumah Limas, dan Perahu Bidar.
          </p>
        </div>

        <HeritageModelViewer3D />
      </div>

      {/* 4 Cultural Pillars Grid */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold text-xs sm:text-sm mb-4">
          <Sparkles className="w-4 h-4 mr-2" />
          Cultural Treasures
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Discover Our Living Heritage
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <TiltCard3D key={idx} maxTilt={14} scale={1.03}>
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl dark:shadow-slate-950/50 border border-slate-200/80 dark:border-slate-800 h-full flex flex-col justify-between overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10 transition-opacity duration-500 group-hover:opacity-10"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:rotate-6 transition-transform duration-300`}
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-slate-800 dark:text-white"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </TiltCard3D>
          );
        })}
      </div>

      {/* Signature Cuisine Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-24">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 font-semibold text-xs sm:text-sm mb-6">
            <Utensils className="w-4 h-4 mr-2" />
            Signature Cuisine
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent leading-tight">
            Pempek: The Soul of Palembang
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            No visit to Palembang is complete without tasting Pempek, the city's legendary culinary masterpiece.
            Made from freshly caught fish and sagu, served with a rich, tangy tamarind "cuko" sauce, it represents centuries of culinary perfection.
          </p>
          <div className="space-y-4">
            {[
              { num: "1", name: "Pempek Kapal Selam", desc: "Large fishcake parcel filled with whole rich egg, shaped like a submarine." },
              { num: "2", name: "Pempek Lenjer", desc: "Long cylindrical savory roll with delicate chewy texture." },
              { num: "3", name: "Pempek Adaan", desc: "Savory round fish ball seasoned with shallots and fried to golden perfection." },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                  {p.num}
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-800 dark:text-white">{p.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <TiltCard3D maxTilt={8} scale={1.02}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative">
              <img
                src="/pempek.jpeg"
                alt="Pempek dishes"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </TiltCard3D>
        </div>
      </div>

      {/* Traditional Arts & Crafts Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-semibold text-xs sm:text-sm mb-4">
            <Palette className="w-4 h-4 mr-2" />
            Artistic Heritage
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Traditional Arts & Crafts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard3D maxTilt={10} scale={1.02}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-950/50 overflow-hidden border border-slate-200/80 dark:border-slate-800 h-full flex flex-col justify-between group">
              <figure className="relative overflow-hidden h-64">
                <img
                  src="/songket3.jpeg"
                  alt="Songket weaving"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Songket Weaving</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                  Traditional handwoven textile with intricate gold and silver threads, representing the pinnacle of Palembang's royal elegance.
                </p>
                <Link
                  to="/attractions"
                  className="btn btn-sm sm:btn-md rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  Explore Weaving Centers
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </TiltCard3D>

          <TiltCard3D maxTilt={10} scale={1.02}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-950/50 overflow-hidden border border-slate-200/80 dark:border-slate-800 h-full flex flex-col justify-between group">
              <figure className="relative overflow-hidden h-64">
                <img
                  src="/tari.jpeg"
                  alt="Traditional dance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Gending Sriwijaya</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                  The supreme welcome dance recounting the grandeur of the ancient Sriwijaya kingdom, performed with gold fingernail extensions (Tanggai) and regal costumes.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-sm sm:btn-md rounded-full bg-gradient-to-r from-amber-500 to-rose-500 border-0 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  Cultural Performances
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </TiltCard3D>
        </div>
      </div>

      {/* Annual Festivals */}
      <div className="bg-gradient-to-br from-slate-100 to-teal-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-cyan-950/40 rounded-3xl p-8 sm:p-14 mb-24 border border-slate-200/80 dark:border-slate-800">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm mb-4 shadow-sm">
            <Users className="w-4 h-4 mr-2 text-primary" />
            Celebrations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Annual Festivals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "🎭",
              title: "Sriwijaya Festival",
              desc: "Grand cultural celebration featuring theater, royal dances, and international heritage symposiums.",
              img: "/festival.jpeg",
            },
            {
              emoji: "🚣",
              title: "Bidar Race on Musi",
              desc: "Exhilarating traditional long-boat racing on Musi River drawing thousands of cheering spectators.",
              img: "/bidar.jpeg",
            },
            {
              emoji: "🍜",
              title: "Pempek Food Festival",
              desc: "Gastronomic celebration gathering hundreds of artisanal pempek makers and culinary connoisseurs.",
              img: "/pempek4.jpg",
            },
          ].map((fest, idx) => (
            <TiltCard3D key={idx} maxTilt={12} scale={1.03}>
              <div className="relative rounded-3xl overflow-hidden group shadow-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 h-full p-8 text-center flex flex-col justify-between">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-15 group-hover:opacity-35 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${fest.img}')` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-6 transition-transform"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <span className="text-3xl">{fest.emoji}</span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-slate-800 dark:text-white"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {fest.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {fest.desc}
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

function ActionSection() {
  return (
    <div className="text-center justify-center mb-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
        Experience Our Living Culture
      </h2>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
        Join authentic cultural workshops, songket weaving demos, and culinary classes to truly connect with Palembang.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="btn btn-md sm:btn-lg rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Book Cultural Tour
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <Link
          to="/attractions"
          className="btn btn-md sm:btn-lg rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Visit Cultural Sites
        </Link>
      </div>
    </div>
  );
}
