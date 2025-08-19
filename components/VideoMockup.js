"use client";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import IPhoneVideoFrame from "./IPhoneVideoFrame";

export default function VideoMockup({ videoSrc }) {
  if (!videoSrc) return null;

  return (
    <section className="overflow-hidden max-w-screen-lg mx-auto px-4 pb-12 pt-4 md:pt-12">
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-3 font-roboto">
          <AnimatedText text="Watch the demo" />
        </h1>
        <motion.div
          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:200px] md:[--w:350px] mb-4"
          whileInView={{ width: "300px" }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
        />
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          How this app works and what it can do for you
        </motion.p>
      </div>
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
        className="relative mx-auto w-[300px] sm:w-[360px] md:w-[400px] h-auto"
      >
        {/* Video should sit behind the phone frame */}
        <IPhoneVideoFrame
          src={<video src={videoSrc} autoPlay muted playsInline className="mx-auto left-1 mt-3 h-[97%]" />}
        />
      </motion.div>
    </section>
  );
}
