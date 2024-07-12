import { create } from "zustand";

type ActiveApp = {
  id: string;
  componentPath?: string;
};

interface iOSStoreApp {
  activeApp?: ActiveApp;
  setActiveApp: (data?: ActiveApp) => void;
}

export const useiOSStore = create<iOSStoreApp>((set) => ({
  setActiveApp: (activeApp) => set({ activeApp }),
}));
