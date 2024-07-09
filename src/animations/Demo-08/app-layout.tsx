import {
  HTMLMotionProps,
  motion,
  PanInfo,
  useMotionValue,
} from "framer-motion";
import { forwardRef, useRef, useState } from "react";
import { cn } from "../../utils";
import { useiOSStore } from "./helpers/store";
import { useShallow } from "zustand/react/shallow";

const AppLayout = forwardRef<
  HTMLDivElement,
  { onClose?: () => void } & HTMLMotionProps<"div">
>(({ onClose, className, style, children, ...rest }, ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const container = useRef<HTMLDivElement>(null);
  const [lastDragY, setLastDragY] = useState(0);
  const [lastRefHeight, setLastRefHeight] = useState(0);
  const { activeApp, setActiveApp } = useiOSStore(
    useShallow(({ activeApp, setActiveApp }) => ({ activeApp, setActiveApp })),
  );

  const closeHandler = () => {
    setActiveApp(undefined);
    onClose?.();
  };

  const dragHandler = (_: unknown, info: PanInfo) => {
    const newScale = 1 - Math.abs(info.offset.y) / lastRefHeight;
    scale.set(Math.max(newScale, 0.25));
    x.set(info.offset.x);
    y.set(Math.max(info.offset.y, -150));
  };

  const dragStartHandler = (_: unknown, info: PanInfo) => {
    setLastRefHeight(container.current?.getBoundingClientRect().height ?? 0);
    setLastDragY(info.point.y);
  };

  const dragEndHandler = (_: unknown, info: PanInfo) => {
    x.set(0);
    y.set(0);
    scale.set(1);
    if (info.point.y < lastDragY) closeHandler();
  };

  if (!activeApp) return null;

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 z-40 overflow-hidden", className)}
      style={{ borderRadius: 48, ...style }}
      {...rest}
    >
      <motion.div
        ref={container}
        layoutId={activeApp?.id}
        style={{ x, y, scale }}
        className="relative h-full w-full overflow-hidden rounded-[3rem]"
      >
        <>{children}</>
        <motion.button
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={false}
          dragSnapToOrigin
          onDrag={dragHandler}
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          className="absolute bottom-0 left-1/2 flex h-6 w-full items-center justify-center"
          style={{ x: "-50%" }}
        >
          <div className="h-1 w-28 rounded bg-neutral-800" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
});

export default AppLayout;
