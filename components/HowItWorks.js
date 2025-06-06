import AnimatedText from "@/components/AnimatedText";
import clsx from "clsx";
import { motion } from "@/lib/motion";

function HowItWorks({ howItWorks }) {
  if (!howItWorks) return null;

  return (
    <section
      id={howItWorks.id}
      className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-(--primary-light)/10 via-white to-(--secondary-light)/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-(--secondary-dark)">
              <AnimatedText text={howItWorks.title} />
            </h2>

            <motion.div
              className="mx-auto h-1.5 bg-gradient-to-r from-accent via-(--danger) to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "220px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {howItWorks.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                {howItWorks.subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 lg:w-px xl:w-0.5 bg-gradient-to-b from-(--primary-light) via-primary to-transparent" />

          <div className="space-y-16 lg:space-y-24">
            {howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div
                  className={clsx("flex flex-col lg:flex-row items-center gap-8 lg:gap-16", {
                    "lg:flex-row-reverse": index % 2 === 1,
                  })}
                >
                  {/* Content Side */}
                  <motion.div
                    variants={{
                      hidden: {
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                      },
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-1 text-center lg:text-left"
                  >
                    {/* Step Number */}
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-(--secondary-light) to-secondary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-white">{index + 1}</span>
                      </div>
                      {/* Connecting dots for mobile */}
                      {index < howItWorks.steps.length && (
                        <div className="lg:hidden flex flex-col items-center ml-8 space-y-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-secondary/30 rounded-full" />
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-(--secondary-dark) mb-4">{step.title}</h3>

                    <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-secondary to-(--secondary-light) mx-auto lg:mx-0 mb-4" />

                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.subtitle}
                    </p>
                  </motion.div>

                  {/* iPhone Mockup Side */}
                  <motion.div
                    variants={{
                      hidden: {
                        x: index % 2 === 0 ? 50 : -50,
                        opacity: 0,
                        scale: 0.95,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                      },
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="flex-1"
                  >
                    <div className="relative group max-w-xs mx-auto">
                      <div className="relative h-80 lg:h-96 transition-transform duration-300 group-hover:scale-105">
                        {/* Screenshot positioned inside the frame */}
                        <div className="absolute top-1.5 right-1.5 lg:right-18.5 z-0">
                          <img
                            src={step.image}
                            alt={`${step.title} screenshot`}
                            className="h-78 lg:h-93 w-full object-cover rounded-[1rem] 2xs:rounded-[2rem]"
                          />
                        </div>
                        {/* iPhone frame overlay */}
                        <img
                          src="/misc/iphone-frame.webp"
                          alt="iphone-frame"
                          className="relative z-10 w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Desktop connecting line node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8">
                  <div className="w-4 h-4 bg-white border-4 border-primary rounded-full shadow-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

export default HowItWorks;
