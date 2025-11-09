import React, { useState } from 'react';

export default function AuthPortal({ onEnter }) {
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onEnter(email || 'adventurer@guild.co');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Medieval tavern backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop'), url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.9) brightness(0.8)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(15,10,5,0.2),rgba(15,10,5,0.85))]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-50" style={{backgroundImage:'radial-gradient(circle at 15% 20%, rgba(255,170,90,0.25) 0, transparent 40%), radial-gradient(circle at 85% 75%, rgba(255,120,80,0.2) 0, transparent 35%)'}} />

      {/* Floating dust particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/70 rounded-full"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 131) % 100}%`,
              boxShadow: '0 0 10px rgba(255, 200, 120, 0.8)',
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 grid place-items-center min-h-screen px-4">
        <div className="w-full max-w-md pointer-events-auto rounded-2xl p-6 bg-[rgba(40,24,12,0.65)] backdrop-blur-sm border border-amber-700/30 shadow-[0_30px_80px_-20px_rgba(255,180,90,0.35)]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-amber-100 drop-shadow">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-100">QuestBoard</span>
              <span className="text-yellow-300"> RPG</span>
            </h1>
            <p className="text-amber-200/80 mt-2">Enter the guild hall through the parchment gate</p>
          </div>

          <form onSubmit={submit} className="mt-6 space-y-3">
            <div className="rounded-xl p-4 bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center border border-amber-900/40 shadow-inner">
              <input
                type="email"
                placeholder="Your guild email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-amber-50/70 text-stone-800 placeholder:text-stone-600 border border-amber-800/30 outline-none px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full relative rounded-full py-2 font-semibold text-amber-50 transition-all"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-700 to-red-900 shadow-[inset_0_2px_6px_rgba(255,255,255,0.2),0_8px_25px_-10px_rgba(255,80,80,0.65)]" />
              <span className="absolute -inset-[2px] rounded-full border border-red-300/30" />
              <span className="relative">Wax Seal Login</span>
            </button>
          </form>

          <div className="mt-4 text-[11px] text-amber-200/80 text-center">
            Style: Fantasy Interface • 16:9 • warm torchlight • realistic wood & parchment
          </div>
        </div>
      </div>
    </div>
  );
}
