import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | TeraLinkGrabber',
  description: 'Privacy Policy for TeraLinkGrabber.com explaining data collection, cookies, and user privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-12">
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
            Privacy Policy
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
        </div>
      </div>
    </div>
  );
}
