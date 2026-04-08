export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Axiom Labs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            OpenClaw Products for AI Operators
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Battle-tested skill packs for OpenClaw agents.
            From Paperclip task management to overnight automation — install in minutes, not days.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              Browse Products
            </a>
            <a
              href="https://github.com/axiomlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Agent Onboarding Kit */}
          <ProductCard
            name="Agent Onboarding Kit"
            price="$9"
            description="New OpenClaw agents productive in 4 hours. Memory setup, Paperclip integration, task queues — pre-configured for your workspace."
            url="https://www.shopclawmart.com/listings/agent-onboarding-kit-new-agents-in-4-hours-24b1b32c"
          />

          {/* Paperclip Starter Kit */}
          <ProductCard
            name="Paperclip Starter Kit"
            price="$19"
            description="Complete task management for OpenClaw agents. Zero to first task in 30 minutes. Includes queue discipline and progress tracking."
            url="https://www.shopclawmart.com/listings/paperclip-starter-kit-task-management-for-ai-agents-2d0e602e"
          />

          {/* Budget Control Pack */}
          <ProductCard
            name="Budget Control Pack"
            price="$9"
            description="Stop surprise OpenClaw API bills. Set budgets, track costs per agent, auto-pause when limits hit. Works with Ollama, Claude, and more."
            url="https://www.shopclawmart.com/listings/budget-control-pack-stop-surprise-api-bills-83773330"
          />

          {/* Night Ops Pack */}
          <ProductCard
            name="Night Ops Pack"
            price="$29"
            description="Overnight automation for OpenClaw. Queue discipline, morning briefings, wake-up-to-progress workflows. Your agent works while you sleep."
            url="https://www.shopclawmart.com/listings/night-ops-pack-overnight-queue-discipline-for-openclaw-2919e491"
          />

          {/* Autonomy Framework */}
          <ProductCard
            name="Autonomy Framework"
            price="$9"
            description="Reduce OpenClaw interruptions by 75%+. Three-tier decision system: act, report, ask. Configurable trust boundaries for your agent."
            url="https://www.shopclawmart.com/listings/autonomy-framework-when-to-act-when-to-report-when-to-ask-596b6044"
          />

        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Axiom Labs?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🦞</div>
              <h3 className="font-semibold mb-2">Clawmart Native</h3>
              <p className="text-gray-400 text-sm">All products optimized for OpenClaw. One-click install via Clawmart API.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Battle Tested</h3>
              <p className="text-gray-400 text-sm">Every pack runs in production. Real workflows, not theoretical prompts.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold mb-2">Operator Built</h3>
              <p className="text-gray-400 text-sm">Created by OpenClaw operators for OpenClaw operators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2026 Axiom Labs. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:ceo@axiomlabs.systems" className="text-gray-400 hover:text-white transition">
                Contact
              </a>
              <a href="/impressum" className="text-gray-400 hover:text-white transition">
                Impressum
              </a>
              <a href="/datenschutz" className="text-gray-400 hover:text-white transition">
                Datenschutz
              </a>
              <a href="https://twitter.com/axiomlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="https://github.com/axiomlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ name, price, description, url }: {
  name: string;
  price: string;
  description: string;
  url: string;
}) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition border border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-blue-400 font-bold">{price}</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
      >
        Get Started
      </a>
    </div>
  );
}
