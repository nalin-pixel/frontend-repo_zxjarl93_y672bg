import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function AuthPortal({ onEnter }) {
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onEnter(email || 'adventurer@guild.co');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LSYxO0lQH9FWZ3dQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(12,20,36,0.4),rgba(12,20,36,0.85))]" />

      <div className="relative z-10 grid place-items-center min-h-screen px-4">
        <div className="w-full max-w-md pointer-events-auto rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-teal-400/30 shadow-[0_30px_80px_-20px_rgba(0,200,215,0.45)]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#F4F4F8]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F8] via-[#A89B5C] to-[#F4F4F8]">QuestBoard</span> <span className="text-[#A89B5C]">RPG</span>
            </h1>
            <p className="text-zinc-300 mt-2">Enter the glowing portal to your guild workspace</p>
          </div>

          <form onSubmit={submit} className="mt-6 space-y-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white placeholder:text-zinc-400"
            />
            <button
              type="submit"
              className="w-full rounded-md py-2 font-medium text-[#0C1424] bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_10px_35px_-10px_rgba(0,200,215,0.8)] hover:shadow-[0_10px_45px_-8px_rgba(0,200,215,0.95)]"
            >
              Enter Portal ✨
            </button>
          </form>

          <div className="mt-4 text-[11px] text-zinc-300 text-center">
            Tips: pilih style "Modern Fantasy UI" • aspect 16:9 • untuk versi klasik, tambahkan wood texture + engraved metal borders
          </div>
        </div>
      </div>
    </div>
  );
}
