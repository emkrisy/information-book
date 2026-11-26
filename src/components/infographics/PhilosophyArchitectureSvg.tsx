import React, { useState } from 'react';
import { PHILOSOPHY_LAYERS, CORE_TENSIONS, TRADITIONS_TABLE } from '../../data/lifeHandbookData';

export const PhilosophyArchitectureSvg: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('purpose');
  const [activeTab, setActiveTab] = useState<'tensions' | 'traditions'>('tensions');
  const [selectedTensionIdx, setSelectedTensionIdx] = useState<number>(0);

  const selectedLayer =
    PHILOSOPHY_LAYERS.find((l) => l.id === selectedLayerId) || PHILOSOPHY_LAYERS[0];
  const selectedTension = CORE_TENSIONS[selectedTensionIdx] || CORE_TENSIONS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            ARCHITECTURE OF MEANING · SECTION 3
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            The Khalifah-Scholar Way: Three Layers on a Solid Foundation
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Click any structural block in the diagram to inspect the thinkers, guiding question, and daily practice.
          </p>
        </div>
        <span className="text-xs text-slate-500 font-mono tabular-nums">
          Faith points the way · Chosen self drives · Habits deliver
        </span>
      </div>

      {/* Top Interactive Visual Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center">
          <svg
            viewBox="0 0 680 350"
            className="w-full h-auto max-h-[340px]"
            role="img"
            aria-label="Khalifah-Scholar Three-Layer Philosophy Diagram"
          >
            {/* Connecting lines */}
            <line x1="340" y1="74" x2="340" y2="104" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="115" y1="90" x2="565" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="115" y1="90" x2="115" y2="108" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="565" y1="90" x2="565" y2="108" stroke="#94a3b8" strokeWidth="1.5" />

            <line x1="115" y1="252" x2="115" y2="274" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="340" y1="252" x2="340" y2="274" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="565" y1="252" x2="565" y2="274" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Top Purpose Box */}
            <g
              onClick={() => setSelectedLayerId('purpose')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerId('purpose')}
            >
              <rect
                x="40"
                y="14"
                width="600"
                height="60"
                rx="10"
                fill={selectedLayerId === 'purpose' ? '#0369a1' : '#e0f2fe'}
                stroke={selectedLayerId === 'purpose' ? '#0c4a6e' : '#0284c7'}
                strokeWidth="2"
              />
              <text
                x="340"
                y="38"
                textAnchor="middle"
                className="font-display font-semibold text-[15px]"
                fill={selectedLayerId === 'purpose' ? '#ffffff' : '#0c4a6e'}
              >
                Purpose: A Steward (Khalifah) Who Seeks Truth &amp; Leaves Benefit
              </text>
              <text
                x="340"
                y="58"
                textAnchor="middle"
                className="font-sans text-[11px]"
                fill={selectedLayerId === 'purpose' ? '#bae6fd' : '#0369a1'}
              >
                Reasoned faith + Stoic discipline + authored life · Click to inspect
              </text>
            </g>

            {/* Layer 1: Compass */}
            <g
              onClick={() => setSelectedLayerId('compass')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerId('compass')}
            >
              <rect
                x="20"
                y="108"
                width="195"
                height="144"
                rx="10"
                fill={selectedLayerId === 'compass' ? '#ffffff' : '#ffffff'}
                stroke={selectedLayerId === 'compass' ? '#0369a1' : '#cbd5e1'}
                strokeWidth={selectedLayerId === 'compass' ? '2.5' : '1.2'}
              />
              <rect
                x="20"
                y="108"
                width="195"
                height="28"
                rx="10"
                fill={selectedLayerId === 'compass' ? '#0369a1' : '#f1f5f9'}
              />
              <rect
                x="20"
                y="126"
                width="195"
                height="10"
                fill={selectedLayerId === 'compass' ? '#0369a1' : '#f1f5f9'}
              />
              <text
                x="117"
                y="127"
                textAnchor="middle"
                className="font-display font-semibold text-[13px]"
                fill={selectedLayerId === 'compass' ? '#ffffff' : '#0f172a'}
              >
                1. Compass
              </text>
              <text x="117" y="158" textAnchor="middle" className="font-semibold text-[12px]" fill="#0f172a">
                Faith with Reason
              </text>
              <text x="117" y="178" textAnchor="middle" className="text-[11px]" fill="#475569">
                Ibn Rushd &amp; al-Ghazali
              </text>
              <text x="117" y="195" textAnchor="middle" className="text-[11px]" fill="#475569">
                Habibie (IPTEK + IMTAQ)
              </text>
              <text x="117" y="232" textAnchor="middle" className="font-mono text-[10.5px]" fill="#0369a1">
                Asks: What is true?
              </text>
            </g>

            {/* Layer 2: Engine */}
            <g
              onClick={() => setSelectedLayerId('engine')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerId('engine')}
            >
              <rect
                x="242"
                y="108"
                width="196"
                height="144"
                rx="10"
                fill="#ffffff"
                stroke={selectedLayerId === 'engine' ? '#0369a1' : '#cbd5e1'}
                strokeWidth={selectedLayerId === 'engine' ? '2.5' : '1.2'}
              />
              <rect
                x="242"
                y="108"
                width="196"
                height="28"
                rx="10"
                fill={selectedLayerId === 'engine' ? '#0369a1' : '#f1f5f9'}
              />
              <rect
                x="242"
                y="126"
                width="196"
                height="10"
                fill={selectedLayerId === 'engine' ? '#0369a1' : '#f1f5f9'}
              />
              <text
                x="340"
                y="127"
                textAnchor="middle"
                className="font-display font-semibold text-[13px]"
                fill={selectedLayerId === 'engine' ? '#ffffff' : '#0f172a'}
              >
                2. Engine
              </text>
              <text x="340" y="158" textAnchor="middle" className="font-semibold text-[12px]" fill="#0f172a">
                An Authored Life
              </text>
              <text x="340" y="178" textAnchor="middle" className="text-[11px]" fill="#475569">
                Iqbal (khudi) &amp; Frankl
              </text>
              <text x="340" y="195" textAnchor="middle" className="text-[11px]" fill="#475569">
                Kierkegaard &amp; Sartre
              </text>
              <text x="340" y="232" textAnchor="middle" className="font-mono text-[10.5px]" fill="#0369a1">
                Asks: What is mine to do?
              </text>
            </g>

            {/* Layer 3: Discipline */}
            <g
              onClick={() => setSelectedLayerId('discipline')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerId('discipline')}
            >
              <rect
                x="465"
                y="108"
                width="195"
                height="144"
                rx="10"
                fill="#ffffff"
                stroke={selectedLayerId === 'discipline' ? '#0369a1' : '#cbd5e1'}
                strokeWidth={selectedLayerId === 'discipline' ? '2.5' : '1.2'}
              />
              <rect
                x="465"
                y="108"
                width="195"
                height="28"
                rx="10"
                fill={selectedLayerId === 'discipline' ? '#0369a1' : '#f1f5f9'}
              />
              <rect
                x="465"
                y="126"
                width="195"
                height="10"
                fill={selectedLayerId === 'discipline' ? '#0369a1' : '#f1f5f9'}
              />
              <text
                x="562"
                y="127"
                textAnchor="middle"
                className="font-display font-semibold text-[13px]"
                fill={selectedLayerId === 'discipline' ? '#ffffff' : '#0f172a'}
              >
                3. Discipline
              </text>
              <text x="562" y="158" textAnchor="middle" className="font-semibold text-[12px]" fill="#0f172a">
                Stoic &amp; Aristotelian
              </text>
              <text x="562" y="178" textAnchor="middle" className="text-[11px]" fill="#475569">
                Control what is mine
              </text>
              <text x="562" y="195" textAnchor="middle" className="text-[11px]" fill="#475569">
                Character via small habits
              </text>
              <text x="562" y="232" textAnchor="middle" className="font-mono text-[10.5px]" fill="#0369a1">
                Asks: What do I practise?
              </text>
            </g>

            {/* Foundation Base */}
            <g
              onClick={() => setSelectedLayerId('foundation')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedLayerId('foundation')}
            >
              <rect
                x="20"
                y="274"
                width="640"
                height="58"
                rx="10"
                fill={selectedLayerId === 'foundation' ? '#0f172a' : '#e2e8f0'}
                stroke={selectedLayerId === 'foundation' ? '#0f172a' : '#cbd5e1'}
                strokeWidth="1.5"
              />
              <text
                x="340"
                y="299"
                textAnchor="middle"
                className="font-display font-semibold text-[13px]"
                fill={selectedLayerId === 'foundation' ? '#ffffff' : '#0f172a'}
              >
                Foundation: Physical &amp; Mental Health · Basic Financial Security · Close Relationships
              </text>
              <text
                x="340"
                y="318"
                textAnchor="middle"
                className="text-[11px]"
                fill={selectedLayerId === 'foundation' ? '#cbd5e1' : '#475569'}
              >
                &quot;A philosophy that ignores these three is just a hobby.&quot;
              </text>
            </g>
          </svg>
        </div>

        {/* Selected Layer Detail Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {PHILOSOPHY_LAYERS.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                    selectedLayerId === layer.id
                      ? 'bg-sky-700 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {layer.id === 'purpose'
                    ? 'Purpose'
                    : layer.id === 'compass'
                      ? 'Compass'
                      : layer.id === 'engine'
                        ? 'Engine'
                        : layer.id === 'discipline'
                          ? 'Discipline'
                          : 'Foundation'}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <span className="text-xs font-mono font-semibold text-sky-700 block">
                {selectedLayer.question}
              </span>
              <h4 className="text-lg font-semibold text-slate-900">{selectedLayer.title}</h4>
              <p className="text-sm font-medium text-slate-700">{selectedLayer.subtitle}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{selectedLayer.summary}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5 text-xs">
            <span className="text-slate-500 block">Primary Anchors &amp; Thinkers</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">
              {selectedLayer.thinkers}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Explorer: 6 Core Tensions vs 6 Philosophical Traditions */}
      <div className="border-t border-slate-200 pt-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              How Core Tensions &amp; Six Traditions Fit Together
            </h4>
            <p className="text-xs text-slate-500">
              Select a tension to view its intellectual reconciliation, or audit what each philosophical tradition contributes.
            </p>
          </div>
          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveTab('tensions')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'tensions' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              6 Core Tensions (3.3)
            </button>
            <button
              onClick={() => setActiveTab('traditions')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'traditions' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Traditions Audit Table (3.1)
            </button>
          </div>
        </div>

        {activeTab === 'tensions' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {CORE_TENSIONS.map((t, idx) => (
                <button
                  key={t.tension}
                  onClick={() => setSelectedTensionIdx(idx)}
                  className={`text-left px-3.5 py-2.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                    selectedTensionIdx === idx
                      ? 'bg-sky-700 text-white border-sky-700'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {idx + 1}. {t.tension}
                </button>
              ))}
            </div>
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h5 className="text-base font-semibold text-slate-900">{selectedTension.tension}</h5>
              <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-1">
                <span className="text-xs font-semibold text-sky-800 block">My Resolution</span>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedTension.resolution}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-1">
                <span className="text-xs font-semibold text-slate-700 block">Why It Holds</span>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedTension.whyItHolds}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Tradition</th>
                  <th className="py-2 px-3 font-medium">What It Gives Me</th>
                  <th className="py-2 px-3 font-medium">Where It Falls Short</th>
                  <th className="py-2 pl-3 font-medium">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TRADITIONS_TABLE.map((row) => (
                  <tr key={row.tradition}>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900 align-top min-w-[180px]">
                      {row.tradition}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 align-top">{row.gives}</td>
                    <td className="py-2.5 px-3 text-slate-500 align-top">{row.shortfall}</td>
                    <td className="py-2.5 pl-3 font-semibold text-sky-800 align-top min-w-[150px]">
                      {row.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
