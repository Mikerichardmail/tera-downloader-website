import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | TeraLinkGrabber',
  description: 'Terms of Service and Acceptable Use Policy for TeraLinkGrabber.com.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-1 text-xs text-brand-600 font-semibold mb-6 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Terms of Service
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4 text-slate-700">
          <p>Last updated: September 2026</p>
          <p>
            By accessing and using <strong>TeraLinkGrabber.com</strong>, you accept and agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Permitted Use</h2>
          <p>
            TeraLinkGrabber provides an automated utility to convert public cloud storage links into direct HTTP download streams. You agree to use this service exclusively for lawful purposes and in compliance with all applicable local, national, and international laws.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Intellectual Property & Copyright</h2>
          <p>
            You agree not to use TeraLinkGrabber to download, distribute, or access copyrighted material unless you are the rightful copyright owner or have explicit authorization from the rights holder. TeraLinkGrabber assumes no liability for user actions.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Disclaimer of Warranties</h2>
          <p>
            The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. We do not guarantee uninterrupted availability, error-free operation, or specific download speeds, as speed depends on third-party cloud infrastructure.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Limitation of Liability</h2>
          <p>
            In no event shall TeraLinkGrabber, its operators, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this service.
          </p>
        </div>
      </div>
    </div>
  );
}
