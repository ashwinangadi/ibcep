import React, { useEffect } from "react";
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
import { SubjectCriteria } from "@/lib/types";
import confetti from "canvas-confetti";
import Gratification from "./gratification";

const OverallScore = ({
  evalData,
}: {
  evalData: {
    date: string;
    data: SubjectCriteria;
  };
}) => {
  const calculateAverageScore = (
    criteria: Array<{ score: number }>,
  ): number => {
    if (criteria?.length === 0) return 0;
    const totalScore = criteria?.reduce(
      (sum, criterion) => sum + criterion.score,
      0,
    );
    return Number((totalScore / criteria?.length).toFixed(1));
  };

  // Chart data
  const score = calculateAverageScore(evalData?.data);
  const maxScore = 10;
  const percentage = (maxScore / score) * 100;

  const getColor = (percentage: number) => {
    if (percentage > 70) return "#3CC28A";
    if (percentage >= 30) return "#F9C94E";
    return "#EB751F";
  };
  const getRemark = (percentage: number) => {
    if (percentage > 70) return "Excellent";
    if (percentage >= 30) return "Good";
    return "Poor";
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

  // Date formatting
  const date = new Date("2024-10-15T07:38:23.646Z");
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  const handleExcellent = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
        disableForReducedMotion: true,
      });

      requestAnimationFrame(frame);
    };
    frame();
  };

  const handleGood = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 50);
    setTimeout(shoot, 500);
    setTimeout(shoot, 100);
  };

  useEffect(() => {
    if (percentage > 70) {
      handleExcellent();
    } else if (percentage >= 30) {
      handleGood();
    }
  }, []);

  return (
    <>
      <Gratification
        percentage={percentage}
        remark={getRemark(percentage)}
        color={getColor(percentage)}
      />
      <Card className="mb-3.5 mt-3.5 flex w-full items-center justify-between py-3 lg:mt-0">
        <CardHeader className="my-auto items-start px-3 py-0 md:px-6">
          <p className="text-sm font-semibold text-[#3D404B]">Overall Score</p>
          <CardTitle className="font-extrabold text-[#3D404B] lg:text-lg xl:text-xl 2xl:text-2xl">
            Remark :{" "}
            <span style={{ color: getColor(percentage) }}>
              {getRemark(percentage)}
            </span>
          </CardTitle>
          <CardDescription>Evaluated on {formattedDate}</CardDescription>
        </CardHeader>
        <CardContent className="px-3 pb-0 md:px-6">
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
    </>
  );
};

export default OverallScore;
