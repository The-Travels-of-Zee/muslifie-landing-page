// Keep icons at the top
import { Home, Star, Rocket, HelpCircle, BookOpen } from "lucide-react";

export const templateName = "Muslifie";

export const templateSeo = {
  title: "Mobile App Landing Template",
  description: "Mobile App Landing Template",
};

export const templateTheme = {
  theme: "light",
  forceTheme: false,
  showThemeSwitch: true,
  backgroundGrid: false,
};

export const templateLogo = "/logo.svg";

export const appStoreLink = "https://apps.apple.com/us/app/google/id284815942";
export const googlePlayLink = "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox";

export const header = {
  cta: "Join The Waitlist",
  headline: "Your all-in-one travel app",
  subtitle: "Join a growing ummah of students and mentors united by the light of Islamic knowledge.",
  screenshots: ["/screenshots/homepage-screenshot-img.webp"],
  rewards: ["إن شاءالله"],
  usersDescription: "2,000+ people already in the waiting list",
  headlineMark: [2, 5],
};

export const footer = {
  legalLinks: {
    privacyPolicy: true,
  },
  poweredBy: {
    title: "Muslifie",
    link: "https://business.thetravelsofzee.com/",
  },
  socials: {
    instagram: "https://instagram.com/google",
    facebook: "https://facebook.com/google",
    twitter: "https://x.com/google",
    upwork: "https://www.upwork.com/agencies/1900660843112486960/",
    linkedin: "https://www.linkedin.com/company/Muslifie/",
  },
  links: [
    { href: "/#features", title: "Features" },
    { href: "/#how-it-works", title: "How it works" },
    { href: "/#faq", title: "FAQ" },
    { href: "/#contact-us", title: "Contact Us" },
    { href: "/blog", title: "Blogs" },
  ],
};

export const topNavbar = {
  cta: "Join for Free",
  disableWidthAnimation: false,
  hideAppStore: false,
  hideGooglePlay: false,
  links: [
    { href: "#header", title: "Home", icon: Home },
    { href: "#features", title: "Features", icon: Star },
    { href: "#how-it-works", title: "How it works", icon: Rocket },
    { href: "#faq", title: "FAQ", icon: HelpCircle },
    { href: "/blog", title: "Blogs", icon: BookOpen },
  ],
};

export const appBanner = {
  id: "app-banner",
  title: "Download On The First Day Of Launch!",
  subtitle:
    "Discover halal-friendly travel like never before, all at your reach. Find nearby halal food, prayer spaces, and more, anytime, anywhere. Download Muslifie and travel with peace of mind.",
  screenshots: ["/screenshots/appbanner-home-screen.webp", "/screenshots/appbanner-guidance-screen.webp"],
};

export const features = {
  id: "features",
  title: "Your travel should be effortless.",
  subtitle:
    "Muslifie is more than just a travel app, it's a trusted companion for every Muslim traveler. From finding halal food to locating nearby prayer spaces, Muslifie brings peace of mind wherever your journey takes you.",
  cards: [
    {
      title: "Halal Food Locator",
      subtitle:
        "Easily discover halal certified restaurants, cafes, and eateries around you, whether you're in your hometown or exploring a new country.",
      icon: "/videos/compass.webm",
    },
    {
      title: "Nearby Prayer Spaces",
      subtitle:
        "Never miss a prayer again. Muslifie helps you find mosques and clean, accessible prayer areas based on your current location.",
      icon: "/videos/prayer-mat.webm",
    },
    {
      title: "Inclusive for All",
      subtitle:
        "Whether you're Muslim or simply curious about halal options, Muslifie offers value for everyone who respects diverse lifestyles.",
      icon: "/videos/passenger-running.webm",
    },
  ],
};

