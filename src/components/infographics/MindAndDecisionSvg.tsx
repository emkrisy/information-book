import React, { useState } from 'react';
import { FEAR_LADDER, UPCOMING_DECISIONS, DECISION_STEPS } from '../../data/lifeHandbookData';

const CHECKIN_QUESTIONS = [
  'I feel calm with this person.',
  'I feel respected, and I respect them.',
  'I am more myself, not less.',
  'I have seen the behaviours I need, not only heard promises.',
  'We have talked about faith, children, work, place, and money.',
  'We repair after disagreements.',
];

export const MindAndDecisionSvg: React.FC = () => {
  const [selectedLadderStep, setSelectedLadderStep] = useState<number>(1);
  const [checkInAnswers, setCheckInAnswers] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    false,
    false,
  ]);

  const toggleCheckIn = (idx: number) => {
    setCheckInAnswers((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const yesCount = checkInAnswers.filter(Boolean).length;
  const checkInVerdict =
    yesCount >= 4
      ? { label: 'CONTINUE', tone: 'bg-emerald-50 border-emerald-200 text-emerald-900', text: '4+ Yes: healthy alignment across safety, behaviour, and repair—continue building steadily.' }
      : yesCount >= 2
        ? { label: 'TALK HONESTLY & REASSESS', tone: 'bg-amber-50 border-amber-200 text-amber-950', text: '2–3 Yes: use a gentle start-up to discuss the missing pillars calmly before advancing.' }
        : { label: 'KIND EXIT LIKELY RIGHT', tone: 'bg-red-50 border-red-200 text-red-900', text: 'Under 2 Yes: core safety or values are missing—end kindly and early.' };

  const activeStep = FEAR_LADDER.find((s) => s.step === selectedLadderStep) || FEAR_LADDER[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
      <div>
        <span className="text-xs font-mono font-semibold text-sky-700">
          ANXIETY EXPOSURE &amp; DECISION TOOLS · SECTIONS 11 &amp; 14.2
        </span>
        <h3 className="text-xl font-semibold text-slate-900 mt-0.5">
          7-Step Exposure Fear Ladder, Decision Gate &amp; 3-Month Relationship Check-In
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Tools to shrink perfectionist fear in graded steps and keep big choices structured by values instead of mood.
        </p>
      </div>

      {/* Interactive Exposure Fear Ladder Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-900">
              Interactive Exposure Fear Ladder (Bottom to Top)
            </span>
            <span className="font-mono text-slate-500">Click rung to inspect</span>
          </div>

          <div className="space-y-2">
            {[...FEAR_LADDER].reverse().map((rung) => {
              const isSelected = rung.step === selectedLadderStep;
              return (
                <button
                  key={rung.step}
                  onClick={() => setSelectedLadderStep(rung.step)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-sky-700 text-white border-sky-700'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-medium truncate">
                    <span className="font-mono font-bold mr-2">Rung {rung.step}</span>
                    {rung.task}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-16 h-2 rounded-full bg-slate-200/70 overflow-hidden hidden sm:block">
                      <div
                        className={`h-full ${isSelected ? 'bg-white' : 'bg-sky-700'}`}
                        style={{ width: `${rung.difficulty * 10}%` }}
                      />
                    </div>
                    <span className="font-mono text-[11px] font-semibold tabular-nums">
                      {rung.difficulty}/10
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold text-sky-700 block">
              RUNG {activeStep.step} OF 7 · DIFFICULTY {activeStep.difficulty}/10
            </span>
            <h4 className="text-lg font-semibold text-slate-900">{activeStep.task}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rule: Stay on Rung {activeStep.step} until your anxiety drops by roughly half before stepping up to Rung{' '}
              {Math.min(activeStep.step + 1, 7)}. Perfectionism breaks through repeated 70–80% completions—not pep talks.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-2 text-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-slate-900">5-Step Spiral Rescue</span>
              <span className="font-mono text-[10.5px] text-sky-700 font-semibold">Affect Labeling</span>
            </div>
            <ol className="space-y-1 text-slate-700 list-decimal list-inside">
              <li>Name it: &quot;I&apos;m feeling anxious about ___.&quot;</li>
              <li>Write evidence for and against the fear.</li>
              <li>Shrink to a 5-minute start (breaks mood-repair avoidance).</li>
              <li>Do it, then stop if needed.</li>
              <li>Tell a friend, family member, or psychologist.</li>
            </ol>
            <p className="text-[11px] text-slate-500 pt-1.5 border-t border-slate-100 leading-relaxed">
              Mechanism: Putting fear into specific words engages rVLPFC control and dampens amygdala reactivity (Lieberman 2007; Kircanski 2012).
            </p>
          </div>
        </div>
      </div>

      {/* 7-Step Decision Gate + Interactive 3-Month Relationship Scorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start border-t border-slate-200 pt-5">
        <div className="lg:col-span-7 space-y-3">
          <h4 className="text-sm font-semibold text-slate-900">
            7-Step Decision Routine &amp; Upcoming Choice Matrix
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {DECISION_STEPS.map((st) => (
              <div key={st.num} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                <span className="font-semibold text-slate-900 block">
                  {st.num}. {st.name}
                </span>
                <p className="text-slate-600 mt-0.5 leading-relaxed">{st.prompt}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto pt-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Decision Ahead</th>
                  <th className="py-2 px-3 font-medium">Door Type</th>
                  <th className="py-2 px-3 font-medium">Rule I&apos;ll Use</th>
                  <th className="py-2 pl-3 font-medium">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {UPCOMING_DECISIONS.map((d) => (
                  <tr key={d.decision}>
                    <td className="py-2 pr-3 font-semibold text-slate-900">{d.decision}</td>
                    <td className="py-2 px-3 whitespace-nowrap font-mono text-[11px] text-slate-700">
                      {d.reversibility}
                    </td>
                    <td className="py-2 px-3 text-slate-600">{d.rule}</td>
                    <td className="py-2 pl-3 font-mono text-sky-800 whitespace-nowrap">{d.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive 3-Month Relationship Check-In */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">SECTION 14.5 TOOL</span>
              <h4 className="text-sm font-semibold text-slate-900">
                3-Month Relationship Check-In
              </h4>
            </div>
            <span className="font-mono font-bold text-base text-slate-900 tabular-nums">
              {yesCount}/6 Yes
            </span>
          </div>

          <div className="space-y-1.5">
            {CHECKIN_QUESTIONS.map((q, idx) => (
              <button
                key={q}
                onClick={() => toggleCheckIn(idx)}
                className={`w-full text-left px-3 py-2 rounded-lg border transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                  checkInAnswers[idx]
                    ? 'bg-white border-emerald-300 text-slate-900'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}
              >
                <span>{q}</span>
                <span
                  className={`font-mono font-semibold px-1.5 py-0.5 rounded text-[11px] shrink-0 ${
                    checkInAnswers[idx]
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {checkInAnswers[idx] ? 'YES' : 'NO'}
                </span>
              </button>
            ))}
          </div>

          <div className={`border rounded-lg p-3 ${checkInVerdict.tone}`}>
            <span className="font-mono font-bold block">{checkInVerdict.label}</span>
            <p className="mt-0.5 leading-relaxed">{checkInVerdict.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
