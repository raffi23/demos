import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import AppLayout from "./app-layout";
import { dockIcons, homeIcons } from "./helpers/constants";
import { useiOSStore } from "./helpers/store";
import IOSIcon from "./icon";
import StatusBar from "./status-bar";
import BlurLayout from "./blur-layout";

const Demo08 = () => {
  const [lastActiveId, setLastActiveId] = useState<string>();
  const activeApp = useiOSStore((state) => state.activeApp);
  const setActiveApp = useiOSStore((state) => state.setActiveApp);
  const scale = activeApp ? 0.9 : 1;

  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.5, type: "spring" }}>
      <AnimatePresence initial={false}>
        <div className="flex h-svh flex-col items-center justify-center bg-teal-50">
          <div
            className="relative flex h-full max-h-[58.25rem] w-full max-w-[26.875rem] flex-shrink-0 flex-col overflow-hidden rounded-[3rem] border-8 border-black bg-cover bg-center bg-no-repeat py-4 text-white md:aspect-[9/19.5] md:h-[52.75rem] md:w-auto md:max-w-[24.375rem]"
            style={{ backgroundImage: `url("/demo-08/wallpaper.webp")` }}
          >
            <div className="flex flex-1 flex-col px-6">
              <StatusBar onDecline={() => {}} onAccept={() => {}} />
              <motion.div
                className="flex flex-1 flex-col justify-between py-10"
                animate={{ scale }}
              >
                <div className="grid flex-1 grid-cols-[repeat(4,auto)] grid-rows-[repeat(6,minmax(auto,5rem))] justify-between gap-y-4">
                  {homeIcons.slice(0, 24).map((icon, i) => {
                    return (
                      <IOSIcon
                        key={icon.id + i}
                        layoutId={icon.id}
                        title={icon.title}
                        iconImage={icon.imageUrl}
                        style={{
                          zIndex: lastActiveId === icon.id ? 10 : "auto",
                        }}
                        onClick={() => {
                          setLastActiveId(icon.id);
                          setActiveApp({ id: icon.id });
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            </div>
            {/* search box */}
            <div className="mx-auto mb-5 flex w-fit items-center justify-center gap-1 rounded-full bg-white/40 px-2 py-1 backdrop-blur-2xl">
              <SearchIcon size={11} className="rotate-6" />{" "}
              <p className="select-none text-[0.6875rem]">Search</p>
            </div>
            {/* dock */}
            <motion.div className="mt-auto px-2" animate={{ scale }}>
              <div className="flex justify-between rounded-[2.25rem] bg-white/40 px-4 py-4 backdrop-blur-2xl">
                {dockIcons.map((icon) => {
                  return (
                    <IOSIcon
                      key={icon.id}
                      layoutId={icon.id}
                      title={icon.title}
                      iconImage={icon.imageUrl}
                      hiddenTitle
                      style={{ zIndex: lastActiveId === icon.id ? 10 : "auto" }}
                      onClick={() => {
                        setLastActiveId(icon.id);
                        setActiveApp({ id: icon.id });
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>

            <BlurLayout />
            <AppLayout>
              <div className="h-full w-full bg-white"></div>
            </AppLayout>
          </div>
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Demo08;
