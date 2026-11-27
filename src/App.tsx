import React, { useState, useEffect } from 'react';
import { BodyRecompSvg } from './components/infographics/BodyRecompSvg';
import { GitHubPublishModal } from './components/GitHubPublishModal';
import { CompendiumHome } from './components/CompendiumHome';
import { VolumeShell } from './components/VolumeShell';
import { TimelineSection } from './sections/TimelineSection';
import { StrengthSection } from './sections/StrengthSection';
import { RunningSection } from './sections/RunningSection';
import { NutritionSection } from './sections/NutritionSection';
import { ScienceSection } from './sections/ScienceSection';
import { LifeHandbookSection } from './sections/LifeHandbookSection';
import { WorldHistorySection } from './sections/WorldHistorySection';
import { PROFILE_METRICS, BODY_ASSESSMENT, REALISTIC_EXPECTATIONS } from './data/handbookData';
import { VolumeId, COMPENDIUM_VOLUMES } from './data/compendiumRegistry';

export default function App() {
  const [activeVolume, setActiveVolume] = useState<VolumeId>('library');
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [overviewTab, setOverviewTab] = useState<'assessment' | 'expectations'>('assessment');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'athletic' || ['overview', 'timeline', 'strength', 'running', 'nutrition', 'science'].includes(hash)) {
      setActiveVolume('athletic');
    } else if (hash === 'life' || hash.startsWith('life-')) {
      setActiveVolume('life');
    } else if (hash === 'history' || hash.startsWith('wh-')) {
      setActiveVolume('history');
    }
  }, []);

  const handleOpenVolume = (volume: VolumeId, chapterId?: string) => {
    setActiveVolume(volume);
    if (!chapterId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', volume === 'library' ? '#library' : `#${volume}`);
      return;
    }
    window.history.replaceState(null, '', `#${chapterId}`);
    setTimeout(() => {
      const target = document.getElementById(chapterId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const athleticVolume = COMPENDIUM_VOLUMES[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Single Sticky Navigation Bar (Strict 3-Zone Contract, Zero Stacked Bars) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
          <button
            onClick={() => handleOpenVolume('library')}
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display cursor-pointer"
          >
            Life Dictionary
          </button>

          {/* Zone 2 Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {[
              { id: 'library' as const, label: 'Library' },
              { id: 'athletic' as const, label: '01 · Athletic' },
              { id: 'life' as const, label: '02 · Life' },
              { id: 'history' as const, label: '03 · World History' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleOpenVolume(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeVolume === item.id
                    ? 'text-sky-700 font-semibold underline underline-offset-8 decoration-2'
                    : 'hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 2 Mobile Compact Switcher (Lives inside the single h-16 header—no second bar!) */}
          <div className="md:hidden min-w-0">
            <select
              aria-label="Select volume"
              value={activeVolume}
              onChange={(e) => handleOpenVolume(e.target.value as VolumeId)}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-800 bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 cursor-pointer"
            >
              <option value="library">Library Home</option>
              <option value="athletic">01 · Athletic Plan</option>
              <option value="life">02 · Life Handbook</option>
              <option value="history">03 · World History</option>
            </select>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setIsPublishModalOpen(true)}
              className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Publish to GitHub
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1320px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {activeVolume === 'library' && <CompendiumHome onOpenVolume={handleOpenVolume} />}

        {activeVolume === 'life' && <LifeHandbookSection />}

        {activeVolume === 'history' && <WorldHistorySection />}

        {activeVolume === 'athletic' && (
          <VolumeShell
            volumeLabel={athleticVolume.number}
            title={athleticVolume.title}
            subtitle="59 Pages · Personalised (164 cm, 61 kg) · Gym & Home"
            chapters={athleticVolume.chapters}
            pdfPath={athleticVolume.pdfPath}
            pdfLabel="Open Source PDF (59p)"
          >
            <section id="overview" className="scroll-mt-20 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Editorial Intro */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span>Personalised Plan</span>
                      <span aria-hidden="true">·</span>
                      <span>Male, 164 cm, 61 kg</span>
                      <span aria-hidden="true">·</span>
                      <span>Gym &amp; Home Options</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                      52-Week Athletic Transformation Handbook
                    </h1>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      One-year integrated roadmap combining body recomposition, functional strength, zero-to-marathon running progression, active recovery, cycled nutrition, and 157 peer-reviewed citations.
                    </p>

                    <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-700">
                      <p>
                        <strong className="text-slate-900">Weeks 1–12 Verdict:</strong> Biggest visible physique change (−2–4 kg fat, +1.5–3 kg muscle, waist −3–6 cm) plus continuous 5K (Wk 8) and 10K (Wk 12).
                      </p>
                      <p>
                        <strong className="text-slate-900">Weeks 13–52 Verdict:</strong> Builds to 12–14% body fat, +2–4 kg lean mass, key lifts up 50–100%, a Half Marathon (Wk 34), and a full Marathon (Wk 52).
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                    <a
                      href="#timeline"
                      className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0"
                    >
                      Explore 52-Week Timeline
                    </a>
                    <a
                      href="#strength"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
                    >
                      Muscle &amp; Form Atlas
                    </a>
                    <a
                      href={athleticVolume.pdfPath}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
                    >
                      Original PDF (59p)
                    </a>
                  </div>
                </div>

                {/* Right Interactive Infographic */}
                <div className="lg:col-span-7">
                  <BodyRecompSvg />
                </div>
              </div>

              {/* 4-Column Full-Width KPI Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PROFILE_METRICS.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
                  >
                    <span className="text-xs text-slate-500 block">{item.label}</span>
                    <span className="text-xl font-bold text-slate-900 font-mono tabular-nums mt-1 block">
                      {item.value}
                    </span>
                    <span className="text-xs text-slate-600 mt-1 block">{item.note}</span>
                  </div>
                ))}
              </div>

              {/* Starting Body Assessment & Why the Plan Is Shaped This Way */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Starting Assessment &amp; Realistic Expectations (Sections 1.2 &amp; 2)
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Why the program prioritizes back/shoulders, uses walk/jog intervals, and avoids crash deficits.
                    </p>
                  </div>
                  <div className="inline-flex p-1 bg-slate-100 rounded-lg">
                    <button
                      onClick={() => setOverviewTab('assessment')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                        overviewTab === 'assessment' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      Body Assessment (7 Areas)
                    </button>
                    <button
                      onClick={() => setOverviewTab('expectations')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                        overviewTab === 'expectations' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      12-Wk vs 52-Wk Reality Check
                    </button>
                  </div>
                </div>

                {overviewTab === 'assessment' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {BODY_ASSESSMENT.map((b) => (
                      <div key={b.area} className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1">
                        <span className="font-semibold text-slate-900 block">{b.area}</span>
                        <p className="text-slate-500">{b.observation}</p>
                        <p className="text-sky-800 font-medium pt-1 border-t border-slate-200/70">{b.response}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start text-xs">
                    <div className="lg:col-span-7 overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-500">
                            <th className="py-2 pr-3 font-medium">Goal</th>
                            <th className="py-2 px-3 font-medium">Realistic in 12 Weeks</th>
                            <th className="py-2 pl-3 font-medium">Verdict</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {REALISTIC_EXPECTATIONS.map((r) => (
                            <tr key={r.goal}>
                              <td className="py-2 pr-3 font-semibold text-slate-900">{r.goal}</td>
                              <td className="py-2 px-3 text-slate-700">{r.wk12}</td>
                              <td className="py-2 pl-3 font-mono text-sky-700 font-medium">{r.verdict}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-slate-700">
                      <span className="font-semibold text-slate-900 block">3 Design Principles</span>
                      <p>· <strong>Running base first:</strong> Tendons adapt slower than lungs; Wks 1–8 build 5K, Wks 9–12 extend to 10K.</p>
                      <p>· <strong>Minimizing interference:</strong> Keep 80% of runs easy, separate hard leg days from long runs by 48h, eat carbs + protein.</p>
                      <p>· <strong>No crash deficit:</strong> At 61 kg, a harsh cut burns muscle; a 5–10% deficit with 125g protein recomposes.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <TimelineSection />
            <StrengthSection />
            <RunningSection />
            <NutritionSection />
            <ScienceSection />
          </VolumeShell>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-800">Dictionary of My Life · Personal Compendium</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Living self-authored handbooks; consult qualified doctors, psychologists, or teachers as appropriate.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="./assets/aistudio/52_Week_Athletic_Transformation_Handbook_Full_7b42871c.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-medium hover:underline"
            >
              Vol 01 PDF
            </a>
            <a
              href="./assets/aistudio/My_Life_Handbook__Draft_2__5a96f809.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-medium hover:underline"
            >
              Vol 02 PDF
            </a>
            <a
              href="./assets/aistudio/The_Comprehensive_Informational_and_Critical_Handbook_of_World_History__1__f0dcf48b.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-medium hover:underline"
            >
              Vol 03 PDF
            </a>
            <button
              onClick={() => setIsPublishModalOpen(true)}
              className="text-slate-700 font-medium hover:text-slate-900 cursor-pointer"
            >
              GitHub Pages Setup
            </button>
          </div>
        </div>
      </footer>

      <GitHubPublishModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
      />
    </div>
  );
}
