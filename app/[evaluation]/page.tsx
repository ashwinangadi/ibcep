"use client";
import PDFViewer from "@/components/evaluation/pdf-viewer";
import { MyCourseworkStore } from "@/store/my-coursework-store";
import React from "react";

const EvaluationPage = ({ params }: { params: { evaluation: string } }) => {
  const evaluationSlug = params.evaluation;
  const { myCourseworkData } = MyCourseworkStore();

  const evaluationData = myCourseworkData.find(
    (item) => item.id === evaluationSlug,
  );

  return (
    <section className="container mx-auto mb-20 w-full px-3 md:max-w-[600px] lg:max-w-[807px] xl:max-w-[900px] 3xl:max-w-[1100px]">
      <div className="mt-[92px] grid grid-cols-12  md:mt-[40px] 2xl:mt-[120px] 3xl:mt-[180px]">
        <div className="col-span-8">
          <PDFViewer
            PDFfile={evaluationData?.file.data || ""}
            pdfName={evaluationData?.file.name || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default EvaluationPage;
