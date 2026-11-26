import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, OctagonAlert } from 'lucide-react';

type SignalLevel = 'green' | 'yellow' | 'red';

export const ReadinessCheck: React.FC = () => {
  const [sleep, setSleep] = useState<SignalLevel>('green');
  const [rhr, setRhr] = useState<SignalLevel>('green');
  const [soreness, setSoreness] = useState<SignalLevel>('green');
  const [mood, setMood] = useState<SignalLevel>('green');

  const levels: SignalLevel[] = [sleep, rhr, soreness, mood];
  const overall: SignalLevel = levels.includes('red')
    ? 'red'
    : levels.includes('yellow')
    ? 'yellow'
    : 'green';

  const statusMeta = {
    green: {
      title: 'GREEN: Train as Planned',
      action: 'Execute the full scheduled strength or running session with normal RIR and pace targets.',
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      Icon: CheckCircle2,
      iconColor: 'text-emerald-700',
    },
    yellow: {
      title: 'YELLOW: Reduce Volume & Pace',
      action: 'Cut strength working sets by one third and run slower or shorter (stay strictly conversational).',
      badgeBg: 'bg-amber-50 border-amber-200 text-amber-900',
      Icon: AlertTriangle,
      iconColor: 'text-amber-700',
    },
    red: {
      title: 'RED: Rest or Walk 20 Min Only',
      action: 'Skip today’s session. Walk 20 min and stretch gently. If you hit 2+ Red days in one week, make Thursday a full rest day and drop 1 set per exercise until recovered.',
      badgeBg: 'bg-red-50 border-red-200 text-red-900',
      Icon: OctagonAlert,
      iconColor: 'text-red-700',
    },
  }[overall];

  const rows: {
    label: string;
    value: SignalLevel;
    setter: (v: SignalLevel) => void;
    opts: { val: SignalLevel; text: string }[];
  }[] = [
    {
      label: 'Sleep Last Night',
      value: sleep,
      setter: setSleep,
      opts: [
        { val: 'green', text: '7+ hours' },
        { val: 'yellow', text: '5.5–7 hours' },
        { val: 'red', text: 'Under 5.5 hours' },
      ],
    },
    {
      label: 'Waking Resting HR',
      value: rhr,
      setter: setRhr,
      opts: [
        { val: 'green', text: 'Within 5 bpm' },
        { val: 'yellow', text: '+6–9 bpm' },
        { val: 'red', text: '+10+ bpm' },
      ],
    },
    {
      label: 'Muscle Soreness',
      value: soreness,
      setter: setSoreness,
      opts: [
        { val: 'green', text: 'Mild' },
        { val: 'yellow', text: 'Moderate (warms up)' },
        { val: 'red', text: 'Sharp / joint / tendon' },
      ],
    },
    {
      label: 'Energy & Mood',
      value: mood,
      setter: setMood,
      opts: [
        { val: 'green', text: 'Good' },
        { val: 'yellow', text: 'Tired but ok' },
        { val: 'red', text: 'Exhausted / ill / fever' },
      ],
    },
  ];

  const ActiveIcon = statusMeta.Icon;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Daily Readiness Check (Traffic Light Protocol · Section 3.2)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Check each morning before training to prevent overreaching and injury across 7 weekly sessions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {rows.map((row) => (
          <div key={row.label} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <span className="text-xs font-semibold text-slate-800 block mb-2">{row.label}</span>
            <div className="space-y-1.5">
              {row.opts.map((opt) => {
                const active = row.value === opt.val;
                const activeStyle =
                  opt.val === 'green'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : opt.val === 'yellow'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-red-700 text-white border-red-700';
                return (
                  <button
                    key={opt.val}
                    onClick={() => row.setter(opt.val)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-medium border transition-colors cursor-pointer ${
                      active
                        ? activeStyle
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Output Banner */}
      <div className={`border rounded-lg p-4 flex items-start gap-3 ${statusMeta.badgeBg}`}>
        <ActiveIcon className={`w-5 h-5 shrink-0 mt-0.5 ${statusMeta.iconColor}`} />
        <div>
          <p className="text-sm font-semibold">{statusMeta.title}</p>
          <p className="text-xs mt-1 leading-relaxed">{statusMeta.action}</p>
        </div>
      </div>
    </div>
  );
};
