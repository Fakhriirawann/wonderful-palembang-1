import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
       <footer className="bg-gradient-to-br from-slate-100 via-teal-100 to-white text-slate-800">
  <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center mb-6">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent">
            ✨ Wonderful Palembang
          </span>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Discover the Venice of the East and experience the perfect blend of ancient heritage and modern charm.
        </p>
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <span className="text-white text-sm">f</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <span className="text-white text-sm">t</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <span className="text-white text-sm">i</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4 text-slate-800">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/history" className="text-slate-600 hover:text-primary transition-colors">
              History
            </Link>
          </li>
          <li>
            <Link to="/attractions" className="text-slate-600 hover:text-primary transition-colors">
              Attractions
            </Link>
          </li>
          <li>
            <Link to="/culture" className="text-slate-600 hover:text-primary transition-colors">
              Culture
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-slate-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4 text-slate-800">Support</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">
              Help Center
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-slate-300 mt-12 pt-8 text-center">
      <p className="text-slate-500">© 2024 Wonderful Palembang Tourism. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer;
