import {
  DragControls,
  HTMLMotionProps,
  motion,
  PanInfo,
  useAnimate,
  useMotionValue,
} from "framer-motion";
import {
  FC,
  MouseEvent,
  SVGProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../../utils";
import { useiOSStore } from "./helpers/store";
import useFormattedDate from "./hooks/useFormattedDate";
import Camera from "./icons/camera";
import Flashlight from "./icons/flashlight";
import Indicator from "./indicator";
import StatusBar from "./status-bar";

const MAX_SCALE = 1.3;
const SCALE_INTERVAL = 0.25;
const NotificationCenterButton: FC<
  HTMLMotionProps<"button"> & { icon: FC<SVGProps<SVGSVGElement>> }
> = ({ className, icon, onClick, ...rest }) => {
  const MotionIcon = motion(icon);
  const interval = useRef(0);
  const scale = useMotionValue(1);
  const [scope, animate] = useAnimate();
  const [active, setActive] = useState(false);
  const [passedTime, setPassedTime] = useState(0);

  const clearTimer = () => {
    clearInterval(interval.current);
    animate(scale, 1);
  };

  const pointerDownHandler = () => {
    if (interval.current) clearTimer();
    interval.current = setInterval(() => {
      setPassedTime((prev) => prev + 1);
      if (scale.get() < MAX_SCALE) {
        animate(scale, scale.get() + SCALE_INTERVAL, { bounce: 1 });
      }
    }, 100);
  };

  const pointerUpHandler = (event: MouseEvent<HTMLButtonElement>) => {
    clearTimer();
    if (passedTime >= MAX_SCALE / SCALE_INTERVAL) {
      onClick?.(event);
      setActive((prev) => !prev);
    }
  };

  return (
    <motion.button
      ref={scope}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full backdrop-blur",
        className,
      )}
      onPointerDown={pointerDownHandler}
      onPointerUp={pointerUpHandler}
      animate={{
        backgroundColor: active
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(0, 0, 0, 0.1)",
      }}
      style={{ scale }}
      {...rest}
    >
      <MotionIcon
        initial={false}
        width={22}
        height={22}
        animate={{
          fill: active ? "#000" : "#fff",
          stroke: active ? "#ffffff" : "#000",
        }}
      />
    </motion.button>
  );
};

const NotificationCenterTime = () => {
  const { formattedTime, formattedDay } = useFormattedDate();

  return (
    <div className="mt-md select-none">
      <div className="pt-6 text-center">
        <p className="text-xl">{formattedDay}</p>
        <h1 className="text-7xl text-white">{formattedTime}</h1>
      </div>
    </div>
  );
};

const NotificationCenterButtons: FC = () => {
  return (
    <div className="mb-safe-bottom mt-auto flex items-center justify-between">
      <NotificationCenterButton icon={Flashlight} />
      <NotificationCenterButton icon={Camera} />
    </div>
  );
};

const NotificationCenter: FC<{ dragControls: DragControls }> = ({
  dragControls,
}) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [offsetYStart, setOffsetYStart] = useState(0);
  const [offsetYEnd, setOffsetYEnd] = useState(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(1);
  const notificationCenter = useiOSStore((state) => state.notificationCenter);
  const setNotificationCenter = useiOSStore(
    (state) => state.setNotificationCenter,
  );

  const dragHandler = (_: unknown, info: PanInfo) => {
    const elementRect = scope.current.getBoundingClientRect();
    const nextOffsetY = info.offset.y + offsetYEnd;

    y.set(nextOffsetY >= 0 ? 0 : nextOffsetY);
    if (offsetYStart < 0) {
      opacity.set(1 - Math.abs(info.offset.y / elementRect.height));
    } else {
      opacity.set(Math.abs(info.offset.y / elementRect.height));
    }
  };

  const dragStartHandler = (_: unknown, info: PanInfo) => {
    setOffsetYStart(info.offset.y);
  };

  const openNotificationCenter = useCallback(() => {
    animate(y, 0);
    animate(opacity, 1);
    setOffsetYEnd(0);
    setNotificationCenter({ open: true });
  }, [animate, opacity, setNotificationCenter, y]);

  const closeNotificationCenter = () => {
    const elementRect = scope.current.getBoundingClientRect();
    const top = -elementRect.height;
    animate(y, top);
    animate(opacity, 0);
    setOffsetYEnd(top);
    setNotificationCenter({ open: false, locked: false });
  };

  const dragEndHandler = (_: unknown, info: PanInfo) => {
    const elementRect = scope.current.getBoundingClientRect();
    setOffsetYEnd(info.offset.y);

    if (offsetYStart < 0) {
      if (elementRect.height * 0.25 < Math.abs(info.offset.y)) {
        closeNotificationCenter();
      } else openNotificationCenter();
    } else {
      if (elementRect.height * 0.25 > Math.abs(info.offset.y)) {
        closeNotificationCenter();
      } else openNotificationCenter();
    }
  };

  useEffect(() => {
    if (notificationCenter.locked) openNotificationCenter();
  }, [notificationCenter.locked, openNotificationCenter]);

  return (
    <motion.div
      ref={scope}
      className="absolute inset-0 z-40 py-sm backdrop-blur-md"
      style={{ y }}
    >
      <div className="px-md">
        <StatusBar timeHidden />
      </div>
      <div className="px-lg flex h-full flex-col">
        <NotificationCenterTime />
        <NotificationCenterButtons />
      </div>
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/demo-08/wallpaper.webp")`, opacity }}
      />
      <Indicator
        indicatorTheme="dark"
        onDrag={dragHandler}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        dragControls={dragControls}
      />
    </motion.div>
  );
};

export default NotificationCenter;
