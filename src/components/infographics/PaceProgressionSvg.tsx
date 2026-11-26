import React, { useState } from 'react';
import { PACE_MILESTONES } from '../../data/handbookData';

function secToMinStr(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export const PaceProgressionSvg: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(6); // Default Week 52 Marathon
  const active = PACE_MILESTONES[selectedIdx];

  const w = 640;
  const h = 230;
  const pL = 52;
  const pR = 26;
  const pT = 26;
  const pB = 46;
  const cW = w - pL - pR;
  const cH = h - pT - pB;

  // Lower seconds/km = faster pace -> plot faster at top (390 s = 6:30 at top, 630 s = 10:30 at bottom)
  const fastestSec = 390; // 6:30/km
  const slowestSec = 630; // 10:30/km
  const yScale = (sec: number) => pT + ((sec - fastestSec) / (slowestSec - fastestSec)) * cH;
  const xPos = (idx: number) => pL + (idx / (PACE_MILESTONES.length - 1)) * cW;

  const easyLine = PACE_MILESTONES.map((m, i) => `${xPos(i)},${yScale(m.easyPaceSec)}`).join(' ');
  const raceLine = PACE_MILESTONES.map((m, i) => `${xPos(i)},${yScale(m.racePaceSec)}`).join(' ');

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Progressive Pace Targets: Week 8 to Marathon (Section 12.4)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Higher = faster pace (min/km). Easy pace quickens ~15–30 s/km per stage as aerobic fitness adapts. Click any milestone.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-sky-600 inline-block" />
            Target Race Pace
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-slate-500 inline-block border-t border-dashed border-slate-600" />
            Typical Easy Pace
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto min-w-[500px]"
          role="img"
          aria-label="Progressive pace trajectory from Week 8 5K to Week 52 Marathon"
        >
          {[420, 480, 540, 600].map((sec) => (
            <g key={sec}>
              <line x1={pL} y1={yScale(sec)} x2={w - pR} y2={yScale(sec)} stroke="#e2e8f0" strokeDasharray="3 3" />
              <text x={pL - 8} y={yScale(sec) + 3} textAnchor="end" className="fill-slate-400 text-[10px] font-mono tabular-nums">
                {secToMinStr(sec)}
              </text>
            </g>
          ))}

          <polyline fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5 3" points={easyLine} />
          <polyline fill="none" stroke="#0284c7" strokeWidth="2.5" points={raceLine} />

          {PACE_MILESTONES.map((m, i) => {
            const cx = xPos(i);
            const cyRace = yScale(m.racePaceSec);
            const cyEasy = yScale(m.easyPaceSec);
            const isSel = i === selectedIdx;

            return (
              <g key={m.week} className="cursor-pointer" onClick={() => setSelectedIdx(i)}>
                <line
                  x1={cx}
                  y1={pT}
                  x2={cx}
                  y2={h - pB}
                  stroke={isSel ? '#0369a1' : 'transparent'}
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                <circle cx={cx} cy={cyEasy} r={isSel ? 4.5 : 3} fill="#ffffff" stroke="#64748b" strokeWidth="2" />
                <circle
                  cx={cx}
                  cy={cyRace}
                  r={isSel ? 5.5 : 3.5}
                  fill={isSel ? '#0369a1' : '#ffffff'}
                  stroke="#0284c7"
                  strokeWidth="2.5"
                />
                <text
                  x={cx}
                  y={cyRace - 9}
                  textAnchor="middle"
                  className="fill-sky-800 text-[9.5px] font-mono font-semibold tabular-nums"
                >
                  {secToMinStr(m.racePaceSec)}
                </text>
                <text
                  x={cx}
                  y={h - pB + 16}
                  textAnchor="middle"
                  className={`text-[10.5px] font-mono ${isSel ? 'fill-slate-900 font-bold' : 'fill-slate-600'}`}
                >
                  Wk {m.week}
                </text>
                <text x={cx} y={h - pB + 29} textAnchor="middle" className="fill-slate-400 text-[9.5px]">
                  {m.event}
                </text>
                <rect x={cx - 32} y={pT} width={64} height={cH + 38} fill="transparent" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div>
          <span className="text-slate-500 block">Milestone Event</span>
          <span className="font-semibold text-slate-900">Week {active.week} · {active.event}</span>
        </div>
        <div>
          <span className="text-slate-500 block">Target Finish Time</span>
          <span className="font-semibold text-sky-700 font-mono tabular-nums">{active.targetTime}</span>
        </div>
        <div>
          <span className="text-slate-500 block">Race Pace Range</span>
          <span className="font-semibold text-slate-900 font-mono tabular-nums">{active.racePaceLabel} /km</span>
        </div>
        <div>
          <span className="text-slate-500 block">Typical Easy Pace</span>
          <span className="font-semibold text-slate-700 font-mono tabular-nums">{active.easyPaceLabel} /km</span>
        </div>
      </div>
    </div>
  );
};
