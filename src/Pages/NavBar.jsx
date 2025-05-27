import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <div className="navbar bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 fixed top-0 z-50 px-4">
  <div className="flex-1 flex items-center">
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost">
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/attractions">Attractions</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost flex items-center gap-2">
      <img
        src="/logo.jpeg"
        alt="Wonderful Palembang"
        className="h-auto w-auto max-h-12 md:max-h-18"
      />
      <div className="flex flex-col items-start">
        <span className="font-bold text-2xl bg-gradient-to-r from-[#316D7C] via-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent leading-tight">
          Wonderful
        </span>
        <span className="text-xs font-semibold bg-gradient-to-r from-[#8C7A66] to-[#C1A175] bg-clip-text text-transparent -mt-1">
          Palembang
        </span>
      </div>
    </Link>
  </div>

  <div className="hidden lg:flex flex-1 justify-center">
    <ul className="menu menu-horizontal px-1 space-x-2">
      <li><Link to="/" className="btn btn-ghost rounded-full hover:bg-primary/10">Home</Link></li>
      <li><Link to="/history" className="btn btn-ghost rounded-full hover:bg-primary/10">History</Link></li>
      <li><Link to="/attractions" className="btn btn-ghost rounded-full hover:bg-primary/10">Attractions</Link></li>
      <li><Link to="/culture" className="btn btn-ghost rounded-full hover:bg-primary/10">Culture</Link></li>
      <li><Link to="/contact" className="btn btn-ghost rounded-full hover:bg-primary/10">Contact</Link></li>
    </ul>
  </div>

  <div className="flex-none">
    <Link
      to="/contact"
      className="lg:hidden btn btn-sm rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] text-white border-0 shadow-md hover:shadow-lg"
    >
      Visit
    </Link>
    <Link
      to="/contact"
      className="hidden lg:inline-flex btn btn-lg rounded-full bg-gradient-to-r from-[#D8A47F] to-[#A58CAA] text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Visit Now
    </Link>
  </div>
</div>

    </>
  );
}

export default NavBar;
