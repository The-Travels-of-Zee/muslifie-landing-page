"use client";
import AppBanner from "@/components/AppBanner";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MentorDashboard from "@/components/MentorDashboard";
import VideoMockup from "@/components/VideoMockup";
import { ConfigContext } from "@/utils/configContext";
import { useContext } from "react";

const mentors = () => {
  const {
    mentors: { header, features, howItWorks },
  } = useContext(ConfigContext);
  return (
    <div>
      <Header header={header} />
      <Features features={features} />
      <VideoMockup videoSrc="/videos/test-video.webm" />
      <MentorDashboard />
      <HowItWorks howItWorks={howItWorks} />
      <Faq />
      <ContactForm />
      <AppBanner />
    </div>
  );
};

export default mentors;
