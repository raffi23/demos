import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";

const animations = {
  fadeIn: {
    out: { opacity: 0 },
    in: { opacity: 1 },
  },
  slideDown: {
    out: { y: -10, opacity: 0 },
    in: { y: 0, opacity: 1 },
  },
  slideRight: {
    out: { x: -10, opacity: 0 },
    in: { x: 0, opacity: 1 },
  },
  slideDownFull: {
    out: { y: "-100%", opacity: 0 },
    in: { y: "0%", opacity: 1 },
  },
  slideRightFull: {
    out: { x: "-100%", opacity: 0 },
    in: { x: "0%", opacity: 1 },
  },
  slideLeft: {
    out: { x: 10, opacity: 0 },
    in: { x: 0, opacity: 1 },
  },
  slideLeftFull: {
    out: { x: "100%", opacity: 0 },
    in: { x: "0%", opacity: 1 },
  },
};

const Animate = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> & { animation?: keyof typeof animations }
>(({ children, animation = "fadeIn", ...rest }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={animations[animation]}
      initial="out"
      animate="in"
      exit="out"
      {...rest}
    >
      {children}
    </motion.div>
  );
});

export default Animate;
