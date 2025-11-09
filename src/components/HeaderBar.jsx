import React from 'react';

export default function HeaderBar({ onOpenCreate, currentView, setCurrentView }) {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-[rgba(45,30,15,0.6)] border-b border-amber-800/40 shadow-[0_0_30px_rgba(255,180,90,0.15)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300/70 to-amber-500/70 ring-2 ring-yellow-300/40 shadow-[0_0_25px_rgba(255,200,120,0.5)]" />
        <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-amber-100">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-100">QuestBoard</span>{' '}
          <span className="text-yellow-300">RPG</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-2 text-sm">
        {['Dashboard', 'Profile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentView(tab.toLowerCase())}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentView === tab.toLowerCase()
                ? 'bg-amber-400/15 text-amber-100 border border-amber-300/30'
                : 'text-amber-200/80 hover:text-amber-100 hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={onOpenCreate}
          className="group relative overflow-hidden px-4 py-2 rounded-full text-sm font-semibold text-amber-50"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-700 to-red-900 shadow-[inset_0_2px_6px_rgba(255,255,255,0.2),0_8px_25px_-10px_rgba(255,80,80,0.65)]" />
          <span className="relative">New Quest ✨</span>
        </button>
      </div>
    </header>
  );
}
