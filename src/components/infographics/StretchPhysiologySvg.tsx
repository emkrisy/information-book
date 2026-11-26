import React, { useState } from 'react';

const REFLEXES = [
  {
    id: 'spindle',
    name: 'Muscle Spindle (Stretch Reflex)',
    location: 'Inside muscle belly, parallel to fibres',
    senses: 'Muscle length & speed of lengthening',
    mechanism: 'Fast, bouncing stretches trigger reflexive contraction (myotatic reflex) to protect tissue. Slow 20–30 s sustained holds allow firing to calm down.',
    application: 'Avoid ballistic bouncing; hold static stretches calmly while exhaling.',
  },
  {
    id: 'gto',
    name: 'Golgi Tendon Organ (GTO)',
    location: 'Muscle-tendon junction, in series with fibres',
    senses: 'Mechanical tension & contraction force',
    mechanism: 'Brief submaximal contraction (20–50% effort for 5–6 s) before relaxing can temporarily reduce resistance to stretch (autogenic inhibition / stretch tolerance shift).',
    application: 'Used in PNF contract-relax hamstrings & hip flexors after runs.',
  },
  {
    id: 'reciprocal',
    name: 'Reciprocal Inhibition',
    location: 'Spinal cord neural circuit',
    senses: 'Agonist contraction signal',
    mechanism: 'Actively contracting the opposite muscle (e.g., quadriceps) sends an inhibitory signal to relax the target muscle (e.g., hamstrings).',
    application: 'Used in active leg raises and Active Isolated Stretching (2 s holds).',
  },
];

export const StretchPhysiologySvg: React.FC = () => {
  const [selectedReflex, setSelectedReflex] = useState<string>('spindle');
  const active = REFLEXES.find((r) => r.id === selectedReflex) ?? REFLEXES[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Stretch Neurophysiology &amp; Mobility vs. Flexibility (Section 21)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Long-term range gains come mostly from nervous-system stretch tolerance—pair stretching with end-range strength so new range sticks.
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500">Intensity: 5–7 / 10 (never sharp pain)</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Schematic Muscle-Tendon Unit SVG */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
          <svg viewBox="0 0 420 205" className="w-full h-auto" role="img" aria-label="Muscle spindle, Golgi tendon organ, and reciprocal inhibition schematic">
            {/* Bone anchors */}
            <rect x="20" y="62" width="22" height="56" rx="4" fill="#cbd5e1" stroke="#64748b" />
            <rect x="378" y="62" width="22" height="56" rx="4" fill="#cbd5e1" stroke="#64748b" />
            <text x="31" y="134" textAnchor="middle" className="fill-slate-500 text-[9px]">Tendon</text>
            <text x="389" y="134" textAnchor="middle" className="fill-slate-500 text-[9px]">Tendon</text>

            {/* Tendons */}
            <line x1="42" y1="90" x2="105" y2="90" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
            <line x1="315" y1="90" x2="378" y2="90" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />

            {/* Muscle Belly */}
            <path
              d="M105 90 Q210 38 315 90 Q210 142 105 90 Z"
              fill="#e0f2fe"
              stroke="#0284c7"
              strokeWidth="2"
            />
            <text x="210" y="54" textAnchor="middle" className="fill-slate-700 text-[10px] font-semibold">
              Agonist Muscle Belly (Sarcomeres stretch ~120%)
            </text>

            {/* Muscle Spindle (Parallel) */}
            <g className="cursor-pointer" onClick={() => setSelectedReflex('spindle')}>
              <rect
                x="155"
                y="79"
                width="110"
                height="22"
                rx="11"
                fill={selectedReflex === 'spindle' ? '#0284c7' : '#ffffff'}
                stroke="#0369a1"
                strokeWidth="2"
              />
              <path d="M168 90 Q176 83 184 90 T200 90 T216 90 T232 90 T250 90" fill="none" stroke={selectedReflex === 'spindle' ? '#ffffff' : '#0369a1'} strokeWidth="1.5" />
              <text
                x="210"
                y="118"
                textAnchor="middle"
                className={`text-[10px] font-semibold ${selectedReflex === 'spindle' ? 'fill-sky-700' : 'fill-slate-600'}`}
              >
                1. Muscle Spindle (Length &amp; Speed)
              </text>
            </g>

            {/* GTO (In series at tendon junction) */}
            <g className="cursor-pointer" onClick={() => setSelectedReflex('gto')}>
              <circle
                cx="315"
                cy="90"
                r="14"
                fill={selectedReflex === 'gto' ? '#d97706' : '#fef3c7'}
                stroke="#b45309"
                strokeWidth="2"
              />
              <text x="315" y="93" textAnchor="middle" className={`text-[9px] font-bold ${selectedReflex === 'gto' ? 'fill-white' : 'fill-amber-900'}`}>
                GTO
              </text>
              <text
                x="325"
                y="56"
                textAnchor="middle"
                className={`text-[10px] font-semibold ${selectedReflex === 'gto' ? 'fill-amber-700' : 'fill-slate-600'}`}
              >
                2. GTO (Tension)
              </text>
            </g>

            {/* Opposite Antagonist Muscle (Reciprocal Inhibition) */}
            <g className="cursor-pointer" onClick={() => setSelectedReflex('reciprocal')}>
              <rect
                x="110"
                y="152"
                width="200"
                height="30"
                rx="15"
                fill={selectedReflex === 'reciprocal' ? '#0d9488' : '#f1f5f9'}
                stroke="#0f766e"
                strokeWidth="1.5"
              />
              <text
                x="210"
                y="171"
                textAnchor="middle"
                className={`text-[10px] font-semibold ${selectedReflex === 'reciprocal' ? 'fill-white' : 'fill-teal-900'}`}
              >
                3. Opposite Muscle Contracts → Target Relaxes
              </text>
            </g>
          </svg>
        </div>

        {/* Interactive Reflex & Sequence Guide */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {REFLEXES.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedReflex(r.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedReflex === r.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {r.name.split('(')[0].trim()}
              </button>
            ))}
          </div>

          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/70 text-xs space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900">{active.name}</h4>
              <span className="font-mono text-[11px] text-slate-500">{active.senses}</span>
            </div>
            <p className="text-slate-600">
              <strong className="text-slate-800">Location:</strong> {active.location}
            </p>
            <p className="text-slate-700 leading-relaxed">{active.mechanism}</p>
            <p className="text-sky-800 font-medium pt-1 border-t border-slate-200">
              In your plan: {active.application}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
              <span className="font-semibold text-slate-900 block">Flexibility (Passive)</span>
              <p className="text-slate-600 mt-1">
                Passive ROM via stretch tolerance. Best trained after sessions or on Sundays (2–4 × 20–30 s).
              </p>
            </div>
            <div className="bg-sky-50/70 border border-sky-200 rounded-lg p-3">
              <span className="font-semibold text-sky-900 block">Mobility (Active Control)</span>
              <p className="text-sky-900/90 mt-1">
                Active end-range strength (3 s pause goblet squats, 4 s RDL negatives, split squats).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
