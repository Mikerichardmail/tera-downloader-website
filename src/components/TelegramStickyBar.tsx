'use client';

import React from 'react';
import { Send, Zap } from 'lucide-react';

export default function TelegramStickyBar() {
  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraBoxlDownloaderbot';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl md:hidden flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0088cc] to-sky-400 flex items-center justify-center text-white shadow">
          <Send className="w-5 h-5 -translate-x-0.5 translate-y-0.5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-slate-900">Telegram Bot</span>
            <span className="inline-flex items-center text-[9px] font-bold bg-amber-100 text-amber-800 px-1 py-0.2 rounded">
              <Zap className="w-2.5 h-2.5 mr-0.5" /> Fast
            </span>
          </div>
          <p className="text-[11px] text-slate-500">Download without web browser limits</p>
        </div>
      </div>

      <a
        href={`https://t.me/${botUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-[#0088cc] active:bg-[#0077b5] text-white text-xs font-bold rounded-lg shadow transition-transform active:scale-95 flex items-center gap-1.5"
      >
        <span>Open Bot</span>
        <span>&rarr;</span>
      </a>
    </div>
  );
}
