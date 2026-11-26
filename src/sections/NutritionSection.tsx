import React, { useState } from 'react';
import { NutritionFuelingSvg } from '../components/infographics/NutritionFuelingSvg';
import { SAMPLE_MEAL_DAY } from '../data/handbookData';

export const NutritionSection: React.FC = () => {
  const [dayMode, setDayMode] = useState<'hard' | 'easy' | 'sunday'>('hard');

  const mealTweaks = {
    hard: { label: 'Hard Day (Wed / Sat)', kcal: '~2,310–2,450 kcal', note: 'Full template with 250g rice portions and pre-workout banana.' },
    easy: { label: 'Easy Day (Thu)', kcal: '~2,100–2,200 kcal', note: 'Remove 100 g cooked rice from dinner and the pre-workout banana. Keep protein at 125–140 g.' },
    sunday: { label: 'Active Recovery (Sun)', kcal: '~2,000–2,100 kcal', note: 'Also remove the 30 g oats from mid-morning yogurt. Protein stays constant every day.' },
  }[dayMode];

  return (
    <section id="nutrition" className="scroll-mt-20 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono text-sky-700 font-semibold">04 · NUTRITION &amp; FUELING</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
            Body Recomposition Nutrition, Hydration &amp; Race Fueling
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-xl">
          Estimated BMR ~1,530 kcal · Phase 1 maintenance ~2,450–2,600 kcal. A mild 5–10% deficit with 125 g protein (~2.0 g/kg) builds muscle while losing fat.
        </p>
      </div>

      {/* Interactive Nutrition Cycling, Full Year Scaling & Race Fueling SVG */}
      <NutritionFuelingSvg />

      {/* Sample Day + Adjustment Rules + Supplements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Sample Daily Menu &amp; Plate Method (Section 7.5)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                4–5 meals spaced 3–4 hours apart (25–40 g protein each). Follow the plan 85–90% of the time.
              </p>
            </div>
            <div className="inline-flex p-1 bg-slate-100 rounded-lg">
              {(['hard', 'easy', 'sunday'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setDayMode(m)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md capitalize cursor-pointer whitespace-nowrap shrink-0 ${
                    dayMode === m ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-sky-50/70 border border-sky-200 rounded-lg p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-sky-900">{mealTweaks.label} · {mealTweaks.kcal}</span>
            <span className="text-sky-900/90">{mealTweaks.note}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Meal</th>
                  <th className="py-2 px-3 font-medium">Whole-Food Example</th>
                  <th className="py-2 px-3 font-medium text-right">Protein</th>
                  <th className="py-2 pl-3 font-medium text-right">Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SAMPLE_MEAL_DAY.map((m) => (
                  <tr key={m.meal}>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900">{m.meal}</td>
                    <td className="py-2.5 px-3 text-slate-700">{m.items}</td>
                    <td className="py-2.5 px-3 font-mono text-right text-slate-700 tabular-nums">{m.protein} g</td>
                    <td className="py-2.5 pl-3 font-mono text-right font-semibold text-slate-900 tabular-nums">{m.kcal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Supplements + Data-Driven Calibration Rules */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Calibrate by 7-Day Average (Not Daily Scale)
            </h3>
            <ul className="text-xs text-slate-700 space-y-2 leading-relaxed">
              <li>· <strong>Expected trend:</strong> 0 to −0.3 kg/week; waist drops 0.5–1 cm every 2 weeks.</li>
              <li>· <strong>No weight/waist change after 3 wks:</strong> subtract 150 kcal (mostly carbs).</li>
              <li>· <strong>Losing &gt;0.5 kg/wk or flat workouts:</strong> add 200 kcal.</li>
              <li>· <strong>Safety floor:</strong> never eat below 2,000 kcal on a training day; stop lean-out if body fat nears 11–12%.</li>
              <li>· <strong>Hydration &amp; Sleep:</strong> 2.5–3 L water/day (pale-yellow urine) + 7.5–9 hours sleep.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Supplements Evidence Matrix (Food First)
            </h3>
            <div className="divide-y divide-slate-100 text-xs">
              {[
                ['Creatine monohydrate', 'Strong evidence', '3–5 g daily (+0.5–1 kg water wk 1)'],
                ['Whey / plant protein', 'Convenience', 'Only if needed to hit 125 g/day'],
                ['Caffeine', 'Moderate boost', '100–200 mg pre-workout; stop 8 h pre-bed'],
                ['Fat burners, detox teas, BCAA', 'Poor / none', 'Not recommended; save your money'],
              ].map(([name, ev, dose]) => (
                <div key={name} className="py-2 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-slate-900 block">{name}</span>
                    <span className="text-slate-600">{dose}</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 shrink-0">{ev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
