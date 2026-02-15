"use client";
import React from 'react';

const cases = [
  {
    id: 1,
    title: "Full Arch Implants",
    description: "Restoring full function and aesthetics for a missing set of teeth.",
    tag: "Surgery",
    before: "/dental before.jpg",
    after: "/dental after.jpg"
  },
  {
    id: 2,
    title: "Advanced Orthodontics",
    description: "Correction of severe crowding using specialist alignment techniques.",
    tag: "Braces",
    before: "/beforebraces.jpg",
    after: "/afterbraces.jpg"
  },
  {
    id: 3,
    title: "Professional Whitening",
    description: "Deep staining removal resulting in a 5-shade brighter smile.",
    tag: "Cosmetic",
    before: "/costbefore.jpg",
    after: "/cosafter.jpg"
  }
];

export default function ResultsGallery() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="bg-[#00a3c8]/10 self-start px-3 py-1 rounded-md mb-4 inline-block">
              <p className="text-[#00a3c8] text-[10px] font-black uppercase tracking-[0.2em]">Proven Results</p>
            </div>
            <h2 className="text-[#1e4b8a] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              SMILE <br /> <span className="text-[#00a3c8]">TRANSFORMATIONS</span>
            </h2>
          </div>
          <p className="text-slate-500 font-bold text-sm max-w-xs uppercase leading-tight tracking-tight">
            See how our specialists at Old Garage, Osogbo are changing lives one smile at a time.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((item) => (
            <div key={item.id} className="group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[40px] bg-slate-100 aspect-[4/5] shadow-2xl transition-all duration-500 group-hover:shadow-[#00a3c8]/20">
                
                {/* Main After Image */}
                <img 
                  src={item.after} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Before Thumbnail Overlay */}
                <div className="absolute bottom-6 left-6 w-32 aspect-square rounded-3xl border-4 border-white shadow-2xl overflow-hidden z-20">
                  <div className="absolute top-0 left-0 bg-black/60 text-white text-[8px] font-black px-2 py-0.5 uppercase">Before</div>
                  <img src={item.before} className="w-full h-full object-cover" alt="Before" />
                </div>

                {/* Tag Overlay */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full z-20">
                  <p className="text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest">{item.tag}</p>
                </div>
              </div>

              {/* Text Detail */}
              <div className="mt-8 px-2">
                <h3 className="text-[#1e4b8a] text-xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-4">{item.description}</p>
                <div className="h-1 w-12 bg-[#00a3c8] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Footer */}
        <div className="mt-20 p-10 bg-[#f0f9ff] rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#1e4b8a] font-black uppercase text-xl text-center md:text-left tracking-tighter">
            Join 5,000+ Happy Patients <br /> <span className="text-[#00a3c8]">In Osun State</span>
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-[#1e4b8a] text-white font-black py-5 px-12 rounded-full uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-[#00a3c8] transition-all"
          >
            Start Your Transformation
          </button>
        </div>

      </div>
    </section>
  );
}