import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionValue,
  useTransform,
  Variants,
} from "framer-motion";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { cn } from "../../utils";
import {
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  LucideIcon,
} from "lucide-react";

const carouselVariants: Variants = {
  0: { x: "-220%", opacity: 0 },
  1: { x: "-110%", opacity: 0.25 },
  2: { x: "0%", opacity: 1 },
  3: { x: "110%", opacity: 0.25 },
  4: { x: "220%", opacity: 0 },
};

const CarouselButton: FC<
  HTMLMotionProps<"button"> & { Icon: LucideIcon; direction: "right" | "left" }
> = ({ direction, Icon, className, ...rest }) => {
  return (
    <motion.button
      className={cn(
        "absolute top-1/2 -translate-y-1/2 text-white",
        direction === "left" ? "left-24" : "right-24",
        className,
      )}
      {...rest}
    >
      <Icon size={45} className="drop-shadow-lg" />
    </motion.button>
  );
};

const CarouselItem: FC<HTMLMotionProps<"img"> & PropsWithChildren> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <motion.img
      className={cn(
        "absolute top-0 w-[33%] h-full object-cover flex-shrink-0 flex-grow-0",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.img>
  );
};

const Carousel: FC<{
  scrollYProgress: MotionValue<number>;
  carouselItems: string[];
}> = ({ scrollYProgress, carouselItems }) => {
  const [state, setState] = useState({
    active: 1,
    direction: 1,
  });
  const width = useTransform(scrollYProgress, [0, 0.25], ["100%", "33%"]);
  const height = useTransform(scrollYProgress, [0, 0.25], ["100vh", "34vh"]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.25], [0, 16]);
  const slides = useMemo(() => {
    const items = [];
    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = carouselItems.length + i;
      } else if (i >= carouselItems.length) {
        index = i % carouselItems.length;
      }
      items.push(carouselItems[index]);
    }
    return items;
  }, [state.active, carouselItems]);

  const activeChangeHandler = (direction: 1 | -1) => {
    if (direction === -1) {
      setState((prev) => {
        const next = prev.active - 1;
        if (next < 0) return { direction, active: carouselItems.length - 1 };
        else return { direction, active: next };
      });
    } else {
      setState((prev) => {
        const next = prev.active + 1;
        if (next > carouselItems.length - 1) {
          return { direction, active: 0 };
        } else {
          return { direction, active: next };
        }
      });
    }
  };

  return (
    <motion.div
      className="relative flex justify-center overflow-x-hidden"
      style={{ height }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {slides.map((image, index) => {
          return (
            <CarouselItem
              key={image}
              src={image}
              variants={carouselVariants}
              initial={`${index + 1}`}
              animate={`${index}`}
              exit={`${index - 1}`}
              style={{ width, borderRadius }}
              transition={{ bounce: 0, ease: "easeInOut" }}
            />
          );
        })}
      </AnimatePresence>

      <CarouselButton
        direction="left"
        Icon={ChevronLeftCircleIcon}
        onClick={() => activeChangeHandler(-1)}
        style={{ opacity }}
      />
      <CarouselButton
        direction="right"
        Icon={ChevronRightCircleIcon}
        onClick={() => activeChangeHandler(1)}
        style={{ opacity }}
      />
    </motion.div>
  );
};

export default Carousel;
