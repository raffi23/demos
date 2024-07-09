import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

const IOSIcon: FC<{
  badge?: number;
  hiddenName?: boolean;
  iconImage?: string;
  layoutId?: string;
  onClick?: () => void;
}> = ({ hiddenName = false, badge = 0, iconImage, layoutId, onClick }) => {
  return (
    <motion.div
      layoutId={layoutId}
      className="flex flex-col gap-0.5"
      onClick={onClick}
      style={{ transformOrigin: "bottom center" }}
    >
      <div
        className="relative h-14 w-14 rounded-xl bg-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${iconImage}")`,
        }}
      >
        <AnimatePresence key="badge">
          {badge && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ y: "-33.33%", x: "33.33%" }}
              className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500"
            >
              <p className="text-xs leading-none">{badge}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!hiddenName && <p className="text-center text-xs">App</p>}
    </motion.div>
  );
};

export default IOSIcon;
