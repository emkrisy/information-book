import React, { useState, useEffect } from 'react';
import {
  PROTECTED_HOURS_BREAKDOWN,
  SAMPLE_WEEK_SCHEDULE,
  DAILY_MINIMUMS,
  FIRST_7_DAYS,
  BUDGET_EXAMPLE,
} from '../../data/lifeHandbookData';

const SEVEN_DAY_STORAGE_KEY = 'life_handbook_first7days_v1';

export const WeeklyRhythmSvg: React.FC = () => {
  const [viewMode, setViewMode] = useState<'week' | 'first7' | 'budget'>('week');
  const [completedDays, setCompletedDays] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(SEVEN_DAY_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(SEVEN_DAY_STORAGE_KEY, JSON.stringify(completedDays));
    } catch {
      // Ignore storage failures
    }
  }, [completedDays]);

  const toggleDay = (day: string) => {
    setCompletedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const totalHours = 8;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-sky-700">
            WEEKLY RHYTHM &amp; PLAYBOOK · SECTIONS 6 &amp; 14
          </span>
          <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
            8 Protected Hours + 200 Minutes Exercise + Illustrative Monthly Budget
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Designed to fit calmly on top of your master&apos;s coursework—focused on life direction, not busywork.
          </p>
        </div>

        <div className="inline-flex p-1 bg-slate-100 rounded-lg">
          {[
            { id: 'week' as const, label: 'Sample Week (8h + 200m)' },
            { id: 'first7' as const, label: `First 7 Days (${completedDays.length}/7)` },
            { id: 'budget' as const, label: 'Rp 3M Budget Visual' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setViewMode(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === t.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Allocation Bar SVG for the 8 Protected Hours */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-slate-900">
            8 Protected Weekly Hours Allocation (Plus 4 × 50 min Exercise = 200 min)
          </span>
          <span className="font-mono text-slate-600 tabular-nums">8.0 hrs total / week</span>
        </div>

        <svg
          viewBox="0 0 720 44"
          className="w-full h-11"
          role="img"
          aria-label="8 Protected Weekly Hours Stacked Bar"
        >
          {(() => {
            let offset = 0;
            return PROTECTED_HOURS_BREAKDOWN.map((item) => {
              const width = (item.hours / totalHours) * 720;
              const x = offset;
              offset += width;
              return (
                <g key={item.category}>
                  <rect
                    x={x + 1}
                    y="4"
                    width={Math.max(width - 2, 4)}
                    height="36"
                    rx="5"
                    fill={item.color}
                  />
                  {width > 68 && (
                    <text
                      x={x + width / 2}
                      y="26"
                      textAnchor="middle"
                      fill="#ffffff"
                      className="font-mono text-[11px] font-semibold tabular-nums"
                    >
                      {item.hours}h
                    </text>
                  )}
                </g>
              );
            });
          })()}
        </svg>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          {PROTECTED_HOURS_BREAKDOWN.map((b) => (
            <div key={b.category} className="bg-white border border-slate-200 rounded-lg p-2.5">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-xs shrink-0"
                  style={{ backgroundColor: b.color }}
                />
                <span className="font-semibold text-slate-900 truncate">{b.category}</span>
              </div>
              <span className="font-mono text-slate-600 tabular-nums block mt-0.5">
                {b.hours.toFixed(1)} hrs/wk
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mode Views */}
      {viewMode === 'week' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-8 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Day</th>
                  <th className="py-2 px-3 font-medium">Protected Life Block (8h total)</th>
                  <th className="py-2 pl-3 font-medium">Movement (~200m total)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SAMPLE_WEEK_SCHEDULE.map((row) => (
                  <tr key={row.day}>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900 whitespace-nowrap">
                      {row.day}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">{row.protectedBlock}</td>
                    <td className="py-2.5 pl-3 font-mono text-sky-800 whitespace-nowrap">
                      {row.exercise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">DAILY FLOOR</span>
              <h4 className="text-sm font-semibold text-slate-900 mt-0.5">
                Minimum on a Hard Day
              </h4>
              <p className="text-slate-500 mt-0.5">
                The floor, not the ceiling. Enough to count as a good day without catching up.
              </p>
            </div>
            <ul className="space-y-2 text-slate-700">
              {DAILY_MINIMUMS.map((m, i) => (
                <li key={i} className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-start gap-2">
                  <span className="font-mono font-bold text-sky-700">{i + 1}.</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {viewMode === 'first7' && (
        <div className="space-y-3">
          <p className="text-xs text-slate-600">
            Interactive launch checklist (saved locally in your browser). Each step is scoped to 30 minutes or less.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {FIRST_7_DAYS.map((item) => {
              const checked = completedDays.includes(item.day);
              return (
                <button
                  key={item.day}
                  onClick={() => toggleDay(item.day)}
                  className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer flex items-start gap-3 ${
                    checked
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 ${
                      checked
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white border border-slate-300 text-slate-400'
                    }`}
                  >
                    {checked ? '✓' : ''}
                  </span>
                  <div>
                    <span className="font-semibold block">{item.day}</span>
                    <span className={checked ? 'line-through opacity-80' : 'text-slate-600'}>
                      {item.task}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {viewMode === 'budget' && (
        <div className="space-y-4 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-slate-600">
              Illustrative student allowance plan (Rp 3,000,000/mo). Any overspend comes out of <strong>Social &amp; fun</strong>—never out of Saving or Health.
            </p>
            <span className="font-mono font-semibold text-slate-900 tabular-nums">
              Total: Rp 3,000,000 / mo
            </span>
          </div>

          <div className="space-y-2">
            {BUDGET_EXAMPLE.map((row) => (
              <div key={row.category} className="grid grid-cols-12 items-center gap-3">
                <div className="col-span-5 sm:col-span-4 font-medium text-slate-800 truncate">
                  {row.category}
                </div>
                <div className="col-span-4 sm:col-span-5 bg-slate-100 h-5 rounded overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{ width: `${Math.max(row.pct * 2.2, 6)}%`, backgroundColor: row.color }}
                  />
                </div>
                <div className="col-span-3 text-right font-mono text-slate-700 tabular-nums">
                  Rp {(row.amount / 1000).toLocaleString()}k ({row.pct}%)
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
            <div>
              <strong className="text-slate-900 block mb-1">First-Income Rule (Rp 1.5M TA/RA Example)</strong>
              10% (Rp 150k) moves automatically to separate savings on payday → build 1 month essential buffer → grow to 3+ months → only then consider OJK-supervised index funds.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">5-Min Sunday Money Check &amp; Compounding</strong>
              Check weekly spend vs plan + biggest unplanned cost. Saving Rp 100k/mo at 6%/yr for 10 yrs ≈ Rp 16.4M vs Rp 12M put in—the real financial lever stays winning a funded scholarship.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
