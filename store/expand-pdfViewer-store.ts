import { create } from "zustand";

interface ExpandPdfViewerState {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export const useExpandPdfViewerStore = create<ExpandPdfViewerState>((set) => ({
  isExpanded: false,
  setIsExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),
}));
