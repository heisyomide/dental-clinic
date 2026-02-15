"use client";
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Dental Implants",
    slug: "dental-implants",
    desc: "Titanium-grade specialist tooth replacement for a permanent, natural-feeling smile.",
    type: "Specialist",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Orthodontics",
    slug: "orthodontics",
    desc: "Advanced alignment using clear aligners and specialist braces for all ages.",
    type: "Specialist",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Oral Surgery",
    slug: "oral-surgery",
    desc: "Expert surgical extractions and gum treatments in a sterile specialist environment.",
    type: "Surgery",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 002.828 0l1.16-1.16z" />
      </svg>
    )
  },
  {
    title: "Teeth Whitening",
    slug: "whitening",
    desc: "Professional laser whitening for immediate, long-lasting brightness.",
    type: "General",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#00a3c8] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Expertise</p>
          <h2 className="text-[#1e4b8a] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            SPECIALIST <br /> <span className="text-[#00a3c8]">DENTAL CARE</span>
          </h2>
          <p className="text-slate-500 font-bold text-sm md:text-base uppercase max-w-lg leading-tight">
            We offer advanced clinical procedures using the latest technology in Osun State.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            /* Updated: Card now links to the dynamic ID page */
            <Link 
              href={`/services/${service.slug}`} 
              key={index}
              className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#f0f9ff] text-[#00a3c8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1e4b8a] group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              
              <div className="mb-4">
                <span className="text-[9px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-[#00a3c8]/20 group-hover:text-[#00a3c8] transition-colors">
                  {service.type}
                </span>
              </div>

              <h3 className="text-[#1e4b8a] text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#00a3c8] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            {/* Updated: This button goes to the general services list */}
            <Link 
              href="/services"
              className="inline-block bg-transparent border-2 border-[#1e4b8a]/20 text-[#1e4b8a] font-black py-4 px-12 rounded-full uppercase text-[10px] tracking-widest hover:bg-[#1e4b8a] hover:text-white transition-all shadow-md"
            >
                Explore All Services
            </Link>
        </div>

      </div>
    </section>
  );
}