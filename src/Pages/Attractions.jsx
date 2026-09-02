import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  MapPin,
  Clock,
  Star,
  Camera,
  ArrowRight,
  Sparkles,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard3D from "../components/3d/TiltCard3D";

function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const attractionsData = [
    {
      name: "Great Mosque of Palembang",
      description: "Beautiful mosque with traditional Palembang architecture and historic royal heritage.",
      image: "/masjid-agung.jpeg",
      rating: 4.6,
      category: "Religious",
      color: "from-[#C1A175] to-[#8C7A66]",
      link: "https://id.wikipedia.org/wiki/Masjid_Agung_Palembang",
    },
    {
      image: "/museum.jpeg",
      name: "Museum Sultan Mahmud Badaruddin II",
      category: "Museum",
      color: "from-[#8C7A66] to-[#316D7C]",
      rating: 4.5,
      description: "Historical museum preserving precious artifacts of the Palembang Darussalam Sultanate.",
      link: "https://id.wikipedia.org/wiki/Museum_Sultan_Mahmud_Badaruddin_II",
    },
    {
      name: "Kemaro Island",
      description: "Sacred island with Chinese pagoda, love tree legend, and peaceful river vistas.",
      image: "/kemaro.jpeg",
      rating: 4.6,
      category: "Cultural",
      color: "from-[#8C7A66] to-[#C1A175]",
      link: "https://www.tripadvisor.co.id/Attraction_Review-g608501-d3195899-Reviews-Kemaro_Island-Palembang_South_Sumatra_Sumatra.html",
    },
    {
      name: "Kuto Besak Fortress",
      description: "18th-century defensive fort used by the Sultanate, now a vibrant promenade by the river.",
      image: "/benteng.jpeg",
      rating: 4.5,
      category: "Historical",
      color: "from-[#8C7A66] to-[#316D7C]",
      link: "https://palembang.go.id/charming/benteng-kuto-besak",
    },
    {
      name: "Al-Qur’an Al-Akbar",
      description: "The world's largest carved wooden Qur’an, showcasing magnificent Islamic artistry in Palembang.",
      image: "/quran.jpeg",
      rating: 4.6,
      category: "Religious",
      color: "from-[#C1A175] to-[#316D7C]",
      link: "https://palembang.go.id/charming/al-qur-an-akbar",
    },
    {
      name: "Cheng Ho Mosque",
      description: "A mosque with distinctive Chinese architectural pagodas dedicated to Admiral Cheng Ho.",
      image: "/masjid-chengho.jpeg",
      rating: 4.5,
      category: "Religious",
      color: "from-[#8C7A66] to-[#C1A175]",
      link: "https://indonesiakaya.com/pustaka-indonesia/masjid-cheng-ho-simbol-palembang-yang-multikultur/",
    },
    {
      name: "Siguntang Hill",
      description: "Sacred historical hill believed to be the resting place of ancient Sriwijayan royalty.",
      image: "/Bukit-siguntang.jpeg",
      rating: 4.3,
      category: "Historical",
      color: "from-[#316D7C] to-[#C1A175]",
      link: "https://indonesiakaya.com/pustaka-indonesia/mengenang-kejayaan-palembang-dari-bukit-siguntang/",
    },
    {
      name: "Jakabaring Sport City",
      description: "World-class sports and eco-park complex with international stadiums and serene lakes.",
      image: "/jakabaring.jpeg",
      rating: 4.4,
      category: "Recreational",
      color: "from-[#316D7C] to-[#C1A175]",
      link: "https://dispora.palembang.go.id/berita/jakabaring-sport-city-wisata-murah-meriah-ikon-kebanggaan-warga-palembang",
    },
    {
      name: "Balaputradewa Museum",
      description: "Museum exhibiting South Sumatra's archaeological treasures, including the iconic Rumah Limas.",
      image: "/museum_balput.jpg",
      rating: 4.5,
      category: "Museum",
      color: "from-[#316D7C] to-[#8C7A66]",
      link: "https://indonesiakaya.com/pustaka-indonesia/menelusuri-sejarah-palembang-di-museum-balaputera-dewa/",
    },
  ];

  const categories = ["All", "Religious", "Historical", "Museum", "Cultural", "Recreational"];

  const filteredAttractions =
    selectedCategory === "All"
      ? attractionsData
      : attractionsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <NavBar />
      <HeroSection />
      <TextSection />

      {/* Category Filter Bar */}
      <div className="container mx-auto px-4 pt-12 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <AttractionsGrid attractions={filteredAttractions} />
      <div className="container mx-auto px-4 py-16">
        <FeaturedSection />
      </div>
      <div className="container mx-auto px-4 pb-20">
        <ActionSection />
      </div>
      <Footer />
    </div>
  );
}

export default Attractions;

