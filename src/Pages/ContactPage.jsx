import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Sparkles,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard3D from "../components/3d/TiltCard3D";

function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <NavBar />
      <HeroSection />
      <FormContact />
      <InfoContact />
      <div className="container mx-auto px-4 pb-20">
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;

function HeroSection() {
  return (
    <div className="hero min-h-[65vh] bg-gradient-to-br from-[#316D7C] via-[#8C7A66] to-[#C1A175] dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 mt-16 relative overflow-hidden transition-colors duration-300">
      <div className="hero-content text-center text-white relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-slate-900/60 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium border border-white/30 dark:border-slate-700">
              <MessageCircle className="w-4 h-4 mr-2 text-cyan-300" />
              Get in Touch
            </span>
          </div>
          <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-2xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#FDE68A] via-[#C1A175] to-[#67E8F9] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto">
            Plan your perfect visit to Palembang with our verified local experts and tourism concierges.
          </p>
          <div className="breadcrumbs text-sm text-white/80 justify-center">
            <ul>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormContact() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    fetch("https://formspree.io/f/mwpogkqe", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          form.reset();
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
        }
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {showToast && (
        <div className="fixed top-20 right-4 flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-2xl shadow-2xl transition-all duration-300 z-50 animate-in slide-in-from-top-4">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Pesan Anda berhasil terkirim ke tim kami!</span>
        </div>
      )}

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 transition-colors duration-300 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 font-semibold text-xs sm:text-sm mb-4">
            <Send className="w-4 h-4 mr-2" />
            Kirim Pertanyaan / Reservasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Let's Plan Your Journey
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap</span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Masukkan nama lengkap Anda"
                className="input input-bordered rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-slate-700 dark:text-slate-300">Alamat Email</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="nama@email.com"
                className="input input-bordered rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-slate-700 dark:text-slate-300">Nomor Telepon / WA</span>
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+62 8..."
                className="input input-bordered rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-slate-700 dark:text-slate-300">Rencana Tanggal Kunjungan</span>
              </label>
              <input
                name="visit_date"
                type="date"
                className="input input-bordered rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-slate-700 dark:text-slate-300">Jumlah Wisatawan</span>
            </label>
            <select
              name="visitors"
              required
              defaultValue=""
              className="select select-bordered rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            >
              <option value="" disabled>Pilih jumlah wisatawan</option>
              <option value="1">1 Orang (Solo Traveler)</option>
              <option value="2-5">2 - 5 Orang (Keluarga / Teman)</option>
              <option value="6-10">6 - 10 Orang (Rombongan)</option>
              <option value="10+">Lebih dari 10 Orang (Group Tour)</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-slate-700 dark:text-slate-300">Pesan & Rencana Minat</span>
            </label>
            <textarea
              name="message"
              required
              className="textarea textarea-bordered rounded-2xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 h-32"
              placeholder="Ceritakan rencana wisata, preferensi kuliner, atau destinasi yang ingin Anda kunjungi..."
            ></textarea>
          </div>

          <div className="form-control pt-4">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-lg rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-xl hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              {loading ? "Mengirim..." : "Kirim Pesan Sekarang"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InfoContact() {
  const contactBoxes = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      detail: "+62 821 7446 4169",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      icon: Mail,
      title: "Email Resmi",
      detail: "info.wonderfulpalembang@gmail.com",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Pusat Informasi Turis",
      detail: "Jl. Jend. Sudirman No. 123, Palembang",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Jam Layanan Concierge",
      detail: "Senin – Minggu: 08:00 – 20:00 WIB",
      gradient: "from-orange-500 to-purple-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 font-semibold text-xs sm:text-sm mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Contact Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Tim representatif kami siap memberikan rekomendasi terbaik untuk pengalaman liburan di Palembang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactBoxes.map((box, idx) => {
            const Icon = box.icon;
            return (
              <TiltCard3D key={idx} maxTilt={12} scale={1.03}>
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-slate-950/50 p-6 text-center border border-slate-200/80 dark:border-slate-800 h-full flex flex-col justify-between group">
                  <div>
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${box.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-white group-hover:rotate-6 transition-transform`}
                      style={{ transform: "translateZ(25px)" }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3
                      className="font-bold text-base text-slate-800 dark:text-white mb-2"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {box.title}
                    </h3>
                    <p
                      className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm break-words"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {box.detail}
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

function FaqSection() {
  const faqs = [
    {
      q: "Kapan waktu terbaik untuk berkunjung ke Palembang?",
      a: "Waktu terbaik adalah saat musim kemarau antara Mei hingga September, serta saat festival tahunan seperti Festival Sriwijaya dan Lomba Perahu Bidar pada bulan Juni/Agustus.",
    },
    {
      q: "Berapa lama durasi ideal untuk liburan di Palembang?",
      a: "Kami menyarankan durasi minimal 3–4 hari untuk menikmati destinasi utama (Ampera, Pulau Kemaro, Benteng Kuto Besak) dan berwisata kuliner pempek otentik.",
    },
    {
      q: "Bagaimana cara transportasi umum di Palembang?",
      a: "Palembang memiliki moda modern LRT (Light Rail Transit) dari Bandara SMB II hingga Jakabaring Sport City, armada Teman Bus, dan perahu ketek tradisional di Sungai Musi.",
    },
    {
      q: "Apa saja kuliner wajib selain Pempek?",
      a: "Jangan lewatkan Mie Celor 26 Ilir, Tekwan, Model Gandum, Pindang Patin Sungai Musi, Martabak HAR, dan Es Kacang Merah khas Palembang.",
    },
  ];

  return (
    <div className="mt-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 font-semibold text-xs sm:text-sm mb-4">
          <MessageCircle className="w-4 h-4 mr-2" />
          Common Questions
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="collapse collapse-plus bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 transition-colors"
          >
            <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
            <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              {item.q}
            </div>
            <div className="collapse-content">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
