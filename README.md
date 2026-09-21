# TeraLinkGrabber — High-Speed TeraBox Downloader & Web Utility

A high-performance, SEO-optimized web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

TeraLinkGrabber allows users to convert shared TeraBox links into direct video streams and high-speed downloads without forced app installations, registration walls, or download speed throttling.

---

## Features

- ⚡ **Next.js 15 App Router & React 19**: Full Server-Side Rendering (SSR) & Static Site Generation (SSG) for instant page loads.
- 🎯 **10 Dedicated SEO Tool Landing Pages**: Pre-rendered pages targeting primary keywords (*TeraBox Downloader*, *Link Downloader*, *Video Downloader*, *Online Player*, *Direct Download Generator*).
- 🤖 **Telegram Bot Funnel**: Dynamic deep-linking that passes the user's TeraBox URL directly to your Telegram bot (`https://t.me/YourBot?start=<payload>`), plus a sticky mobile CTA bar.
- 🎬 **Built-in HTML5 Video Player**: Stream and preview 1080p / 4K videos in-browser before downloading.
- 📊 **Structured Data (JSON-LD)**: Complete `WebApplication`, `HowTo`, and `FAQPage` schemas included in initial HTML for Google Rich Results.
- 🚀 **Zero Cumulative Layout Shift (CLS = 0)**: Pre-reserved container sizes to ensure 100% stable Core Web Vitals.
- 🛡️ **DMCA & Compliance Suite**: Built-in `/dmca`, `/privacy`, and `/terms` pages with trademark disclaimers.

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd "tera donloder website"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Update your Telegram bot username in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://teralinkgrabber.com
NEXT_PUBLIC_SITE_NAME=TeraLinkGrabber
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=YourBotUsername
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm run start
```

---

## Deployment

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Add your environment variables (`NEXT_PUBLIC_TELEGRAM_BOT_USERNAME`).
5. Click **Deploy**.

---

## License & Legal
This project is an independent third-party tool and is not affiliated, endorsed, or associated with TeraBox, Flextech Inc., or any of their parent companies.
