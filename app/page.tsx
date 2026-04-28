import Link from 'next/link';

const apiProducts = [
  {
    name: 'AgentWatch',
    kind: 'API',
    price: 'Recovery-gated beta',
    description:
      'One real x402 paid proof exists already. Broader onboarding resumes after redeploy + verification, with the next wave kept intentionally small.',
    url: '/agentwatch',
    cta: 'Learn more',
    featured: true,
  },
];

const skillProducts = [
  {
    name: 'Memory & Recall Pack',
    kind: 'Skill pack',
    price: '$19',
    description:
      'Markdown-first memory hygiene for OpenClaw agents. Faster restarts, better recall, less context drag between sessions.',
    url: 'https://www.shopclawmart.com/listings/memory-recall-pack-ae4e2332',
    cta: 'Buy on Claw Mart',
  },
  {
    name: 'Agent Onboarding Kit',
    kind: 'Skill pack',
    price: '$19',
    description:
      'Get your agents up and running in 30 minutes instead of 3 days. Memory setup, Paperclip integration, task queues, pre-configured for your workspace.',
    url: 'https://www.shopclawmart.com/listings/agent-onboarding-kit-new-agents-in-4-hours-24b1b32c',
    cta: 'Buy on Claw Mart',
  },
  {
    name: 'Paperclip Starter Kit',
    kind: 'Skill pack',
    price: '$19',
    description:
      'Complete task management for OpenClaw agents. Zero to first task in 30 minutes, including queue discipline and progress tracking.',
    url: 'https://shopclawmart.com/best/productivity-skills',
  },
  {
    name: 'Budget Control Pack',
    kind: 'Skill pack',
    price: '$9',
    description:
      'Stop surprise OpenClaw API bills. Set budgets, track costs per agent, and auto-pause when limits hit.',
    url: 'https://shopclawmart.com/best/engineering-skills',
  },
  {
    name: 'Night Ops Pack',
    kind: 'Skill pack',
    price: '$29',
    description:
      'Overnight automation for OpenClaw. Queue discipline, morning briefings, and wake-up-to-progress workflows.',
    url: 'https://shopclawmart.com/best/productivity-skills',
  },
  {
    name: 'Autonomy Framework',
    kind: 'Skill pack',
    price: '$9',
    description:
      'Reduce OpenClaw interruptions by 75%+. A three-tier decision system for act, report, and ask.',
    url: 'https://shopclawmart.com/best/productivity-skills',
  },
  {
    name: 'Testing & Quality Gates Pack',
    kind: 'Skill pack',
    price: '$19',
    description:
      'Zero broken commits from agents. Enforces lint → test → review quality gates before any agent change lands.',
    url: 'https://www.shopclawmart.com/listings/testing-quality-gates-pack-zero-broken-commits-from-agents-d7429f27',
    cta: 'Buy on Claw Mart',
  },
  {
    name: 'Multi-Agent Coordination Pack',
    kind: 'Skill pack',
    price: '$29',
    description:
      'Run 2+ OpenClaw agents without chaos. Adds roles, handoffs, locks, and escalation rules for shared workspaces.',
    url: 'https://www.shopclawmart.com/listings/multi-agent-coordination-pack-run-2-openclaw-agents-without-chaos-5f8849b1',
    cta: 'Buy on Claw Mart',
  },
  {
    name: 'Client Switching Pack',
    kind: 'Skill pack',
    price: '$19',
    description:
      'Switch client context cleanly without dragging stale assumptions across accounts. Gives operators a repeatable reset between agency-mode engagements.',
    url: 'https://www.shopclawmart.com/listings/client-switching-pack-agency-mode-67d76e58',
    cta: 'Buy on Claw Mart',
  },
  {
    name: 'Task Intake & Scoping Pack',
    kind: 'Skill pack',
    price: '$19',
    description:
      'Stop agents from wasting time on ambiguous tasks. Clean intake forms, clarity scoring, and before/after examples that turn fuzzy requests into executable work.',
    url: 'https://www.shopclawmart.com/listings/task-intake-scoping-pack-1af96426',
    cta: 'Buy on Claw Mart',
  },
];

