import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";
import { cn } from "../../utils";
import clsx from "clsx";

const Indicator: FC<
  HTMLMotionProps<"button"> & { indicatorTheme?: "light" | "dark" }
> = ({ indicatorTheme = "light", className, style, ...rest }) => {
  return (
    <motion.button
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={false}
      dragSnapToOrigin
      className={cn(
        "absolute bottom-0 left-1/2 z-50 flex h-safe-bottom w-full cursor-move items-end justify-center pb-2",
        className,
      )}
      style={{ x: "-50%", touchAction: "none", ...style }}
      {...rest}
    >
      <div
        className={clsx(
          indicatorTheme === "light"
            ? "bg-neutral-800/75"
            : "bg-neutral-300/75",
          "h-1 w-28 rounded",
        )}
      />
    </motion.button>
  );
};

export default Indicator;
