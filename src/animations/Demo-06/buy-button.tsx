import {
  motion,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const BuyButton = () => {
  const [scope] = useAnimate<HTMLDivElement>();
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start end", "end end"],
    smooth: 1,
  });
  const scrollProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });
  const y = useTransform(scrollProgress, [0.5, 0.75], [100, 0]);
  const opacity = useTransform(scrollProgress, [0.5, 0.75], [0, 1]);

  return (
    <div ref={scope} className="h-screen flex justify-center items-center">
      <motion.button
        className="text-5xl border-4 border-white rounded-full px-6 h-20"
        style={{ opacity, y }}
      >
        Buy Now
      </motion.button>
    </div>
  );
};

export default BuyButton;
