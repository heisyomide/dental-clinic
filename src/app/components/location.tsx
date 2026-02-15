"use client";
import React from 'react';
import Link from 'next/link';

export default function ClinicLocation() {
  // Encoded address for the Google Maps Embed API
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.51888360251!2d4.546699775876361!3d7.78783490656041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037879e1568d357%3A0xb00d4a955db77e71!2sCrystal%20Specialist%20Dental%20Clinic!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng";

  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto">
        <div className="bg-[#1e4b8a] rounded-[50px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Info Side */}
          <div className="lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
              Visit Our <br/> <span className="text-[#00a3c8]">Specialist Center</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-1">Our Address</p>
                  <p className="text-white font-bold leading-relaxed">
                    Shop A42, Omoluabi Shopping Plaza, <br/> 
                    Old Garage, Osogbo, Osun State.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-2xl">⏰</div>
                <div>
                  <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-1">Working Hours</p>
                  <p className="text-white font-bold">
                    Mon — Sat: 8:00 AM - 6:00 PM <br/> 
                    <span className="text-[#00a3c8]">Emergency: 24/7 Available</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Updated to link to Contact Page */}
            <Link 
              href="/contact" 
              className="mt-12 inline-block bg-white text-[#1e4b8a] font-black py-5 px-10 rounded-full text-center uppercase text-xs tracking-widest hover:bg-[#00a3c8] hover:text-white transition-all shadow-lg"
            >
              Get Directions
            </Link>
          </div>

          {/* Fixed Map Side */}
          <div className="lg:w-1/2 h-[450px] lg:h-auto bg-slate-200 relative">
             <iframe 
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-none"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crystal Specialist Dental Clinic Location"
             />
             {/* Subtle overlay to guide user interaction */}
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm pointer-events-none">
                <p className="text-[#1e4b8a] text-[9px] font-black uppercase">Osogbo Specialist Hub</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}