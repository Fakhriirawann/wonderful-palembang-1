// rfce
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
     <div className="navbar bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 fixed top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden focus:outline-none"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white/90 backdrop-blur-md rounded-2xl w-52 border border-white/20"
      >
        <li><Link to="/" className="rounded-xl">Home</Link></li>
        <li><Link to="/history" className="rounded-xl">History</Link></li>
        <li><Link to="/attractions" className="rounded-xl">Attractions</Link></li>
        <li><Link to="/culture" className="rounded-xl">Culture</Link></li>
        <li><Link to="/contact" className="rounded-xl">Contact</Link></li>
      </ul>
    </div>

    <Link to="/" className="btn btn-ghost">
      <img
        src="/logo.jpeg"
        alt="Wonderful Palembang"
        className="h-auto w-auto max-h-12 md:max-h-18"
      />
      <div className="flex flex-col items-start ml-2">
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
      <li><Link to="/" className="btn btn-ghost rounded-full hover:bg-primary/10">Home</Link></li>
      <li><Link to="/history" className="btn btn-ghost rounded-full hover:bg-primary/10">History</Link></li>
      <li><Link to="/attractions" className="btn btn-ghost rounded-full hover:bg-primary/10">Attractions</Link></li>
      <li><Link to="/culture" className="btn btn-ghost rounded-full hover:bg-primary/10">Culture</Link></li>
      <li><Link to="/contact" className="btn btn-ghost rounded-full hover:bg-primary/10">Contact</Link></li>
    </ul>
  </div>

  <div className="navbar-end">
    <Link
      to="/contact"
      className="btn btn-lg rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Visit Now
    </Link>
  </div>
</div>

    </>
  );
}

export default NavBar;
