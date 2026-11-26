import React, { useState } from 'react';
import { YEAR_MILESTONES } from '../../data/handbookData';

export const BodyRecompSvg: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(1);
  const current = YEAR_MILESTONES[selectedIdx];

  const width = 620;
  const height = 270;
  const padL = 48;
  const padR = 24;
  const padT = 28;
  const padB = 46;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const maxKg = 68;
  const yScale = (kg: number) => padT + chartH - (kg / maxKg) * chartH;
  const xPos = (idx: number) => padL + (idx / (YEAR_MILESTONES.length - 1)) * chartW;

  const leanPoints = YEAR_MILESTONES.map((m, i) => `${xPos(i)},${yScale(m.leanKg)}`).join(' ');
  const totalPoints = YEAR_MILESTONES.map((m, i) => `${xPos(i)},${yScale(m.leanKg + m.fatKg)}`).join(' ');

  const leanArea = `${padL},${yScale(0)} ${leanPoints} ${xPos(YEAR_MILESTONES.length - 1)},${yScale(0)}`;
  const fatBandArea = `${leanPoints} ${[...YEAR_MILESTONES]
    .reverse()
    .map((m, ri) => {
      const i = YEAR_MILESTONES.length - 1 - ri;
      return `${xPos(i)},${yScale(m.leanKg + m.fatKg)}`;
    })
    .join(' ')}`;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Body Recomposition Trajectory (61 kg Baseline)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Scale weight stays near 61–63 kg while fat mass drops and lean mass rises. Click a milestone.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-sky-600 inline-block" />
            Lean Mass (kg)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-amber-400 inline-block" />
            Fat Mass (kg)
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[460px]"
          role="img"
          aria-label="52-week body recomposition chart showing lean mass increasing from 50 kg to 54.4 kg and fat mass decreasing from 11 kg to 8.1 kg"
        >
          {/* Horizontal gridlines */}
          {[0, 20, 40, 50, 60].map((kg) => (
            <g key={kg}>
              <line
                x1={padL}
                y1={yScale(kg)}
                x2={width - padR}
                y2={yScale(kg)}
                stroke="#e2e8f0"
                strokeDasharray={kg === 0 ? undefined : '3 3'}
              />
              <text
                x={padL - 8}
                y={yScale(kg) + 4}
                textAnchor="end"
                className="fill-slate-400 text-[10px] font-mono tabular-nums"
              >
                {kg}kg
              </text>
            </g>
          ))}

          {/* Stacked Areas */}
          <polygon points={leanArea} fill="#0284c7" fillOpacity="0.16" />
          <polygon points={fatBandArea} fill="#f59e0b" fillOpacity="0.22" />

          {/* Lines */}
          <polyline
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            points={leanPoints}
          />
          <polyline
            fill="none"
            stroke="#d97706"
            strokeWidth="2"
            strokeDasharray="5 3"
            points={totalPoints}
          />

          {/* Interactive Milestone Nodes */}
          {YEAR_MILESTONES.map((m, i) => {
            const cx = xPos(i);
            const cyLean = yScale(m.leanKg);
            const cyTotal = yScale(m.leanKg + m.fatKg);
            const isSelected = i === selectedIdx;

            return (
              <g
                key={m.week}
                className="cursor-pointer"
                onClick={() => setSelectedIdx(i)}
              >
                <line
                  x1={cx}
                  y1={padT}
                  x2={cx}
                  y2={height - padB}
                  stroke={isSelected ? '#0369a1' : 'transparent'}
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                {/* Total weight node */}
                <circle
                  cx={cx}
                  cy={cyTotal}
                  r={isSelected ? 5 : 3.5}
                  fill="#ffffff"
                  stroke="#d97706"
                  strokeWidth="2"
                />
                {/* Lean mass node */}
                <circle
                  cx={cx}
                  cy={cyLean}
                  r={isSelected ? 6 : 4}
                  fill={isSelected ? '#0369a1' : '#ffffff'}
                  stroke="#0284c7"
                  strokeWidth="2.5"
                />
                {/* Labels */}
                <text
                  x={cx}
                  y={cyTotal - 9}
                  textAnchor="middle"
                  className="fill-amber-700 text-[10px] font-mono font-medium tabular-nums"
                >
                  ~{m.bfPct}% BF
                </text>
                <text
                  x={cx}
                  y={height - padB + 18}
                  textAnchor="middle"
                  className={`text-[11px] font-medium ${
                    isSelected ? 'fill-sky-700 font-semibold' : 'fill-slate-600'
                  }`}
                >
                  Week {m.week}
                </text>
                <text
                  x={cx}
                  y={height - padB + 32}
                  textAnchor="middle"
                  className="fill-slate-400 text-[10px]"
                >
                  {m.label}
                </text>
                {/* Invisible hit area */}
                <rect
                  x={cx - 34}
                  y={padT}
                  width={68}
                  height={chartH + 38}
                  fill="transparent"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Milestone Readout */}
      <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div>
          <span className="text-slate-500 block">Selected Checkpoint</span>
          <span className="font-semibold text-slate-900 font-mono tabular-nums">
            Week {current.week} · {current.label}
          </span>
        </div>
        <div>
          <span className="text-slate-500 block">Lean / Fat Split</span>
          <span className="font-semibold text-sky-700 font-mono tabular-nums">
            {current.leanKg} kg lean · {current.fatKg} kg fat
          </span>
        </div>
        <div>
          <span className="text-slate-500 block">Waist &amp; Strength</span>
          <span className="font-semibold text-slate-900 font-mono tabular-nums">
            Waist {current.waistDelta} · DL {current.deadlift}
          </span>
        </div>
        <div>
          <span className="text-slate-500 block">Running Capacity</span>
          <span className="font-semibold text-slate-900 font-mono tabular-nums">
            {current.running}
          </span>
        </div>
      </div>
    </div>
  );
};
