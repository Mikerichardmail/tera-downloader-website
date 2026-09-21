'use client';

import React, { useState } from 'react';
import { Download, Film, FileText, Send, Check, Copy, RefreshCw } from 'lucide-react';
import { formatBytes } from '@/lib/utils';

export interface DownloadResult {
  title: string;
  size: number;
  downloadUrl: string;
  streamUrl?: string;
  isVideo?: boolean;
  thumbnail?: string;
  fileType?: string;
  originalUrl: string;
}

interface ResultCardProps {
  result: DownloadResult;
  onReset: () => void;
}

export default function ResultCard({ result, onReset }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraBoxlDownloaderbot';

  // Construct dynamic deep link for Telegram bot
  const encodedPayload = typeof window !== 'undefined'
    ? btoa(encodeURIComponent(result.originalUrl)).replace(/=/g, '').slice(0, 50)
    : '';
  const telegramDeepLink = `https://t.me/${botUsername}?start=${encodedPayload}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(result.downloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all animate-fadeIn">
      {/* Result Card Header */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Link Successfully Resolved</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 hover:underline font-medium"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Convert Another Link</span>
        </button>
      </div>

      <div className="p-6 sm:p-8">
        {/* Video Player Preview if media file */}
        {result.isVideo && result.streamUrl && (
          <div className="mb-6 rounded-xl overflow-hidden bg-black aspect-video relative group shadow-md border border-slate-800">
            <video
              src={result.streamUrl}
              controls
              poster={result.thumbnail}
              className="w-full h-full object-contain"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* File Metadata Details */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
            {result.isVideo ? <Film className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate" title={result.title}>
              {result.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                {formatBytes(result.size)}
              </span>
              <span className="bg-sky-100 text-sky-800 px-2 py-0.5 rounded uppercase font-mono">
                {result.fileType || 'MP4'}
              </span>
              <span className="text-emerald-600 font-semibold">&bull; Ready to download</span>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <a
            href={result.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            download={result.title}
            className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Download High-Speed</span>
          </a>

          <a
            href={telegramDeepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 bg-[#0088cc] hover:bg-[#0077b5] active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            <span>Open in Telegram Bot</span>
          </a>
        </div>

        {/* Copy Direct Link Button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
          <span className="hidden sm:inline">Use IDM or browser download manager with direct URL:</span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Direct Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Direct Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
