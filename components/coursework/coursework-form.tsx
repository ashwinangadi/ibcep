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

type FormValues = z.infer<typeof formSchema>;

const CourseworkForm = () => {
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
    [form]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 25 * 1024 * 1024,
    multiple: false,
  });

  const onSubmit = (data: FormValues) => {
    const storedData = localStorage.getItem("courseworkData");
    const parsedData = storedData ? JSON.parse(storedData) : null;
    const dataToStore = {
      id: crypto.randomUUID(),
      ...data,
      file: data.file
        ? {
            name: data.file.name,
            size: data.file.size,
            preview: URL.createObjectURL(data.file),
          }
        : null,
    };
    const dataToUpdate = parsedData
      ? [...parsedData, dataToStore]
      : [dataToStore];
    localStorage.setItem("courseworkData", JSON.stringify(dataToUpdate));
    toast.success("Coursework data stored in local storage");
  };

  return (
    <>
      <div className="bg-[#FCFBFDB8] w-full rounded-3xl mt-5 p-4">
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
                        ? " border border-red-500"
                        : null
                    }`}
                  >
                    <div
                      {...getRootProps()}
                      className="bg-white flex flex-col gap-3 items-center justify-center rounded-xl  w-full border h-52 3xl:h-60 border-dashed "
                    >
                      {field.value ? (
                        <p className="text-sm text-wrap text-center text-[#7A8196]">
                          {field.value.name.length > 50
                            ? field.value.name.substring(0, 50) + "..."
                            : field.value.name}
                        </p>
                      ) : (
                        <FileUp className="w-10 h-10 text-[#98A1BB]" />
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
                        <p className="text-xs text-center">
                          *Limit 25MB per file.
                        </p>
                      </span>
                      <span className=" shadow-md border border-primary rounded-full text-primary bg-transparent  font-bold hover:bg-primary/10 hover:text-accent-foreground p-2 px-4 cursor-pointer">
                        Upload your file
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage className="absolute -bottom-4" />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 mt-6">
              <p className="text-sm text-[#7A8196] font-semibold">
                Select your course & subjects*
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
                              ? " border border-red-500"
                              : null
                          }`}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Coursework Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courseworkTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
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
                              ? " border border-red-500"
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
            <div className="flex flex-col gap-2 mt-5">
              <p className="text-sm text-[#7A8196] font-semibold">
                Enter your essay title*
              </p>
              <FormField
                control={form.control}
                name="essayTitle"
                render={({ field }) => (
                  <FormItem className="relative w-2/3">
                    <FormControl
                      className={`${
                        form.formState.errors.essayTitle
                          ? " border border-red-500"
                          : null
                      }`}
                    >
                      <Input placeholder="How nation works..." {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-4 left-2" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className={`mt-6 rounded-full px-1 pe-8 text-base font-bold text-white ${
                !form.formState.isValid
                  ? "bg-[#ADB8C9] hover:bg-[#ADB8C9]"
                  : "bg-primary "
              }`}
            >
              <span className="flex items-center bg-white rounded-full p-1 mr-3">
                <Sparkles
                  className={`w-4 h-4 ${
                    !form.formState.isValid
                      ? "text-[#ADB8C9] fill-[#ADB8C9]"
                      : "text-primary fill-primary"
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
