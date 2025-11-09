import React from 'react';

export default function LeftProfilePanel({ profile }) {
  const progress = Math.min(100, Math.round((profile.xp % profile.nextLevelXp) / profile.nextLevelXp * 100));

  return (
    <aside className="relative z-10 w-full md:w-72 lg:w-80 shrink-0 p-4">
      <div className="relative rounded-2xl p-5 bg-white/5 border border-[#A89B5C]/30 shadow-[inset_0_0_0_1px_rgba(168,155,92,0.15),0_10px_40px_-10px_rgba(0,200,215,0.35)] overflow-hidden">
        <div className="absolute -top-16 -right-20 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-xl object-cover ring-2 ring-emerald-300/40 shadow-[0_0_25px_rgba(0,200,215,0.35)]"
          />
          <div>
            <h3 className="text-white font-semibold leading-tight">{profile.name}</h3>
            <p className="text-teal-200/80 text-sm">Guild Rank • {profile.rank}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-zinc-300">
            <span>Level {profile.level}</span>
            <span>{profile.xp} / {profile.nextLevelXp} XP</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden ring-1 ring-cyan-300/30">
            <div
              className="h-full bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_0_20px_rgba(0,200,215,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Quests', value: profile.stats.quests, icon: '📜' },
            { label: 'Stars', value: profile.stats.stars, icon: '✨' },
            { label: 'Crystals', value: profile.stats.crystals, icon: '💎' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
              <div className="text-lg">{s.icon}</div>
              <div className="text-white font-semibold leading-tight">{s.value}</div>
              <div className="text-xs text-zinc-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
