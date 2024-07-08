import { motion, MotionValue, useTransform } from "framer-motion";
import { FC } from "react";

const Slider: FC<{
  sliderItems: string[];
  scrollYProgress: MotionValue<number>;
  direction: "left" | "right";
  range: number[];
}> = ({ sliderItems, scrollYProgress, direction, range }) => {
  const x = useTransform(
    scrollYProgress,
    range,
    direction === "left" ? ["-100%", "0%"] : ["0%", "-100%"],
  );

  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-black/30 to-transparent z-10" />
      <motion.div className="flex flex-nowrap h-[25vh]" style={{ x }}>
        {[...sliderItems, ...sliderItems, ...sliderItems].map((item, index) => {
          return (
            <img
              key={`${item}-${index}`}
              src={item}
              className="w-[35vw] object-cover h-full flex-shrink-0 flex-grow-0"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Slider;
