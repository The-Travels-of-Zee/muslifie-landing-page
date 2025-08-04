import AnimatedText from "@/components/AnimatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { features } from "@/constants";

function Features() {
  if (!features) return null;

  return (
    <section
      id={features.id}
      className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--secondary-dark) leading-tight">
              <AnimatedText text={features.title} />
            </h2>

            <motion.div
              className="mx-auto h-1.5 bg-gradient-to-r from-accent via-(--danger) to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "220px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {features.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                {features.subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.cards.map((feat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={clsx(
                "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-secondary",
                "hover:-translate-y-2 cursor-pointer backdrop-blur-sm",
                {
                  "md:col-span-2 lg:col-span-1": index === features.cards.length - 1 && features.cards.length % 3 === 1,
                }
              )}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-(--secondary-light) to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <video
                    src={feat.icon}
                    alt={feat.title}
                    loop
                    autoPlay
                    muted
                    className="w-24 h-24 rounded-2xl object-contain filter group-hover:brightness-110 transition-all duration-500"
                  />
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-2 right-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star fill="orange" stroke="yellow" size={28} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                  {feat.title}
                </h3>

                <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-(--secondary-light) mx-auto rounded-full transform group-hover:w-16 transition-all duration-500" />

                <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feat.subtitle}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Discover More Features</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Features;
