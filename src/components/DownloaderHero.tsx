'use client';

import React, { useState } from 'react';
import { Send, ArrowRight, Sparkles, Clipboard, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DownloaderHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function DownloaderHero({
  title = "TeraBox Downloader",
  subtitle = "Download TeraBox videos and files online at high speed. Paste your link below to open directly in our official Telegram Downloader Bot for instant 1080p/4K streaming with zero ads.",
  badge = "⚡ Official Telegram Bot • Instant 4K Download"
}: DownloaderHeroProps) {
  const [url, setUrl] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraBoxlDownloaderbot';

  // Helper to generate the exact Telegram deep link
  const getTelegramUrl = (rawUrl: string) => {
    const clean = rawUrl.trim();
    if (!clean) {
      return `https://t.me/${botUsername}`;
    }
    // Encode the link into a safe URL-friendly base64 string
    const encoded = btoa(encodeURIComponent(clean)).replace(/=/g, '').slice(0, 60);
    return `https://t.me/${botUsername}?start=${encoded}`;
  };

  const getNativeAppUrl = (rawUrl: string) => {
    const clean = rawUrl.trim();
    if (!clean) {
      return `tg://resolve?domain=${botUsername}`;
    }
    const encoded = btoa(encodeURIComponent(clean)).replace(/=/g, '').slice(0, 60);
    return `tg://resolve?domain=${botUsername}&start=${encoded}`;
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
      }
    } catch {
      // Clipboard permissions
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim();

    setRedirecting(true);
    setSubmittedLink(cleanUrl);

    const targetWebUrl = getTelegramUrl(cleanUrl);
    const targetNativeUrl = getNativeAppUrl(cleanUrl);

    // On mobile devices, attempt native tg:// first, with fallback to https://t.me
    const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    setTimeout(() => {
      if (isMobile) {
        window.location.href = targetNativeUrl;
        setTimeout(() => {
          window.location.href = targetWebUrl;
        }, 800);
      } else {
        window.open(targetWebUrl, '_blank', 'noopener,noreferrer');
      }
      setRedirecting(false);
    }, 600);
  };

  const currentTelegramUrl = getTelegramUrl(url);

  return (
    <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-100/40 to-sky-200/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Primary Page H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          {title}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Main Downloader Input Box Container */}
        <div className="min-h-[200px] transition-all">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 transition-shadow focus-within:shadow-2xl focus-within:border-brand-500"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="relative w-full flex-1">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste TeraBox link here (e.g., https://terabox.com/s/1...)"
                  className="w-full h-14 pl-4 pr-24 sm:pr-28 text-sm sm:text-base text-slate-900 bg-slate-50/60 rounded-xl sm:rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:bg-white transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 shadow-sm transition-colors flex items-center gap-1"
                  title="Paste from clipboard"
                >
                  <Clipboard className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Paste</span>
                </button>
              </div>

              <button
                type="submit"
                disabled={redirecting}
                className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-[#0088cc] to-sky-500 hover:from-[#0077b5] hover:to-sky-600 active:scale-[0.98] text-white font-bold text-base rounded-xl sm:rounded-2xl shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Send className="w-5 h-5 -translate-x-0.5 translate-y-0.5" />
                <span>{redirecting ? "Opening Telegram..." : "Download in Telegram"}</span>
                <ArrowRight className="w-4 h-4 hidden sm:inline" />
              </button>
            </div>

            {/* Value Trust Features Bar */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Direct High-Speed MP4 & 4K Streaming</span>
              </div>

              <a
                href={`https://t.me/${botUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#0088cc] hover:underline"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Open @{botUsername} Directly &rarr;</span>
              </a>
            </div>
          </form>

          {/* Quick Success/Transfer Card */}
          {submittedLink !== null && (
            <div className="mt-6 p-6 bg-white rounded-2xl border border-sky-200 shadow-lg text-center animate-fadeIn max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-[#0088cc] flex items-center justify-center mx-auto mb-3">
                <Send className="w-6 h-6 -translate-x-0.5 translate-y-0.5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Opening Telegram Bot...
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                If the Telegram app did not open automatically, tap the button below to start your download:
              </p>
              <a
                href={currentTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Tap to Open @{botUsername}</span>
              </a>
            </div>
          )}

          {/* Trust Highlights below input */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-xs text-slate-600 font-medium">
            <div className="p-3 bg-white/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Fast 100MB/s</span>
            </div>
            <div className="p-3 bg-white/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>No Login Needed</span>
            </div>
            <div className="p-3 bg-white/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>1080p & 4K HD</span>
            </div>
            <div className="p-3 bg-white/80 backdrop-blur rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>100% Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
