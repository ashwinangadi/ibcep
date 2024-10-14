import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const CriteriaChart = ({
  score,
  maxScore,
}: {
  score: number;
  maxScore: number;
}) => {
  const percentage = (score / maxScore) * 100;

  const getColor = (percentage: number) => {
    if (percentage > 70) return "#3CC28A";
    if (percentage > 30) return "#F9C94E";
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
    <ChartContainer
      config={chartConfig}
      className="aspect-square h-[60px] w-[60px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={startAngle}
        endAngle={-endAngle}
        innerRadius={25}
        outerRadius={45}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-white"
          polarRadius={[30, 20]}
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
  );
};

export default CriteriaChart;
