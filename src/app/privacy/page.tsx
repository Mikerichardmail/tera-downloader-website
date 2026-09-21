import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy & Data Protection | TeraLinkGrabber',
  },
  description:
    'TeraLinkGrabber privacy policy explaining zero data collection, cookie usage, analytics logging, and user rights under GDPR and CCPA regulations.',
  alternates: {
    canonical: 'https://teralinkgrabber.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Protection | TeraLinkGrabber',
    description:
      'TeraLinkGrabber privacy policy explaining zero data collection, cookie usage, analytics logging, and user rights under GDPR and CCPA regulations.',
    url: 'https://teralinkgrabber.com/privacy',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Protection | TeraLinkGrabber',
    description:
      'TeraLinkGrabber privacy policy explaining zero data collection and user privacy protections.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://teralinkgrabber.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://teralinkgrabber.com/privacy"
      }
    ]
  };

  return (
    <div className="bg-white py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-1 text-xs text-brand-600 font-semibold mb-6 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Privacy Policy & Data Protection
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4 text-slate-700">
          <p>Last updated: September 2026</p>
          <p>
            At <strong>TeraLinkGrabber.com</strong>, we are committed to safeguarding user privacy. This policy details how our web service handles information when you use our online link grabber tools.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Information We Do Not Collect</h2>
          <p>
            We do not require account registration, email addresses, passwords, or payment credentials. We do not store or inspect the contents of files or videos processed through our link resolution engine.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Technical Logs & Analytics</h2>
          <p>
            Like most websites, our web servers automatically log standard anonymous technical request data, including IP address, browser type, referring URL, and timestamp. This data is used exclusively to mitigate automated DDoS attacks, monitor server performance, and diagnose technical errors.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Cookies & Advertising</h2>
          <p>
            We may use non-tracking session cookies to improve site performance and remember user interface preferences. Third-party advertising partners (such as Google AdSense) may use cookies to serve non-personalized or contextual advertisements based on user visits.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Third-Party Links</h2>
          <p>
            Our tool processes URLs pointing to external cloud storage networks (such as TeraBox). We do not control and are not responsible for the privacy practices or content of third-party domains.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">5. User Data Protection & Inquiries</h2>
          <p>
            Under global privacy frameworks including GDPR and CCPA, you retain full rights regarding your data privacy. Because TeraLinkGrabber does not maintain user databases, profiles, or file tracking, your interactions remain completely anonymous. If you have questions regarding our technical privacy standards, please reach out to us at support@teralinkgrabber.com.
          </p>
        </div>
      </div>
    </div>
  );
}
