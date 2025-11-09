import React, { useMemo, useState } from 'react';
import AuthPortal from './components/AuthPortal';
import HeaderBar from './components/HeaderBar';
import LeftProfilePanel from './components/LeftProfilePanel';
import QuestBoard from './components/QuestBoard';
import CreateQuestModal from './components/CreateQuestModal';

function BackgroundAura() {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0C1424_0%,_#0A1220_40%,_#070E1A_100%)]" />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 -top-10 -left-10 bg-cyan-400/15 blur-3xl rounded-full" />
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-emerald-400/10 blur-3xl rounded-full" />
      </div>
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,200,215,0.2) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(168,155,92,0.15) 0, transparent 35%)' }} />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-cyan-200/60 rounded-full" style={{ left: `${(i * 137) % 100}%`, top: `${(i * 73) % 100}%`, boxShadow: '0 0 8px rgba(0,200,215,0.6)' }} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const [quests, setQuests] = useState([
    {
      id: 'q1',
      title: 'Retrieve the Azure Crystal',
      description: 'A rare crystal was seen deep in the Whispering Woods. Recover it before the fog consumes the path.',
      difficulty: 'A',
      reward: '200g + 💎',
      xp: 200,
      status: 'Available',
      icon: '💎',
      postedBy: 'Guild Archivist',
    },
    {
      id: 'q2',
      title: 'Shield the Caravan',
      description: 'Merchants bound for Highspire request protection against dusk raiders along the old causeway.',
      difficulty: 'B',
      reward: '120g',
      xp: 120,
      status: 'In Progress',
      icon: '🛡️',
      postedBy: 'Trade Union',
    },
    {
      id: 'q3',
      title: 'Stars of the Academy',
      description: 'Assist students in calibrating their ether lenses for the semester showcase.',
      difficulty: 'C',
      reward: '60g + ✨',
      xp: 60,
      status: 'Completed',
      icon: '✨',
      postedBy: 'Arcanum Dept.',
    },
  ]);

  const profile = useMemo(
    () => ({
      name: user || 'Aster Vale',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop',
      rank: 'Silver',
      level: 12,
      xp: 1240,
      nextLevelXp: 1500,
      stats: { quests: quests.length, stars: 34, crystals: 5 },
    }),
    [user, quests.length]
  );

  const onCreateQuest = (q) => {
    const id = `q${Date.now()}`;
    setQuests([{ id, postedBy: 'You', ...q }, ...quests]);
  };

  if (!user) {
    return (
      <>
        <AuthPortal onEnter={(email) => setUser(email)} />
      </>
    );
  }

  return (
    <div className="relative min-h-screen text-[#F4F4F8]">
      <BackgroundAura />

      <div className="relative z-10 max-w-7xl mx-auto">
        <HeaderBar onOpenCreate={() => setShowCreate(true)} currentView={currentView} setCurrentView={setCurrentView} />

        <main className="flex flex-col md:flex-row gap-4 px-4 py-6">
          <LeftProfilePanel profile={profile} />
          {currentView === 'dashboard' && (
            <QuestBoard quests={quests} onSelect={() => {}} />
          )}
          {currentView === 'profile' && (
            <section className="flex-1 p-4">
              <div className="rounded-2xl p-6 bg-white/5 border border-[#A89B5C]/30 shadow-[inset_0_0_0_1px_rgba(168,155,92,0.15),0_20px_60px_-20px_rgba(168,155,92,0.35)]">
                <h2 className="text-white font-semibold text-lg">Digital Guild Card</h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                    <div className="text-zinc-300 text-sm">Badges</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Scholar','Pathfinder','Artisan','Mentor'].map((b) => (
                        <span key={b} className="px-2 py-1 text-xs rounded-full border border-teal-300/30 bg-teal-400/10 text-teal-100">{b}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                    <div className="text-zinc-300 text-sm">Level Progress</div>
                    <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden ring-1 ring-cyan-300/30">
                      <div className="h-full w-2/3 bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_0_20px_rgba(0,200,215,0.7)]" />
                    </div>
                    <div className="mt-2 text-xs text-zinc-300">Level {profile.level} • {profile.xp}/{profile.nextLevelXp} XP</div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      <CreateQuestModal open={showCreate} onClose={() => setShowCreate(false)} onCreate={onCreateQuest} />
    </div>
  );
}
