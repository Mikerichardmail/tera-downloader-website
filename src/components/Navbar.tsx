'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DownloadCloud, Menu, X, Send } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraBoxlDownloaderbot';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      {/* Top Telegram Notification Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white text-xs sm:text-sm font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Send className="w-3.5 h-3.5" />
        <span>Prefer Telegram? Download videos faster with our bot!</span>
        <a
          href={`https://t.me/${botUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-sky-200 transition-colors ml-1 inline-flex items-center gap-1"
        >
          Open @{botUsername} &rarr;
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-sky-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <DownloadCloud className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              Tera<span className="text-brand-600">LinkGrabber</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-brand-700 px-1.5 py-0.5 rounded">
              Free 2026
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/terabox-video-downloader" className="hover:text-brand-600 transition-colors">
            Video Downloader
          </Link>
          <Link href="/terabox-link-downloader" className="hover:text-brand-600 transition-colors">
            Link Downloader
          </Link>
          <Link href="/terabox-player" className="hover:text-brand-600 transition-colors">
            Online Player
          </Link>
          <Link href="/terabox-direct-download" className="hover:text-brand-600 transition-colors">
            Direct Link
          </Link>
          <Link href="/blog/how-to-download-terabox-videos" className="hover:text-brand-600 transition-colors">
            Guides
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://t.me/${botUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0088cc] hover:bg-[#0077b5] text-white text-sm font-semibold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" />
            <span>Telegram Bot</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Home Downloader
          </Link>
          <Link
            href="/terabox-video-downloader"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            TeraBox Video Downloader
          </Link>
          <Link
            href="/terabox-link-downloader"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            TeraBox Link Downloader
          </Link>
          <Link
            href="/terabox-player"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            TeraBox Online Player
          </Link>
          <Link
            href="/terabox-direct-download"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Direct Download Generator
          </Link>
          <Link
            href="/blog/how-to-download-terabox-videos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            How to Download Guide
          </Link>
          
          <div className="pt-2">
            <a
              href={`https://t.me/${botUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0088cc] text-white font-semibold shadow"
            >
              <Send className="w-4 h-4" />
              <span>Use Telegram Bot</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
