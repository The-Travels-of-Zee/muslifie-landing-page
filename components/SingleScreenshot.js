import { motion } from "@/lib/motion";

function SingleScreenshot({ index, src }) {

  return (
    <motion.img
      src={src}
      alt={`screenshot ${index}`}
      style={{ scale: 1 }}
      className="absolute overflow-hidden w-full h-full object-cover"
    />
  );
}

export default SingleScreenshot;
