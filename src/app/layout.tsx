import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
