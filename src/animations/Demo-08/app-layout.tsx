import {
  DragControls,
  HTMLMotionProps,
  motion,
  PanInfo,
  useAnimate,
  useMotionValue,
} from "framer-motion";
import { FC, forwardRef, lazy, Suspense, useRef, useState } from "react";
import { cn } from "../../utils";
import { useiOSStore } from "./helpers/store";
import Indicator from "./indicator";
import StatusBar from "./status-bar";

const ActiveApp: FC<{ appPathId?: string }> = ({ appPathId }) => {
  if (!appPathId)
    return (
      <div className="grid h-full w-full place-content-center bg-[#f2f2f7] text-black">
        <h4 className="text-xl">This app has not been built yet.</h4>
      </div>
    );
  const App = lazy(() => import(`./apps/${appPathId}/index.tsx`));
  return (
    <Suspense fallback={<div className="h-full bg-app" />}>
      <App />
    </Suspense>
  );
};

const AppLayout = forwardRef<
  HTMLDivElement,
  { onClose?: () => void; dragControls: DragControls } & HTMLMotionProps<"div">
>(({ onClose, dragControls, className, ...rest }, ref) => {
  const activeApp = useiOSStore((state) => state.activeApp);
  const setActiveApp = useiOSStore((state) => state.setActiveApp);
  const [, animate] = useAnimate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const container = useRef<HTMLDivElement>(null);
  const [lastDragY, setLastDragY] = useState(0);
  const [lastRefHeight, setLastRefHeight] = useState(0);

  const closeHandler = () => {
    setActiveApp(undefined);
    onClose?.();
  };

  const dragHandler = (_: unknown, info: PanInfo) => {
    const newScale = 1 - Math.abs(info.offset.y) / lastRefHeight;
    const isInfinity = Math.abs(newScale) === Infinity;
    scale.set(Math.max(!isInfinity ? newScale : 1, 0.25));
    x.set(info.offset.x);
    y.set(Math.max(info.offset.y, -150));
  };

  const dragStartHandler = (_: unknown, info: PanInfo) => {
    setLastRefHeight(container.current?.getBoundingClientRect().height ?? 0);
    setLastDragY(info.point.y);
  };

  const dragEndHandler = (_: unknown, info: PanInfo) => {
    animate(x, 0);
    animate(y, 0);
    animate(scale, 1);
    if (info.point.y < lastDragY) closeHandler();
  };

  if (!activeApp) return null;

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 z-40", className)}
      {...rest}
    >
      <motion.div
        ref={container}
        layoutId={activeApp?.id}
        style={{ x, y, scale, borderRadius: 48 }}
        className="relative h-full w-full overflow-hidden"
      >
        <div className="px-md bg-app pt-sm">
          <StatusBar theme="secondary" dragControls={dragControls} />
        </div>
        <ActiveApp appPathId={activeApp.componentPath} />
        <Indicator
          onDrag={dragHandler}
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
        />
      </motion.div>
    </motion.div>
  );
});

export default AppLayout;
