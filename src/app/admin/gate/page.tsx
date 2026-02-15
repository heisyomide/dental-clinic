"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminGate() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change '1234' to your desired passcode
    if (passcode === '1234') {
      router.push('/admin');
    } else {
      setError(true);
      setPasscode('');
    }
  };

  return (
    <main className="min-h-screen bg-[#1e4b8a] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-2xl text-center">
        <div className="w-16 h-16 bg-[#00a3c8] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        
        <h1 className="text-[#1e4b8a] text-2xl font-black uppercase tracking-tighter mb-2">Specialist Portal</h1>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-8">Access restricted to authorized personnel</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="ENTER PASSCODE"
            className={`w-full bg-slate-50 border-2 ${error ? 'border-red-500' : 'border-slate-100'} rounded-2xl p-5 text-center font-black tracking-[0.5em] text-[#1e4b8a] outline-none focus:border-[#00a3c8] transition-all`}
          />
          {error && <p className="text-red-500 text-[9px] font-black uppercase">Invalid Credentials</p>}
          
          <button 
            type="submit"
            className="w-full bg-[#1e4b8a] text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00a3c8] transition-all"
          >
            Gain Access
          </button>
        </form>

        <button 
          onClick={() => router.push('/')}
          className="mt-8 text-slate-400 text-[9px] font-black uppercase hover:text-[#1e4b8a]"
        >
          Return to Patient Site
        </button>
      </div>
    </main>
  );
}