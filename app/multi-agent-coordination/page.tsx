import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Multi-Agent Coordination Pack | Axiom Labs',
  description:
    'Run 2+ OpenClaw agents without chaos. Roles, handoffs, workspace locks, and escalation rules for shared OpenClaw workspaces. Now live on Claw Mart.',
};

const pillars = [
  {
    icon: '🧭',
    title: 'Role lanes',
    description: 'Each agent gets a distinct lane so builder, reviewer, and specialist work stops overlapping blindly.',
  },
  {
    icon: '🤝',
    title: 'Strict handoffs',
    description: 'Every handoff includes goal, files touched, risks, and the exact next action.',
  },
  {
    icon: '🔒',
    title: 'Workspace locks',
    description: 'File, branch, and review locks reduce collisions before they turn into messy merges.',
  },
];

const benefits = [
  {
    title: 'Less duplicated work',
    description: 'Agents stop rediscovering ownership and redoing each other’s tasks.',
  },
  {
    title: 'Cleaner reviews',
    description: 'Builders build, reviewers verify, and conflicts surface before release time.',
  },
  {
    title: 'Resumable execution',
    description: 'Checkpoint rules make interrupted multi-agent work easy to recover.',
  },
];

export default function MultiAgentCoordinationPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.18),transparent_42%),radial-gradient(circle_at_75%_20%,rgba(111,224,255,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7faff_44%,#ffffff_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur md:px-6">
          <Link href="/">
            <p className="text-sm font-semibold tracking-[0.22em] text-slate-900 uppercase">Axiom Labs</p>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/#products" className="transition hover:text-slate-950">
              Products
            </Link>
            <Link href="/#agentwatch" className="transition hover:text-slate-950">
              AgentWatch
            </Link>
            <a href="mailto:ceo@axiomlabs.systems" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>
        </header>

        <div className="relative grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50/80 px-4 py-2 text-sm text-emerald-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.12)]" />
              Live on Claw Mart
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
              Multi-Agent Coordination Pack
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Run 2+ OpenClaw agents without chaos. Roles, handoffs, locks, and escalation rules that keep shared workspaces legible.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">$29</span>
              <span className="text-sm text-slate-500">One-time purchase</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.shopclawmart.com/listings/multi-agent-coordination-pack-run-2-openclaw-agents-without-chaos-5f8849b1"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Buy on Claw Mart
              </a>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                Back to products
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,124,255,0.24),rgba(77,124,255,0))] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(244,248,255,0.88))] p-5 shadow-[0_30px_90px_rgba(76,94,129,0.16)] backdrop-blur">
              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.05),rgba(255,255,255,0.55)_34%,rgba(255,255,255,0.05)_62%)]" />
              <div className="relative rounded-[1.6rem] border border-slate-100 bg-white/90 p-5 shadow-inner shadow-slate-100/80">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Coordination model</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Three clean pillars</h2>
                  </div>
                  <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                    Shared workspace
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <PillarStep icon="🧭" title="Assign lanes" status="Roles" />
                  <div className="mx-auto h-6 w-px bg-slate-200" />
                  <PillarStep icon="🤝" title="Pass context cleanly" status="Handoffs" />
                  <div className="mx-auto h-6 w-px bg-slate-200" />
                  <PillarStep icon="🔒" title="Protect active work" status="Locks" />
                </div>

                <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
                  <p className="text-sm font-medium text-amber-800">
                    When ownership overlaps, stop and escalate. Parallel speed is only real when lanes stay clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Roles, handoffs, locks.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            The pack gives every agent a lane, forces explicit context transfer, and defines when to stop instead of colliding.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                <span className="text-lg">{pillar.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Benefits</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            What operators get.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50/50 p-8 shadow-[0_25px_80px_rgba(245,158,11,0.08)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Early access status</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Not yet published on ClawHub.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The pack is now publicly available on Claw Mart. Buy the live listing there, while the rest of the shelf stays in early access until each pack is individually published.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.shopclawmart.com/listings/multi-agent-coordination-pack-run-2-openclaw-agents-without-chaos-5f8849b1"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Buy on Claw Mart
            </a>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-white/90">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Axiom Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:ceo@axiomlabs.systems" className="transition hover:text-slate-950">
              Contact
            </a>
            <Link href="/impressum" className="transition hover:text-slate-950">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:text-slate-950">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PillarStep({ icon, title, status }: { icon: string; title: string; status: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
        <span className="text-sm">{icon}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-slate-950">{title}</p>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
