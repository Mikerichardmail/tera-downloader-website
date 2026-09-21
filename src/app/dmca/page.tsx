import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'DMCA & Copyright Compliance Policy | TeraLinkGrabber',
  },
  description:
    'DMCA copyright infringement notification and intellectual property compliance policy for TeraLinkGrabber.com. Contact our designated agent for swift link removal.',
  alternates: {
    canonical: 'https://teralinkgrabber.com/dmca',
  },
  openGraph: {
    title: 'DMCA & Copyright Compliance Policy | TeraLinkGrabber',
    description:
      'DMCA copyright infringement notification and intellectual property compliance policy for TeraLinkGrabber.com. Contact our designated agent for swift link removal.',
    url: 'https://teralinkgrabber.com/dmca',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA & Copyright Compliance Policy | TeraLinkGrabber',
    description:
      'DMCA copyright infringement notification and intellectual property compliance policy for TeraLinkGrabber.com.',
    images: ['/og-image.png'],
  },
};

export default function DmcaPage() {
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
        "name": "DMCA Policy",
        "item": "https://teralinkgrabber.com/dmca"
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
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Digital Millennium Copyright Act (DMCA) Policy
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4 text-slate-700">
          <p>
            <strong>TeraLinkGrabber.com</strong> respects the intellectual property rights of others and strictly complies with the Digital Millennium Copyright Act (DMCA) and international copyright directives.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">Notice Regarding File Hosting</h2>
          <p>
            TeraLinkGrabber is purely a technical search and link resolution engine. We do not host, store, cache, or transmit any files or video content on our servers. All downloads are fetched directly from the third-party cloud storage service (TeraBox/Flextech) using public content delivery networks.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">Filing a Takedown Request</h2>
          <p>
            If you are a copyright owner or authorized agent and believe that content accessible via a TeraBox link violates your copyright, we strongly encourage you to submit a takedown request to the host provider (TeraBox).
          </p>
          <p>
            Additionally, we will gladly blacklist any offending link from being processed by our tool. To submit a takedown notification to TeraLinkGrabber, please provide the following:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>The exact TeraBox URL that you want blocked from our link resolver.</li>
            <li>Your contact information (name, address, telephone number, and email address).</li>
            <li>A statement that you have a good-faith belief that use of the material is not authorized by the copyright owner.</li>
            <li>A statement that the information in the notification is accurate under penalty of perjury.</li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-6 flex items-center gap-3">
            <Mail className="w-5 h-5 text-brand-600" />
            <div>
              <p className="text-xs font-bold text-slate-900">Designated DMCA Agent Email:</p>
              <p className="text-xs text-brand-600 font-mono">dmca@teralinkgrabber.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
