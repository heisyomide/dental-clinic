"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentSchema, AppointmentInput } from '@/lib/validators';

export default function AppointmentForm() {
  const router = useRouter();
  
  // Use the schema type directly in useForm
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      gender: 'Male',
      service: 'General Checkup',
      paymentStatus: 'Pending', // Matches the strict Zod enum
    }
  });

  // Use SubmitHandler type to ensure 'values' and 'data' match internal types
  const onSubmit: SubmitHandler<AppointmentInput> = async (values) => {
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        // Dynamic redirect for 50% deposit logic
        router.push(`/pay?id=${result.id}&service=${encodeURIComponent(values.service)}`);
      } else {
        alert("Failed to save appointment. Please try again.");
      }
    } catch (err) {
      console.error("System Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-[#1e4b8a]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase tracking-widest ml-1">Full Name</label>
          <input 
            {...register("name")} 
            className={`p-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-[#00a3c8] transition-all ${errors.name ? 'ring-2 ring-red-400' : ''}`} 
          />
          {errors.name && <span className="text-[9px] text-red-500 font-bold ml-2">{errors.name.message}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase tracking-widest ml-1">Phone Number</label>
          <input 
            {...register("phone")} 
            className="p-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-[#00a3c8]" 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Age */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase tracking-widest ml-1">Age</label>
          <input type="number" {...register("age")} className="p-4 rounded-2xl bg-slate-50 outline-none" />
        </div>
        
        {/* Gender */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-black uppercase tracking-widest ml-1">Gender</label>
          <select {...register("gender")} className="p-4 rounded-2xl bg-slate-50 outline-none cursor-pointer">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Specialist Service */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-black uppercase tracking-widest ml-1">Specialist Service</label>
        <select {...register("service")} className="p-4 rounded-2xl bg-slate-50 outline-none cursor-pointer">
          <option value="General Checkup">General Checkup</option>
          <option value="Dental Implants">Dental Implants</option>
          <option value="Orthodontics">Orthodontics (Braces)</option>
          <option value="Oral Surgery">Oral Surgery</option>
        </select>
      </div>

      {/* Medical History */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-black uppercase tracking-widest ml-1">Medical History</label>
        <textarea 
          {...register("medicalHistory")} 
          rows={3} 
          className="p-4 rounded-2xl bg-slate-50 outline-none resize-none" 
          placeholder="List any allergies or past surgeries..." 
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input type="date" {...register("date")} className="p-4 rounded-2xl bg-slate-50 outline-none" />
        <input type="time" {...register("time")} className="p-4 rounded-2xl bg-slate-50 outline-none" />
      </div>

      <button 
        disabled={isSubmitting} 
        className="w-full bg-[#1e4b8a] text-white font-black py-5 rounded-2xl shadow-xl hover:bg-[#00a3c8] transition-all uppercase text-[11px] tracking-widest mt-4"
      >
        {isSubmitting ? "Generating Invoice..." : "Continue to Payment"}
      </button>
    </form>
  );
}