const proofPoints = [
  {
    value: 'Live',
    label: 'Built around working operator flows, not speculative prompt packs.',
  },
  {
    value: 'Fast',
    label: 'Installable, small-scope products designed to pay back in the first session.',
  },
  {
    value: 'Credible',
    label: 'Clear proof language, restrained claims, and products that stay close to reality.',
  },
];

const principles = [
  {
    icon: '✦',
    title: 'Claw-native by design',
    description: 'Every pack is shaped around OpenClaw workflows, memory, delegation, and durable operations.',
  },
  {
    icon: '◌',
    title: 'Quietly premium details',
    description: 'Sharper hierarchy, calmer spacing, and cleaner defaults that make operator tools feel serious.',
  },
  {
    icon: '↗',
    title: 'Built for momentum',
    description: 'Products are deliberately compact so operators can ship faster instead of managing complexity.',
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.18),transparent_42%),radial-gradient(circle_at_75%_20%,rgba(111,224,255,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7faff_44%,#ffffff_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur md:px-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-slate-900 uppercase">Axiom Labs</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#products" className="transition hover:text-slate-950">
              Products
            </a>
            <a href="#agentwatch" className="transition hover:text-slate-950">
              AgentWatch
            </a>
            <a href="#pricing" className="transition hover:text-slate-950">
              Status
            </a>
            <a href="#why" className="transition hover:text-slate-950">
              Why us
            </a>
          </nav>
        </header>

        <div className="relative grid flex-1 items-center gap-18 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.12)]" />
              Proof-backed products for AI operators
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
              Clean operator tools, with one sharp edge that makes them memorable.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Axiom Labs builds bright, credible OpenClaw products for operators who want more leverage, less setup friction, and better defaults from day one.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Browse products
              </a>
              <a
                href="#agentwatch"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                AgentWatch
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.value} className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{point.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{point.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,124,255,0.24),rgba(77,124,255,0))] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(244,248,255,0.88))] p-5 shadow-[0_30px_90px_rgba(76,94,129,0.16)] backdrop-blur">
              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.05),rgba(255,255,255,0.55)_34%,rgba(255,255,255,0.05)_62%)]" />
              <div className="relative rounded-[1.6rem] border border-slate-100 bg-white/90 p-5 shadow-inner shadow-slate-100/80">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Standout preview</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Operator Signal Prism</h2>
                  </div>
                  <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                    Memorable by design
                  </span>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-slate-100 bg-[radial-gradient(circle_at_top,#ffffff_0%,#eef5ff_45%,#eef2ff_100%)] p-5">
                  <div className="signal-prism mx-auto mb-6">
                    <div className="signal-prism__ring signal-prism__ring--outer" />
                    <div className="signal-prism__ring signal-prism__ring--middle" />
                    <div className="signal-prism__ring signal-prism__ring--inner" />
                    <div className="signal-prism__core">
                      <span />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <Metric label="Signal clarity" value="97%" />
                    <Metric label="Setup drag" value="Low" />
                    <Metric label="Operator feel" value="Premium" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <DetailPill eyebrow="Texture" text="Subtle glass, soft depth, and tighter contrast without drifting into SaaS cliché." />
                  <DetailPill eyebrow="Intent" text="One visual signature, then disciplined typography and spacing everywhere else." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agentwatch" className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">AgentWatch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Recovery-gated beta for AI-agent signals.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            AgentWatch tracks AI-agent activity across GitHub, X, and other sources. One real x402 paid proof exists already, but broader onboarding resumes only after the current redeploy + verification pass is green.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <span className="text-lg">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Recovery gate still active</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              An authenticated Vercel redeploy and live verification still need to clear before broader production access is described as open.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <span className="text-lg">🔐</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Paid boundary already proven</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              One real x402 paid proof exists already. That proves the paid path without pretending broad self-serve onboarding is open yet.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <span className="text-lg">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Next wave stays small</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Broader onboarding follows redeploy + verification, then reopens deliberately in a small builder wave instead of broad self-serve.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/agentwatch"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            AgentWatch Details
          </Link>
          <a
            href="https://agentwatch.axiomlabs.systems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
          >
            View current API surface
          </a>
        </div>
      </section>

      <section id="pricing" className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Recovery Window</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Truthful status before broader rollout.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Self-serve onboarding and broad pricing claims stay paused until the redeploy + verification gate is green.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-950">Public self-serve</h3>
              <p className="mt-2 text-sm text-slate-600">Paused during the recovery gate</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-slate-950">Paused</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Authenticated Vercel redeploy still required
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Post-deploy verification must pass cleanly
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                `AGENTWATCH_SELF_SERVE_BETA_OPEN` stays false by default
              </li>
            </ul>
            <Link
              href="/agentwatch"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Review current status
            </Link>
          </div>

          <div className="relative rounded-[1.75rem] border-2 border-sky-300 bg-[linear-gradient(180deg,#ffffff_0%,#f3f8ff_100%)] p-8 shadow-[0_24px_70px_rgba(59,130,246,0.15)]">
            <div className="absolute -top-3 right-6 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Already real
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-950">Paid path proof</h3>
              <p className="mt-2 text-sm text-slate-600">Truth that is already established</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-slate-950">1 real</span>
              <span className="text-slate-600"> x402 run</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Production paid proof artifact already exists
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Real buyer evidence for the paid boundary
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Supports launch narrative without reopening self-serve
              </li>
            </ul>
            <Link
              href="/agentwatch"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              View AgentWatch details
            </Link>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-950">Broader onboarding</h3>
              <p className="mt-2 text-sm text-slate-600">What happens after the gate clears</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-slate-950">After</span>
              <span className="text-slate-600"> verification</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Reopens only after redeploy + verification pass
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                The next builder wave stays intentionally small
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                Pricing and access copy updates after recovery is green
              </li>
            </ul>
            <a
              href="mailto:ceo@axiomlabs.systems"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Join the next wave
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm font-medium text-slate-900">
            Need to be in the first post-recovery builder wave? <a href="mailto:ceo@axiomlabs.systems" className="text-sky-700 underline hover:text-sky-800">Email Axiom Labs</a> and mention AgentWatch.
          </p>
        </div>
      </section>

      <section id="products" className="relative mx-auto w-full max-w-7xl px-6 py-22 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Products</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Small products that make operators noticeably faster.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            AgentWatch is the API product. Three live Claw Mart listings sit alongside early-access packs, keeping the shelf simple while still reflecting what is already real.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                API
              </span>
              <p className="text-sm text-slate-500">Recovery-gated API with one real x402 paid proof and a deliberately small next onboarding wave.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {apiProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                Skill packs
              </span>
              <p className="text-sm text-slate-500">Installable operator packs for OpenClaw workflows, memory, delegation, and control.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Why Axiom Labs</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Premium enough to stand out, restrained enough to stay believable.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="group rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white shadow-[0_12px_30px_rgba(15,23,42,0.15)] transition group-hover:scale-105">
                  {principle.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{principle.description}</p>
              </div>
            ))}
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
            <a href="/impressum" className="transition hover:text-slate-950">
              Impressum
            </a>
            <a href="/datenschutz" className="transition hover:text-slate-950">
              Datenschutz
            </a>
            <a href="https://twitter.com/axiomlabs" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-950">
              Twitter
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

function ProductCard({
  name,
  price,
  description,
  url,
  cta = 'Get started',
  featured = false,
  kind,
}: {
  name: string;
  price: string;
  description: string;
  url: string;
  cta?: string;
  featured?: boolean;
  kind?: string;
}) {
  return (
    <article
      className={`group rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${
        featured
          ? 'border-sky-200 bg-[linear-gradient(180deg,#ffffff_0%,#f3f8ff_100%)] shadow-[0_20px_60px_rgba(59,130,246,0.12)]'
          : 'border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)]'
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {featured ? (
                <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
                  Featured
                </span>
              ) : null}
              {kind ? (
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                  {kind}
                </span>
              ) : null}
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{name}</h3>
          </div>
        </div>

        {featured ? (
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-full bg-sky-600 px-3 py-1 text-sm font-semibold text-white">
              {price}
            </span>
          </div>
        ) : (
          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {price}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition ${
          featured
            ? 'bg-slate-950 text-white hover:bg-slate-800'
            : 'border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
        }`}
      >
        {cta}
      </a>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function DetailPill({ eyebrow, text }: { eyebrow: string; text: string }) {
  return (
    <div className="rounded-[1.25rem] border border-slate-100 bg-slate-50/80 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">{eyebrow}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
