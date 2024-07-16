import clsx from "clsx";
import { DragControls, motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { useiOSStore } from "./helpers/store";
import useFormattedDate from "./hooks/useFormattedDate";
import { WifiIcon } from "./icons/wifi-icon";

const Network: FC = () => {
  const interval = useRef(0);
  const [random, setRandom] = useState(4);
  const activeApp = useiOSStore((state) => state.activeApp);

  useEffect(() => {
    interval.current = setInterval(() => {
      setRandom(Math.random() * (4 - 1) + 1);
    }, 3000);

    return () => {
      clearTimeout(interval.current);
    };
  }, []);

  return (
    <>
      <div className="flex h-fit items-end gap-[1.5px]">
        {Array(4)
          .fill(null)
          .map((_, index) => {
            return (
              <motion.div
                key={"bar-" + index}
                className={clsx("w-[3.5px]")}
                initial={false}
                animate={{
                  backgroundColor:
                    index + 1 <= random
                      ? activeApp
                        ? "#000000"
                        : "#ffffff"
                      : activeApp
                        ? "#d4d4d4"
                        : "#d4d4d466",
                }}
                style={{ height: index + 1 * 4 + index * 2 }}
              />
            );
          })}
      </div>

      <WifiIcon />
    </>
  );
};

const Battery = () => {
  const activeApp = useiOSStore((state) => state.activeApp);

  return (
    <motion.div
      className="rounded px-1 py-0.5 text-white"
      initial={false}
      animate={{ backgroundColor: activeApp ? "#000000" : "#ffffff" }}
    >
      <motion.p
        className="select-none text-[11px] font-medium leading-none"
        initial={false}
        animate={{ color: !activeApp ? "#000000" : "#ffffff" }}
      >
        100
      </motion.p>
    </motion.div>
  );
};

const StatusBar: FC<{
  theme?: "primary" | "secondary";
  dragControls?: DragControls;
  timeHidden?: boolean;
}> = ({ theme = "primary", timeHidden, dragControls }) => {
  const { formattedTime } = useFormattedDate();

  return (
    <motion.div
      initial={false}
      className="relative z-50 grid grid-cols-2 items-center"
      animate={{ color: theme === "secondary" ? "#000" : "#fff" }}
    >
      <motion.div
        className="flex touch-none select-none"
        onPointerDown={(event) =>
          !timeHidden && dragControls?.start(event, { snapToCursor: true })
        }
      >
        {!timeHidden && <p className="leading-none">{formattedTime}</p>}
      </motion.div>

      <div className={"ml-auto flex items-center gap-2"}>
        <Network />
        <Battery />
      </div>
    </motion.div>
  );
};

export default StatusBar;
