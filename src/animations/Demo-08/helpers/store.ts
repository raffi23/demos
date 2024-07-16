import { create } from "zustand";

type ActiveApp = {
  id: string;
  componentPath?: string;
};

type NotificationCenter = {
  open: boolean;
  locked: boolean;
};

interface iOSStoreApp {
  activeApp?: ActiveApp;
  setActiveApp: (data?: ActiveApp) => void;
  notificationCenter: NotificationCenter;
  setNotificationCenter: (value: Partial<NotificationCenter>) => void;
}

export const useiOSStore = create<iOSStoreApp>((set, get) => ({
  setActiveApp: (activeApp) => set({ activeApp }),
  notificationCenter: { locked: true, open: true },
  setNotificationCenter: (notificationCenter) =>
    set({
      notificationCenter: {
        ...get().notificationCenter,
        ...notificationCenter,
      },
    }),
}));
