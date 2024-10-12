import React from "react";
import Image from "next/image";
import s from "./coursework.module.css";
import { CourseworkCardProps } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const CourseworkCard: React.FC<CourseworkCardProps> = ({
  title,
  subject,
  readTime,
  wordCount,
  rating,
  language,
  type,
  description,
  // image,
}) => {
  return (
    <Card
      className={`flex gap-2 overflow-hidden p-2 hover:shadow-lg ${type === "IA" ? "border-[#E9D8F4] bg-gradient-to-r from-white/20 to-[#E9D8F4]/70" : type === "IO" ? "border-[#D8E3F4] bg-gradient-to-r from-white/20 to-[#D8E3F4]/70" : "border-[#F4EAD8] bg-gradient-to-r from-white/20 to-[#F4EAD8]/70"} `}
    >
      <CardContent className="relative hidden w-1/3 min-w-[120px] rounded-[12px] border bg-white p-1 lg:block">
        <Image
          src={"/courseThumb.png"}
          alt={title.substring(0, 10)}
          layout="fill"
          objectFit="cover"
          className="rounded-[12px] p-1"
        />
      </CardContent>
      <CardContent className="flex flex-col p-1 lg:w-2/3">
        <CardTitle className="mb-1 line-clamp-2 text-lg font-extrabold">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-[0.688rem] font-semibold text-[#7A8196]">
          {description}
        </CardDescription>
        <div className="mt-2 flex flex-wrap gap-1">
          <span className={`${s.info}`}>
            <ListLogo title={"subject"} />
            {subject}
          </span>
          <span className={`${s.info}`}>
            <ListLogo title={"time"} />
            {readTime} min read
          </span>
          <span className={`${s.info}`}>
            <ListLogo title={"words"} />
            {wordCount} words
          </span>
          <span className={`${s.info}`}>
            <ListLogo title={"rating"} />
            {rating}/7
          </span>
          <span className={`${s.info}`}>
            <ListLogo title={"language"} />
            {language}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseworkCard;

export const ListLogo = ({ title }: { title: string }) => {
  return (
    <Image
      src={`/${title}.png`}
      alt={title}
      width={16}
      height={16}
      className="rounded-full"
    />
  );
};
