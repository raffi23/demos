import { motion } from "framer-motion";
import { SunIcon } from "lucide-react";
import { FC } from "react";

const Marquee: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
          times: [0, 1],
        }}
      >
        {Array(3)
          .fill(null)
          .map((_, i) => {
            return (
              <div className="flex items-center gap-6" key={i}>
                <h2 className="whitespace-nowrap text-[length:12rem] uppercase">
                  {text}
                </h2>
                <SunIcon size={50} />
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Marquee;
