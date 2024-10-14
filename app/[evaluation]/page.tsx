"use client";
import Criteria from "@/components/evaluation/criteria";
import OverallScore from "@/components/evaluation/overall-score";
import PDFViewer from "@/components/evaluation/pdf-viewer";
import { Button } from "@/components/ui/button";
import { MyCourseworkStore } from "@/store/my-coursework-store";
import { MoveRight } from "lucide-react";
import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useExpandPdfViewerStore } from "@/store/expand-pdfViewer-store";

const EvaluationPage = ({ params }: { params: { evaluation: string } }) => {
  const evaluationSlug = params.evaluation;
  const [viewMobilePDF, setViewMobilePDF] = useState(false);
  const { myCourseworkData } = MyCourseworkStore();
  const { isExpanded, setIsExpanded } = useExpandPdfViewerStore();

  const evaluationData = myCourseworkData.find(
    (item) => item.id === evaluationSlug,
  );

  return (
    // <section className="container mx-auto mb-20 w-full px-3 md:max-w-[600px] lg:max-w-[807px] xl:max-w-[900px] 3xl:max-w-[1100px]">
    <section className="container mx-auto mb-20 w-full px-1 lg:px-3">
      <div className={`mt-[92px] gap-6 lg:hidden`}>
        <div className="md:mx-[60px] md:mt-[40px]">
          <Accordion
            type="single"
            collapsible
            className={`mb-5 hidden md:block`}
            value={isExpanded ? "chart" : ""}
          >
            <AccordionItem value={"chart"} className="border-none">
              <Card className="">
                <AccordionTrigger
                  className="w-full pb-2 hover:no-underline"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <CardHeader className="flex w-full flex-row items-center justify-start gap-5 pb-2 pt-0">
                    <CardTitle className="flex w-full items-center justify-between text-sm font-medium">
                      <p className="rounded-full bg-white py-1 text-sm font-bold leading-[normal] text-[#3D404B]">
                        {evaluationData?.file.name.substring(0, 50)}
                      </p>
                      <span
                        className={`items-center text-base font-semibold text-[#3D404B] text-primary ${
                          isExpanded ? "hidden" : "flex"
                        }`}
                      >
                        <p>Expand & view your file</p>
                      </span>
                    </CardTitle>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent>
                    <PDFViewer
                      PDFfile={evaluationData?.file.data || ""}
                      pdfName={evaluationData?.file.name || ""}
                    />
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>

          <OverallScore />

          <span className="mt-5 hidden md:block lg:hidden">
            <Criteria />
          </span>
          <span className="mt-5 flex flex-col gap-5 md:hidden">
            <Button
              variant="outline"
              className="w-2/3 border-none bg-white text-base font-extrabold shadow-md"
              onClick={() => setViewMobilePDF((view) => !view)}
            >
              {viewMobilePDF
                ? "Check detailed Evaluation"
                : "Expand & view your file"}
              <MoveRight className="ml-5 h-4 w-4" />
            </Button>
            {viewMobilePDF ? (
              <PDFViewer
                PDFfile={evaluationData?.file.data || ""}
                pdfName={evaluationData?.file.name || ""}
              />
            ) : (
              <Criteria />
            )}
          </span>
        </div>
      </div>

      <div className="mt-[92px] hidden gap-6 md:mx-[60px] md:mt-[40px] lg:grid lg:grid-cols-12 2xl:mt-[120px] 3xl:mt-[180px]">
        <div
          className={` ${
            isExpanded
              ? "lg:col-span-6 xl:col-span-6 2xl:col-span-7"
              : "lg:col-span-7 xl:col-span-7 2xl:col-span-8"
          }`}
        >
          <PDFViewer
            PDFfile={evaluationData?.file.data || ""}
            pdfName={evaluationData?.file.name || ""}
          />
        </div>
        <div
          className={`space-y-2  ${
            isExpanded
              ? "lg:col-span-6 xl:col-span-6 2xl:col-span-5"
              : "lg:col-span-5 xl:col-span-5 2xl:col-span-4"
          } `}
        >
          <span className="hidden lg:block">
            <OverallScore />
          </span>
          <Criteria />
        </div>
      </div>
    </section>
  );
};

export default EvaluationPage;
