"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Results', href: '/results' },
    { name: 'Location', href: '/location' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group z-[110]">
          <div className="bg-[#1e4b8a] p-2 rounded-xl group-hover:bg-[#00a3c8] transition-colors">
             <span className="text-white text-xl font-bold">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black uppercase tracking-tighter leading-none text-[#1e4b8a]">
              Crystal Specialist
            </span>
            <span className="text-[#00a3c8] text-[8px] font-black uppercase tracking-[0.3em]">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-widest text-[#1e4b8a] hover:text-[#00a3c8] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/book"
            className="bg-[#00a3c8] text-white text-[10px] font-black py-4 px-8 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[110] p-2"
        >
          <div className={`h-1 bg-[#1e4b8a] transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></div>
          <div className={`h-1 bg-[#1e4b8a] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></div>
          <div className={`h-1 bg-[#1e4b8a] transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-6'}`}></div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-black text-[#1e4b8a] uppercase tracking-tighter hover:text-[#00a3c8]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/book"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#00a3c8] text-white text-sm font-black py-6 px-12 rounded-full shadow-2xl uppercase tracking-[0.2em]"
          >
            Book Now
          </Link>
        </div>

      </div>
    </nav>
  );
}