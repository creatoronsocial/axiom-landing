import Link from 'next/link';

export default function AgentWatch() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            ← Back to home
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.12)]" />
              Production ready
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              AgentWatch API
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Live, verified signals from AI-agent activity. GitHub pushes, social mentions,
              and more — delivered via a simple REST API with usage-based pricing.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://agentwatch.axiomlabs.systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Try free tier
              </a>
              <a
                href="https://github.com/creatoronsocial/axiom-agentwatch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-950">Quickstart</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-medium text-slate-600">Free Request (no auth)</p>
              </div>
              <pre className="overflow-x-auto p-4 text-sm text-slate-800">
                <code>{`curl https://agentwatch.axiomlabs.systems/agent-watch/yesterday`}</code>
              </pre>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-medium text-slate-600">Today (requires API key)</p>
              </div>
              <pre className="overflow-x-auto p-4 text-sm text-slate-800">
                <code>{`curl https://agentwatch.axiomlabs.systems/agent-watch/today \\\n  -H "Authorization: Bearer aw_live_xxx"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-950">
          What You Get
        </h2>
        
        {/* Signal Examples */}
        <div className="mb-12">
          <h3 className="mb-4 text-lg font-semibold text-slate-950">Signal Examples</h3>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-medium text-slate-600">GitHub: New Agent Repo</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs text-slate-800">
                <code>{`{
  "id": "evt_gh_8kF3nQ",
  "source": "github",
  "type": "repo_created",
  "timestamp": "2026-04-14T10:30:00Z",
  "agent": "devon-agent",
  "data": {
    "repo": "creatoronsocial/devon",
    "url": "https://github.com/creatoronsocial/devon",
    "stars": 142,
    "description": "Autonomous coding agent for OpenClaw",
    "keywords": ["agent", "autonomous", "coding"]
  }
}`}</code>
              </pre>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-medium text-slate-600">Twitter/X: Agent Mention</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs text-slate-800">
                <code>{`{
  "id": "evt_tw_9mX2pL",
  "source": "twitter",
  "type": "mention",
  "timestamp": "2026-04-14T11:15:00Z",
  "agent": "openclaw",
  "data": {
    "tweet_id": "1234567890",
    "author": "@builder_dev",
    "text": "Just shipped my first agent with @openclaw - memory setup in 30 min!",
    "likes": 47,
    "retweets": 12,
    "sentiment": "positive"
  }
}`}</code>
              </pre>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-medium text-slate-600">Hacker News: Agent Discussion</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs text-slate-800">
                <code>{`{
  "id": "evt_hn_7vR4tY",
  "source": "hackernews",
  "type": "post",
  "timestamp": "2026-04-14T09:00:00Z",
  "agent": "ai-agent",
  "data": {
    "post_id": 39847562,
    "title": "Show HN: I built an autonomous agent that deploys itself",
    "url": "https://news.ycombinator.com/item?id=39847562",
    "points": 234,
    "comments": 67,
    "keywords": ["autonomous", "agent", "deployment"]
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-950">What You Can Do</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">📊</span>
                <h4 className="font-semibold text-slate-950">Agent Monitoring</h4>
              </div>
              <p className="text-sm text-slate-600">
                Track mentions, activity, and growth of your own AI agent projects across all platforms in one dashboard.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Example: "Show me all mentions of 'devon-agent' this week"
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">🔍</span>
                <h4 className="font-semibold text-slate-950">Competitive Intelligence</h4>
              </div>
              <p className="text-sm text-slate-600">
                Discover new agent projects, track competitor activity, and identify emerging patterns in the agent ecosystem.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Example: "What new agent repos were created this month?"
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">🎯</span>
                <h4 className="font-semibold text-slate-950">Lead Generation</h4>
              </div>
              <p className="text-sm text-slate-600">
                Find builders creating AI agents → reach out with tools, services, or partnerships.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Example: "Show me builders who shipped agents in the last 7 days"
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">📈</span>
                <h4 className="font-semibold text-slate-950">Trend Detection</h4>
              </div>
              <p className="text-sm text-slate-600">
                Spot emerging agent patterns, popular frameworks, and shifting community interest in real-time.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Example: "Which agent frameworks are trending this month?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Setup Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Wallet Setup for AI Agents
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            AgentWatch accepts USDC on Base Mainnet via x402. For AI agents, we recommend
            the CDP Server Wallet for automated, non-custodial payments.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-950">
                Option 1: CDP Server Wallet (Recommended for Agents)
              </h3>
              <ol className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">1</span>
                  <div>
                    <p className="font-medium">Install CDP SDK</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-800">
                      <code>npm install @coinbase/coinbase-sdk</code>
                    </pre>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">2</span>
                  <div>
                    <p className="font-medium">Create Server Wallet</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-800">
                      <code>{`import { Wallet } from '@coinbase/coinbase-sdk';\n\nconst wallet = await Wallet.create({\n  networkId: 'base-mainnet'\n});`}</code>
                    </pre>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">3</span>
                  <div>
                    <p className="font-medium">Fund with USDC</p>
                    <p className="mt-1 text-slate-600">
                      Bridge USDC to Base via{' '}
                      <a href="https://coinbase.com/bridge" className="text-sky-700 underline">Coinbase Bridge</a>{' '}
                      or{' '}
                      <a href="https://bungee.exchange" className="text-sky-700 underline">Bungee</a>.
                    </p>
                    <p className="mt-2 text-slate-600">
                      Revenue wallet: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">0x45A5...6D46</code>
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">4</span>
                  <div>
                    <p className="font-medium">Make x402 Payment</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-800">
                      <code>{`const payment = await wallet.createTransfer({\n  amount: "0.01",\n  tokenId: "usdc",\n  destination: "0x45A5254593a1a327B5644b498D22228b40EC6D46"\n});`}</code>
                    </pre>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-950">
                Option 2: Standard Wallet (MetaMask, Coinbase Wallet)
              </h3>
              <ol className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">1</span>
                  <div>
                    <p className="font-medium">Add Base Mainnet to Wallet</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-800">
                      <code>{`Network: Base Mainnet\nChain ID: 8453\nRPC: https://mainnet.base.org\nCurrency: ETH`}</code>
                    </pre>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">2</span>
                  <div>
                    <p className="font-medium">Add USDC Token</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-800">
                      <code>{`Contract: 0x833589fCD6eDb6E08f4c7C32D4f71d54bdA488d6\nSymbol: USDC\nDecimals: 6`}</code>
                    </pre>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">3</span>
                  <div>
                    <p className="font-medium">Get USDC on Base</p>
                    <ul className="mt-1 list-disc pl-5 text-slate-600">
                      <li>Buy on Coinbase, send to Base</li>
                      <li>Bridge from Ethereum via official bridge</li>
                      <li>Use DEX aggregator (Bungee, Li.Fi)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">4</span>
                  <div>
                    <p className="font-medium">Pay via x402</p>
                    <p className="mt-1 text-slate-600">
                      When you hit a paid endpoint, the 402 response includes
                      payment requirements. Sign and submit to unlock access.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-6">
            <p className="text-sm font-medium text-sky-900">
              <strong>Tip:</strong> For production AI agents, use CDP Server Wallet with API key auth.
              For testing or one-off payments, use x402 with any Base-compatible wallet.
            </p>
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-950">
          API Reference
        </h2>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">GET</span>
                <code className="text-sm text-slate-800">/agent-watch/yesterday</code>
                <span className="rounded-md bg-slate-200 px-2 py-1 text-xs text-slate-600">Free</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">Get aggregated signals from yesterday. No authentication required.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">GET</span>
                <code className="text-sm text-slate-800">/agent-watch/today</code>
                <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">API Key</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">Get today's live signals. Requires API key or x402 payment.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">GET</span>
                <code className="text-sm text-slate-800">/agent-watch/archive</code>
                <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">API Key</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">Get historical signals. Requires API key or x402 payment.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">GET</span>
                <code className="text-sm text-slate-800">/health</code>
                <span className="rounded-md bg-slate-200 px-2 py-1 text-xs text-slate-600">Public</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">Health check endpoint. Returns service status and readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Ready to try AgentWatch?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start with 100 free requests per month. No credit card required.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://agentwatch.axiomlabs.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Get API Key
            </a>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/90">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Axiom Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:ceo@axiomlabs.systems" className="transition hover:text-slate-950">
              Contact
            </a>
            <a href="/impressum" className="transition hover:text-slate-950">
              Impressum
            </a>
            <a href="/datenschutz" className="transition hover:text-slate-950">
              Datenschutz
            </a>
            <a href="https://github.com/creatoronsocial/axiom-agentwatch" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-950">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
