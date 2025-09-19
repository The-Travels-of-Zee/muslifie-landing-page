"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { footer } from "@/constants";

function Footer() {
  const { links, legalLinks, socials, poweredBy } = footer;

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-blue-400 to-teal-500" />

      {/* Content container */}
      <div className="relative z-10 px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main navigation links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {links.map(({ title, href }, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <a
                  href={href}
                  className="block p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="text-white text-xl font-bold group-hover:text-purple-200 transition-colors">
                    {title}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social links */}
              <motion.div
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                {socials?.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    link.href && (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                      >
                        <Icon className="size-6 text-white group-hover:text-purple-200" />
                      </a>
                    )
                  );
                })}
              </motion.div>

              {/* Legal + Contact */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm"
              >
                {legalLinks.privacyPolicy && (
                  <a
                    href="/privacy-policy"
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Privacy Policy
                  </a>
                )}
                {legalLinks.paymentPolicy && (
                  <a
                    href="/payment-policy"
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Payment Policy
                  </a>
                )}
                <a
                  href="mailto:support@muslifie.com"
                  className="text-white/80 hover:text-white transition-colors duration-300 hover:underline text-sm"
                >
                  support@muslifie.com
                </a>
              </motion.div>

              {/* Powered by */}
              <motion.div
                variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col items-center lg:items-end gap-2 text-sm"
              >
                <p className="text-white/80 leading-relaxed text-center lg:text-right">
                  <span className="block">A product of</span>
                  <Link
                    href={poweredBy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-semibold text-white hover:text-purple-200 transition-colors duration-300"
                  >
                    {poweredBy.title}
                  </Link>
                  <span className="block">
                    Registered in England &amp; Wales No. <span className="whitespace-nowrap">15611572</span>.
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Copyright */}
            <p className="pt-8 text-white/60 text-center text-sm">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl" />
    </footer>
  );
}

export default Footer;
