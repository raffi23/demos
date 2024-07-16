import { FC } from "react";
import { dockIcons } from "./helpers/constants";
import AppIcon from "./icon";
import { motion } from "framer-motion";
import { useiOSStore } from "./helpers/store";

const Dock: FC<{ lastActiveId: string; onIconClick: (id: string) => void }> = ({
  lastActiveId,
  onIconClick,
}) => {
  const locked = useiOSStore((state) => state.notificationCenter.locked);

  return (
    <motion.div
      className="mt-auto px-2"
      animate={{ y: locked ? "200%" : "0%", z: locked ? 1000 : 0 }}
    >
      <div className="flex justify-between rounded-[2.25rem] bg-white/40 px-4 py-4 backdrop-blur-2xl">
        {dockIcons.map((app) => {
          return (
            <AppIcon
              key={app.id}
              layoutId={app.id}
              title={app.title}
              iconImage={app.imageUrl}
              hiddenTitle
              style={{ zIndex: lastActiveId === app.id ? 10 : "auto" }}
              onClick={() => onIconClick(app.id)}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dock;
