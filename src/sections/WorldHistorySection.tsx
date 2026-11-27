import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { VolumeShell } from '../components/VolumeShell';
import { COMPENDIUM_VOLUMES } from '../data/compendiumRegistry';
import { HistoriographyToolsSvg } from '../components/infographics/HistoriographyToolsSvg';
import { WorldChronologySvg } from '../components/infographics/WorldChronologySvg';
import { ExchangeCircuitsSvg } from '../components/infographics/ExchangeCircuitsSvg';
import { DivergenceAndCausationSvg } from '../components/infographics/DivergenceAndCausationSvg';
import {
  WORLD_HISTORY_META,
  HISTORIOGRAPHY_TRADITIONS,
  EARLY_COMPLEX_SOCIETIES,
  COMPARATIVE_19C_RESPONSES,
  NUSANTARA_IN_WORLD_HISTORY,
  THEORETICAL_LENSES,
  POLICY_CASE_STUDIES,
  CRITICAL_INQUIRY_DIMENSIONS,
  HISTORY_GLOSSARY,
  THEMATIC_INDEX,
  WORLD_HISTORY_BIBLIOGRAPHY,
  WORLD_HISTORY_BOOK_RECOMMENDATIONS,
} from '../data/worldHistoryData';

const WH_BOOKS_KEY = 'world_history_books_v1';

const DIAGNOSTIC_PRESETS = [
  {
    id: 'gunpowder-myth',
    label: 'Claim: "Asia stagnated after 1500 while Europe surged ahead"',
    notes: {
      'Scale & Spatiality': 'Shift from Europe-centered lens to Ming-Qing single whip silver & Mughal/Ottoman manufacturing output (1500–1750).',
      'Causation & Contingency': '19th-c. Great Divergence hinged on British coal geography + high urban wages + colonial ghost acreage rather than timeless European superiority.',
      'Agency & Silences': 'Colonial company ledgers often downplayed Gujarati, Hokkien, and Bengali mercantile credit networks.',
      'Material & Ecological Base': 'Yangtze Delta matched English agricultural yields c. 1750 until fossil coal broke organic solar ceilings.',
      'Periodization & Positionality': 'Replacing "Early Modern European Expansion" with polycentric Eurasian agrarian balance reframes 1500–1750.',
    },
  },
  {
    id: 'black-death',
    label: 'Claim: "Plagues simply strike societies uniformly"',
    notes: {
      'Scale & Spatiality': 'Tracked Silk Road & Pax Mongolica networks from Central Asia across Black Sea, Cairo, and Venice.',
      'Causation & Contingency': 'Yersinia pestis confirmed via ancient DNA (aDNA), yet political & public-health institutions mediated mortality and wage recovery.',
      'Agency & Silences': 'Latin chronicles foreground urban elites; Mamluk waqf and Cairo court records expose different relief & labor pressures.',
      'Material & Ecological Base': '14th-century cooling combined with dense agrarian cities shifted land-to-labor ratios for generations.',
      'Periodization & Positionality': 'Marks a decisive demographic conjuncture ending the High Medieval expansion across Eurasia & North Africa.',
    },
  },
];

