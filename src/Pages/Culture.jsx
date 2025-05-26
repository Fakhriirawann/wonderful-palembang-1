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
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium mb-6">
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

      {/* Modern Pempek Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary font-medium mb-6">
            <Utensils className="w-4 h-4 mr-2" />
            Signature Cuisine
          </div>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
            Pempek: The Soul of Palembang
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            No visit to Palembang is complete without trying Pempek, the city's
            most famous culinary creation. This fish cake delicacy, served with
            a sweet and sour sauce called "cuko," has been a staple of Palembang
            cuisine for centuries and represents the heart of our culinary
            identity.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">
                  Pempek Kapal Selam
                </h4>
                <p className="text-slate-600">
                  Large pempek filled with egg, resembling a submarine
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">
                  Pempek Lenjer
                </h4>
                <p className="text-slate-600">
                  Cylindrical shaped pempek with smooth texture
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-success rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">
                  Pempek Adaan
                </h4>
                <p className="text-slate-600">
                  Round shaped with crispy texture and unique flavor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
          <img
            src="/pempek.jpeg?height=500&width=700"
            alt="Pempek dishes"
            className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white"
          />
        </div>
      </div>

      {/* Modern Traditional Arts */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-success/10 text-accent font-medium mb-6">
            <Palette className="w-4 h-4 mr-2" />
            Artistic Heritage
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Traditional Arts & Crafts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group-hover:scale-105">
              <figure className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Songket weaving"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </figure>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Songket Weaving
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Traditional handwoven fabric with intricate gold and silver
                  threads, representing the pinnacle of Palembang's textile
                  artistry and cultural sophistication.
                </p>
                <button className="btn rounded-full bg-gradient-to-r from-primary to-secondary border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group-hover:scale-105">
              <figure className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Traditional dance"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </figure>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Gending Sriwijaya
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Traditional dance that tells the story of the ancient
                  Srivijaya kingdom, performed with elegant movements and
                  colorful costumes that captivate audiences.
                </p>
                <button className="btn rounded-full bg-gradient-to-r from-secondary to-accent border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Watch Video
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Festivals */}
      <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-16 mb-24 border border-slate-100">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-success/10 to-primary/10 text-success font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Celebrations
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Annual Festivals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform duration-300">
              <span className="text-3xl">🎭</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">
              Sriwijaya Festival
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Annual cultural festival celebrating Palembang's rich heritage
              with performances, exhibitions, and traditional ceremonies
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform duration-300">
              <span className="text-3xl">🚣</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">
              Bidar Race
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Traditional boat racing on the Musi River showcasing the maritime
              heritage and competitive spirit of our people
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-success rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform duration-300">
              <span className="text-3xl">🍜</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">
              Pempek Festival
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Celebration of Palembang's most famous culinary creation with
              cooking competitions and tastings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
