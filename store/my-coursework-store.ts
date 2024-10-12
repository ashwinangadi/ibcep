import { create } from "zustand";
import { persist } from "zustand/middleware";

interface File {
  name: string;
  size: number;
  preview: string;
}

interface Coursework {
  id: string;
  file: File;
  courseworkType: string;
  subject: string;
  essayTitle: string;
}

interface MyCourseworkState {
  myCourseworkData: Coursework[];
  addMyCoursework: (coursework: Coursework) => void;
  removeMyCoursework: (id: string) => void;
}

export const MyCourseworkStore = create<MyCourseworkState>()(
  persist(
    (set) => ({
      myCourseworkData: [],
      addMyCoursework: (coursework: Coursework) => {
        set((state) => ({
          myCourseworkData: [...state.myCourseworkData, coursework],
        }));
      },
      removeMyCoursework: (id: string) => {
        set((state) => ({
          myCourseworkData: state.myCourseworkData.filter((c) => c.id !== id),
        }));
      },
    }),
    {
      name: "courseworkData",
    },
  ),
);
