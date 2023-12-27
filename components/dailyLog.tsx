import { useState } from "react";
import { Button } from "./ui/button";
import { PiBook, PiXBold } from "react-icons/pi";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const dailyLogFormSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  tags: z.array(z.string().nonempty({ message: "Tag is required" })),
});

type DailyLogFormValues = z.infer<typeof dailyLogFormSchema>;

const defaultValues: Partial<DailyLogFormValues> = {
  title: "",
  description: "",
  tags: [],
};

export const DailyLogForm = () => {
  const form = useForm<DailyLogFormValues>({
    resolver: zodResolver(dailyLogFormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "tags",
    control: form.control,
  });

  function onSubmit(data: DailyLogFormValues) {
    toast({
      title: "Daily log created",
      description: "Your daily log has been created",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-[300px] px-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} className="" />
              </FormControl>
              <FormDescription>Give your daily log a title</FormDescription>
              <FormMessage>{form.formState.errors.title?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>Describe your daily log</FormDescription>
              <FormMessage>
                {form.formState.errors.description?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          onClick={() => {
            append({ tag: "" });
          }}
        >
          Submit log
        </Button>
      </form>
    </Form>
  );
};

const DailyLog = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-6">
        <div>
          <PiBook className="w-8 h-8 font-bold text-black/80" />
        </div>
        <div>
          <h4 className="text-lime-500 font-bold text-xl">Daily log</h4>
          <div className="inline-flex items-center gap-3">
            <p>Log your daily progress</p>
            <Button
              className="bg-lime-500 text-white"
              onClick={handleShowModal}
            >
              Open daily log
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-4 relative w-[300px]">
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center">
                <h4 className="text-lime-500 font-bold text-xl">Daily log</h4>
              </div>
              <div>
                <div className="inline-flex flex-col items-center gap-3">
                  <DailyLogForm />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 absolute top-0 right-0">
              <PiXBold
                className="text-lime-500 cursor-pointer h-5 w-5"
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyLog;
