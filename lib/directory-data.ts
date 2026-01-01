export interface DirectoryItem {
  letter: string
  entries: Array<{
    title: string
    description: string
    url?: string
    isPrivate?: boolean
  }>
}

export const directoryData: DirectoryItem[] = [
  {
    letter: "A",
    entries: [
      {
        title: "ARE.NA",
        description: "A collective archive for ideas, references, and visual thinking.",
        url: "https://www.are.na",
      },
      {
        title: "AIRTABLE",
        description: "Spreadsheet-database hybrid for organizing anything.",
        url: "https://www.airtable.com",
      },
      {
        title: "ANTHROPIC",
        description: "AI safety and research company behind Claude.",
        url: "https://www.anthropic.com",
      },
      {
        title: "ADOBE",
        description: "Creative software suite for design and media.",
        url: "https://www.adobe.com",
      },
      {
        title: "ASANA",
        description: "Work management platform for teams.",
        url: "https://asana.com",
      },
      {
        title: "ANALYTICS",
        description: "Google Analytics for web and app tracking.",
        url: "https://analytics.google.com",
      },
      {
        title: "AUDIBLE",
        description: "Audiobook and podcast service by Amazon.",
        url: "https://www.audible.com",
      },
      {
        title: "AIRBNB",
        description: "Vacation rentals and experiences marketplace.",
        url: "https://www.airbnb.com",
      },
      {
        title: "ARTSTATION",
        description: "Portfolio platform for game and film artists.",
        url: "https://www.artstation.com",
      },
      {
        title: "ALGOLIA",
        description: "Lightning-fast search API for developers.",
        url: "https://www.algolia.com",
      },
      {
        title: "AWWWARDS",
        description: "Awards for design, creativity, and innovation.",
        url: "https://www.awwwards.com",
      },
      {
        title: "ANKI",
        description: "Powerful spaced repetition flashcard app.",
        url: "https://apps.ankiweb.net",
      },
      {
        title: "ASSEMBLYAI",
        description: "AI models for speech recognition and audio intelligence.",
        url: "https://www.assemblyai.com",
      },
    ],
  },
  {
    letter: "B",
    entries: [
      {
        title: "BANDCAMP",
        description: "Music platform supporting independent artists.",
        url: "https://bandcamp.com",
      },
      {
        title: "BEHANCE",
        description: "Portfolio platform for creative professionals.",
        url: "https://www.behance.net",
      },
      {
        title: "BLUESKY",
        description: "Decentralized social network built on AT Protocol.",
        url: "https://bsky.app",
      },
      {
        title: "BUTTONDOWN",
        description: "Minimal newsletter platform for writers.",
        url: "https://buttondown.email",
      },
      {
        title: "BASECAMP",
        description: "Project management and team communication tool.",
        url: "https://basecamp.com",
      },
      {
        title: "BUFFER",
        description: "Social media management platform.",
        url: "https://buffer.com",
      },
      {
        title: "BING",
        description: "Microsoft's search engine.",
        url: "https://www.bing.com",
      },
      {
        title: "BITBUCKET",
        description: "Git repository management by Atlassian.",
        url: "https://bitbucket.org",
      },
      {
        title: "BRILLIANT",
        description: "Learn by doing with interactive STEM courses.",
        url: "https://brilliant.org",
      },
      {
        title: "BENTO",
        description: "Beautiful link-in-bio pages for creators.",
        url: "https://bento.me",
      },
      {
        title: "BOLT",
        description: "AI-powered full-stack web development in the browser.",
        url: "https://bolt.new",
      },
    ],
  },
  {
    letter: "C",
    entries: [
      {
        title: "CURSOR",
        description: "AI-powered code editor for modern development.",
        url: "https://cursor.sh",
      },
      {
        title: "CANVA",
        description: "Simple graphic design tool for everyone.",
        url: "https://www.canva.com",
      },
      {
        title: "CRAFT",
        description: "Beautiful documents and notes for Mac and iOS.",
        url: "https://www.craft.do",
      },
      {
        title: "CLIPDROP",
        description: "AI-powered image editing and generation tools.",
        url: "https://clipdrop.co",
      },
      {
        title: "COSMOS",
        description: "Internet-native publishing and blogging platform.",
        url: "https://cosmos.so",
      },
      {
        title: "COURSERA",
        description: "Online courses from top universities.",
        url: "https://www.coursera.org",
      },
      {
        title: "CODEPEN",
        description: "Social development environment for front-end code.",
        url: "https://codepen.io",
      },
      {
        title: "CALENDLY",
        description: "Scheduling automation platform.",
        url: "https://calendly.com",
      },
      {
        title: "CLICKUP",
        description: "All-in-one productivity platform.",
        url: "https://clickup.com",
      },
      {
        title: "CLAUDE",
        description: "AI assistant by Anthropic.",
        url: "https://claude.ai",
      },
      {
        title: "CAL.COM",
        description: "Open-source scheduling infrastructure.",
        url: "https://cal.com",
      },
      {
        title: "CRON",
        description: "Next-generation calendar for professionals.",
        url: "https://cron.com",
      },
      {
        title: "CHATGPT",
        description: "Conversational AI by OpenAI.",
        url: "https://chat.openai.com",
      },
      {
        title: "COPILOT",
        description: "GitHub's AI pair programmer.",
        url: "https://github.com/features/copilot",
      },
      {
        title: "COHERE",
        description: "Language AI platform for developers.",
        url: "https://cohere.com",
      },
      {
        title: "COPY.AI",
        description: "AI-powered content generation tool.",
        url: "https://www.copy.ai",
      },
    ],
  },
  {
    letter: "D",
    entries: [
      {
        title: "DISCORD",
        description: "Voice, video, and text chat for communities.",
        url: "https://discord.com",
      },
      {
        title: "DROPBOX",
        description: "Cloud storage and file synchronization service.",
        url: "https://www.dropbox.com",
      },
      {
        title: "DRIBBBLE",
        description: "Design community and portfolio showcase.",
        url: "https://dribbble.com",
      },
      {
        title: "DESCRIPT",
        description: "All-in-one audio and video editing.",
        url: "https://www.descript.com",
      },
      {
        title: "DUOLINGO",
        description: "Language learning platform.",
        url: "https://www.duolingo.com",
      },
      {
        title: "DEVIANTART",
        description: "Online art community and platform.",
        url: "https://www.deviantart.com",
      },
      {
        title: "DATADOG",
        description: "Monitoring and analytics platform.",
        url: "https://www.datadoghq.com",
      },
      {
        title: "DEV.TO",
        description: "Community of software developers sharing knowledge.",
        url: "https://dev.to",
      },
      {
        title: "DAILY.DEV",
        description: "Personalized news feed for developers.",
        url: "https://daily.dev",
      },
      {
        title: "DALLE",
        description: "AI system for creating images from text descriptions.",
        url: "https://openai.com/dall-e-3",
      },
      {
        title: "DEEPGRAM",
        description: "AI speech recognition and understanding.",
        url: "https://deepgram.com",
      },
    ],
  },
  {
    letter: "E",
    entries: [
      {
        title: "EXCALIDRAW",
        description: "Virtual whiteboard for sketching hand-drawn diagrams.",
        url: "https://excalidraw.com",
      },
      {
        title: "EVERNOTE",
        description: "Note-taking and organization application.",
        url: "https://evernote.com",
      },
      {
        title: "ELEVENLABS",
        description: "AI voice generation and cloning platform.",
        url: "https://elevenlabs.io",
      },
      {
        title: "ETSY",
        description: "Marketplace for handmade and vintage items.",
        url: "https://www.etsy.com",
      },
      {
        title: "ELASTICSEARCH",
        description: "Search and analytics engine.",
        url: "https://www.elastic.co",
      },
      {
        title: "EXPENSIFY",
        description: "Expense management and tracking.",
        url: "https://www.expensify.com",
      },
      {
        title: "EPIC GAMES",
        description: "Game development tools and digital store.",
        url: "https://www.epicgames.com",
      },
    ],
  },
  {
    letter: "F",
    entries: [
      {
        title: "FIGMA",
        description: "Collaborative design software for modern interfaces.",
        url: "https://www.figma.com",
      },
      {
        title: "FRAMER",
        description: "Design and publish websites without code.",
        url: "https://www.framer.com",
      },
      {
        title: "FARCASTER",
        description: "Decentralized social network protocol.",
        url: "https://www.farcaster.xyz",
      },
      {
        title: "FEEDLY",
        description: "RSS reader for staying informed.",
        url: "https://feedly.com",
      },
      {
        title: "FIREFOX",
        description: "Open-source web browser by Mozilla.",
        url: "https://www.mozilla.org/firefox",
      },
      {
        title: "FACEBOOK",
        description: "Social networking platform.",
        url: "https://www.facebook.com",
      },
      {
        title: "FIGMAJAM",
        description: "Collaborative whiteboard by Figma.",
        url: "https://www.figma.com/figjam",
      },
      {
        title: "FLIGHTRADAR24",
        description: "Real-time flight tracking service.",
        url: "https://www.flightradar24.com",
      },
      {
        title: "FONT SHARE",
        description: "Free fonts for commercial use.",
        url: "https://www.fontshare.com",
      },
      {
        title: "FUTURELAND",
        description: "Public journaling for projects and learning.",
        url: "https://futureland.tv",
      },
    ],
  },
  {
    letter: "G",
    entries: [
      {
        title: "GITHUB",
        description: "Code hosting and collaboration platform.",
        url: "https://github.com",
      },
      {
        title: "GMAIL",
        description: "Email service by Google.",
        url: "https://gmail.com",
      },
      {
        title: "GOODREADS",
        description: "Social cataloging website for book lovers.",
        url: "https://www.goodreads.com",
      },
      {
        title: "GIPHY",
        description: "Animated GIF search engine and library.",
        url: "https://giphy.com",
      },
      {
        title: "GRAMMARLY",
        description: "Writing assistant for clear communication.",
        url: "https://www.grammarly.com",
      },
      {
        title: "GOOGLE DRIVE",
        description: "Cloud storage and file sharing by Google.",
        url: "https://drive.google.com",
      },
      {
        title: "GITLAB",
        description: "DevOps platform for the entire software lifecycle.",
        url: "https://gitlab.com",
      },
      {
        title: "GUMROAD",
        description: "Platform for selling digital products.",
        url: "https://gumroad.com",
      },
      {
        title: "GOOGLE MAPS",
        description: "Navigation and local search service.",
        url: "https://maps.google.com",
      },
      {
        title: "GAMMA",
        description: "AI-powered presentations and documents.",
        url: "https://gamma.app",
      },
      {
        title: "GODOT",
        description: "Open-source game engine.",
        url: "https://godotengine.org",
      },
    ],
  },
  {
    letter: "H",
    entries: [
      {
        title: "HEY",
        description: "Email service designed for focus and privacy.",
        url: "https://www.hey.com",
      },
      {
        title: "HACKER NEWS",
        description: "Social news website for tech and startups.",
        url: "https://news.ycombinator.com",
      },
      {
        title: "HUGGING FACE",
        description: "Platform for machine learning and AI models.",
        url: "https://huggingface.co",
      },
      {
        title: "HASHNODE",
        description: "Blogging platform for developers.",
        url: "https://hashnode.com",
      },
      {
        title: "HEROKU",
        description: "Cloud platform for deploying apps.",
        url: "https://www.heroku.com",
      },
      {
        title: "HOVER",
        description: "Domain name registration service.",
        url: "https://www.hover.com",
      },
      {
        title: "HUMBLE BUNDLE",
        description: "Game bundles supporting charity.",
        url: "https://www.humblebundle.com",
      },
      {
        title: "HTTPIE",
        description: "Modern command-line HTTP client.",
        url: "https://httpie.io",
      },
    ],
  },
  {
    letter: "I",
    entries: [
      {
        title: "INSTAGRAM",
        description: "Photo and video sharing social network.",
        url: "https://www.instagram.com",
      },
      {
        title: "IMGUR",
        description: "Online image sharing and hosting service.",
        url: "https://imgur.com",
      },
      {
        title: "INVISION",
        description: "Digital product design platform.",
        url: "https://www.invisionapp.com",
      },
      {
        title: "IFTTT",
        description: "Automation service connecting apps and devices.",
        url: "https://ifttt.com",
      },
      {
        title: "INDIE HACKERS",
        description: "Community for independent makers.",
        url: "https://www.indiehackers.com",
      },
      {
        title: "ICLOUD",
        description: "Apple's cloud storage and sync service.",
        url: "https://www.icloud.com",
      },
      {
        title: "ITCH.IO",
        description: "Platform for indie games and creators.",
        url: "https://itch.io",
      },
      {
        title: "INSOMNIA",
        description: "Open-source API client and design tool.",
        url: "https://insomnia.rest",
      },
    ],
  },
  {
    letter: "J",
    entries: [
      {
        title: "JIRA",
        description: "Project management tool for software teams.",
        url: "https://www.atlassian.com/software/jira",
      },
      {
        title: "JUPYTER",
        description: "Open-source notebooks for data science.",
        url: "https://jupyter.org",
      },
      {
        title: "JSBIN",
        description: "Collaborative JavaScript debugging tool.",
        url: "https://jsbin.com",
      },
      {
        title: "JSFIDDLE",
        description: "Online IDE for web development.",
        url: "https://jsfiddle.net",
      },
      {
        title: "JEST",
        description: "Delightful JavaScript testing framework.",
        url: "https://jestjs.io",
      },
    ],
  },
  {
    letter: "K",
    entries: [
      {
        title: "KICKSTARTER",
        description: "Crowdfunding platform for creative projects.",
        url: "https://www.kickstarter.com",
      },
      {
        title: "KOFI",
        description: "Creator support platform for tips and memberships.",
        url: "https://ko-fi.com",
      },
      {
        title: "KHAN ACADEMY",
        description: "Free online education platform.",
        url: "https://www.khanacademy.org",
      },
      {
        title: "KRISP",
        description: "AI-powered noise cancellation for calls.",
        url: "https://krisp.ai",
      },
      {
        title: "KEYBASE",
        description: "Secure messaging and file sharing.",
        url: "https://keybase.io",
      },
      {
        title: "KAGGLE",
        description: "Platform for data science competitions.",
        url: "https://www.kaggle.com",
      },
      {
        title: "KRITA",
        description: "Free and open-source painting program.",
        url: "https://krita.org",
      },
    ],
  },
  {
    letter: "L",
    entries: [
      {
        title: "LETTERBOXD",
        description: "Social platform for film enthusiasts.",
        url: "https://letterboxd.com",
      },
      {
        title: "LINEAR",
        description: "Issue tracking tool for modern software teams.",
        url: "https://linear.app",
      },
      {
        title: "LOOM",
        description: "Video messaging for work.",
        url: "https://www.loom.com",
      },
      {
        title: "LINKEDIN",
        description: "Professional networking platform.",
        url: "https://www.linkedin.com",
      },
      {
        title: "LOGSEQ",
        description: "Privacy-first knowledge base that works on local files.",
        url: "https://logseq.com",
      },
      {
        title: "LAST.FM",
        description: "Music recommendation and tracking service.",
        url: "https://www.last.fm",
      },
      {
        title: "LEMLIST",
        description: "Cold email outreach platform.",
        url: "https://www.lemlist.com",
      },
      {
        title: "LINKTREE",
        description: "Link-in-bio tool for creators.",
        url: "https://linktr.ee",
      },
      {
        title: "LICHESS",
        description: "Free, open-source chess server.",
        url: "https://lichess.org",
      },
      {
        title: "LURKIT",
        description: "Game marketing platform for indie devs.",
        url: "https://lurkit.com",
      },
      {
        title: "LOVABLE",
        description: "AI-powered app builder for creating full-stack applications.",
        url: "https://lovable.dev",
      },
      {
        title: "LEONARDO.AI",
        description: "AI image generation for creative projects.",
        url: "https://leonardo.ai",
      },
    ],
  },
  {
    letter: "M",
    entries: [
      {
        title: "MIRO",
        description: "Online collaborative whiteboard platform.",
        url: "https://miro.com",
      },
      {
        title: "MEDIUM",
        description: "Online publishing platform for stories and ideas.",
        url: "https://medium.com",
      },
      {
        title: "MASTODON",
        description: "Decentralized social network.",
        url: "https://joinmastodon.org",
      },
      {
        title: "MAILCHIMP",
        description: "Email marketing and automation platform.",
        url: "https://mailchimp.com",
      },
      {
        title: "MONDAY",
        description: "Work operating system for teams.",
        url: "https://monday.com",
      },
      {
        title: "MICROSOFT 365",
        description: "Productivity apps and cloud services.",
        url: "https://www.microsoft.com/microsoft-365",
      },
      {
        title: "MIXPANEL",
        description: "Product analytics platform.",
        url: "https://mixpanel.com",
      },
      {
        title: "MARKDOWN",
        description: "Lightweight markup language documentation.",
        url: "https://www.markdownguide.org",
      },
      {
        title: "MIDJOURNEY",
        description: "AI art generation platform.",
        url: "https://www.midjourney.com",
      },
      {
        title: "MMHMM",
        description: "Virtual camera for better video presentations.",
        url: "https://www.mmhmm.app",
      },
    ],
  },
  {
    letter: "N",
    entries: [
      {
        title: "NOTION",
        description: "All-in-one workspace for notes, docs, and collaboration.",
        url: "https://www.notion.so",
      },
      {
        title: "NETLIFY",
        description: "Platform for deploying and hosting modern web projects.",
        url: "https://www.netlify.com",
      },
      {
        title: "NPM",
        description: "Package manager for JavaScript.",
        url: "https://www.npmjs.com",
      },
      {
        title: "NOMAD LIST",
        description: "Best places to live and work remotely.",
        url: "https://nomadlist.com",
      },
      {
        title: "NETFLIX",
        description: "Streaming service for movies and TV shows.",
        url: "https://www.netflix.com",
      },
      {
        title: "NOTION CALENDAR",
        description: "Calendar app by Notion.",
        url: "https://www.notion.so/product/calendar",
      },
      {
        title: "NEWSBLUR",
        description: "Personal news reader with intelligence.",
        url: "https://newsblur.com",
      },
      {
        title: "NEXT.JS",
        description: "React framework for production.",
        url: "https://nextjs.org",
      },
      {
        title: "NEON",
        description: "Serverless Postgres database.",
        url: "https://neon.tech",
      },
    ],
  },
  {
    letter: "O",
    entries: [
      {
        title: "OBSIDIAN",
        description: "Local-first knowledge base for linked thinking.",
        url: "https://obsidian.md",
      },
      {
        title: "OPENAI",
        description: "AI research company behind ChatGPT and GPT-4.",
        url: "https://openai.com",
      },
      {
        title: "OTTER.AI",
        description: "AI meeting assistant for transcription.",
        url: "https://otter.ai",
      },
      {
        title: "OVERCAST",
        description: "Podcast player for iOS.",
        url: "https://overcast.fm",
      },
      {
        title: "OUTLOOK",
        description: "Email and calendar service by Microsoft.",
        url: "https://outlook.com",
      },
      {
        title: "ONENOTE",
        description: "Digital notebook by Microsoft.",
        url: "https://www.onenote.com",
      },
      {
        title: "OMNI GROUP",
        description: "Productivity apps for Mac and iOS.",
        url: "https://www.omnigroup.com",
      },
      {
        title: "OTTER",
        description: "Browser with AI built-in.",
        url: "https://otter.ai",
      },
    ],
  },
  {
    letter: "P",
    entries: [
      {
        title: "PINTEREST",
        description: "Visual discovery and bookmarking platform.",
        url: "https://www.pinterest.com",
      },
      {
        title: "PERPLEXITY",
        description: "AI-powered answer engine.",
        url: "https://www.perplexity.ai",
      },
      {
        title: "PATREON",
        description: "Membership platform for creators.",
        url: "https://www.patreon.com",
      },
      {
        title: "PRODUCT HUNT",
        description: "Platform for discovering new products.",
        url: "https://www.producthunt.com",
      },
      {
        title: "PITCH",
        description: "Collaborative presentation software.",
        url: "https://pitch.com",
      },
      {
        title: "PLEX",
        description: "Media server and streaming platform.",
        url: "https://www.plex.tv",
      },
      {
        title: "PHOTOPEA",
        description: "Free online photo editor.",
        url: "https://www.photopea.com",
      },
      {
        title: "POSTMAN",
        description: "API development and testing platform.",
        url: "https://www.postman.com",
      },
      {
        title: "POCKET",
        description: "Save articles and videos for later.",
        url: "https://getpocket.com",
      },
      {
        title: "POLYWORK",
        description: "Professional network for collaboration.",
        url: "https://www.polywork.com",
      },
      {
        title: "PENPOT",
        description: "Open-source design and prototyping platform.",
        url: "https://penpot.app",
      },
    ],
  },
  {
    letter: "Q",
    entries: [
      {
        title: "QUORA",
        description: "Question and answer platform.",
        url: "https://www.quora.com",
      },
      {
        title: "QUICKBOOKS",
        description: "Accounting software for small businesses.",
        url: "https://quickbooks.intuit.com",
      },
      {
        title: "QWIKLABS",
        description: "Hands-on cloud computing training.",
        url: "https://www.qwiklabs.com",
      },
      {
        title: "QUILL",
        description: "Modern rich text editor for the web.",
        url: "https://quilljs.com",
      },
    ],
  },
  {
    letter: "R",
    entries: [
      {
        title: "REDDIT",
        description: "Social news aggregation and discussion website.",
        url: "https://www.reddit.com",
      },
      {
        title: "REPLIT",
        description: "Online IDE and collaborative coding platform.",
        url: "https://replit.com",
      },
      {
        title: "READWISE",
        description: "Tool for resurfacing highlights from books and articles.",
        url: "https://readwise.io",
      },
      {
        title: "RUNWAY",
        description: "AI-powered creative tools for video and images.",
        url: "https://runwayml.com",
      },
      {
        title: "RAINDROP",
        description: "Smart bookmarks manager.",
        url: "https://raindrop.io",
      },
      {
        title: "ROAM RESEARCH",
        description: "Note-taking tool for networked thought.",
        url: "https://roamresearch.com",
      },
      {
        title: "REFLECT",
        description: "Networked note-taking app.",
        url: "https://reflect.app",
      },
      {
        title: "RAYCAST",
        description: "Supercharged productivity launcher for Mac.",
        url: "https://www.raycast.com",
      },
      {
        title: "RAILWAY",
        description: "Infrastructure platform for deploying apps.",
        url: "https://railway.app",
      },
      {
        title: "RENAISSANCE",
        description: "Experimental web browser for Mac.",
        url: "https://www.renaissance.app",
      },
    ],
  },
  {
    letter: "S",
    entries: [
      {
        title: "SLACK",
        description: "Business communication platform for teams.",
        url: "https://slack.com",
      },
      {
        title: "SPOTIFY",
        description: "Music streaming and podcast platform.",
        url: "https://www.spotify.com",
      },
      {
        title: "SUBSTACK",
        description: "Newsletter platform for independent writers.",
        url: "https://substack.com",
      },
      {
        title: "STACKOVERFLOW",
        description: "Q&A community for programmers.",
        url: "https://stackoverflow.com",
      },
      {
        title: "STRIPE",
        description: "Payment processing platform for internet businesses.",
        url: "https://stripe.com",
      },
      {
        title: "SUPERHUMAN",
        description: "Fastest email experience ever made.",
        url: "https://superhuman.com",
      },
      {
        title: "SKETCH",
        description: "Digital design toolkit for Mac.",
        url: "https://www.sketch.com",
      },
      {
        title: "SANITY",
        description: "Platform for structured content.",
        url: "https://www.sanity.io",
      },
      {
        title: "STACKBLITZ",
        description: "Instant dev environments in the browser.",
        url: "https://stackblitz.com",
      },
      {
        title: "SENDGRID",
        description: "Email delivery service.",
        url: "https://sendgrid.com",
      },
      {
        title: "SHOPIFY",
        description: "E-commerce platform for online stores.",
        url: "https://www.shopify.com",
      },
      {
        title: "SUPABASE",
        description: "Open-source Firebase alternative.",
        url: "https://supabase.com",
      },
      {
        title: "SPLINE",
        description: "3D design tool in the browser.",
        url: "https://spline.design",
      },
      {
        title: "SVELTE",
        description: "Cybernetically enhanced web apps framework.",
        url: "https://svelte.dev",
      },
    ],
  },
  {
    letter: "T",
    entries: [
      {
        title: "TWITTER",
        description: "Social media platform for real-time updates.",
        url: "https://twitter.com",
      },
      {
        title: "TIKTOK",
        description: "Short-form video hosting service.",
        url: "https://www.tiktok.com",
      },
      {
        title: "TELEGRAM",
        description: "Cloud-based instant messaging service.",
        url: "https://telegram.org",
      },
      {
        title: "TRELLO",
        description: "Visual collaboration tool for organizing projects.",
        url: "https://trello.com",
      },
      {
        title: "TWITCH",
        description: "Live streaming platform for gaming and entertainment.",
        url: "https://www.twitch.tv",
      },
      {
        title: "TYPEFORM",
        description: "Form and survey builder with conversational UI.",
        url: "https://www.typeform.com",
      },
      {
        title: "TODOIST",
        description: "Task management and to-do list app.",
        url: "https://todoist.com",
      },
      {
        title: "TAILWIND CSS",
        description: "Utility-first CSS framework.",
        url: "https://tailwindcss.com",
      },
      {
        title: "THREADS",
        description: "Text-based social media by Meta.",
        url: "https://www.threads.net",
      },
      {
        title: "TANA",
        description: "Intelligent all-in-one workspace.",
        url: "https://tana.inc",
      },
      {
        title: "TLDRAW",
        description: "Infinite canvas for sketching and diagramming.",
        url: "https://www.tldraw.com",
      },
    ],
  },
  {
    letter: "U",
    entries: [
      {
        title: "UNSPLASH",
        description: "Free high-resolution photos library.",
        url: "https://unsplash.com",
      },
      {
        title: "UDEMY",
        description: "Online learning platform with courses.",
        url: "https://www.udemy.com",
      },
      {
        title: "UPWORK",
        description: "Freelancing platform connecting clients and talent.",
        url: "https://www.upwork.com",
      },
      {
        title: "UBER",
        description: "Ride-sharing and delivery service.",
        url: "https://www.uber.com",
      },
      {
        title: "UNITY",
        description: "Cross-platform game engine.",
        url: "https://unity.com",
      },
      {
        title: "UNREAL ENGINE",
        description: "3D creation platform by Epic Games.",
        url: "https://www.unrealengine.com",
      },
      {
        title: "USES THIS",
        description: "Interviews asking people what they use to get stuff done.",
        url: "https://usesthis.com",
      },
    ],
  },
  {
    letter: "V",
    entries: [
      {
        title: "VERCEL",
        description: "Platform for frontend developers.",
        url: "https://vercel.com",
      },
      {
        title: "VIMEO",
        description: "Video hosting and sharing platform.",
        url: "https://vimeo.com",
      },
      {
        title: "VS CODE",
        description: "Free source-code editor by Microsoft.",
        url: "https://code.visualstudio.com",
      },
      {
        title: "V0",
        description: "AI-powered UI generation by Vercel.",
        url: "https://v0.dev",
      },
      {
        title: "VUE.JS",
        description: "Progressive JavaScript framework.",
        url: "https://vuejs.org",
      },
      {
        title: "VSCODE.DEV",
        description: "VS Code in the browser.",
        url: "https://vscode.dev",
      },
      {
        title: "VITE",
        description: "Next generation frontend tooling.",
        url: "https://vitejs.dev",
      },
    ],
  },
  {
    letter: "W",
    entries: [
      {
        title: "WIKIPEDIA",
        description: "Free online encyclopedia.",
        url: "https://www.wikipedia.org",
      },
      {
        title: "WHATSAPP",
        description: "Encrypted messaging application.",
        url: "https://www.whatsapp.com",
      },
      {
        title: "WEBFLOW",
        description: "No-code website builder and hosting platform.",
        url: "https://webflow.com",
      },
      {
        title: "WARP",
        description: "Modern terminal built for the 21st century.",
        url: "https://www.warp.dev",
      },
      {
        title: "WORDPRESS",
        description: "Content management system for websites.",
        url: "https://wordpress.com",
      },
      {
        title: "WAZE",
        description: "Community-driven navigation app.",
        url: "https://www.waze.com",
      },
      {
        title: "WEBSTORM",
        description: "JavaScript IDE by JetBrains.",
        url: "https://www.jetbrains.com/webstorm",
      },
      {
        title: "WINDY",
        description: "Weather forecast visualization.",
        url: "https://www.windy.com",
      },
      {
        title: "WRITEAS",
        description: "Minimalist writing and publishing platform.",
        url: "https://write.as",
      },
    ],
  },
  {
    letter: "X",
    entries: [
      {
        title: "X (TWITTER)",
        description: "Real-time social media platform.",
        url: "https://x.com",
      },
      {
        title: "XCODE",
        description: "IDE for Apple platform development.",
        url: "https://developer.apple.com/xcode",
      },
    ],
  },
  {
    letter: "Y",
    entries: [
      {
        title: "YOUTUBE",
        description: "Video sharing and streaming platform.",
        url: "https://www.youtube.com",
      },
      {
        title: "Y COMBINATOR",
        description: "Startup accelerator and seed funding program.",
        url: "https://www.ycombinator.com",
      },
      {
        title: "YELP",
        description: "Business directory and reviews platform.",
        url: "https://www.yelp.com",
      },
      {
        title: "YOAST",
        description: "SEO plugin for WordPress.",
        url: "https://yoast.com",
      },
    ],
  },
  {
    letter: "Z",
    entries: [
      {
        title: "ZOOM",
        description: "Video conferencing and online meetings platform.",
        url: "https://zoom.us",
      },
      {
        title: "ZENDESK",
        description: "Customer service and support platform.",
        url: "https://www.zendesk.com",
      },
      {
        title: "ZAPIER",
        description: "Automation tool connecting apps and services.",
        url: "https://zapier.com",
      },
      {
        title: "ZOTERO",
        description: "Reference management software for researchers.",
        url: "https://www.zotero.org",
      },
      {
        title: "ZENHUB",
        description: "Agile project management for GitHub.",
        url: "https://www.zenhub.com",
      },
    ],
  },
]
