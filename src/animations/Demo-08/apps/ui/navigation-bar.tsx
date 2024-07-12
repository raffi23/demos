import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { ChevronLeftIcon } from "lucide-react";
import { FC, MouseEvent, ReactNode, useState } from "react";
import { SAFE_AREA_SPACING_TOP } from "../../helpers/constants";
import { useApp } from "../../hooks/useApp";
import SearchBox from "./search-box";

type NavigationBarButton = {
  title: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const NavigationBar: FC<{
  title: string;
  tintColor?: string;
  actionLeft?: NavigationBarButton;
  actionRight?: ReactNode;
}> = ({ title, tintColor, actionLeft, actionRight }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const { scrollY } = useApp();
  const top = useTransform(
    scrollY,
    [SAFE_AREA_SPACING_TOP, 160],
    [SAFE_AREA_SPACING_TOP * 2, 0],
  );

  useMotionValueEvent(top, "change", (value) => {
    if (value <= SAFE_AREA_SPACING_TOP) setTitleVisible(true);
    else setTitleVisible(false);
  });

  return (
    <>
      <div
        className="sticky top-0 z-20 select-none bg-app pt-safe-top"
        style={{ color: tintColor ?? "inherit" }}
      >
        <motion.div
          className="relative flex h-12 justify-between px-sm py-2"
          animate={{
            borderBottom: titleVisible
              ? "1px solid rgba(0,0,0,0.1)"
              : "1px solid rgba(0,0,0,0)",
          }}
        >
          {actionLeft && (
            <button className="flex items-center" onClick={actionLeft.onClick}>
              <ChevronLeftIcon size={20} /> <span>{actionLeft.title}</span>
            </button>
          )}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
            <AnimatePresence initial={false}>
              <motion.p
                initial={false}
                animate={{ opacity: titleVisible ? 1 : 0 }}
                className="capitalize"
              >
                {title}
              </motion.p>
            </AnimatePresence>
          </div>
          {actionRight}
        </motion.div>
      </div>

      <motion.div
        style={{ top }}
        className="sticky z-10 select-none bg-app px-sm pb-2"
      >
        <h2 className="text-3xl capitalize">{title}</h2>
      </motion.div>

      <div className="sticky top-0 bg-app px-sm pb-2 pt-0">
        <SearchBox />
      </div>
    </>
  );
};

export default NavigationBar;
