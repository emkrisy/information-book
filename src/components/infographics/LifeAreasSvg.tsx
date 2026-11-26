import React, { useState } from 'react';
import { LIFE_AREAS } from '../../data/lifeHandbookData';

export const LifeAreasSvg: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('growth');
  const [detailTab, setDetailTab] = useState<'practices' | 'evidence' | 'targets'>('practices');

  const activeArea = LIFE_AREAS.find((a) => a.id === selectedAreaId) || LIFE_AREAS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            SEVEN LIFE AREAS · SECTION 5
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            Priority Order, Baseline Ratings (1–10) &amp; 12-Month Targets
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Ordered by your survey priority (#1 Growth down to #7 Spiritual). Career and Financial start at 1/10—making them the highest-leverage improvements.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-slate-300 inline-block" /> Current baseline
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-sky-700 inline-block" /> 12-month target
          </span>
        </div>
      </div>

      {/* Main Split: Left SVG Gap Bar Chart + Right Full Life Area Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <svg
              viewBox="0 0 420 330"
              className="w-full h-auto"
              role="img"
              aria-label="Seven Life Areas Current Rating vs 12-Month Target Chart"
            >
              {/* Grid lines for 0, 2, 4, 6, 8, 10 */}
              {[0, 2, 4, 6, 8, 10].map((tick) => {
                const x = 135 + (tick / 10) * 245;
                return (
                  <g key={tick}>
                    <line
                      x1={x}
                      y1="16"
                      x2={x}
                      y2="300"
                      stroke={tick === 0 ? '#94a3b8' : '#e2e8f0'}
                      strokeDasharray={tick === 0 ? undefined : '3 3'}
                    />
                    <text
                      x={x}
                      y="318"
                      textAnchor="middle"
                      className="font-mono text-[10px] tabular-nums"
                      fill="#64748b"
                    >
                      {tick}
                    </text>
                  </g>
                );
              })}

              {LIFE_AREAS.map((area, index) => {
                const y = 24 + index * 40;
                const currW = (area.currentRating / 10) * 245;
                const targetW = (area.targetRating / 10) * 245;
                const isSelected = area.id === selectedAreaId;

                return (
                  <g
                    key={area.id}
                    onClick={() => setSelectedAreaId(area.id)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedAreaId(area.id)}
                  >
                    <rect
                      x="4"
                      y={y - 6}
                      width="408"
                      height="34"
                      rx="6"
                      fill={isSelected ? '#e0f2fe' : 'transparent'}
                    />
                    <text
                      x="10"
                      y={y + 10}
                      className="text-[11px] font-semibold"
                      fill={isSelected ? '#0c4a6e' : '#0f172a'}
                    >
                      #{area.priority} {area.name}
                    </text>
                    <text
                      x="10"
                      y={y + 22}
                      className="font-mono text-[9.5px] tabular-nums"
                      fill="#64748b"
                    >
                      {area.currentRating}/10 → {area.targetRating}/10
                    </text>

                    {/* Track */}
                    <rect x="135" y={y + 3} width="245" height="14" rx="4" fill="#f1f5f9" />
                    {/* Target bar */}
                    <rect
                      x="135"
                      y={y + 3}
                      width={targetW}
                      height="14"
                      rx="4"
                      fill={isSelected ? '#0369a1' : '#38bdf8'}
                      opacity={isSelected ? 0.95 : 0.45}
                    />
                    {/* Current rating marker */}
                    <rect
                      x="135"
                      y={y + 3}
                      width={currW}
                      height="14"
                      rx="4"
                      fill={isSelected ? '#0f172a' : '#64748b'}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Dunbar's Circles Mini Visual when Social is selected (or general reference) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
            <svg viewBox="0 0 110 110" className="w-24 h-24 shrink-0" aria-label="Dunbar concentric circles">
              <circle cx="55" cy="55" r="50" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx="55" cy="55" r="36" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <circle cx="55" cy="55" r="23" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" />
              <circle cx="55" cy="55" r="11" fill="#0369a1" />
              <text x="55" y="59" textAnchor="middle" fill="#ffffff" className="font-mono text-[9px] font-bold">
                5
              </text>
              <text x="55" y="39" textAnchor="middle" fill="#0c4a6e" className="font-mono text-[8px]">
                15
              </text>
              <text x="55" y="25" textAnchor="middle" fill="#334155" className="font-mono text-[8px]">
                50
              </text>
              <text x="55" y="12" textAnchor="middle" fill="#475569" className="font-mono text-[8px]">
                150
              </text>
            </svg>
            <div className="text-xs space-y-1">
              <span className="font-semibold text-slate-900 block">
                Dunbar&apos;s Circles &amp; Weak Ties
              </span>
              <p className="text-slate-600 leading-relaxed">
                Your 5 intimate friends already fill the innermost circle. Focus on depth + one intellectual study companion rather than a bigger crowd.
              </p>
            </div>
          </div>
        </div>

        {/* Right Area Deep Inspector */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono">
                <span>Section {activeArea.sectionCode}</span>
                <span aria-hidden="true">·</span>
                <span>Priority #{activeArea.priority}</span>
                <span aria-hidden="true">·</span>
                <span className="text-sky-800 font-semibold tabular-nums">
                  Rated {activeArea.currentRating}/10 → Target {activeArea.targetRating}/10
                </span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mt-1">{activeArea.name}</h4>
              {activeArea.extraMetric && (
                <span className="text-xs text-slate-600 mt-0.5 block">{activeArea.extraMetric}</span>
              )}
            </div>

            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-lg">
              {[
                { id: 'practices' as const, label: 'Practices & Beliefs' },
                { id: 'evidence' as const, label: 'Evidence' },
                { id: 'targets' as const, label: '12-Mo Targets' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setDetailTab(t.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                    detailTab === t.id ? 'bg-sky-700 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Context Header inside detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="bg-white border border-slate-200 rounded-lg p-3.5">
              <span className="font-semibold text-slate-800 block mb-1">Where I Am</span>
              <p className="text-slate-600 leading-relaxed">{activeArea.whereIAm}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5">
              <span className="font-semibold text-sky-800 block mb-1">Direction</span>
              <p className="text-slate-700 leading-relaxed">{activeArea.direction}</p>
            </div>
          </div>

          {detailTab === 'practices' && (
            <div className="space-y-3 text-xs">
              <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2">
                <span className="font-semibold text-slate-900 block">Concrete Practices</span>
                <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                  {activeArea.practices.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-sky-700 font-semibold shrink-0">{i + 1}.</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeArea.limitingBeliefs && (
                <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2">
                  <span className="font-semibold text-slate-900 block">Limiting Beliefs to Rewrite</span>
                  <div className="space-y-1.5">
                    {activeArea.limitingBeliefs.map((b, i) => (
                      <div key={i} className="flex flex-wrap items-center gap-2 text-slate-700">
                        <span className="line-through text-slate-400">{b.from}</span>
                        <span aria-hidden="true">→</span>
                        <span className="font-medium text-emerald-800">{b.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-amber-950">
                <span className="font-semibold block mb-0.5">Watch-Out</span>
                <p className="leading-relaxed">{activeArea.watchOut}</p>
              </div>
            </div>
          )}

          {detailTab === 'evidence' && (
            <div className="space-y-2.5 text-xs">
              {activeArea.evidence.map((ev) => (
                <div
                  key={ev.claim}
                  className="bg-white border border-slate-200 rounded-lg p-3.5 flex flex-wrap items-start justify-between gap-2"
                >
                  <div className="space-y-1 max-w-xl">
                    <span className="font-semibold text-slate-900 block">{ev.claim}</span>
                    <p className="text-slate-600 leading-relaxed">{ev.detail}</p>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded px-2 py-0.5 shrink-0">
                    {ev.strength}
                  </span>
                </div>
              ))}
            </div>
          )}

          {detailTab === 'targets' && (
            <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2.5 text-xs">
              <span className="font-semibold text-slate-900 block">12-Month Targets</span>
              <ul className="space-y-2 text-slate-700 leading-relaxed">
                {activeArea.targets12Month.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-emerald-700 font-bold shrink-0">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
