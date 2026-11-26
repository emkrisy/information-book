import React, { useState } from 'react';
import { MacrocycleTimelineSvg } from '../components/infographics/MacrocycleTimelineSvg';
import { ReadinessCheck } from '../components/ReadinessCheck';
import { BenchmarkTracker } from '../components/BenchmarkTracker';
import { PHASE_METADATA, VARIATIONS_MATRIX } from '../data/handbookData';

export const TimelineSection: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(8);
  const [activePhaseId, setActivePhaseId] = useState<'phase1' | 'phase2' | 'phase3' | 'phase4'>('phase1');

  const activePhase = PHASE_METADATA.find((p) => p.id === activePhaseId) ?? PHASE_METADATA[0];

  const handleSelectWeek = (wk: number) => {
    setSelectedWeek(wk);
    if (wk <= 12) setActivePhaseId('phase1');
    else if (wk <= 20) setActivePhaseId('phase2');
    else if (wk <= 34) setActivePhaseId('phase3');
    else setActivePhaseId('phase4');
  };

  return (
    <section id="timeline" className="scroll-mt-20 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono text-sky-700 font-semibold">01 · MASTER MACROCYCLE</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
            52-Week Periodized Timeline &amp; Weekly Templates
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-xl">
          Four progressive phases build from walk/jog intervals to a 42.2 km marathon without crash loading. Built-in deload weeks every 3rd–4th week absorb fatigue.
        </p>
      </div>

      {/* Macrocycle Timeline SVG Infographic */}
      <MacrocycleTimelineSvg selectedWeek={selectedWeek} onSelectWeek={handleSelectWeek} />

      {/* Weekly Schedule by Phase + Entry Gates & Flex Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="text-base font-semibold text-slate-900">Weekly Schedule by Phase</h3>
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg">
              {PHASE_METADATA.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhaseId(p.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activePhaseId === p.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Phase {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-3 pb-3 border-b border-slate-100">
            <span className="font-semibold text-slate-900">{activePhase.name}</span>
            <span aria-hidden="true">·</span>
            <span>{activePhase.weeks}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{activePhase.runsPerWeek}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{activePhase.strengthPerWeek}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Day</th>
                  <th className="py-2 px-3 font-medium">Session</th>
                  <th className="py-2 px-3 font-medium">Duration</th>
                  <th className="py-2 pl-3 font-medium">Intensity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activePhase.schedule.map((row) => (
                  <tr key={row.day} className="hover:bg-slate-50/70">
                    <td className="py-2 pr-3 font-mono font-semibold text-slate-800">{row.day}</td>
                    <td className="py-2 px-3 font-medium text-slate-900">{row.session}</td>
                    <td className="py-2 px-3 font-mono text-slate-600 tabular-nums">{row.time}</td>
                    <td className="py-2 pl-3 text-slate-600">{row.intensity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
            <strong className="text-slate-900">Phase Entry Gate:</strong> {activePhase.entryGate}
          </p>
        </div>

        {/* Flex Rules & Busy/Travel Variations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              If You Fall Behind (Flex Rules · Section 3.8)
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              A realistic year is ~46 of 52 weeks as planned (88%). Never compress training load to hit a race date.
            </p>
            <dl className="divide-y divide-slate-100 text-xs">
              {[
                ['Missed 1 session', 'Continue as planned. Never double up sessions.'],
                ['Missed 1 full week', 'Repeat the previous week, then shift later dates by 1 week.'],
                ['Off 2 weeks / 3–4 weeks', 'Restart at 80% loads/times (2 wks off) or 60–70% wk 1 → 80% wk 2 (3–4 wks off).'],
                ['Fixed race date too close', 'Choose a later race or shorter distance. Compressing load causes injury.'],
              ].map(([k, v]) => (
                <div key={k} className="py-2 flex flex-col gap-0.5">
                  <dt className="font-semibold text-slate-900">{k}</dt>
                  <dd className="text-slate-600">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              Busy Weeks, Travel &amp; Weather Swaps (Section 10)
            </h3>
            <div className="divide-y divide-slate-100 text-xs">
              {VARIATIONS_MATRIX.map((v) => (
                <div key={v.situation} className="py-2">
                  <span className="font-semibold text-slate-900">{v.situation}: </span>
                  <span className="text-slate-600">{v.action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Readiness Check */}
      <ReadinessCheck />

      {/* Personal Benchmark & Retest Tracker */}
      <BenchmarkTracker />
    </section>
  );
};
