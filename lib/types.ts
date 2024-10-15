export interface CourseworkCardProps {
  id: string;
  title: string;
  subject: string;
  readTime: number;
  wordCount: number;
  rating: number;
  language: string;
  type: string;
  description: string;
  image: string;
  isExample?: boolean;
}

export type SubjectCriteria = {
  id: string;
  title: string;
  score: number;
  description: string;
  strengths: string[];
  improvements: string[];
}[];

export type CriteriaData = {
  [key: string]: SubjectCriteria;
};