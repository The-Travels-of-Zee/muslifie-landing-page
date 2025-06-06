"use client";
import { motion } from "@/lib/motion";
import { useState } from "react";
import SingleScreenshot from "@/components/SingleScreenshot";
import InputEmail from "./InputEmail";

function Header({ header, partners }) {
  const [selectedType, setSelectedType] = useState("users"); // Default to "users"
  const [newsletterType, setNewsletterType] = useState("users"); // For InputEmail component

  if (!header) return null;

  const handleTypeToggle = (type) => {
    setSelectedType(type);
    setNewsletterType(type === "guide" ? "guide" : "users");
  };

  return (
    <section id={header.id} className="relative min-h-screen overflow-hidden pt-16 md:pt-8">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 -z-10">
        <img src="./images/mount-fuji-2.webp" className="w-full h-full object-cover" alt="Background" />
        {/* Multi-layered overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/50 md:to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-20">
          {/* Phone Mockup Section - Now First */}
          <div className="flex-shrink-0 order-2 lg:order-1 lg:ml-32 lg:mb-0 lg:mr-12 py-12">
            <div className="mx-auto">
              <div className="sticky md:top-40 flex justify-center">
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "tween",
                    stiffness: 200,
                    mass: 0.4,
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  className="relative h-[548px] 2xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[3rem]"
                >
                  <div className="absolute top-2.5 left-3 w-[calc(100%-24px)] h-[calc(100%-16px)] rounded-[1rem] 2xs:rounded-[2rem] overflow-hidden">
                    <SingleScreenshot src={header.screenshots[0]} />
                  </div>
                  <img src="/misc/iphone-frame.webp" alt="iphone-frame" className="relative z-10 h-full" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content Section - Now Second */}
          <div className="flex-1 md:pl-24 lg:pl-12 order-1 lg:order-2">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-roboto mb-6"
              >
                <span className="bg-gradient-to-r from-white via-gray-100 to-emerald-100 bg-clip-text text-transparent drop-shadow-2xl">
                  {header.headline}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-md sm:text-lg lg:text-xl text-gray-200 font-notosans mb-8 lg:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                For Muslims who have difficulty finding halal food and prayer destinations. Connect with our community
                of travelers and local guides.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-8 lg:mb-12"
              >
                <div className="max-w-md mx-auto lg:mx-0 space-y-6">
                  {/* Toggle Buttons - Fixed scaling issue */}
                  <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 overflow-hidden">
                    <button
                      onClick={() => handleTypeToggle("users")}
                      className={`flex-1 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        selectedType === "users"
                          ? "bg-gradient-to-r from-primary to-(--primary-light) text-white shadow-lg"
                          : "text-white hover:text-white hover:bg-white/10 cursor-pointer"
                      }`}
                    >
                      🧭 Traveler
                    </button>
                    <button
                      onClick={() => handleTypeToggle("guide")}
                      className={`flex-1 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        selectedType === "guide"
                          ? "bg-gradient-to-r from-primary to-(--primary-light) text-white shadow-lg"
                          : "text-white hover:text-white hover:bg-white/10"
                      }`}
                    >
                      🕌 Local Guide
                    </button>
                  </div>

                  {/* Description Text */}
                  <p className="text-sm text-white text-center">
                    {selectedType === "users"
                      ? "Get notified about halal restaurants and prayer spots in your travel destinations"
                      : "Share your local knowledge and help fellow Muslims discover halal options"}
                  </p>
                  {/* Email Input */}
                  <InputEmail
                    title={selectedType === "users" ? "Join as Traveler" : "Join as Guide"}
                    apiUrl="/api/newsletter"
                    type={newsletterType}
                  />
                </div>
              </motion.div>

              {/* User Avatars */}
              {header.usersDescription && (
                <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 1 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-10 h-10 rounded-full border-3 border-white shadow-lg overflow-hidden hover:scale-110 transition-transform duration-200"
                      >
                        <img
                          src={`/avatars/${index + 1}.webp`}
                          alt={`User ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-sm sm:text-base text-white font-medium"
                  >
                    {header.usersDescription}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
}

export default Header;
