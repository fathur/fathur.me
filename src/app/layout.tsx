import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fathur - Backend Engineer',
  description:
    'Experienced backend engineer specializing in Python, PHP, Ruby, Go, and TypeScript. Expert in Laravel, Django, RoR frameworks with strong DevOps skills.',
  keywords: [
    'backend engineer',
    'python',
    'php',
    'ruby',
    'go',
    'typescript',
    'laravel',
    'django',
    'ror',
    'devops',
  ],
  authors: [{ name: 'Fathur' }],
  creator: 'Fathur',
  alternates: {
    canonical: 'https://fathur.me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://fathur.me/#person",
        "name": "Fathur",
        "jobTitle": "Backend Engineer",
        "description": "Experienced backend engineer specializing in Python, PHP, Ruby, Go, and TypeScript. Expert in Laravel, Django, RoR frameworks with strong DevOps skills.",
        "knowsAbout": [
          "Python",
          "PHP",
          "Ruby",
          "Go",
          "TypeScript",
          "Laravel",
          "Django",
          "Ruby on Rails",
          "DevOps",
          "Backend Development",
          "Web Development"
        ],
        "url": "https://fathur.me",
        "sameAs": ["https://fathur.me"]
      },
      {
        "@type": "WebSite",
        "@id": "https://fathur.me/#website",
        "url": "https://fathur.me",
        "name": "Fathur - Backend Engineer",
        "description": "Experienced backend engineer specializing in Python, PHP, Ruby, Go, and TypeScript. Expert in Laravel, Django, RoR frameworks with strong DevOps skills.",
        "publisher": {
          "@id": "https://fathur.me/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://fathur.me/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://fathur.me/#webpage",
        "url": "https://fathur.me",
        "name": "Fathur - Backend Engineer",
        "isPartOf": {
          "@id": "https://fathur.me/#website"
        },
        "about": {
          "@id": "https://fathur.me/#person"
        },
        "description": "Experienced backend engineer specializing in Python, PHP, Ruby, Go, and TypeScript. Expert in Laravel, Django, RoR frameworks with strong DevOps skills."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
