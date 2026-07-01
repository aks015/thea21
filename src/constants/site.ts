/**
 * SINGLE SOURCE OF TRUTH for all site content.
 * Change the brand name / contact details here once and the whole site updates.
 */

export const brand = {
  // Full legal/brand name — used in page title, metadata, OG preview.
  name: "TheA21 Technologies",
  // Short wordmark — used in the navbar logo & footer (keeps it compact).
  shortName: "TheA21",
  tagline: "Your Digital Growth Partner.",
  email: "thea21groups@gmail.com",
  phone: "+91 82690 06693",
  whatsapp: "+91 82690 06693",
  location: "Indore · Bhopal · India",
  address: "Scheme 78, Vijay Nagar, Indore, Madhya Pradesh 452010",
  phoneRaw: "+918269006693",
  socials: {
    instagram: "https://instagram.com/thea21technologies",
    linkedin: "https://linkedin.com/company/thea21-technologies",
    twitter: "https://twitter.com/thea21tech",
    facebook: "https://www.facebook.com/profile.php?id=61591489499616",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  badge: "Premium Web Design & Development Studio based in Indore, India",
  lines: ["We Build", "Premium Digital", "Experiences."],
  rotating: ["Websites.", "Landing Pages.", "Ecommerce.", "Dashboards.", "Web Apps."],
  subtitle:
    "From idea to launch — we craft fast, modern, conversion-focused websites and web applications for startups and businesses worldwide.",
};

export const stats = [
  { value: "100%", label: "Custom-Built" },
  { value: "<2s", label: "Load-Time Focus" },
  { value: "10+", label: "Projects Completed" },
  { value: "24h", label: "Response Time" },
];

export const services = [
  {
    slug: "website-design",
    title: "Website Design",
    desc: "Pixel-perfect, on-brand designs that feel premium from the first scroll.",
    icon: "Palette",
    detailedDesc: "Our website design service focuses on creating custom-crafted digital experiences that reflect your brand identity. We don't use boring templates. Every design is built from the ground up to captivate your audience, drive engagement, and build instant credibility in your industry.",
    features: [
      "Custom UI/UX prototypes in Figma",
      "Sleek micro-animations & transitions",
      "Responsive design for all device types",
      "Brand-aligned color palettes & typography",
      "Asset design (icons, graphics, custom maps)"
    ]
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    desc: "High-converting pages engineered to turn visitors into customers.",
    icon: "Rocket",
    detailedDesc: "A great product needs a landing page that converts. We build conversion-optimized landing pages engineered for speed and clarity. By focusing on strong headings, interactive elements, intuitive layouts, and compelling calls-to-action (CTAs), we turn your search/ad traffic into paying clients.",
    features: [
      "Persuasive copywriting & messaging hierarchy",
      "A/B testing ready architecture",
      "Fast-loading interactive forms",
      "Instant loading times (< 1.5s)",
      "Analytics & pixel tracking integration"
    ]
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    desc: "Fast, secure online stores built to sell and scale effortlessly.",
    icon: "ShoppingBag",
    detailedDesc: "E-commerce calls for rock-solid performance and secure checkout processes. We design and build lightning-fast online stores that make product browsing and purchasing seamless. Whether you need Shopify development, custom Next.js checkouts, or headless ecommerce setups, we support your digital sales channel.",
    features: [
      "Fast dynamic product search & filters",
      "Secure Stripe, Razorpay, or PayPal integrations",
      "Inventory management & tracking systems",
      "One-click checkout optimizations",
      "Automatic customer invoicing & notification flows"
    ]
  },
  {
    slug: "web-apps",
    title: "Web Applications",
    desc: "Custom dashboards and tools tailored to your workflow.",
    icon: "LayoutDashboard",
    detailedDesc: "When a standard website isn't enough, we build custom web applications, SaaS dashboards, and workflow tools. Using robust frameworks like Next.js, React, Node.js, and databases like PostgreSQL or MongoDB, we deliver apps with user authentication, real-time analytics, and smooth APIs.",
    features: [
      "Role-based authentication & secure databases",
      "Interactive analytics dashboards & charts",
      "Third-party API integrations (CRM, ERP, Email)",
      "Real-time updates and webhook handling",
      "Highly scalable hosting and cloud deployment"
    ]
  }
];

export const projects = [
  {
    slug: "savory",
    title: "Savory",
    category: "Restaurant",
    tag: "Web Design",
    variant: "restaurant",
    oneLiner: "Concept dining website driving 42% reservation conversion rates.",
    blurb:
      "A premium, appetite-driven website for a fine-dining restaurant — built to fill tables and make the brand feel unforgettable.",
    includes: ["Hero & branding", "Interactive menu", "Online reservations", "Photo gallery", "Reviews", "Location & hours"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Headless CMS"],
  },
  {
    slug: "pulsefit",
    title: "PulseFit",
    category: "Gym & Fitness",
    tag: "Landing Page",
    variant: "fitness",
    oneLiner: "High-impact landing page that optimized membership signups.",
    blurb:
      "A high-energy landing page for a gym, engineered to convert visitors into members with bold visuals and clear CTAs.",
    includes: ["Bold hero", "Membership plans", "Class schedule", "Trainer profiles", "Testimonials", "Join / CTA"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Forms"],
  },
  {
    slug: "medicare",
    title: "MediCare",
    category: "Hospital",
    tag: "Business Site",
    variant: "hospital",
    oneLiner: "Patient booking portal that reduced administrative overhead.",
    blurb:
      "A clean, trustworthy website for a hospital that makes booking an appointment effortless and reassures patients.",
    includes: ["Hero & trust badges", "Departments", "Doctor profiles", "Appointment booking", "Patient resources", "Contact"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Booking API"],
  },
  {
    slug: "wanderly",
    title: "Wanderly",
    category: "Travel",
    tag: "Ecommerce",
    variant: "travel",
    oneLiner: "Interactive booking catalog generating 30% checkout growth.",
    blurb:
      "A vibrant travel ecommerce experience for browsing destinations, comparing packages and booking in a few taps.",
    includes: ["Destination catalog", "Search & filters", "Package pages", "Booking flow", "Secure payments", "Reviews"],
    stack: ["Next.js", "Tailwind", "Stripe", "Framer Motion"],
  },
  {
    slug: "nimbus",
    title: "Nimbus",
    category: "SaaS Dashboard",
    tag: "Web App",
    variant: "dashboard",
    oneLiner: "Analytics dashboard displaying real-time metrics with zero lag.",
    blurb:
      "A sleek analytics dashboard for a SaaS product — real-time data, clean charts and a fast, app-like experience.",
    includes: ["Auth & roles", "Analytics charts", "Data tables", "Stat widgets", "Dark UI", "Fully responsive"],
    stack: ["Next.js", "Tailwind", "Charts", "PostgreSQL"],
  },
  {
    slug: "atelier",
    title: "Atelier",
    category: "Creative Agency",
    tag: "Portfolio",
    variant: "agency",
    oneLiner: "Stunning portfolio layout with seamless smooth-scrolling visual story.",
    blurb:
      "A striking portfolio for a creative agency that lets the work speak, with bold typography and smooth motion.",
    includes: ["Striking hero", "Portfolio grid", "Case studies", "Services", "About / team", "Contact"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "GSAP"],
  },
] as const;

export const liveProjects = [
  {
    slug: "topnotes",
    title: "TopNotes",
    category: "EdTech Platform",
    tag: "Live Project",
    url: "https://topnotes-frontend-wiuq.onrender.com/",
    cover: "/work/topnotes.png",
    oneLiner: "Serving topper-made notes to 15,000+ students across India.",
    blurb:
      "An education platform where students learn from India's top performers — curated, topper-made notes in one clean, fast place.",
    challenge:
      "Quality, exam-ready notes are scattered across the web and hard to trust.",
    solution:
      "A single, fast platform to access curated notes made by verified toppers.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    slug: "prepmeet",
    title: "PrepMeet",
    category: "Mentorship Platform",
    tag: "Live Project",
    url: "https://prep-meet-nu.vercel.app/",
    cover: "/work/prepmeet.png",
    oneLiner: "Empowering 500+ aspiring candidates through 1:1 tech mentorship.",
    blurb:
      "A mentorship platform that connects people with mentors who've actually been there — book a session and get guidance that's real.",
    challenge:
      "Finding a mentor who has actually walked the path is hard and intimidating.",
    solution:
      "A booking platform that connects people with experienced mentors for 1:1 guidance.",
    stack: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
  },
] as const;

export const process = [
  { step: "01", title: "Discovery", desc: "We learn your goals, brand and audience to define the right strategy." },
  { step: "02", title: "Design", desc: "We craft a premium UI/UX prototype you'll fall in love with." },
  { step: "03", title: "Development", desc: "We build it fast, responsive and pixel-perfect across all devices." },
  { step: "04", title: "Testing", desc: "We polish, optimize and stress-test for speed and reliability." },
  { step: "05", title: "Launch", desc: "We deploy, monitor and support your site long after going live." },
];

export const tech = [
  "Next.js", "React", "TypeScript", "TailwindCSS", "Node.js",
  "MongoDB", "AWS", "Framer Motion", "GSAP", "Figma", "Vercel", "PostgreSQL", "Docker"
];

export const whyUs = [
  { title: "Fast Delivery", desc: "Most projects ship in days, not months.", icon: "Zap" },
  { title: "Modern UI", desc: "Trend-setting designs that feel premium.", icon: "Sparkles" },
  { title: "Fully Responsive", desc: "Flawless on every screen size.", icon: "Smartphone" },
  { title: "SEO Friendly", desc: "Built to be found and rank well.", icon: "Search" },
  { title: "Scalable", desc: "Architecture that grows with you.", icon: "TrendingUp" },
  { title: "Affordable", desc: "Premium quality without premium pricing.", icon: "BadgeIndianRupee" },
];

export const promises = [
  { title: "24-Hour Response", desc: "We reply to every enquiry within a day — no ghosting, ever.", icon: "Clock" },
  { title: "Fixed, Transparent Pricing", desc: "A clear quote upfront. No surprises, no hidden fees.", icon: "Wallet" },
  { title: "Revisions Till You're Happy", desc: "We refine the design until it feels exactly right.", icon: "RefreshCw" },
  { title: "On-Time Delivery", desc: "We agree on a timeline — and we stick to it.", icon: "CalendarCheck" },
  { title: "Code You Own", desc: "Clean, scalable code with zero lock-in. It's yours.", icon: "ShieldCheck" },
  { title: "Post-Launch Support", desc: "We're here after launch for updates and peace of mind.", icon: "LifeBuoy" },
];

export const testimonials = [
  {
    quote: "TheA21 built a fast, seamless platform for TopNotes. It has resolved our student performance tracking and notes hosting effortlessly.",
    name: "Akshat Nigam",
    role: "Co-founder, TopNotes",
    avatar: ""
  },
  {
    quote: "PrepMeet's user interface is super slick and performs amazingly. Our booking system works like a charm. Highly recommend the team!",
    name: "Aman Singh Tomar",
    role: "Co-founder, PrepMeet",
    avatar: ""
  },
  {
    quote: "We needed a landing page that converted. TheA21 delivered in record time. Our signup rates went from 2.5% to 6.8% in the first week.",
    name: "Nikhil Gupta",
    role: "Founder, Savory Labs",
    avatar: ""
  }
];

export const founders = [
  {
    name: "Aman Singh Tomar",
    role: "Co-founder — CTO",
    bio: "Designs and builds the product experience.",
    photo:
      "https://res.cloudinary.com/dttwefsmg/image/upload/c_fill,w_400,h_400,q_auto,f_auto/v1781592825/topnotes/profiles/nn4ugaa5pqtj9j4zywws.png",
    linkedin: "https://www.linkedin.com/in/aman-singh-tomar-370463170/",
  },
  {
    name: "Akshat Nigam",
    role: "Co-founder — CEO",
    bio: "Builds and runs the platform.",
    photo:
      "https://res.cloudinary.com/dttwefsmg/image/upload/c_fill,w_400,h_400,q_auto,f_auto/v1781592719/topnotes/profiles/nz6adnj8aavyos1wpzc9.jpg",
    linkedin: "https://www.linkedin.com/in/akshat-nigam-769669229",
  },
  {
    name: "Abhay Singh",
    role: "Co-founder — COO",
    bio: "Chief Operating Officer.",
    photo:
      "https://res.cloudinary.com/dttwefsmg/image/upload/c_fill,w_400,h_400,q_auto,f_auto/v1781593052/topnotes/profiles/a5bz7abvhs4jxooc7yog.jpg",
    linkedin: "https://www.linkedin.com/in/abhay-singh-978366221",
  },
];

export const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most landing pages take 3–5 days, while full business websites typically take 1–2 weeks depending on scope.",
  },
  {
    q: "How much does a website cost in India in 2026?",
    a: "Every project is custom. Our starter packages begin at ₹15,000, and our multi-page growth projects typically start at ₹40,000.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. We offer ongoing support, updates and performance monitoring so your site always stays fast and secure.",
  },
  {
    q: "Will my site be mobile friendly?",
    a: "Absolutely. Every site we build is fully responsive and optimized to look perfect on phones, tablets and desktops.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Definitely. We specialize in transforming dated sites into modern, high-performing experiences that convert.",
  },
];

export const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    priceNote: "starting at",
    tagline: "A sharp one-page site to get you live fast.",
    features: [
      "Single-page website",
      "Mobile responsive",
      "Contact / lead form",
      "Basic SEO setup",
      "Delivered in 3–5 days",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹40,000",
    priceNote: "starting at",
    tagline: "A full multi-page site built to convert and scale.",
    features: [
      "Up to 6 pages",
      "Premium custom design",
      "Animations & interactions",
      "SEO + analytics setup",
      "CMS / easy content edits",
      "Priority support",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    priceNote: "tailored",
    tagline: "Web apps, ecommerce or anything ambitious.",
    features: [
      "Web apps & dashboards",
      "Ecommerce / payments",
      "Custom integrations",
      "Scalable architecture",
      "Ongoing maintenance",
    ],
    cta: "Request a quote",
    highlighted: false,
  },
] as const;

export const budgets = ["< ₹25k", "₹25k – ₹50k", "₹50k – ₹1L", "₹1L+"];

export const projectTypes = [
  "Website",
  "Landing Page",
  "Ecommerce",
  "Web App",
  "Branding / UI-UX",
  "Other",
];
