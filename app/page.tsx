const AGENTWATCH_CARD = {
  name: 'AgentWatch',
  status: 'Proof-backed preview',
  description:
    'Live, testable API for AI-agent signals. Free route and unpaid paid-route denial are already proven on production. The final paid proof is still an approval-gated single request, so this stays framed as a proof-backed preview for now.',
  url: 'https://github.com/creatoronsocial/axiom-agentwatch',
  cta: 'Review AgentWatch',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Axiom Labs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            OpenClaw Products for AI Operators
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Battle-tested skill packs for OpenClaw agents.
            From Paperclip task management to overnight automation — install in minutes, not days.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
            >
              Browse Products
            </a>
            <a
              href="https://github.com/axiomlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* AgentWatch */}
          <ProductCard
            name={AGENTWATCH_CARD.name}
            price={AGENTWATCH_CARD.status}
            description={AGENTWATCH_CARD.description}
            url={AGENTWATCH_CARD.url}
            cta={AGENTWATCH_CARD.cta}
          />

          {/* Agent Onboarding Kit */}
          <ProductCard
            name="Agent Onboarding Kit"
            price="$9"
            description="New OpenClaw agents productive in 4 hours. Memory setup, Paperclip integration, task queues — pre-configured for your workspace."
            url="https://buy.stripe.com/14A8wP2wMat0fgS1HidAk06"
          />

          {/* Paperclip Starter Kit */}
          <ProductCard
            name="Paperclip Starter Kit"
            price="$19"
            description="Complete task management for OpenClaw agents. Zero to first task in 30 minutes. Includes queue discipline and progress tracking."
            url="https://buy.stripe.com/bJe4gzc7mdFc1q285GdAk07"
          />

          {/* Budget Control Pack */}
          <ProductCard
            name="Budget Control Pack"
            price="$9"
            description="Stop surprise OpenClaw API bills. Set budgets, track costs per agent, auto-pause when limits hit. Works with Ollama, Claude, and more."
            url="https://buy.stripe.com/cNidR9gnC30y2u61HidAk08"
          />

          {/* Night Ops Pack */}
          <ProductCard
            name="Night Ops Pack"
            price="$29"
            description="Overnight automation for OpenClaw. Queue discipline, morning briefings, wake-up-to-progress workflows. Your agent works while you sleep."
            url="https://buy.stripe.com/6oU8wPefu9oWc4G99KdAk09"
          />

          {/* Autonomy Framework */}
          <ProductCard
            name="Autonomy Framework"
            price="$9"
            description="Reduce OpenClaw interruptions by 75%+. Three-tier decision system: act, report, ask. Configurable trust boundaries for your agent."
            url="https://buy.stripe.com/dRmfZh0oE8kS1q22LmdAk0a"
          />

        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Why Axiom Labs?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🦞</div>
              <h3 className="font-semibold mb-2 text-gray-900">Clawmart Native</h3>
              <p className="text-gray-600 text-sm">All products optimized for OpenClaw. One-click install via Clawmart API.</p>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2 text-gray-900">Battle Tested</h3>
              <p className="text-gray-600 text-sm">Every pack runs in production. Real workflows, not theoretical prompts.</p>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold mb-2 text-gray-900">Operator Built</h3>
              <p className="text-gray-600 text-sm">Created by OpenClaw operators for OpenClaw operators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2026 Axiom Labs. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:ceo@axiomlabs.systems" className="text-gray-500 hover:text-gray-900 transition">
                Contact
              </a>
              <a href="/impressum" className="text-gray-500 hover:text-gray-900 transition">
                Impressum
              </a>
              <a href="/datenschutz" className="text-gray-500 hover:text-gray-900 transition">
                Datenschutz
              </a>
              <a href="https://twitter.com/axiomlabs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition">
                Twitter
              </a>
              <a href="https://github.com/axiomlabs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ name, price, description, url, cta = 'Get Started' }: {
  name: string;
  price: string;
  description: string;
  url: string;
  cta?: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition border border-gray-200 shadow-sm hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <span className="text-blue-600 font-bold">{price}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
      >
        {cta}
      </a>
    </div>
  );
}
