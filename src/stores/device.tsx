import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from 'zustand';
import { StoreName } from "./store-name";

interface DeviceState {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  handleResize: () => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: window.innerWidth < 640,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  handleResize: () => {
    set({ isMobile: window.innerWidth < 640 });
  },
}));

export const deviceStoreActions = {
  setIsMobile: (isMobile: boolean) => useDeviceStore.getState().setIsMobile(isMobile),
  handleResize: () => useDeviceStore.getState().handleResize(),
}

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreName.DeviceStore, useDeviceStore)
}
