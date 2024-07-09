import { AnimatePresence, MotionConfig } from "framer-motion";
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
  const setActiveApp = useiOSStore((state) => state.setActiveApp);

  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.5, type: "spring" }}>
      <AnimatePresence>
        <div className="flex h-svh flex-col items-center justify-center bg-teal-50">
          <div
            className="relative flex h-full max-h-[50rem] w-full max-w-[24.375rem] flex-shrink-0 flex-col overflow-hidden rounded-[3rem] border-8 border-black bg-cover bg-center bg-no-repeat py-4 text-white"
            style={{
              backgroundImage: `url("https://unsplash.com/photos/MFzAzxTkYLU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE0JTIwd2FsbHBhcGVyfGVufDB8fHx8MTcyMDUxMTg3OHww&force=true&w=1920")`,
            }}
          >
            <div className="flex flex-1 flex-col px-6">
              <StatusBar onDecline={() => {}} onAccept={() => {}} />
              <div className="flex flex-1 flex-col justify-between py-10">
                <div className="grid flex-1 grid-cols-[repeat(4,auto)] justify-between">
                  {homeIcons.map((icon) => {
                    return (
                      <IOSIcon
                        key={icon.id}
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
              </div>
            </div>
            {/* search box */}
            <div className="mx-auto mb-5 flex w-fit items-center justify-center gap-1 rounded-full bg-white/50 px-2 py-1 backdrop-blur-2xl">
              <SearchIcon size={11} className="rotate-6" />{" "}
              <p className="select-none text-[0.6875rem]">Search</p>
            </div>
            {/* dock */}
            <div className="mt-auto px-2">
              <div className="flex justify-between rounded-[36px] bg-white/50 px-4 py-4 backdrop-blur-2xl">
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
            </div>

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
