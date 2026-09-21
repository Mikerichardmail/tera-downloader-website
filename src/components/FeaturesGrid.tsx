import React from 'react';
import { Zap, Shield, Smartphone, Film, Infinity, Laptop } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Unthrottled Download Speeds",
    desc: "Bypasses the 100 KB/s free-tier download speed limit imposed by the official TeraBox client, delivering full-bandwidth speeds."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    title: "No App Installation Needed",
    desc: "Never clutter your phone or computer with third-party software. Access all shared links directly inside your browser."
  },
  {
    icon: <Film className="w-6 h-6 text-indigo-500" />,
    title: "Full 1080p & 4K HD Playback",
    desc: "Stream movies, anime, and personal videos in crystal-clear high definition before deciding to save them to your storage."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: "100% Anonymous & Private",
    desc: "We never ask for your TeraBox email, password, or cookies. No signup, registration, or credit card required."
  },
  {
    icon: <Infinity className="w-6 h-6 text-rose-500" />,
    title: "Unlimited Daily Conversions",
    desc: "Convert as many links as you need with zero daily quotas or paywalls. Completely free for all users worldwide."
  },
  {
    icon: <Laptop className="w-6 h-6 text-sky-500" />,
    title: "All Device & OS Compatibility",
    desc: "Runs smoothly across Android, iPhone (iOS Safari), Windows, macOS, Linux, and ChromeOS without compatibility issues."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose TeraLinkGrabber?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            The cleanest, fastest, and safest way to stream and download files from TeraBox links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
