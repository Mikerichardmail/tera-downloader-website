import React from 'react';
import Link from 'next/link';
import { DownloadCloud, ShieldCheck, Send } from 'lucide-react';
import { allToolsList } from '@/data/toolsData';

export default function Footer() {
  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraLinkGrabberBot';

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow">
                <DownloadCloud className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                Tera<span className="text-brand-600">LinkGrabber</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              TeraLinkGrabber is a fast, free web utility designed to resolve TeraBox shared links into direct video streams and high-speed file downloads with zero app installations.
            </p>
            <div className="pt-2">
              <a
                href={`https://t.me/${botUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0088cc] hover:underline"
              >
                <Send className="w-3.5 h-3.5" />
                Join our Telegram Bot (@{botUsername})
              </a>
            </div>
          </div>

          {/* Core Tools Columns */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              TeraBox Online Downloader Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {allToolsList.map((tool) => (
                <Link
                  key={tool.slug || 'home'}
                  href={tool.slug ? `/${tool.slug}` : '/'}
                  className="hover:text-brand-600 hover:underline transition-colors py-1 flex items-center justify-between pr-4"
                >
                  <span>{tool.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{tool.volume}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Compliance & Legal */}
          <div className="space-y-3 text-xs">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Legal & Policy
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dmca" className="hover:text-brand-600 hover:underline">
                  DMCA & Copyright Takedown
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-600 hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-600 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-download-terabox-videos" className="hover:text-brand-600 hover:underline">
                  How to Download (Tutorial)
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-download-terabox-files" className="hover:text-brand-600 hover:underline">
                  File Download Guide
                </Link>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-1.5 text-emerald-600 font-medium text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>SSL 256-Bit Encrypted & Safe</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box (Crucial for SEO & Compliance) */}
        <div className="border-t border-slate-100 pt-6 text-[11px] text-slate-400 leading-relaxed text-center max-w-4xl mx-auto space-y-2">
          <p>
            <strong>Disclaimer:</strong> TeraLinkGrabber.com is an independent third-party utility tool and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with TeraBox, Flextech Inc., Baidu, or any of their subsidiaries or affiliates. The official TeraBox website can be found at terabox.com.
          </p>
          <p>
            TeraLinkGrabber does not host, store, or cache any copyrighted files, videos, or media on its servers. All downloads and streams are delivered directly through public cloud content delivery networks. Users are solely responsible for ensuring they possess legal rights to download files they process.
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} TeraLinkGrabber.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
