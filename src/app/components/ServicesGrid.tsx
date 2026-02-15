"use client";
import React from 'react';

const services = [
  {
    title: "Dental Implants",
    desc: "Permanent, specialist solutions for missing teeth using medical-grade titanium.",
    category: "Specialist",
    icon: "🦷"
  },
  {
    title: "Orthodontics",
    desc: "Advanced braces and clear aligners to correct alignment and bite issues.",
    category: "Specialist",
    icon: "✨"
  },
  {
    title: "Oral Surgery",
    desc: "Expert surgical extractions and periodontal treatments in a sterile environment.",
    category: "Specialist",
    icon: "🏥"
  },
  {
    title: "Cosmetic Whitening",
    desc: "Professional-grade laser whitening for an immediate, brighter smile.",
    category: "General",
    icon: "💎"
  }
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#00a3c8] font-black uppercase tracking-widest text-xs mb-2">Our Expertise</p>
          <h2 className="text-[#1e4b8a] text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Specialized <br/> Dental Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded uppercase mb-4 inline-block">
                {service.category}
              </span>
              <h3 className="text-[#1e4b8a] text-xl font-black mb-3 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {service.desc}
              </p>
              <button 
                className="text-[#00a3c8] text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}