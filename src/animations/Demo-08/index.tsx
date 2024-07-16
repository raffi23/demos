import {
  AnimatePresence,
  motion,
  MotionConfig,
  useDragControls,
} from "framer-motion";
import { useState } from "react";
import AppLayout from "./app-layout";
import BlurLayout from "./blur-layout";
import Dock from "./dock";
import DynamicIsland from "./dynamic-island";
import FrameButtons from "./frame-buttons";
import { useiOSStore } from "./helpers/store";
import HomeScreen from "./homescreen";
import NotificationCenter from "./notification-center";
import SearchButton from "./search-button";
import StatusBar from "./status-bar";

const Demo08 = () => {
  const [lastActiveId, setLastActiveId] = useState<string>("");
  const activeApp = useiOSStore((state) => state.activeApp);
  const setActiveApp = useiOSStore((state) => state.setActiveApp);
  const dragControls = useDragControls();

  const iconClickHandler = (id: string, pathId?: string) => {
    setLastActiveId(id);
    setActiveApp({ id: id, componentPath: pathId });
  };

  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.6, type: "spring" }}>
      <AnimatePresence initial={false}>
        <div className="flex h-svh flex-col items-center justify-center overflow-hidden bg-teal-50 pr-2">
          <div className="relative h-full max-h-[58.25rem] w-full max-w-[26.875rem] md:aspect-[9/19.5] md:max-h-[52.75rem] md:w-auto md:max-w-[24.375rem]">
            <FrameButtons />
            <div
              className="relative h-full w-full overflow-hidden rounded-[3rem] border-8 border-black bg-cover bg-center bg-no-repeat py-sm text-white"
              style={{ backgroundImage: `url("/demo-08/wallpaper.webp")` }}
            >
              <DynamicIsland onAccept={() => {}} onDecline={() => {}} />
              <motion.div
                className="flex h-full flex-col"
                animate={{ scale: activeApp ? 0.95 : 1 }}
                style={{ perspective: 2000, transformStyle: "preserve-3d" }}
              >
                <div className="px-md flex flex-1 flex-col">
                  <StatusBar dragControls={dragControls} />
                  <div className="flex flex-1 flex-col justify-between py-10">
                    <HomeScreen
                      lastActiveId={lastActiveId}
                      onIconClick={iconClickHandler}
                    />
                  </div>
                </div>
                {/* search box */}
                <SearchButton />
                {/* dock */}
                <Dock
                  lastActiveId={lastActiveId}
                  onIconClick={iconClickHandler}
                />
              </motion.div>
              <BlurLayout />
              <AppLayout dragControls={dragControls} />
              <NotificationCenter dragControls={dragControls} />
              {/* stop browser from complaining */}
              <div className="hidden">
                <span style={{ fontWeight: 400 }}>Normal</span>
                <span style={{ fontWeight: 500 }}>Medium</span>
                <span style={{ fontWeight: 600 }}>Semi-bold</span>
                <span style={{ fontWeight: 700 }}>Bold</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Demo08;
