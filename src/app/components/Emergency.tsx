export function EmergencyCall() {
  return (
    <a 
      href="tel:+2348033531025" 
      className="fixed bottom-8 right-8 z-[100] bg-red-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 active:scale-95 transition-all group"
    >
      <span className="hidden group-hover:block font-black uppercase text-xs tracking-tighter pl-2">
        Emergency Call
      </span>
      <div className="bg-white/20 p-2 rounded-full">
         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      </div>
    </a>
  );
}