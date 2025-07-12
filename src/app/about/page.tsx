import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About EquaLab - Scientific & Engineering Tools',
  description: 'Learn about EquaLab\'s mission to provide comprehensive scientific and engineering tools for researchers, students, and professionals worldwide.',
  alternates: {
    canonical: 'https://equalab.uk/about',
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About EquaLab
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            EquaLab is a comprehensive suite of scientific and engineering tools designed to 
            empower researchers, students, and professionals with powerful calculation and 
            reference capabilities.
          </p>
          <h2>Our Mission</h2>
          <p>
            To democratize access to advanced scientific and engineering tools, making complex 
            calculations and material properties easily accessible to everyone.
          </p>
          <h2>Our Tools</h2>
          <ul>
            <li><strong>Materials Database:</strong> Comprehensive material properties for metals, ceramics, polymers, and composites</li>
            <li><strong>Equation Solver:</strong> Interactive mathematical and scientific equation solver with symbolic computation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}