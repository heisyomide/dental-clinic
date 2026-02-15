"use client";
import React from 'react';
import Image from 'next/image'; // Use Next.js Image for better deployment stability

export default function MeetTheSpecialist() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Left Side: Professional Portrait */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#00a3c8]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#1e4b8a]/5 rounded-full blur-3xl -z-10" />
            
            <div className="relative rounded-[60px] overflow-hidden border-[12px] border-[#f8fafc] shadow-2xl">
              {/* Using Next.js Image component fixes many deployment pathing issues */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src="/sss.JPG" // DOUBLE CHECK: Is it .jpg or .png or .JPG?
                  alt="Lead Specialist Dentist" 
                  fill
                  priority
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute bottom-8 left-8 bg-[#1e4b8a] p-6 rounded-3xl shadow-xl text-white text-center">
                <p className="text-3xl font-black leading-none">15+</p>
                <p className="text-[8px] font-black uppercase tracking-widest mt-1">Years Expert</p>
              </div>
            </div>
          </div>

          {/* Right Side: Credentials & Bio */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="bg-[#00a3c8]/10 self-start px-3 py-1 rounded-md mb-4 inline-block border border-[#00a3c8]/20">
                <p className="text-[#00a3c8] text-[10px] font-black uppercase tracking-[0.2em]">Clinical Leadership</p>
              </div>
              <h2 className="text-[#1e4b8a] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                WORLD-CLASS <br /> <span className="text-[#00a3c8]">EXPERTISE</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                "Our mission is to provide the people of Osogbo with dental care that matches international standards, using advanced technology and a specialist approach."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <p className="text-[#1e4b8a] font-black uppercase text-xs tracking-widest">Education</p>
                <p className="text-slate-600 text-sm font-bold">LDS, RCS (Eng) Specialist Oral Surgery Certification</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#1e4b8a] font-black uppercase text-xs tracking-widest">Affiliations</p>
                <p className="text-slate-600 text-sm font-bold">Member of the Nigerian Dental Association (NDA)</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#1e4b8a] font-black uppercase text-xs tracking-widest">Specialization</p>
                <p className="text-slate-600 text-sm font-bold">Implantology & Advanced Aesthetic Orthodontics</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#1e4b8a] font-black uppercase text-xs tracking-widest">Technology</p>
                <p className="text-slate-600 text-sm font-bold">Utilizing Digital 3D Imaging & Laser Dentistry</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-2 bg-[#f8fafc] rounded-3xl sm:rounded-full pr-8">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
                className="w-full sm:w-auto bg-[#1e4b8a] text-white font-black py-5 px-10 rounded-full uppercase text-xs tracking-[0.2em] shadow-lg hover:bg-[#00a3c8] transition-all"
              >
                Meet the Doctor
              </button>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest text-center sm:text-left">
                Available for consultations <br /> Mon — Sat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}