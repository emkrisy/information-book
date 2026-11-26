import React, { useState } from 'react';

function formatPace(secPerKm: number): string {
  const mins = Math.floor(secPerKm / 60);
  const secs = Math.round(secPerKm % 60);
  if (secs === 60) return `${mins + 1}:00`;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export const PaceAndEnergySvg: React.FC = () => {
  const [raceDist, setRaceDist] = useState<'5k' | '10k'>('10k');
  const [raceMinutes, setRaceMinutes] = useState<number>(75);
  const [age, setAge] = useState<number>(22);
  const [hrRest, setHrRest] = useState<number>(65);

  // Riegel Formula: T2 = T1 * (D2/D1)^1.06
  const projected10kMin =
    raceDist === '10k' ? raceMinutes : raceMinutes * Math.pow(10 / 5, 1.06);
  const p10Sec = (projected10kMin * 60) / 10;

  // Tanaka HRmax & Karvonen Reserve
  const hrMax = Math.round(208 - 0.7 * age);
  const hrReserve = Math.max(40, hrMax - hrRest);
  const zoneBpm = (low: number, high: number) =>
    `${Math.round(hrRest + hrReserve * low)}–${Math.round(hrRest + hrReserve * high)}`;

  const paceZones = [
    { name: 'Easy / Long Run (Zone 2)', pace: `${formatPace(p10Sec + 60)}–${formatPace(p10Sec + 105)} /km`, rpe: 'RPE 3–4', talk: 'Full sentences', bpm: zoneBpm(0.6, 0.7), pct: 80, color: '#0284c7' },
    { name: 'Marathon Pace (MP)', pace: `${formatPace(p10Sec + 30)}–${formatPace(p10Sec + 45)} /km`, rpe: 'RPE 5–6', talk: 'Short sentences', bpm: zoneBpm(0.7, 0.8), pct: 8, color: '#0d9488' },
    { name: 'Half-Marathon Pace', pace: `${formatPace(p10Sec + 15)}–${formatPace(p10Sec + 20)} /km`, rpe: 'RPE 6', talk: 'Short phrases', bpm: zoneBpm(0.75, 0.85), pct: 4, color: '#d97706' },
    { name: 'Tempo (Threshold)', pace: `${formatPace(p10Sec + 10)}–${formatPace(p10Sec + 20)} /km`, rpe: 'RPE 6–7', talk: 'A few words', bpm: zoneBpm(0.8, 0.9), pct: 5, color: '#ea580c' },
    { name: 'Intervals (5K Effort)', pace: `${formatPace(p10Sec - 20)}–${formatPace(p10Sec - 10)} /km`, rpe: 'RPE 8', talk: 'Cannot talk', bpm: zoneBpm(0.9, 1.0), pct: 3, color: '#dc2626' },
  ];

  // Energy system SVG curve points (duration log scale 0 to 5 mapped to x)
  const w = 440;
  const h = 195;
  const pL = 38;
  const pR = 16;
  const pT = 22;
  const pB = 34;
  const cW = w - pL - pR;
  const cH = h - pT - pB;

  const toX = (t: number) => pL + t * cW;
  const toY = (pct: number) => pT + cH - (pct / 100) * cH;

  // Approximate crossover curves across 0s -> 10s -> 60s -> 10m -> 2h+
  const atpPts = [[0, 92], [0.18, 72], [0.32, 22], [0.5, 5], [0.75, 2], [1, 1]]
    .map(([t, v]) => `${toX(t)},${toY(v)}`).join(' ');
  const glyPts = [[0, 6], [0.18, 22], [0.35, 65], [0.5, 52], [0.75, 18], [1, 8]]
    .map(([t, v]) => `${toX(t)},${toY(v)}`).join(' ');
  const oxPts = [[0, 2], [0.18, 6], [0.35, 13], [0.5, 43], [0.75, 80], [1, 91]]
    .map(([t, v]) => `${toX(t)},${toY(v)}`).join(' ');

  return (
    <div className="space-y-6">
      {/* Interactive Pace & HR Zone Calculator */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Personalised Pace &amp; Heart-Rate Zone Calculator
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Uses the Riegel equation (T2 = T1 × (D2/D1)^1.06) and Tanaka/Karvonen HR reserve (Sections 12.3 &amp; 20.3).
            </p>
          </div>
          <span className="text-xs font-mono text-sky-700 font-semibold tabular-nums">
            P10 = {formatPace(p10Sec)}/km · HRmax ≈ {hrMax} bpm
          </span>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-5 bg-slate-50 border border-slate-200 rounded-lg p-3.5">
          <div>
            <label className="text-[11px] font-medium text-slate-600 block mb-1">
              Test Distance
            </label>
            <div className="flex gap-1 bg-slate-200/70 p-0.5 rounded-md">
              <button
                onClick={() => {
                  setRaceDist('5k');
                  setRaceMinutes(42);
                }}
                className={`flex-1 py-1 text-xs font-medium rounded cursor-pointer ${
                  raceDist === '5k' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                5K Test
              </button>
              <button
                onClick={() => {
                  setRaceDist('10k');
                  setRaceMinutes(75);
                }}
                className={`flex-1 py-1 text-xs font-medium rounded cursor-pointer ${
                  raceDist === '10k' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                10K Test
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="race-time" className="text-[11px] font-medium text-slate-600 block mb-1">
              {raceDist.toUpperCase()} Time: <span className="font-mono font-semibold text-slate-900 tabular-nums">{raceMinutes} min</span>
            </label>
            <input
              id="race-time"
              type="range"
              min={raceDist === '5k' ? 20 : 45}
              max={raceDist === '5k' ? 55 : 105}
              value={raceMinutes}
              onChange={(e) => setRaceMinutes(Number(e.target.value))}
              className="w-full accent-sky-700 cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="user-age" className="text-[11px] font-medium text-slate-600 block mb-1">
              Age: <span className="font-mono font-semibold text-slate-900 tabular-nums">{age} yrs</span>
            </label>
            <input
              id="user-age"
              type="range"
              min={16}
              max={65}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-sky-700 cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="hr-rest" className="text-[11px] font-medium text-slate-600 block mb-1">
              Waking HRrest: <span className="font-mono font-semibold text-slate-900 tabular-nums">{hrRest} bpm</span>
            </label>
            <input
              id="hr-rest"
              type="range"
              min={42}
              max={90}
              value={hrRest}
              onChange={(e) => setHrRest(Number(e.target.value))}
              className="w-full accent-sky-700 cursor-pointer"
            />
          </div>
        </div>

        {/* Zones Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3 font-medium">Training Zone</th>
                <th className="py-2 px-3 font-medium">Target Pace</th>
                <th className="py-2 px-3 font-medium">HR Reserve Band</th>
                <th className="py-2 px-3 font-medium">RPE (0–10)</th>
                <th className="py-2 pl-3 font-medium">Talk Test</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paceZones.map((z) => (
                <tr key={z.name} className="hover:bg-slate-50/80">
                  <td className="py-2.5 pr-3 font-medium text-slate-900">
                    <span
                      className="inline-block w-2 h-2 rounded-xs mr-2"
                      style={{ backgroundColor: z.color }}
                    />
                    {z.name}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold text-slate-900 tabular-nums">{z.pace}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-700 tabular-nums">{z.bpm} bpm</td>
                  <td className="py-2.5 px-3 font-mono text-slate-700 tabular-nums">{z.rpe}</td>
                  <td className="py-2.5 pl-3 text-slate-600">{z.talk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Energy Systems & 80/20 Polarized Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Energy System Dominance by Effort Duration (Section 14.5)
              </h4>
              <p className="text-xs text-slate-500">
                All three systems work simultaneously; duration determines which dominates.
              </p>
            </div>
          </div>

          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label="Energy systems crossover curve">
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={pL} y1={toY(v)} x2={w - pR} y2={toY(v)} stroke="#e2e8f0" strokeDasharray="3 3" />
                <text x={pL - 6} y={toY(v) + 3} textAnchor="end" className="fill-slate-400 text-[9px] font-mono">
                  {v}%
                </text>
              </g>
            ))}

            <polyline fill="none" stroke="#dc2626" strokeWidth="2.5" points={atpPts} />
            <polyline fill="none" stroke="#d97706" strokeWidth="2.5" points={glyPts} />
            <polyline fill="none" stroke="#0284c7" strokeWidth="2.5" points={oxPts} />

            {/* Direct labels */}
            <text x={toX(0.08)} y={toY(88)} className="fill-red-600 text-[10px] font-semibold">ATP-PCr (0–10s)</text>
            <text x={toX(0.32)} y={toY(72)} className="fill-amber-700 text-[10px] font-semibold">Glycolytic (10s–2m)</text>
            <text x={toX(0.73)} y={toY(93)} className="fill-sky-700 text-[10px] font-semibold">Oxidative (min–hrs)</text>

            {/* X-axis ticks */}
            {[
              { t: 0.05, lbl: '5s (Heavy 5RM)' },
              { t: 0.35, lbl: '1 min (Finishers)' },
              { t: 0.62, lbl: '10 min (Tempo)' },
              { t: 0.92, lbl: '1–5h (Marathon)' },
            ].map((tick) => (
              <text key={tick.lbl} x={toX(tick.t)} y={h - 10} textAnchor="middle" className="fill-slate-500 text-[9px]">
                {tick.lbl}
              </text>
            ))}
          </svg>
        </div>

        {/* 80/20 Polarized Bar + 3 Endurance Levers */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              80/20 Intensity Distribution &amp; Endurance Levers
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Keeping ~80% of runs conversational prevents injury and lifts VO2max [13, 14].
            </p>

            {/* 80/20 Visual Bar */}
            <div className="mt-4">
              <div className="h-8 w-full rounded-lg overflow-hidden flex border border-slate-200">
                <div className="bg-sky-600 text-white text-xs font-mono font-semibold flex items-center justify-center" style={{ width: '80%' }}>
                  80% Easy (Zone 1–2)
                </div>
                <div className="bg-amber-500 text-slate-950 text-[11px] font-mono font-semibold flex items-center justify-center" style={{ width: '20%' }}>
                  20% Hard
                </div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5">
                <span>Talk test passes · Builds capillaries &amp; mitochondria</span>
                <span>Tempo &amp; 5K intervals</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
            <div className="flex justify-between gap-2">
              <span className="font-semibold text-slate-800">1. VO2max</span>
              <span className="text-slate-600 text-right">Built by easy volume + 3–5 min intervals</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="font-semibold text-slate-800">2. Lactate Threshold</span>
              <span className="text-slate-600 text-right">Built by tempo repeats (RPE 6–7)</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="font-semibold text-slate-800">3. Running Economy</span>
              <span className="text-slate-600 text-right">Built by heavy strength + easy mileage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
