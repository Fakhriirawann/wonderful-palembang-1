import React from 'react'
import { Clock, Globe, Award, ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';

function History() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <MainContent/>
    <Timeline/>
    <KeyFacts/>
    <ActionSection/>
    <Footer/>
    </>
  )
}

export default History
function HeroSection(){
    return(
        <>
        <div className="hero min-h-[70vh] bg-gradient-to-br from-[#316D7C] via-[#8C7A66] to-[#C1A175] mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-5xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium border border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Story
              </span>
            </div>
            <h1 className="mb-6 text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
              History{" "}
              <span className="bg-gradient-to-r from-[#C1A175] via-[#8C7A66] to-[#316D7C] bg-clip-text text-transparent">
                Palembang
              </span>
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Discover the fascinating history and vibrant culture of South Sumatra's magnificent capital city
            </p>
            <div className="breadcrumbs text-sm text-white/80 justify-center">
              <ul>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>History</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
function MainContent(){
    return(
<div className="container mx-auto px-4 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
    {/* Text Section */}
    <div>
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FFF1E6] to-[#EDE4F0] text-[#9B5A68] font-medium mb-6">
        <Globe className="w-4 h-4 mr-2" />
        The Venice of the East
      </div>
      <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
        A City of Timeless Beauty
      </h2>
      <p className="text-lg text-slate-700 mb-6 leading-relaxed">
        Palembang, the capital city of South Sumatra, Indonesia, is a historic city with over 1,300 years of rich
        heritage. Known as the "Venice of the East," Palembang sits majestically along the banks of the Musi River,
        which has been the lifeline of the city for centuries.
      </p>
      <p className="text-lg text-slate-700 mb-8 leading-relaxed">
        Once the center of the powerful Sriwijaya maritime empire, Palembang was a crucial trading hub that connected
        China, India, and the Malay world. Today, it seamlessly blends its ancient heritage with modern development,
        creating a unique urban landscape that captivates visitors.
      </p>
      <Link
        to="/attractions"
        className="btn btn-lg rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Explore Attractions
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fce1c9] to-[#F2ECF7] rounded-3xl transform rotate-6" />
      <img
        src="/ampera-dulu.jpg?height=500&width=700"
        alt="Palembang cityscape"
        className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white"
      />
    </div>
  </div>
</div>
    )
}

function Timeline(){
    return(
        <div className="mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FFEBD2] to-[#EADFF6] text-[#B86A6A] font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Historical Journey
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent pb-3">
            Through the Ages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/abad-4.jpg"
              alt="Sriwijaya Era"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-white/70 " />
            <div className="relative z-10 p-8 text-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#EF4444] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent mb-2">
                7th Century
              </div>
              <p className="text-slate-700">
                Sriwijaya Empire established, making Palembang a major maritime trading center.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/abad-14.jpg"
              alt="Majapahit Era"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative z-10 p-8 text-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#EC4899] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent mb-2">
                14th Century
              </div>
              <p className="text-slate-700">
                Majapahit influence and the gradual decline of Sriwijaya power.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/abad-16.jpg"
              alt="Sultanate Era"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70 " />
            <div className="relative z-10 p-8 text-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#34D399] to-[#22D3EE] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#34D399] to-[#22D3EE] bg-clip-text text-transparent mb-2">
                16th Century
              </div>
              <p className="text-slate-700">
                Palembang Sultanate era begins, Islamic influence grows.
              </p>
            </div>
          </div>
      
          {/* Card 4 */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/modern.jpeg"
              alt="Modern Palembang"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative z-10 p-8 text-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FB923C] to-[#A78BFA] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FB923C] to-[#A78BFA] bg-clip-text text-transparent mb-2">
                Modern Era
              </div>
              <p className="text-slate-700">
                Capital of South Sumatra province and major economic center.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )
}
function KeyFacts(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            src="/ampera.jpeg"
            alt="Strategic Location"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0" />
          <div className="relative z-10 p-8 text-slate-800">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D8A47F] to-[#A58CAA] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Strategic Location</h3>
            <p className="text-slate-700 leading-relaxed">
              Located on the Musi River, 80km from the sea, making it accessible to international trade and commerce.
            </p>
          </div>
        </div>
      
        <div className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            src="/masjid_agung.jpg"
            alt="Cultural Heritage"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0" />
          <div className="relative z-10 p-8 text-slate-800">
            <div className="w-20 h-20 bg-gradient-to-br from-[#94B2D2] to-[#EAB8B8] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Cultural Heritage</h3>
            <p className="text-slate-700 leading-relaxed">
              Home to numerous historical sites, traditional crafts, and the world-famous Pempek cuisine.
            </p>
          </div>
        </div>
      
        <div className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            src="/bundaran.jpg"
            alt="Modern Development"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 " />
          <div className="relative z-10 p-8 text-slate-800">
            <div className="w-20 h-20 bg-gradient-to-br from-[#34D399] to-[#22D3EE] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Modern Development</h3>
            <p className="text-slate-700 leading-relaxed">
              Rapidly growing city with modern infrastructure while preserving its unique cultural identity.
            </p>
          </div>
        </div>
      </div>
      
    )
}
function ActionSection(){
    return(
<div className="text-center bg-gradient-to-br from-[#FAF7F3] to-[#F2ECF7] rounded-3xl p-16 border border-[#EFEAEA]">
  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
    Experience Palembang Today
  </h2>
  <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
    From ancient temples to modern attractions, Palembang offers a perfect blend of history and contemporary
    life that will leave you amazed.
  </p>

  <div className="flex flex-col sm:flex-row gap-6 justify-center">
    <Link
      to="/attractions"
      className="btn btn-lg rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      View Attractions
      <ArrowRight className="w-5 h-5 ml-2" />
    </Link>
    <Link
      to="/culture"
      className="btn btn-lg rounded-full bg-white border-2 border-[#D8A47F] text-[#D8A47F] hover:bg-[#D8A47F] hover:text-white hover:scale-105 transition-all duration-300"
    >
      Learn About Culture
    </Link>
  </div>
</div>

    )
}