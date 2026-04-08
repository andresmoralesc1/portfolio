import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Andrés Morales | Consultor Técnico · IA & Automatización',
  description: 'Portfolio de Andrés Morales. Especializado en UX/UI minimalista, automatización con n8n/Make y desarrollo web con Next.js.',
  keywords: ['UX/UI', 'Automatización', 'n8n', 'Make', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Andrés Morales' }],
  openGraph: {
    title: 'Andrés Morales | Consultor Técnico',
    description: 'Transformo ideas complejas en soluciones digitales precisas.',
    url: 'https://andresmorales.com.co',
    siteName: 'Andrés Morales',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrés Morales | Consultor Técnico',
    description: 'Especializado en UX/UI minimalista y automatización inteligente.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
