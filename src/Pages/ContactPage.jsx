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
  const serviceHighlights = [
    { label: "Respon Cepat", val: "< 24 Jam" },
    { label: "Pemandu Berlisensi", val: "Lokal & Ramah" },
    { label: "Konsultasi Itinerary", val: "Gratis 100%" },
    { label: "Layanan Turis", val: "24/7 Aktif" },
  ];

  return (
    <div className="relative w-full min-h-[70vh] mt-16 overflow-hidden flex items-center justify-center pt-20 pb-16">
      {/* High Definition Cityscape / Landmark Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg-hd transform scale-105"
        style={{
          backgroundImage: `url('/contact_user.jpg')`,
        }}
      />

      {/* Clean Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 dark:from-slate-950/95 dark:via-slate-950/70 dark:to-slate-950/50 z-0" />

      {/* Hero Content (No icons, non-colliding layout) */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full bg-white/20 dark:bg-slate-900/70 backdrop-blur-md text-white font-semibold text-xs sm:text-sm border border-white/30 dark:border-slate-700 shadow-lg tracking-wide uppercase">
            Layanan Informasi & Konsultasi Wisata Resmi
          </span>
        </div>

        <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-2xl leading-tight tracking-tight">
          Contact{" "}
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#C1A175] to-[#67E8F9] dark:from-[#38bdf8] dark:via-[#fbbf24] dark:to-[#34d399] bg-clip-text text-transparent">
            Us
          </span>
        </h1>

        <p className="mb-10 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow">
          Rencanakan perjalanan liburan tak terlupakan di Palembang bersama pemandu lokal berlisensi dan layanan reservasi terpercaya.
        </p>

        {/* Service Highlights Pills (No icons/emojis) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {serviceHighlights.map((item, idx) => (
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
              <Link to="/" className="hover:text-cyan-300 transition-colors font-medium">
                Beranda
              </Link>
            </li>
            <li className="text-cyan-300 font-bold">Hubungi Kami</li>
          </ul>
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
