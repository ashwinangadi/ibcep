"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FileRejection, useDropzone } from "react-dropzone";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUp, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { courseworkTypes, subjects } from "@/lib/constants";
import { formSchema } from "@/lib/zod";
import { MyCourseworkStore } from "@/store/my-coursework-store";

type FormValues = z.infer<typeof formSchema>;

const CourseworkForm = () => {
  const { addMyCoursework } = MyCourseworkStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
      courseworkType: "",
      subject: "",
      essayTitle: "",
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles[0]) {
        form.setValue("file", acceptedFiles[0], { shouldValidate: true });
      } else if (rejectedFiles.length > 0) {
        const error = rejectedFiles[0].errors[0];
        if (error.code === "file-too-large") {
          form.setError("file", {
            type: "manual",
            message: "File size must be less than 25MB.",
          });
        } else {
          form.setError("file", {
            type: "manual",
            message: error.message,
          });
        }
      }
    },
    [form],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 25 * 1024 * 1024,
    multiple: false,
  });

  const onSubmit = async (data: FormValues) => {
    const dataToStore = {
      id: crypto.randomUUID(),
      ...data,
      file: data.file && {
        name: data.file.name,
        size: data.file.size,
        preview: URL.createObjectURL(data.file),
      },
    };
    addMyCoursework(dataToStore);
    form.reset();
    toast.success("Coursework successfully added.");
  };

  return (
    <>
      <div className="mt-5 w-full rounded-3xl bg-[#FCFBFDB8] p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="relative">
                  {/* <FormLabel>Upload your file</FormLabel> */}
                  <FormControl
                    className={`${
                      form.formState.errors.file
                        ? "border border-red-500"
                        : null
                    }`}
                  >
                    <div
                      {...getRootProps()}
                      className="focus-visible:outline-primary flex h-52 w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-white focus-visible:outline-dashed 3xl:h-60"
                    >
                      {field.value ? (
                        <p className="line-clamp-1 w-full text-wrap p-2 text-center text-sm text-[#7A8196]">
                          {field.value.name}
                        </p>
                      ) : (
                        <FileUp className="h-10 w-10 text-[#98A1BB]" />
                      )}
                      <span className="flex flex-col text-[#7A8196]">
                        <Input {...getInputProps()} />
                        {isDragActive ? (
                          <p className="font-bold">
                            Drop the PDF file here ...
                          </p>
                        ) : (
                          <p className="font-bold">Drag and drop a PDF</p>
                        )}
                        <p className="text-center text-xs">
                          <span className="text-red-500">* </span>Limit 25MB per
                          file.
                        </p>
                      </span>
                      <span className="border-primary text-primary hover:bg-primary/10 hover:text-accent-foreground cursor-pointer rounded-full border bg-transparent p-2 px-4 font-bold shadow-md">
                        Upload your file
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage className="absolute -bottom-4" />
                </FormItem>
              )}
            />
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm font-semibold text-[#7A8196]">
                Select your course & subjects
                <span className="text-red-500"> *</span>
              </p>
              <span className="flex gap-3">
                <FormField
                  control={form.control}
                  name="courseworkType"
                  render={({ field }) => (
                    <FormItem className="relative w-40">
                      {/* <FormLabel>Coursework Type</FormLabel> */}
                      <Select
                        key={field.value || "default"}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl
                          className={`${
                            form.formState.errors.courseworkType
                              ? "border border-red-500"
                              : null
                          }`}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Coursework Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courseworkTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="absolute -bottom-4" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="relative w-28">
                      {/* <FormLabel>Subject</FormLabel> */}
                      <Select
                        key={field.value || "default"}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl
                          className={`${
                            form.formState.errors.subject
                              ? "border border-red-500"
                              : null
                          }`}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="absolute -bottom-4" />
                    </FormItem>
                  )}
                />
              </span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <p className="text-sm font-semibold text-[#7A8196]">
                Enter your essay title <span className="text-red-500"> *</span>
              </p>
              <FormField
                control={form.control}
                name="essayTitle"
                render={({ field }) => (
                  <FormItem className="relative w-2/3">
                    <FormControl
                      className={`${
                        form.formState.errors.essayTitle
                          ? "border border-red-500"
                          : null
                      }`}
                    >
                      <Input placeholder="How nation works..." {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-4" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className={`mt-6 rounded-full px-1 pe-8 text-base font-bold text-white ${
                !form.formState.isValid
                  ? "bg-[#ADB8C9] hover:bg-[#ADB8C9]"
                  : "bg-primary"
              }`}
              // onClick={() => form.formState.isSubmitSuccessful && form.reset()}
            >
              <span className="mr-3 flex items-center rounded-full bg-white p-1">
                <Sparkles
                  className={`h-4 w-4 ${
                    !form.formState.isValid
                      ? "fill-[#ADB8C9] text-[#ADB8C9]"
                      : "fill-primary text-primary"
                  }`}
                />
              </span>
              Evaluate your Score
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default CourseworkForm;
