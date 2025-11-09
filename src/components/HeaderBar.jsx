import React from 'react';

export default function HeaderBar({ onOpenCreate, currentView, setCurrentView }) {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/5 border-b border-teal-400/30 shadow-[0_0_30px_rgba(0,200,215,0.15)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300/70 to-cyan-400/70 ring-2 ring-[#A89B5C]/60 shadow-[0_0_25px_rgba(0,200,215,0.6)]" />
        <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-[#F4F4F8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F8] via-[#A89B5C] to-[#F4F4F8]">QuestBoard</span>{' '}
          <span className="text-[#A89B5C]">RPG</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-2 text-sm">
        {['Dashboard', 'Profile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentView(tab.toLowerCase())}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentView === tab.toLowerCase()
                ? 'bg-teal-400/20 text-teal-200 border border-teal-300/30'
                : 'text-zinc-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={onOpenCreate}
          className="group relative overflow-hidden px-4 py-2 rounded-md text-sm font-medium text-[#0C1424] bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_10px_35px_-10px_rgba(0,200,215,0.8)] hover:shadow-[0_10px_45px_-8px_rgba(0,200,215,0.95)] transition-all"
        >
          <span className="relative z-10">New Quest ✨</span>
          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/40" />
        </button>
      </div>
    </header>
  );
}
