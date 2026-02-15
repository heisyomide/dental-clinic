"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const SLIDES = [
  {
    image: "/hero1.jpg", // Replace with your actual paths
    tag: "Expert Oral Surgery",
    title: "Precision care for your smile."
  },
  {
    image: "/hero2.jpg",
    tag: "Advanced Orthodontics",
    title: "Perfect alignment, lasting beauty."
  },
  {
    image: "/hero3.jpg",
    tag: "Specialist Implants",
    title: "Restoring function and confidence."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#f0f9ff] pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          key={`text-${current}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <p className="text-[#00a3c8] text-xs font-black uppercase tracking-[0.4em] mb-6">
            {SLIDES[current].tag}
          </p>
          <h1 className="text-[#1e4b8a] text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
            Keep your smile <br /> 
            <span className="text-[#00a3c8]">clean & great.</span>
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="bg-[#1e4b8a] text-white px-10 py-6 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-[#00a3c8] transition-all shadow-xl shadow-blue-900/20">
              Explore Services
            </Link>
            <Link href="/book" className="bg-white text-[#1e4b8a] px-10 py-6 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all border border-slate-200">
              Book Appointment
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                ))}
            </div>
            <div>
                <span className="text-3xl font-black text-[#1e4b8a] block leading-none">12,398+</span>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Verified Smile Successes</p>
            </div>
          </div>
        </motion.div>

        {/* Right Slider with Curved Mask */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-[4/5] max-w-[500px] overflow-hidden rounded-[100px] md:rounded-[200px] border-[16px] border-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={current}
                src={SLIDES[current].image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[40px] shadow-2xl hidden md:block"
          >
            <span className="text-5xl">🦷</span>
          </motion.div>

          {/* Slider Indicators */}
          <div className="absolute right-[-40px] flex flex-col gap-3">
             {SLIDES.map((_, i) => (
               <button 
                 key={i}
                 onClick={() => setCurrent(i)}
                 className={`w-2 h-12 rounded-full transition-all duration-500 ${current === i ? 'bg-[#00a3c8] h-20' : 'bg-slate-300'}`}
               />
             ))}
          </div>
        </div>
      </div>

      {/* Improved Background Decoration */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#dcf2ff] to-transparent -z-10 rounded-l-[300px] opacity-40"></div>
    </section>
  );
}