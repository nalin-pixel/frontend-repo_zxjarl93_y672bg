import React from 'react';

export default function LeftProfilePanel({ profile }) {
  const progress = Math.min(100, Math.round((profile.xp % profile.nextLevelXp) / profile.nextLevelXp * 100));

  return (
    <aside className="relative z-10 w-full md:w-72 lg:w-80 shrink-0 p-4">
      <div className="relative rounded-2xl p-5 bg-[rgba(45,30,15,0.6)] border border-amber-900/40 shadow-[inset_0_0_0_1px_rgba(120,80,40,0.25),0_10px_40px_-10px_rgba(255,180,90,0.25)] overflow-hidden">
        <div className="absolute -top-16 -right-20 w-56 h-56 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-xl object-cover ring-2 ring-yellow-300/30 shadow-[0_0_25px_rgba(255,200,120,0.25)]"
          />
          <div>
            <h3 className="text-amber-100 font-semibold leading-tight">{profile.name}</h3>
            <p className="text-amber-200/80 text-sm">Guild Rank • {profile.rank}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-amber-200/80">
            <span>Level {profile.level}</span>
            <span>{profile.xp} / {profile.nextLevelXp} XP</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-amber-900/40 overflow-hidden ring-1 ring-yellow-700/30">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 shadow-[0_0_20px_rgba(255,200,120,0.45)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Quests', value: profile.stats.quests, icon: '📜' },
            { label: 'Bag', value: profile.stats.stars, icon: '💰' },
            { label: 'Crest', value: profile.stats.crystals, icon: '🏰' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-[rgba(30,20,10,0.6)] border border-amber-900/40 p-3">
              <div className="text-lg">{s.icon}</div>
              <div className="text-amber-100 font-semibold leading-tight">{s.value}</div>
              <div className="text-xs text-amber-200/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
