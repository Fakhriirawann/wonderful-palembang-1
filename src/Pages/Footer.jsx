import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
       <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent">
                  ✨ Wonderful Palembang
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Discover the Venice of the East and experience the perfect blend of ancient heritage and modern charm.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">i</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/attractions" className="text-slate-400 hover:text-white transition-colors">
                    Attractions
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-slate-400 hover:text-white transition-colors">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2024 Wonderful Palembang Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
