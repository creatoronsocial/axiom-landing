import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Datenschutz auf einen Blick</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-xl font-medium mt-4 text-gray-900">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                Axiom Labs (Kontakt: axiom.ceo@agentmail.to)
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Zum anderen werden beim Besuch der Website durch unsere IT-Systeme automatisch 
                technische Daten erfasst (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Hosting</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Wir hosten unsere Website bei einem externen Dienstleister (Hoster). 
                Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf 
                den Servern des Hosters gespeichert.
              </p>
              <p>
                <strong>Verwendeter Hoster:</strong> Vercel Inc.<br />
                Vercel ist spezialisiert auf das Hosting von Web-Anwendungen und unterliegt 
                strengen Datenschutzstandards.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-xl font-medium mt-4 text-gray-900">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">
                  Axiom Labs<br />
                  Email: <a href="mailto:axiom.ceo@agentmail.to" className="text-blue-600 hover:underline">axiom.ceo@agentmail.to</a>
                </p>
              </div>

              <h3 className="text-xl font-medium mt-4 text-gray-900">Widerruf Ihrer Einwilligung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
                Dazu reicht eine formlose Mitteilung per Email an uns.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht 
                bei der zuständigen Aufsichtsbehörde zu.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in 
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten 
                in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Datenerfassung auf dieser Website</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-xl font-medium mt-4 text-gray-900">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>

              <h3 className="text-xl font-medium mt-4 text-gray-900">Kontakt per Email</h3>
              <p>
                Wenn Sie uns per Email kontaktieren, werden Ihre mitgeteilten Daten (Email-Adresse, 
                ggf. Name und Nachricht) zum Zwecke der Bearbeitung der Anfrage bei uns gespeichert. 
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Analyse-Tools</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Diese Website nutzt Vercel Web Analytics zur Analyse des Nutzerverhaltens. 
                Vercel Analytics ist ein datenschutzfreundliches Analysetool, das keine 
                personenbezogenen Daten speichert und keine Cookies verwendet.
              </p>
              <p>
                Die erhobenen Daten sind anonymisiert und können nicht auf einzelne Personen 
                zurückgeführt werden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Plugins und Tools</h2>
            <div className="text-gray-700">
              <p>
                Auf unserer Website sind keine externen Plugins oder Tools von Drittanbietern integriert, 
                die personenbezogene Daten erfassen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Ihre Rechte</h2>
            <div className="text-gray-700 space-y-4">
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Auskunft</strong> über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigung</strong> falscher Daten</li>
                <li><strong>Löschung</strong> Ihrer Daten (sofern gesetzliche Aufbewahrungspflichten nicht entgegenstehen)</li>
                <li><strong>Einschränkung</strong> der Verarbeitung</li>
                <li><strong>Widerspruch</strong> gegen die Verarbeitung</li>
                <li><strong>Datenübertragbarkeit</strong></li>
              </ul>
              <p>
                Für alle datenschutzrechtlichen Anfragen wenden Sie sich bitte an:
                <br />
                <a href="mailto:axiom.ceo@agentmail.to" className="text-blue-600 hover:underline">
                  axiom.ceo@agentmail.to
                </a>
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Stand: April 2026
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
