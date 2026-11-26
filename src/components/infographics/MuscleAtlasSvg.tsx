import React, { useState } from 'react';
import { MUSCLE_GROUPS, MuscleGroupInfo } from '../../data/handbookData';

export const MuscleAtlasSvg: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('back');
  const active: MuscleGroupInfo =
    MUSCLE_GROUPS.find((m) => m.id === selectedId) ?? MUSCLE_GROUPS[0];

  const fillFor = (id: string, defaultColor = '#cbd5e1') => {
    if (selectedId === id) return '#0284c7';
    return defaultColor;
  };
  const opacityFor = (id: string) => (selectedId === id ? 0.92 : 0.45);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Anatomical Muscle Atlas &amp; Training Priority Map
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Click any muscle region on the anterior or posterior figure to inspect actions, exercises, and 61 kg load targets.
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500">Section 14.1 · 4.7</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Dual Anatomical SVG Figures */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
          <svg
            viewBox="0 0 420 330"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive front and back anatomical muscle map"
          >
            {/* Labels */}
            <text x="105" y="18" textAnchor="middle" className="fill-slate-600 text-[11px] font-semibold">
              ANTERIOR (FRONT)
            </text>
            <text x="315" y="18" textAnchor="middle" className="fill-slate-600 text-[11px] font-semibold">
              POSTERIOR (BACK)
            </text>

            {/* ================= ANTERIOR SILHOUETTE (x center = 105) ================= */}
            <g>
              {/* Head & Neck */}
              <circle cx="105" cy="42" r="14" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
              <rect x="98" y="55" width="14" height="10" fill="#e2e8f0" />
              {/* Base Torso & Pelvis */}
              <path
                d="M72 68 L138 68 L130 150 L80 150 Z"
                fill="#f1f5f9"
                stroke="#94a3b8"
                strokeWidth="1.2"
              />
              {/* Base Arms */}
              <path d="M72 68 L54 115 L46 160 L58 162 L68 118 L77 82 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              <path d="M138 68 L156 115 L164 160 L152 162 L142 118 L133 82 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              {/* Base Legs */}
              <path d="M80 150 L74 230 L78 308 L93 308 L97 228 L103 162 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              <path d="M130 150 L136 230 L132 308 L117 308 L113 228 L107 162 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />

              {/* Clickable Chest & Shoulders */}
              <g className="cursor-pointer" onClick={() => setSelectedId('chest-shoulders')}>
                <path
                  d="M78 72 L104 75 L104 103 L80 99 Z M132 72 L106 75 L106 103 L130 99 Z"
                  fill={fillFor('chest-shoulders')}
                  fillOpacity={opacityFor('chest-shoulders')}
                  stroke="#475569"
                  strokeWidth="1"
                />
                {/* Anterior/Lateral Delts */}
                <ellipse cx="71" cy="79" rx="9" ry="12" fill={fillFor('chest-shoulders')} fillOpacity={opacityFor('chest-shoulders')} stroke="#475569" strokeWidth="1" />
                <ellipse cx="139" cy="79" rx="9" ry="12" fill={fillFor('chest-shoulders')} fillOpacity={opacityFor('chest-shoulders')} stroke="#475569" strokeWidth="1" />
              </g>

              {/* Clickable Biceps & Forearms */}
              <g className="cursor-pointer" onClick={() => setSelectedId('arms')}>
                <path d="M64 93 L74 96 L67 125 L56 121 Z" fill={fillFor('arms')} fillOpacity={opacityFor('arms')} stroke="#475569" strokeWidth="1" />
                <path d="M146 93 L136 96 L143 125 L154 121 Z" fill={fillFor('arms')} fillOpacity={opacityFor('arms')} stroke="#475569" strokeWidth="1" />
                <path d="M55 126 L65 128 L57 156 L48 154 Z" fill={fillFor('arms')} fillOpacity={opacityFor('arms')} stroke="#475569" strokeWidth="0.9" />
                <path d="M155 126 L145 128 L153 156 L162 154 Z" fill={fillFor('arms')} fillOpacity={opacityFor('arms')} stroke="#475569" strokeWidth="0.9" />
              </g>

              {/* Clickable Core */}
              <g className="cursor-pointer" onClick={() => setSelectedId('core')}>
                <rect
                  x="88"
                  y="105"
                  width="34"
                  height="43"
                  rx="6"
                  fill={fillFor('core')}
                  fillOpacity={opacityFor('core')}
                  stroke="#475569"
                  strokeWidth="1"
                />
                <line x1="105" y1="107" x2="105" y2="146" stroke="#64748b" strokeWidth="0.8" />
                <line x1="90" y1="119" x2="120" y2="119" stroke="#64748b" strokeWidth="0.8" />
                <line x1="90" y1="132" x2="120" y2="132" stroke="#64748b" strokeWidth="0.8" />
              </g>

              {/* Clickable Quads */}
              <g className="cursor-pointer" onClick={() => setSelectedId('quads')}>
                <path d="M80 158 L101 164 L96 222 L77 220 Z" fill={fillFor('quads')} fillOpacity={opacityFor('quads')} stroke="#475569" strokeWidth="1" />
                <path d="M130 158 L109 164 L114 222 L133 220 Z" fill={fillFor('quads')} fillOpacity={opacityFor('quads')} stroke="#475569" strokeWidth="1" />
              </g>

              {/* Clickable Tibialis Anterior */}
              <g className="cursor-pointer" onClick={() => setSelectedId('calves-shins')}>
                <path d="M77 236 L88 236 L87 292 L79 292 Z" fill={fillFor('calves-shins')} fillOpacity={opacityFor('calves-shins')} stroke="#475569" strokeWidth="1" />
                <path d="M133 236 L122 236 L123 292 L131 292 Z" fill={fillFor('calves-shins')} fillOpacity={opacityFor('calves-shins')} stroke="#475569" strokeWidth="1" />
              </g>
            </g>

            {/* ================= POSTERIOR SILHOUETTE (x center = 315) ================= */}
            <g>
              {/* Head & Neck */}
              <circle cx="315" cy="42" r="14" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
              <rect x="308" y="55" width="14" height="10" fill="#e2e8f0" />
              {/* Base Torso */}
              <path d="M282 68 L348 68 L340 150 L290 150 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              {/* Base Arms */}
              <path d="M282 68 L264 115 L256 160 L268 162 L278 118 L287 82 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              <path d="M348 68 L366 115 L374 160 L362 162 L352 118 L343 82 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              {/* Base Legs */}
              <path d="M290 150 L284 230 L288 308 L303 308 L307 228 L313 162 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
              <path d="M340 150 L346 230 L342 308 L327 308 L323 228 L317 162 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />

              {/* Clickable Back (Lats, Mid-Traps, Rear Delts) - Priority #1 */}
              <g className="cursor-pointer" onClick={() => setSelectedId('back')}>
                <path
                  d="M284 70 L315 65 L346 70 L335 128 L315 135 L295 128 Z"
                  fill={fillFor('back', '#93c5fd')}
                  fillOpacity={selectedId === 'back' ? 0.95 : 0.65}
                  stroke="#1d4ed8"
                  strokeWidth="1.2"
                />
                {/* Rear Delts */}
                <ellipse cx="281" cy="79" rx="8" ry="11" fill={fillFor('back', '#93c5fd')} fillOpacity={selectedId === 'back' ? 0.95 : 0.65} stroke="#1d4ed8" strokeWidth="1" />
                <ellipse cx="349" cy="79" rx="8" ry="11" fill={fillFor('back', '#93c5fd')} fillOpacity={selectedId === 'back' ? 0.95 : 0.65} stroke="#1d4ed8" strokeWidth="1" />
              </g>

              {/* Clickable Triceps (linked to chest-shoulders) */}
              <g className="cursor-pointer" onClick={() => setSelectedId('chest-shoulders')}>
                <path d="M273 93 L283 96 L276 125 L265 121 Z" fill={fillFor('chest-shoulders')} fillOpacity={opacityFor('chest-shoulders')} stroke="#475569" strokeWidth="1" />
                <path d="M357 93 L347 96 L354 125 L365 121 Z" fill={fillFor('chest-shoulders')} fillOpacity={opacityFor('chest-shoulders')} stroke="#475569" strokeWidth="1" />
              </g>

              {/* Clickable Glutes */}
              <g className="cursor-pointer" onClick={() => setSelectedId('glutes')}>
                <path d="M289 144 Q301 136 314 146 L313 174 Q298 178 287 166 Z" fill={fillFor('glutes')} fillOpacity={opacityFor('glutes')} stroke="#475569" strokeWidth="1" />
                <path d="M341 144 Q329 136 316 146 L317 174 Q332 178 343 166 Z" fill={fillFor('glutes')} fillOpacity={opacityFor('glutes')} stroke="#475569" strokeWidth="1" />
              </g>

              {/* Clickable Hamstrings */}
              <g className="cursor-pointer" onClick={() => setSelectedId('hamstrings')}>
                <path d="M288 176 L312 178 L307 224 L286 222 Z" fill={fillFor('hamstrings')} fillOpacity={opacityFor('hamstrings')} stroke="#475569" strokeWidth="1" />
                <path d="M342 176 L318 178 L323 224 L344 222 Z" fill={fillFor('hamstrings')} fillOpacity={opacityFor('hamstrings')} stroke="#475569" strokeWidth="1" />
              </g>

              {/* Clickable Calves */}
              <g className="cursor-pointer" onClick={() => setSelectedId('calves-shins')}>
                <path d="M286 234 Q298 228 306 236 L301 278 L289 278 Z" fill={fillFor('calves-shins')} fillOpacity={opacityFor('calves-shins')} stroke="#475569" strokeWidth="1" />
                <path d="M344 234 Q332 228 324 236 L329 278 L341 278 Z" fill={fillFor('calves-shins')} fillOpacity={opacityFor('calves-shins')} stroke="#475569" strokeWidth="1" />
              </g>
            </g>
          </svg>
        </div>

        {/* Muscle Selector & Detail Card */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {MUSCLE_GROUPS.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedId === m.id
                    ? 'bg-sky-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {m.name.split('(')[0].split(',')[0].trim()}
              </button>
            ))}
          </div>

          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/70 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-base font-semibold text-slate-900">{active.name}</h4>
              <span className="text-xs font-mono font-medium text-sky-700">
                {active.priority} · {active.weeklySets}
              </span>
            </div>

            <div className="text-xs text-slate-700 space-y-2">
              <p>
                <span className="font-semibold text-slate-900">Biomechanical Actions: </span>
                {active.actions}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Why It Matters: </span>
                {active.whyItMatters}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white border border-slate-200 rounded-md p-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Gym Exercises
                </span>
                <ul className="text-xs text-slate-800 space-y-1">
                  {active.exercises.map((ex) => (
                    <li key={ex}>· {ex}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-md p-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Home Alternatives
                </span>
                <ul className="text-xs text-slate-800 space-y-1">
                  {active.homeAlternatives.map((ex) => (
                    <li key={ex}>· {ex}</li>
                  ))}
                </ul>
              </div>
            </div>

            {(active.startingLoad || active.phase3Target) && (
              <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-mono tabular-nums">
                {active.startingLoad && (
                  <span className="text-slate-600">
                    Start (61 kg): <strong className="text-slate-900">{active.startingLoad}</strong>
                  </span>
                )}
                {active.phase3Target && (
                  <span className="text-sky-700">
                    Phase 3 Target: <strong>{active.phase3Target}</strong>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
