"use client";
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

// Detailed Case Data
const cases = [
  {
    title: "Full Arch Implants",
    category: "Oral Surgery",
    image: "/implant1.jpg",
    stats: "Total Smile Restoration"
  },
  {
    title: "Orthodontic Realignment",
    category: "Specialist Braces",
    image: "/allig.jpg",
    stats: "18-Month Transformation"
  },
  {
    title: "Cosmetic Veneers",
    category: "Aesthetic Dentistry",
    image: "/veneer.jpg",
    stats: "Gap Closure & Whitening"
  },
  {
    title: "Surgical Reconstruction",
    category: "Maxillofacial",
    image: "/recon.jpg",
    stats: "Complex Bone Grafting"
  }
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00a3c8] text-[10px] font-black uppercase tracking-[0.4em]">Clinical Excellence</span>
          <h1 className="text-[#1e4b8a] text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4">
            Proven <br /> Transformations
          </h1>
          <p className="text-slate-400 mt-6 font-bold uppercase text-[10px] tracking-widest">Real Results from our Specialist Theatre</p>
        </div>

        {/* Transformation Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {cases.map((item, i) => (
            <div key={i} className="group flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 rounded-[50px] overflow-hidden border-[12px] border-slate-50 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                 {/* Main Result Image */}
                 <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                 />
                 
                 {/* "AFTER" Badge */}
                 <div className="absolute top-6 right-6 bg-[#00a3c8] text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                   Final Result
                 </div>
              </div>

              {/* Case Details */}
              <div className="mt-8 px-4">
                 <div className="flex justify-between items-end">
                    <div>
                        <span className="text-[#00a3c8] font-black text-[9px] uppercase tracking-widest">{item.category}</span>
                        <h3 className="text-[#1e4b8a] text-2xl font-black uppercase tracking-tight mt-1">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 font-bold text-[10px] uppercase pb-1">{item.stats}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Testimonials Section */}
        <section className="bg-[#1e4b8a] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
              <h2 className="text-[150px] font-black uppercase leading-none">Trust</h2>
          </div>
          
          <h2 className="text-3xl font-black uppercase mb-16 relative z-10">What our Patients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {testimonials.map((t, i) => (
              <div key={i} className="space-y-6">
                <div className="flex gap-1 text-[#00a3c8]">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-blue-100/80 italic text-base leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                    <div className="w-8 h-[2px] bg-[#00a3c8]"></div>
                    <p className="font-black text-[10px] uppercase tracking-[0.2em]">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-24 text-center">
            <Link href="/book" className="bg-[#00a3c8] text-white px-16 py-7 rounded-full font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-[#1e4b8a] transition-all inline-block">
                Start your transformation
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const testimonials = [
  { text: "The specialist here changed my life. I can finally smile with confidence and eat without pain.", author: "Olamide J." },
  { text: "Best oral surgery facility in West Africa. Highly efficient and the theatre is world-class.", author: "Dr. Adeoti" },
  { text: "Seamless process from booking to the final checkup. Truly a specialist-grade experience.", author: "Samuel K." }
];