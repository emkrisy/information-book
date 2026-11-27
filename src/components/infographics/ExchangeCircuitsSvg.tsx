import React, { useState } from 'react';
import { EXCHANGE_CIRCUITS } from '../../data/worldHistoryData';

type CircuitViewMode = 'premodern' | 'early-modern';

export const ExchangeCircuitsSvg: React.FC = () => {
  const [mode, setMode] = useState<CircuitViewMode>('premodern');
  const [selectedId, setSelectedId] = useState<string>(EXCHANGE_CIRCUITS[0].id);

  const selectedCircuit =
    EXCHANGE_CIRCUITS.find((c) => c.id === selectedId) || EXCHANGE_CIRCUITS[0];

  const earlyModernNodes = [
    {
      id: 'silver',
      title: 'Potosí & Zacatecas → Acapulco → Manila → Ming China',
      stat: 'Single Whip Tax Reform (c. 1570s)',
      detail:
        'American bullion mined via coerced Andean mit’a labor crossed the Pacific aboard Manila galleons directly into Fujian and Ming-Qing coastal ports—anchoring the first truly planetary monetary circuit.',
    },
    {
      id: 'columbian',
      title: 'The Columbian Exchange (Ch. 10 & 20)',
      stat: '75–90% Indigenous Demographic Collapse',
      detail:
        'Post-1492 biological convergence carried maize, potatoes, and cassava eastward (fueling Eurasian/African calorie booms) while Eurasian smallpox, measles, and livestock devastated immunologically naive American populations.',
    },
    {
      id: 'atlantic',
      title: 'Transatlantic Middle Passage & Plantation Complex',
      stat: '>12 Million Enslaved Africans Displaced',
      detail:
        'Racialized chattel slavery in Caribbean, Brazilian, and North American sugar/cotton zones supplied Europe with tropical calories and "ghost acreage," igniting the Haitian Revolution (1791–1804) as the first sovereign Black republic.',
    },
  ];

  const [selectedEarlyIdx, setSelectedEarlyIdx] = useState(0);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            INTERREGIONAL NETWORKS &amp; THALASSOLOGY · CH. 6, 9, 10 &amp; 15
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            Four Pre-Modern Exchange Corridors &amp; Early Modern Planetary Convergence
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Toggle between pre-1500 polycentric corridors and the post-1492 oceanic silver, biological, and forced-labor loop.
          </p>
        </div>

        <div className="inline-flex p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setMode('premodern')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
              mode === 'premodern' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Pre-1500 Four Circuits
          </button>
          <button
            onClick={() => setMode('early-modern')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
              mode === 'early-modern' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            1450–1750 Global Convergence
          </button>
        </div>
      </div>

      {/* Stylized Interregional Network Schematic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center">
          <svg
            viewBox="0 0 640 320"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="Stylized Interregional Exchange Circuits Network Schematic"
          >
            {/* Subtle Continental Region Landmarks (Schematic Blocks) */}
            <rect x="28" y="88" width="115" height="190" rx="14" fill="#f1f5f9" stroke="#e2e8f0" />
            <text x="85" y="106" textAnchor="middle" className="font-mono text-[9.5px] font-semibold" fill="#64748b">
              AMERICAS
            </text>

            <rect x="175" y="54" width="108" height="218" rx="14" fill="#f1f5f9" stroke="#e2e8f0" />
            <text x="229" y="72" textAnchor="middle" className="font-mono text-[9.5px] font-semibold" fill="#64748b">
              EUROPE / AFRICA
            </text>

            <rect x="305" y="54" width="305" height="218" rx="14" fill="#f1f5f9" stroke="#e2e8f0" />
            <text x="458" y="72" textAnchor="middle" className="font-mono text-[9.5px] font-semibold" fill="#64748b">
              WEST, SOUTH, EAST &amp; MARITIME SE ASIA
            </text>

            {mode === 'premodern' ? (
              <>
                {EXCHANGE_CIRCUITS.map((c) => {
                  const active = c.id === selectedId;
                  const midX = (c.x1 + c.x2) / 2;
                  const midY = (c.y1 + c.y2) / 2 - (c.id === 'silk-roads' ? 18 : -16);
                  return (
                    <g
                      key={c.id}
                      onClick={() => setSelectedId(c.id)}
                      onKeyDown={(e) => e.key === 'Enter' && setSelectedId(c.id)}
                      tabIndex={0}
                      role="button"
                      className="cursor-pointer"
                    >
                      <path
                        d={`M ${c.x1} ${c.y1} Q ${midX} ${midY} ${c.x2} ${c.y2}`}
                        fill="none"
                        stroke={c.color}
                        strokeWidth={active ? 4 : 2}
                        strokeOpacity={active ? 1 : 0.45}
                        strokeDasharray={active ? undefined : '5 4'}
                      />
                      <circle cx={c.x1} cy={c.y1} r={active ? 6 : 4.5} fill={c.color} />
                      <circle cx={c.x2} cy={c.y2} r={active ? 6 : 4.5} fill={c.color} />
                    </g>
                  );
                })}

                {/* Hub Labels */}
                <text x="72" y="177" className="font-sans text-[10px] font-semibold" fill="#312e81">
                  Tenochtitlan
                </text>
                <text x="115" y="260" className="font-sans text-[10px] font-semibold" fill="#312e81">
                  Cuzco
                </text>
                <text x="195" y="138" className="font-sans text-[10px] font-semibold" fill="#0f766e">
                  Sijilmasa
                </text>
                <text x="236" y="218" className="font-sans text-[10px] font-semibold" fill="#0f766e">
                  Timbuktu / Gao
                </text>
                <text x="272" y="232" className="font-sans text-[10px] font-semibold" fill="#0369a1">
                  Kilwa
                </text>
                <text x="385" y="236" className="font-sans text-[10px] font-semibold" fill="#0369a1">
                  Calicut · Malacca
                </text>
                <text x="510" y="234" className="font-sans text-[10px] font-semibold" fill="#0369a1">
                  Quanzhou
                </text>
                <text x="305" y="114" className="font-sans text-[10px] font-semibold" fill="#b45309">
                  Tabriz · Samarkand
                </text>
                <text x="528" y="122" className="font-sans text-[10px] font-semibold" fill="#b45309">
                  Chang&apos;an
                </text>
              </>
            ) : (
              <>
                {/* Columbian Exchange + Middle Passage */}
                <g
                  onClick={() => setSelectedEarlyIdx(1)}
                  className="cursor-pointer"
                  tabIndex={0}
                  role="button"
                >
                  <path
                    d="M 105 160 Q 155 110 215 125"
                    fill="none"
                    stroke="#0369a1"
                    strokeWidth={selectedEarlyIdx === 1 ? 4 : 2.2}
                  />
                  <path
                    d="M 215 135 Q 155 165 105 175"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth={selectedEarlyIdx === 1 ? 3.5 : 2}
                    strokeDasharray="4 3"
                  />
                  <text x="158" y="108" textAnchor="middle" className="font-mono text-[9px] font-semibold" fill="#0369a1">
                    Maize · Potato
                  </text>
                  <text x="158" y="182" textAnchor="middle" className="font-mono text-[9px] font-semibold" fill="#b91c1c">
                    Smallpox (75–90% loss)
                  </text>
                </g>

                {/* Middle Passage */}
                <g
                  onClick={() => setSelectedEarlyIdx(2)}
                  className="cursor-pointer"
                  tabIndex={0}
                  role="button"
                >
                  <path
                    d="M 225 205 Q 165 245 108 210"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth={selectedEarlyIdx === 2 ? 4 : 2.2}
                  />
                  <text x="166" y="242" textAnchor="middle" className="font-mono text-[9px] font-semibold" fill="#0f172a">
                    Middle Passage (&gt;12M)
                  </text>
                </g>

                {/* Potosi -> Acapulco -> Manila -> Ming China Silver Circuit */}
                <g
                  onClick={() => setSelectedEarlyIdx(0)}
                  className="cursor-pointer"
                  tabIndex={0}
                  role="button"
                >
                  <path
                    d="M 110 245 Q 60 225 65 190"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth={selectedEarlyIdx === 0 ? 4 : 2.5}
                  />
                  <path
                    d="M 55 188 L 16 188 M 618 188 L 495 192"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth={selectedEarlyIdx === 0 ? 4 : 2.5}
                    strokeDasharray="5 3"
                  />
                  <circle cx="110" cy="245" r="5" fill="#b45309" />
                  <circle cx="65" cy="190" r="5" fill="#b45309" />
                  <circle cx="495" cy="192" r="5.5" fill="#b45309" />
                  <circle cx="538" cy="155" r="5.5" fill="#b45309" />
                  <path
                    d="M 495 192 L 538 155"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth={selectedEarlyIdx === 0 ? 3.5 : 2}
                  />
                  <text x="112" y="264" textAnchor="middle" className="font-sans text-[9.5px] font-semibold" fill="#92400e">
                    Potosí Silver
                  </text>
                  <text x="64" y="178" textAnchor="middle" className="font-sans text-[9.5px] font-semibold" fill="#92400e">
                    Acapulco
                  </text>
                  <text x="488" y="210" textAnchor="middle" className="font-sans text-[9.5px] font-semibold" fill="#92400e">
                    Manila Galleon
                  </text>
                  <text x="550" y="144" textAnchor="middle" className="font-sans text-[9.5px] font-semibold" fill="#92400e">
                    Ming Single Whip
                  </text>
                </g>
              </>
            )}

            <text x="320" y="302" textAnchor="middle" className="font-sans text-[10px]" fill="#64748b">
              {mode === 'premodern'
                ? 'Click any corridor line or select a circuit tab to compare commodities, diaspora hubs & impact'
                : 'Click the Pacific Silver Loop, Columbian Exchange, or Atlantic Middle Passage routes'}
            </text>
          </svg>
        </div>

        {/* Right Detail Inspector */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4 text-xs">
          {mode === 'premodern' ? (
            <>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {EXCHANGE_CIRCUITS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedId(c.id)}
                      className={`px-2.5 py-1.5 rounded-md font-medium cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                        selectedId === c.id
                          ? 'bg-sky-700 text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {c.zone.split(' (')[0]}
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 space-y-2.5">
                  <h4 className="text-base font-semibold text-slate-900">{selectedCircuit.zone}</h4>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
                    <span className="font-mono font-semibold text-sky-700 block">KEY HUBS</span>
                    <p className="text-slate-700">{selectedCircuit.nodes}</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
                    <span className="font-mono font-semibold text-sky-700 block">
                      COMMODITIES &amp; TECHNOLOGIES
                    </span>
                    <p className="text-slate-700 leading-relaxed">{selectedCircuit.commodities}</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
                    <span className="font-mono font-semibold text-sky-700 block">
                      DIASPORA &amp; SYNTHESIS IMPACT
                    </span>
                    <p className="text-slate-700 leading-relaxed">{selectedCircuit.impact}</p>
                    <p className="text-slate-500 pt-1 border-t border-slate-100">
                      <strong>Carriers:</strong> {selectedCircuit.diaspora}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {['Silver Circuit', 'Columbian Exchange', 'Middle Passage'].map((lbl, idx) => (
                  <button
                    key={lbl}
                    onClick={() => setSelectedEarlyIdx(idx)}
                    className={`px-2.5 py-1.5 rounded-md font-medium cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                      selectedEarlyIdx === idx
                        ? 'bg-sky-700 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2">
                <span className="font-mono font-semibold text-amber-800 block">
                  {earlyModernNodes[selectedEarlyIdx].stat}
                </span>
                <h4 className="text-base font-semibold text-slate-900">
                  {earlyModernNodes[selectedEarlyIdx].title}
                </h4>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {earlyModernNodes[selectedEarlyIdx].detail}
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3.5 text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Ch. 15 Trading-Post Caution:</strong> European presence in 1500–1750 Asia relied mostly on fortified port choke points (Malacca, Batavia, Macau, Goa), not inland territorial empires—Asian overland land empires remained dominant until c. 1750.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
