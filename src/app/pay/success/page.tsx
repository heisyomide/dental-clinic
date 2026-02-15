"use client";
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [refId, setRefId] = useState("");

  useEffect(() => {
    setMounted(true);
    // Generate ID only on client to match your previous logic without hydration errors
    setRefId(`CR-${Math.floor(Math.random() * 9000) + 1000}`);
  }, []);

  const name = searchParams.get('name') || "Valued Patient";
  const service = searchParams.get('service') || "General Consultation";
  const date = searchParams.get('date') || "Scheduled Date";

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT: THE DIGITAL RECEIPT */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[50px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden">
                <div className="bg-[#1e4b8a] p-10 md:p-14 text-white relative overflow-hidden">
                  {/* Branding Watermark */}
                  <div className="absolute top-0 right-0 p-8 opacity-10 select-none">
                      <span className="text-7xl md:text-9xl font-black italic tracking-tighter">CRYSTAL</span>
                  </div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-[#00a3c8] rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                      Appointment <br /> Confirmed
                    </h1>
                    <div className="mt-6 inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.3em]">
                        Reference ID: <span className="text-white">{refId}</span>
                        </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 mb-12">
                    <DataBlock label="Patient Name" value={name} color="text-[#1e4b8a]" />
                    <DataBlock label="Specialist Service" value={service} color="text-[#00a3c8]" />
                    <DataBlock label="Scheduled Date" value={date} color="text-[#1e4b8a]" />
                    <DataBlock label="Payment Status" value="Verified 50% Deposit" color="text-green-500" />
                  </div>

                  <div className="bg-slate-50 rounded-[35px] p-8 border border-slate-100 flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl">🏥</div>
                      <div>
                          <p className="text-[#1e4b8a] font-black text-[10px] uppercase tracking-widest mb-1">Clinic Location</p>
                          <p className="text-slate-500 text-sm font-bold uppercase leading-tight">
                              Crystal Specialist Dental Clinic, <br />
                              <span className="text-[#00a3c8]">Suite 12, Medical Plaza, Osogbo.</span>
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CLINIC SHOWCASE & GUIDES */}
            <div className="space-y-8">
              <div className="aspect-[3/4] bg-slate-200 rounded-[60px] overflow-hidden relative border-[12px] border-white shadow-xl">
                 <img 
                   src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                   alt="Crystal Specialist Clinic Interior"
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1e4b8a] via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-10 left-10 right-10 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Our Facility</p>
                    <p className="text-2xl font-black uppercase tracking-tighter leading-none">Modern Surgical <br /> Theatre</p>
                 </div>
              </div>

              <div className="bg-[#00a3c8] p-10 rounded-[50px] text-white shadow-2xl shadow-cyan-900/20">
                  <h4 className="font-black uppercase text-xs tracking-widest mb-6 border-b border-white/20 pb-4">Arrival Protocol</h4>
                  <ul className="space-y-5 text-[11px] font-black uppercase tracking-wider">
                      <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 bg-white rounded-full" /> No food 2hrs before surgery</li>
                      <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 bg-white rounded-full" /> Present this Digital Receipt</li>
                      <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 bg-white rounded-full" /> Arrive 15 mins before time</li>
                  </ul>
                  <Link href="/" className="mt-10 block text-center bg-[#1e4b8a] text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-[#1e4b8a] transition-all">
                      Back to Dashboard
                  </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Sub-component for clarity
const DataBlock = ({ label, value, color }: { label: string, value: string, color: string }) => (
    <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{label}</p>
        <p className={`${color} font-black text-2xl uppercase tracking-tighter leading-none`}>{value}</p>
    </div>
);

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black text-[#1e4b8a] uppercase tracking-widest animate-pulse">Initializing Receipt...</div>}>
      <SuccessContent />
    </Suspense>
  );
}