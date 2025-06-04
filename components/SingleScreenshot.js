import { motion, transform, useTransform } from "@/lib/motion";

function SingleScreenshot({ scrollYProgress, index, totalCount, src }) {
  // For single screenshot, don't apply any transform effects - just show the image
  if (totalCount === 1) {
    return (
      <img src={src} alt={`screenshot ${index}`} className="absolute overflow-hidden w-full h-full object-cover" />
    );
  }

  // Apply scroll transforms only for multiple screenshots
  const x = useTransform(scrollYProgress, (y) => {
    if (index > 0 && index % 2 === 0) {
      const i = totalCount - index;
      const transformer = transform([(i - 1) / totalCount, i / totalCount], [0, 1]);
      return -transformer(y) * 100 + "%";
    }
    return 0;
  });

  const y = useTransform(scrollYProgress, (y) => {
    if (index % 2 === 1) {
      const i = totalCount - index;
      const transformer = transform([(i - 1) / totalCount, i / totalCount], [0, 1]);
      return -transformer(y) * 100 + "%";
    }
    return 0;
  });

  return (
    <motion.img
      src={src}
      alt={`screenshot ${index}`}
      style={{ translateX: x, translateY: y, scale: 1 }}
      className="absolute overflow-hidden w-full h-full object-cover"
    />
  );
}

export default SingleScreenshot;
