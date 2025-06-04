"use client";
import { useContext } from "react";
import { ConfigContext } from "@/utils/configContext";
import { FaSquareUpwork, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "@/lib/motion";
import Link from "next/link";

function Footer() {
  const {
    footer: { links, legalLinks, socials, poweredBy },
  } = useContext(ConfigContext);

  return (
    <footer className="relative bg-primary px-4 py-12 mt-12">
      <div className="absolute rounded-t-[50%] -top-12 left-0 bg-primary w-full h-12" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-screen-lg mx-auto mt-12"
      >
        <nav className="flex flex-col items-start gap-4">
          {links.map(({ title, href }, index) => (
            <motion.a
              key={index}
              variants={{
                hidden: { opacity: 0, x: "-100%" },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: index * 0.25, type: "tween" }}
              className="text-xl font-bold block uppercase whitespace-nowrap link no-underline text-white hover:underline md:text-4xl"
              href={href}
            >
              {title}
            </motion.a>
          ))}
        </nav>
        <aside className="flex flex-col items-center justify-between mt-8 w-full overflow-hidden md:flex-row lg:overflow-visible">
          <div className="flex items-center gap-3 w-full text-white">
            {socials.linkedin && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, x: "-100%" },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.75 }}
                className="w-10 h-10 hover:bg-accent rounded-full"
                target="_blank"
                href={socials.linkedin}
              >
                <FaLinkedinIn className="size-10" />
              </motion.a>
            )}
          </div>
          <div className="flex gap-4 mt-8 mb-4 md:m-0">
            {legalLinks.termsAndConditions && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.25 }}
                className="font-bold text-white hover:text-accent lg:whitespace-nowrap"
                href="/terms-and-conditions"
              >
                Terms & conditions
              </motion.a>
            )}
            {legalLinks.privacyPolicy && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.5 }}
                className="font-bold text-white hover:text-accent lg:whitespace-nowrap"
                href="/privacy-policy"
              >
                Privacy policy
              </motion.a>
            )}
            {legalLinks.cookiesPolicy && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.75 }}
                className="font-bold text-white hover:text-accent lg:whitespace-nowrap"
                href="/cookies-policy"
              >
                Cookies policy
              </motion.a>
            )}
            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 1 }}
              className="mt-0.5 md:ml-4 md:whitespace-nowrap text-blue-100"
            >
              Powered by{" "}
              <Link href={poweredBy.link} className="font-bold hover:text-accent text-white">
                {poweredBy.title}
              </Link>
            </motion.p>
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.4 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: 1 }}
            className="mt-0.5 md:ml-4 md:whitespace-nowrap text-blue-100"
          >
            All rights reserved © {new Date().getFullYear()}
          </motion.p>
        </aside>
      </motion.div>
    </footer>
  );
}

export default Footer;
