import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import {
  COMPENDIUM_VOLUMES,
  FUTURE_VOLUME_SLOTS,
  DICTIONARY_ENTRIES,
  VolumeId,
} from '../data/compendiumRegistry';
import { DAILY_MINIMUMS } from '../data/lifeHandbookData';

interface CompendiumHomeProps {
  onOpenVolume: (volume: Exclude<VolumeId, 'library'>, chapterId?: string) => void;
}

interface WeeklyReviewEntry {
  id: string;
  date: string;
  finished: string;
  avoided: string;
  learned: string;
  priorities: string;
}

const WEEKLY_REVIEW_KEY = 'life_compendium_weekly_reviews_v1';

export const CompendiumHome: React.FC<CompendiumHomeProps> = ({ onOpenVolume }) => {
  const [query, setQuery] = useState('');
  const [reviews, setReviews] = useState<WeeklyReviewEntry[]>(() => {
    try {
      const saved = localStorage.getItem(WEEKLY_REVIEW_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [finished, setFinished] = useState('');
  const [avoided, setAvoided] = useState('');
  const [learned, setLearned] = useState('');
  const [priorities, setPriorities] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(WEEKLY_REVIEW_KEY, JSON.stringify(reviews));
    } catch {
      // Ignore storage failures
    }
  }, [reviews]);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredEntries = normalizedQuery
    ? DICTIONARY_ENTRIES.filter(
        (e) =>
          e.term.toLowerCase().includes(normalizedQuery) ||
          e.definition.toLowerCase().includes(normalizedQuery) ||
          e.category.toLowerCase().includes(normalizedQuery)
      )
    : DICTIONARY_ENTRIES.slice(0, 6);

  const handleSaveReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finished.trim() && !learned.trim() && !priorities.trim()) return;
    const entry: WeeklyReviewEntry = {
      id: `${Date.now()}`,
      date: new Date().toISOString().slice(0, 10),
      finished: finished.trim() || '—',
      avoided: avoided.trim() || '—',
      learned: learned.trim() || '—',
      priorities: priorities.trim() || '—',
    };
    setReviews((prev) => [entry, ...prev].slice(0, 12));
    setFinished('');
    setAvoided('');
    setLearned('');
    setPriorities('');
  };

  const handleDeleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-14">
      {/* Comfortable Editorial Hero */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>Personal Living Compendium</span>
            <span aria-hidden="true">·</span>
            <span>3 Active Volumes</span>
            <span aria-hidden="true">·</span>
            <span>138 Combined Source Pages</span>
            <span aria-hidden="true">·</span>
            <span>Built to Expand Over Time</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
            Dictionary of My Life
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            A calm, structured home for what you believe, how you train your body, how you decide, and what you are learning—organized into dedicated volumes so every chapter stays readable as your library grows.
          </p>
        </div>

        {/* 4-Item Daily Floor Quick Anchor */}
        <div className="border-t border-slate-100 pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {DAILY_MINIMUMS.map((min, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5">
              <span className="font-mono font-semibold text-sky-700 block">
                Daily Floor 0{idx + 1}
              </span>
              <span className="text-slate-700 mt-1 block leading-relaxed">{min}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Active Volumes Shelf */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">LIBRARY VOLUMES</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Current Handbooks &amp; Quick Chapter Entry
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            Open any volume in full reading mode or jump directly to a specific chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {COMPENDIUM_VOLUMES.map((vol) => (
            <article
              key={vol.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-sky-700">{vol.number}</span>
                  <span>{vol.pagesLabel}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{vol.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{vol.subtitle}</p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">{vol.summary}</p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-1.5 text-xs">
                  <span className="font-semibold text-slate-900 block">Included Visuals &amp; Tools</span>
                  <ul className="space-y-1 text-slate-600">
                    {vol.highlights.map((h) => (
                      <li key={h}>· {h}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-500 block">Jump to chapter:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {vol.chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => onOpenVolume(vol.id, ch.id)}
                        className="px-2.5 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md cursor-pointer whitespace-nowrap shrink-0 transition-colors"
                      >
                        {ch.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                <button
                  onClick={() => onOpenVolume(vol.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Open {vol.number} <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={vol.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
                >
                  Original PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cross-Volume Life Dictionary Index & Instant Search */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">CONCEPT INDEX</span>
            <h2 className="text-xl font-semibold text-slate-900 mt-0.5">
              Search Key Terms Across All Volumes
            </h2>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ikhtiar, Trouillot, Great Divergence, 80/20..."
              aria-label="Search life dictionary terms"
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>
        </div>

        {filteredEntries.length === 0 ? (
          <p className="text-xs text-slate-500 py-4">
            No matching dictionary entries found for &quot;{query}&quot;. Try keywords like philosophy, Braudel, silver, marathon, or sleep.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
                    <span>{entry.category}</span>
                    <span>{entry.volumeLabel}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{entry.term}</h3>
                  <p className="text-slate-600 leading-relaxed">{entry.definition}</p>
                </div>

                <button
                  onClick={() => onOpenVolume(entry.volume, entry.chapterId)}
                  className="self-start text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline cursor-pointer"
                >
                  Open in{' '}
                  {entry.volume === 'life'
                    ? 'Life Handbook'
                    : entry.volume === 'history'
                      ? 'World History'
                      : 'Athletic Plan'}{' '}
                  →
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sunday 30-Minute Review + Future Volumes Shelf */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sunday Review Log */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              LIVING PRACTICE · SECTION 6 &amp; 10
            </span>
            <h2 className="text-xl font-semibold text-slate-900 mt-0.5">
              Sunday 30-Minute Review &amp; Failure Log
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Saved locally in your browser so your compendium stays alive week to week.
            </p>
          </div>

          <form onSubmit={handleSaveReview} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label htmlFor="wr-finished" className="font-medium text-slate-700 block mb-1">
                What did I finish?
              </label>
              <input
                id="wr-finished"
                type="text"
                value={finished}
                onChange={(e) => setFinished(e.target.value)}
                placeholder="e.g. 4 workouts + supervisor email sent"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <label htmlFor="wr-avoided" className="font-medium text-slate-700 block mb-1">
                What did I avoid?
              </label>
              <input
                id="wr-avoided"
                type="text"
                value={avoided}
                onChange={(e) => setAvoided(e.target.value)}
                placeholder="e.g. Delayed thesis intro outline"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <label htmlFor="wr-learned" className="font-medium text-slate-700 block mb-1">
                What did I learn (Failure Log)?
              </label>
              <input
                id="wr-learned"
                type="text"
                value={learned}
                onChange={(e) => setLearned(e.target.value)}
                placeholder="e.g. 5-min start broke resistance"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <label htmlFor="wr-priorities" className="font-medium text-slate-700 block mb-1">
                Top 3 priorities next week
              </label>
              <input
                id="wr-priorities"
                type="text"
                value={priorities}
                onChange={(e) => setPriorities(e.target.value)}
                placeholder="e.g. 1. Proposal 2. Blood check 3. 200m move"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer whitespace-nowrap shrink-0"
              >
                Save Weekly Entry
              </button>
            </div>
          </form>

          {reviews.length > 0 && (
            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-start justify-between gap-3"
                >
                  <div className="space-y-0.5 text-slate-700">
                    <span className="font-mono font-semibold text-sky-700 block">{r.date}</span>
                    <p><strong>Finished:</strong> {r.finished} · <strong>Avoided:</strong> {r.avoided}</p>
                    <p><strong>Learned:</strong> {r.learned} · <strong>Next 3:</strong> {r.priorities}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteReview(r.id)}
                    className="text-slate-400 hover:text-red-600 text-[11px] font-medium cursor-pointer shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Future Volume Slots */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4 text-xs">
          <div>
            <span className="text-xs font-mono text-slate-500 font-semibold">EXTENSIBLE SHELF</span>
            <h2 className="text-xl font-semibold text-slate-900 mt-0.5">
              Space Reserved for Future Volumes
            </h2>
            <p className="text-slate-600 mt-1 leading-relaxed">
              This compendium uses a clean registry (<code className="font-mono text-slate-800">src/data/compendiumRegistry.ts</code>) so future topics—notes, research, or projects—slot in as dedicated volumes without crowding existing pages.
            </p>
          </div>

          <div className="space-y-3">
            {FUTURE_VOLUME_SLOTS.map((slot) => (
              <div
                key={slot.number}
                className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-4 space-y-1"
              >
                <span className="font-mono text-slate-500 font-semibold block">{slot.number}</span>
                <h3 className="text-sm font-semibold text-slate-900">{slot.title}</h3>
                <p className="text-slate-600 leading-relaxed">{slot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
