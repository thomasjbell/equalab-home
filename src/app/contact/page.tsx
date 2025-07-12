import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact EquaLab - Get in Touch',
  description: 'Contact the EquaLab team for support, feedback, or partnership opportunities. We\'re here to help with your scientific and engineering tool needs.',
  alternates: {
    canonical: 'https://equalab.uk/contact',
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Us
        </h1>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:info@equalab.uk" className="text-cyan-600 hover:text-cyan-800">
                  info@equalab.uk
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Milton Keynes<br />
                  Buckinghamshire, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}