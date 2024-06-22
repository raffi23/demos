"use client";

import { motion } from "framer-motion";
import { FC, PropsWithChildren, useRef } from "react";

const AnimateVisibility: FC<
  PropsWithChildren<{ visible: boolean; mode?: "width" | "height" }>
> = ({ visible, children, mode = "height" }) => {
  const ref = useRef<HTMLDivElement>();
  const dimension = useRef(0);

  const setDimensions = (element: HTMLDivElement) => {
    const refDimension =
      mode === "height"
        ? parseFloat(window.getComputedStyle(element).height)
        : parseFloat(window.getComputedStyle(element).width);
    dimension.current = refDimension;
  };

  return (
    <motion.div
      ref={(element) => {
        if (element) {
          setDimensions(element);
          ref.current = element;
        }
      }}
      initial={false}
      animate={
        mode === "height"
          ? { height: visible ? [0, "auto"] : [dimension.current, 0] }
          : { width: visible ? [0, "auto"] : [dimension.current, 0] }
      }
      onAnimationComplete={() => {
        if (visible && ref.current) {
          setDimensions(ref.current);
        }
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default AnimateVisibility;
