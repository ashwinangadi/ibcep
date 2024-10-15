import { SubjectCriteria } from "@/lib/types";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface File {
  name: string;
  size: number;
  type: string;
  data: string;
}
interface Coursework {
  id: string;
  file: File;
  courseworkType: string;
  subject: string;
  essayTitle: string;
  preview: string;
  evaluationData: {
    date: string;
    data: SubjectCriteria;
  };
}
interface MyCourseworkState {
  myCourseworkData: Coursework[];
  addMyCoursework: (coursework: Coursework) => void;
  removeMyCoursework: (id: string) => void;
}

const MAX_STORAGE_SIZE = 5 * 1024 * 1024;

export const MyCourseworkStore = create<MyCourseworkState>()(
  persist(
    (set) => ({
      myCourseworkData: [],
      addMyCoursework: (coursework: Coursework) => {
        set((state) => {
          const newCourseworkData = [...state.myCourseworkData, coursework];
          const storageSize = JSON.stringify(newCourseworkData).length;

          if (storageSize > MAX_STORAGE_SIZE) {
            toast.error(
              `Local storage limited to 5MB. Please add file less than 5MB or remove some coursework before adding more.`,
            );
            return state;
          }
          toast.success("Evaluated successfully and stored in local storage.");
          return { myCourseworkData: newCourseworkData };
        });
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
