"use client";

import AnimatedText from "@/components/AnimatedText";
import NeonHexagon from "@/public/svg/neonHexagon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";
import { faq } from "@/constants";

function Faq() {
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
        {/* Top section with title + hexagon */}

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--secondary-dark) leading-tight">
              <AnimatedText text={faq.title} />
            </h2>

            <motion.div
              className="mx-auto h-1.5 bg-gradient-to-r from-accent via-(--danger) to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "220px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Find answers to the most commonly asked questions about our services.
            </motion.p>
          </motion.div>
        </div>

        {/* Categories below full width */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faq.categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * catIndex, duration: 0.6 }}
                className="space-y-4"
              >
                {/* Centered category title */}
                <h4 className="text-xl font-bold mb-4 text-center" style={{ color: category.color }}>
                  {category.title}
                </h4>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.faqs.map((qa, index) => (
                    <AccordionItem
                      key={index}
                      value={`cat-${catIndex}-item-${index}`}
                      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 transition-all duration-300">
                        <span className="text-sm font-semibold text-left flex-1">{qa.question}</span>
                      </AccordionTrigger>

                      <AccordionContent className="px-4 pt-1 pb-4">
                        <div
                          className="bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl p-3 border-l-4"
                          style={{ borderColor: category.color }}
                        >
                          <p className="text-gray-700 text-sm leading-relaxed">{qa.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          {/* Call-to-action at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 rounded-2xl border border-purple-200"
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
      </div>
    </section>
  );
}

export default Faq;
