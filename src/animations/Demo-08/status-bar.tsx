import clsx from "clsx";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { WifiIcon } from "./icons/wifi-icon";
import DynamicIsland from "./dynamic-island";
import { motion } from "framer-motion";
import { useiOSStore } from "./helpers/store";

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
      animate={{ backgroundColor: activeApp ? "#000000" : "#ffffff" }}
    >
      <motion.p
        className="select-none text-[11px] font-medium leading-none"
        animate={{ color: !activeApp ? "#000000" : "#ffffff" }}
      >
        100
      </motion.p>
    </motion.div>
  );
};

const StatusBar: FC<{
  onDecline: () => void;
  onAccept: () => void;
}> = ({ onAccept, onDecline }) => {
  const activeApp = useiOSStore((state) => state.activeApp);
  const interval = useRef(0);
  const [time, setTime] = useState(new Date());
  const formattedTime = useMemo(() => {
    const split = time.toLocaleTimeString().split(":");
    return `${split[0]}:${split[1]}`;
  }, [time]);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(interval.current);
    };
  }, []);

  return (
    <motion.div
      className="relative z-50 flex items-center justify-between"
      animate={{ color: activeApp ? "#000" : "#fff" }}
    >
      <div className="flex">
        <p className="select-none pl-2 pt-2 leading-none">{formattedTime}</p>
      </div>
      <div className="flex items-end gap-2">
        <Network />
        <Battery />
      </div>
      <DynamicIsland onAccept={onAccept} onDecline={onDecline} />
    </motion.div>
  );
};

export default StatusBar;
