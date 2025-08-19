// "use client";

import Faq from "@/components/Faq";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppBanner from "@/components/AppBanner";
import Pricing from "@/components/Pricing";
import VideoMockup from "@/components/VideoMockup";
import ContactForm from "@/components/ContactForm";
import HomeBlogSection from "@/components/blog/HomeBlogSection";

const Main = () => {
  return (
    <main>
      <Header />
      <Features />
      {/* <VideoMockup videoSrc="/videos/test-video.webm" /> */}
      <HowItWorks />
      {/* <Pricing /> */}
      <Faq />
      <HomeBlogSection />
      <AppBanner />
      <ContactForm />
    </main>
  );
};

export default Main;
