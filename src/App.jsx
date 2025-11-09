import React, { useMemo, useState } from 'react';
import AuthPortal from './components/AuthPortal';
import HeaderBar from './components/HeaderBar';
import LeftProfilePanel from './components/LeftProfilePanel';
import QuestBoard from './components/QuestBoard';
import CreateQuestModal from './components/CreateQuestModal';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'Unexpected error' };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-[#1a120a] text-amber-100 p-6">
          <div className="max-w-lg w-full rounded-xl border border-amber-900/40 bg-[rgba(45,30,15,0.75)] p-6 text-center shadow-[0_20px_60px_-20px_rgba(255,180,90,0.25)]">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-amber-200/80 mb-4">{this.state.message}</p>
            <a href="/" className="inline-block px-4 py-2 rounded-full bg-gradient-to-b from-red-700 to-red-900 text-amber-50">Reload</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function BackgroundAura() {
  return (
    <div className="fixed inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'), url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.9) brightness(0.75)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(20,12,6,0.2),rgba(20,12,6,0.9))]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,200,120,0.18) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(200,120,60,0.14) 0, transparent 35%)' }} />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 70 }).map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-amber-200/70 rounded-full" style={{ left: `${(i * 137) % 100}%`, top: `${(i * 73) % 100}%`, boxShadow: '0 0 8px rgba(255,200,120,0.7)' }} />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />
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
      icon: '📜',
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
      icon: '🗡️',
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
      <AppErrorBoundary>
        <AuthPortal onEnter={(email) => setUser(email)} />
      </AppErrorBoundary>
    );
  }

  return (
    <AppErrorBoundary>
      <div className="relative min-h-screen text-amber-100">
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
                <div className="rounded-2xl p-6 bg-[rgba(45,30,15,0.65)] border border-amber-900/40 shadow-[inset_0_0_0_1px_rgba(120,80,40,0.25),0_20px_60px_-20px_rgba(255,180,90,0.25)]">
                  <h2 className="font-semibold text-lg">Guild Member Profile</h2>
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl p-4 bg-[rgba(30,18,10,0.8)] border border-amber-900/50">
                      <div className="text-amber-200/90 text-sm">Badges</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {['Scholar','Pathfinder','Artisan','Mentor'].map((b) => (
                          <span key={b} className="px-2 py-1 text-xs rounded-full border border-yellow-700/30 bg-yellow-700/10 text-yellow-100">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl p-4 bg-[rgba(30,18,10,0.8)] border border-amber-900/50">
                      <div className="text-amber-200/90 text-sm">Level Progress</div>
                      <div className="mt-2 h-2 rounded-full bg-amber-900/40 overflow-hidden ring-1 ring-yellow-700/30">
                        <div className="h-full w-2/3 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 shadow-[0_0_20px_rgba(255,200,120,0.45)]" />
                      </div>
                      <div className="mt-2 text-xs text-amber-200/80">Level {profile.level} • {profile.xp}/{profile.nextLevelXp} XP</div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>

        <CreateQuestModal open={showCreate} onClose={() => setShowCreate(false)} onCreate={onCreateQuest} />
      </div>
    </AppErrorBoundary>
  );
}
