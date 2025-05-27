import React from "react";
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

function Attractions() {
  const attractionsData = [
    {
      name: "Great Mosque of Palembang",
      description: "Beautiful mosque with traditional Palembang architecture",
      image: "/masjid-agung.jpeg",
      rating: 4.6,
      category: "Religious",
      color: "from-[#C1A175] to-[#8C7A66]",
      link:"https://id.wikipedia.org/wiki/Masjid_Agung_Palembang",
    },
    {
      image: "/museum.jpeg",
      name: "Museum Sultan Mahmud Badaruddin II",
      category: "Museum",
      color: "from-[#8C7A66] to-[#316D7C]",
      rating: 4.5,
      description: "Historical museum in Palembang.",
      link:"https://id.wikipedia.org/wiki/Museum_Sultan_Mahmud_Badaruddin_II",
    },
    {
      name: "Kemaro Island",
      description:
        "Sacred island with Chinese temple and beautiful river views",
      image: "/kemaro.jpeg",
      rating: 4.6,
      category: "Cultural",
      color: "from-[#8C7A66] to-[#C1A175]",
      link:"https://www.tripadvisor.co.id/Attraction_Review-g608501-d3195899-Reviews-Kemaro_Island-Palembang_South_Sumatra_Sumatra.html",
    },
    {
      name: "Kuto Besak Fortress",
      description:
        "18th-century fort used by the Palembang Sultanate, now a historical site by the river.",
      image: "/benteng.jpeg",
      rating: 4.5,
      category: "Historical",
      color: "from-[#8C7A66] to-[#316D7C]",
      link:"https://palembang.go.id/charming/benteng-kuto-besak",
    },
    {
      name: "Al-Qur’an Al-Akbar",
      description:
        "The world's largest carved wooden Qur’an, showcasing religious artistry in Palembang.",
      image: "/quran.jpeg",
      rating: 4.6,
      category: "Religious",
      color: "from-[#C1A175] to-[#316D7C]",
      link:"https://palembang.go.id/charming/al-qur-an-akbar",
    },
    {
      name: "Cheng Ho Mosque",
      description:
        "A mosque with Chinese architectural style dedicated to Admiral Cheng Ho, reflecting cultural harmony.",
      image: "/masjid-chengho.jpeg",
      rating: 4.5,
      category: "Religious",
      color: "from-[#8C7A66] to-[#C1A175]",
      link:"https://indonesiakaya.com/pustaka-indonesia/masjid-cheng-ho-simbol-palembang-yang-multikultur/",
    },
    {
      name: "Siguntang Hill",
      description:
        "Historical hill believed to be the burial site of Sriwijayan nobility, offering scenic and cultural experiences.",
      image: "/Bukit-siguntang.jpeg",
      rating: 4.3,
      category: "Historical",
      color: "from-[#316D7C] to-[#C1A175]",
      link:"https://indonesiakaya.com/pustaka-indonesia/mengenang-kejayaan-palembang-dari-bukit-siguntang/",
    },
    {
        name: "Jakabaring Sport City",
        description: "Large sports complex with stadiums and arenas, home to international events in Palembang.",
        image: "/jakabaring.jpeg",
        rating: 4.4,
        category: "Recreational",
        color: "from-[#316D7C] to-[#C1A175]",
        link:"https://dispora.palembang.go.id/berita/jakabaring-sport-city-wisata-murah-meriah-ikon-kebanggaan-warga-palembang",
      },      
      {
        name: "Balaputradewa Museum",
        description: "Museum showcasing South Sumatra's cultural and historical artifacts, including traditional houses and royal relics.",
        image: "/museum_balput.jpg",
        rating: 4.5,
        category: "Museum",
        color: "from-[#316D7C] to-[#8C7A66]",
        link:"https://indonesiakaya.com/pustaka-indonesia/menelusuri-sejarah-palembang-di-museum-balaputera-dewa/",
      }
  ];

  return (
    <>
      <NavBar />
      <HeroSection />
      <TextSection />
      <AttractionsPage attractions={attractionsData} />
      <FeaturedSection />
      <ActionSection />
      <Footer />
    </>
  );
}

