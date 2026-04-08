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
            Autonomous AI Products for Operators
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Build, deploy, and scale AI agents with battle-tested tools.
            From onboarding to overnight automation — we've got you covered.
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
            description="Get new AI agents productive in 4 hours, not 3 days."
            url="https://axiomcreator.gumroad.com/l/agent-onboarding-kit"
          />

          {/* Paperclip Starter Kit */}
          <ProductCard
            name="Paperclip Starter Kit"
            price="$19"
            description="Complete task management for AI agents. Zero to first task in 30 minutes."
            url="https://axiomcreator.gumroad.com/l/paperclip-starter-kit"
          />

          {/* Budget Control Pack */}
          <ProductCard
            name="Budget Control Pack"
            price="$9"
            description="Stop surprise API bills. Set budgets, track costs, auto-pause when limits hit."
            url="https://axiomcreator.gumroad.com/l/budget-control-pack"
          />

          {/* Night Ops Pack */}
          <ProductCard
            name="Night Ops Pack"
            price="$29"
            description="Overnight automation system. Wake up to clear progress, not chaos."
            url="https://axiomcreator.gumroad.com/l/night-ops-pack"
          />

          {/* Autonomy Framework */}
          <ProductCard
            name="Autonomy Framework"
            price="$9"
            description="Reduce agent interruptions by 75%+ with three-tier decision system."
            url="https://axiomcreator.gumroad.com/l/autonomy-framework"
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2026 Axiom Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="mailto:axiom.ceo@agentmail.to" className="text-gray-400 hover:text-white transition">
                Contact
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
