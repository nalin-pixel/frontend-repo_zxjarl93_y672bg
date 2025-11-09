import React from 'react';

function StatusTag({ status }) {
  const map = {
    Available: 'bg-emerald-700/20 text-amber-100 border-emerald-800/30',
    'In Progress': 'bg-amber-600/20 text-amber-100 border-amber-700/30',
    Completed: 'bg-yellow-600/20 text-yellow-200 border-yellow-700/40',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs border ${map[status] || 'bg-white/10 text-amber-100/80'}`}>{status}</span>
  );
}

export default function QuestBoard({ quests, onSelect }) {
  return (
    <section className="relative z-10 flex-1 p-4">
      <div className="relative rounded-2xl p-6 bg-[rgba(45,30,15,0.65)] border border-amber-900/40 shadow-[inset_0_0_0_1px_rgba(120,80,40,0.25),0_20px_50px_-15px_rgba(255,180,90,0.25)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,200,120,0.06),transparent_60%)]" />
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-amber-100 font-semibold text-lg">Guild Quest Board</h2>
          <div className="text-amber-200/80 text-sm">{quests.length} quests</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {quests.map((q) => (
            <button
              key={q.id}
              onClick={() => onSelect(q)}
              className="group text-left w-full rounded-xl overflow-hidden bg-[rgba(30,18,10,0.8)] border border-amber-900/50 hover:border-yellow-600/40 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-18px_rgba(255,180,90,0.25)] transition-all"
            >
              <div className="relative p-5">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop')", backgroundSize:'cover', backgroundPosition:'center' }} />
                <div className="flex items-start gap-3">
                  <div className="text-2xl leading-none">{q.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-amber-100 font-semibold tracking-wide">
                        {q.title}
                      </h3>
                      <StatusTag status={q.status} />
                    </div>
                    <p className="mt-1 text-amber-200/90 text-sm line-clamp-2">
                      {q.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-amber-200/90">
                      <span>Reward: <span className="text-yellow-200">{q.reward}</span></span>
                      <span>Difficulty: <span className="text-amber-300">{q.difficulty}</span></span>
                      <span>XP: <span className="text-yellow-300">{q.xp}</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-gradient-to-r from-yellow-900/20 via-transparent to-amber-800/20 text-xs text-amber-200/90 flex items-center justify-between">
                <span>Posted by {q.postedBy}</span>
                <span className="group-hover:text-amber-100 transition-colors">Open ➜</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
