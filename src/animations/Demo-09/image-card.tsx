import { motion, useInView } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { FC, HTMLProps, useRef } from "react";
import { cn } from "../../utils";
import useMediaQuery from "../../hooks/useMediaQuery";

const ImageCard: FC<HTMLProps<HTMLImageElement>> = ({ className, ...rest }) => {
  const ref = useRef<HTMLImageElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const mobile = useMediaQuery("sm");

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img className={cn("h-full w-full object-cover", className)} {...rest} />
      <motion.div
        ref={ref}
        animate={{
          x: !inView ? -10 : 0,
          y: !inView ? 10 : 0,
          opacity: !inView ? 0 : 1,
        }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0"
      >
        <ArrowRightIcon
          className="-rotate-45 text-white"
          size={mobile ? 60 : 120}
          strokeWidth={1}
        />
      </motion.div>
    </div>
  );
};

export default ImageCard;
