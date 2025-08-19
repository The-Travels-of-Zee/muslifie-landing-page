"use client"
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    visibility: "hidden",
  },
  show: {
    opacity: 1,
    visibility: "visible",
    transition: {
      staggerChildren: 0.1,
      duration: 0.2,
    },
  },
};

function AnimatedList({ isVisible, children, listClassName, listKey }) {
  return (
    <motion.div
      key={listKey}
      className={listClassName}
      initial="hidden"
      variants={container}
      animate={isVisible ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedList;
