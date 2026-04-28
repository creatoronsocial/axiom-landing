import Link from 'next/link';

export default function BetaTesters() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            ← Back to home
          </Link>
        </div>

        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-sm text-amber-700">
          <span className="text-lg">🧪</span>
          Next Small Beta Wave
          <span className="ml-2 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold">2-3 builders in queue</span>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Help Shape the Next AgentWatch Wave
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Building AgentWatch, a recovery-gated API for AI-agent activity signals across GitHub, Twitter, and Hacker News.
          One real x402 paid production proof already exists, and I am lining up 2-3 builders for the next small onboarding wave once the current redeploy + verification gate clears.
        </p>

        <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <strong>📍 One real x402 paid production proof exists</strong> — broader onboarding resumes after the current redeploy and verification pass.
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-950">What You Get</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Lifetime 50% discount</strong> on any paid tier when the broader rollout opens</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Direct input</strong> on API design (I fix your pain points within 24h)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Priority access</strong> to the next small wave and the features shaped by it</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Good karma</strong> for helping a fellow builder 😊</span>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-950">What I Need From You</h2>
          <ol className="mt-4 space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">1</span>
              <div>
                <p className="font-medium">Join the next small onboarding wave</p>
                <p className="text-sm text-slate-600">I&apos;ll confirm fit and queue position while the recovery gate clears</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">2</span>
              <div>
                <p className="font-medium">Make 5-10 API requests once access opens</p>
                <p className="text-sm text-slate-600">I&apos;ll send examples + documentation when onboarding resumes</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">3</span>
              <div>
                <p className="font-medium">Tell me what sucked</p>
                <p className="text-sm text-slate-600">UX, docs, errors, whatever — brutally honest feedback</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">4</span>
              <div>
                <p className="font-medium">~15 minutes once access is open</p>
                <p className="text-sm text-slate-600">Small, focused feedback beats broad beta churn.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-sky-200 bg-sky-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-950">What is AgentWatch?</h2>
          <p className="mt-4 text-slate-700">
            AgentWatch delivers structured JSON events about AI-agent activity from multiple sources:
          </p>
          
          <div className="mt-4 space-y-3">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-2">
                <p className="text-xs font-medium text-slate-600">🐙 GitHub: New Agent Repo</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs text-slate-800">
                <code>{`{"source": "github", "type": "repo_created", "agent": "devon-agent", "repo": "creatoronsocial/devon", "stars": 142}`}</code>
              </pre>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-2">
                <p className="text-xs font-medium text-slate-600">𝕏 Twitter: Agent Mention</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs text-slate-800">
                <code>{`{"source": "twitter", "type": "mention", "agent": "openclaw", "author": "@builder_dev", "text": "Just shipped!", "likes": 47, "sentiment": "positive"}`}</code>
              </pre>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-2">
                <p className="text-xs font-medium text-slate-600">📰 Hacker News: Discussion</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs text-slate-800">
                <code>{`{"source": "hackernews", "type": "post", "agent": "ai-agent", "title": "Show HN: Autonomous agent", "points": 234, "comments": 67}`}</code>
              </pre>
            </div>
          </div>

          <p className="mt-6 text-slate-700">
            <strong>Use cases:</strong> Monitor your agent's traction, track competitor launches, 
            find builders for partnerships, spot trending patterns.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-950">Want In on the Next Small Wave?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Share your workflow and I&apos;ll queue the next 2-3 builders once the recovery gate clears:
          </p>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <a
              href="https://twitter.com/s1mCH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center transition hover:border-sky-300 hover:shadow-lg"
            >
              <span className="text-3xl">🐦</span>
              <p className="mt-3 font-semibold text-slate-950">Twitter DM</p>
              <p className="text-sm text-slate-600">@s1mCH1</p>
            </a>

            <a
              href="mailto:ceo@axiomlabs.systems?subject=AgentWatch Beta Tester"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center transition hover:border-sky-300 hover:shadow-lg"
            >
              <span className="text-3xl">📧</span>
              <p className="mt-3 font-semibold text-slate-950">Email</p>
              <p className="text-sm text-slate-600">ceo@axiomlabs.systems</p>
            </a>

            <a
              href="https://github.com/creatoronsocial/axiom-agentwatch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center transition hover:border-sky-300 hover:shadow-lg"
            >
              <span className="text-3xl">🐙</span>
              <p className="mt-3 font-semibold text-slate-950">GitHub Issue</p>
              <p className="text-sm text-slate-600">Comment on repo</p>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            I&apos;ll reply within 24h to confirm fit and queue status. Access details go out after the current recovery gate clears.
          </p>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-lg font-semibold text-slate-950">Current Status</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
              <span className="text-sm text-slate-700">One real x402 paid production proof exists</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
              <span className="text-sm text-slate-700">Paid-proof artifact is ready to cite</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">🚧</span>
              <span className="text-sm text-slate-700">Broader onboarding waits for redeploy + verification</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">🚧</span>
              <span className="text-sm text-slate-700">Next wave stays intentionally small</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-slate-200/80 bg-white/90">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Axiom Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/" className="transition hover:text-slate-950">Home</a>
            <a href="/agentwatch" className="transition hover:text-slate-950">AgentWatch</a>
            <a href="https://axiomlabs.systems" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-950">AgentWatch overview</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
