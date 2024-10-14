import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const OverallScore = () => {
  const score = 17;
  const maxScore = 20;
  const percentage = (score / maxScore) * 100;

  const getColor = (percentage: number) => {
    if (percentage > 70) return "#3CC28A";
    if (percentage >= 30) return "#F9C94E";
    return "#EB751F";
  };

  const chartData = [
    { score: score, maxScore: maxScore, fill: getColor(percentage) },
  ];

  const startAngle = 90;
  const endAngle = -90 + (score / maxScore) * 360;

  const chartConfig = {
    score: {
      label: "Score",
      color: getColor(percentage),
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex w-full items-center justify-between py-3 mb-3.5 mt-3.5 lg:mt-0">
      <CardHeader className="my-auto px-3 md:px-6 items-start py-0">
        <p className="text-sm font-semibold text-[#3D404B]">Overall Score</p>
        <CardTitle className="font-extrabold text-[#3D404B] lg:text-lg xl:text-xl 2xl:text-2xl">
          Remark : <span className="text-[#3CC28A]">Excellent</span>
        </CardTitle>
        <CardDescription>Evaluated on 12 jul 2024</CardDescription>
      </CardHeader>
      <CardContent className="pb-0 px-3 md:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-square h-[80px] w-[80px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={startAngle}
            endAngle={-endAngle}
            innerRadius={35}
            outerRadius={60}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-white"
              polarRadius={[40, 30]}
            />
            <RadialBar dataKey="score" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-sm font-bold"
                        >
                          {score}/{maxScore}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default OverallScore;
