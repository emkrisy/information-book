import React, { useState } from 'react';
import { MOVEMENT_PATTERNS, MovementPatternInfo } from '../../data/handbookData';

export const MovementMechanicsSvg: React.FC = () => {
  const [patternId, setPatternId] = useState<MovementPatternInfo['id']>('hinge');
  const [showFault, setShowFault] = useState<boolean>(false);

  const active = MOVEMENT_PATTERNS.find((p) => p.id === patternId) ?? MOVEMENT_PATTERNS[0];

  const renderStickDiagram = () => {
    const strokeGood = '#0284c7';
    const strokeFault = '#dc2626';
    const activeColor = showFault ? strokeFault : strokeGood;

    switch (patternId) {
      case 'squat':
        return (
          <g>
            {/* Floor */}
            <line x1="30" y1="215" x2="290" y2="215" stroke="#94a3b8" strokeWidth="2" />
            {/* Mid-foot vertical plumb line */}
            <line x1="150" y1="35" x2="150" y2="215" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="1.5" />
            {!showFault ? (
              <>
                {/* Optimal Squat: heels down, upright torso, knees over toes */}
                <circle cx="155" cy="75" r="11" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="150" y1="88" x2="122" y2="148" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="122" y1="148" x2="176" y2="162" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="176" y1="162" x2="152" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Foot flat */}
                <line x1="145" y1="213" x2="180" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Goblet weight */}
                <rect x="157" y="102" width="16" height="20" rx="3" fill="#0f172a" />
                <line x1="145" y1="98" x2="160" y2="112" stroke={activeColor} strokeWidth="3" strokeLinecap="round" />
                {/* Cue arrow */}
                <text x="195" y="160" className="fill-sky-700 text-[10px] font-semibold">Knees track over toes</text>
                <text x="188" y="205" className="fill-sky-700 text-[10px] font-semibold">Heels flat</text>
              </>
            ) : (
              <>
                {/* Fault: heels lifting, forward trunk collapse */}
                <circle cx="195" cy="96" r="11" fill="none" stroke={activeColor} strokeWidth="3" />
                <path d="M188 106 Q148 122 120 152" fill="none" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="120" y1="152" x2="186" y2="164" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="186" y1="164" x2="174" y2="206" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Heel lifted */}
                <line x1="162" y1="204" x2="192" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <text x="198" y="138" className="fill-red-600 text-[10px] font-semibold">Excessive lean /</text>
                <text x="198" y="150" className="fill-red-600 text-[10px] font-semibold">heels rising</text>
              </>
            )}
          </g>
        );

      case 'hinge':
        return (
          <g>
            <line x1="30" y1="215" x2="290" y2="215" stroke="#94a3b8" strokeWidth="2" />
            <line x1="162" y1="35" x2="162" y2="215" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="1.5" />
            {!showFault ? (
              <>
                {/* Flat back hinge, hips back, vertical shin, bar over mid-foot */}
                <circle cx="205" cy="86" r="11" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="195" y1="95" x2="112" y2="132" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="112" y1="132" x2="156" y2="166" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="156" y1="166" x2="156" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="150" y1="213" x2="182" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Arm & Barbell over midfoot */}
                <line x1="176" y1="104" x2="166" y2="164" stroke={activeColor} strokeWidth="3" strokeLinecap="round" />
                <circle cx="166" cy="170" r="10" fill="none" stroke="#0f172a" strokeWidth="3" />
                {/* Hip back vector */}
                <line x1="106" y1="132" x2="66" y2="132" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrowBlue)" />
                <text x="40" y="122" className="fill-sky-700 text-[10px] font-semibold">Hips back</text>
                <text x="180" y="140" className="fill-sky-700 text-[10px] font-semibold">Vertical shin</text>
              </>
            ) : (
              <>
                {/* Rounded lumbar spine */}
                <circle cx="206" cy="100" r="11" fill="none" stroke={activeColor} strokeWidth="3" />
                <path d="M196 105 Q150 92 118 136" fill="none" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="118" y1="136" x2="164" y2="166" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="164" y1="166" x2="156" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="150" y1="213" x2="182" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="184" y1="108" x2="186" y2="168" stroke={activeColor} strokeWidth="3" />
                <circle cx="186" cy="174" r="10" fill="none" stroke="#0f172a" strokeWidth="3" />
                <text x="120" y="84" className="fill-red-600 text-[10px] font-semibold">Rounded lumbar spine</text>
                <text x="198" y="176" className="fill-red-600 text-[10px] font-semibold">Bar drifts forward</text>
              </>
            )}
          </g>
        );

      case 'push':
        return (
          <g>
            {/* Bench / Floor */}
            <rect x="60" y="162" width="180" height="10" rx="2" fill="#cbd5e1" />
            <line x1="80" y1="172" x2="80" y2="215" stroke="#94a3b8" strokeWidth="3" />
            <line x1="220" y1="172" x2="220" y2="215" stroke="#94a3b8" strokeWidth="3" />
            {!showFault ? (
              <>
                {/* Optimal Press: Torso flat, shoulder blades set, vertical forearm */}
                <circle cx="90" cy="144" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="102" y1="155" x2="185" y2="155" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="185" y1="155" x2="225" y2="178" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="225" y1="178" x2="225" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Forearm vertical, 45° tuck */}
                <line x1="126" y1="155" x2="126" y2="104" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <rect x="114" y="92" width="24" height="10" rx="2" fill="#0f172a" />
                <text x="148" y="102" className="fill-sky-700 text-[10px] font-semibold">Wrists stacked · 45° elbows</text>
                <text x="108" y="196" className="fill-sky-700 text-[10px] font-semibold">Scapulae pinched, feet planted</text>
              </>
            ) : (
              <>
                {/* Fault: Over-arched lumbar / flared elbows / wrists bent */}
                <circle cx="90" cy="144" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <path d="M102 155 Q144 134 185 155" fill="none" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="185" y1="155" x2="225" y2="178" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="225" y1="178" x2="225" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="126" y1="150" x2="102" y2="105" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <rect x="90" y="94" width="24" height="10" rx="2" fill="#0f172a" />
                <text x="128" y="102" className="fill-red-600 text-[10px] font-semibold">90° flare / unstacked</text>
              </>
            )}
          </g>
        );

      case 'pull':
        return (
          <g>
            {/* Chest-supported bench */}
            <line x1="70" y1="215" x2="250" y2="215" stroke="#94a3b8" strokeWidth="2" />
            <line x1="95" y1="180" x2="185" y2="108" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
            <line x1="155" y1="132" x2="155" y2="215" stroke="#94a3b8" strokeWidth="3" />
            {!showFault ? (
              <>
                <circle cx="192" cy="84" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="180" y1="95" x2="112" y2="148" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="112" y1="148" x2="92" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Elbow drives back to hip */}
                <line x1="170" y1="103" x2="138" y2="134" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="138" y1="134" x2="144" y2="170" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <rect x="134" y="168" width="20" height="10" rx="2" fill="#0f172a" />
                <text x="195" y="140" className="fill-sky-700 text-[10px] font-semibold">Elbows to ribs</text>
                <text x="195" y="153" className="fill-sky-700 text-[10px] font-semibold">1s pause at top</text>
              </>
            ) : (
              <>
                <circle cx="198" cy="75" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <path d="M186 85 Q150 96 112 148" fill="none" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="112" y1="148" x2="92" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="176" y1="90" x2="180" y2="130" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="180" y1="130" x2="178" y2="168" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <rect x="168" y="168" width="20" height="10" rx="2" fill="#0f172a" />
                <text x="200" y="126" className="fill-red-600 text-[10px] font-semibold">Shrugging traps &amp; swing</text>
              </>
            )}
          </g>
        );

      case 'lunge':
        return (
          <g>
            <line x1="30" y1="215" x2="290" y2="215" stroke="#94a3b8" strokeWidth="2" />
            {!showFault ? (
              <>
                <circle cx="152" cy="58" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="152" y1="70" x2="148" y2="136" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Front leg 90/90 */}
                <line x1="148" y1="136" x2="196" y2="144" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="196" y1="144" x2="196" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="192" y1="213" x2="216" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Back leg vertical drop */}
                <line x1="148" y1="136" x2="136" y2="195" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="136" y1="195" x2="86" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <text x="172" y="88" className="fill-sky-700 text-[10px] font-semibold">Torso tall</text>
                <text x="208" y="182" className="fill-sky-700 text-[10px] font-semibold">Lead heel flat</text>
              </>
            ) : (
              <>
                <circle cx="182" cy="70" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="176" y1="80" x2="148" y2="136" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="148" y1="136" x2="216" y2="152" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="216" y1="152" x2="192" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="148" y1="136" x2="96" y2="188" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="96" y1="188" x2="66" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <text x="205" y="138" className="fill-red-600 text-[10px] font-semibold">Knee past toes /</text>
                <text x="205" y="150" className="fill-red-600 text-[10px] font-semibold">back-foot push</text>
              </>
            )}
          </g>
        );

      case 'core':
        return (
          <g>
            <line x1="30" y1="215" x2="290" y2="215" stroke="#94a3b8" strokeWidth="2" />
            {!showFault ? (
              <>
                {/* Rigid straight-line plank */}
                <circle cx="222" cy="146" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="212" y1="156" x2="72" y2="186" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="205" y1="158" x2="205" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="205" y1="213" x2="225" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="72" y1="186" x2="68" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <text x="105" y="142" className="fill-sky-700 text-[10px] font-semibold">Ribs down, glutes squeezed</text>
              </>
            ) : (
              <>
                {/* Sagging lower back */}
                <circle cx="222" cy="150" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <path d="M212 158 Q145 204 72 186" fill="none" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="205" y1="160" x2="205" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="72" y1="186" x2="68" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <text x="105" y="150" className="fill-red-600 text-[10px] font-semibold">Hip sag / lumbar arch</text>
              </>
            )}
          </g>
        );

      case 'run':
        return (
          <g>
            <line x1="30" y1="215" x2="290" y2="215" stroke="#94a3b8" strokeWidth="2" />
            {/* Center of mass plumb */}
            <line x1="160" y1="32" x2="160" y2="215" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="1.5" />
            {!showFault ? (
              <>
                <circle cx="166" cy="54" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="163" y1="65" x2="155" y2="128" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Foot landing close under hips */}
                <line x1="155" y1="128" x2="168" y2="168" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="168" y1="168" x2="164" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Trail leg */}
                <line x1="155" y1="128" x2="112" y2="166" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="112" y1="166" x2="90" y2="148" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Relaxed 90° arm */}
                <polyline points="160,76 142,102 174,104" fill="none" stroke={activeColor} strokeWidth="3" strokeLinecap="round" />
                <text x="180" y="198" className="fill-sky-700 text-[10px] font-semibold">Foot lands under hips</text>
                <text x="182" y="74" className="fill-sky-700 text-[10px] font-semibold">165–180 spm</text>
              </>
            ) : (
              <>
                <circle cx="152" cy="56" r="10" fill="none" stroke={activeColor} strokeWidth="3" />
                <line x1="153" y1="67" x2="155" y2="128" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                {/* Overstride far in front */}
                <line x1="155" y1="128" x2="212" y2="168" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="212" y1="168" x2="232" y2="213" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="155" y1="128" x2="118" y2="170" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="118" y1="170" x2="100" y2="195" stroke={activeColor} strokeWidth="4" strokeLinecap="round" />
                <text x="195" y="148" className="fill-red-600 text-[10px] font-semibold">Overstriding braking</text>
                <text x="195" y="160" className="fill-red-600 text-[10px] font-semibold">(heavy heel strike)</text>
              </>
            )}
          </g>
        );
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Movement Mechanics &amp; External Cueing Visualizer
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Select a movement pattern and toggle between optimal alignment and common faults (Sections 14.3, 14.4, 17.2).
          </p>
        </div>

        {/* Optimal vs Fault Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setShowFault(false)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              !showFault ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Optimal Form
          </button>
          <button
            onClick={() => setShowFault(true)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              showFault ? 'bg-white text-red-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Common Fault
          </button>
        </div>
      </div>

      {/* Pattern Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {MOVEMENT_PATTERNS.map((p) => (
          <button
            key={p.id}
            onClick={() => setPatternId(p.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              patternId === p.id
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Vector Canvas */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-3">
          <svg
            viewBox="0 0 320 235"
            className="w-full h-auto"
            role="img"
            aria-label={`${active.name} ${showFault ? 'common fault' : 'optimal form'} biomechanics diagram`}
          >
            <defs>
              <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
              </marker>
            </defs>
            {renderStickDiagram()}
          </svg>
        </div>

        {/* Coaching Cues & Biomechanics */}
        <div className="lg:col-span-7 space-y-3 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-base font-semibold text-slate-900">{active.name}</h4>
              <p className="text-slate-500">{active.jointsAndMuscles}</p>
            </div>
            <span className="font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
              {active.exercises}
            </span>
          </div>

          <div>
            <span className="font-semibold text-slate-900 block">Setup</span>
            <p className="text-slate-600 mt-0.5">{active.setup}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-sky-50/70 border border-sky-200 rounded-lg p-3">
              <span className="font-semibold text-sky-900 block mb-1">Key Checkpoints</span>
              <ul className="space-y-1 text-sky-900/90">
                {active.checkpoints.map((cp) => (
                  <li key={cp}>· {cp}</li>
                ))}
              </ul>
              <p className="mt-2 pt-2 border-t border-sky-200/70 text-sky-800 font-medium">
                External Cue: {active.externalCue}
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3">
              <span className="font-semibold text-amber-900 block mb-1">Common Fault &amp; Fix</span>
              <p className="text-amber-950 font-medium">{active.commonFault}</p>
              <p className="text-amber-900/90 mt-1.5">Fix: {active.fix}</p>
            </div>
          </div>

          <p className="text-slate-500 pt-1">
            <strong className="text-slate-700">Evidence note:</strong> {active.biomechanicsNote}
          </p>
        </div>
      </div>
    </div>
  );
};
