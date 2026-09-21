import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogData';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, DownloadCloud, Send } from 'lucide-react';
import RelatedToolsGrid from '@/components/RelatedToolsGrid';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teralinkgrabber.com';
  const pageTitle = `${post.title} | TeraLinkGrabber`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: post.metaDescription,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: post.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || 'TeraBoxlDownloaderbot';

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.h1,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://teralinkgrabber.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TeraLinkGrabber",
      "logo": {
        "@type": "ImageObject",
        "url": "https://teralinkgrabber.com/og-image.png"
      }
    },
    "datePublished": post.publishedDate,
    "mainEntityOfPage": `https://teralinkgrabber.com/blog/${post.slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://teralinkgrabber.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog Guides",
        "item": "https://teralinkgrabber.com"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.h1,
        "item": `https://teralinkgrabber.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-500">Guides</span>
          <span>/</span>
          <span className="text-slate-900 font-medium truncate">{post.h1}</span>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {post.h1}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 border-b border-slate-200">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.publishedDate}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </header>

          {/* Quick Summary / Key Takeaway */}
          <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 text-sm mb-8 leading-relaxed">
            <p className="font-semibold mb-1">Key Takeaway:</p>
            <p>{post.summary}</p>
          </div>

          {/* Interactive Tool Banner inside article */}
          <div className="mb-8 p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-sky-400">Ready to download?</p>
              <p className="text-base font-bold mt-0.5">Use our free TeraBox Link Grabber</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-lg shadow flex items-center gap-1.5 transition-colors"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>Online Tool</span>
              </Link>
              <a
                href={`https://t.me/${botUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-bold rounded-lg shadow flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram Bot</span>
              </a>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-600 prose-a:underline prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {/* Internal Linking Suite */}
      <RelatedToolsGrid />
    </>
  );
}
