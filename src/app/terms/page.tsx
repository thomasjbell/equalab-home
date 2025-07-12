export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By using EquaLab Equations, you agree to these terms of service.
            </p>

            <h2>Description of Service</h2>
            <p>
              EquaLab Equations is a mathematical equation solving platform that provides 
              symbolic and numeric computation tools for educational and professional use.
            </p>

            <h2>User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account 
              and password and for restricting access to your account.
            </p>

            <h2>Acceptable Use</h2>
            <p>You agree to use the service only for lawful purposes and in accordance with these terms.</p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at: 
              <a href="mailto:legal@equalab.uk" className="text-cyan-600">legal@equalab.uk</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}