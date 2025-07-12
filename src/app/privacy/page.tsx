export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Information We Collect</h2>
            <p>
              EquaLab Equations collects minimal information necessary to provide our service:
            </p>
            <ul>
              <li>Email address (for account creation and authentication)</li>
              <li>Name (optional, for personalisation)</li>
              <li>Usage data (equations viewed, preferences set)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our equation solving service</li>
              <li>Save your preferences and favorite equations</li>
              <li>Send important service updates</li>
            </ul>

            <h2>Data Storage</h2>
            <p>
              Your data is securely stored using Supabase infrastructure with industry-standard encryption.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at: 
              <a href="mailto:privacy@equalab.uk" className="text-cyan-600">privacy@equalab.uk</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}