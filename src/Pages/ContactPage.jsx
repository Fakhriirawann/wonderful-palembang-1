import React from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


function ContactPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FormContact />
      <InfoContact />
      <FaqSection />
      <Footer />
    </>
  );
}

export default ContactPage;
function HeroSection() {
  return (
    <div className="hero min-h-[70vh] bg-gradient-to-br from-[#316D7C] via-[#8C7A66] to-[#C1A175] mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="hero-content text-center text-white relative z-10">
        <div className="max-w-5xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium border border-white/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </span>
          </div>
          <h1 className="mb-6 text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#C1A175] via-[#8C7A66] to-[#316D7C] bg-clip-text text-transparent">
              US
            </span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            Plan your perfect visit to Palembang with our local experts
          </p>
          <div className="breadcrumbs text-sm text-white/80 justify-center">
            <ul>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/mwpogkqe", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {showToast && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 z-50">
          🎉 Message sent successfully!
        </div>
      )}
      <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-[#F1EAE5]">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FDE2E4] to-[#EADFF6] text-[#B86A6A] font-medium mb-4">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Let's Plan Your Journey</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="pr-20 label-text font-medium text-slate-700">Full Name</span>
              </label>
              <input name="name" type="text" required placeholder="Enter your full name" className="input input-bordered rounded-2xl border-[#E2D5CB] focus:border-[#D8A47F] focus:ring-2 focus:ring-[#D8A47F]/30 transition-all duration-300" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="pr-8 label-text font-medium text-slate-700">Email Address</span>
              </label>
              <input name="email" type="email" required placeholder="Enter your email" className="input input-bordered rounded-2xl border-[#E2D5CB] focus:border-[#D8A47F] focus:ring-2 focus:ring-[#D8A47F]/30 transition-all duration-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="pr-10 label-text font-medium text-slate-700">Phone Number</span>
              </label>
              <input name="phone" type="tel" placeholder="Enter your phone number" className="input input-bordered rounded-2xl border-[#E2D5CB] focus:border-[#D8A47F] focus:ring-2 focus:ring-[#D8A47F]/30 transition-all duration-300" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="pr-15 label-text font-medium text-slate-700">Visit Date</span>
              </label>
              <input name="visit_date" type="date" className="input input-bordered rounded-2xl border-[#E2D5CB] focus:border-[#D8A47F] focus:ring-2 focus:ring-[#D8A47F]/30 transition-all duration-300" />
            </div>
          </div>

          <div className="form-control flex gap-3">
            <label className="label">
              <span className="label-text font-medium text-slate-700">Number of Visitors</span>
            </label>
            <select name="visitors" required className="pl-2 select select-bordered rounded-2xl border-[#E2D5CB] focus:border-[#D8A47F] focus:ring-2 focus:ring-[#D8A47F]/30 transition-all duration-300">
              <option disabled selected>Select number of visitors</option>
              <option>1 person</option>
              <option>2-5 people</option>
              <option>6-10 people</option>
              <option>More than 10 people</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="pr-20 label-text font-medium text-slate-700">Message</span>
            </label>
            <textarea name="message" required className="textarea textarea-bordered rounded-2xl border-[#E2D5CB] focus:border-[#D8A47F] focus:ring-2 focus:ring-[#D8A47F]/30 transition-all duration-300 h-32" placeholder="Tell us about your travel plans and interests"></textarea>
          </div>

          <div className="form-control mt-8">
            <button type="submit" className="btn btn-lg rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] border-0 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Send className="w-5 h-5 mr-2" />
              Send Message
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InfoContact() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-16">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FDE2E4] to-[#EADFF6] text-[#B86A6A] font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Contact Information
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Our local tourism experts are here to help you plan the perfect
            visit to Palembang. Whether you need recommendations, bookings, or
            just have questions about our beautiful city, we're here to assist
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 text-center border border-[#F1EAE5] group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D8A47F] to-[#A58CAA] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Phone</h3>
              <p className="text-slate-700">+62 711 123 4567</p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 text-center border border-[#F1EAE5] group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#94B2D2] to-[#EAB8B8] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Email</h3>
              <p className="text-slate-700">
                info.wonderfulpalembang@gmail.com
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 text-center border border-[#F1EAE5] group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#34D399] to-[#22D3EE] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Address</h3>
              <p className="text-slate-700">Jl. Sudirman No. 123, Palembang</p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 text-center border border-[#F1EAE5] group-hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FB923C] to-[#A78BFA] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">
                Office Hours
              </h3>
              <p className="text-slate-700">Mon–Fri: 8AM–5PM</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FAF7F3] to-[#F2ECF7] rounded-3xl p-8 border border-[#F1EAE5]">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">
            Our Services
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] rounded-full mr-4"></div>
              <span className="text-slate-700">
                Professional tour guide services
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-[#94B2D2] to-[#EAB8B8] rounded-full mr-4"></div>
              <span className="text-slate-700">
                Hotel and accommodation booking
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-[#34D399] to-[#22D3EE] rounded-full mr-4"></div>
              <span className="text-slate-700">
                Transportation arrangements
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-[#FB923C] to-[#A78BFA] rounded-full mr-4"></div>
              <span className="text-slate-700">
                Cultural experience packages
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-[#A58CAA] to-[#94B2D2] rounded-full mr-4"></div>
              <span className="text-slate-700">Authentic culinary tours</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function FaqSection() {
  return (
    <div className="mb-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#EADFF6] to-[#FDE2E4] text-[#B86A6A] font-medium mb-6">
          <MessageCircle className="w-4 h-4 mr-2" />
          Common Questions
        </div>
        <h2 className="pb-3 text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="collapse collapse-plus bg-white rounded-2xl shadow-xl border border-[#F1EAE5] transition-all duration-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-semibold text-slate-800">
            What's the best time to visit Palembang?
          </div>
          <div className="collapse-content">
            <p className="text-slate-700 leading-relaxed">
              The best time to visit Palembang is during the dry season from May
              to September when the weather is more pleasant for outdoor
              activities and sightseeing.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-white rounded-2xl shadow-xl border border-[#F1EAE5] transition-all duration-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold text-slate-800">
            How many days should I spend in Palembang?
          </div>
          <div className="collapse-content">
            <p className="text-slate-700 leading-relaxed">
              We recommend at least 3–4 days to explore the main attractions,
              experience the culture, and enjoy the local cuisine without
              rushing.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-white rounded-2xl shadow-xl border border-[#F1EAE5] transition-all duration-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold text-slate-800">
            Is English widely spoken in Palembang?
          </div>
          <div className="collapse-content">
            <p className="text-slate-700 leading-relaxed">
              While Indonesian is the main language, many people in the tourism
              industry speak English. Our guides are fluent in English and can
              assist you throughout your visit.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-white rounded-2xl shadow-xl border border-[#F1EAE5] transition-all duration-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-semibold text-slate-800">
            What should I try when visiting Palembang?
          </div>
          <div className="collapse-content">
            <p className="text-slate-700 leading-relaxed">
              Don't miss trying Pempek, the city's signature dish, along with
              other local specialties like Tekwan, Model, and Es Kacang Merah
              for a complete culinary experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
