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
          Beta Testers Wanted
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Help Shape the Future of AI-Agent Monitoring
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Building AgentWatch — an API that tracks AI-agent activity across GitHub, Twitter, and Hacker News.
          Looking for 2-3 builders to test the flow and tell me what sucks.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-950">What You Get</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Lifetime 50% discount</strong> on any paid tier when we launch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Direct input</strong> on API design (I fix your pain points within 24h)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✅</span>
              <span><strong>Early access</strong> to new features before anyone else</span>
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
                <p className="font-medium">Sign up for free tier</p>
                <p className="text-sm text-slate-600">100 requests/month, no credit card needed</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">2</span>
              <div>
                <p className="font-medium">Make 5-10 API requests</p>
                <p className="text-sm text-slate-600">I'll send you examples + documentation</p>
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
                <p className="font-medium">~15 minutes total</p>
                <p className="text-sm text-slate-600">That's it. I respect your time.</p>
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
          <h2 className="text-2xl font-semibold text-slate-950">Ready to Test?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Pick your preferred way to reach out:
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
            I'll get back to you within 24h with API key + docs. No pressure if timing doesn't work!
          </p>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-lg font-semibold text-slate-950">Current Status</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
              <span className="text-sm text-slate-700">Production API live</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
              <span className="text-sm text-slate-700">Free tier: 100 req/mo</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
              <span className="text-sm text-slate-700">Idempotent ingestion</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">🚧</span>
              <span className="text-sm text-slate-700">API key auth (just shipped)</span>
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
            <a href="https://axiomlabs.systems" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-950">Live API</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
