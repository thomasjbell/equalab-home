import "./globals.css";
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EquaLab - Comprehensive Tools for Scientists and Engineers",
  description: "Access powerful scientific and engineering tools including material properties database, mathematical equation solver, and advanced calculation tools. Built for researchers, engineers, and students.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  keywords: [
    "scientific tools",
    "engineering calculations", 
    "material properties",
    "mathematical equations",
    "scientific calculator",
    "engineering software",
    "research tools",
    "materials database",
    "equation solver",
    "symbolic math",
    "EquaLab"
  ],
  authors: [{ name: "EquaLab", url: "https://equalab.uk" }],
  creator: "EquaLab",
  publisher: "EquaLab",
  applicationName: "EquaLab",
  metadataBase: new URL('https://equalab.uk'),
  alternates: {
    canonical: "https://equalab.uk",
  },
  openGraph: {
    title: "EquaLab - Scientific & Engineering Tools",
    description: "Comprehensive tools for scientists and engineers including material properties and equation solving",
    siteName: "EquaLab",
    url: "https://equalab.uk",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EquaLab - Scientific & Engineering Tools"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EquaLab - Scientific & Engineering Tools",
    description: "Comprehensive tools for scientists and engineers",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://equalab.uk/#organization",
      "name": "EquaLab",
      "url": "https://equalab.uk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://equalab.uk/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Comprehensive tools for scientists and engineers including material properties database and mathematical equation solver",
      "foundingDate": "2024",
      "sameAs": [
        "https://materials.equalab.uk",
        "https://equations.equalab.uk"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@equalab.uk"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://equalab.uk/#website",
      "url": "https://equalab.uk",
      "name": "EquaLab",
      "description": "Comprehensive tools for scientists and engineers",
      "publisher": {
        "@id": "https://equalab.uk/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://equations.equalab.uk/?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://equalab.uk/#webpage",
      "url": "https://equalab.uk",
      "name": "EquaLab - Comprehensive Tools for Scientists and Engineers",
      "isPartOf": {
        "@id": "https://equalab.uk/#website"
      },
      "about": {
        "@id": "https://equalab.uk/#organization"
      },
      "description": "Access powerful scientific and engineering tools including material properties database, mathematical equation solver, and advanced calculation tools.",
      "breadcrumb": {
        "@id": "https://equalab.uk/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://equalab.uk/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://equalab.uk"
        }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "EquaLab Materials",
      "url": "https://materials.equalab.uk",
      "description": "Comprehensive database of material properties for metals, ceramics, polymers, and composites",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@id": "https://equalab.uk/#organization"
      }
    },
    {
      "@type": "WebApplication", 
      "name": "EquaLab Equations",
      "url": "https://equations.equalab.uk",
      "description": "Interactive equation solver with exact symbolic computation for mathematics, physics, and engineering",
      "applicationCategory": "EducationalApplication", 
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@id": "https://equalab.uk/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://materials.equalab.uk" />
        <link rel="preconnect" href="https://equations.equalab.uk" />
        
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}