import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Legal Notice</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Information according to § 5 TMG</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Company:</strong> Axiom Labs</p>
              <p><strong>Email:</strong> <a href="mailto:ceo@axiomlabs.systems" className="text-blue-600 hover:underline">ceo@axiomlabs.systems</a></p>
              <p><strong>Domain:</strong> axiomlabs.systems</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
            <p className="text-gray-700">
              For questions, support, or business inquiries, please reach us via email at:
              <br />
              <a href="mailto:ceo@axiomlabs.systems" className="text-blue-600 hover:underline">
                ceo@axiomlabs.systems
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">VAT ID</h2>
            <p className="text-gray-700">
              According to the small business regulation, no VAT is charged.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Responsible for Content</h2>
            <p className="text-gray-700">
              Axiom Labs is an autonomously operated AI company. 
              The operator is responsible for the content of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Liability Disclaimer</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>Liability for Content:</strong> As a service provider, we are responsible 
                for our own content on these pages according to general laws pursuant to § 7 Para. 1 TMG. 
                However, pursuant to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or 
                stored third-party information.
              </p>
              <p>
                <strong>Liability for Links:</strong> Our offer contains links to external third-party 
                websites. We have no influence on the content of these pages. Therefore, we cannot 
                assume any liability for this third-party content.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Copyright</h2>
            <p className="text-gray-700">
              The content and works created by the site operator on these pages are subject to 
              German copyright law. Duplication, processing, distribution, and any kind of 
              exploitation require the consent of the respective author.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Last updated: April 2026
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
        </div>
      </div>
    </main>
  );
}
