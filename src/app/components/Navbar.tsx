"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#1e4b8a] p-2 rounded-xl group-hover:bg-[#00a3c8] transition-colors">
             <span className="text-white text-xl font-bold">C</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-black uppercase tracking-tighter leading-none ${isScrolled ? 'text-[#1e4b8a]' : 'text-[#1e4b8a]'}`}>
              Crystal Specialist
            </span>
            <span className="text-[#00a3c8] text-[8px] font-black uppercase tracking-[0.3em]">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'About', 'Results', 'Location'].map((item) => (
            <Link 
              key={item}
              href={`${item.toLowerCase()}`}
              className={`text-[10px] font-black uppercase tracking-widest hover:text-[#00a3c8] transition-colors ${
                isScrolled ? 'text-[#1e4b8a]' : 'text-[#1e4b8a]'
              }`}
            >
              {item}
            </Link>
          ))}
          
          {/* Constant Conversion Button */}
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-[#00a3c8] text-white text-[10px] font-black py-4 px-8 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Icon (You can add a drawer here later) */}
        <div className="md:hidden">
            <div className="w-6 h-1 bg-[#1e4b8a] mb-1"></div>
            <div className="w-4 h-1 bg-[#1e4b8a]"></div>
        </div>

      </div>
    </nav>
  );
}