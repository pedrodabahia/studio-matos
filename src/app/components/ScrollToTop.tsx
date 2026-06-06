import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 500);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="group fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#00ff88] bg-[#00ff88]/10 backdrop-blur-sm transition-all hover:bg-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="h-6 w-6 text-[#00ff88] transition-colors group-hover:text-black" />
    </motion.button>
  );
}
