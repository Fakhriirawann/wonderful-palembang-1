// rfce
import React from "react";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
       <div className="navbar bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white/90 backdrop-blur-md rounded-2xl w-52 border border-white/20"
            >
              <li>
                <Link href="/" className="rounded-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="rounded-xl">
                  About
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="rounded-xl">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/culture" className="rounded-xl">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="rounded-xl">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost">
            <img
              src="/logo.jpeg"
              alt="Wonderful Palembang"
              className="h-18 w-auto"
            />
            <div className="flex flex-col items-start">
              <span className="font-bold text-3xl bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent leading-tight">
                Wonderful
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent leading-tight -mt-1">
                Palembang
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <Link href="/" className="btn btn-ghost rounded-full hover:bg-primary/10">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="btn btn-ghost rounded-full hover:bg-primary/10">
                About
              </Link>
            </li>
            <li>
              <Link href="/attractions" className="btn btn-ghost rounded-full hover:bg-primary/10">
                Attractions
              </Link>
            </li>
            <li>
              <Link href="/culture" className="btn btn-ghost rounded-full hover:bg-primary/10">
                Culture
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn btn-ghost rounded-full hover:bg-primary/10">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/contact"
            className="btn btn-primary rounded-full bg-gradient-to-r from-primary to-secondary border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Visit Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
