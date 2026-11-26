import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';

interface GitHubPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPublishModal: React.FC<GitHubPublishModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('your-username');
  const [repoName, setRepoName] = useState('athletic-transformation-handbook');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const commands = `git init
git add .
git commit -m "Initial commit: 52-Week Athletic Transformation Handbook"
git branch -M main
git remote add origin https://github.com/${username || 'your-username'}/${repoName || 'athletic-transformation-handbook'}.git
git push -u origin main`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commands);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gh-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-xl max-w-xl w-full p-6 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="gh-modal-title" className="text-lg font-semibold text-slate-900">
              Publish to Your Personal GitHub Pages
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              This project includes <code className="font-mono text-slate-700">base: './'</code> in Vite and a ready-to-run{' '}
              <code className="font-mono text-slate-700">.github/workflows/deploy.yml</code> workflow.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label htmlFor="gh-user" className="font-medium text-slate-700 block mb-1">
              GitHub Username
            </label>
            <input
              id="gh-user"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>
          <div>
            <label htmlFor="gh-repo" className="font-medium text-slate-700 block mb-1">
              Repository Name
            </label>
            <input
              id="gh-repo"
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800">1. Create an empty repo on GitHub, then push:</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy commands'}
            </button>
          </div>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-3.5 text-xs font-mono overflow-x-auto leading-relaxed">
            {commands}
          </pre>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-lg p-3.5 text-xs text-sky-950 space-y-1.5">
          <p className="font-semibold">2. Enable GitHub Actions Pages Deployment:</p>
          <p>
            In your GitHub repository, open <strong>Settings → Pages → Build and deployment</strong> and change{' '}
            <strong>Source</strong> to <strong>GitHub Actions</strong>.
          </p>
          <p className="font-mono text-sky-800 pt-1">
            Live URL: https://{username || 'your-username'}.github.io/{repoName || 'athletic-transformation-handbook'}/
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sky-700 font-medium hover:underline"
          >
            Open github.com/new <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
