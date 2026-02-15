"use client";
import React from 'react';
import Link from 'next/link';

export default function BookCTA() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="relative bg-[#1e4b8a] rounded-[60px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
          
          {/* Background Decorative Curve (The "Dantoa" style) */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00a3c8] opacity-10 rounded-l-full -z-0"></div>

          {/* Left Side: Professional Imagery */}
          <div className="lg:w-1/2 relative z-10">
            <div className="relative">
              {/* Main Image with unique Specialist Curve */}
              <div className="rounded-t-full rounded-bl-full overflow-hidden border-[10px] border-white/10 shadow-xl">
                <img 
                  src="/sss.jpg" 
                  alt="Crystal Specialist Care" 
                  className="w-full h-full object-cover aspect-video lg:aspect-square"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl animate-pulse">
                <p className="text-[#00a3c8] text-[8px] font-black uppercase tracking-widest text-center">Open Today</p>
                <p className="text-[#1e4b8a] text-xs font-bold text-center">8am - 6pm</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Button */}
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <p className="text-[#00a3c8] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              World Class Specialist
            </p>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              Experience <br /> 
              <span className="text-[#00a3c8]">Premium Dental</span> <br /> 
              Care in Osogbo.
            </h2>
            <p className="text-blue-100/70 text-sm font-medium mb-10 max-w-md">
              Don't wait in line. Book your session with our specialists online and get an instant confirmation via WhatsApp.
            </p>

            {/* THE BUTTON that links to the appointment page */}
            <Link href="/book">
              <button className="group relative bg-[#00a3c8] text-white font-black py-6 px-12 rounded-full uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-white hover:text-[#1e4b8a] transition-all duration-500 overflow-hidden">
                <span className="relative z-10">Make An Appointment</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}