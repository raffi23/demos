import { AnimatePresence } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";
import IOSIcon from "./icon";
import PhoneApp from "./phone-app";
import StatusBar from "./status-bar";

const SystemContext = createContext({
  phoneOpen: false,
});

export const useSystemContext = () => {
  const values = useContext(SystemContext);
  return values;
};

const Demo08 = () => {
  const [badge, setBadge] = useState(0);
  const [phoneOpen, setPhoneOpen] = useState(false);

  return (
    <SystemContext.Provider value={{ phoneOpen }}>
      <AnimatePresence>
        <div className="flex h-svh flex-col items-center justify-end bg-teal-50">
          <div
            className="relative flex h-full max-h-[50rem] w-full max-w-[26.875rem] flex-shrink-0 flex-col overflow-hidden rounded-[3rem] border-8 border-black bg-cover bg-center bg-no-repeat py-4 text-white"
            style={{
              backgroundImage: `url("https://unsplash.com/photos/MFzAzxTkYLU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE0JTIwd2FsbHBhcGVyfGVufDB8fHx8MTcyMDUxMTg3OHww&force=true&w=1920")`,
            }}
          >
            <div className="flex flex-1 flex-col px-6">
              <StatusBar
                onDecline={() => setBadge((prev) => prev + 1)}
                onAccept={() => setPhoneOpen(true)}
              />

              <div className="flex flex-1 flex-col justify-between py-10">
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div key={"icon-" + index} className="flex justify-between">
                      <IOSIcon />
                      <IOSIcon />
                      <IOSIcon />
                      <IOSIcon />
                    </div>
                  ))}
              </div>
            </div>

            <div className="mx-auto mb-5 flex w-fit items-center justify-center gap-1 rounded-full bg-white/50 px-2 py-1 backdrop-blur-2xl">
              <SearchIcon size={11} className="rotate-6" />{" "}
              <p className="text-[0.6875rem]">Search</p>
            </div>

            <div className="mt-auto px-2">
              <div className="flex justify-between rounded-[36px] bg-white/50 px-4 py-4 backdrop-blur-2xl">
                {!phoneOpen ? (
                  <IOSIcon
                    layoutId="phone"
                    hiddenName
                    badge={badge}
                    iconImage="https://cdn.jim-nielsen.com/ios/512/phone-2023-10-05.png?rf=1024"
                    onClick={() => setPhoneOpen(true)}
                  />
                ) : (
                  <div className="h-14 w-14"></div>
                )}
                <IOSIcon hiddenName />
                <IOSIcon hiddenName />
                <IOSIcon hiddenName />
              </div>
            </div>

            {phoneOpen && <PhoneApp onClose={() => setPhoneOpen(false)} />}
          </div>
        </div>
      </AnimatePresence>
    </SystemContext.Provider>
  );
};

export default Demo08;
