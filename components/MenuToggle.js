"use client";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="currentColor" strokeLinecap="round" {...props} />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    aria-label="Toggle Menu"
    className="text-primary focus:outline-none transition-colors duration-200"
  >
    <motion.svg initial={false} animate={isOpen ? "open" : "closed"} width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 9.423 L 20 9.423", opacity: 1 },
          open: { d: "M 2 9.423 L 20 9.423", opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </motion.svg>
  </button>
);

export default MenuToggle;