export default Attractions;
function HeroSection() {
  return (
    <>
      <div className="hero min-h-[70vh] bg-gradient-to-br from-[#8C7A66] via-[#C1A175] to-[#316D7C] mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-5xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium border border-white/30">
                <Camera className="w-4 h-4 mr-2" />
                Must-Visit Places
              </span>
            </div>
            <h1 className="mb-6 text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
              Top{" "}
              <span className="bg-gradient-to-r from-[#C1A175] via-[#8C7A66] to-[#316D7C] bg-clip-text text-transparent">
                Attractions
              </span>
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Explore the must-visit destinations that make Palembang
              unforgettable
            </p>
            <div className="breadcrumbs text-sm text-white/80 justify-center">
              <ul>
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>Attractions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function TextSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f9f4ef] via-[#f6f1ea] to-[#f9f4ef] text-center text-[#4b3832]">
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-20 fill-current text-[#f9f4ef]"
        >
          <path d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent pb-3">
          A Journey Beyond the Ordinary
        </h2>
        <p className="text-[#6e5c55] text-lg md:text-xl mb-8 leading-relaxed">
          From delightful local products to breathtaking attractions, explore
          the rich soul of Palembang — where heritage meets harmony.
        </p>

        <div className="flex justify-center items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-[#d8cfc4]"></div>
          <div className="w-2 h-2 rounded-full bg-[#b8a898]"></div>
          <div className="w-2 h-2 rounded-full bg-[#a68a7c]"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-20 fill-current text-[#f9f4ef]"
        >
          <path d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
    </section>
  );
}
function AttractionsPage({ attractions }) {
  return (
    <section className="bg-[#f9f4ef] py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-50 via-teal-50 to-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 group-hover:scale-105">
                <figure className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`rounded-full px-3 py-1 text-sm bg-gradient-to-r ${item.color} text-white shadow-md`}
                    >
                      {item.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full shadow-md">
                      <Star className="w-4 h-4 text-yellow-300 mr-1 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </figure>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Palembang</span>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm rounded-full px-4 py-2 bg-gradient-to-r ${item.color} text-white shadow hover:shadow-xl hover:scale-105 transition-all duration-300`}
                    >
                      <Camera className="w-4 h-4 mr-1" />
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function FeaturedSection() {
  return (
    <div className="bg-[#f9f4ef] rounded-3xl shadow-2xl overflow-hidden border border-[#d8cfc4]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/ampera2.jpeg"
            alt="Ampera Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <div className="badge bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] border-0 text-white shadow-lg text-sm px-4 py-3">
              <Sparkles className="w-4 h-4 mr-2" />
              Featured
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="pb-2 text-4xl font-bold mb-6 bg-gradient-to-r from-[#4b3832] to-[#8c7a66] bg-clip-text text-transparent">
            Ampera Bridge
          </h2>
          <p className="text-lg leading-relaxed text-[#5e4b44] mb-8">
            The iconic Ampera Bridge is not just a means of transportation but a
            symbol of Palembang itself. Built in 1965, this magnificent bridge
            spans 1,177 meters across the Musi River and offers breathtaking
            views of the city skyline, especially during sunset.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
              <span className="font-bold text-xl text-[#4b3832]">4.8/5</span>
              <span className="text-[#7c6f67] ml-2">(2,847 reviews)</span>
            </div>
            <div className="flex items-center text-[#7c6f67]">
              <Clock className="w-5 h-5 mr-2" />
              <span>Open 24/7</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-lg rounded-full bg-gradient-to-r from-[#316D7C] to-[#C1A175] border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="btn btn-lg rounded-full bg-white border-2 border-[#4b3832] text-[#4b3832] hover:bg-[#4b3832] hover:text-white hover:scale-105 transition-all duration-300">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function ActionSection() {
  return (
    <div className="text-center bg-gradient-to-br from-rose-50 to-indigo-50 rounded-3xl p-16 border border-indigo-100">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
        Plan Your Perfect Visit
      </h2>
      <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
        Need help planning your itinerary? Our local guides can help you make
        the most of your time in Palembang and discover hidden gems.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          to="/contact"
          className="btn btn-lg rounded-full bg-gradient-to-r from-red-500 to-yellow-500 border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Contact a Guide
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
        <Link
          to="/culture"
          className="btn btn-lg rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
          Explore Culture
        </Link>
      </div>
    </div>
  );
}
