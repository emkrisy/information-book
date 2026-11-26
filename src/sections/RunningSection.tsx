import React, { useState } from 'react';
import { PaceAndEnergySvg } from '../components/infographics/PaceAndEnergySvg';
import { PaceProgressionSvg } from '../components/infographics/PaceProgressionSvg';
import { WEEKS_52, FLEXIBILITY_STRETCHES } from '../data/handbookData';

export const RunningSection: React.FC = () => {
  const [stageTab, setStageTab] = useState<'stage0' | 'stage1' | 'stage2' | 'stage3' | 'recovery'>('stage0');

  const stageWeeks =
    stageTab === 'stage0'
      ? WEEKS_52.filter((w) => w.week <= 12)
      : stageTab === 'stage1'
      ? WEEKS_52.filter((w) => w.week >= 13 && w.week <= 20)
      : stageTab === 'stage2'
      ? WEEKS_52.filter((w) => w.week >= 21 && w.week <= 34)
      : WEEKS_52.filter((w) => w.week >= 35);

  return (
    <section id="running" className="scroll-mt-20 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono text-sky-700 font-semibold">03 · RUNNING &amp; ACTIVE RECOVERY</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
            Zero to 5K, 10K, Half Marathon &amp; Full Marathon Roadmap
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-xl">
          Aerobic base is built at conversational pace (talk test passes, 8:00–9:30 min/km initially). Walk breaks are training, not failure.
        </p>
      </div>

      {/* Pace Calculator & Energy Systems Infographic */}
      <PaceAndEnergySvg />

      {/* Progressive Pace Targets Infographic */}
      <PaceProgressionSvg />

      {/* Pre-Run Warm-up, Form & Race Protocols */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5">
          <h3 className="text-sm font-semibold text-slate-900">5-Min Pre-Run Warm-up &amp; Gear (5.4)</h3>
          <p className="text-slate-600 leading-relaxed">
            Brisk walk 3 min → leg swings 10 each → high-knee march 20 m → butt kicks 20 m → walking lunge w/ twist 6/side → ankle hops 20.
          </p>
          <p className="text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
            <strong>Shoes &amp; Heat:</strong> Thumb-width toe clearance; replace at 600–800 km. Slow pace 10–20 s/km in heat/humidity.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5">
          <h3 className="text-sm font-semibold text-slate-900">Week 8: 5K Test Protocol (5.5)</h3>
          <p className="text-slate-600 leading-relaxed">
            Warm up 10 min. Run at steady comfortable effort (short sentence possible). Start slower than you think; walking is allowed.
          </p>
          <p className="text-sky-800 font-mono font-medium pt-1 border-t border-slate-100">
            Typical 1st 5K result: 38–48 min (goal: finish healthy)
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5">
          <h3 className="text-sm font-semibold text-slate-900">Week 12: 10K Race Plan (5.6)</h3>
          <p className="text-slate-600 leading-relaxed">
            Extra carbs day before; rice/oats + banana 2–3 h pre-race. Open first 2 km slower than goal pace; use 4m jog / 1m walk before fatigued.
          </p>
          <p className="text-sky-800 font-mono font-medium pt-1 border-t border-slate-100">
            Typical 1st 10K result: 75–95 min
          </p>
        </div>
      </div>

      {/* Stage Run Plan Explorer */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Complete Staged Run Schedules &amp; Sunday Swim / Mobility
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Move to the next week only if the previous week felt controlled (RPE &lt;6, no pain). Add one variable at a time.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'stage0' as const, label: 'Weeks 1–12 (0 → 10K)' },
              { id: 'stage1' as const, label: 'Weeks 13–20 (10K Speed)' },
              { id: 'stage2' as const, label: 'Weeks 21–34 (Half)' },
              { id: 'stage3' as const, label: 'Weeks 35–52 (Marathon)' },
              { id: 'recovery' as const, label: 'Swim & Flexibility' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setStageTab(t.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  stageTab === t.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {stageTab !== 'recovery' ? (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-2 pr-3 font-medium">Week</th>
                    <th className="py-2 px-3 font-medium">Phase / Focus</th>
                    <th className="py-2 px-3 font-medium">Run Sessions</th>
                    <th className="py-2 px-3 font-medium">Long Run</th>
                    <th className="py-2 pl-3 font-medium">Weekly Vol.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stageWeeks.map((w) => (
                    <tr key={w.week} className={w.isDeload ? 'bg-slate-50/80' : 'hover:bg-slate-50/60'}>
                      <td className="py-2.5 pr-3 font-mono font-semibold text-slate-900 tabular-nums">
                        Wk {w.week}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-medium text-slate-900">{w.headline}</span>
                        {w.isDeload && (
                          <span className="ml-2 text-[11px] font-mono text-amber-700">
                            ({w.phaseLabel})
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">{w.runNote}</td>
                      <td className="py-2.5 px-3 font-mono text-slate-800 tabular-nums">{w.longRunKm} km</td>
                      <td className="py-2.5 pl-3 font-mono font-semibold text-sky-700 tabular-nums">
                        {w.weeklyKm} km
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {stageTab === 'stage0' && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-700">
                <strong className="text-slate-900">10K Fallback (Section 5.7):</strong> If weeks 9–11 long runs feel harder than moderate, repeat the week and push the 10K race to Week 14 (Wk 12: 30m + 8 km, Wk 13: 35m fartlek + 9 km, Wk 14: taper + 10K). Finishing healthy matters more than the date.
              </div>
            )}

            {stageTab === 'stage3' && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-700">
                <strong className="text-slate-900">Post-Marathon Recovery (Section 12.9):</strong> Days 1–7: walk, light swim, 8–9h sleep, maintenance food (no running/lifting/alcohol binges). Weeks 2–3: 2–3 easy 20–30m runs + 2 light lifts. Week 4: resume 3 runs + retest. Weeks 5–8: choose Year 2 track (Faster Half, Faster Marathon, Physique Year, or Balanced Hybrid).
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-3 text-xs">
              <h4 className="font-semibold text-slate-900 text-sm">Sunday Active Recovery Swimming (600–1,800 m)</h4>
              <p className="text-slate-600">
                Effort stays 3–4/10 with 20–30 s rest. Alternate freestyle with backstroke for shoulder posture. No pool? Swap for 40 min easy cycling or brisk walking + Routine B.
              </p>
              <div className="space-y-2">
                {[
                  ['Weeks 1–4 (600–800 m)', '4m easy swim · 6x50m easy · 4x25m kickboard · 4m cool-down'],
                  ['Weeks 5–8 (1,000–1,100 m)', '200m warm-up · 4x50m drills · 6x100m easy · 100m cool-down'],
                  ['Weeks 9–12 (1,500 m)', '300m warm-up · 4x50m drills · 8x100m easy-mod · 4x50m pull buoy'],
                  ['Weeks 13–52 (Phases 2–4)', 'Up to 1,800 m in Phase 2; 25–40m easy swim or prioritize mobility on heavy marathon weeks'],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="font-semibold text-slate-900 block">{title}</span>
                    <span className="text-slate-600">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h4 className="font-semibold text-slate-900 text-sm mb-2">
                Flexibility Routines (A: 8–10m post-session · B: 25m Sunday)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 pr-3 font-medium">Stretch</th>
                      <th className="py-2 px-3 font-medium">Execution</th>
                      <th className="py-2 px-3 font-medium">Hold / Reps</th>
                      <th className="py-2 pl-3 font-medium">Routine</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FLEXIBILITY_STRETCHES.map((s) => (
                      <tr key={s.name}>
                        <td className="py-2 pr-3 font-medium text-slate-900">{s.name}</td>
                        <td className="py-2 px-3 text-slate-600">{s.how}</td>
                        <td className="py-2 px-3 font-mono text-slate-800 tabular-nums">{s.dose}</td>
                        <td className="py-2 pl-3 font-mono text-sky-700">{s.routine}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
