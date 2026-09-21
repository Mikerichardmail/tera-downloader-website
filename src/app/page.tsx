import React from 'react';
import type { Metadata } from 'next';
import DownloaderHero from '@/components/DownloaderHero';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import RelatedToolsGrid from '@/components/RelatedToolsGrid';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';
import { Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TeraBox Downloader – Download TeraBox Videos & Files Online (Free 2026)',
  description: 'Free online TeraBox Downloader. Download and stream videos, files, and ZIP archives from any TeraBox link at high speed without app installation or login.',
  alternates: {
    canonical: 'https://teralinkgrabber.com',
  },
};

export default function HomePage() {
  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraBoxlDownloaderbot';

  return (
    <>
      {/* 1. Hero Downloader Section with H1 matching primary keyword */}
      <DownloaderHero
        title="TeraBox Downloader"
        subtitle="Download TeraBox videos and files online at high speed. Paste any TeraBox link to generate fast direct download links without app installation or login."
        badge="74,000+ Monthly Users • 100% Free"
      />

      {/* 2. Step-by-Step Instructions */}
      <HowItWorks toolName="TeraBox Downloader" />

      {/* 3. Value Proposition Features */}
      <FeaturesGrid />

      {/* 4. Rich Informational SEO Section (Targeting Long-Tail Queries) */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              What is TeraBox Downloader and How Does It Work?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>TeraBox Downloader</strong> is a specialized online web utility developed by TeraLinkGrabber that resolves shared cloud links into direct streaming and download URLs. TeraBox (formerly Dubox) provides users with free cloud storage, but restricts anonymous users with download throttling and prompts demanding the installation of the native mobile or desktop app.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
              By using TeraLinkGrabber, our server connects to high-speed cloud distribution nodes, extracts the unthrottled direct media stream, and delivers it directly to your device browser with zero intermediate ad walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Download TeraBox Videos in HD
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Watch movies, series, or video clips online with our built-in video player or save MP4 files in 720p, 1080p, or 4K resolution directly to your phone gallery.
              </p>
              <Link
                href="/terabox-video-downloader"
                className="text-xs font-bold text-brand-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Go to Video Downloader</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Generate Direct Download Links
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Transform shared cloud URLs into clean HTTP download links compatible with Internet Download Manager (IDM), aria2, and Free Download Manager for maximum speeds.
              </p>
              <Link
                href="/terabox-direct-download"
                className="text-xs font-bold text-brand-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Go to Direct Link Maker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Telegram Banner Inside Content */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider bg-white/20 px-2.5 py-1 rounded-full">
                Instant Telegram Bot
              </span>
              <h3 className="text-xl font-black mt-2">
                Prefer Downloading on Telegram?
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 mt-1 max-w-md">
                Send any TeraBox link to our automated Telegram bot and receive direct download files and streaming links in 2 seconds.
              </p>
            </div>

            <a
              href={`https://t.me/${botUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 hover:bg-sky-50 font-bold text-sm rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2 hover:scale-105"
            >
              <Send className="w-4 h-4 text-[#0088cc]" />
              <span>Launch Telegram Bot</span>
            </a>
          </div>

          {/* Troubleshooting Checklist */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Common TeraBox Download Issues & Solutions
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Link Expired or File Deleted:</strong> TeraBox links can be removed by the original owner. If a link returns an error, verify with the sender that the file is still active.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Slow Browser Download Speeds:</strong> If browser downloading feels slow, copy the direct link provided by our tool and paste it into Internet Download Manager (IDM) for multi-threaded downloading.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Password-Protected Links:</strong> If your link requires an extraction code (passcode), make sure you have the 4-digit code provided by the link creator.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Related Tools Interlinking Matrix */}
      <RelatedToolsGrid />

      {/* 6. Comprehensive FAQ Accordion */}
      <FaqSection />
    </>
  );
}
