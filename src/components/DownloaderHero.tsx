'use client';

import React, { useState } from 'react';
import { DownloadCloud, Send, ArrowRight, AlertCircle, Loader2, Sparkles, Clipboard } from 'lucide-react';
import ResultCard, { DownloadResult } from './ResultCard';

interface DownloaderHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function DownloaderHero({
  title = "TeraBox Downloader",
  subtitle = "Download TeraBox videos and files online at high speed. Bypasses app requirements, login walls, and speed restrictions with direct HD downloads.",
  badge = "100% Free & Unlimited"
}: DownloaderHeroProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DownloadResult | null>(null);

  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraLinkGrabberBot';

  // Dynamic Telegram deep link based on current input
  const telegramStartParam = url.trim()
    ? `?start=${btoa(encodeURIComponent(url.trim())).replace(/=/g, '').slice(0, 50)}`
    : '';
  const telegramUrl = `https://t.me/${botUsername}${telegramStartParam}`;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setError(null);
      }
    } catch {
      // Clipboard access denied or unsupported
    }
  };

  const handleResolve = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim();

    if (!cleanUrl) {
      setError("Please paste a valid TeraBox link to continue.");
      return;
    }

    // Basic domain validation for TeraBox mirrors
    const isTeraBoxDomain = /(terabox|1024tera|teraboxapp|mirrobox|momerybox|tibibox|4funbox|nephobox)/i.test(cleanUrl);
    if (!isTeraBoxDomain && !cleanUrl.includes('http')) {
      setError("Please enter a valid TeraBox URL (e.g. https://teraboxapp.com/s/1...)");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: cleanUrl }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to extract link. The link may be expired or private.");
      }

      setResult({
        title: data.data.filename || "TeraBox_Video_Download.mp4",
        size: data.data.size || 157286400, // 150MB fallback
        downloadUrl: data.data.downloadUrl,
        streamUrl: data.data.streamUrl || data.data.downloadUrl,
        isVideo: data.data.isVideo ?? true,
        thumbnail: data.data.thumbnail,
        fileType: data.data.fileType || 'MP4',
        originalUrl: cleanUrl,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try our Telegram Bot as a fallback.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-100/40 to-sky-200/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>{badge}</span>
        </div>

        {/* Primary Page H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          {title}
        </h1>

        {/* Hero BLUF (Bottom Line Up Front) Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Main Downloader Input Box Container (Pre-reserved min-height for zero CLS) */}
        <div className="min-h-[220px] transition-all">
          <form
            onSubmit={handleResolve}
            className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 transition-shadow focus-within:shadow-2xl focus-within:border-brand-500"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full flex-1">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Paste TeraBox link here (e.g., https://terabox.com/s/1...)"
                  className="w-full h-14 pl-4 pr-24 sm:pr-28 text-sm sm:text-base text-slate-900 bg-slate-50/60 rounded-xl sm:rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all placeholder:text-slate-400"
                  required
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
                disabled={loading}
                className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-brand-600 to-sky-600 hover:from-brand-700 hover:to-sky-700 active:scale-[0.98] text-white font-bold text-base rounded-xl sm:rounded-2xl shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-75 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <DownloadCloud className="w-5 h-5" />
                    <span>Grab Link</span>
                    <ArrowRight className="w-4 h-4 hidden sm:inline" />
                  </>
                )}
              </button>
            </div>

            {/* Telegram Alternative Action Button */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Supports terabox.com, teraboxapp, mirrobox & 1024tera</span>
              </div>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#0088cc] hover:text-[#0077b5] hover:underline"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{url.trim() ? "⚡ Process this link in Telegram Bot" : "Or Download via Telegram Bot &rarr;"}</span>
              </a>
            </div>
          </form>

          {/* Error Notice */}
          {error && (
            <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 text-left animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold">{error}</p>
                <p className="text-xs text-rose-600 mt-1">
                  Having trouble? You can also paste your link directly into our{" "}
                  <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                    Telegram Bot
                  </a>{" "}
                  for alternative high-speed processing.
                </p>
              </div>
            </div>
          )}

          {/* Loading Skeleton */}
          {loading && (
            <div className="mt-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-md text-left animate-pulse-glow">
              <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />
              <div className="h-8 bg-slate-100 rounded w-3/4 mb-3" />
              <div className="h-4 bg-slate-100 rounded w-1/2 mb-6" />
              <div className="h-12 bg-slate-200 rounded w-full" />
            </div>
          )}

          {/* Result Card */}
          {result && !loading && (
            <ResultCard
              result={result}
              onReset={() => {
                setResult(null);
                setUrl('');
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
