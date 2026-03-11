import { create } from "zustand";

type LayerStore = {
  johanSverdrup: boolean;
  brage: boolean;
  vessels: boolean;
  flights: boolean;
  weather: boolean;
  toggle: (layer: keyof Omit<LayerStore, "toggle">) => void;
};

export const useLayerStore = create<LayerStore>()((set) => ({
  johanSverdrup: true,
  brage: true,
  vessels: true,
  flights: true,
  weather: true,
  toggle: (layer) => set((state) => ({ [layer]: !state[layer] })),
}));
