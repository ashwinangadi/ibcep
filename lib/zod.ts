import { z } from "zod";

export const formSchema = z.object({
  file: z
    .instanceof(File, { message: "You must upload a file." })
    .refine((file) => file.size <= 25 * 1024 * 1024, {
      message: "File size must be less than 25MB.",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed.",
    }),
  courseworkType: z.string().min(1, { message: "Select a coursework type." }),
  subject: z.string().min(1, { message: "Select a subject." }),
  essayTitle: z.string().min(1, { message: "Essay title is required." }),
});
