import { create } from 'zustand';
import { IUser } from '@/types/user-auth';

interface AuthStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user: IUser | null) => set({ user }),
}));

export const authStoreActions = {
  setUser: useAuthStore.getState().setUser,
};
