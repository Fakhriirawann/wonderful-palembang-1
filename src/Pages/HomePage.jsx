import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
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
} from "lucide-react";

function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <NavBar />
        <HeroSection />
        <StatsSection />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 lg:w-full  h-full sm:w-[400px] object-cover brightness-50 "
        >
          <source src="/vid-banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#316D7C]/60 via-[#8C7A66]/40 to-[#C1A175]/60 z-0" />

        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-5xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium border border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Discover Indonesia's Hidden Gem
              </span>
            </div>
            <h1 className="mb-6 text-6xl md:text-8xl font-bold text-white drop-shadow-2xl leading-tight">
              Wonderful{" "}
              <span className="bg-gradient-to-r from-[#C1A175] via-[#8C7A66] to-[#316D7C] bg-clip-text text-transparent">
                Palembang
              </span>
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the Venice of the East, where ancient traditions meet
              modern innovation. Experience the rich culture, delicious cuisine,
              and warm hospitality of South Sumatra's capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/attractions"
                className="btn btn-lg rounded-full bg-gradient-to-r from-accent to-success border-0 text-white shadow-2xl hover:shadow-accent/25 hover:scale-105 transition-all duration-300"
              >
                <Camera className="w-5 h-5 mr-2" />
                Explore Attractions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/history"
                className="btn btn-lg rounded-full bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StatsSection() {
  return (
    <>
      <div className="py-20 bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-[#316D7C]/20 group-hover:scale-105 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35 transition-opacity duration-500 group-hover:opacity-15"
                  style={{
                    backgroundImage: `url('/lrt.jpeg?height=400&width=600')`,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#316D7C] to-[#8C7A66] rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent">
                        1.7M+
                      </div>
                      <div className="text-slate-600 font-medium">
                        Population
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-500">
                    Friendly locals ready to welcome you
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-[#8C7A66]/20 group-hover:scale-105 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35 transition-opacity duration-500 group-hover:opacity-15"
                  style={{
                    backgroundImage: `url('/ampera-dulu.jpg?height=400&width=600')`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8C7A66] to-[#C1A175] rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent">
                        682 AD
                      </div>
                      <div className="text-slate-600 font-medium">Founded</div>
                    </div>
                  </div>
                  <p className="text-slate-500">
                    Over 1,300 years of rich history
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-[#C1A175]/20 group-hover:scale-105 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35 transition-opacity duration-500 group-hover:opacity-15"
                  style={{
                    backgroundImage: `url('/musi.jpeg?height=400&width=600')`,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C1A175] to-[#316D7C] rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#C1A175] to-[#316D7C] bg-clip-text text-transparent">
                        400 km²
                      </div>
                      <div className="text-slate-600 font-medium">Area</div>
                    </div>
                  </div>
                  <p className="text-slate-500">
                    Urban paradise along the Musi River
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Section3() {
  return (
    <>
      <div className="py-24 bg-gradient-to-r from-slate-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Palembang
            </div>
            <h2 className="pb-3 text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Unforgettable Experiences
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes our city special and creates lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-primary/10 group-hover:scale-105">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="\museum.jpeg"
                    alt="Rich Heritage"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Rich Heritage
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Explore ancient Srivijaya kingdom ruins and traditional
                  architecture that tells stories of centuries past.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-secondary/10 group-hover:scale-105">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="\pempek.jpeg"
                    alt="Culinary Paradise"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Culinary Paradise
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Taste authentic Pempek, Tekwan, and other local delicacies
                  that will tantalize your taste buds.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-accent/10 group-hover:scale-105">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="\ampera.jpeg"
                    alt="River City"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  River City
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Experience life along the mighty Musi River and its vibrant
                  floating markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Section4() {
  return (
    <>
      <div className="py-24 bg-gradient-to-br from-[#316D7C] via-[#8C7A66] to-[#C1A175] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Explore{" "}
              <span className="bg-gradient-to-r from-[#C1A175] to-[#8C7A66] bg-clip-text text-transparent">
                Palembang?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of visitors who have fallen in love with our
              beautiful city and created unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="btn btn-lg rounded-full bg-white text-primary hover:bg-white/90 border-0 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Your Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/attractions"
                className="btn btn-lg rounded-full bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300"
              >
                <Camera className="w-5 h-5 mr-2" />
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