function HeroSection() {
  const attractionStats = [
    { label: "Destinasi Ikonik", val: "9+ Lokasi", icon: "📍" },
    { label: "Wisata Religi & Budaya", val: "Internasional", icon: "🕌" },
    { label: "Rating Kepuasan", val: "4.8 / 5.0", icon: "⭐" },
    { label: "Akses Transportasi", val: "LRT & Ketek", icon: "🚆" },
  ];

  return (
    <div className="hero min-h-[75vh] mt-16 relative overflow-hidden flex items-center justify-center transition-colors duration-500">
      {/* 1. Photographic Panoramic Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-110 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('/ampera2.jpeg')`,
        }}
      />

      {/* 2. Secondary Destination Visual Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url('/benteng.jpeg')`,
        }}
      />

      {/* 3. Luxurious Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-[#316D7C]/60 to-[#8C7A66]/70 dark:from-slate-950 dark:via-slate-900/80 dark:to-cyan-950/70 z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/25 to-black/60 z-0" />

      {/* 4. 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-[7%] w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-400/25 to-teal-500/20 backdrop-blur-md border border-white/20 shadow-2xl animate-bounce"
          style={{ animationDuration: "7s", transform: "rotate(45deg) perspective(600px) rotateX(20deg)" }}
        />
        <div
          className="absolute bottom-1/3 left-[8%] w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/25 to-rose-500/20 backdrop-blur-md border border-white/20 shadow-2xl animate-pulse"
          style={{ animationDuration: "5s", transform: "rotate(-15deg) perspective(500px) rotateY(25deg)" }}
        />
      </div>

      {/* 5. Main Hero Content */}
      <div className="hero-content text-center text-white relative z-10 px-4 py-16 max-w-5xl">
        <div>
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-slate-900/70 backdrop-blur-md text-white/95 text-xs sm:text-sm font-semibold border border-white/30 dark:border-slate-700 shadow-xl">
              <Camera className="w-4 h-4 mr-2 text-cyan-300" />
              Destinasi Unggulan & Pesona Alam Palembang
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl leading-tight tracking-tight">
            Top{" "}
            <span className="bg-gradient-to-r from-[#FDE68A] via-[#C1A175] to-[#67E8F9] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent">
              Attractions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto drop-shadow">
            Jelajahi landmark legendaris, kemegahan arsitektur religi, museum bersejarah, dan keindahan pulau terapung di jantung Sumatera Selatan.
          </p>

          {/* Attraction Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
            {attractionStats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/15 dark:bg-slate-900/60 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/25 dark:border-slate-700/60 shadow-lg text-center hover:scale-105 hover:bg-white/25 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl mb-1">{item.icon}</div>
                <div className="font-black text-base sm:text-lg text-amber-300 dark:text-cyan-300">{item.val}</div>
                <div className="text-[10px] sm:text-xs text-white/80 font-medium truncate">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Breadcrumb Navigation */}
          <div className="breadcrumbs text-xs sm:text-sm text-white/80 justify-center">
            <ul className="bg-black/30 dark:bg-slate-950/60 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex border border-white/20 dark:border-slate-700/50">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition-colors font-medium">
                  Beranda
                </Link>
              </li>
              <li className="text-cyan-300 font-bold">Destinasi Wisata</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] dark:from-cyan-400 dark:via-amber-300 dark:to-teal-300 bg-clip-text text-transparent pb-1">
          A Journey Beyond the Ordinary
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          From ancient royal monuments to breathtaking riverfront vistas, explore the rich soul of Palembang — where heritage meets modern splendor.
        </p>

        <div className="flex justify-center items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
        </div>
      </div>
    </section>
  );
}

function AttractionsGrid({ attractions }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <TiltCard3D key={index} maxTilt={12} scale={1.03}>
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-950/50 overflow-hidden border border-slate-200/80 dark:border-slate-800 h-full flex flex-col justify-between group transition-colors duration-300">
                <div>
                  <figure className="relative overflow-hidden h-60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4" style={{ transform: "translateZ(30px)" }}>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-bold bg-gradient-to-r ${item.color} text-white shadow-lg`}
                      >
                        {item.category}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4" style={{ transform: "translateZ(30px)" }}>
                      <div className="flex items-center bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full shadow-lg">
                        <Star className="w-3.5 h-3.5 text-yellow-300 mr-1 fill-current" />
                        <span className="text-xs font-bold">{item.rating}</span>
                      </div>
                    </div>
                  </figure>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                  <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-primary" />
                    <span>Palembang</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-xs font-bold rounded-full px-4 py-2 bg-gradient-to-r ${item.color} text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300`}
                  >
                    <Camera className="w-3.5 h-3.5 mr-1.5" />
                    View Details
                  </a>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[350px]">
          <img
            src="/ampera2.jpeg"
            alt="Ampera Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <div className="badge bg-gradient-to-r from-teal-600 via-amber-600 to-amber-500 border-0 text-white shadow-lg text-xs font-bold px-4 py-3">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Featured Landmark
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Jembatan Ampera
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
            The iconic Ampera Bridge is not just a means of transportation but the crowning symbol of Palembang itself. Built in 1965, this magnificent bridge spans 1,177 meters across the Musi River and offers breathtaking views of the city skyline, especially during sunset and illuminated night hours.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
              <span className="font-bold text-lg text-slate-800 dark:text-white">4.8/5</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs ml-1.5">(2,847 reviews)</span>
            </div>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs">
              <Clock className="w-4 h-4 mr-1.5 text-primary" />
              <span>Buka 24 Jam</span>
            </div>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://palembang.go.id/charming/jembatan-ampera"
              className="inline-flex items-center btn btn-md rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Pelajari Selengkapnya
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="text-center bg-gradient-to-br from-teal-900/10 via-cyan-900/10 to-amber-900/10 dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900 rounded-3xl p-10 sm:p-16 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent dark:from-cyan-400 dark:to-teal-300 bg-clip-text text-transparent">
        Rencanakan Perjalanan Sempurna Anda
      </h2>
      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
        Butuh rekomendasi rencana perjalanan? Tim pemandu lokal siap membantu Anda memaksimalkan kunjungan di Palembang.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="btn btn-md sm:btn-lg rounded-full bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Hubungi Pemandu
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <Link
          to="/culture"
          className="btn btn-md sm:btn-lg rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Jelajahi Budaya
        </Link>
      </div>
    </div>
  );
}
