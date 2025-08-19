"use client";
import AnimatedText from "@/components/AnimatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "@/utils/configContext";
import Link from "next/link";

const planImages = ["/misc/wallet-front-color.webp", "/misc/money-front-color.webp", "/misc/locker-front-color.webp"];

const planBGs = ["bg-primary/80", "bg-secondary/80", "bg-accent/80"];

function Pricing() {
  const {
    home: { pricing },
  } = useContext(ConfigContext);
  if (!pricing) return null;

  return (
    <section id={pricing.id} className="overflow-hidden max-w-screen-lg mx-auto px-4 py-12">
      <div className="my-8 md:my-14 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-0 font-roboto">
          <AnimatedText text={pricing.title} />
        </h1>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          {pricing.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col max-w-none gap-8 md:flex-row md:justify-center"
      >
        {pricing.plans?.map((plan, index) => (
          <motion.div
            key={index}
            transition={{ delay: 0.25 + index * 0.25 }}
            className="md:w-1/3 flex relative"
            variants={{
              hidden: { y: "20%", opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {/* {plan.featured && (
              <div className="absolute top-0 bottom-1 right-1 left-0 bg-secondary -z-10 rounded-lg" />
            )} */}
            <div
              className={clsx(
                "border-2 rounded-2xl w-full border-primary/10 flex flex-col shadow-md bg-base-100 z-10 overflow-hidden"
              )}
            >
              <div className="rounded-t-2xl text-center">
                <div className="flex relative">
                  {plan.featured && (
                    <div className="rounded-none font-roboto font-bold text-white py-1 px-2 bg-accent top-0 -right-0 absolute">
                      Best Price
                    </div>
                  )}
                  <div className={clsx("h-24 w-[30%] p-4", planBGs[index])}>
                    <img src={planImages[index]} alt="pricing plan" className="m-0 h-full w-full object-contain" />
                  </div>
                  <div className="mt-8 flex-1 font-bold text-left ml-8 font-roboto text-gray-800">
                    <h4 className="text-xl my-1">{plan.title}</h4>
                    <p className="my-1">{plan.price}</p>
                  </div>
                </div>
                <p className="text-gray-400 my-4 font-arefruqaa">{plan.subtitle}</p>
                <div className="w-full flex-1 flex flex-col mb-4 px-4">
                  {plan.rows.map((row, index) => (
                    <div key={index} className="flex relative items-center">
                      <span className="relative flex h-3 w-3 mx-2">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            plan.featured ? "bg-accent" : "bg-sky-400 "
                          }`}
                        ></span>
                        <span
                          className={`relative inline-flex rounded-full h-3 w-3 ${
                            plan.featured ? "bg-accent/90" : "bg-sky-500 "
                          }`}
                        ></span>
                      </span>
                      <p className="flex-1 text-gray-800 text-left font-roboto my-2">{row}</p>
                    </div>
                  ))}
                </div>
              </div>
              {pricing.actionText && (
                <div className="mt-auto w-full">
                  <Link
                    href="/users"
                    className="block bg-accent px-4 py-3 text-center text-lg text-black hover:bg-primary hover:text-muted transition-all duration-300 font-bold w-full rounded-b-2xl"
                  >
                    {pricing.actionText}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;
