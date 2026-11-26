import React, { useState } from 'react';
import { WEEKS_52, WeekSummary } from '../../data/handbookData';

interface MacrocycleTimelineSvgProps {
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
}

const PHASE_BANDS = [
  { id: 'phase1', label: 'Phase 1: Foundation & 10K', start: 1, end: 12, color: '#0284c7', bg: '#e0f2fe' },
  { id: 'phase2', label: 'Phase 2: Speed & Lean-Out', start: 13, end: 20, color: '#0d9488', bg: '#ccfbf1' },
  { id: 'phase3', label: 'Phase 3: Half Marathon', start: 21, end: 34, color: '#d97706', bg: '#fef3c7' },
  { id: 'phase4', label: 'Phase 4: Marathon Build', start: 35, end: 52, color: '#b91c1c', bg: '#fee2e2' },
];

export const MacrocycleTimelineSvg: React.FC<MacrocycleTimelineSvgProps> = ({
  selectedWeek,
  onSelectWeek,
}) => {
  const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);

  const width = 980;
  const height = 310;
  const padL = 50;
  const padR = 22;
  const padT = 46;
  const padB = 48;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const maxKm = 70;

  const colW = chartW / 52;
  const yScale = (km: number) => padT + chartH - (km / maxKm) * chartH;
  const xCenter = (wk: number) => padL + (wk - 0.5) * colW;

  const activeWeekNum = hoveredWeek ?? selectedWeek;
  const activeWeek: WeekSummary =
    WEEKS_52.find((w) => w.week === activeWeekNum) ?? WEEKS_52[0];

  const longRunLine = WEEKS_52.map((w) => `${xCenter(w.week)},${yScale(w.longRunKm)}`).join(' ');

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            52-Week Macrocycle: Weekly Mileage, Long Runs &amp; Deload Rhythm
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Hover or click any week (1–52) to inspect its exact running volume, strength sessions, and calorie target.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-sky-600 inline-block" />
            Weekly Volume (km)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-300 border border-slate-400 inline-block" />
            Deload / Taper Week
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-slate-900 inline-block" />
            Longest Run (km)
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[740px]"
          role="img"
          aria-label="52-week running volume and long run progression timeline"
        >
          {/* Phase Bands */}
          {PHASE_BANDS.map((band) => {
            const x1 = padL + (band.start - 1) * colW;
            const w = (band.end - band.start + 1) * colW;
            return (
              <g key={band.id}>
                <rect
                  x={x1}
                  y={8}
                  width={w - 2}
                  height={24}
                  rx={4}
                  fill={band.bg}
                />
                <text
                  x={x1 + w / 2}
                  y={24}
                  textAnchor="middle"
                  fill={band.color}
                  className="text-[11px] font-semibold"
                >
                  {band.label}
                </text>
              </g>
            );
          })}

          {/* Horizontal Gridlines */}
          {[0, 15, 30, 45, 60].map((km) => (
            <g key={km}>
              <line
                x1={padL}
                y1={yScale(km)}
                x2={width - padR}
                y2={yScale(km)}
                stroke="#e2e8f0"
                strokeDasharray={km === 0 ? undefined : '3 3'}
              />
              <text
                x={padL - 8}
                y={yScale(km) + 4}
                textAnchor="end"
                className="fill-slate-400 text-[10px] font-mono tabular-nums"
              >
                {km}km
              </text>
            </g>
          ))}

          {/* Bars */}
          {WEEKS_52.map((w) => {
            const band = PHASE_BANDS.find((b) => b.id === w.phaseId)!;
            const barH = (w.weeklyKm / maxKm) * chartH;
            const x = padL + (w.week - 1) * colW + 2;
            const y = padT + chartH - barH;
            const isActive = w.week === activeWeekNum;

            return (
              <g
                key={w.week}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredWeek(w.week)}
                onMouseLeave={() => setHoveredWeek(null)}
                onClick={() => onSelectWeek(w.week)}
              >
                {isActive && (
                  <rect
                    x={x - 2}
                    y={padT - 4}
                    width={colW}
                    height={chartH + 8}
                    fill="#f1f5f9"
                    rx={3}
                  />
                )}
                <rect
                  x={x}
                  y={y}
                  width={Math.max(colW - 4, 6)}
                  height={barH}
                  rx={2}
                  fill={w.isRace ? '#0f172a' : w.isDeload ? '#cbd5e1' : band.color}
                  fillOpacity={isActive ? 1 : w.isDeload ? 0.85 : 0.78}
                  stroke={isActive ? '#0f172a' : 'none'}
                  strokeWidth={isActive ? 1.5 : 0}
                />
                {/* Race marker */}
                {w.isRace && (
                  <text
                    x={xCenter(w.week)}
                    y={y - 6}
                    textAnchor="middle"
                    className="fill-slate-900 text-[9px] font-bold"
                  >
                    {w.week === 12 ? '10K' : w.week === 20 ? 'TT' : w.week === 34 ? 'HM' : '42K'}
                  </text>
                )}
                {/* X-axis tick labels every 4 weeks + week 1 */}
                {(w.week === 1 || w.week % 4 === 0) && (
                  <text
                    x={xCenter(w.week)}
                    y={height - padB + 16}
                    textAnchor="middle"
                    className={`text-[10px] font-mono tabular-nums ${
                      isActive ? 'fill-slate-900 font-semibold' : 'fill-slate-500'
                    }`}
                  >
                    W{w.week}
                  </text>
                )}
              </g>
            );
          })}

          {/* Long Run Overlay Line */}
          <polyline
            fill="none"
            stroke="#0f172a"
            strokeWidth="2"
            points={longRunLine}
            className="pointer-events-none"
          />
          {WEEKS_52.map((w) => (
            <circle
              key={`dot-${w.week}`}
              cx={xCenter(w.week)}
              cy={yScale(w.longRunKm)}
              r={w.week === activeWeekNum ? 4 : w.isRace ? 3.5 : 2}
              fill={w.isRace ? '#ef4444' : '#0f172a'}
              className="pointer-events-none"
            />
          ))}
        </svg>
      </div>

      {/* Selected Week Inspector Strip */}
      <div className="mt-3 pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-mono font-semibold text-sky-700 tabular-nums">
              WEEK {activeWeek.week}
            </span>
            <span aria-hidden="true">·</span>
            <span>{activeWeek.phaseLabel}</span>
            {activeWeek.isDeload && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-amber-700 font-medium">Lighter / Taper</span>
              </>
            )}
          </div>
          <p className="text-sm font-semibold text-slate-900 mt-1">{activeWeek.headline}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-slate-600 tabular-nums">
            <span>Run: {activeWeek.weeklyKm} km ({activeWeek.runsPerWeek}x)</span>
            <span>Long: {activeWeek.longRunKm} km</span>
            <span>Lift: {activeWeek.strengthSessions}x</span>
            <span>{activeWeek.calories} kcal</span>
          </div>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <span className="font-semibold text-slate-800 block mb-1">Running Sessions</span>
            <p className="text-slate-600 leading-relaxed">{activeWeek.runNote}</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <span className="font-semibold text-slate-800 block mb-1">Strength Focus</span>
            <p className="text-slate-600 leading-relaxed">{activeWeek.strengthNote}</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <span className="font-semibold text-slate-800 block mb-1">Nutrition &amp; Events</span>
            <p className="text-slate-600 leading-relaxed">{activeWeek.nutritionNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
