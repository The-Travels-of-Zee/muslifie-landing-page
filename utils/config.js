import { Home, Star, Rocket, DollarSign, HelpCircle } from "lucide-react";

const templateConfig = {
  name: "Muslifie",
  seo: {
    title: "Mobile App Landing Template",
    description: "Mobile App Landing Template",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "light",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink: "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      // termsAndConditions: true,
      // cookiesPolicy: true,
      privacyPolicy: true,
    },
    poweredBy: {
      title: "The Travels of Zee",
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
      // { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
      { href: "/#contact-us", title: "Contact Us" },
    ],
  },
  topNavbar: {
    cta: "Join for Free",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "#header", title: "Home", icon: Home },
      { href: "#features", title: "Features", icon: Star },
      { href: "#how-it-works", title: "How it works", icon: Rocket },
      // { href: "#pricing", title: "Pricing", icon: DollarSign },
      { href: "#faq", title: "FAQ", icon: HelpCircle },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download On The First Day Of Launch!",
    subtitle:
      "Discover halal-friendly travel like never before, all at your reach. Find nearby halal food, prayer spaces, and more, anytime, anywhere. Download Muslifie and travel with peace of mind.",
    screenshots: ["/screenshots/homepage-screenshot-img.webp", "/screenshots/realtime-guidance-img.webp"],
  },
  home: {
    seo: {
      title: "Mobile App Landing Template",
      description: "Mobile App Landing Template",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Alice Johnson",
          comment:
            "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
        },
        {
          name: "Bob Smith",
          comment:
            "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
        },
        {
          name: "Charlie Brown",
          comment:
            "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
        },
        {
          name: "Dana White",
          comment:
            "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
        },
        {
          name: "Eve Adams",
          comment:
            "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
        },
      ],
    },
    partners: {
      title: "As seen on",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/aws.svg",
        "/misc/companies/google.svg",
        "/misc/companies/tumblr.svg",
      ],
    },
    howItWorks: {
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
          title: "Set Your Preferences",
          subtitle:
            "Tell us what matters to you, halal food types, prayer space preferences, destinations of interest, so we can personalize your experience.",
          image: "/screenshots/set-preferences-img-2.webp",
        },
        {
          title: "Discover Halal Spots",
          subtitle:
            "Browse nearby halal restaurants, prayer spaces, and local Muslim-friendly services curated and reviewed by the community.",
          image: "/screenshots/discover-halal-img.webp",
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
    },
    features: {
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
    },
    faq: {
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
    },
    header: {
      cta: "Join The Waitlist",
      headline: "Your all-in-one travel app",
      subtitle: "Join a growing ummah of students and mentors united by the light of Islamic knowledge.",
      screenshots: ["/screenshots/homepage-screenshot-img.webp"],
      rewards: ["إن شاءالله"],
      usersDescription: "2,000+ people already in the waiting list",
      headlineMark: [2, 5],
    },
    pricing: {
      id: "pricing",
      title: "Choose Your Plan",
      subtitle: "Unlock premium features for a better experience",
      actionText: "Signup for Waitlist",
      plans: [
        {
          title: "Basic Tier",
          subtitle: "Basic access to Islamic Q&A",
          price: "Free",
          rows: ["10 queries per day", "General Islamic Q&A", "Limited Chat History"],
        },
        {
          title: "Premium Tier",
          subtitle: "Unlimited access & Exclusive features",
          price: "$9.99/month",
          featured: true,
          rows: [
            "Access to all Basic Tier features",
            "Unlimited queries",
            "Pin courses to chat",
            "Priority responses",
            "Full chat histroy access",
            "File uploads",
          ],
        },
      ],
    },
  },
  users: {
    seo: {
      title: "Users",
      description: "Users waiting list",
    },
    header: {
      cta: "Join The Waitlist",
      headline: "Why Muslifie? Because it’s crafted with your values at its core.",
      subtitle: "Learn, ask, and grow at your pace, guided by Muslifie fine-tuned on trusted Islamic content.",
      screenshots: [
        // "/screenshots/user-premium.webp",
        "/screenshots/explore-courses.webp",
        // "/screenshots/create-user-account.webp",
      ],
      rewards: ["إن شاءالله"],
      usersDescription: "2,000+ people already in the waiting list",
      headlineMark: [1, 2],
      input: true,
      type: "users",
    },
    features: {
      id: "features",
      title: "When there are already so many AI assistants then why use Muslifie?",
      subtitle:
        "In a digital world brimming with AI assistants, Muslifie stands out by aligning technology with Islamic principles. It’s not just about providing answers; it’s about ensuring those answers resonate with your faith and lifestyle.",
      cards: [
        {
          title: "Faith-Aligned Guidance",
          subtitle:
            "Ever sought financial advice only to be presented with options that conflict with halal practices? Muslifie understands and respects your values, offering solutions that are both effective and permissible.",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "Authentic Knowledge Base",
          subtitle:
            "By integrating existing AI capabilities with meticulously vetted Islamic data, Muslifie ensures the information you receive is both accurate and appropriate.",
          icon: "/3D/sheild-front-color.webp",
        },
        {
          title: "Affordable Access",
          subtitle:
            "Quality AI assistance shouldn’t come at a premium. Muslifie offers cost-effective solutions without compromising on integrity or performance.",
          icon: "/3D/dollar-front-color.webp",
        },
        {
          title: "Community-Centric Design",
          subtitle:
            "Built by Muslims for Muslims, Muslifie is more than a tool, it’s a companion that understands your unique needs.",
          icon: "/3D/notify-heart-front-color.webp",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How It Works",
      subtitle:
        "Begin your journey of knowledge with clarity and sincerity. Here's how to get started as a student of deen.",
      steps: [
        {
          title: "Sign Up with Intention",
          subtitle:
            "Create your free account and set your niyyah (intention) to seek knowledge for the sake of Allahﷻ.",
          image: "/images/choose-role.webp",
        },
        {
          title: "Enroll into Courses or Use Muslifie",
          subtitle: "Browse a range of authentic courses with Muslifie AI assisting you with learning.",
          image: "/images/browse-courses.webp",
        },
        {
          title: "Learn at Your Own Pace",
          subtitle:
            "Access lessons anytime. Watch videos, read materials, and revisit recordings, on your own time, with full flexibility.",
          image: "/images/learn-at-your-pace.webp",
        },
        {
          title: "Ask & Reflect with Muslifie",
          subtitle:
            "Have questions? Muslifie is here to help with answers grounded in authentic Islamic sources, 24/7 support, just a message away.",
          image: "/images/Muslifie-help.webp",
        },
        {
          title: "Grow with Barakah",
          subtitle:
            "Track your learning. Set goals. Stay consistent. Let your efforts grow with istiqamah, and trust that Allahﷻ Sees every step.",
          image: "/images/grow-consistency.webp",
        },
      ],
    },
  },
  mentors: {
    seo: {
      title: "Mentors",
      description: "Empower the Ummah. Share Your Knowledge. Earn with Purpose.",
    },
    header: {
      cta: "Become a Mentor",
      headline: "Why not just use a custom GPT for your course?",
      subtitle:
        "Security for Instructors sharing their course content with GPTs. Fine-tuned model according to Islamic instructions.",
      screenshots: [
        // "/screenshots/seller-settings-page.webp",
        "/screenshots/seller-courses.webp",
        // "/screenshots/create-seller-account.webp",
      ],
      rewards: ["إن شاءالله"],
      usersDescription: "Join a growing network of trusted Islamic educators",
      headlineMark: [4, 7],
      input: true,
      type: "mentors",
    },
    features: {
      id: "features",
      title: "Elevate your teaching with Muslifie tailored solutions.",
      subtitle:
        "While custom GPTs offer a degree of personalization, they often fall short in providing the control and exclusivity educators require.",
      cards: [
        {
          title: "Controlled Access",
          subtitle:
            "Tired of reminding students not to share course materials? Muslifie allows you to restrict access, ensuring only enrolled students benefit from your curated content.",
          icon: "/3D/tool-front-color.webp",
        },
        {
          title: "Integrated Educational Tools",
          subtitle:
            "Beyond AI responses, Muslifie offers features designed specifically for educators, streamlining your teaching process.",
          icon: "/3D/computer-front-color.webp",
        },
        {
          title: "Secure Content Management",
          subtitle:
            "Protect your intellectual property with Muslifie’s robust security measures, giving you peace of mind as you share your knowledge.",
          icon: "/3D/locker-front-color.webp",
        },
        {
          title: "Community-Centric Design",
          subtitle:
            "Built by Muslims for Muslims, Muslifie is more than a tool, it’s a companion that understands your unique needs.",
          icon: "/3D/notify-heart-front-color.webp",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How It Works",
      steps: [
        {
          title: "Sign Up",
          subtitle: "Apply to Become a Mentor and Launch Your Online Courses.",
          image: "/svg/mentor-signup.svg",
        },
        {
          title: "Upload Courses",
          subtitle: "Design structured Islamic courses with our easy-to-use dashboard.",
          image: "/svg/upload-courses.svg",
        },
        {
          title: "Earn & Engage",
          subtitle: "Earn revenue and help students progress in their deen.",
          image: "/images/mentor-earn.webp",
        },
      ],
    },
  },
  privacyPolicy: {
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
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** [Insert Date]

## Introduction

This Cookies Policy explains how [Your Company Name] ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, [Your App Name] (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** [Insert Date]

## Introduction

Welcome to [Your App Name] (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by [Your Company Name] ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least [Insert Age] years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless [Your Company Name], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]
`,
  },
};

export default templateConfig;
