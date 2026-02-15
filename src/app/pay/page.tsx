"use client";
import { useSearchParams } from 'next/navigation';
import { DENTAL_PRICES } from '@/lib/validators';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') as keyof typeof DENTAL_PRICES || "General Checkup";
  
  // Calculate pricing based on your specialist fixed rates
  const total = DENTAL_PRICES[service] || 0;
  const deposit = total / 2;

  return (
    <main className="min-h-screen bg-[#f0f9ff] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-md w-full border border-blue-50">
        <h2 className="text-[#1e4b8a] text-2xl font-black uppercase mb-2">Secure Appointment</h2>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-8">Specialist Consultation Deposit</p>
        
        <div className="bg-slate-50 p-6 rounded-3xl mb-8 border border-slate-100">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Service</span>
            <span className="text-xs font-black text-[#1e4b8a]">{service}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200">
            <span className="text-[10px] font-black text-[#00a3c8] uppercase">50% Deposit Due</span>
            <span className="text-2xl font-black text-[#1e4b8a]">₦{deposit.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-[#1e4b8a] p-6 rounded-3xl text-white text-center mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#00a3c8] rounded-full blur-2xl opacity-40 -mr-8 -mt-8" />
          <p className="text-[9px] uppercase opacity-60 font-black mb-1">Bank Transfer Details</p>
          <p className="text-xl font-black tracking-widest">0123456789</p>
          <p className="text-xs font-bold uppercase">Access Bank</p>
          <p className="text-[9px] mt-2 font-medium opacity-80">Crystal Specialist Dental Clinic</p>
        </div>

        <button 
          onClick={() => alert("Notification sent to Admin. Please wait for verification.")}
          className="w-full bg-[#00a3c8] text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-lg hover:bg-[#1e4b8a] transition-all"
        >
          I Have Paid
        </button>
      </div>
    </main>
  );
}