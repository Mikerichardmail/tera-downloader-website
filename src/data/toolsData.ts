export interface ToolInfo {
  slug: string;
  title: string;
  h1: string;
  primaryKeyword: string;
  metaDescription: string;
  shortDescription: string;
  iconName: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  steps: { step: number; title: string; desc: string }[];
  supportingKeywords: string[];
  badge?: string;
}

export const toolsData: ToolInfo[] = [
  {
    slug: "terabox-link-downloader",
    title: "TeraBox Link Downloader – Download Files from TeraBox Links Online",
    h1: "TeraBox Link Downloader",
    primaryKeyword: "TeraBox Link Downloader",
    metaDescription: "Download files and videos from any TeraBox link instantly. Paste your TeraBox URL and get fast direct download links without app installation or login.",
    shortDescription: "Convert any shared TeraBox link into a high-speed direct download file. Compatible with all mobile devices and desktop browsers.",
    iconName: "Link2",
    badge: "14,800 Searches/Mo",
    supportingKeywords: ["TeraBox link download", "download TeraBox URL", "terabox link to direct link", "terabox url converter"],
    features: [
      "Works with all TeraBox link formats (surl, 1024tera, mirrobox, teraboxapp)",
      "Bypasses app installation requirements",
      "Fast cloud streaming extraction",
      "100% Free with zero registration"
    ],
    steps: [
      { step: 1, title: "Copy the TeraBox Share Link", desc: "Copy the shared link from your message, browser, or TeraBox app." },
      { step: 2, title: "Paste into the Link Downloader", desc: "Paste the URL into our input bar above and hit Grab Link." },
      { step: 3, title: "Download Directly", desc: "Save the file directly to your phone or computer at maximum network speed." }
    ],
    faqs: [
      {
        question: "How do I download a file from a TeraBox link?",
        answer: "Simply paste your TeraBox share link into the box above and click 'Grab Link'. Our system extracts the direct CDN link so you can save it without installing the TeraBox app."
      },
      {
        question: "Does this link downloader work for password-protected links?",
        answer: "Yes. If your TeraBox link requires an extraction code or password, our tool will prompt you to enter the password to unlock the download."
      },
      {
        question: "Are there any file size limits?",
        answer: "No, TeraLinkGrabber supports files up to 2GB+ including movies, archives (ZIP/RAR), documents, and software."
      }
    ]
  },
  {
    slug: "terabox-video-downloader",
    title: "TeraBox Video Downloader – Download TeraBox Videos Online in 1080p & 4K",
    h1: "TeraBox Video Downloader",
    primaryKeyword: "TeraBox Video Downloader",
    metaDescription: "Free online TeraBox Video Downloader. Save MP4 and MKV videos from TeraBox in HD, 1080p, and 4K without installing the official application.",
    shortDescription: "Download and save high-definition TeraBox videos directly to your device storage. Supports MP4, MKV, FLV, and in-browser preview.",
    iconName: "Video",
    badge: "High Demand",
    supportingKeywords: ["download terabox video", "terabox video download online", "save terabox video to gallery", "terabox mp4 downloader"],
    features: [
      "Full HD 1080p & 4K UHD video support",
      "Instant in-browser video player preview",
      "Direct MP4 stream extraction",
      "Works on Android, iPhone (iOS), and PC"
    ],
    steps: [
      { step: 1, title: "Copy the TeraBox Video URL", desc: "Copy the video share link from TeraBox." },
      { step: 2, title: "Extract Direct Stream", desc: "Paste the URL above to parse the video stream and load the player." },
      { step: 3, title: "Watch or Save", desc: "Preview the video in the player or click 'Download MP4' to save to your gallery." }
    ],
    faqs: [
      {
        question: "Can I download TeraBox videos to iPhone camera roll?",
        answer: "Yes! Open Safari on your iPhone, paste the link into TeraLinkGrabber, click Download, and save the MP4 video directly to your Files or Photos app."
      },
      {
        question: "Can I preview the video before downloading?",
        answer: "Yes, our tool loads an integrated HTML5 player so you can stream and preview the video before saving it to your device."
      },
      {
        question: "Why does TeraBox force me to use their app to watch videos?",
        answer: "TeraBox requires their app to show ads and encourage premium subscriptions. Our online tool bypasses this restriction by resolving the direct video stream."
      }
    ]
  },
  {
    slug: "terabox-online",
    title: "TeraBox Online – Access & Download TeraBox Files Without App",
    h1: "TeraBox Online Downloader & Viewer",
    primaryKeyword: "TeraBox Online",
    metaDescription: "Access, view, and download TeraBox files online without installing any software. Works in Chrome, Safari, Edge, and Firefox on mobile and PC.",
    shortDescription: "Your browser-based portal to access any TeraBox link online. No app download, no login, and no account required.",
    iconName: "Globe",
    badge: "49,500 Searches/Mo",
    supportingKeywords: ["terabox online viewer", "terabox web without app", "terabox browser downloader", "open terabox link online"],
    features: [
      "100% Web-based - zero software installation",
      "Works on any modern browser (Chrome, Safari, Firefox)",
      "Instant access to shared cloud folders and files",
      "Safe and privacy-focused browsing"
    ],
    steps: [
      { step: 1, title: "Open TeraLinkGrabber Online", desc: "Visit our web utility from any browser." },
      { step: 2, title: "Enter Shared Link", desc: "Insert the TeraBox online share URL." },
      { step: 3, title: "Open & Download", desc: "Access the file immediately without downloading the TeraBox desktop or mobile client." }
    ],
    faqs: [
      {
        question: "Can I use TeraBox online without an account?",
        answer: "Yes! TeraLinkGrabber acts as an online gateway that resolves TeraBox links so you never have to sign up or log in to view or download files."
      },
      {
        question: "Does TeraBox Online work on Mac and Linux?",
        answer: "Yes, because it runs purely in your web browser, it is 100% compatible with Windows, macOS, Linux, ChromeOS, Android, and iOS."
      }
    ]
  },
  {
    slug: "terabox-player",
    title: "TeraBox Player – Stream & Play TeraBox Videos Online in Browser",
    h1: "TeraBox Player Online",
    primaryKeyword: "TeraBox Player",
    metaDescription: "Play and stream TeraBox videos online directly in your browser. Fast HLS streaming player with zero buffering and no app download required.",
    shortDescription: "Stream TeraBox videos online with zero lag. Enjoy high-speed video playback with playback speed controls and fullscreen support.",
    iconName: "PlayCircle",
    badge: "9,900 Searches/Mo",
    supportingKeywords: ["terabox player online", "play terabox videos", "terabox stream online", "watch terabox video without app"],
    features: [
      "Ultra-fast video stream playback",
      "Full video controls: speed adjustment, fullscreen, picture-in-picture",
      "No account or app download required",
      "Low data usage mode"
    ],
    steps: [
      { step: 1, title: "Paste Video Link", desc: "Insert your TeraBox video URL into the player tool." },
      { step: 2, title: "Click Stream Video", desc: "Our engine retrieves the streamable video manifest." },
      { step: 3, title: "Watch Seamlessly", desc: "Stream your video in HD without installing the TeraBox video player." }
    ],
    faqs: [
      {
        question: "Can I watch TeraBox videos without downloading them?",
        answer: "Yes! TeraBox Player streams the video directly in your web browser, saving you time, bandwidth, and device storage."
      },
      {
        question: "What video formats does the player support?",
        answer: "Our web player supports MP4, WebM, MKV, and HLS (m3u8) video streams."
      }
    ]
  },
  {
    slug: "terabox-video-player",
    title: "TeraBox Video Player – High-Speed Online Player for TeraBox Videos",
    h1: "TeraBox Video Player",
    primaryKeyword: "TeraBox Video Player",
    metaDescription: "Stream any TeraBox video with our dedicated online video player. Enjoy buffer-free playback in full 1080p without registering or installing apps.",
    shortDescription: "Dedicated high-performance player designed for crystal-clear playback of TeraBox video files.",
    iconName: "Film",
    badge: "8,100 Searches/Mo",
    supportingKeywords: ["online terabox video player", "play terabox online", "stream terabox video hd"],
    features: [
      "High bitrate HD streaming",
      "Audio and video sync optimization",
      "Compatible with Chromecast and AirPlay",
      "Works on slow mobile internet connections"
    ],
    steps: [
      { step: 1, title: "Provide Video Link", desc: "Copy and paste the TeraBox video URL." },
      { step: 2, title: "Initialize Stream", desc: "Wait 2 seconds while our server establishes the stream connection." },
      { step: 3, title: "Stream in Fullscreen", desc: "Enjoy uninterrupted video playback." }
    ],
    faqs: [
      {
        question: "Why does the official TeraBox video player buffer?",
        answer: "The official app limits streaming bandwidth for free users. Our player connects to optimal CDN routes for faster, smoother playback."
      }
    ]
  },
  {
    slug: "terabox-direct-download",
    title: "TeraBox Direct Download Link Generator – High-Speed Instant Links",
    h1: "TeraBox Direct Download Link Generator",
    primaryKeyword: "TeraBox Direct Download Link",
    metaDescription: "Generate instant direct download links from TeraBox URLs. Download at maximum internet speed using IDM, browser download managers, or curl.",
    shortDescription: "Convert slow TeraBox sharing links into instant, resume-capable direct HTTP download links for maximum download acceleration.",
    iconName: "DownloadCloud",
    badge: "6,600 Searches/Mo",
    supportingKeywords: ["terabox direct download link generator", "terabox direct link maker", "terabox direct url", "terabox high speed link"],
    features: [
      "Generates resume-capable direct HTTP links",
      "Compatible with Internet Download Manager (IDM) & aria2",
      "Bypasses TeraBox free-tier speed throttles",
      "Zero redirect loops or ad walls"
    ],
    steps: [
      { step: 1, title: "Paste TeraBox URL", desc: "Input your shared link in the direct link generator." },
      { step: 2, title: "Generate Direct URL", desc: "Click Generate to receive the clean CDN download link." },
      { step: 3, title: "Copy into IDM or Browser", desc: "Paste into IDM or download directly at uncapped speeds." }
    ],
    faqs: [
      {
        question: "Can I use these direct links in IDM (Internet Download Manager)?",
        answer: "Yes! The direct download links generated by TeraLinkGrabber can be pasted into IDM, Free Download Manager (FDM), aria2, or JDownloader."
      },
      {
        question: "Do direct links expire?",
        answer: "TeraBox CDN tokens typically remain valid for several hours, providing plenty of time to finish downloading even very large files."
      }
    ]
  },
  {
    slug: "terabox-file-downloader",
    title: "TeraBox File Downloader – Download ZIP, Documents, APKs & Files",
    h1: "TeraBox File Downloader",
    primaryKeyword: "TeraBox File Downloader",
    metaDescription: "Download any file type from TeraBox links: ZIP, RAR, PDF, APK, ISO, and documents. Free, online, fast, and no app or login needed.",
    shortDescription: "Download non-video files including archives, software, documents, and backups from TeraBox with ease.",
    iconName: "FileArchive",
    badge: "6,600 Searches/Mo",
    supportingKeywords: ["terabox file download", "download terabox zip file", "terabox apk downloader", "terabox document download"],
    features: [
      "Full support for ZIP, RAR, 7Z, PDF, DOCX, APK, ISO",
      "Integrity check preserved with original file hash",
      "No account needed to download large datasets",
      "Instant virus-safe direct transfer"
    ],
    steps: [
      { step: 1, title: "Enter File Link", desc: "Paste the TeraBox link containing your file." },
      { step: 2, title: "Verify File Info", desc: "See file name, exact size in MB/GB, and file extension." },
      { step: 3, title: "Save File", desc: "Download the original uncompressed file to your system." }
    ],
    faqs: [
      {
        question: "Will the downloaded files be compressed or modified?",
        answer: "No, TeraLinkGrabber delivers the exact original byte-for-byte file uploaded by the owner."
      }
    ]
  },
  {
    slug: "download-terabox-link-video",
    title: "Download TeraBox Link Video – Convert TeraBox Links to MP4 Videos",
    h1: "Download TeraBox Link Video",
    primaryKeyword: "Download TeraBox Link Video",
    metaDescription: "Fast way to download videos from any TeraBox link. Converts TeraBox URLs to downloadable MP4 files with HD quality intact.",
    shortDescription: "Simple 1-click utility that turns any TeraBox video share link into an immediate MP4 download.",
    iconName: "Sparkles",
    badge: "2,400 Searches/Mo",
    supportingKeywords: ["terabox link to video", "convert terabox link to mp4", "download video from link terabox"],
    features: [
      "Optimized for social media and shared community links",
      "One-click MP4 extraction",
      "Preserves original audio tracks and subtitles",
      "Mobile-friendly interface"
    ],
    steps: [
      { step: 1, title: "Copy Link", desc: "Copy the link you received on WhatsApp, Telegram, or Discord." },
      { step: 2, title: "Paste & Convert", desc: "Paste into the tool to convert the link into a video file." },
      { step: 3, title: "Download", desc: "Save the MP4 video directly." }
    ],
    faqs: [
      {
        question: "What if the video link doesn't start downloading?",
        answer: "Make sure you have an active internet connection and that the link hasn't been removed by the original owner. You can also use our Telegram Bot as an instant alternative."
      }
    ]
  },
  {
    slug: "terabox-downloader-online-free",
    title: "TeraBox Downloader Online Free – 100% Free Unlimited Link Downloader",
    h1: "TeraBox Downloader Online Free",
    primaryKeyword: "TeraBox Downloader Online Free",
    metaDescription: "100% Free TeraBox Downloader Online. Download unlimited videos and files without fees, VIP subscriptions, or mandatory app installations.",
    shortDescription: "Completely free, unlimited downloader tool for TeraBox. Never pay for cloud download speeds again.",
    iconName: "Gift",
    badge: "5,400 Searches/Mo",
    supportingKeywords: ["free terabox downloader", "terabox downloader without payment", "terabox free fast download", "terabox online free"],
    features: [
      "100% Free forever - no VIP required",
      "Unlimited daily link conversions",
      "High-speed server bandwidth",
      "Clean experience without deceptive ads"
    ],
    steps: [
      { step: 1, title: "Paste Any Link", desc: "Paste your link with no limits or restrictions." },
      { step: 2, title: "Click Free Download", desc: "Instantly generate your free download link." },
      { step: 3, title: "Save Your File", desc: "Download at high speeds." }
    ],
    faqs: [
      {
        question: "Is TeraLinkGrabber really completely free?",
        answer: "Yes, our web utility is funded by non-intrusive banner advertisements and is 100% free for all users worldwide."
      },
      {
        question: "Do I have to register to get free downloads?",
        answer: "No registration, no email address, and no credit card is ever required."
      }
    ]
  }
];

export const allToolsList = [
  { slug: "", name: "TeraBox Downloader (Homepage)", volume: "74,000" },
  { slug: "terabox-link-downloader", name: "TeraBox Link Downloader", volume: "14,800" },
  { slug: "terabox-video-downloader", name: "TeraBox Video Downloader", volume: "High Demand" },
  { slug: "terabox-online", name: "TeraBox Online", volume: "49,500" },
  { slug: "terabox-player", name: "TeraBox Player", volume: "9,900" },
  { slug: "terabox-video-player", name: "TeraBox Video Player", volume: "8,100" },
  { slug: "terabox-direct-download", name: "TeraBox Direct Download Link", volume: "6,600" },
  { slug: "terabox-file-downloader", name: "TeraBox File Downloader", volume: "6,600" },
  { slug: "download-terabox-link-video", name: "Download TeraBox Link Video", volume: "2,400" },
  { slug: "terabox-downloader-online-free", name: "TeraBox Downloader Online Free", volume: "5,400" },
];
