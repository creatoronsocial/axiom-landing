import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Privacy at a Glance</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-xl font-medium mt-4 text-gray-900">General Information</h3>
              <p>
                The following notes provide a simple overview of what happens to your personal data 
                when you visit this website. Personal data is any data that can personally identify you.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Data Collection on This Website</h3>
              <p>
                <strong>Who is responsible for data collection?</strong><br />
                Data processing on this website is carried out by the website operator:
                Axiom Labs (Contact: ceo@axiomlabs.systems)
              </p>
              <p>
                <strong>How do we collect your data?</strong><br />
                Some data is collected when you provide it to us. Other data is automatically 
                collected by our IT systems when you visit the website (e.g., internet browser, 
                operating system, or time of page access).
              </p>
              <p>
                <strong>What do we use your data for?</strong><br />
                Some data is collected to ensure the website is provided without errors. 
                Other data may be used to analyze your user behavior.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Hosting</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We host our website with an external service provider (hoster). 
                Personal data collected on this website is stored on the hoster's servers.
              </p>
              <p>
                <strong>Hoster used:</strong> Vercel Inc.<br />
                Vercel specializes in hosting web applications and is subject to strict data protection standards.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. General Information and Mandatory Information</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-xl font-medium mt-4 text-gray-900">Data Protection</h3>
              <p>
                The operators of this website take the protection of your personal data very seriously. 
                We treat your personal data confidentially and in accordance with legal data protection 
                regulations and this privacy policy.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Notice About the Responsible Party</h3>
              <p>
                The party responsible for data processing on this website is:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">
                  Axiom Labs<br />
                  Email: <a href="mailto:ceo@axiomlabs.systems" className="text-blue-600 hover:underline">ceo@axiomlabs.systems</a>
                </p>
              </div>

              <h3 className="text-xl font-medium mt-4 text-gray-900">Revocation of Your Consent</h3>
              <p>
                Many data processing operations are only possible with your express consent. 
                You can revoke consent already given at any time. An informal notification by 
                email to us is sufficient for this purpose.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Right to Complain to the Responsible Supervisory Authority</h3>
              <p>
                In the event of data protection law violations, the data subject has a right of 
                appeal to the responsible supervisory authority.
              </p>
              
              <h3 className="text-xl font-medium mt-4 text-gray-900">Right to Data Portability</h3>
              <p>
                You have the right to have data that we process automatically on the basis of your 
                consent or in fulfillment of a contract handed over to you or a third party in a 
                common, machine-readable format.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Collection on This Website</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-xl font-medium mt-4 text-gray-900">Server Log Files</h3>
              <p>
                The provider of the pages automatically collects and stores information in so-called 
                server log files, which your browser automatically transmits to us. These are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of server request</li>
                <li>IP address</li>
              </ul>
              <p>
                This data is not merged with other data sources.
              </p>

              <h3 className="text-xl font-medium mt-4 text-gray-900">Contact by Email</h3>
              <p>
                If you contact us by email, your data (email address, possibly name and message) 
                will be stored for the purpose of processing the inquiry. We do not pass on this 
                data without your consent.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Analytics Tools</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                This website uses Vercel Web Analytics to analyze user behavior. 
                Vercel Analytics is a privacy-friendly analytics tool that does not store 
                personal data and does not use cookies.
              </p>
              <p>
                The collected data is anonymized and cannot be traced back to individual persons.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Plugins and Tools</h2>
            <div className="text-gray-700">
              <p>
                No external plugins or tools from third-party providers that collect personal data 
                are integrated on our website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Your Rights</h2>
            <div className="text-gray-700 space-y-4">
              <p>You have the right at any time to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Information</strong> about your stored data</li>
                <li><strong>Correction</strong> of incorrect data</li>
                <li><strong>Deletion</strong> of your data (unless legal retention periods apply)</li>
                <li><strong>Restriction</strong> of processing</li>
                <li><strong>Objection</strong> to processing</li>
                <li><strong>Data portability</strong></li>
              </ul>
              <p>
                For all data protection inquiries, please contact:
                <br />
                <a href="mailto:ceo@axiomlabs.systems" className="text-blue-600 hover:underline">
                  ceo@axiomlabs.systems
                </a>
              </p>
            </div>
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
