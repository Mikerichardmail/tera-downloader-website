import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TelegramStickyBar from '@/components/TelegramStickyBar';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://teralinkgrabber.com'),
  title: {
    default: 'TeraBox Downloader – Download TeraBox Videos & Files Online (Free 2026)',
    template: '%s | TeraLinkGrabber',
  },
  description:
    'Free online TeraBox Downloader. Download and stream videos, files, and ZIP archives from any TeraBox link at high speed without app installation or login.',
  keywords: [
    'TeraBox Downloader',
    'TeraBox Link Downloader',
    'TeraBox Video Downloader',
    'TeraBox Online',
    'TeraBox Player',
    'Download TeraBox Videos Online',
    'TeraBox Direct Download Link',
    'TeraBox download without app',
    'TeraBox download without login'
  ],
  authors: [{ name: 'TeraLinkGrabber Team' }],
  creator: 'TeraLinkGrabber',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teralinkgrabber.com',
    siteName: 'TeraLinkGrabber',
    title: 'TeraBox Downloader – Download TeraBox Videos & Files Online',
    description: 'Fast, free online TeraBox downloader. Stream and save videos directly in 1080p without installing the official app.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeraBox Downloader – Free Online Tool',
    description: 'Fast, free online TeraBox downloader. Download videos and files with zero app installs.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global WebApplication JSON-LD Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TeraLinkGrabber - TeraBox Downloader",
    "url": "https://teralinkgrabber.com/",
    "description": "Free web-based tool to convert TeraBox share links into direct high-speed download links for videos and files.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All (Web Browser, Android, iOS, Windows, macOS, Linux)",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "High-speed video downloading",
      "No app installation required",
      "No account login necessary",
      "Supports MP4, MKV, ZIP, PDF",
      "Integrated browser video player",
      "Direct Telegram Bot access"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://teralinkgrabber.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased text-slate-900 bg-slate-50 pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <TelegramStickyBar />
      </body>
    </html>
  );
}
