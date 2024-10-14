"use client";
import { MyCourseworkStore } from "@/store/my-coursework-store";
import React, { useState } from "react";
import CourseworkCard from "./coursework-card";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function MyCoursework() {
  const [viewAll, setViewAll] = useState(false);
  const { myCourseworkData, removeMyCoursework } = MyCourseworkStore();

  return (
    <div>
      {myCourseworkData.length === 0 && (
        <p className="text-center text-base text-[#98A1BB]">
          No coursework added yet.
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {myCourseworkData
          .slice(0, viewAll ? myCourseworkData.length : 2)
          .map((item, index) => {
            return (
              <div
                key={item.id}
                className={`transform transition-all duration-300 ${
                  index >= 2 && !viewAll
                    ? "h-0 translate-y-4 overflow-hidden opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <CourseworkCard
                  id={item.id}
                  title={item.essayTitle}
                  subject={item.subject}
                  type={item.courseworkType}
                  image={item.file.data}
                  readTime={15}
                  wordCount={2576}
                  rating={4.5}
                  isExample={false}
                  language="English"
                  description="This is a sample description for the coursework. It provides a brief overview of the essay content and main points discussed."
                />
                <X
                  className="absolute right-2 top-2 h-4 w-4 cursor-pointer rounded-full border border-red-200 text-red-300 hover:text-red-500 lg:h-5 lg:w-5"
                  onClick={() => removeMyCoursework(item.id)}
                />
              </div>
            );
          })}
      </div>

      {myCourseworkData.length > 2 && (
        <Button
          variant="ghost"
          className="mx-auto mt-4 w-full text-base font-bold text-[#98A1BB] hover:bg-transparent"
          onClick={() => setViewAll((prev) => !prev)}
        >
          {viewAll ? "View Less" : "View All"}
        </Button>
      )}
    </div>
  );
}
