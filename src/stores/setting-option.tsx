import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import StoreName from './store-name';

interface SettingOptionState {
  settingOption: string;
  setSettingOption: (value: string) => void;
}

export const useSettingOptionStore = create<SettingOptionState>((set) => ({
  settingOption: 'Products Management',
  setSettingOption: (value) => set({ settingOption: value }),
}));

export const settingOptionStoreActions = {
  setSettingOption: (value: string) => {
    useSettingOptionStore.getState().setSettingOption(value);
  },
};

mountStoreDevtool(StoreName.SettingOption, useSettingOptionStore);
