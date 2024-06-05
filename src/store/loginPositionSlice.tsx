import { create } from 'zustand';

type LoginPosition = {
  position: string;
  setPosition: (position: string) => void;
};

export const useLoginPosition = create<LoginPosition>((set) => ({
  position: 'left-0',
  setPosition: (position) => set({ position }),
}));
