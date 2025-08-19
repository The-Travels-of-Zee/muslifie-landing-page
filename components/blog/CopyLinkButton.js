import { Link2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CopyLinkButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined" && window.navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
      });
    }
  };

  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        onClick={handleCopy}
        className="bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white transition-all shadow-lg cursor-pointer"
        aria-label="Copy link"
      >
        <Link2 className="w-5 h-5 rotate-45" />
      </motion.button>

      {/* Tooltip */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1 shadow z-50"
        >
          Copied
        </motion.div>
      )}
    </div>
  );
};

export default CopyLinkButton;
