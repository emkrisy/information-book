import React, { useState } from 'react';
import {
  ARCHIVAL_METHODS,
  METHOD_FRONTIERS,
  RESEARCH_PROTOCOL,
} from '../../data/worldHistoryData';

export const HistoriographyToolsSvg: React.FC = () => {
  const [selectedMomentIdx, setSelectedMomentIdx] = useState<number>(0);
  const [selectedFrontierIdx, setSelectedFrontierIdx] = useState<number>(0);
  const [activeProtocolIdx, setActiveProtocolIdx] = useState<number>(0);

  const selectedMoment = ARCHIVAL_METHODS.trouillotMoments[selectedMomentIdx];
  const selectedFrontier = METHOD_FRONTIERS[selectedFrontierIdx];
  const selectedStep = RESEARCH_PROTOCOL[activeProtocolIdx];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            CRITICAL METHODOLOGY &amp; 21ST-CENTURY TOOLKIT · CH. 2, 20 &amp; 21
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            How Silences Enter the Archive &amp; Five-Stage Historical Research Protocol
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Click any stage in Trouillot&apos;s silencing pipeline, or inspect 21st-century interdisciplinary frontiers and research design steps.
          </p>
        </div>
      </div>

      {/* Trouillot 4 Moments of Archival Silencing Pipeline SVG */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4">
          <svg
            viewBox="0 0 620 155"
            className="w-full h-auto"
            role="img"
            aria-label="Michel-Rolph Trouillot Four Moments of Archival Silencing Pipeline"
          >
            <text x="16" y="20" className="font-mono text-[10px] font-bold" fill="#0369a1">
              MICHEL-ROLPH TROUILLOT · FOUR MOMENTS OF ARCHIVAL SILENCING
            </text>

            {/* Connecting arrows */}
            {[152, 304, 456].map((x) => (
              <line
                key={x}
                x1={x}
                y1="82"
                x2={x + 16}
                y2="82"
                stroke="#94a3b8"
                strokeWidth="2"
              />
            ))}

            {ARCHIVAL_METHODS.trouillotMoments.map((m, idx) => {
              const x = 16 + idx * 152;
              const active = idx === selectedMomentIdx;
              return (
                <g
                  key={m.step}
                  onClick={() => setSelectedMomentIdx(idx)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedMomentIdx(idx)}
                  tabIndex={0}
                  role="button"
                  className="cursor-pointer"
                >
                  <rect
                    x={x}
                    y="38"
                    width="136"
                    height="90"
                    rx="8"
                    fill={active ? '#0369a1' : '#ffffff'}
                    stroke={active ? '#0c4a6e' : '#cbd5e1'}
                    strokeWidth={active ? 2 : 1.2}
                  />
                  <text
                    x={x + 68}
                    y="58"
                    textAnchor="middle"
                    className="font-mono text-[10px] font-bold"
                    fill={active ? '#bae6fd' : '#0369a1'}
                  >
                    MOMENT 0{m.step}
                  </text>
                  <text
                    x={x + 68}
                    y="80"
                    textAnchor="middle"
                    className="font-sans text-[12px] font-semibold"
                    fill={active ? '#ffffff' : '#0f172a'}
                  >
                    {m.moment}
                  </text>
                  <text
                    x={x + 68}
                    y="102"
                    textAnchor="middle"
                    className="font-sans text-[9.5px]"
                    fill={active ? '#e0f2fe' : '#64748b'}
                  >
                    {m.where.replace('The ', '')}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Along vs Against the Grain + Triangulation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
            {ARCHIVAL_METHODS.grainStrategies.map((g) => (
              <div key={g.strategy} className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
                <span className="font-semibold text-slate-900 block">{g.strategy}</span>
                <p className="text-slate-600 leading-relaxed">{g.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Moment + 21st-Century Frontier Switcher */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-xs">
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1.5">
            <span className="font-mono font-semibold text-sky-700 block">
              MOMENT 0{selectedMoment.step} · {selectedMoment.where.toUpperCase()}
            </span>
            <h4 className="text-base font-semibold text-slate-900">{selectedMoment.moment}</h4>
            <p className="text-slate-700 leading-relaxed">{selectedMoment.detail}</p>
          </div>

          {/* 21st-Century Frontiers Selector */}
          <div className="space-y-2.5 pt-2 border-t border-slate-200">
            <span className="font-mono font-semibold text-sky-700 block">
              CHAPTER 20 INTERDISCIPLINARY FRONTIERS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {METHOD_FRONTIERS.map((f, idx) => (
                <button
                  key={f.frontier}
                  onClick={() => setSelectedFrontierIdx(idx)}
                  className={`px-2.5 py-1 rounded-md font-medium cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                    selectedFrontierIdx === idx
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {f.frontier.split(' (')[0].split(' & ')[0]}
                </button>
              ))}
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-1.5">
              <span className="font-semibold text-slate-900 block">{selectedFrontier.frontier}</span>
              <p className="text-slate-600">
                <strong>Tools:</strong> {selectedFrontier.tools}
              </p>
              <p className="text-slate-700">
                <strong>Breakthroughs:</strong> {selectedFrontier.insights}
              </p>
              <p className="text-red-700 pt-1 border-t border-slate-100">
                <strong>Methodological caution:</strong> {selectedFrontier.cautions}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Stage Historical Research Protocol Bar */}
      <div className="border-t border-slate-200 pt-4 space-y-3 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono font-semibold text-sky-700">
            TABLE 21.1 · FIVE-STAGE RESEARCH DESIGN PROTOCOL
          </span>
          <div className="flex flex-wrap gap-1.5">
            {RESEARCH_PROTOCOL.map((r, idx) => (
              <button
                key={r.stage}
                onClick={() => setActiveProtocolIdx(idx)}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer whitespace-nowrap shrink-0 ${
                  activeProtocolIdx === idx
                    ? 'bg-sky-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {r.stage}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="font-semibold text-slate-900 block">Required Analytical Tasks</span>
            <p className="text-slate-700 mt-1 leading-relaxed">{selectedStep.tasks}</p>
          </div>
          <div>
            <span className="font-semibold text-emerald-800 block">Quality Benchmark</span>
            <p className="text-slate-700 mt-1 leading-relaxed">{selectedStep.benchmarks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
