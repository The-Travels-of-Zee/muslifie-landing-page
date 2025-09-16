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

export const appStoreLink = "https://apps.apple.com/pk/app/muslifie/id6749224199";
export const googlePlayLink = "https://play.google.com/store/apps/details?id=com.app.muslifie&pcampaignid=web_share";

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
    paymentPolicy: true,
  },
  poweredBy: {
    title: "The Travels Of Zee",
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
    { href: "/", title: "Home", icon: Home },
    { href: "#features", title: "Features", icon: Star },
    { href: "#how-it-works", title: "How it works", icon: Rocket },
    { href: "#faq", title: "FAQ", icon: HelpCircle },
    { href: "/blog", title: "Blogs", icon: BookOpen },
  ],
};

export const appBanner = {
  id: "app-banner",
  title: "Start Your Journey With Muslifie!",
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
  categories: [
    {
      title: "Getting Started",
      color: "#6366F1",
      faqs: [
        {
          question: "How do I become a verified guide on Muslifie?",
          answer:
            "To become a verified guide, complete your profile, upload required documents (ID, certifications), and submit for review. Our team typically reviews applications within 24-48 hours.",
        },
        {
          question: "What documents do I need for verification?",
          answer:
            "You need a valid government ID, guide certification or relevant qualifications, and any Halal certificates if applicable.",
        },
        {
          question: "How long does verification take?",
          answer: "Verification typically takes 24-48 hours. You'll receive email updates on your application status.",
        },
      ],
    },
    {
      title: "Bookings & Tours",
      color: "#22C55E",
      faqs: [
        {
          question: "How do I manage my tour bookings?",
          answer:
            "Access your bookings through the main dashboard. You can view, confirm, modify, or cancel bookings as needed.",
        },
        {
          question: "Can I set my own tour prices?",
          answer:
            "Yes, you have full control over your tour pricing. Set different rates for standard, premium, and luxury packages.",
        },
        {
          question: "What happens if I need to cancel a tour?",
          answer:
            "If you need to cancel a tour as a guide/partner, you must immediately contact all booked travelers and our support team.",
        },
      ],
    },
    {
      title: "Account & Profile",
      color: "#7C3AED",
      faqs: [
        {
          question: "How do I update my profile information?",
          answer:
            "Go to Profile > Settings to update your personal information, contact details, preferences, and profile photo. Keep your information current for the best experience.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "Contact our support team to request account deletion. Please note this action is permanent and will remove all your data, bookings history, and earned commissions.",
        },
        {
          question: "Why do I need to verify my phone number?",
          answer:
            "Phone verification enhances security, enables booking notifications, and allows guides to contact you directly. It's required for completing bookings.",
        },
      ],
    },
    {
      title: "Influencer Program",
      color: "#8B5CF6",
      faqs: [
        {
          question: "How do I join the Muslifie Influencer Program?",
          answer:
            "Apply through your profile settings. You need to meet minimum follower requirements and create content that aligns with Islamic values. Once approved, you can generate promo codes for tours.",
        },
        {
          question: "How do promo codes work?",
          answer:
            "As an approved influencer, you can create custom promo codes offering discounts to travelers. Each code has usage limits, expiration dates, and tracks your referrals for commission calculation.",
        },
        {
          question: "What commission do influencers earn?",
          answer:
            "Influencers earn up to 15% commission on successful bookings made with their promo codes. Commission rates vary based on performance and are paid monthly with minimum payout thresholds.",
        },
        {
          question: "Can I track my promo code performance?",
          answer:
            "Yes, your influencer dashboard shows real-time statistics including code usage, bookings generated, commission earned, and payout history.",
        },
      ],
    },
    {
      title: "Tours & Reviews",
      color: "#06B6D4",
      faqs: [
        {
          question: "How do I save tours to my wishlist?",
          answer:
            "Tap the heart icon on any tour to add it to your wishlist. Access your saved tours from your profile to book later or share with friends.",
        },
        {
          question: "Can I leave reviews for tours and guides?",
          answer:
            "Yes, after completing a tour, you can rate and review both the tour experience and guide performance. Your feedback helps other travelers and maintains quality standards.",
        },
        {
          question: "What tour categories are available?",
          answer:
            "We offer various categories including Walking Tours, Food Tours, Cultural Experiences, Historical Sites, Hiking Adventures, Shopping Tours, and more, all ensuring halal-friendly options.",
        },
        {
          question: "How do I know if a tour is halal-friendly?",
          answer:
            "All tours on Muslifie are designed to be Muslim-friendly, featuring halal food options, prayer time considerations, and culturally appropriate activities, even in non-Muslim countries.",
        },
      ],
    },
    {
      title: "Cancellations & Refunds",
      color: "#E11D48",
      faqs: [
        {
          question: "What is your cancellation policy?",
          answer:
            "Travelers can cancel bookings up to 24 hours before the scheduled time. However, we operate under a strict no-refund policy - all payments are final once confirmed.",
        },
        {
          question: "Can I get a refund if the guide cancels?",
          answer:
            "Yes, if a guide cancels your tour, you will receive a full refund to your original payment method. This typically processes within 5-7 business days.",
        },
        {
          question: "What happens in case of emergencies?",
          answer:
            "Emergency cancellations due to natural disasters, medical emergencies, or safety concerns are handled on a case-by-case basis by our support team.",
        },
        {
          question: "Can I reschedule my booking?",
          answer:
            "Rescheduling is subject to guide availability and approval. Contact your guide directly or our support team to explore alternative dates.",
        },
      ],
    },
    {
      title: "Safety & Guidelines",
      color: "#EF4444",
      faqs: [
        {
          question: "What safety measures are in place?",
          answer:
            "All guides undergo background checks and document verification. We provide 24/7 support, share emergency contacts with travelers, and maintain strict safety protocols.",
        },
        {
          question: "What are the community guidelines?",
          answer:
            "Respect Islamic values, provide authentic experiences, maintain professionalism, ensure traveler safety, and follow local laws and customs at all times.",
        },
        {
          question: "How do I report inappropriate behavior?",
          answer:
            "Use the in-app reporting feature or contact support immediately. We take all reports seriously and investigate violations of our community guidelines promptly.",
        },
        {
          question: "Are prayer facilities available during tours?",
          answer:
            "Yes, our guides are trained to incorporate prayer times and locate nearby mosques or prayer facilities. This is part of our commitment to Muslim-friendly travel experiences.",
        },
      ],
    },
    {
      title: "Payments & Earnings",
      color: "#F59E0B",
      faqs: [
        {
          question: "How does the escrow payment system work?",
          answer:
            "When travelers book your tour, payment is held securely in escrow. After successful tour completion, the funds are released to your Muslifie balance within 24 hours, minus platform fees. This protects both guides and travelers by ensuring payment security.",
        },
        {
          question: "How do I receive payments and autopayouts?",
          answer:
            "After tour completion, payments are added to your Muslifie balance within 24 hours using our secure escrow system. You can then withdraw from your balance - if your country supports Stripe Connect, you'll receive automatic payouts to your linked account. Otherwise, you can withdraw to your bank details with a minimum of $50.",
        },
        {
          question: "What are Stripe Connect autopayouts?",
          answer:
            "Stripe Connect enables automatic daily or weekly payouts directly to your bank account or debit card. It's available in 45+ countries and offers the lowest transaction fees with faster processing times.",
        },
        {
          question: "What if my country doesn't support Stripe Connect?",
          answer:
            "If your country doesn't support Stripe Connect for autopayouts, you can add your bank account details for manual transfers. However, please note that bank transfer fees are higher than Stripe processing fees.",
        },
        {
          question: "What are the platform and processing fees?",
          answer:
            "Muslifie charges an estimated 20-30% platform fee. For Stripe Connect users, processing fees are estimated 2.9% + $0.30 per transaction. Bank transfer fees vary by region but are typically 3-5% higher than Stripe fees.",
        },
        {
          question: "How do I add my payment method?",
          answer:
            "Go to Profile > Settings > Payment Methods. You can either connect your Stripe account for autopayouts (recommended) or add bank account details if Stripe Connect isn't available in your country.",
        },
        {
          question: "When can I withdraw my earnings?",
          answer:
            "Once earnings are added to your balance after tour completion, you can withdraw them immediately. With Stripe Connect, you can set up automatic payouts (daily/weekly) from your balance. For bank transfers, you can manually withdraw with a minimum of $50, and transfers typically take 3-5 business days.",
        },
        {
          question: "Which countries support Stripe Connect?",
          answer:
            "Stripe Connect is available in 45+ countries including US, UK, Canada, Australia, most of Europe, and many others. Check our payment settings to see if it's available in your region.",
        },
      ],
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

export const paymentPolicy = {
  seo: {
    title: "Payment Policy - Muslifie",
    description: "Payment Policy",
  },
  content: `# Muslifie Payment Policy

**Last Updated:** September 2025  
**Effective Date:** Upon user acceptance  

## Introduction

Muslifie ensures secure and transparent payment handling through an **escrow-based system** with flexible payout options for guides and partners. This policy explains how payments, fees, withdrawals, and related processes are managed on our platform.

---

## Complete Payment Flow

1. **Booking & Escrow**  
   Traveler makes a booking → Payment is held securely in escrow until tour completion.

2. **Tour Completion**  
   Guide marks the tour as completed → System releases funds from escrow.

3. **Balance Addition**  
   Earnings are added to your Muslifie balance within 24 hours (minus platform fees).

4. **Withdrawal Options**  
   Withdraw from balance via **Stripe Connect autopayouts** or **manual bank transfers**.

✅ *Escrow Protection ensures your payment is guaranteed once the tour is completed successfully.*

---

## Platform Fees & Commission

- **Service Fee:** Muslifie charges an estimated **20-30%** processing & service fee on all bookings.  
- **Processing Fee:** 2.9% + $0.30 per transaction.  
- **Guide Earnings:** Guides receive an estimated **70-80%** of the booking amount after completion.  
- **Influencer Commission:** Influencers earn up to **15% commission** on bookings made with their promo codes.  
- **Transparent Pricing:** All fees are displayed clearly during the booking process.  

**Example:** $100 booking → Platform fee $20-$30 → Guide receives $70-$80 in balance.

---

## Escrow & Payment Security

- **Secure Escrow:** All payments are held in escrow until tour completion, protecting both guides and travelers.  
- **Payment Release:** Funds are automatically released to your balance within 24 hours after the tour is marked completed.  
- **Completion Requirement:** Guide must mark the tour as completed to trigger payment release.  
- **Dispute Protection:** Escrow ensures fair handling of payment disputes and cancellations.  
- **Industry Standard:** Escrow follows best practices used by major booking platforms.  

---

## Payout Methods & Fees

- **Stripe Connect (Recommended):**  
  - Automatic daily/weekly payouts  
  - Processing fee: **2.9% + $0.30 per transaction**  

- **Bank Transfer Alternative:**  
  - Manual withdrawals to bank account  
  - Fees: **3-5% higher** than Stripe Connect  

- **Country Availability:** Stripe Connect available in **45+ countries**.  
- **Best Option:** Use Stripe Connect for lowest fees and fastest payouts.  

---

## Withdrawal Policy & Timeline

- **Minimum Withdrawal:** $50  
- **Stripe Connect Timeline:** Autopayouts on a daily or weekly schedule (configurable).  
- **Bank Transfer Timeline:** 3-5 business days.  
- **Balance Accumulation:** Earnings accumulate in your Muslifie balance with no expiration.  
- **Withdrawal Methods:**  
  - Stripe: bank account, debit card  
  - Bank transfer: direct to account details  

---

## Booking Management & Cancellations

- **Guide Cancellations:** Full refund automatically issued to the traveler.  
- **Traveler Cancellations:** Strict **no-refund** policy.  
- **Emergency Cancellations:** Natural disasters or safety emergencies handled case-by-case by support.  
- **Quality Assurance:** Payments may be held if significant complaints or disputes arise.  

---

## Tax & Legal Compliance

- **Tax Responsibility:** Guides are responsible for reporting earnings according to local tax laws.  
- **Documentation:** Earnings reports available in your dashboard.  
- **Policy Updates:** Changes to the policy will be communicated with **30 days notice**.  
- **Regulatory Compliance:** All transactions comply with local and international financial regulations.  

---

## Payment Support

Need help with payments, withdrawals, or fees? Our support team is available **24/7** to assist with:  
- Payment processing questions  
- Withdrawal issues  
- Fee clarifications  
- Escrow concerns  
- Tax documentation requests  

📧 [support@muslifie.com](mailto:support@muslifie.com)  

---

© 2025 Muslifie. All rights reserved.
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
