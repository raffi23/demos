import { motion, useAnimate, useMotionValue } from "framer-motion";
import { useiOSStore } from "./helpers/store";

const FrameButtons = () => {
  const [scope, animate] = useAnimate();
  const lockButtonX = useMotionValue(0);
  const setNotificationCenter = useiOSStore(
    (state) => state.setNotificationCenter,
  );

  const lockHandler = () => {
    animate(lockButtonX, [0, -10, 0], { duration: 0.35 });
    setNotificationCenter({ locked: true });
  };

  return (
    <div ref={scope} className="absolute left-full top-1/4">
      <motion.button
        style={{ x: lockButtonX }}
        onClick={lockHandler}
        className="h-20 w-1 rounded-r bg-black"
      />
    </div>
  );
};

export default FrameButtons;
