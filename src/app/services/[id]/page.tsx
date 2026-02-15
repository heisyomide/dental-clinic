"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

const SERVICE_DETAILS: Record<string, any> = {
  "dental-implants": {
    title: "Dental Implants",
    tagline: "Specialist Tooth Replacement",
    description: "Dental implants are titanium posts surgically positioned into the jawbone. They provide a permanent, natural-feeling foundation for replacement teeth, restoring your smile architecture and bone health in Osogbo.",
    image: "/implant.jpg",
    process: ["Clinical Consultation", "3D Bone Mapping", "Precision Implant Placement", "Final Crown Attachment"],
    benefits: ["Permanent Solution", "Natural Appearance", "Prevents Bone Loss"],
    price: "₦150,000"
  },
  "orthodontics": {
    title: "Orthodontics",
    tagline: "Alignment Specialists",
    description: "Correcting misaligned teeth and bite issues using advanced ceramic braces and invisible clear aligner technology. We specialize in both pediatric and adult smile transformations.",
    image: "/orth.jpg",
    process: ["Initial Scan", "Custom Aligner Design", "Strategic Realignment", "Retainment Phase"],
    benefits: ["Discrete Options", "Improved Jaw Health", "Perfect Smile"],
    price: "₦200,000"
  },
  "oral-surgery": {
    title: "Oral Surgery",
    tagline: "Surgical Theatre Unit",
    description: "Expert procedures including wisdom tooth extraction, gum grafting, and corrective jaw surgery. All surgeries are performed in our sterile specialist environment in Osun State.",
    image: "/oral.jpg",
    process: ["Pre-Op Evaluation", "Pain Management", "Clinical Surgery", "Post-Op Care"],
    benefits: ["Expert Surgeons", "Painless Techniques", "Rapid Recovery"],
    price: "₦50,000"
  },
  "whitening": {
    title: "Teeth Whitening",
    tagline: "Clinical Brightening",
    description: "Our professional-grade laser whitening system removes years of deep staining from coffee, tobacco, or aging in just a single 60-minute clinical session.",
    image: "/white.jpg",
    process: ["Shade Analysis", "Gum Protection", "Laser Activation", "Fluoride Treatment"],
    benefits: ["Instant Results", "Safe for Enamel", "Long Lasting"],
    price: "₦10,000"
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const data = SERVICE_DETAILS[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#1e4b8a]">Service Not Found</h1>
          <Link href="/" className="text-[#00a3c8] mt-4 block font-bold uppercase tracking-widest text-[10px]">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Fixed: Only sticky on desktop (lg:sticky), relative on mobile */}
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border-[16px] border-slate-50 shadow-2xl">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#00a3c8] text-white p-8 rounded-[30px] shadow-xl">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1">Starting From</p>
                 <p className="text-3xl font-black">{data.price}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="pt-10">
              <span className="text-[#00a3c8] text-xs font-black uppercase tracking-[0.4em]">{data.tagline}</span>
              <h1 className="text-[#1e4b8a] text-6xl md:text-8xl font-black uppercase tracking-tighter mt-4 leading-none mb-8">
                {data.title}
              </h1>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                {data.description}
              </p>

              {/* The "Everything they need to know" details */}
              <div className="mb-12">
                <h3 className="text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest mb-6">The Specialist Process</h3>
                <div className="space-y-4">
                  {data.process.map((step: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      {/* Added shrink-0 to keep the circle round on mobile */}
                      <span className="w-10 h-10 bg-[#1e4b8a] text-white flex items-center justify-center rounded-xl font-black text-sm shrink-0">0{i+1}</span>
                      <p className="text-[#1e4b8a] font-bold uppercase text-[11px] tracking-tight">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/book?service=${id}`}
                  className="bg-[#1e4b8a] text-white px-12 py-6 rounded-3xl font-black uppercase text-[11px] tracking-widest hover:bg-[#00a3c8] transition-all shadow-xl text-center"
                >
                  Secure Booking
                </Link>
                <Link 
                  href="/#services"
                  className="bg-slate-100 text-[#1e4b8a] px-12 py-6 rounded-3xl font-black uppercase text-[11px] tracking-widest hover:bg-slate-200 transition-all text-center"
                >
                  Back to Overview
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