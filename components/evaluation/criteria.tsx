"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, AlertCircle, MoveRight } from "lucide-react";
import { criteriaData } from "@/lib/constants";
import { Separator } from "@radix-ui/react-separator";
import CriteriaChart from "./criteria-chart";
import { Button } from "@/components/ui/button";

export default function Criteria() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  return (
    <div className="mx-auto w-full">
      <Accordion
        className="space-y-2"
        type="multiple"
        value={expandedItems}
        onValueChange={setExpandedItems}
      >
        {criteriaData.map((criteria) => (
          <AccordionItem
            key={criteria.id}
            value={criteria.id}
            className="border-none"
          >
            <Card className="">
              <AccordionTrigger
                onClick={() => toggleItem(criteria.id)}
                className="w-full hover:no-underline"
              >
                <CardHeader className="flex w-full flex-row items-center justify-start gap-5 pb-2 pt-0">
                  <CriteriaChart score={criteria.score} maxScore={10} />
                  <CardTitle className="flex flex-col text-left text-sm font-medium">
                    <span className="text-xs font-bold text-[#98A1BB]">
                      {criteria.id}
                    </span>
                    <span className="text-xl font-bold text-[#3D404B]">
                      {criteria.title}
                    </span>
                  </CardTitle>
                </CardHeader>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent>
                  <Separator
                    className="my-4 h-0.5 w-full bg-[#D6DFE4]"
                    orientation="horizontal"
                  />

                  <CardDescription className="mb-4 text-sm font-medium text-[#5B6170]">
                    {criteria.description}
                  </CardDescription>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-xl font-extrabold text-black">
                        Strengths
                      </h4>
                      <ul className="space-y-1 rounded-2xl border border-green-500 bg-green-50/20 p-4">
                        {criteria.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 fill-green-500 text-white" />
                            <span className="text-sm font-bold text-[#3D404B]">
                              {strength}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-extrabold text-black">
                        Scope of Improvement
                      </h4>
                      <ul className="space-y-1 rounded-2xl border border-yellow-500 bg-yellow-50/20 p-4">
                        {criteria.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 fill-yellow-500 text-white" />
                            <span className="text-sm font-bold text-[#3D404B]">
                              {improvement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        variant="outline"
        className="mt-3.5 hidden w-2/3 border-none bg-white text-base font-extrabold shadow-md lg:flex"
      >
        Check detail Evaluation
        <MoveRight className="ml-5 h-4 w-4" />
      </Button>
    </div>
  );
}
