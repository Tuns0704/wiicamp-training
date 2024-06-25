import { create } from 'zustand';

interface DeviceState {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  handleResize: () => void;
}

const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: window.innerWidth < 640,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  handleResize: () => {
    set({ isMobile: window.innerWidth < 640 });
  },
}));

export default useDeviceStore;
