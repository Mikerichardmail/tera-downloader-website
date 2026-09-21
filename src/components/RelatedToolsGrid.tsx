import React from 'react';
import Link from 'next/link';
import { toolsData } from '@/data/toolsData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface RelatedToolsGridProps {
  currentSlug?: string;
}

export default function RelatedToolsGrid({ currentSlug = '' }: RelatedToolsGridProps) {
  // Filter out current page to link to siblings
  const tools = toolsData.filter((t) => t.slug !== currentSlug);

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Topical Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore More TeraBox Utility Tools
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Choose specialized online utilities for videos, direct links, and cloud streaming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-brand-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {tool.h1}
                  </h3>
                  {tool.badge && (
                    <span className="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {tool.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold text-brand-600 group-hover:translate-x-0.5 transition-transform">
                <span>Use this tool</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
