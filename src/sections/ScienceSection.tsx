import React, { useState } from 'react';
import { StretchPhysiologySvg } from '../components/infographics/StretchPhysiologySvg';
import {
  TROUBLESHOOTING_ITEMS,
  ALTERNATIVE_TRACKS,
  MOVEMENT_SCREENS,
  MOTIVATION_CALENDAR,
  KEY_CITATIONS,
} from '../data/handbookData';

export const ScienceSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'troubleshooting' | 'tracks' | 'screening' | 'movement' | 'citations'>('troubleshooting');

  return (
    <section id="science" className="scroll-mt-20 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono text-sky-700 font-semibold">05 · APPLIED SPORTS SCIENCE</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
            Stretch Physiology, Injury Triage, Behavior &amp; Evidence
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-xl">
          Part 2 of the handbook translates peer-reviewed sports medicine (157 citations) into clear decision rules, safety gates, and habit systems.
        </p>
      </div>

      {/* Infographic: Stretch Neurophysiology & Mobility vs Flexibility */}
      <StretchPhysiologySvg />

      {/* Tabbed Applied Science Reference Console */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3">
          {[
            { id: 'troubleshooting' as const, label: 'Injury & Plateau Triage' },
            { id: 'movement' as const, label: 'Movement Screens (15.4)' },
            { id: 'tracks' as const, label: 'Post-Wk 12 Tracks & Habits' },
            { id: 'screening' as const, label: 'Health Screening & Emergency' },
            { id: 'citations' as const, label: 'Peer-Reviewed Evidence' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveSubTab(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeSubTab === t.id
                  ? 'bg-sky-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeSubTab === 'troubleshooting' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {TROUBLESHOOTING_ITEMS.map((item) => (
                <div key={item.issue} className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5">
                  <h4 className="text-sm font-semibold text-slate-900">{item.issue}</h4>
                  <p className="text-slate-500">
                    <strong className="text-slate-700">Typical Cause:</strong> {item.cause}
                  </p>
                  <p className="text-slate-700 leading-relaxed pt-1 border-t border-slate-200/70">
                    <strong className="text-sky-800">Action:</strong> {item.fix}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-xs text-red-950">
              <strong className="block text-sm mb-1">Stop &amp; See a Doctor or Physiotherapist Immediately If You Have:</strong>
              Chest pain, fainting, unusual shortness of breath, palpitations · Sharp joint pain, swelling, or pain that alters your gait · Pain waking you at night or lasting longer than 2 weeks.
            </div>
          </div>
        )}

        {activeSubTab === 'movement' && (
          <div className="space-y-3 text-xs">
            <p className="text-slate-600">
              Movement screens show where to coach, not what will happen [53, 54]. Compare left/right asymmetries (&gt;10–15%) and comfort rather than chasing &quot;perfect posture&quot;.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-2 pr-3 font-medium">Screen</th>
                    <th className="py-2 px-3 font-medium">How to Check</th>
                    <th className="py-2 px-3 font-medium">Normal Reference</th>
                    <th className="py-2 pl-3 font-medium">Typical Training Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOVEMENT_SCREENS.map((m) => (
                    <tr key={m.test}>
                      <td className="py-2.5 pr-3 font-semibold text-slate-900">{m.test}</td>
                      <td className="py-2.5 px-3 text-slate-600">{m.check}</td>
                      <td className="py-2.5 px-3 font-mono text-slate-800">{m.norm}</td>
                      <td className="py-2.5 pl-3 text-sky-800">{m.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSubTab === 'tracks' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {ALTERNATIVE_TRACKS.map((tr) => (
                <div key={tr.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">{tr.title}</h4>
                  <p className="text-slate-600"><strong>Best when:</strong> {tr.when}</p>
                  <p className="text-slate-700"><strong>Schedule:</strong> {tr.split}</p>
                  <p className="text-sky-800 font-medium"><strong>Nutrition:</strong> {tr.nutrition}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Implementation Intentions (&quot;If-Then&quot; Behavior Plan · Section 18.3)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                {[
                  ['Too tired in morning', 'If alarm rings → put on shoes & drink water before checking phone (clothes laid out).'],
                  ['Bad weather at run time', 'If it rains → treadmill (1% incline) or 30-min home circuit on fridge.'],
                  ['Under 30 min available', 'If short on time → minimum workout (4 exercises, 3 sets) or 15-min run.'],
                  ['Missed a session', 'If missed → resume next session as planned; never miss twice in a row or double up.'],
                ].map(([barrier, plan]) => (
                  <div key={barrier} className="bg-white border border-slate-200 rounded-lg p-3">
                    <span className="font-semibold text-slate-900 block">{barrier}</span>
                    <span className="text-slate-600">{plan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Year-Long Motivation &amp; Non-Food Reward Checkpoints (Section 18.3)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                {MOTIVATION_CALENDAR.map((mc) => (
                  <div key={mc.week} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="font-mono font-semibold text-sky-700 block">{mc.week} · {mc.milestone}</span>
                    <span className="text-slate-600 mt-1 block">{mc.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'screening' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-900">
                Simplified ACSM Risk Stratification &amp; Blood Pressure
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Complete the PAR-Q+ questionnaire before vigorous exercise. Any &quot;Yes&quot; to diagnosed heart/metabolic/kidney disease, chest pain, fainting, palpitations, or family history of sudden cardiac death before age 50 requires medical clearance first [50, 51].
              </p>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                    <tr>
                      <th className="py-2 px-3 font-medium">BP Category</th>
                      <th className="py-2 px-3 font-medium">mmHg</th>
                      <th className="py-2 px-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="py-2 px-3 font-medium">Normal</td><td className="py-2 px-3 font-mono">&lt;120 / &lt;80</td><td className="py-2 px-3">Train as planned</td></tr>
                    <tr><td className="py-2 px-3 font-medium">Elevated</td><td className="py-2 px-3 font-mono">120–129 / &lt;80</td><td className="py-2 px-3">Lifestyle focus, retest</td></tr>
                    <tr><td className="py-2 px-3 font-medium">Stage 1 HTN</td><td className="py-2 px-3 font-mono">130–139 or 80–89</td><td className="py-2 px-3">Doctor eval; moderate exercise ok</td></tr>
                    <tr><td className="py-2 px-3 font-medium text-red-700">Stage 2 / Crisis</td><td className="py-2 px-3 font-mono">≥140 / ≥90+</td><td className="py-2 px-3">Clearance first (≥180/120: urgent care)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-900">
                Emergency Readiness (Section 17.4)
              </h4>
              <div className="space-y-2">
                {[
                  ['Collapse / Not Breathing', 'Check safety, call emergency (112/911), send for AED, start 100–120/min compressions (5–6 cm depth) [92].'],
                  ['Exertional Heat Stroke (>40°C + confusion)', 'Call emergency services. Cool first, transport second: cold-water immersion or ice towels; no oral fluids if confused [32].'],
                  ['Hyponatremia (over-drinking)', 'Headache, vomiting, confusion after endurance race → stop drinking immediately, seek urgent medical care [27].'],
                  ['Acute Sprain / Strain', 'PEACE (Protect, Elevate, Avoid anti-inflammatories, Compress, Educate) then LOVE (Load, Optimism, Vascularisation, Exercise) [93].'],
                ].map(([sit, act]) => (
                  <div key={sit} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="font-semibold text-slate-900 block">{sit}</span>
                    <span className="text-slate-600">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'citations' && (
          <div className="space-y-2.5 text-xs">
            <p className="text-slate-500">
              Selected core references from the handbook&apos;s 157-paper bibliography (Section 22).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {KEY_CITATIONS.map((c) => (
                <div key={c.id} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <span className="font-mono font-semibold text-sky-700">[{c.id}] · {c.topic}</span>
                  <p className="text-slate-700 mt-1 leading-relaxed">{c.ref}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
