import React from 'react';
import { Copy, ArrowDownCircle, CheckCircle2 } from 'lucide-react';

interface Step {
  step: number;
  title: string;
  desc: string;
}

interface HowItWorksProps {
  steps?: Step[];
  toolName?: string;
}

const defaultSteps: Step[] = [
  {
    step: 1,
    title: "1. Copy the TeraBox URL",
    desc: "Open your TeraBox link on WhatsApp, Telegram, or browser and copy the complete shareable link (e.g., terabox.com/s/1...)."
  },
  {
    step: 2,
    title: "2. Paste into TeraLinkGrabber",
    desc: "Paste the copied URL into the downloader input box above and click 'Grab Link'. Our system parses the link in 2 seconds."
  },
  {
    step: 3,
    title: "3. Direct Download or Stream",
    desc: "Preview your video in HD using our built-in player or click 'Download' to save the original file directly to your phone or PC."
  }
];

export default function HowItWorks({ steps = defaultSteps, toolName = "TeraBox Downloader" }: HowItWorksProps) {
  const icons = [
    <Copy key="1" className="w-6 h-6 text-brand-600" />,
    <ArrowDownCircle key="2" className="w-6 h-6 text-sky-600" />,
    <CheckCircle2 key="3" className="w-6 h-6 text-emerald-600" />
  ];

  // Schema markup for HowTo rich results
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Download Files with ${toolName}`,
    "description": "Step-by-step instructions to download videos and files from TeraBox shared links online without installing any app.",
    "step": steps.map((s) => ({
      "@type": "HowToStep",
      "position": s.step,
      "name": s.title,
      "text": s.desc
    }))
  };

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      {/* Inject JSON-LD HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How to Use {toolName} in 3 Simple Steps
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Bypass app install banners, forced signups, and slow throttled speeds in less than 30 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icons[idx] || <CheckCircle2 className="w-6 h-6 text-brand-600" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