export const WorldHistorySection: React.FC = () => {
  const volumeMeta = COMPENDIUM_VOLUMES.find((v) => v.id === 'history')!;
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [showFullBib, setShowFullBib] = useState(false);
  const [bookTrack, setBookTrack] = useState<'All' | 'Big Picture' | 'Critical Method' | 'Divergence & Trade' | 'Climate & Ecology'>('All');
  const [whBooksRead, setWhBooksRead] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(WH_BOOKS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WH_BOOKS_KEY, JSON.stringify(whBooksRead));
    } catch {
      // Ignore storage error
    }
  }, [whBooksRead]);

  const toggleWhBook = (order: number) => {
    setWhBooksRead((prev) =>
      prev.includes(order) ? prev.filter((o) => o !== order) : [...prev, order]
    );
  };

  // Critical Source Diagnostic Sandbox state
  const [claimInput, setClaimInput] = useState(
    'Claim: "The 19th-century rise of the West resulted solely from unique European culture."'
  );
  const [checkedDimensions, setCheckedDimensions] = useState<string[]>([
    'Scale & Spatiality',
    'Causation & Contingency',
  ]);
  const [dimensionNotes, setDimensionNotes] = useState<Record<string, string>>(
    DIAGNOSTIC_PRESETS[0].notes
  );

  const toggleDimension = (dim: string) => {
    setCheckedDimensions((prev) =>
      prev.includes(dim) ? prev.filter((d) => d !== dim) : [...prev, dim]
    );
  };

  const applyPreset = (presetId: string) => {
    const found = DIAGNOSTIC_PRESETS.find((p) => p.id === presetId);
    if (!found) return;
    setClaimInput(found.label);
    setDimensionNotes(found.notes);
    setCheckedDimensions(CRITICAL_INQUIRY_DIMENSIONS.map((d) => d.dimension));
  };

  const normalizedGlossary = glossaryQuery.trim().toLowerCase();
  const filteredGlossary = normalizedGlossary
    ? HISTORY_GLOSSARY.filter(
        (item) =>
          item.term.toLowerCase().includes(normalizedGlossary) ||
          item.definition.toLowerCase().includes(normalizedGlossary)
      )
    : HISTORY_GLOSSARY;

  const visibleBib = showFullBib
    ? WORLD_HISTORY_BIBLIOGRAPHY
    : WORLD_HISTORY_BIBLIOGRAPHY.slice(0, 12);

  return (
    <VolumeShell
      volumeLabel={volumeMeta.number}
      title={volumeMeta.title}
      subtitle="21-Chapter Synthesis · Parts I–IX + Glossary, Indices & APA Bibliography"
      chapters={volumeMeta.chapters}
      pdfPath={volumeMeta.pdfPath}
      pdfLabel="Open Source PDF (34p)"
    >
      {/* 01 · Foundations, Historiography & Early Societies */}
      <section id="wh-foundations" className="scroll-mt-20 space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>Parts I–IX</span>
                <span aria-hidden="true">·</span>
                <span>21 Chapters</span>
                <span aria-hidden="true">·</span>
                <span>34-Work Bibliography</span>
                <span aria-hidden="true">·</span>
                <span>19 Core Glossary Terms</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                {WORLD_HISTORY_META.title}
              </h1>

              <p className="text-sm sm:text-base font-medium text-slate-700">
                {WORLD_HISTORY_META.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="#wh-books"
                className="px-3.5 py-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors whitespace-nowrap shrink-0"
              >
                Book Recommendations (10)
              </a>
              <a
                href={volumeMeta.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-300 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
              >
                Open Original PDF (34p)
              </a>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl border-t border-slate-100 pt-4">
            {WORLD_HISTORY_META.preface}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              01 · PARTS I &amp; II · CH. 1–5
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Historiographical Traditions, Archival Silences &amp; Early Complex Societies
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            How world history evolved from courtly universal chronicles into polycentric scholarship triangulating text, artifacts, and paleoecology.
          </p>
        </div>

        {/* Interactive Historiography & 21st-Century Tools Infographic */}
        <HistoriographyToolsSvg />

        {/* Table 1.1: Four Historiographical Traditions */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div>
            <span className="font-mono text-sky-700 font-semibold block">TABLE 1.1 · CH. 1</span>
            <h3 className="text-base font-semibold text-slate-900 mt-0.5">
              Evolution of Macro-Historical Paradigms
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Tradition</th>
                  <th className="py-2 px-3 font-medium">Representative Thinkers</th>
                  <th className="py-2 px-3 font-medium">Core Analytical Premise</th>
                  <th className="py-2 pl-3 font-medium">Methodological Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {HISTORIOGRAPHY_TRADITIONS.map((row) => (
                  <tr key={row.tradition}>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900 align-top min-w-[165px]">
                      {row.tradition}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 align-top min-w-[200px]">
                      {row.thinkers}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 align-top">{row.premise}</td>
                    <td className="py-2.5 pl-3 text-red-700 align-top min-w-[190px]">
                      {row.limitations}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 5.1: Five Early Complex Societies */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div>
            <span className="font-mono text-sky-700 font-semibold block">TABLE 5.1 · CH. 5 &amp; 7</span>
            <h3 className="text-base font-semibold text-slate-900 mt-0.5">
              Comparative Early Complex Societies (3500–600 BCE)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {EARLY_COMPLEX_SOCIETIES.map((soc) => (
              <div key={soc.region} className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                <h4 className="text-sm font-semibold text-slate-900">{soc.region}</h4>
                <p className="text-slate-600">
                  <strong className="text-slate-800">Ecology:</strong> {soc.ecology}
                </p>
                <p className="text-slate-600">
                  <strong className="text-slate-800">Governance &amp; Script:</strong> {soc.governance}
                </p>
                <p className="text-sky-800 pt-1.5 border-t border-slate-200/80">
                  <strong>Current Debate:</strong> {soc.debate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · Global Chronology (12,000 BCE – Present) + Nusantara Synthesis */}
      <section id="wh-chronology" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              02 · PART III · CH. 7–11
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Polycentric Global Chronology &amp; Maritime Southeast Asia
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            Tracing agrarian transitions, classical empires, 19th-century state responses, and Nusantara&apos;s pivotal place in global history.
          </p>
        </div>

        <WorldChronologySvg />

        {/* Table 11.1: Comparative 19th-Century State Responses */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div>
            <span className="font-mono text-sky-700 font-semibold block">TABLE 11.1 · CH. 11</span>
            <h3 className="text-base font-semibold text-slate-900 mt-0.5">
              Comparative Nineteenth-Century State Responses to Western Expansion
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-3 font-medium">Society / Polity</th>
                  <th className="py-2 px-3 font-medium">Primary Reform Strategy</th>
                  <th className="py-2 px-3 font-medium">Structural Obstacles</th>
                  <th className="py-2 pl-3 font-medium">Outcome by 1914</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARATIVE_19C_RESPONSES.map((row) => (
                  <tr key={row.society}>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900 align-top min-w-[140px]">
                      {row.society}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 align-top">{row.strategy}</td>
                    <td className="py-2.5 px-3 text-slate-500 align-top">{row.obstacles}</td>
                    <td className="py-2.5 pl-3 font-medium text-sky-800 align-top">
                      {row.outcome1914}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Supplementary Synthesis: Nusantara & Maritime Southeast Asia in Global History */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div>
            <span className="font-mono text-sky-700 font-semibold block">
              REGIONAL SYNTHESIS ADDENDUM · CH. 6, 11, 15 &amp; 20
            </span>
            <h3 className="text-base font-semibold text-slate-900 mt-0.5">
              Maritime Southeast Asia &amp; Nusantara Inside Planetary History
            </h3>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Bridging the handbook&apos;s Indian Ocean, Trading-Post Empire, Paleoclimate, and Decolonization chapters to anchor Indonesian regional history inside global processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {NUSANTARA_IN_WORLD_HISTORY.map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5">
                <span className="font-mono font-semibold text-sky-700 block">{item.era}</span>
                <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                <p className="text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Interregional Exchange, Oceans & Borderlands */}
      <section id="wh-networks" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              03 · PARTS III &amp; VI · CH. 6, 9, 10, 15 &amp; 16
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Exchange Circuits, Thalassology &amp; Conceptual Borderlands
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            Replacing static continental maps with oceanic basins, middle-ground frontiers, and shifting political vocabularies (Begriffsgeschichte).
          </p>
        </div>

        <ExchangeCircuitsSvg />

        {/* Oceans, Borderlands & Conceptual History Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
            <span className="font-mono text-sky-700 font-semibold block">CH. 15 · THALASSOLOGY</span>
            <h3 className="text-sm font-semibold text-slate-900">
              Indian, Atlantic &amp; Pacific Worlds
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Oceans operated not as voids separating continents but as highways of monsoon port law, Black Atlantic diaspora resistance (Paul Gilroy), and Austronesian wayfinding across the &quot;Sea of Islands.&quot;
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
            <span className="font-mono text-sky-700 font-semibold block">CH. 16 · BORDERLANDS</span>
            <h3 className="text-sm font-semibold text-slate-900">
              Middle Grounds &amp; Plural Sovereignty
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Where empires lacked coercive monopoly (Great Lakes pays d&apos;en haut, Southeast Asian Zomia highlands, Qing steppe/Tibetan/Muslim multi-idiom rule), hybrid diplomacy prevailed over unilateral conquest.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
            <span className="font-mono text-sky-700 font-semibold block">CH. 16 · BEGRIFFSGESCHICHTE</span>
            <h3 className="text-sm font-semibold text-slate-900">
              Conceptual History in Translation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Terms like <em>revolution</em>, <em>sovereignty</em>, <em>civilization</em> (wenming / bunmei), and <em>freedom</em> were never passively copied—global thinkers translated and repurposed them for anti-colonial struggle.
            </p>
          </div>
        </div>
      </section>

      {/* 04 · Theoretical Lenses, Great Divergence & Applied Policy */}
      <section id="wh-debates" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              04 · PARTS IV, V &amp; VII · CH. 12–19
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Theoretical Frameworks, the Great Divergence &amp; Applied Policy
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            How macro-sociological lenses, cliometrics, and counterfactual causation inform modern epidemic, debt, and transboundary water policy.
          </p>
        </div>

        <DivergenceAndCausationSvg />

        {/* Theoretical Lenses Synthesis + Policy Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 text-xs">
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">CH. 12–14 · TABLE 14.1</span>
              <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                Four Macro-Theoretical Lenses
              </h3>
            </div>
            <div className="space-y-2.5">
              {THEORETICAL_LENSES.map((t) => (
                <div key={t.lens} className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-slate-900">{t.lens}</span>
                    <span className="font-mono text-[10.5px] text-sky-700">{t.category}</span>
                  </div>
                  <p className="text-slate-700">{t.contribution}</p>
                  <p className="text-red-700">
                    <strong>Critique:</strong> {t.critique}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">CH. 19 · TABLE 19.1</span>
              <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                Applied History: Thinking in Time for Policy Decisions
              </h3>
            </div>
            <div className="space-y-2.5">
              {POLICY_CASE_STUDIES.map((p) => (
                <div key={p.domain} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-1.5">
                  <span className="font-semibold text-slate-900 block">{p.domain}</span>
                  <p className="text-slate-500">
                    <strong>Cases:</strong> {p.cases}
                  </p>
                  <p className="text-emerald-900">
                    <strong>Actionable Lesson:</strong> {p.lessons}
                  </p>
                  <p className="text-red-700">
                    <strong>Analogical Pitfall:</strong> {p.pitfalls}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Critical Inquiry Sandbox, Glossary, Thematic Index & Bibliography */}
      <section id="wh-reference" className="scroll-mt-20 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              05 · PART IX &amp; BACK MATTER · CH. 21
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
              Critical Inquiry Sandbox, Glossary, Thematic Index &amp; Bibliography
            </h2>
          </div>
          <span className="font-mono text-xs font-semibold text-sky-800 tabular-nums">
            Audit Progress: {checkedDimensions.length} / {CRITICAL_INQUIRY_DIMENSIONS.length} dimensions
          </span>
        </div>

        {/* Interactive Five-Dimension Critical Inquiry Sandbox (Table 21.2) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">
                INTERACTIVE SOURCE &amp; CLAIM DIAGNOSTIC · TABLE 21.2
              </span>
              <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                Audit Any Historical Claim Across Five Critical Dimensions
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {DIAGNOSTIC_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.id)}
                  className="px-2.5 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md cursor-pointer whitespace-nowrap shrink-0"
                >
                  Load Example: {preset.id === 'gunpowder-myth' ? 'Great Divergence' : 'Black Death'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="wh-claim-input" className="font-medium text-slate-700 block mb-1">
              Historical Claim or Source Under Review
            </label>
            <input
              id="wh-claim-input"
              type="text"
              value={claimInput}
              onChange={(e) => setClaimInput(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CRITICAL_INQUIRY_DIMENSIONS.map((dim) => {
              const checked = checkedDimensions.includes(dim.dimension);
              return (
                <div
                  key={dim.dimension}
                  className={`rounded-lg border p-3.5 space-y-2 transition-colors ${
                    checked ? 'bg-sky-50/70 border-sky-300' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-900">{dim.dimension}</span>
                    <button
                      onClick={() => toggleDimension(dim.dimension)}
                      className={`px-2 py-0.5 rounded font-mono text-[10.5px] font-semibold cursor-pointer shrink-0 ${
                        checked
                          ? 'bg-sky-700 text-white'
                          : 'bg-white border border-slate-300 text-slate-600'
                      }`}
                    >
                      {checked ? '✓ Audited' : 'Mark Done'}
                    </button>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{dim.question}</p>
                  <p className="text-red-700 text-[11px]">
                    <strong>Avoid:</strong> {dim.pitfall}
                  </p>
                  <textarea
                    rows={2}
                    value={dimensionNotes[dim.dimension] || ''}
                    onChange={(e) =>
                      setDimensionNotes((prev) => ({
                        ...prev,
                        [dim.dimension]: e.target.value,
                      }))
                    }
                    placeholder="Record evidence, scale shifts, or counter-arguments..."
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Searchable 19-Term Glossary + 8-Subject Thematic Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 text-xs items-start">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-mono text-sky-700 font-semibold block">GLOSSARY · 19 TERMS</span>
                <h3 className="text-base font-semibold text-slate-900">
                  Core World History Vocabulary
                </h3>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={glossaryQuery}
                  onChange={(e) => setGlossaryQuery(e.target.value)}
                  placeholder="Filter Braudel, ghost acreage, mit'a..."
                  aria-label="Filter world history glossary"
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[430px] overflow-y-auto pr-1">
              {filteredGlossary.map((g) => (
                <div key={g.term} className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1">
                  <span className="font-semibold text-slate-900 block">{g.term}</span>
                  <p className="text-slate-600 leading-relaxed">{g.definition}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">THEMATIC INDEX</span>
              <h3 className="text-base font-semibold text-slate-900">
                Eight Cross-Chapter Subject Threads
              </h3>
            </div>
            <div className="space-y-2">
              {THEMATIC_INDEX.map((row) => (
                <div key={row.subject} className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-900">{row.subject}</span>
                    <span className="font-mono text-[10.5px] text-sky-700 shrink-0">
                      {row.chapters}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{row.topics}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curated Book Recommendations & Reading Tracker */}
        <div id="wh-books" className="scroll-mt-20 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">
                CURATED BOOK RECOMMENDATIONS · {whBooksRead.length} / {WORLD_HISTORY_BOOK_RECOMMENDATIONS.length} COMPLETED
              </span>
              <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                Ten Essential World History Books to Read Next
              </h3>
              <p className="text-slate-600 mt-1">
                Sequenced from the handbook&apos;s Select Bibliography across four thematic tracks—click any card to mark your reading progress.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Big Picture', 'Critical Method', 'Divergence & Trade', 'Climate & Ecology'] as const).map((track) => (
                <button
                  key={track}
                  onClick={() => setBookTrack(track)}
                  className={`px-2.5 py-1.5 rounded-md font-medium cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                    bookTrack === track
                      ? 'bg-sky-700 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {WORLD_HISTORY_BOOK_RECOMMENDATIONS.filter(
              (b) => bookTrack === 'All' || b.track === bookTrack
            ).map((book) => {
              const done = whBooksRead.includes(book.order);
              return (
                <button
                  key={book.order}
                  onClick={() => toggleWhBook(book.order)}
                  className={`text-left p-4 rounded-lg border transition-colors cursor-pointer flex items-start gap-3 ${
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
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-sky-700">
                      <span>{book.track}</span>
                      <span className="text-slate-500">{book.chapters}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                      {book.title}
                    </h4>
                    <span className="text-slate-500 block">{book.authorYear}</span>
                    <p className="text-slate-700 leading-relaxed pt-1">{book.whyRead}</p>
                    <p className="text-slate-600 pt-1 border-t border-slate-200/70">
                      <strong className="text-slate-900">Key takeaway:</strong> {book.keyTakeaway}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full 34-Work APA Bibliography */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-mono text-sky-700 font-semibold block">
                SELECT BIBLIOGRAPHY · {WORLD_HISTORY_BIBLIOGRAPHY.length} FOUNDATIONAL WORKS
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                Primary Historiographical References (APA Format)
              </h3>
            </div>
            <button
              onClick={() => setShowFullBib((prev) => !prev)}
              className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md cursor-pointer whitespace-nowrap shrink-0"
            >
              {showFullBib
                ? 'Collapse Bibliography'
                : `Show All ${WORLD_HISTORY_BIBLIOGRAPHY.length} References`}
            </button>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
            {visibleBib.map((ref, idx) => (
              <li key={idx} className="font-sans">
                · {ref}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </VolumeShell>
  );
};
