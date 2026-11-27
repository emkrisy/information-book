import React from 'react';

export interface VolumeChapterLink {
  id: string;
  label: string;
}

interface VolumeShellProps {
  volumeLabel: string;
  title: string;
  subtitle: string;
  chapters: VolumeChapterLink[];
  pdfPath: string;
  pdfLabel: string;
  onJumpToChapter?: (chapterId: string) => void;
  children: React.ReactNode;
}

export const VolumeShell: React.FC<VolumeShellProps> = ({
  volumeLabel,
  title,
  subtitle,
  chapters,
  pdfPath,
  pdfLabel,
  onJumpToChapter,
  children,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (!id) return;
    if (onJumpToChapter) {
      onJumpToChapter(id);
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-start">
      {/* Quiet Box-Free Left Contents Rail on Wide Screens (Zero Bars/Capsules) */}
      <aside
        aria-label={`${volumeLabel} chapters`}
        className="hidden xl:block w-48 shrink-0 sticky top-24 space-y-5 text-xs"
      >
        <div className="space-y-1 pb-3 border-b border-slate-200">
          <span className="font-mono font-semibold text-sky-700 block">{volumeLabel}</span>
          <span className="font-semibold text-slate-900 block leading-snug">{title}</span>
        </div>

        <nav className="space-y-2">
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-slate-400 block">
            Contents
          </span>
          <ul className="space-y-1.5">
            {chapters.map((ch) => (
              <li key={ch.id}>
                <a
                  href={`#${ch.id}`}
                  className="block py-1 text-slate-600 hover:text-sky-700 transition-colors leading-snug"
                >
                  {ch.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-3 border-t border-slate-200">
          <a
            href={pdfPath}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-sky-700 hover:text-sky-900 hover:underline block"
          >
            {pdfLabel} →
          </a>
        </div>
      </aside>

      {/* Main Volume Content */}
      <div className="flex-1 min-w-0 w-full space-y-14">
        {/* Compact Inline Volume Meta + Chapter Dropdown for < xl Screens (No Stacked Bars) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-500 min-w-0">
            <span className="font-mono font-semibold text-sky-700 shrink-0">{volumeLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-slate-800 truncate">{subtitle}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="xl:hidden">
              <select
                aria-label="Jump to chapter"
                defaultValue=""
                onChange={handleSelectChange}
                className="px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 cursor-pointer"
              >
                <option value="" disabled>
                  Jump to chapter…
                </option>
                {chapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.label}
                  </option>
                ))}
              </select>
            </div>
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="xl:hidden font-medium text-sky-700 hover:underline whitespace-nowrap"
            >
              {pdfLabel}
            </a>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};
