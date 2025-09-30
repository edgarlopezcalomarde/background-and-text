import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppStore {
  text: string;
  isLock: boolean;
  isTextModalOpen: boolean;
  isBackgroundModalOpen: boolean;
  textColor: string;
  backgroundColor: string;
  setText: (value: string) => void;
  setIsLock: (value: boolean) => void;
  setIsTextModalOpen: (value: boolean) => void;
  setIsBackgroundModalOpen: (value: boolean) => void;
  setTextColor: (value: string) => void;
  setBackgroundColor: (value: string) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      text: "Hola a todos",
      backgroundColor: "white",
      textColor: "black",
      isBackgroundModalOpen: false,
      isTextModalOpen: false,
      isLock: false,
      setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
      setTextColor: (textColor) => set({ textColor }),
      setIsLock: (isLock) => set({ isLock }),
      setIsTextModalOpen: (isTextModalOpen) => set({ isTextModalOpen }),
      setIsBackgroundModalOpen: (isBackgroundModalOpen) =>
        set({ isBackgroundModalOpen }),
      setText: (text) => set({ text }),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
