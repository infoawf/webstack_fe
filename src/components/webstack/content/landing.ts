import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Eye,
  Search,
  Calendar,
  Smartphone,
  DollarSign,
  MonitorX,
  Paintbrush,
  SearchX,
  Bot,
  CalendarX,
  MapPin,
  Layout,
  Layers,
  Palette,
  MousePointer,
  Globe,
  FormInput,
  MessageCircle,
  Sparkles,
  Map as MapIcon,
  Share2,
  CreditCard,
  Wrench,
  BarChart3,
  ShoppingCart,
  Users,
  AppWindow,
  Check,
  Timer,
  Target,
} from "lucide-react";

export const HERO = {
  eyebrow: "For service businesses",
  headline: "Get a Professional Business Website That Gets You Customers",
  headlineAccent: "For $500",
  subheadline:
    "Fast, modern websites for service businesses, with booking, payments, WhatsApp, and AI-ready structure built in.",
  cta: "Get Your Free Website Mockup",
  ctaSecondary: "See pricing",
};

export const HERO_TRUST: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: "Live in 24–72 Hours" },
  { icon: Eye, label: "FREE mockup before you buy" },
  { icon: Search, label: "Built for Google + AI search visibility" },
  { icon: Calendar, label: "Booking + payment integration included" },
  { icon: Smartphone, label: "Mobile optimized & fast loading" },
];

export const MOCKUP_SECTION = {
  eyebrow: "Free mockup first",
  title: "We Design Your Website First. So You Know Exactly What You're Getting",
  description:
    "Before you make any payment, we create a custom mock-up of your website based on your business.",
  youSeeLabel: "You see:",
  points: [
    { icon: Layout, label: "Design layout" },
    { icon: Layers, label: "Structure" },
    { icon: Palette, label: "Branding direction" },
    { icon: MousePointer, label: "User experience" },
  ],
  approvalNote: "Only when you approve it do we start development.",
  trustHeadline: "No guesswork. No risk.",
};

export const PROBLEMS_SECTION = {
  eyebrow: "The problem",
  title: "Most small business websites don't bring customers",
  closing: "We fix that with a conversion-focused website built for leads.",
  items: [
    {
      code: "01",
      title: "Website built in 8–12 weeks costing upwards of $5000",
      icon: DollarSign,
    },
    { code: "02", title: "Old outdated websites", icon: MonitorX },
    { code: "03", title: "DIY pages that look unprofessional", icon: Paintbrush },
    { code: "04", title: "No visibility on Google", icon: SearchX },
    {
      code: "05",
      title: "Most existing websites are not built for AI based searches",
      icon: Bot,
    },
    { code: "06", title: "No booking or contact system", icon: CalendarX },
  ],
};

export const SOLUTION_SECTION = {
  eyebrow: "The solution",
  title: "Get Found. Built for the New Era of Search (Google + AI)",
  description:
    "WebStack builds modern websites designed not just for Google, but for AI-powered search engines and tools.",
  channelsLabel: "This means your business can appear in:",
  valueProp: {
    icon: Zap,
    title: "$500 Website in under 72 Hours",
    subtitle: "Fast delivery without agency timelines",
  },
  hub: {
    title: "Your business",
    subtitle: "Structured site",
  },
  discoveryNodes: [
    { icon: Search, label: "Google search" },
    { icon: MapPin, label: "Local discovery platforms" },
  ],
  visibilitySystem: {
    title: "This is not just a website. It's a visibility system",
    items: [
      { icon: Search, text: "Search engines understand your services clearly" },
      { icon: Bot, text: "AI tools can correctly interpret your business" },
      { icon: MapPin, text: "Customers find you faster in local searches" },
    ],
  },
};

