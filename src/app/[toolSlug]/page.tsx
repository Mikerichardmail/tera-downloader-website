import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { toolsData } from '@/data/toolsData';
import DownloaderHero from '@/components/DownloaderHero';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import RelatedToolsGrid from '@/components/RelatedToolsGrid';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ToolPageProps {
  params: Promise<{ toolSlug: string }>;
}

// Generate static params for build-time HTML pre-rendering
export async function generateStaticParams() {
  return toolsData.map((tool) => ({
    toolSlug: tool.slug,
  }));
}

// Dynamic metadata generation per tool page
export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { toolSlug } = await params;
  const tool = toolsData.find((t) => t.slug === toolSlug);

  if (!tool) {
    return { title: 'Tool Not Found' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teralinkgrabber.com';

  return {
    title: tool.title,
    description: tool.metaDescription,
    keywords: [tool.primaryKeyword, ...tool.supportingKeywords],
    alternates: {
      canonical: `${siteUrl}/${tool.slug}`,
    },
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      url: `${siteUrl}/${tool.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.title,
      description: tool.metaDescription,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { toolSlug } = await params;
  const tool = toolsData.find((t) => t.slug === toolSlug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{tool.h1}</span>
        </div>
      </div>

      {/* Downloader Hero targeting exact tool search intent */}
      <DownloaderHero
        title={tool.h1}
        subtitle={tool.shortDescription}
        badge={tool.badge || "Free Web Utility"}
      />

      {/* How to use this specific tool */}
      <HowItWorks steps={tool.steps} toolName={tool.h1} />

      {/* Specific Feature Highlights for this Tool */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            {tool.h1} Highlights & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tool.features.map((feature, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Feature Grid */}
      <FeaturesGrid />

      {/* Related Tools Interlinking Matrix */}
      <RelatedToolsGrid currentSlug={tool.slug} />

      {/* Tool-specific FAQs */}
      <FaqSection faqs={tool.faqs} title={`${tool.h1} FAQs`} />
    </>
  );
}
