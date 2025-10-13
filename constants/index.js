// Keep icons at the top
import { Home, Star, Rocket, HelpCircle, BookOpen } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";

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
    link: "https://thetravelsofzee.com/",
  },
  socials: [
    {
      href: "https://www.instagram.com/muslifie?igsh=NHdpMjNybzNjZjBr&utm_source=qr",
      icon: FaInstagram,
    },
    {
      href: "https://www.tiktok.com/@muslifie?_t=ZS-8yPyvrQICPd&_r=1",
      icon: FaTiktok,
    },
    {
      href: "https://youtube.com/@muslifie?si=bcUBcLH2CCHMqAlJ",
      icon: FaYoutube,
    },
    {
      href: "https://www.linkedin.com/showcase/muslifie/",
      icon: FaLinkedin,
    },
  ],
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
            "Influencers earn 5% commission on day trip bookings and 2.5% commission on package tour bookings made with their promo codes. Commissions are paid monthly with minimum payout thresholds.",
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
          question: "What are the commission rates for guides?",
          answer:
            "Day Trips: Guides earn 85% (15% platform fee). Package Tours: Guides earn 90% (10% platform fee). An additional 4% payment processing fee applies to cover Stripe transaction costs.",
        },
        {
          question: "How does the escrow payment system work?",
          answer:
            "When travelers book your tour, payment is held securely in escrow. After successful tour completion, the funds are released to your Muslifie balance within 24 hours. Day trips release 85%, package tours release 90% minus the 4% processing fee.",
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
            "Day Trips: 15% platform fee + 4% processing fee. Package Tours: 10% platform fee + 4% processing fee. For Stripe Connect users, standard Stripe fees of 2.9% + $0.30 per transaction apply during payout. Bank transfer fees vary by region but are typically higher than Stripe fees.",
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

Welcome to our Muslim Travel App ("we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.

## 1. Information We Collect

We collect several types of information to provide and improve our services:

**Personal Information:**
- Name, email address, and phone number
- Profile picture and preferences
- Payment information and billing details
- Travel documents and identification (when required)
- Location data (with your permission)

**Usage Information:**
- App usage patterns and preferences
- Device information (device type, operating system, unique device identifiers)
- IP address and general location information
- Search queries and booking history

**Communication Data:**
- Messages sent through our chat features
- Customer support communications
- Feedback and reviews submitted

## 2. How We Use Your Information

We use your information for the following purposes:

**Service Provision:**
- Process bookings and reservations
- Connect you with verified local guides
- Provide customer support and assistance
- Send booking confirmations and travel updates

**Personalization:**
- Customize your travel recommendations
- Show relevant halal dining and prayer locations
- Provide location-based services and content

**Communication:**
- Send important service notifications
- Share promotional offers (with your consent)
- Respond to your inquiries and feedback

**Security and Legal:**
- Verify identity and prevent fraud
- Comply with legal obligations
- Protect the safety of our users and guides

## 3. Information Sharing and Disclosure

We do not sell your personal information. We may share your information in these circumstances:

**With Service Providers:**
- Local guides for booked tours and services
- Payment processors for transaction processing
- Cloud storage providers for data hosting
- Customer service platforms

**For Legal Reasons:**
- When required by law or legal process
- To protect our rights and safety
- To prevent fraud and ensure platform security

**Business Transfers:**
- In case of merger, acquisition, or asset sale
- With proper notice and continued privacy protection

**With Your Consent:**
- When you explicitly agree to sharing
- For features that require data sharing

## 4. Data Security

We implement robust security measures to protect your information:

**Technical Safeguards:**
- Encryption of data in transit and at rest
- Secure servers with regular security updates
- Multi-factor authentication for sensitive operations
- Regular security audits and monitoring

**Access Controls:**
- Limited access to personal information
- Employee training on privacy practices
- Secure authentication systems
- Regular access reviews and updates

Despite our best efforts, no security system is impenetrable. We cannot guarantee the absolute security of your information.

## 5. Your Privacy Rights

You have the following rights regarding your personal information:

**Access and Portability:**
- Request a copy of your personal data
- Export your data in a portable format
- Review how your information is being used

**Correction and Updates:**
- Update your profile information
- Correct inaccurate personal data
- Modify your preferences and settings

**Deletion and Restriction:**
- Request deletion of your account and data
- Limit how we process your information
- Object to certain uses of your data

**Communication Preferences:**
- Opt out of marketing communications
- Manage notification settings
- Control data sharing preferences

To exercise these rights, please contact us at support@muslifie.com

## 6. Location Services

Our app uses location services to enhance your travel experience:

**Location Data Collection:**
- GPS coordinates for navigation and recommendations
- Check-in locations for safety and verification
- Nearby halal restaurants and prayer locations

**Usage of Location Data:**
- Provide location-based recommendations
- Enable emergency assistance features
- Improve service quality and safety

**Location Controls:**
- You can disable location services in your device settings
- Location sharing can be controlled per feature
- Emergency location sharing may override general settings for safety

## 7. Children's Privacy

Our services are not intended for children under 13 years of age:

**Age Restrictions:**
- Users must be at least 13 years old
- Parental consent required for users under 18
- Special protections for minors' data

If we discover we have collected information from a child under 13, we will delete it immediately. Parents who believe we have collected their child's information should contact us.

## 8. International Data Transfers

Your information may be transferred and processed in countries other than your own:

**Transfer Safeguards:**
- Adequate protection measures in place
- Compliance with applicable data protection laws
- Contractual protections with service providers

By using our services, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence.

## 9. Data Retention

We retain your information for as long as necessary:

**Active Accounts:**
- Profile data retained while account is active
- Booking history maintained for service purposes
- Communication records kept for support

**Inactive Accounts:**
- Data deleted after 2 years of inactivity
- Essential records may be retained longer for legal compliance
- Users can request immediate deletion

**Legal Requirements:**
- Some data retained to comply with legal obligations
- Financial records kept as required by law
- Safety and security logs maintained for protection

## 10. Cookies and Tracking

We use cookies and similar technologies:

**Types of Cookies:**
- Essential cookies for app functionality
- Analytics cookies to understand usage
- Preference cookies to remember your settings

**Third-Party Services:**
- Analytics providers (anonymized data)
- Advertising partners (with your consent)
- Social media integrations

You can control cookie preferences through your device settings and our app preferences.

## 11. Changes to This Policy

We may update this Privacy Policy periodically:

**Notification of Changes:**
- Email notification for significant changes
- In-app notifications for policy updates
- Updated "Last Modified" date at the top

**Continued Use:**
- Continued use constitutes acceptance of changes
- You may discontinue use if you disagree with updates
- Previous versions available upon request

## 12. Legal Basis for Processing

We process your personal information based on:
- Your consent when you create an account
- To fulfill our contractual obligations
- Where we have a legitimate interest
- To comply with legal requirements

## 13. Guide Transparency and Availability

We maintain transparency about tour guide assignments:

**Tour Descriptions:**
- Tours clearly list all licensed guides who may lead the tour
- Multiple guides may be associated with a single tour offering
- One of the listed guides will lead based on availability
- All listed guides are verified, licensed, and qualified

**No Surprise Substitutions:**
- We do not substitute guides who are not listed in the tour description
- If a tour states "Tour by [Specific Guide Name]", only that guide will lead
- If substitution is needed for listed-guide tours, travelers will be notified in advance
- Substituting unlisted guides is considered a breach of trust

**What You Should Know:**
- Check the tour description for all guides who may lead your tour
- Guide availability varies based on schedules and bookings
- All listed guides offer the same quality of service
- You can view each guide's profile and qualifications in the app

**Traveler Expectations:**
- Tour quality remains consistent regardless of which listed guide leads
- The tour itinerary and experience remain the same
- If you have a preference, you may inquire about specific guide availability
- Guide assignment confirmations are sent before your tour date

This transparency policy ensures you know exactly who may guide your tour before booking.

## 14. Limitation of Liability

By using our services, you acknowledge and agree to the following limitations:

**Service Disclaimer:**
- Services are provided "as is" without warranties
- We are not liable for guide conduct or service quality
- Local guides are independent contractors, not our employees
- We do not guarantee accuracy of information provided by guides

**User Responsibility:**
- Users are responsible for their own safety and decisions
- Travel at your own risk and discretion
- Verify all information independently before making decisions
- Follow local laws and regulations during your travels

**Third-Party Services:**
- Not responsible for third-party content or services
- External links and recommendations provided for convenience only
- No liability for accommodations, restaurants, or other venues listed
- Payment processor issues are subject to their terms

**Force Majeure:**
- Not liable for events beyond our reasonable control
- Natural disasters, political instability, or health emergencies
- Travel restrictions, visa denials, or border closures
- Technical failures or internet outages

**Maximum Liability:**
- Our total liability limited to amount paid for the specific service
- No liability for indirect, incidental, or consequential damages
- No responsibility for lost profits, data, or opportunities
- Exclusions may not apply where prohibited by law

**Medical and Health:**
- Not responsible for medical issues or health emergencies
- Users should consult healthcare professionals before travel
- No liability for food allergies, dietary restrictions, or illness
- Emergency services coordination provided as courtesy only

## 15. Refund and Cancellation Policy

Our refund and cancellation terms are designed to be fair to both travelers and guides:

**Traveler Cancellation:**
- Bookings can be cancelled before the cancellation deadline
- Full refund available if cancelled before deadline
- No refund after the cancellation deadline has passed
- Cancellation deadline is shown at the time of booking
- Cancellation deadline varies by tour and guide
- Processing fees may apply (if applicable)

**Future Updates (Guide Cancellation):**
- Guide cancellation feature coming in future updates
- Guides will be able to cancel with solid, verifiable reasons
- Acceptable reasons include: emergencies, illness, safety concerns
- Automatic refund processing for guide-initiated cancellations
- This feature is not yet available

**Refund Processing:**
- Approved refunds processed within 5-7 business days
- Refunds issued to original payment method
- Bank processing times may vary
- Notification sent once refund is processed

**Non-Refundable Circumstances:**
- After cancellation deadline has passed
- No-show without prior cancellation
- Services already rendered or partially completed
- Violation of terms and conditions

**Exceptions:**
- Emergency situations reviewed on case-by-case basis
- Natural disasters or force majeure events
- Government-imposed travel restrictions
- Documentation required for exception requests

To cancel a booking or request a refund, please contact us through the app or at support@muslifie.com

## 16. Contact Information

If you have questions about this Privacy Policy or our privacy practices:

**Contact Methods:**
- Email: support@muslifie.com
- In-app support chat
- Written correspondence to our registered address

**Response Time:**
- We aim to respond within 48 hours
- Complex inquiries may take up to 7 business days
- Emergency privacy concerns handled immediately

**Data Protection Officer:**
- Available for privacy-related concerns
- Can be reached through our main contact email
- Specialized in data protection and privacy law

---

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

## Disclaimer on Split Payments

**IMPORTANT NOTICE:**

Muslifie shall bear no responsibility or liability in the event that a Travel Partner elects to divide, split, or otherwise structure payments outside the platform, including but not limited to requesting partial payment in cash or other forms. 

**Key Points:**
- Any split payment arrangement is made solely between the Travel Partner and the user
- Travel Partners remain solely responsible for clearly disclosing in their service description any requirement for split or partial payments
- Disclosure must be made prior to booking or subsequent thereto
- Muslifie is not liable for any disputes arising from off-platform payment arrangements
- All platform protections only apply to payments processed through Muslifie

---

## Complete Payment Flow

**Step 1: Booking & Escrow**  
Traveler makes booking → Payment held securely in escrow until tour completion

**Step 2: Tour Completion**  
Guide marks tour as completed → System releases funds from escrow

**Step 3: Balance Addition**  
Earnings added to your Muslifie balance within 24 hours (minus platform fees)

**Step 4: Withdrawal Options**  
Withdraw from balance via Stripe Connect autopayouts or manual bank transfers

✅ **Escrow Protection:** Your payment is guaranteed once tour is completed successfully

---

## Platform Fees & Commission Structure

### Tour Type-Based Fee Structure

**🌅 Day Trips**
- **Platform Fee:** 15%
- **Guide Receives:** 85%
- **Influencer Commission:** 5% on bookings with promo codes

**📦 Package Tours**
- **Platform Fee:** 10%
- **Guide Receives:** 90%
- **Influencer Commission:** 2.5% on bookings with promo codes

**💳 Payment Processing Fee**
- **Additional Fee:** 4% separate payment processing fee
- Applies to all bookings to cover Stripe transaction costs
- Separate from platform commission

**📊 Transparent Pricing**
- All fees clearly displayed during booking process
- No hidden charges ever
- Complete fee breakdown shown before payment

### Real Examples:

**Day Trip Example:**
- $100 booking
- Platform fee: $15 (15%)
- Processing fee: $4 (4%)
- **Guide receives: $85 in balance**

**Package Tour Example:**
- $500 booking
- Platform fee: $50 (10%)
- Processing fee: $20 (4%)
- **Guide receives: $450 in balance**

---

## Escrow & Payment Security

**Secure Escrow System**
- All payments held in secure escrow until tour completion
- Protects both guides and travelers with bank-level security
- Industry-standard security protocols used by major financial institutions

**Commission-Based Release**
- Day trips: 85% released to guide balance after completion
- Package tours: 90% released to guide balance after completion
- Automatic release within 24 hours of marking tour as completed

**Automatic Release Trigger**
- Tours must be marked as "completed" by guide
- Triggers automatic payment release from escrow
- Both guide and traveler receive confirmation

**Dispute Protection**
- Escrow system handles payment disputes fairly
- Full transparency and audit trail maintained
- Case-by-case review for quality or safety issues

---

## Payout Methods & Processing Fees

### Stripe Connect (Recommended)

**Benefits:**
- Automatic daily/weekly payouts
- Lowest processing fees available
- Fastest payout method
- Available in 45+ countries

**Processing Fees:**
- Standard Stripe fee: 2.9% + $0.30 per transaction
- Deducted from payout amount, not from commission
- Fair earnings guaranteed

**Example Payouts:**
- Day Trip ($85 commission) → Stripe fee $2.76 → **You receive $82.24**
- Package Tour ($450 commission) → Stripe fee $13.36 → **You receive $436.64**

### Bank Transfer Alternative

**When to Use:**
- Available in regions where Stripe Connect is not supported
- Manual withdrawals to bank account
- Higher processing fees than Stripe Connect

**Additional Features:**
- Multi-currency support
- Automatic conversion to local currency
- Competitive exchange rates

---

## Withdrawal Policy & Timeline

**Minimum Withdrawal:** $50

**Stripe Connect Timeline:**
- Autopayouts: Daily or weekly schedule (configurable)
- Fastest payout method available

**Bank Transfer Timeline:**
- Processing time: 3-5 business days
- Varies by bank and location

**Balance Management:**
- Earnings accumulate in your Muslifie balance
- No expiration date
- No maintenance fees

**Withdrawal Methods:**
- Stripe: Bank account or debit card
- Bank transfer: Direct deposit to provided account details

---

## Booking Management & Cancellations

**Guide Cancellation Policy**
- Full refund automatically issued to traveler
- Guide commission forfeited

**Traveler Cancellation Policy**
- Package tours: Follow specific cancellation deadline
- Day trips: No refunds within 48 hours of tour start
- Cancellation deadline shown at booking

**Emergency Situations**
- Natural disasters or safety emergencies
- Handled case-by-case by support team
- Documentation may be required

**Quality Assurance**
- Payments may be held for review if significant complaints arise
- Ensures platform quality and safety standards

**Completion Verification**
- Both guide and traveler must confirm tour completion
- Required for automatic payment release from escrow

---

## Tax & Legal Compliance

**Tax Responsibility**
- Guides responsible for reporting earnings according to local tax laws
- Varies by jurisdiction and regulations

**Earnings Documentation**
- Detailed earnings reports available in dashboard
- Tax documents provided for accurate filing

**Policy Updates**
- Changes communicated with 30 days advance notice
- Via email and in-app notifications

**Regulatory Compliance**
- All transactions comply with local and international financial regulations
- AML and KYC requirements followed

**Data Protection**
- All payment data encrypted
- Processed according to PCI DSS standards
- GDPR compliance maintained

---

## Payment Support

Need help with payments, withdrawals, fees, or commission structure? Our support team is available **24/7** to assist with:

- Payment processing questions
- Withdrawal issues
- Fee clarifications
- Escrow concerns
- Tax documentation requests
- Commission structure inquiries

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