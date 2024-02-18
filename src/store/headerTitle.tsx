import { create } from "zustand";

type HeaderTitleState = {
  title: string;
  setTitle: (title: string) => void;
};

export const useHeaderTitle = create<HeaderTitleState>((set) => ({
  title: "Agenda",
  setTitle: (title) => set({ title }),
}));
