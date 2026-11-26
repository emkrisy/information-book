import React, { useState } from 'react';
import { NUTRITION_CYCLING, NUTRITION_PHASES } from '../../data/handbookData';

export const NutritionFuelingSvg: React.FC = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(2); // Wed Hard Day default
  const activeDay = NUTRITION_CYCLING[selectedDayIdx];

  // Phase 1-4 Calorie & Carb SVG chart
  const w = 540;
  const h = 215;
  const pL = 52;
  const pR = 24;
  const pT = 26;
  const pB = 42;
  const cW = w - pL - pR;
  const cH = h - pT - pB;

  const maxKcal = 3300;
  const yKcal = (k: number) => pT + cH - (k / maxKcal) * cH;
  const xPhase = (idx: number) => pL + ((idx + 0.5) / NUTRITION_PHASES.length) * cW;

  // Energy Availability Calculation for 61kg (~51kg FFM)
  const eaPhase1 = Math.round((2300 - 350) / 51); // 38 kcal/kg FFM/day
  const eaMarathon = Math.round((2900 - 520) / 52); // ~46 kcal/kg FFM/day

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Weekly Cycling Bar Infographic */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Phase 1 Weekly Calorie &amp; Carb Cycling
              </h3>
              <p className="text-xs text-slate-500">
                Protein stays locked at 125 g/day; carbs scale around hard leg &amp; long-run days. Click a day.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Avg 2,300 kcal</span>
          </div>

          <svg viewBox="0 0 460 205" className="w-full h-auto" role="img" aria-label="Weekly calorie and carbohydrate cycling chart">
            {[1500, 2000, 2500].map((k) => {
              const y = 165 - ((k - 1200) / 1400) * 135;
              return (
                <g key={k}>
                  <line x1="42" y1={y} x2="444" y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
                  <text x="36" y={y + 3} textAnchor="end" className="fill-slate-400 text-[9px] font-mono tabular-nums">
                    {k}
                  </text>
                </g>
              );
            })}

            {NUTRITION_CYCLING.map((d, idx) => {
              const x = 52 + idx * 56;
              const barH = ((d.kcal - 1200) / 1400) * 135;
              const y = 165 - barH;
              const isSelected = idx === selectedDayIdx;
              const isHard = d.kcal >= 2450;

              return (
                <g
                  key={d.day}
                  className="cursor-pointer"
                  onClick={() => setSelectedDayIdx(idx)}
                >
                  <rect
                    x={x}
                    y={y}
                    width={38}
                    height={barH}
                    rx={4}
                    fill={isHard ? '#0284c7' : d.kcal <= 2100 ? '#94a3b8' : '#38bdf8'}
                    fillOpacity={isSelected ? 1 : 0.72}
                    stroke={isSelected ? '#0f172a' : 'none'}
                    strokeWidth={1.5}
                  />
                  <text
                    x={x + 19}
                    y={y - 6}
                    textAnchor="middle"
                    className="fill-slate-700 text-[9px] font-mono font-semibold tabular-nums"
                  >
                    {d.kcal}
                  </text>
                  <text
                    x={x + 19}
                    y={183}
                    textAnchor="middle"
                    className={`text-[10px] font-medium ${isSelected ? 'fill-slate-900 font-bold' : 'fill-slate-600'}`}
                  >
                    {d.day}
                  </text>
                  <text
                    x={x + 19}
                    y={196}
                    textAnchor="middle"
                    className="fill-slate-400 text-[8.5px] font-mono tabular-nums"
                  >
                    {d.carbs}g C
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-semibold text-slate-900">{activeDay.day}: {activeDay.type}</span>
            </div>
            <div className="font-mono text-slate-700 tabular-nums">
              {activeDay.kcal} kcal · {activeDay.protein}g P · {activeDay.fat}g F · {activeDay.carbs}g C
            </div>
          </div>
        </div>

        {/* Full-Year Calorie Scaling & Energy Availability */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Full-Year Energy &amp; Carb Scaling (Phases 1–4)
              </h3>
              <p className="text-xs text-slate-500">
                Running costs ~1 kcal/kg/km (~61 kcal/km). Eating too little in Phases 3–4 risks RED-S [7].
              </p>
            </div>
          </div>

          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label="Full year calorie and carbohydrate progression across phases 1 to 4">
            {[1500, 2000, 2500, 3000].map((k) => (
              <g key={k}>
                <line x1={pL} y1={yKcal(k)} x2={w - pR} y2={yKcal(k)} stroke="#e2e8f0" strokeDasharray="3 3" />
                <text x={pL - 6} y={yKcal(k) + 3} textAnchor="end" className="fill-slate-400 text-[9px] font-mono tabular-nums">
                  {k}
                </text>
              </g>
            ))}

            {NUTRITION_PHASES.map((p, i) => {
              const cx = xPhase(i);
              const barW = 44;
              const barH = (p.kcalMid / maxKcal) * cH;
              const y = pT + cH - barH;
              const color = i === 2 ? '#0d9488' : i >= 4 ? '#0284c7' : '#64748b';
              return (
                <g key={p.phase}>
                  <rect x={cx - barW / 2} y={y} width={barW} height={barH} rx={4} fill={color} fillOpacity={0.85} />
                  <text x={cx} y={y - 6} textAnchor="middle" className="fill-slate-900 text-[9.5px] font-mono font-semibold tabular-nums">
                    {p.kcalMid}
                  </text>
                  <text x={cx} y={y + 16} textAnchor="middle" className="fill-white text-[9px] font-mono tabular-nums">
                    {p.carbMid}g C
                  </text>
                  <text x={cx} y={h - pB + 15} textAnchor="middle" className="fill-slate-700 text-[9.5px] font-medium">
                    {p.phase.replace(/^\d+\.\s*/, '')}
                  </text>
                  <text x={cx} y={h - pB + 28} textAnchor="middle" className="fill-slate-400 text-[8.5px] font-mono">
                    W{p.weeks}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Energy Availability Meter */}
          <div className="mt-2 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-slate-800">
                Energy Availability (EA = [Intake − Exercise] / 51 kg FFM)
              </span>
              <span className="font-mono text-slate-600 tabular-nums">
                Phase 1: {eaPhase1} · Marathon: ~{eaMarathon} kcal/kg FFM/d
              </span>
            </div>
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-100">
              <div className="bg-red-500 h-full" style={{ width: '35%' }} title="<30 RED-S risk" />
              <div className="bg-amber-400 h-full" style={{ width: '30%' }} title="30–40 short-term lean-out" />
              <div className="bg-emerald-500 h-full" style={{ width: '35%' }} title="45+ optimal health" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>&lt;30 Risk (RED-S)</span>
              <span>38 (Max 8–12 wk lean-out)</span>
              <span>45+ Optimal Endurance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marathon Fueling Timeline Infographic */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Marathon Race-Week &amp; Race-Day Fueling Protocol (61 kg Runner)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Glycogen stores limit marathon finishing speed; practice gels and fluids on every long run from Phase 3 onward (Section 12.8).
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">Goal 5:30 (~7:49/km)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            {
              step: '48–36 Hours Before',
              title: 'Carb Loading',
              metric: '490–610 g/day',
              detail: '8–10 g/kg/day via low-fibre white rice, potato, bread, pasta, bananas.',
            },
            {
              step: '3 Hours Before Start',
              title: 'Pre-Race Meal',
              metric: '100–150 g Carbs',
              detail: 'Oats + banana + honey or rice; sip 300–430 mL water.',
            },
            {
              step: 'Start to 5 km',
              title: 'Conservative Opening',
              metric: '~7:59/km pace',
              detail: 'Run first 5 km ~10 s/km slower than goal MP to spare glycogen.',
            },
            {
              step: 'During Race (5:30)',
              title: 'In-Race Fuel & Fluid',
              metric: '60 g/h · 400–800 mL/h',
              detail: 'One 25 g gel every 25–30 min + sports drink (~300+ g total); drink to thirst.',
            },
            {
              step: '30 km to 42.2 km',
              title: 'Effort & Walk Breaks',
              metric: 'Aid station walks',
              detail: 'Hold MP to 30 km, then run by effort. Short walks at aid stations keep rhythm.',
            },
          ].map((stage, i) => (
            <div key={stage.step} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 relative">
              <span className="text-[11px] font-mono font-semibold text-sky-700 block">
                0{i + 1} · {stage.step}
              </span>
              <h4 className="text-sm font-semibold text-slate-900 mt-1">{stage.title}</h4>
              <p className="text-xs font-mono font-semibold text-slate-800 mt-1 tabular-nums">{stage.metric}</p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
