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
  email: "hello@thea21.in",
  phone: "+91 82690 06693",
  // 👇 Akshat ka WhatsApp number — international format, sirf digits
  // (no +, no spaces). India ke liye 91 se shuru. Example: "919876543210"
  whatsapp: "+91 82690 06693",
  location: "India · Remote Worldwide",
  // 👇 Jab social accounts ban jayein, yahan real URLs daal do — footer me
  // icon apne aap dikhne lagega. Abhi khali hai isliye footer me socials hide hain.
  socials: {
    instagram: "",
    linkedin: "",
    twitter: "",
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Premium Web Design & Development Studio",
  lines: ["We Build", "Premium Digital", "Experiences."],
  rotating: ["Websites.", "Landing Pages.", "Ecommerce.", "Dashboards.", "Web Apps."],
  subtitle:
    "From idea to launch — we craft fast, modern, conversion-focused websites that make brands look world-class.",
};

export const stats = [
  { value: "100%", label: "Custom-Built" },
  { value: "<2s", label: "Load Time Focus" },
  { value: "7+", label: "Industries Covered" },
  { value: "24/7", label: "Support" },
];

export const services = [
  {
    title: "Website Design",
    desc: "Pixel-perfect, on-brand designs that feel premium from the first scroll.",
    icon: "Palette",
  },
  {
    title: "Landing Pages",
    desc: "High-converting pages engineered to turn visitors into customers.",
    icon: "Rocket",
  },
  {
    title: "Ecommerce",
    desc: "Fast, secure online stores built to sell and scale effortlessly.",
    icon: "ShoppingBag",
  },
  {
    title: "Business Websites",
    desc: "Professional sites that build instant trust with your audience.",
    icon: "Building2",
  },
  {
    title: "Web Apps",
    desc: "Custom dashboards and tools tailored to your workflow.",
    icon: "LayoutDashboard",
  },
  {
    title: "SEO & Performance",
    desc: "Lightning-fast, search-optimized builds that rank and load instantly.",
    icon: "Gauge",
  },
];

export const projects = [
  {
    title: "Savory",
    category: "Restaurant",
    tag: "Web Design",
    variant: "restaurant",
    blurb:
      "A premium, appetite-driven website for a fine-dining restaurant — built to fill tables and make the brand feel unforgettable.",
    includes: ["Hero & branding", "Interactive menu", "Online reservations", "Photo gallery", "Reviews", "Location & hours"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Headless CMS"],
  },
  {
    title: "PulseFit",
    category: "Gym & Fitness",
    tag: "Landing Page",
    variant: "fitness",
    blurb:
      "A high-energy landing page for a gym, engineered to convert visitors into members with bold visuals and clear CTAs.",
    includes: ["Bold hero", "Membership plans", "Class schedule", "Trainer profiles", "Testimonials", "Join / CTA"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Forms"],
  },
  {
    title: "MediCare",
    category: "Hospital",
    tag: "Business Site",
    variant: "hospital",
    blurb:
      "A clean, trustworthy website for a hospital that makes booking an appointment effortless and reassures patients.",
    includes: ["Hero & trust badges", "Departments", "Doctor profiles", "Appointment booking", "Patient resources", "Contact"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Booking API"],
  },
  {
    title: "Wanderly",
    category: "Travel",
    tag: "Ecommerce",
    variant: "travel",
    blurb:
      "A vibrant travel ecommerce experience for browsing destinations, comparing packages and booking in a few taps.",
    includes: ["Destination catalog", "Search & filters", "Package pages", "Booking flow", "Secure payments", "Reviews"],
    stack: ["Next.js", "Tailwind", "Stripe", "Framer Motion"],
  },
  {
    title: "Nimbus",
    category: "SaaS Dashboard",
    tag: "Web App",
    variant: "dashboard",
    blurb:
      "A sleek analytics dashboard for a SaaS product — real-time data, clean charts and a fast, app-like experience.",
    includes: ["Auth & roles", "Analytics charts", "Data tables", "Stat widgets", "Dark UI", "Fully responsive"],
    stack: ["Next.js", "Tailwind", "Charts", "PostgreSQL"],
  },
  {
    title: "Atelier",
    category: "Creative Agency",
    tag: "Portfolio",
    variant: "agency",
    blurb:
      "A striking portfolio for a creative agency that lets the work speak, with bold typography and smooth motion.",
    includes: ["Striking hero", "Portfolio grid", "Case studies", "Services", "About / team", "Contact"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "GSAP"],
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

// Honest social proof for a new studio — commitments, not fabricated reviews.
export const promises = [
  { title: "24-Hour Response", desc: "We reply to every enquiry within a day — no ghosting, ever.", icon: "Clock" },
  { title: "Fixed, Transparent Pricing", desc: "A clear quote upfront. No surprises, no hidden fees.", icon: "Wallet" },
  { title: "Revisions Till You're Happy", desc: "We refine the design until it feels exactly right.", icon: "RefreshCw" },
  { title: "On-Time Delivery", desc: "We agree on a timeline — and we stick to it.", icon: "CalendarCheck" },
  { title: "Code You Own", desc: "Clean, scalable code with zero lock-in. It's yours.", icon: "ShieldCheck" },
  { title: "Post-Launch Support", desc: "We're here after launch for updates and peace of mind.", icon: "LifeBuoy" },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "Most landing pages take 3–5 days, while full business websites typically take 1–2 weeks depending on scope.",
  },
  {
    q: "How much does a website cost?",
    a: "Every project is custom. After a quick discovery call we send a fixed, transparent quote — no hidden fees.",
  },
  {
    q: "Do you provide maintenance?",
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

export const budgets = ["< ₹25k", "₹25k – ₹50k", "₹50k – ₹1L", "₹1L+"];
