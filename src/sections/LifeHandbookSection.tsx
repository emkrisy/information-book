import React, { useState, useEffect } from 'react';
import { PhilosophyArchitectureSvg } from '../components/infographics/PhilosophyArchitectureSvg';
import { LifeAreasSvg } from '../components/infographics/LifeAreasSvg';
import { WeeklyRhythmSvg } from '../components/infographics/WeeklyRhythmSvg';
import { MindAndDecisionSvg } from '../components/infographics/MindAndDecisionSvg';
import {
  HANDBOOK_META,
  WHO_I_AM,
  SURVEY_PATTERNS,
  MANIFESTO_PARAGRAPHS,
  CORE_PRINCIPLES,
  ROADMAP_HORIZONS,
  IF_THEN_PLANS,
  CAREER_12M_PLAN,
  LOVE_SCORECARD,
  RISK_REGISTER,
  READING_PATH,
  OPEN_QUESTIONS,
  STRENGTH_LABELS,
  HANDBOOK_REFERENCES,
  SCIENTIFIC_UPGRADES,
} from '../data/lifeHandbookData';

const READING_STORAGE_KEY = 'life_handbook_books_v1';
const QUESTIONS_STORAGE_KEY = 'life_handbook_open_questions_v1';

export const LifeHandbookSection: React.FC = () => {
  const [identityTab, setIdentityTab] = useState<'snapshot' | 'patterns'>('snapshot');
  const [playbookTab, setPlaybookTab] = useState<'career' | 'mind' | 'love' | 'body' | 'faith'>('career');

  const [booksRead, setBooksRead] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(READING_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [questionNotes, setQuestionNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(QUESTIONS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(READING_STORAGE_KEY, JSON.stringify(booksRead));
    } catch {
      // Ignore storage write error
    }
  }, [booksRead]);

  useEffect(() => {
    try {
      localStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(questionNotes));
    } catch {
      // Ignore storage write error
    }
  }, [questionNotes]);

  const toggleBook = (order: number) => {
    setBooksRead((prev) =>
      prev.includes(order) ? prev.filter((o) => o !== order) : [...prev, order]
    );
  };

  return (
    <div className="space-y-14">
      {/* Volume 02 Hero & Comfortable Chapter Index */}
      <section className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>Volume 02</span>
                <span aria-hidden="true">·</span>
                <span>45 Pages</span>
                <span aria-hidden="true">·</span>
                <span>Draft 2 · Discovery Survey Synthesis</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                {HANDBOOK_META.title}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                {HANDBOOK_META.epigraph}
              </p>
            </div>

            <a
              href="./assets/aistudio/My_Life_Handbook__Draft_2__5a96f809.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors whitespace-nowrap shrink-0"
            >
              Open Source PDF (45p)
            </a>
          </div>

          {/* Comfortable Chapter Jump Strip */}
          <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-2">
            {[
              { href: '#life-philosophy', label: '01 · Identity & Philosophy' },
              { href: '#life-principles', label: '02 · Principles & Roadmap' },
              { href: '#life-areas', label: '03 · 7 Life Areas' },
              { href: '#life-rhythm', label: '04 · Weekly Rhythm & Playbook' },
              { href: '#life-decisions', label: '05 · Mind, Decisions & Risk' },
              { href: '#life-reading', label: '06 · Reading & Evidence' },
            ].map((ch) => (
              <a
                key={ch.href}
                href={ch.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                {ch.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 01. Identity, Patterns & Philosophy Architecture */}
      <section id="life-philosophy" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              01 · WHO I AM &amp; SURVEY PATTERNS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Starting Reality, Eight Patterns &amp; Life Philosophy
            </h2>
          </div>
          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setIdentityTab('snapshot')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                identityTab === 'snapshot' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Who I Am Right Now (8)
            </button>
            <button
              onClick={() => setIdentityTab('patterns')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                identityTab === 'patterns' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Survey Tensions Revealed (8)
            </button>
          </div>
        </div>

        {identityTab === 'snapshot' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {WHO_I_AM.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5"
              >
                <span className="font-mono font-semibold text-sky-700 block">{item.label}</span>
                <p className="text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {SURVEY_PATTERNS.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5"
              >
                <span className="font-mono text-sky-700 font-semibold block">Pattern 0{p.id}</span>
                <h4 className="text-sm font-semibold text-slate-900">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed">{p.insight}</p>
              </div>
            ))}
          </div>
        )}

        <PhilosophyArchitectureSvg />
      </section>

      {/* 02. Manifesto, 12 Core Principles & 12m/3y/10y Roadmap */}
      <section id="life-principles" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              02 · MANIFESTO, PRINCIPLES &amp; ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Twelve Anchors &amp; Three Time Horizons
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            Read weekly and tested for one full year; revised whenever lived experience disproves an assumption.
          </p>
        </div>

        {/* Manifesto Reading Sheet */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
          <span className="text-xs font-mono font-semibold text-sky-700 block">
            3.4 · MY MANIFESTO
          </span>
          <div className="max-w-3xl space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            {MANIFESTO_PARAGRAPHS.map((para, idx) => (
              <p
                key={idx}
                className={idx === MANIFESTO_PARAGRAPHS.length - 1 ? 'italic text-slate-500 text-sm pt-2 border-t border-slate-100' : ''}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* 12 Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {CORE_PRINCIPLES.map((pr) => (
            <div
              key={pr.number}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1.5"
            >
              <span className="font-mono font-semibold text-sky-700 block">
                Principle {String(pr.number).padStart(2, '0')}
              </span>
              <h3 className="text-sm font-semibold text-slate-900">{pr.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pr.rule}</p>
            </div>
          ))}
        </div>

        {/* Roadmap: 12 Months, 3 Years, 10 Years + Gate Checks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          {ROADMAP_HORIZONS.map((h) => (
            <div
              key={h.horizon}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3"
            >
              <div>
                <span className="font-mono font-semibold text-sky-700 block">{h.horizon}</span>
                <h3 className="text-base font-semibold text-slate-900 mt-0.5">{h.title}</h3>
              </div>
              <div className="space-y-2.5 border-t border-slate-100 pt-3">
                {h.items.map((item) => (
                  <div key={item.period} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="font-semibold text-slate-900 block">{item.period}</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Month 3 / 6 / 12 Gate Checks */}
        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="font-mono text-sky-300 font-semibold block">MONTH 3 GATE CHECK</span>
            <p className="text-slate-300 mt-1 leading-relaxed">
              Do I have a supervisor, a written thesis direction, a time &amp; expense log, one daily prayer habit, and a general health checkup booked?
            </p>
          </div>
          <div>
            <span className="font-mono text-sky-300 font-semibold block">MONTH 6 GATE CHECK</span>
            <p className="text-slate-300 mt-1 leading-relaxed">
              Do I have published portfolio projects, a 3–5 PhD scholarship shortlist, a first income plan, and a calmer relationship with failure?
            </p>
          </div>
          <div>
            <span className="font-mono text-sky-300 font-semibold block">MONTH 12 GATE CHECK</span>
            <p className="text-slate-300 mt-1 leading-relaxed">
              Did I submit a paper, abstract, or application? What do my 7 life-area scores say? What changes in Draft 3 of this handbook?
            </p>
          </div>
        </div>
      </section>

      {/* 03. Seven Life Areas */}
      <section id="life-areas" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              03 · SEVEN LIFE AREAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Practices, Watch-Outs, Evidence &amp; 12-Month Targets
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            Interactive map across all seven domains—ordered from highest priority (#1 Personal Growth) to Spiritual (#7).
          </p>
        </div>

        <LifeAreasSvg />
      </section>

      {/* 04. Weekly Rhythm & Practical Playbook */}
      <section id="life-rhythm" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              04 · WEEKLY RHYTHM &amp; PLAYBOOK
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              How Theory Becomes an Ordinary Tuesday
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            8 protected hours/week, 200 minutes of training, Gollwitzer If-Then plans, outreach templates, love scripts, and doubt worksheets.
          </p>
        </div>

        <WeeklyRhythmSvg />

        {/* Practical Playbook Tabs (Section 14 Templates & Worked Examples) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h3 className="text-base font-semibold text-slate-900">
              Section 14 Templates &amp; Worked Examples
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'career' as const, label: 'Career Plan & Emails' },
                { id: 'mind' as const, label: 'Thought Record & Muhasabah' },
                { id: 'love' as const, label: 'Love Scorecard & Scripts' },
                { id: 'body' as const, label: 'If-Then & Quit-Smoking' },
                { id: 'faith' as const, label: 'Faith & Reason Worksheet' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setPlaybookTab(t.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                    playbookTab === t.id
                      ? 'bg-sky-700 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {playbookTab === 'career' && (
            <div className="space-y-5 text-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 pr-3 font-medium">Timeline</th>
                      <th className="py-2 px-3 font-medium">Deliverable</th>
                      <th className="py-2 pl-3 font-medium">Done When</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {CAREER_12M_PLAN.map((row) => (
                      <tr key={row.month}>
                        <td className="py-2 pr-3 font-mono font-semibold text-sky-700 whitespace-nowrap">
                          {row.month}
                        </td>
                        <td className="py-2 px-3 font-semibold text-slate-900">{row.deliverable}</td>
                        <td className="py-2 pl-3 text-slate-600">{row.doneWhen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                  <span className="font-semibold text-slate-900 block">
                    Email Template · First Supervisor Meeting
                  </span>
                  <p className="font-mono text-[11px] text-slate-500">
                    Subject: Request for a short meeting about my thesis direction
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Dear Prof. [Name], I am [Name], a first-year master&apos;s student in [programme]. I am interested in a thesis on [area], building on my data-analysis internship. I attach a one-page note with two possible research questions. Could we meet for 20 minutes in the next two weeks?
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                  <span className="font-semibold text-slate-900 block">
                    Portfolio Project Recipe (12h / 4 Sessions) &amp; Scholarship Countdown
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Portfolio:</strong> Pick 1 clear question on BPS public data → clean &amp; log choices → 2–3 clear charts → 1-page insight + publish code.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Backward PhD Plan:</strong> −12m shortlist · −10m email supervisors · −8m book language test · −6m ask referees · −4m draft statements · −2m collect docs · −1m submit early.
                  </p>
                </div>
              </div>
            </div>
          )}

          {playbookTab === 'mind' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2.5">
                <span className="font-semibold text-slate-900 block">
                  Worked CBT Thought Record (Thesis Anxiety Example)
                </span>
                <div className="space-y-1.5 text-slate-700">
                  <p><strong>Situation:</strong> Sat 09:00, opening thesis introduction.</p>
                  <p><strong>Automatic thought (80%):</strong> &quot;If it isn&apos;t brilliant, my supervisor will think I&apos;m not smart enough.&quot; (Anxiety 8/10)</p>
                  <p><strong>Evidence against:</strong> Supervisors expect raw drafts; draft feedback critiques text, not intelligence.</p>
                  <p className="text-emerald-900 bg-emerald-50 border border-emerald-200 rounded p-2">
                    <strong>Balanced thought (70%):</strong> &quot;A rough draft is raw material my supervisor needs. Write an ugly paragraph for 25 min, fix later.&quot; → Result: Anxiety 5/10, 300 words written.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2.5">
                <span className="font-semibold text-slate-900 block">
                  10-Min Evening Review (Seneca + Muhasabah)
                </span>
                <ul className="space-y-1.5 text-slate-700">
                  <li><strong>1. What did I do well?</strong> Finished 25-min focus block; said &apos;no&apos; kindly once.</li>
                  <li><strong>2. Where did I fall short?</strong> Scrolled 45 minutes after 22:00.</li>
                  <li><strong>3. What changes tomorrow?</strong> Phone charges outside bedroom; read 2 pages if tempted.</li>
                  <li><strong>4. One gratitude:</strong> A close friend replied thoughtfully.</li>
                  <li><strong>5. Intention (niyyah) for tomorrow:</strong> One prayer, one focused block, one honest conversation—ask forgiveness and help without self-punishment.</li>
                </ul>
              </div>
            </div>
          )}

          {playbookTab === 'love' && (
            <div className="space-y-4 text-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 pr-3 font-medium">Quality I Want</th>
                      <th className="py-2 px-3 font-medium">Observable Behaviour</th>
                      <th className="py-2 pl-3 font-medium">Red Flag</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {LOVE_SCORECARD.map((r) => (
                      <tr key={r.quality}>
                        <td className="py-2 pr-3 font-semibold text-slate-900">{r.quality}</td>
                        <td className="py-2 px-3 text-slate-700">{r.whatIWouldSee}</td>
                        <td className="py-2 pl-3 text-red-700">{r.redFlag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ['1. Gentle Start-Up (Gottman)', "'I felt [emotion] about [specific situation], and I need [clear positive request].'"],
                  ['2. Healthy 20-Min Break', "'I'm getting overwhelmed and want to handle this well. Can we pause 20 minutes and talk again at 8? I will come back.'"],
                  ['3. Expectations Talk', "'I'd like to talk calmly about where we see faith, children, work, living abroad, money, and family roles.'"],
                  ['4. Ending Kindly & Early', "'I've thought carefully and don't see us building a future together. I appreciate you and wanted to say this honestly and early.'"],
                ].map(([title, script]) => (
                  <div key={title} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="font-semibold text-slate-900 block">{title}</span>
                    <p className="text-slate-600 mt-1 italic">{script}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {playbookTab === 'body' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
              <div className="space-y-2.5">
                <span className="font-semibold text-slate-900 block">
                  Six Gollwitzer If-Then Plans
                </span>
                {IF_THEN_PLANS.map((p) => (
                  <div key={p.trigger} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="font-semibold text-sky-800">{p.trigger}, </span>
                    <span className="text-slate-700">{p.response}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2.5">
                <span className="font-semibold text-slate-900 block">
                  7-Step Quit-Smoking Plan, Sleep &amp; Asian Checkup Targets
                </span>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  <li>Pick a quit date within 2 weeks and tell 2 supportive friends (1 cig/day still carries 46% of pack-a-day male CHD risk — BMJ 2018).</li>
                  <li>Pre-script triggers (coffee/parties): say &quot;no thanks, I quit&quot; and hold a drink.</li>
                  <li>Ride 5-min craving waves by walking, drinking water, or texting a friend.</li>
                  <li>Skip &quot;just one&quot;; treat a slip as trigger data and restart the same day.</li>
                  <li>Ask doctor about cessation counseling/options + move saved cigarette money visibly to savings.</li>
                </ol>
                <p className="pt-2 border-t border-slate-200 text-slate-600 leading-relaxed">
                  <strong>Isi Piringku, Sleep &amp; Checkup Cutoffs:</strong> Half plate veg/fruit + rice/tubers &amp; protein; steady wake time within 1h; zero caffeine ≥6–8h before bed (Drake 2013); target WHO Asia-Pacific waist &lt;90 cm (BMI 18.5–22.9).
                </p>
              </div>
            </div>
          )}

          {playbookTab === 'faith' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
              <div className="space-y-2.5">
                <span className="font-semibold text-slate-900 block">
                  Sort Questions Into the Right Tool Before Answering
                </span>
                {[
                  ['How does nature work?', 'Science (evidence, experiment)', 'How did the universe or life develop?'],
                  ['What follows logically?', 'Philosophy (argument)', 'Can responsibility survive determinism?'],
                  ['What does revelation say?', 'Theology & qualified teacher', 'Classical accounts of qadar & kasb'],
                  ['How should I live?', 'Ethics & faith tested in life', 'Duty to parents and community'],
                  ['What do I feel and need?', 'Friend, journal, psychologist', 'Why does this specific doubt scare me?'],
                ].map(([q, tool, ex]) => (
                  <div key={q} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-900">{q}</span>
                      <span className="font-mono text-sky-800 font-semibold">{tool}</span>
                    </div>
                    <span className="text-slate-500 block mt-0.5">Example: {ex}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2.5">
                <span className="font-semibold text-slate-900 block">
                  15-Min Daily Spiritual Practice &amp; 6-Step Doubt Worksheet
                </span>
                <ul className="space-y-1.5 text-slate-700">
                  <li><strong>Morning (2 min):</strong> Niyyah (&quot;work with care, benefit someone, accept what I cannot control&quot;) + brief Stoic rehearsal.</li>
                  <li><strong>Fixed Anchor:</strong> Keep one daily prayer consistently for 66 days before expanding.</li>
                  <li><strong>Evening (10 min):</strong> Muhasabah review + gratitude + asking forgiveness.</li>
                  <li><strong>Weekly &amp; Monthly:</strong> 30m quiet nature reflection + monthly sit-down with a teacher carrying written questions. Never draw sweeping metaphysical verdicts in a low mood.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 05. Mind, Decisions, Risk Register & Open Questions */}
      <section id="life-decisions" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              05 · MIND, DECISIONS &amp; RISK PLAN B
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Exposure Ladder, Decision Rules &amp; Pre-Written Plan B
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            &quot;A plan that only works when nothing goes wrong is a wish. Naming risks early lowers anxiety because the response is already written.&quot;
          </p>
        </div>

        <MindAndDecisionSvg />

        {/* Clinical Warning Signs + Risk Register */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-950">
            <strong className="text-sm block mb-1">
              Warning Signs to Contact Psychologist or Doctor Immediately (Section 8)
            </strong>
            Low mood or heavy anxiety lasting &gt;2 weeks, persistent sleep or appetite disruption, losing interest in everything, or thoughts that life is not worth living. Asking for help early is part of discipline—not a failure of it.
          </div>

          <h3 className="text-base font-semibold text-slate-900 pt-1">
            Section 12 · Risk Register &amp; Pre-Written Plan B (8 Scenarios)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Risk Scenario</th>
                  <th className="py-2 px-3 font-medium">Early Warning Sign</th>
                  <th className="py-2 pl-3 font-medium">Pre-Written Plan B</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RISK_REGISTER.map((r) => (
                  <tr key={r.risk}>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900 min-w-[190px]">{r.risk}</td>
                    <td className="py-2.5 px-3 text-slate-500">{r.earlySign}</td>
                    <td className="py-2.5 pl-3 text-slate-700">{r.planB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 7 Open Questions Personal Reflection Notebook (Saved in localStorage) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Section 9 · Seven Open Questions Still to Decide
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Blanks from the Discovery Survey—type notes as clarity emerges (auto-saved locally in your browser).
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Revisit for Draft 3</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {OPEN_QUESTIONS.map((q) => (
              <div key={q.number} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-2">
                <label htmlFor={`oq-${q.number}`} className="font-semibold text-slate-900 block leading-snug">
                  <span className="font-mono text-sky-700 mr-1.5">0{q.number}.</span>
                  {q.question}
                </label>
                <textarea
                  id={`oq-${q.number}`}
                  rows={2}
                  value={questionNotes[q.number] || ''}
                  onChange={(e) =>
                    setQuestionNotes((prev) => ({ ...prev, [q.number]: e.target.value }))
                  }
                  placeholder="Write your current reflection or facts gathered..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. 13-Book Reading Path & Evidence Base */}
      <section id="life-reading" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              06 · READING PATH &amp; EVIDENCE BASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              13-Book Sequence, Strength Labels &amp; Full Bibliography
            </h2>
          </div>
          <span className="font-mono text-xs font-semibold text-sky-800 tabular-nums">
            Completed: {booksRead.length} / {READING_PATH.length} books
          </span>
        </div>

        {/* Reading Path Tracker */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <p className="text-xs text-slate-600">
            One book at a time; write a 1-page summary and test one idea for 30 days. Workbooks are used alongside your psychologist.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {READING_PATH.map((book) => {
              const done = booksRead.includes(book.order);
              return (
                <button
                  key={book.order}
                  onClick={() => toggleBook(book.order)}
                  className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer flex items-start gap-3 ${
                    done
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center font-mono text-[11px] font-bold shrink-0 ${
                      done ? 'bg-emerald-700 text-white' : 'bg-white border border-slate-300 text-slate-600'
                    }`}
                  >
                    {done ? '✓' : book.order}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    <span className="font-semibold block leading-snug">
                      {book.title}{' '}
                      {book.isWorkbook && (
                        <span className="font-mono text-[10px] text-amber-800">(Workbook)</span>
                      )}
                    </span>
                    <span className="text-slate-500 block">
                      {book.author} · {book.when}
                    </span>
                    <p className="text-slate-600 pt-1">{book.why}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Science-Verified Upgrades & Clinical Fact-Checks */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div>
            <span className="font-mono text-sky-700 font-semibold block">
              EMPIRICAL FACT-CHECK &amp; MECHANISM UPGRADES
            </span>
            <h3 className="text-base font-semibold text-slate-900 mt-0.5">
              Six Verified Scientific Refinements to Draft 2
            </h3>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Cross-checked directly against published meta-analyses, randomized trials, neuroimaging studies, and WHO Asia-Pacific clinical thresholds—turning Draft 2 rules into exact, testable mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {SCIENTIFIC_UPGRADES.map((up) => (
              <div
                key={up.id}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono font-semibold text-sky-700">{up.domain}</span>
                    <span className="font-mono text-[10.5px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {up.strength}
                    </span>
                  </div>
                  <p className="text-slate-500 italic">{up.previousIntuition}</p>
                  <p className="text-slate-800 leading-relaxed">{up.scientificFinding}</p>
                  <span className="font-mono text-[11px] font-semibold text-emerald-800 block pt-1">
                    Data: {up.exactNumbers}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-200/80 space-y-1">
                  <p className="text-slate-700">
                    <strong className="text-slate-900">Action rule:</strong> {up.actionRule}
                  </p>
                  <span className="text-[11px] text-slate-500 block">{up.citation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Strength Labels & Categorized References */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5 text-xs">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Section 15 · Honest Limits &amp; Evidence Strength Labels
            </h3>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Averages describe groups—treat studies as hypotheses to test on yourself, verify Indonesian &amp; Muslim context, and keep qualified doctors, psychologists, and scholars first.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {STRENGTH_LABELS.map((s) => (
              <div key={s.label} className={`border rounded-lg p-3 ${s.tone}`}>
                <span className="font-mono font-bold block">{s.label}</span>
                <span className="mt-0.5 block opacity-90">{s.meaning}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-slate-200 pt-4">
            {HANDBOOK_REFERENCES.map((group) => (
              <div key={group.area} className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                <span className="font-semibold text-slate-900 block">{group.area}</span>
                <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                  {group.items.map((ref, idx) => (
                    <li key={idx}>· {ref}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Maxim */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
          <p className="font-display text-lg sm:text-xl font-medium text-slate-800 max-w-2xl mx-auto">
            &quot;{HANDBOOK_META.closingMaxim}&quot;
          </p>
        </div>
      </section>
    </div>
  );
};
