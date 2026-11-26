import React, { useEffect, useState } from 'react';
import { Download, RotateCcw } from 'lucide-react';

interface CheckpointData {
  weight: string;
  waist: string;
  oneKm: string;
  pushups: string;
  plankSec: string;
  deadlift5rm: string;
  restingHr: string;
}

const CHECKPOINTS = ['Week 0', 'Week 4', 'Week 8', 'Week 12', 'Week 20', 'Week 34', 'Week 52'] as const;
type CheckpointKey = (typeof CHECKPOINTS)[number];

const DEFAULT_LOG: Record<CheckpointKey, CheckpointData> = {
  'Week 0': { weight: '61.0', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '45', restingHr: '65' },
  'Week 4': { weight: '', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '', restingHr: '' },
  'Week 8': { weight: '', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '', restingHr: '' },
  'Week 12': { weight: '', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '', restingHr: '' },
  'Week 20': { weight: '', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '', restingHr: '' },
  'Week 34': { weight: '', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '', restingHr: '' },
  'Week 52': { weight: '', waist: '', oneKm: '', pushups: '', plankSec: '', deadlift5rm: '', restingHr: '' },
};

const METRIC_ROWS: { key: keyof CheckpointData; label: string; target: string; placeholder: string }[] = [
  { key: 'weight', label: '7-Day Avg Weight (kg)', target: '60–64 kg (stable)', placeholder: '61.0' },
  { key: 'waist', label: 'Waist at Navel (cm)', target: '−3 to −9 cm vs Wk 0', placeholder: '78.0' },
  { key: 'oneKm', label: '1 km Time Test (min:sec)', target: 'Under 7:30 by Wk 12', placeholder: '8:45' },
  { key: 'pushups', label: 'Max Strict Push-ups', target: '2x by Wk 12 · 40+ Wk 52', placeholder: '16' },
  { key: 'plankSec', label: 'Front Plank Hold (s)', target: '90 s+', placeholder: '60' },
  { key: 'deadlift5rm', label: 'Deadlift 5-Rep Max (kg)', target: '55–65 Wk12 · 75–95 Wk52', placeholder: '50' },
  { key: 'restingHr', label: 'Waking Resting HR (bpm)', target: 'Lower by 5–10 bpm', placeholder: '62' },
];

const STORAGE_KEY = 'handbook_benchmark_log_v1';

export const BenchmarkTracker: React.FC = () => {
  const [log, setLog] = useState<Record<CheckpointKey, CheckpointData>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...DEFAULT_LOG, ...JSON.parse(saved) };
    } catch {
      // ignore storage errors
    }
    return DEFAULT_LOG;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
    } catch {
      // ignore storage errors
    }
  }, [log]);

  const updateCell = (cp: CheckpointKey, field: keyof CheckpointData, val: string) => {
    setLog((prev) => ({
      ...prev,
      [cp]: { ...prev[cp], [field]: val },
    }));
  };

  const handleReset = () => {
    setLog(DEFAULT_LOG);
  };

  const handleExportCsv = () => {
    const headers = ['Metric', 'Target', ...CHECKPOINTS];
    const lines = [
      headers.join(','),
      ...METRIC_ROWS.map((row) =>
        [
          `"${row.label}"`,
          `"${row.target}"`,
          ...CHECKPOINTS.map((cp) => `"${log[cp][row.key] || ''}"`),
        ].join(',')
      ),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '52-week-benchmarks.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Personal Benchmark &amp; Retest Tracker (Sections 9 &amp; 15.5)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Measure on the same weekday morning after the toilet before food. Saved locally in your browser.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="py-2 pr-3 font-medium min-w-[170px]">Metric</th>
              <th className="py-2 px-3 font-medium min-w-[155px]">Handbook Target</th>
              {CHECKPOINTS.map((cp) => (
                <th key={cp} className="py-2 px-2 font-medium font-mono text-center min-w-[82px]">
                  {cp}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {METRIC_ROWS.map((row) => (
              <tr key={row.key} className="hover:bg-slate-50/70">
                <td className="py-2 pr-3 font-semibold text-slate-900">{row.label}</td>
                <td className="py-2 px-3 text-slate-600">{row.target}</td>
                {CHECKPOINTS.map((cp) => (
                  <td key={cp} className="py-1.5 px-1.5">
                    <input
                      type="text"
                      aria-label={`${row.label} at ${cp}`}
                      placeholder={cp === 'Week 0' ? row.placeholder : '—'}
                      value={log[cp][row.key]}
                      onChange={(e) => updateCell(cp, row.key, e.target.value)}
                      className="w-full px-2 py-1 text-center font-mono tabular-nums text-xs border border-slate-200 rounded bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-600"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
