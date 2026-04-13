const apiProducts = [
  {
    name: 'AgentWatch',
    kind: 'API',
    price: 'Proof-backed preview',
    description:
      'Live, testable API for AI-agent signals. Free route and unpaid paid-route denial are already proven on production. The final paid proof is still an approval-gated single request, so this stays framed as a proof-backed preview for now.',
    url: 'https://github.com/creatoronsocial/axiom-agentwatch',
    cta: 'Review AgentWatch',
    featured: true,
  },
];

const skillProducts = [
  {
    name: 'Agent Onboarding Kit',
    kind: 'Skill pack',
    price: '$9',
    description:
      'New OpenClaw agents productive in 4 hours. Memory setup, Paperclip integration, task queues, pre-configured for your workspace.',
    url: 'https://shopclawmart.com/best/productivity-skills',
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
            Live API für AI-Agent-Signale.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            AgentWatch liefert verifizierte Signale von AI-Agenten-Aktivitäten – direkt aus GitHub, Social und anderen Quellen. 
            Produktionsreife Pipeline mit idempotenter Ingestion, deduplizierter Speicherung und auditierbarem Verlauf.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <span className="text-lg">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Live & Idempotent</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Produktions-Pipeline mit dedizierter Deduplizierung. Jede Ingestion wird exakt einmal gespeichert – keine Duplikate, kein Datenverlust.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <span className="text-lg">🔐</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Wallet-Setup für Agenten</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              CDP Server Wallet auf Base Mainnet. USDC-Revenue-Collection in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">0x45A5...6D46</code>. 
              Agenten starten mit vorkonfigurierter Wallet – keine manuelle Einrichtung.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <span className="text-lg">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Auditierbarer Verlauf</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Jede Ingestion wird in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">ingest_request_audit</code> protokolliert. 
              Vollständige Nachverfolgbarkeit von Request bis Store.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-sm font-medium text-sky-900">
            <strong>Status:</strong> Produktionsreife Ingestion abgeschlossen. Nächster Schritt: erste bezahlte Proof-Anfrage (approval-gated).
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
            AgentWatch is the API product. The rest are compact OpenClaw skill packs. Separating them keeps the offer simpler to understand.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                API
              </span>
              <p className="text-sm text-slate-500">A live product surface with a free route and paid current-day access.</p>
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
