"use client";

import AnimatedText from "@/components/AnimatedText";
import { useContext } from "react";
import { ConfigContext } from "@/utils/configContext";
import NeonHexagon from "@/public/svg/neonHexagon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "@/lib/motion";
import Link from "next/link";

function Faq() {
  const {
    home: { faq },
  } = useContext(ConfigContext);

  if (!faq) return null;

  return (
    <section id={faq.id} className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-teal-50/50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/20 to-purple-200/20 rounded-full blur-3xl" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
      <div className="absolute bottom-40 right-40 w-4 h-4 bg-teal-400 rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side - Title and Graphic */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
              {/* Hexagon Container */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  {/* Glow effect behind hexagon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-full blur-2xl scale-150" />
                  <div className="relative z-10">
                    <NeonHexagon />
                  </div>
                </div>
              </div>

              {/* Title */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 bg-clip-text text-transparent leading-tight mb-6">
                  <AnimatedText text={faq.title} initial={{ y: "0%" }} />
                </h3>

                {/* Subtitle */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  Find answers to the most commonly asked questions about our services.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.qa.map((qa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 transition-all duration-300 group-hover:text-purple-700">
                      <div className="flex items-center gap-4 w-full">
                        {/* Question number */}
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>

                        {/* Question text */}
                        <span className="text-lg font-semibold text-left flex-1 group-hover:text-secondary transition-colors">
                          {qa.question}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pt-1 pb-4">
                      <div className="pl-2 pr-2 md:pl-6 md:pr-4">
                        <div className="bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl p-4 border-l-4 border-gradient-to-b border-purple-400">
                          <p className="text-gray-700 text-base leading-relaxed">{qa.answer}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Call-to-action at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 rounded-2xl border border-purple-200"
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-800 mb-2">Still have questions?</h4>
                <p className="text-purple-600 mb-4">We're here to help! Get in touch with our support team.</p>
                <Link href="#contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Support
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
