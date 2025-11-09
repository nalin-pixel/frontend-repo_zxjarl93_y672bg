import React, { useState } from 'react';

export default function CreateQuestModal({ open, onClose, onCreate }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    difficulty: 'C',
    reward: '50g',
    status: 'Available',
    icon: '📜',
  });

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onCreate({ ...form, xp: form.difficulty === 'S' ? 300 : form.difficulty === 'A' ? 200 : form.difficulty === 'B' ? 120 : 60 });
    onClose();
    setForm({ title: '', description: '', difficulty: 'C', reward: '50g', status: 'Available', icon: '📜' });
  };

  return (
    <div className="fixed inset-0 z-30 grid place-items-center p-4">
      <div className="absolute inset-0 bg-[#0C1424]/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-teal-400/30 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_30px_80px_-20px_rgba(0,200,215,0.45)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(0,200,215,0.08),transparent_60%)]" />
        <form onSubmit={submit} className="relative p-6">
          <h3 className="text-white text-lg font-semibold">Create New Quest</h3>
          <p className="text-zinc-300 text-sm">Parchment panel with floating magic particles</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Title</label>
              <input
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white placeholder:text-zinc-400"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Retrieve the Lost Crystal"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Reward</label>
              <input
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white"
                value={form.reward}
                onChange={(e) => setForm({ ...form, reward: e.target.value })}
                placeholder="100g + ✨"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-zinc-300 mb-1">Description</label>
              <textarea
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white min-h-[100px]"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="A mysterious fog has covered the Whispering Woods..."
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Difficulty</label>
              <select
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white"
                value={form.difficulty}
                onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              >
                {['S','A','B','C'].map((d) => (
                  <option key={d} value={d} className="bg-[#0C1424]">{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Icon</label>
              <select
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white"
                value={form.icon}
                onChange={(e) => setForm({ ...form, icon: e.target.value })}
              >
                {['🗡️','🛡️','💎','✨','📜'].map((i) => (
                  <option key={i} value={i} className="bg-[#0C1424]">{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Status</label>
              <select
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-teal-300/50 outline-none px-3 py-2 text-white"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                {['Available','In Progress','Completed'].map((s) => (
                  <option key={s} value={s} className="bg-[#0C1424]">{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-zinc-200 bg-white/10 hover:bg-white/15 border border-white/15">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md text-[#0C1424] font-medium bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_10px_35px_-10px_rgba(0,200,215,0.8)]">Create Quest</button>
          </div>
        </form>
      </div>
    </div>
  );
}
