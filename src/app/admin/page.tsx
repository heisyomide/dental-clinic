"use client";
import React, { useEffect, useState } from 'react';

// Mock data for the system - In production, this comes from your useAppointments hook
const stats = [
  { label: "Total Bookings", value: "128", color: "text-blue-600" },
  { label: "Pending Today", value: "5", color: "text-orange-500" },
  { label: "Completed", value: "112", color: "text-green-600" },
];

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  // Logic to fetch appointments from /api/appointments would go here

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-[#1e4b8a] text-3xl font-black uppercase tracking-tighter">Clinic Command Center</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Crystal Specialist Dental Clinic</p>
          </div>
          <button className="bg-[#1e4b8a] text-white text-[10px] font-black py-3 px-6 rounded-xl uppercase tracking-widest hover:bg-[#00a3c8] transition-all">
            Export Data
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
              <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-50">
            <h2 className="text-[#1e4b8a] font-black uppercase text-sm tracking-widest">Recent Appointments</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[#1e4b8a] text-[10px] font-black uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Patient</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date/Time</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Sample Row */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-black text-[#1e4b8a] text-sm uppercase">John Doe</p>
                    <p className="text-slate-400 text-[10px]">0803 123 4567</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded-md uppercase">
                      Dental Implants
                    </span>
                  </td>
                  <td className="px-6 py-5 text-xs font-bold text-slate-600">
                    Oct 24, 2023 • 10:30 AM
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-orange-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase">Pending</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <button className="text-[#00a3c8] text-[10px] font-black uppercase tracking-widest hover:underline">
                      Confirm via WA
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}