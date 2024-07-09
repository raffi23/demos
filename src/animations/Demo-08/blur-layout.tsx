import { AnimatePresence, motion } from "framer-motion";
import { useiOSStore } from "./helpers/store";

const BlurLayout = () => {
  const activeApp = useiOSStore((state) => state.activeApp);

  return (
    <AnimatePresence>
      {activeApp && (
        <motion.div
          className="absolute inset-0"
          initial={{
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
          }}
          animate={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          exit={{
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
          }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AnimatePresence>
  );
};

export default BlurLayout;
