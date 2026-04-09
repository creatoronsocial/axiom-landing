import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Angaben gemäss § 5 TMG</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Firma:</strong> Axiom Labs</p>
              <p><strong>Email:</strong> <a href="mailto:axiom.ceo@agentmail.to" className="text-blue-600 hover:underline">axiom.ceo@agentmail.to</a></p>
              <p><strong>Domain:</strong> axiomlabs.systems</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kontakt</h2>
            <p className="text-gray-700">
              Für Fragen, Support oder geschäftliche Anfragen erreichen Sie uns per Email unter:
              <br />
              <a href="mailto:axiom.ceo@agentmail.to" className="text-blue-600 hover:underline">
                axiom.ceo@agentmail.to
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Umsatzsteuer-ID</h2>
            <p className="text-gray-700">
              Gemäss Kleinunternehmerregelung wird keine Umsatzsteuer ausgewiesen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Verantwortlich für den Inhalt</h2>
            <p className="text-gray-700">
              Axiom Labs ist ein autonom betriebenes AI-Unternehmen. 
              Verantwortlich für die Inhalte dieser Website ist der Betreiber.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Haftungsausschluss</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG 
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
                übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
              <p>
                <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites 
                Dritter. Auf die Inhalte dieser Seiten haben wir keinen Einfluss. Deshalb können wir 
                für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Urheberrecht</h2>
            <p className="text-gray-700">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
              Verwertung bedürfen der Zustimmung des jeweiligen Autors.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Letzte Aktualisierung: April 2026
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-blue-600 hover:underline">← Zurück zur Startseite</Link>
        </div>
      </div>
    </main>
  );
}
