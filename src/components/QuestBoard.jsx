import React from 'react';

function StatusTag({ status }) {
  const map = {
    Available: 'bg-emerald-400/15 text-emerald-200 border-emerald-300/30',
    'In Progress': 'bg-cyan-400/15 text-cyan-200 border-cyan-300/30',
    Completed: 'bg-[#A89B5C]/15 text-[#E8E1B0] border-[#A89B5C]/40',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs border ${map[status] || 'bg-white/10 text-white/80'}`}>{status}</span>
  );
}

export default function QuestBoard({ quests, onSelect }) {
  return (
    <section className="relative z-10 flex-1 p-4">
      <div className="relative rounded-2xl p-6 bg-white/5 border border-teal-400/30 shadow-[inset_0_0_0_1px_rgba(0,200,215,0.15),0_20px_50px_-15px_rgba(0,200,215,0.35)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(0,200,215,0.07),transparent_60%)]" />
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Guild Quest Board</h2>
          <div className="text-zinc-300 text-sm">{quests.length} quests</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {quests.map((q) => (
            <button
              key={q.id}
              onClick={() => onSelect(q)}
              className="group text-left w-full rounded-xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-teal-300/40 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-18px_rgba(0,200,215,0.35)] transition-all"
            >
              <div className="relative p-5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay pointer-events-none" />
                <div className="flex items-start gap-3">
                  <div className="text-2xl leading-none">{q.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold tracking-wide">
                        {q.title}
                      </h3>
                      <StatusTag status={q.status} />
                    </div>
                    <p className="mt-1 text-zinc-300 text-sm line-clamp-2">
                      {q.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-zinc-300">
                      <span>Reward: <span className="text-teal-200">{q.reward}</span></span>
                      <span>Difficulty: <span className="text-[#A89B5C]">{q.difficulty}</span></span>
                      <span>XP: <span className="text-cyan-200">{q.xp}</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-gradient-to-r from-[#A89B5C]/20 via-transparent to-teal-400/10 text-xs text-zinc-300 flex items-center justify-between">
                <span>Posted by {q.postedBy}</span>
                <span className="group-hover:text-white transition-colors">Open ➜</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
