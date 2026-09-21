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
  detailedContentHtml: string;
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
      { step: 2, title: "Paste into the Link Downloader", desc: "Paste the URL into our input bar above and hit Download in Telegram." },
      { step: 3, title: "Download Directly", desc: "Save the file directly to your phone or computer at maximum network speed." }
    ],
    faqs: [
      {
        question: "How do I download a file from a TeraBox link?",
        answer: "Simply paste your TeraBox share link into the box above and tap 'Download in Telegram'. Our system extracts the direct CDN link so you can save it without installing the TeraBox app."
      },
      {
        question: "Does this link downloader work for password-protected links?",
        answer: "Yes. If your TeraBox link requires an extraction code or password, our bot will prompt you to enter the password to unlock the download."
      },
      {
        question: "Are there any file size limits?",
        answer: "No, TeraLinkGrabber supports files up to 2GB+ including movies, archives (ZIP/RAR), documents, and software."
      }
    ],
    detailedContentHtml: `
      <h2>Understanding TeraBox Share Link Formats</h2>
      <p>TeraBox links come in multiple domain formats depending on regional mirrors, including <code>terabox.com/s/1...</code>, <code>teraboxapp.com/s/...</code>, <code>mirrobox.com</code>, <code>1024tera.com</code>, and <code>terabox.fun</code>. Every shared URL contains a unique <strong>surl (Short URL) hash</strong> that references the file in TeraBox cloud storage.</p>
      
      <p>When you use the <strong>TeraBox Link Downloader</strong>, our engine extracts this hash and directly requests the underlying file metadata, generating an unthrottled streaming endpoint that bypasses the forced app download barrier.</p>

      <h3>Why Convert Links Through Our Telegram Bot?</h3>
      <ul>
        <li><strong>No App Restrictions:</strong> Open files on devices where the TeraBox app is unavailable or restricted.</li>
        <li><strong>Instant 100MB/s Bandwidth:</strong> Take advantage of Telegram's global content distribution servers for faster downloading.</li>
        <li><strong>Permanent Access:</strong> Forward downloaded media directly to your Saved Messages on Telegram for lifetime cloud access.</li>
      </ul>
    `
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
      { step: 2, title: "Extract Direct Stream", desc: "Paste the URL above to parse the video stream." },
      { step: 3, title: "Watch or Save", desc: "Stream the video in HD or save directly to your gallery." }
    ],
    faqs: [
      {
        question: "Can I download TeraBox videos to iPhone camera roll?",
        answer: "Yes! Open Safari on your iPhone, use our tool to open the link in Telegram, and save the MP4 video directly to your Files or Photos app."
      },
      {
        question: "Can I preview the video before downloading?",
        answer: "Yes, our Telegram Bot provides an instant in-app streaming player so you can watch before saving the full video."
      },
      {
        question: "Why does TeraBox force me to use their app to watch videos?",
        answer: "TeraBox requires their app to show advertisements and encourage premium VIP subscriptions. Our online tool bypasses this restriction by resolving the direct video stream."
      }
    ],
    detailedContentHtml: `
      <h2>Download Full 1080p & 4K TeraBox Videos</h2>
      <p>Videos shared via TeraBox are typically encoded in standard H.264 or HEVC (H.265) containers (MP4 and MKV). While TeraBox restricts free web viewers to 480p standard resolution, the original high-bitrate 1080p Full HD and 4K streams remain intact on their cloud storage.</p>

      <p>Our <strong>TeraBox Video Downloader</strong> retrieves the original untouched media file, allowing you to enjoy your videos with full high-fidelity audio tracks and crystal-clear picture quality.</p>

      <h3>Supported Video Formats</h3>
      <ul>
        <li><strong>MP4:</strong> Universal compatibility with iPhone, Android, Smart TVs, and Windows.</li>
        <li><strong>MKV:</strong> Preserves multiple audio languages and embedded subtitle tracks.</li>
        <li><strong>WebM & FLV:</strong> High compression formats for rapid downloading.</li>
      </ul>
    `
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
    ],
    detailedContentHtml: `
      <h2>The Cleanest Way to Access TeraBox Online</h2>
      <p><strong>TeraBox Online</strong> is designed for users who want immediate access to shared documents, movies, and archives without installing bloatware on their machines. Whether you are using a shared computer, a work laptop where administrator software installation is locked, or a Chromebook, our online portal handles everything through standard web protocols.</p>

      <h3>Key Advantages of Browser-Based Access:</h3>
      <ul>
        <li><strong>No Telemetry or Background Processes:</strong> Official desktop clients often run persistent background services. Our tool runs strictly in your browser.</li>
        <li><strong>Cross-Platform Compatibility:</strong> Works identically on Chrome, Safari, Brave, Edge, and Firefox.</li>
        <li><strong>Instant Link Sharing:</strong> Process any shared link and transfer it directly to your Telegram account in one tap.</li>
      </ul>
    `
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
        answer: "Yes! TeraBox Player streams the video directly in your web browser or Telegram app, saving you time, bandwidth, and device storage."
      },
      {
        question: "What video formats does the player support?",
        answer: "Our player supports MP4, WebM, MKV, and HLS (m3u8) video streams."
      }
    ],
    detailedContentHtml: `
      <h2>Stream TeraBox Videos Online with Zero Lag</h2>
      <p>Waiting for a 2GB movie to finish downloading before you can watch it is frustrating. With <strong>TeraBox Player</strong>, you can begin streaming immediately using adaptive bitrate HTTP Live Streaming (HLS).</p>

      <p>Our integrated player handles media seeking, timestamp bookmarking, and multi-speed playback (1.25x, 1.5x, 2.0x) so you can enjoy your content smoothly on mobile or desktop.</p>
    `
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
    ],
    detailedContentHtml: `
      <h2>High-Bitrate Theater Video Player for TeraBox</h2>
      <p>The <strong>TeraBox Video Player</strong> provides an enhanced viewing experience featuring hardware-accelerated decoding. It is optimized for high-resolution video files, long movies, and anime series, ensuring perfect audio/video synchronization even over mobile 4G/5G connections.</p>
    `
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
      { step: 2, title: "Generate Direct URL", desc: "Click Download in Telegram to receive the clean CDN download link." },
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
    ],
    detailedContentHtml: `
      <h2>Uncap Your Speeds with Direct Download Links</h2>
      <p>Standard TeraBox web downloads route through speed-limiting throttles that cap downloads at 100 KB/s. The <strong>TeraBox Direct Download Link Generator</strong> unlocks direct access to CDN clusters, enabling multi-segment downloads.</p>

      <h3>How to Use with Download Accelerators:</h3>
      <ol>
        <li>Generate your direct download link using our tool or bot.</li>
        <li>Open <strong>Internet Download Manager (IDM)</strong> and click <em>Add URL</em>.</li>
        <li>Set max connections to 16. IDM will download parallel byte ranges, saturating your full connection bandwidth up to 100 MB/s!</li>
      </ol>
    `
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
    ],
    detailedContentHtml: `
      <h2>Download Any File Extension with Complete Data Integrity</h2>
      <p>Not every TeraBox link is a video. Users frequently share compressed archives (<code>.zip</code>, <code>.rar</code>, <code>.7z</code>), software binaries (<code>.apk</code>, <code>.exe</code>, <code>.dmg</code>), and documents (<code>.pdf</code>, <code>.docx</code>). The <strong>TeraBox File Downloader</strong> ensures that non-media files are downloaded without corruption, maintaining exact SHA-256 and MD5 checksum hashes.</p>
    `
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
    ],
    detailedContentHtml: `
      <h2>Turn Shared Cloud Links into Instant MP4 Downloads</h2>
      <p>Have you received a link from a friend on WhatsApp, Telegram, or Reddit and don't want to install an unfamiliar app? <strong>Download TeraBox Link Video</strong> is your instant converter. Simply paste the link, tap download, and receive an MP4 file ready to play on your phone or share with your friends.</p>
    `
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
        answer: "Yes, our web utility and Telegram bot are 100% free for all users worldwide."
      },
      {
        question: "Do I have to register to get free downloads?",
        answer: "No registration, no email address, and no credit card is ever required."
      }
    ],
    detailedContentHtml: `
      <h2>100% Free Unlimited Link Downloads for Everyone</h2>
      <p>Unlike other download services that force you to buy premium VIP subscriptions or enter credit card information after 2 downloads, <strong>TeraBox Downloader Online Free</strong> provides truly unlimited conversions. Our project is built for the community to ensure open, unrestricted access to files and media.</p>
    `
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
