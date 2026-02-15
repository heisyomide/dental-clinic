"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import AppointmentForm from '../components/AppointmentForm';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#f0f9ff]">
      {/* Navbar sits at the top */}
      <Navbar />

      {/* Main Container: pt-32 ensures it starts below the floating Navbar */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            
            {/* Left Info Panel (The "Why Book With Us") */}
            <div className="lg:w-2/5 bg-[#1e4b8a] p-10 md:p-16 text-white relative">
              {/* Specialist Design Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a3c8] rounded-full blur-3xl opacity-20 -mr-16 -mt-16" />
              
              <div className="relative z-10">
                <p className="text-[#00a3c8] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                  Crystal Specialist
                </p>
                <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">
                  Schedule Your <br /> <span className="text-[#00a3c8]">Consultation</span>
                </h1>
                
                <p className="text-blue-100/70 text-sm font-medium mb-10">
                  Please provide your details. Our specialist team will review your request and confirm via WhatsApp.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">📍</div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#00a3c8]">Location</p>
                      <p className="text-xs font-bold">Old Garage, Osogbo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">🕒</div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#00a3c8]">Hours</p>
                      <p className="text-xs font-bold">Mon - Sat: 8am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="lg:w-3/5 p-10 md:p-16 bg-white">
              <div className="mb-8">
                <h2 className="text-[#1e4b8a] text-2xl font-black uppercase tracking-tight">Patient Information</h2>
                <div className="h-1 w-12 bg-[#00a3c8] mt-2" />
              </div>

              {/* Your React Hook Form Component */}
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}