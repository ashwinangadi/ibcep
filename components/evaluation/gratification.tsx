import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

const Gratification = ({
  percentage,
  remark,
  color,
}: {
  percentage: number;
  remark: string;
  color: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const startTimer = () => {
      return setTimeout(() => {
        if (!isHovering) {
          setIsVisible(false);
        }
      }, 30000);
    };

    const timer = startTimer();

    return () => clearTimeout(timer);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      aria-live="polite"
      aria-atomic="true"
    >
      <Card
        className="relative mx-4 w-full max-w-sm transform rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardHeader className="p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleClose}
            aria-label="Close popup"
          >
            <X className="h-4 w-4" />
          </Button>

          <h2 className="text-center text-2xl font-bold">
            <span style={{ color: color }}>{remark}</span> Performance
          </h2>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-sm font-medium text-gray-600">
            {percentage > 70 ? (
              <p>Congratulations! You&apos;re doing great!</p>
            ) : percentage >= 30 ? (
              <p>Good job! Keep improving to reach excellence!</p>
            ) : (
              <p>You&apos;ve got room for improvement. Keep working hard!</p>
            )}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gratification;
