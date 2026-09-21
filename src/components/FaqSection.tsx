'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
  title?: string;
  description?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "How do I download TeraBox videos without installing the app?",
    answer: "Copy your TeraBox link, paste it into the URL box at the top of TeraLinkGrabber.com, and click 'Grab Link'. Our system extracts the direct MP4 video stream so you can download or watch it immediately inside your web browser without downloading the official app."
  },
  {
    question: "Is TeraLinkGrabber completely free to use?",
    answer: "Yes, TeraLinkGrabber is 100% free with unlimited conversions. There are no daily quotas, premium paywalls, or hidden subscription charges."
  },
  {
    question: "Do I need to sign up or log in to a TeraBox account?",
    answer: "No. You do not need to create an account or provide any login credentials. All link resolution happens anonymously on our servers."
  },
  {
    question: "Can I use the direct download links in IDM (Internet Download Manager)?",
    answer: "Yes! Once our tool generates the direct download link, you can right-click and copy the link address, then paste it directly into IDM, Free Download Manager (FDM), or aria2 for multi-threaded download acceleration."
  },
  {
    question: "Why does my TeraBox link say 'Expired' or fail to load?",
    answer: "TeraBox links can be deleted or set to private by the person who originally shared them. If a link requires an extraction code or password, make sure you enter it when prompted."
  },
  {
    question: "How can I download videos to my iPhone camera roll?",
    answer: "Open Safari on your iPhone, use TeraLinkGrabber to generate the download link, tap 'Download High-Speed', and tap the download icon in Safari. Open the downloaded MP4 file and choose 'Save Video' to place it directly in your Photos app."
  },
  {
    question: "How does your Telegram Bot work?",
    answer: "Our automated Telegram Bot (@TeraBoxlDownloaderbot) allows you to forward or paste any TeraBox link inside Telegram to receive direct streaming links and file downloads instantly without using a web browser."
  }
];

export default function FaqSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  description = "Find clear answers to common questions about using TeraLinkGrabber."
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/60">
      {/* Inject JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
