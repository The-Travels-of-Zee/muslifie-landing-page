"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { appBanner, googlePlayLink, appStoreLink } from "@/constants";

function AppBanner() {
  if (!appBanner) return null;

  return (
    <motion.section
      id={appBanner.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative max-w-7xl my-12 mx-auto px-4 py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 rounded-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/30 to-purple-200/30 rounded-full blur-3xl" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse" />

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Content Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight"
                >
                  {appBanner.title}
                </motion.h2>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-600 text-lg md:text-xl leading-relaxed whitespace-pre-wrap"
                >
                  {appBanner.subtitle}
                </motion.p>
              </motion.div>

              {/* App Store Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-4">
                  {googlePlayLink && (
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group">
                      <Link href={"/"} className="block">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="bg-white rounded-xl p-2 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                            <img className="h-12 w-full" alt="google play logo" src="/stores/google-play.svg" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}

                  {appStoreLink && (
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group">
                      <Link href={"/"} className="block">
                        <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="bg-white rounded-xl p-2 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                            <img className="h-12 w-full" alt="app store logo" src="/stores/app-store.svg" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Notification Banner */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                    <p className="text-purple-800 font-semibold">🚀 We'll notify you as soon as we launch!</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Phone Screenshots */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex justify-center items-center min-h-[500px]"
            >
              {/* Background glow for phones */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-blue-300/20 to-teal-300/20 rounded-full blur-3xl scale-150" />

              {appBanner.screenshots.map((src, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                      y: 50,
                      rotate: 0,
                    },
                    visible: {
                      scale: index === 0 ? 1 : 0.85,
                      opacity: 1,
                      y: index === 0 ? 0 : index === 1 ? 20 : -20,
                      rotate: index === 0 ? 0 : index === 1 ? -15 : 15,
                    },
                  }}
                  transition={{
                    delay: 0.6 + index * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: index === 0 ? 1.05 : 0.9,
                    rotate: index === 0 ? 2 : index === 1 ? -10 : 10,
                    transition: { duration: 0.3 },
                  }}
                  className={clsx(
                    "relative transition-all duration-300",
                    index === 0 && "z-30",
                    index === 1 && "absolute z-20 -left-16 hidden lg:block",
                    index === 2 && "absolute z-20 -right-16 hidden lg:block"
                  )}
                >
                  <div className="relative">
                    {/* Phone shadow */}
                    <div className="absolute inset-0 bg-black/10 rounded-3xl blur-xl scale-105 translate-y-8" />

                    {/* Phone frame with enhanced styling */}
                    {/* <div className="relative">
                      <IPhoneFrame src={src} className={"rounded-4xl h-full"} />
                    </div> */}
                    {/* <div className="relative top-2 md:top-3 lg:top-2 left-3 sm:left-4 md:left-4 lg:left-3 md:w-[92%] h-[calc(100%-18px)] md:h-[calc(100%-22px)] aspect-[9/19.5] lg:w-[calc(100%-24px)] lg:h-[calc(100%-16px)] rounded-[48px] lg:rounded-4xl overflow-hidden">
                      <SingleScreenshot src={src} />
                    </div> */}
                    {/* <img
                      src="/misc/iphone-frame.webp"
                      alt="iphone-frame"
                      className="relative z-10 h-[103%] w-auto pointer-events-none"
                    /> */}
                    <img src={src} alt={src} />

                    {/* Floating elements around phones */}
                    {index === 0 && (
                      <>
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-8 -right-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg"
                        />
                        <motion.div
                          animate={{
                            y: [0, 10, 0],
                            rotate: [0, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                          className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
