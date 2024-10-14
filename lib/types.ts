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
