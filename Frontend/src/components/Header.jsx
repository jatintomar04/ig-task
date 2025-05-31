import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#d9f0ff] to-[#f9f8e7] px-6 md:px-16 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <i className="fas fa-crown text-[#0a1a3a] text-xl"></i>
        <span className="text-[#0a1a3a] font-semibold text-lg select-none">Landguru</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-[#0a1a3a] text-sm font-normal">
        <a className="hover:underline" href="#">
          Home
        </a>
        <div className="relative group cursor-pointer">
          <span>Adversite</span>
          <i className="fas fa-chevron-down ml-1 text-xs"></i>
          <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded hidden group-hover:block z-10"></div>
        </div>
        <div className="relative group cursor-pointer">
          <span>Supports</span>
          <i className="fas fa-chevron-down ml-1 text-xs"></i>
          <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded hidden group-hover:block z-10"></div>
        </div>
        <a className="hover:underline" href="#">
          Contact
        </a>
      </nav>


      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-[#0a1a3a]">
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>


       <button className="text-[10px] font-semibold text-[#FBBF24] bg-[#FEF3C7] px-3 py-1 rounded-md">
          Try for free
        </button>

     
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 p-4 z-20 md:hidden text-sm text-[#0a1a3a] space-y-2">
          <a href="#" className="block hover:underline">Home</a>
          <a href="#" className="block hover:underline">Adversite</a>
          <a href="#" className="block hover:underline">Supports</a>
          <a href="#" className="block hover:underline">Contact</a>
            <button className="text-[10px] font-semibold text-[#FBBF24] bg-[#FEF3C7] px-3 py-1 rounded-md">
          Explore details
        </button>
        </div>
      )}
    </header>
  );
};

export default Header;
