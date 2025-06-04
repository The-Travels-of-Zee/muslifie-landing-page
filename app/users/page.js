"use client";
import AppBanner from "@/components/AppBanner";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import VideoMockup from "@/components/VideoMockup";
import { ConfigContext } from "@/utils/configContext";
import { useContext } from "react";

const Users = () => {
  const {
    users: { header, features, howItWorks },
  } = useContext(ConfigContext);
  return (
    <div>
      <Header header={header} />
      <Features features={features} />
      <VideoMockup videoSrc="/videos/test-video.webm" />
      <HowItWorks howItWorks={howItWorks} />
      <Pricing />
      <Faq />
      <ContactForm />
      <AppBanner />
    </div>
  );
};

export default Users;
