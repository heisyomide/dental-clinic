"use client";
import React from 'react';

// Core Sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import MeetTheSpecialist from './components/MeetTheSpecialist';
import ResultsGallery from './components/ResultGallery';
import ClinicLocation from './components/location';

// The "System" Components
import AppointmentForm from './components/AppointmentSection';
import { EmergencyCall } from './components/Emergency';

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. High-Impact Hero Section (Trust Engine) */}
      <Hero />

      {/* 3. Authority Section: Specialized Services */}
      <section id="services">
        <ServicesPreview />
      </section>

      {/* 4. The Specialist Bio (The "Person" behind the brand) */}
      <section id="about">
        <MeetTheSpecialist />
      </section>

      {/* 5. Evidence Section: Real Patient Results */}
      <section id="results">
        <ResultsGallery />
      </section>

      {/* 6. The Core Booking System (Conversion Point) */}
      <section id="booking" className="bg-[#f0f9ff] py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00a3c8] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Secure Your Visit</p>
            <h2 className="text-[#1e4b8a] text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Ready for a <br/> <span className="text-[#00a3c8]">New Smile?</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
             <AppointmentForm />
          </div>
        </div>
      </section>

      {/* 7. Logistics Section: Map & Hours */}
      <section id="location">
        <ClinicLocation />
      </section>

      {/* 8. Global Footer */}
      <Footer />

      {/* 9. Floating Specialist Support (Fixed UI) */}
      <EmergencyCall />
    </main>
  );
}