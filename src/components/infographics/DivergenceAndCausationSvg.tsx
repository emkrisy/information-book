import React, { useState } from 'react';
import { CAUSAL_SPECTRUM, DIVERGENCE_SCHOOLS } from '../../data/worldHistoryData';

export const DivergenceAndCausationSvg: React.FC = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(DIVERGENCE_SCHOOLS[0].id);
  const [selectedLayerIdx, setSelectedLayerIdx] = useState<number>(0);

  const selectedSchool =
    DIVERGENCE_SCHOOLS.find((s) => s.id === selectedSchoolId) || DIVERGENCE_SCHOOLS[0];
  const selectedCausal = CAUSAL_SPECTRUM[selectedLayerIdx] || CAUSAL_SPECTRUM[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            HISTORICAL CAUSATION &amp; THE GREAT DIVERGENCE · CH. 17 &amp; 18
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            Braudel&apos;s Nested Temporalities &amp; the Four-School Great Divergence Debate
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Inspect how multi-century structures interact with short-term events, and compare why Western Europe pulled ahead of East &amp; South Asia in the 19th century.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Braudel's 3 Temporalities + Causal Matrix SVG */}
        <div className="lg:col-span-6 space-y-3">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <svg
              viewBox="0 0 500 290"
              className="w-full h-auto"
              role="img"
              aria-label="Braudel Three Nested Temporalities and Subaltern Agency Matrix"
            >
              {/* Layer 1: Longue Duree */}
              <g
                onClick={() => setSelectedLayerIdx(0)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerIdx(0)}
                tabIndex={0}
                role="button"
                className="cursor-pointer"
              >
                <rect
                  x="16"
                  y="14"
                  width="468"
                  height="215"
                  rx="12"
                  fill={selectedLayerIdx === 0 ? '#e0f2fe' : '#ffffff'}
                  stroke={selectedLayerIdx === 0 ? '#0369a1' : '#cbd5e1'}
                  strokeWidth={selectedLayerIdx === 0 ? 2.5 : 1.5}
                />
                <text
                  x="32"
                  y="38"
                  className="font-mono text-[11px] font-bold"
                  fill={selectedLayerIdx === 0 ? '#0c4a6e' : '#334155'}
                >
                  1. LONGUE DURÉE (Millennia–Centuries)
                </text>
                <text x="32" y="54" className="font-sans text-[10px]" fill="#475569">
                  Climate regimes, continental axes, energy density, pathogen pools
                </text>
              </g>

              {/* Layer 2: Conjunctural Cycles */}
              <g
                onClick={() => setSelectedLayerIdx(1)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerIdx(1)}
                tabIndex={0}
                role="button"
                className="cursor-pointer"
              >
                <rect
                  x="36"
                  y="70"
                  width="428"
                  height="145"
                  rx="10"
                  fill={selectedLayerIdx === 1 ? '#dcfce7' : '#f8fafc'}
                  stroke={selectedLayerIdx === 1 ? '#15803d' : '#cbd5e1'}
                  strokeWidth={selectedLayerIdx === 1 ? 2.5 : 1.5}
                />
                <text
                  x="52"
                  y="92"
                  className="font-mono text-[11px] font-bold"
                  fill={selectedLayerIdx === 1 ? '#14532d' : '#334155'}
                >
                  2. CONJUNCTURES (Centuries–Decades)
                </text>
                <text x="52" y="108" className="font-sans text-[10px]" fill="#475569">
                  Fiscal-military states, secular demographic cycles, property law
                </text>
              </g>

              {/* Layer 3: Event Time */}
              <g
                onClick={() => setSelectedLayerIdx(2)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerIdx(2)}
                tabIndex={0}
                role="button"
                className="cursor-pointer"
              >
                <rect
                  x="56"
                  y="124"
                  width="388"
                  height="76"
                  rx="8"
                  fill={selectedLayerIdx === 2 ? '#fef3c7' : '#ffffff'}
                  stroke={selectedLayerIdx === 2 ? '#b45309' : '#cbd5e1'}
                  strokeWidth={selectedLayerIdx === 2 ? 2.5 : 1.5}
                />
                <text
                  x="72"
                  y="146"
                  className="font-mono text-[11px] font-bold"
                  fill={selectedLayerIdx === 2 ? '#78350f' : '#334155'}
                >
                  3. ÉVÉNEMENTIELLE (Years–Single Events)
                </text>
                <text x="72" y="162" className="font-sans text-[10px]" fill="#475569">
                  Succession crises (1241), Zheng He reversal (1433), Ming silver shock
                </text>
                <text x="72" y="180" className="font-mono text-[9px]" fill="#64748b">
                  Click any nested layer or Subaltern bar below to inspect analytical risk
                </text>
              </g>

              {/* Subaltern Agency Cross-Cutting Bar */}
              <g
                onClick={() => setSelectedLayerIdx(3)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerIdx(3)}
                tabIndex={0}
                role="button"
                className="cursor-pointer"
              >
                <rect
                  x="16"
                  y="240"
                  width="468"
                  height="38"
                  rx="8"
                  fill={selectedLayerIdx === 3 ? '#0f172a' : '#f1f5f9'}
                  stroke={selectedLayerIdx === 3 ? '#0f172a' : '#cbd5e1'}
                  strokeWidth="1.5"
                />
                <text
                  x="250"
                  y="263"
                  textAnchor="middle"
                  className="font-mono text-[10.5px] font-bold"
                  fill={selectedLayerIdx === 3 ? '#ffffff' : '#0f172a'}
                >
                  4. SUBALTERN &amp; COLLECTIVE AGENCY (Revolutions · Maroons · Everyday Resistance)
                </text>
              </g>
            </svg>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-semibold text-sky-700">{selectedCausal.braudelLayer}</span>
              <span className="font-mono text-slate-500">{selectedCausal.timescale}</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-900">{selectedCausal.register}</h4>
            <p className="text-slate-700">{selectedCausal.forces}</p>
            <p className="text-red-700 pt-1 border-t border-slate-200/80">
              <strong>Analytical Risk:</strong> {selectedCausal.risk}
            </p>
          </div>
        </div>

        {/* Right: Four-School Great Divergence Comparison Matrix */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-xs">
          <div>
            <span className="font-mono font-semibold text-sky-700 block">
              CHAPTER 17 COMPARATIVE LAB · WHEN &amp; WHY?
            </span>
            <h4 className="text-base font-semibold text-slate-900 mt-0.5">
              Four Schools Explaining the Great Divergence
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DIVERGENCE_SCHOOLS.map((school) => (
              <button
                key={school.id}
                onClick={() => setSelectedSchoolId(school.id)}
                className={`text-left p-3 rounded-lg border transition-colors cursor-pointer ${
                  selectedSchoolId === school.id
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="font-semibold block">{school.school}</span>
                <span
                  className={`font-mono text-[10.5px] block mt-0.5 ${
                    selectedSchoolId === school.id ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  {school.timeframeFocus}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="border-b border-slate-100 pb-2">
              <h5 className="text-base font-semibold text-slate-900">{selectedSchool.school}</h5>
              <span className="font-mono text-[11px] text-sky-700 block mt-0.5">
                Key Scholars: {selectedSchool.theorists}
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Primary Causal Mechanism</span>
              <p className="text-slate-700 leading-relaxed">{selectedSchool.driver}</p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Empirics &amp; Benchmarks</span>
              <p className="text-slate-700 leading-relaxed">{selectedSchool.evidence}</p>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="font-semibold text-red-700 block">Critical Limitations</span>
              <p className="text-slate-600 leading-relaxed">{selectedSchool.limitations}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3 text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Emerging Consensus (§17.4):</strong> Divergence was conjunctural, not culturally pre-ordained—combining cheap British coal, high urban wages, fiscal-military tariffs, and Atlantic colonial extraction.
          </div>
        </div>
      </div>
    </div>
  );
};
