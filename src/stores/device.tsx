import { create } from 'zustand';

interface DeviceState {
  smallWidth: boolean;
  smallHeight: boolean;
  setIsSmallWidth: (smallWidth: boolean) => void;
  setIsSmallHeight: (smallHeight: boolean) => void;
  handleResize: () => void;
}

const useDeviceStore = create<DeviceState>((set) => ({
  smallWidth: window.innerWidth < 640,
  smallHeight: window.innerHeight < 780,
  setIsSmallWidth: (smallWidth: boolean) => set({ smallWidth }),
  setIsSmallHeight: (smallHeight: boolean) => set({ smallHeight }),
  handleResize: () => {
    set({ smallWidth: window.innerWidth < 640 });
    set({ smallHeight: window.innerHeight < 780 });
  },
}));

export default useDeviceStore;