export const WHAT_YOU_GET_SECTION = {
  eyebrow: "What you get",
  title: "Everything You Need to Start Getting Customers Online",
  featured: {
    icon: Eye,
    title: "FREE custom mock-up before purchase",
    description: "Approve before you pay a cent. Included with every project.",
  },
  disclaimer: "2 Revisions Included",
  groups: [
    {
      label: "Design & pages",
      items: [
        { icon: Globe, title: "Up to 4 pages custom website" },
        { icon: Smartphone, title: "Mobile responsive design" },
      ],
    },
    {
      label: "Contact & conversion",
      items: [
        { icon: FormInput, title: "Contact form with email integration" },
        { icon: MessageCircle, title: "WhatsApp click-to-chat" },
        { icon: Calendar, title: "Calendar integration for appointment booking" },
        { icon: CreditCard, title: "Payment gateway integration (single payment / deposit)" },
      ],
    },
    {
      label: "Search & analytics",
      items: [
        { icon: Sparkles, title: "AI ready website with basic SEO setup" },
        { icon: MapIcon, title: "Google Maps integration" },
        { icon: BarChart3, title: "Google Analytics setup" },
      ],
    },
    {
      label: "Setup & integrations",
      items: [
        { icon: Share2, title: "Social media links" },
        { icon: Wrench, title: "Domain & hosting setup assistance" },
      ],
    },
  ],
};

export const WHAT_IS_BULLETS = [
  { icon: Timer, text: "Live in 24–72 hours" },
  { icon: Eye, text: "Free mockup before you pay" },
  { icon: Target, text: "Built to capture leads" },
  { icon: Zap, text: "Booking & payments ready" },
];

export const WHAT_NOT_SECTION = {
  eyebrow: "What this is not",
  lead: "Fast, conversion-focused business website service",
  exclusions: [
    { icon: ShoppingCart, title: "E-commerce stores" },
    { icon: ShoppingCart, title: "Shopping carts" },
    { icon: Users, title: "Membership platforms" },
    { icon: AppWindow, title: "Large-scale applications" },
  ],
};

export const PRICING_SECTION = {
  eyebrow: "Pricing",
  title: "Simple One-Time Pricing",
  price: "$500",
  sub: "One-Time Payment",
  benefits: [
    "No monthly fees",
    "No hidden charges",
    "You own everything",
    "Complete website setup included",
    "Mobile-friendly and responsive design",
    "Fast loading and SEO-friendly structure",
    "Professional deployment and go-live assistance",
    "Future-ready foundation for business growth",
  ],
  cta: "Get Your Free Website Mockup",
};

export const HOW_IT_WORKS_SECTION = {
  eyebrow: "How it works",
  title: "From Idea to Live Website in 3 Steps",
  steps: [
    {
      n: "01",
      title: "Request your free mock-up",
      description: "Share your business details and we design your custom mock-up.",
    },
    {
      n: "02",
      title: "Review & approve your design",
      description: "You see the layout, structure, and branding before paying anything.",
    },
    {
      n: "03",
      title: "We build & launch your website in 24–72 Hours",
      description: "Once approved, we develop and ship your site fast.",
    },
  ],
};

export const CTA_SECTION = {
  eyebrow: "Launch",
  title: "Get Your Free Website Mock-up Today",
  button: "Start My Free Mock-up",
  subtext: "Limited weekly slots available to maintain quality.",
};

export const FOOTER_LINKS: { label: string; href: string; scrollTo?: string }[] = [
  { label: "Home", href: "/#home", scrollTo: "home" },
  { label: "Free mockup", href: "/#mockup", scrollTo: "mockup" },
  { label: "Problem", href: "/#problems", scrollTo: "problems" },
  { label: "Solution", href: "/#solution", scrollTo: "solution" },
  { label: "What you get", href: "/#what-you-get", scrollTo: "what-you-get" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/#process", scrollTo: "process" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_DESCRIPTION =
  "Professional business websites for service-based businesses, with booking, payments, WhatsApp, and AI-ready structure built in. Live in 24–72 hours.";
