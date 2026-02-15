import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const SERVICES = [
  {
    title: "Orthodontics",
    description: "Expert alignment using advanced braces and invisible aligners to perfect your smile architecture.",
    features: ["Traditional Braces", "Invisalign", "Retainers"],
    icon: "🦷",
    price: "₦200,000"
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions using titanium posts that feel and look like natural teeth.",
    features: ["Single Implants", "All-on-4", "Bone Grafting"],
    icon: "🛠️",
    price: "₦150,000"
  },
  {
    title: "Oral Surgery",
    description: "Specialized surgical procedures including wisdom tooth extraction and corrective jaw surgery.",
    features: ["Wisdom Teeth", "Biopsies", "Jaw Surgery"],
    icon: "💉",
    price: "₦50,000"
  },
  {
    title: "General Checkup",
    description: "Comprehensive diagnostic visits including cleaning, X-rays, and specialist consultation.",
    features: ["Scaling & Polishing", "X-Rays", "Consultation"],
    icon: "✨",
    price: "₦10,000"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Header Section */}
        <div className="container mx-auto px-6 mb-20 text-center">
          <span className="text-[#00a3c8] text-[10px] font-black uppercase tracking-[0.4em]">Advanced Departments</span>
          <h1 className="text-[#1e4b8a] text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4">
            Specialist <br /> <span className="text-[#00a3c8]">Solutions</span>
          </h1>
          <p className="text-slate-500 mt-6 max-w-xl mx-auto text-sm font-medium leading-relaxed">
            Crystal Specialist Clinic provides Osogbo's most advanced dental care. 
            Select a department below to begin your journey toward a healthier smile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 rounded-[60px] p-10 md:p-14 border border-transparent hover:border-[#00a3c8] hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex-grow">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-[#1e4b8a] text-3xl font-black uppercase tracking-tighter mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] font-black text-[#1e4b8a] uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-[#00a3c8] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full md:w-auto text-left md:text-right flex flex-col justify-between h-full">
                  <div className="mb-8">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Starting From</p>
                    <p className="text-[#1e4b8a] text-3xl font-black group-hover:text-[#00a3c8] transition-colors">
                      {service.price}
                    </p>
                  </div>
                  
                  <Link 
                    href={`/book?service=${encodeURIComponent(service.title)}`}
                    className="bg-[#1e4b8a] text-white py-5 px-10 rounded-3xl font-black uppercase text-[10px] tracking-widest text-center hover:bg-[#00a3c8] transition-all transform group-hover:-translate-y-1 shadow-xl"
                  >
                    Secure Booking
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="container mx-auto px-6 mt-24">
          <div className="bg-[#1e4b8a] rounded-[60px] p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00a3c8]/20 to-transparent pointer-events-none" />
             <h2 className="text-white text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">
               Not sure which specialist you need?
             </h2>
             <p className="text-blue-100/60 text-xs font-medium mb-8 relative z-10">
               Book a General Checkup, and our primary consultant will direct you to the right department.
             </p>
             <Link href="/contact" className="text-[#00a3c8] font-black uppercase text-[10px] tracking-widest underline underline-offset-8 relative z-10">
               Speak with a Consultant
             </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}