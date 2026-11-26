import React, { useState } from 'react';
import { MuscleAtlasSvg } from '../components/infographics/MuscleAtlasSvg';
import { MovementMechanicsSvg } from '../components/infographics/MovementMechanicsSvg';
import {
  WORKOUT_A,
  WORKOUT_B,
  WORKOUT_C,
  PHASE2_HYPERTROPHY,
  STARTING_LOADS,
  SPOTTING_SAFETY,
  RUNNERS_ARMOR,
  HOME_LADDERS,
  ExerciseRow,
} from '../data/handbookData';

export const StrengthSection: React.FC = () => {
  const [workoutTab, setWorkoutTab] = useState<'A' | 'B' | 'C' | 'Phase2' | 'Phase3'>('A');
  const [mode, setMode] = useState<'gym' | 'home'>('gym');

  const activeRows: ExerciseRow[] =
    workoutTab === 'A' ? WORKOUT_A : workoutTab === 'B' ? WORKOUT_B : WORKOUT_C;

  return (
    <section id="strength" className="scroll-mt-20 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono text-sky-700 font-semibold">02 · ANATOMY &amp; STRENGTH</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
            Functional Strength, Muscle Priority &amp; Movement Mechanics
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-xl">
          10–16 hard sets per muscle weekly with 3 s controlled lowering, 1–3 RIR (never reckless failure), and 2–3 min rests on compound lifts.
        </p>
      </div>

      {/* Infographic: Anatomical Muscle Atlas */}
      <MuscleAtlasSvg />

      {/* Infographic: Six Movement Patterns + Running Mechanics */}
      <MovementMechanicsSvg />

      {/* Workout Programming Switcher */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Strength Sessions (Gym &amp; Home Equivalent)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Every strength session opens with an 8–10 min warm-up (3–5m easy cardio, dynamic mobility, 50%×8 &amp; 75%×4 ramp-up sets).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setMode('gym')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                  mode === 'gym' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Full Gym
              </button>
              <button
                onClick={() => setMode('home')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                  mode === 'home' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Home / Minimal Kit
              </button>
            </div>
          </div>
        </div>

        {/* Workout Tabs */}
        <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3">
          {[
            { id: 'A' as const, label: 'Phase 1 · Workout A (Mon)' },
            { id: 'B' as const, label: 'Phase 1 · Workout B (Wed)' },
            { id: 'C' as const, label: 'Phase 1 · Workout C (Fri)' },
            { id: 'Phase2' as const, label: 'Phase 2 · Wks 13–20 Hypertrophy' },
            { id: 'Phase3' as const, label: 'Phases 3–4 · 2x/wk Maintenance' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setWorkoutTab(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                workoutTab === t.id
                  ? 'bg-sky-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {workoutTab === 'Phase2' ? (
          <div className="space-y-3">
            <p className="text-xs text-slate-600">
              <strong>Phase 2 (Weeks 13–20):</strong> Week 13 resets at 2 sets. Weeks 14–16 build at 1–2 RIR. Week 17 deloads (2 sets). Weeks 18–19 add 1 set on back, shoulders &amp; arms. Week 20 drops to 2 sets for the 10K time trial.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-2 pr-3 font-medium">Session</th>
                    <th className="py-2 px-3 font-medium">{mode === 'gym' ? 'Gym Exercise' : 'Home Alternative'}</th>
                    <th className="py-2 px-3 font-medium">Sets × Reps</th>
                    <th className="py-2 pl-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PHASE2_HYPERTROPHY.map((row, idx) => (
                    <tr key={`${row.day}-${idx}`} className="hover:bg-slate-50/80">
                      <td className="py-2 pr-3 font-mono font-semibold text-sky-700 whitespace-nowrap">{row.day}</td>
                      <td className="py-2 px-3 font-semibold text-slate-900">{mode === 'gym' ? row.gym : row.home}</td>
                      <td className="py-2 px-3 font-mono text-slate-800 tabular-nums whitespace-nowrap">{row.sets}</td>
                      <td className="py-2 pl-3 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : workoutTab !== 'Phase3' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">
                    {mode === 'gym' ? 'Gym Exercise' : 'Home Alternative'}
                  </th>
                  <th className="py-2 px-3 font-medium">
                    {mode === 'gym' ? 'Home Swap' : 'Gym Equivalent'}
                  </th>
                  <th className="py-2 px-3 font-medium">Wks 1–3 (3→2 RIR)</th>
                  <th className="py-2 px-3 font-medium">Wks 5–7 (1–2 RIR)</th>
                  <th className="py-2 px-3 font-medium">Wks 9–11 (1–2 RIR)</th>
                  <th className="py-2 pl-3 font-medium">Technique Cues</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activeRows.map((row) => (
                  <tr key={row.gym} className="hover:bg-slate-50/80">
                    <td className="py-2.5 pr-3 font-semibold text-slate-900">
                      {mode === 'gym' ? row.gym : row.home}
                    </td>
                    <td className="py-2.5 px-3 text-slate-500">
                      {mode === 'gym' ? row.home : row.gym}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-800 tabular-nums">{row.phase1}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-800 tabular-nums">{row.phase2}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-800 tabular-nums">{row.phase3}</td>
                    <td className="py-2.5 pl-3 text-slate-600">{row.cues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            <p className="text-slate-600">
              During Half Marathon (Weeks 21–34) and Marathon (Weeks 35–52) blocks, lifting drops to 2 heavy sessions per week (2–3 RIR) to protect muscle and running economy without overtaxing recovery [3, 4]. Halve sets in the final 2–3 race taper weeks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Session A (Monday)</h4>
                <ul className="space-y-1.5 font-mono text-slate-700 tabular-nums">
                  <li>· Squat / Leg press / Tempo goblet: 3 × 5–6 (heavy, 2–3 RIR)</li>
                  <li>· Romanian deadlift / Single-leg RDL: 3 × 6</li>
                  <li>· Split squat / Reverse lunge: 3 × 6 / leg</li>
                  <li>· Standing &amp; seated calf raise: 3 × 8–10 (3 s down)</li>
                  <li>· Side plank + Pallof press: 3 × 30 s / 10</li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Session B (Thursday · Light in final 3 wks)</h4>
                <ul className="space-y-1.5 font-mono text-slate-700 tabular-nums">
                  <li>· Trap-bar deadlift / Backpack deadlift: 3 × 5</li>
                  <li>· Step-up / Chair step-up: 3 × 8 / leg</li>
                  <li>· Row or pull-up / Inverted row: 3 × 6–8</li>
                  <li>· Bench or push-up: 3 × 6–8</li>
                  <li>· Farmer&apos;s / Suitcase carry: 3 × 30–40 m</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Starting Loads + Spotting Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            Starting Loads &amp; Phase 3 Targets (61 kg Beginner · Section 4.7)
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Pick a starting weight where the final rep feels like 3 RIR. Reach the top of the rep range on all sets, then add 2.5–5% load.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Exercise</th>
                  <th className="py-2 px-3 font-medium">Week 1 Starting Load</th>
                  <th className="py-2 pl-3 font-medium">Week 12 Realistic Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {STARTING_LOADS.map((l) => (
                  <tr key={l.exercise}>
                    <td className="py-2 pr-3 font-semibold text-slate-900">{l.exercise}</td>
                    <td className="py-2 px-3 font-mono text-slate-700 tabular-nums">{l.start}</td>
                    <td className="py-2 pl-3 font-mono font-semibold text-sky-700 tabular-nums">{l.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            Spotting &amp; Gym Equipment Safety (Section 17.3)
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Set safety pins before the first rep, never train near barbell failure alone, and stop immediately for sharp pain or dizziness.
          </p>
          <div className="divide-y divide-slate-100 text-xs">
            {SPOTTING_SAFETY.map((s) => (
              <div key={s.lift} className="py-2.5">
                <span className="font-semibold text-slate-900 block">{s.lift}</span>
                <span className="text-slate-600">{s.rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Runner's Armor Prehab & Home Progression Ladders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            Runner&apos;s Armor: 10-Minute Prehab (After Tue &amp; Thu Runs)
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Connective tissues adapt slower than aerobic capacity. This 10-minute circuit fortifies calves, shins, hips, and arches.
          </p>
          <div className="divide-y divide-slate-100 text-xs">
            {RUNNERS_ARMOR.map((item) => (
              <div key={item.exercise} className="py-2.5 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-900 block">{item.exercise}</span>
                  <span className="text-slate-600">{item.why}</span>
                </div>
                <span className="font-mono text-sky-700 font-medium shrink-0 tabular-nums">
                  {item.dose}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            Home Progression Ladders (Section 4.8)
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Minimum kit: resistance bands, adjustable dumbbells, loaded backpack, sturdy table/chair, doorway bar. Or slow lowering to 4–5 s + 2 s pause.
          </p>
          <div className="space-y-3 text-xs">
            {HOME_LADDERS.map((ladder) => (
              <div key={ladder.name} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-semibold text-slate-900">{ladder.name}</span>
                  <span className="font-mono text-[11px] text-slate-500">{ladder.rule}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {ladder.steps.join(' → ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
