import React, { useState } from 'react';
import { CHRONOLOGY_ERAS, DOMESTICATION_CENTERS, PERIODIZATION_MODELS } from '../../data/worldHistoryData';

export const WorldChronologySvg: React.FC = () => {
  const [selectedEraIdx, setSelectedEraIdx] = useState<number>(4); // Default to c. 1450–1750 Early Modern Convergence
  const [showSubPanel, setShowSubPanel] = useState<'comparison' | 'periodization' | 'domestication'>('comparison');

  const selectedEra = CHRONOLOGY_ERAS[selectedEraIdx] || CHRONOLOGY_ERAS[0];

  const getRegimeStyle = (regime: string) => {
    if (regime === 'Fossil Mineral') {
      return { fill: '#b45309', bg: '#fef3c7', text: '#92400e', stroke: '#d97706' };
    }
    return { fill: '#0369a1', bg: '#e0f2fe', text: '#075985', stroke: '#0284c7' };
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            POLYCENTRIC CHRONOLOGY &amp; ENERGY REGIMES · PART II &amp; III
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            Seven Global Eras Across Wrigley&apos;s Energy Regimes (12,000 BCE – Present)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Select any era node along the axis to compare synchronous Afro-Eurasian and American/African/Oceanic shifts alongside climate and pathogen shocks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-sky-700 inline-block" />
            Agrarian Solar Regime
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-amber-700 inline-block" />
            Fossil Mineral Regime (post-1800)
          </span>
        </div>
      </div>

      {/* Interactive Timeline SVG */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 overflow-x-auto">
        <svg
          viewBox="0 0 840 245"
          className="w-full min-w-[680px] h-auto"
          role="img"
          aria-label="Interactive Seven-Era Polycentric World History Timeline"
        >
          {/* Background Energy Regime Bands */}
          <rect x="20" y="16" width="590" height="28" rx="4" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1" />
          <text x="315" y="34" textAnchor="middle" className="font-mono text-[10.5px] font-semibold" fill="#075985">
            WRIGLEY AGRARIAN SOLAR REGIME (Muscle · Wood · Wind · Organic Land Ceiling)
          </text>

          <rect x="616" y="16" width="204" height="28" rx="4" fill="#fef3c7" stroke="#fde68a" strokeWidth="1" />
          <text x="718" y="34" textAnchor="middle" className="font-mono text-[10.5px] font-semibold" fill="#92400e">
            FOSSIL MINERAL (Coal &amp; Oil)
          </text>

          {/* Horizontal Spine */}
          <line x1="65" y1="120" x2="775" y2="120" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

          {/* Era Nodes */}
          {CHRONOLOGY_ERAS.map((era, idx) => {
            const x = 68 + idx * 117;
            const isSelected = idx === selectedEraIdx;
            const style = getRegimeStyle(era.energyRegime);
            const shortYear = era.era
              .replace('c. ', '')
              .replace(' – ', '–')
              .replace(' Present', 'Now');
            const climateTag =
              idx === 0
                ? 'Holocene ~11.7ka'
                : idx === 1
                  ? '4.2ka aridification'
                  : idx === 2
                    ? '536 CE LALIA / Plague'
                    : idx === 3
                      ? 'Black Death 1348'
                      : idx === 4
                        ? 'Little Ice Age / Smallpox'
                        : idx === 5
                          ? '1815 Tambora'
                          : 'Great Acceleration';

            return (
              <g
                key={era.id}
                onClick={() => setSelectedEraIdx(idx)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedEraIdx(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                className="cursor-pointer"
              >
                {/* Drop tick */}
                <line
                  x1={x}
                  y1="62"
                  x2={x}
                  y2="178"
                  stroke={isSelected ? style.stroke : '#cbd5e1'}
                  strokeWidth={isSelected ? '2' : '1'}
                  strokeDasharray={isSelected ? undefined : '3 3'}
                />

                {/* Era Top Label */}
                <rect
                  x={x - 53}
                  y="56"
                  width="106"
                  height="38"
                  rx="6"
                  fill={isSelected ? style.fill : '#ffffff'}
                  stroke={isSelected ? style.fill : '#cbd5e1'}
                  strokeWidth="1.2"
                />
                <text
                  x={x}
                  y="72"
                  textAnchor="middle"
                  className="font-mono text-[9.5px] font-bold"
                  fill={isSelected ? '#ffffff' : style.text}
                >
                  ERA 0{idx + 1}
                </text>
                <text
                  x={x}
                  y="86"
                  textAnchor="middle"
                  className="font-mono text-[9px] tabular-nums"
                  fill={isSelected ? '#e2e8f0' : '#475569'}
                >
                  {shortYear}
                </text>

                {/* Central Node Circle */}
                <circle
                  cx={x}
                  cy="120"
                  r={isSelected ? 11 : 7}
                  fill={isSelected ? style.fill : '#ffffff'}
                  stroke={style.fill}
                  strokeWidth="2.5"
                />
                <text
                  x={x}
                  y="123"
                  textAnchor="middle"
                  className="font-mono text-[8.5px] font-bold"
                  fill={isSelected ? '#ffffff' : style.fill}
                >
                  {idx + 1}
                </text>

                {/* Climate / Pathogen Anchor Box Below */}
                <rect
                  x={x - 53}
                  y="148"
                  width="106"
                  height="38"
                  rx="6"
                  fill={isSelected ? style.bg : '#f8fafc'}
                  stroke={isSelected ? style.stroke : '#e2e8f0'}
                  strokeWidth="1.2"
                />
                <text
                  x={x}
                  y="163"
                  textAnchor="middle"
                  className="font-mono text-[8.5px] font-semibold"
                  fill="#64748b"
                >
                  ECO / PATHOGEN
                </text>
                <text
                  x={x}
                  y="177"
                  textAnchor="middle"
                  className="font-sans text-[9px] font-semibold"
                  fill={isSelected ? style.text : '#334155'}
                >
                  {climateTag}
                </text>

                {/* Chapter ref */}
                <text
                  x={x}
                  y="206"
                  textAnchor="middle"
                  className="font-mono text-[8.5px]"
                  fill="#64748b"
                >
                  {era.chapters}
                </text>
              </g>
            );
          })}

          {/* Bottom Guidance Caption */}
          <text x="420" y="233" textAnchor="middle" className="font-sans text-[10px]" fill="#64748b">
            Synchronous Hemispheric Comparison · Click any Era (01–07) to inspect Afro-Eurasia vs. Americas, Africa &amp; Oceania
          </text>
        </svg>
      </div>

      {/* Selected Era Inspection Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <span className="font-mono text-xs font-semibold text-sky-700">
              ERA 0{selectedEraIdx + 1} · {selectedEra.era}
            </span>
            <h4 className="text-base font-semibold text-slate-900 mt-0.5">
              Energy Regime: {selectedEra.energyRegime} · {selectedEra.chapters}
            </h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'comparison' as const, label: 'Hemispheric Sync' },
              { id: 'periodization' as const, label: '3 Periodization Models' },
              { id: 'domestication' as const, label: '7 Domestication Centers' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setShowSubPanel(t.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                  showSubPanel === t.id
                    ? 'bg-sky-700 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {showSubPanel === 'comparison' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1.5">
              <span className="font-mono font-semibold text-sky-700 block">AFRO-EURASIA</span>
              <p className="text-slate-700 leading-relaxed">{selectedEra.afroEurasia}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1.5">
              <span className="font-mono font-semibold text-indigo-700 block">
                AMERICAS · AFRICA · OCEANIA
              </span>
              <p className="text-slate-700 leading-relaxed">{selectedEra.americasAfricaOceania}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1.5">
              <span className="font-mono font-semibold text-amber-800 block">
                CLIMATE, ENERGY &amp; PATHOGENS
              </span>
              <p className="text-slate-700 leading-relaxed">{selectedEra.climateOrPathogen}</p>
            </div>
          </div>
        )}

        {showSubPanel === 'periodization' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {PERIODIZATION_MODELS.map((m) => (
              <div key={m.model} className="bg-white border border-slate-200 rounded-lg p-4 space-y-1.5">
                <span className="font-semibold text-slate-900 block">{m.model}</span>
                <span className="font-mono text-[11px] text-sky-700 block">Pivots: {m.pivots}</span>
                <p className="text-slate-600 leading-relaxed">{m.rationale}</p>
                <p className="text-red-700 pt-1 border-t border-slate-100">
                  <strong>Blind spots:</strong> {m.blindSpots}
                </p>
              </div>
            ))}
          </div>
        )}

        {showSubPanel === 'domestication' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            {DOMESTICATION_CENTERS.map((d) => (
              <div key={d.region} className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
                <span className="font-semibold text-slate-900 block">{d.region}</span>
                <span className="text-slate-600 block">{d.cropsAndAnimals}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
