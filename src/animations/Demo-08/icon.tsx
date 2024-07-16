import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";
import { cn } from "../../utils";
import { useiOSStore } from "./helpers/store";

const AppIcon: FC<
  {
    title: string;
    badge?: number;
    hiddenTitle?: boolean;
    iconImage?: string;
  } & HTMLMotionProps<"button">
> = ({
  title,
  hiddenTitle = false,
  badge = 0,
  iconImage,
  layoutId,
  className,
  style,
  ...rest
}) => {
  const activeApp = useiOSStore((state) => state.activeApp);
  const locked = useiOSStore((state) => state.notificationCenter.locked);

  if (activeApp?.id === layoutId)
    return <div className="h-[3.75rem] w-[3.75rem]" />;

  return (
    <motion.div
      className="relative h-[3.75rem] w-[3.75rem]"
      animate={{ z: locked ? 2000 : 0 }}
    >
      <motion.button
        layoutId={layoutId}
        className={cn(
          "relative h-full w-full bg-white bg-[length:105%] bg-center bg-no-repeat",
          className,
        )}
        style={{
          backgroundImage: `url("${iconImage}")`,
          borderRadius: 12,
          ...style,
        }}
        {...rest}
      >
        <AnimatePresence>
          {badge && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ y: "-33.33%", x: "33.33%" }}
              className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500"
            >
              <motion.p className="text-xs leading-none">{badge}</motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {!hiddenTitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 select-none text-center text-xs"
        >
          {title}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AppIcon;
