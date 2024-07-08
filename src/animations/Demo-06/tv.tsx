import {
  motion,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FC } from "react";

const TV: FC = () => {
  const [tvScope] = useAnimate<HTMLDivElement>();
  const { scrollYProgress } = useScroll({
    target: tvScope,
    offset: ["start start", "end start"],
    smooth: 1,
  });
  const scrollProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });
  const width = useTransform(scrollProgress, [0, 0.25], ["100%", "50%"]);
  const borderWidth = useTransform(scrollProgress, [0, 0.25], [0, 8]);
  const top = useTransform(scrollProgress, [0, 0.25], ["0%", "5%"]);
  const z = useTransform(scrollProgress, [0, 0.25], [250, 0]);
  const opacity = useTransform(scrollProgress, [0.25, 0.35], [0, 1]);
  const y = useTransform(scrollProgress, [0.25, 0.35], [50, 0]);

  return (
    <div ref={tvScope} className="h-[200vh] bg-white pb-20">
      <motion.div className="flex flex-col items-center sticky" style={{ top }}>
        <div className="relative w-full flex-shrink-0 flex-grow-0 flex flex-col items-center">
          <motion.img
            src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_large_2x.jpg"
            className="border border-black object-cover aspect-video"
            style={{ borderWidth, width }}
          />
          <motion.img
            src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_tv_shadow_color__h0jua2c6nwi2_large_2x.png"
            className="object-contain absolute top-full left-1/2 -translate-x-1/2 -z-10 blur-xl"
            style={{ width }}
          />
        </div>
        <div
          className="flex gap-6 mt-6"
          style={{
            perspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.img
            src={
              "https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_tv_remote__da02803g5doy_large_2x.png"
            }
            className="w-[20vw] aspect-video object-contain"
            style={{ z }}
          />
        </div>
        <motion.div
          className="text-center text-neutral-400 max-w-lg text-xl"
          style={{ opacity, y }}
        >
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus
            quam quaerat repellat aut ipsum blanditiis veniam consequuntur
            pariatur impedit perspiciatis corrupti eligendi fugit.
          </p>
          <p>Starting $129</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TV;
