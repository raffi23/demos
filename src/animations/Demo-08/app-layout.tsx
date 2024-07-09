import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { cn } from "../../utils";
import { useiOSStore } from "./helpers/store";
import { useShallow } from "zustand/react/shallow";

const AppLayout = forwardRef<
  HTMLDivElement,
  { onClose?: () => void } & HTMLMotionProps<"div">
>(({ onClose, className, style, children, ...rest }, ref) => {
  const [lastDrag, setLastDrag] = useState(0);
  const { activeApp, setActiveApp } = useiOSStore(
    useShallow(({ activeApp, setActiveApp }) => ({ activeApp, setActiveApp })),
  );

  const closeHandler = () => {
    setActiveApp(undefined);
    onClose?.();
  };

  if (!activeApp) return null;

  return (
    <motion.div
      ref={ref}
      layoutId={activeApp?.layoutId}
      className={cn("absolute inset-0 z-40 overflow-hidden", className)}
      style={{ borderRadius: 48, ...style }}
      {...rest}
    >
      <>{children}</>
      <motion.button
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.15}
        dragSnapToOrigin
        onDragStart={(_, info) => setLastDrag(info.point.y)}
        onDragEnd={(_, info) => {
          if (info.point.y < lastDrag) closeHandler();
        }}
        className="absolute left-1/2 h-1 w-28 rounded bg-black"
        style={{ x: "-50%", bottom: 8 }}
      />
    </motion.div>
  );
});

export default AppLayout;