export const howItWorks = {
  id: "how-it-works",
  title: "How It Works",
  subtitle:
    "Discover halal-friendly spots, connect with the community, and travel with peace of mind all in just a few steps.",
  steps: [
    {
      title: "Sign Up & Choose Your Role",
      subtitle:
        "Join Muslifie as a Traveler or Local Guide. Whether you're exploring or sharing hidden gems, your journey starts here.",
      image: "/screenshots/join-app-img.webp",
    },
    {
      title: "Select Your Preferences",
      subtitle:
        "Tell us what matters to you, halal food types, prayer space preferences, destinations of interest, so we can personalize your experience.",
      image: "/screenshots/set-preferences-img-3.webp",
    },
    {
      title: "Discover Halal Spots",
      subtitle:
        "Browse nearby halal restaurants, prayer spaces, and local Muslim-friendly services curated and reviewed by the community.",
      image: "/screenshots/discover-halal-img-2.webp",
    },
    {
      title: "Get Real-Time Guidance",
      subtitle:
        "Muslifie helps you stay on track with live prayer notifications, Qibla direction, and curated halal guides for each destination.",
      image: "/screenshots/realtime-guidance-img.webp",
    },
    {
      title: "Share & Support the Ummah",
      subtitle:
        "Leave reviews, upload new halal locations, and help other Muslims travel confidently your input benefits the whole community.",
      image: "/screenshots/share-reviews-img-2.webp",
    },
    {
      title: "Travel with Barakah",
      subtitle:
        "Make the most of your journey with tools that align your travel with your values combining adventure, spirituality, and ease.",
      image: "/screenshots/travel-barakah-img.webp",
    },
  ],
};

export const faq = {
  id: "faq",
  title: "Frequently Asked Questions",
  qa: [
    {
      question: "What is Muslifie?",
      answer:
        "Muslifie is a travel companion app designed not only for Muslims but Everyone who want to explore the world while staying connected to their values. It helps you find halal restaurants, nearby prayer spaces, and connect with local Muslim-friendly services.",
    },
    {
      question: "Is Muslifie only for Muslims?",
      answer:
        "Not at all! While Muslifie is designed with Muslim travelers in mind, anyone interested in halal food, cultural respect, and ethical travel is welcome to use the app.",
    },
    {
      question: "How does Muslifie find halal places?",
      answer:
        "We combine community reviews, verified data, and local guide contributions to ensure listings are as authentic and accurate as possible. Users can also suggest and review new places to keep the app fresh and relevant.",
    },
    {
      question: "Can I contribute as a local guide?",
      answer:
        "Yes! Local Guides play a key role in Muslifie. You can share hidden halal gems, add prayer spaces, and help fellow travelers experience your city with ease and comfort.",
    },
    {
      question: "Is there a cost to use Muslifie?",
      answer:
        "We don’t charge upfront. Instead, a small service fee is included in bookings or trips made through the app, and tour guides also contribute a portion of their earnings. This allows us to keep the app running, improve features, and support without placing extra burden on users.",
    },
    {
      question: "Is my data safe with Muslifie?",
      answer:
        "Absolutely. We take your privacy seriously and follow industry best practices to keep your data secure. Your information is never shared without your permission.",
    },
  ],
};

export const privacyPolicy = {
  seo: {
    title: "Privacy Policy - Muslifie",
    description: "Privacy Policy",
  },
  content: `# Privacy Policy

**Last Updated:** 21/5/2025

## Introduction

Welcome to Muslifie. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, We may collect identifiers such as your name, email address, and any other information you provide when creating an account.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## Legal Basis

We process your personal information based on your consent, to fulfill our contractual obligations, and where we have a legitimate interest.

## Children’s Privacy

Our App is not intended for use by children under the age of 13 (or 16 in the EU). We do not knowingly collect personal information from children.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at [Your Contact Information].
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

Muslifie

📧 [info@thetravelsofzee.com](mailto:info@thetravelsofzee.com)  
🕌 With sincerity and responsibility,  
**Team Muslifie**

`,
};

export const blogs = [
  {
    id: 1,
    title: "Boost Your Productivity with These Tools",
    slug: "productivity-tools",
    excerpt: "Discover top tools to streamline your workflow and save time.",
    thumbnail: "/blogs/productivity-tools.jpg",
  },
  {
    id: 2,
    title: "How to Scale Your App in 2025",
    slug: "scale-your-app",
    excerpt: "A step-by-step guide on scaling infrastructure for modern apps.",
    thumbnail: "/blogs/scale-app.jpg",
  },
  {
    id: 3,
    title: "Design Systems that Scale",
    slug: "design-systems",
    excerpt: "Learn how to build a consistent and reusable design system.",
    thumbnail: "/blogs/design-systems.jpg",
  },
];
