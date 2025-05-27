import React from "react";
import {
  Music,
  Utensils,
  Palette,
  Users,
  ArrowRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
function Culture() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CultureSection />
      <ActionSection/>
      <Footer />
    </div>
  );
}

export default Culture;
function HeroSection() {
  return (
    <div className="hero min-h-[70vh] bg-gradient-to-br from-[#C1A175] via-[#316D7C] to-[#8C7A66] mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="hero-content text-center text-white relative z-10">
        <div className="max-w-5xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium border border-white/30">
              <Heart className="w-4 h-4 mr-2" />
              Living Heritage
            </span>
          </div>
          <h1 className="mb-6 text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Culture &{" "}
            <span className="bg-gradient-to-r from-[#C1A175] via-[#8C7A66] to-[#316D7C] bg-clip-text text-transparent">
              Heritage
            </span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            Immerse yourself in the rich traditions and vibrant culture of
            Palembang
          </p>
          <div className="breadcrumbs text-sm text-white/80 justify-center">
            <ul>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>Culture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function CultureSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 text-rose-600 font-medium mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Cultural Treasures
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Discover Our Heritage
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <div className="group">
          <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-primary/10 group-hover:scale-105 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-500 group-hover:opacity-12"
              style={{
                backgroundImage: `url('/pempek.jpeg?height=400&width=600')`,
              }}
            />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Culinary Arts
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Famous for Pempek, Tekwan, and other unique Palembang delicacies
                that tell stories of our heritage
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-secondary/10 group-hover:scale-105 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-500 group-hover:opacity-12"
              style={{
                backgroundImage: `url('/gambus.jpeg?height=400&width=600')`,
              }}
            />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Traditional Music
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rich musical heritage including Gambus and traditional folk
                songs that echo through generations
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-accent/10 group-hover:scale-105 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-500 group-hover:opacity-12"
              style={{
                backgroundImage: `url('/songket.jpeg?height=400&width=600')`,
              }}
            />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-success rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Arts & Crafts
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Beautiful songket weaving and traditional handicrafts that
                showcase our artistic mastery
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative bg-gradient-to-br from-success/5 to-success/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-success/10 group-hover:scale-105 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-500 group-hover:opacity-12"
              style={{
                backgroundImage: `url('/pacu-jalur.jpeg?height=400&width=600')`,
              }}
            />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Festivals
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Vibrant celebrations throughout the year showcasing our living
                traditions and community spirit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 text-rose-600 font-medium mb-6">
            <Utensils className="w-4 h-4 mr-2" />
            Signature Cuisine
          </div>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
            Pempek: The Soul of Palembang
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            No visit to Palembang is complete without trying Pempek, the city's
            most famous culinary creation. This fish cake delicacy, served with
            a sweet and sour sauce called "cuko," has been a staple of Palembang
            cuisine for centuries and represents the heart of our culinary
            identity.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">
                  Pempek Kapal Selam
                </h4>
                <p className="text-slate-600">
                  Large pempek filled with egg, resembling a submarine.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">
                  Pempek Lenjer
                </h4>
                <p className="text-slate-600">
                  Cylindrical shaped pempek with smooth texture.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-teal-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">
                  Pempek Adaan
                </h4>
                <p className="text-slate-600">
                  Round shaped with crispy texture and unique flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl transform rotate-6" />
          <img
            src="/pempek.jpeg"
            alt="Pempek dishes"
            className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white"
          />
        </div>
      </div>

      <div className="mb-24">
  <div className="text-center mb-16">
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FFEEDA] to-[#F9E8F0] text-[#B86A6A] font-medium mb-6">
      <Palette className="w-4 h-4 mr-2" />
      Artistic Heritage
    </div>
    <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
      Traditional Arts & Crafts
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1 - Songket */}
    <div className="group">
      <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#F5EDE5] group-hover:scale-[1.02]">
        <figure className="relative overflow-hidden">
          <img
            src="/songket3.jpeg"
            alt="Songket weaving"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </figure>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">Songket Weaving</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Traditional handwoven fabric with intricate gold and silver threads, representing the pinnacle of
            Palembang's textile artistry and cultural sophistication.
          </p>
          <button className="btn rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>

    {/* Card 2 - Dance */}
    <div className="group">
      <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#F5EDE5] group-hover:scale-[1.02]">
        <figure className="relative overflow-hidden">
          <img
            src="/tari.jpeg"
            alt="Traditional dance"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </figure>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">Gending Sriwijaya</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Traditional dance that tells the story of the ancient Srivijaya kingdom, performed with elegant movements
            and colorful costumes that captivate audiences.
          </p>
          <button className="btn rounded-full bg-gradient-to-r from-[#F0A6CA] to-[#94B2D2] border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Watch Video
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-gradient-to-br from-[#FAF7F3] to-[#F4EBF9] rounded-3xl p-16 mb-24 border border-[#EFEAEA]">
  <div className="text-center mb-16">
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FFE5D9] to-[#EADFF6] text-[#B86A6A] font-medium mb-6">
      <Users className="w-4 h-4 mr-2" />
      Celebrations
    </div>
    <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
      Annual Festivals
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500">
      <img
        src="/festival.jpeg"
        alt="Sriwijaya Festival"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-white/60 " />
      <div className="relative z-10 p-8 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#D8A47F] to-[#A58CAA] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:rotate-6 transition-transform duration-300">
          <span className="text-3xl">🎭</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">
          Sriwijaya Festival
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Annual cultural festival celebrating Palembang's rich heritage with
          performances, exhibitions, and traditional ceremonies.
        </p>
      </div>
    </div>
    <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500">
      <img
        src="/bidar.jpeg"
        alt="Bidar Race"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 p-8 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#94B2D2] to-[#EAB8B8] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:rotate-6 transition-transform duration-300">
          <span className="text-3xl">🚣</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">
          Bidar Race
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Traditional boat racing on the Musi River showcasing the maritime
          heritage and competitive spirit of our people.
        </p>
      </div>
    </div>
    <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500">
      <img
        src="/pempek4.jpg"
        alt="Pempek Festival"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-white/60 " />
      <div className="relative z-10 p-8 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#F4A261] to-[#2A9D8F] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:rotate-6 transition-transform duration-300">
          <span className="text-3xl">🍜</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">
          Pempek Festival
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Celebration of Palembang's most famous culinary creation with cooking
          competitions and tastings.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

function ActionSection(){
    return(
        <div className="text-center justify-center mb-4">
        <h2 className=" pb-2 text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Experience Our Living Culture
        </h2>
        <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join us for cultural workshops, cooking classes, and traditional performances that bring our heritage to life.
        </p>
      
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="btn btn-lg rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Cultural Tour
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            to="/attractions"
            className="btn btn-lg rounded-full bg-white border-2 border-[#D8A47F] text-[#D8A47F] hover:bg-[#D8A47F] hover:text-white hover:scale-105 transition-all duration-300"
          >
            Visit Cultural Sites
          </Link>
        </div>
      </div>
      
    )
}
