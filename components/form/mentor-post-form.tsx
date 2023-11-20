"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { mentorFormSchema } from "@/lib/validation/FormDataSchema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

import UploadFile from "@/lib/UploadThingButton";
import { createPost } from "@/server/mentor/post-actions";

const MentorPostForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof mentorFormSchema>>({
    resolver: zodResolver(mentorFormSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      cat: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof mentorFormSchema>) {
    // console.log(values);
    const res = await createPost(values);
    if (res?.success) {
      // alert("Posted successful");
      form.reset();
      toast.success("Post successful", {
        style: {
          background: "#770d72",
          padding: "16px",
          color: "#fff",
        },
        iconTheme: {
          primary: "#021E20",
          secondary: "#c8f6f9",
        },
      });

      router.push("/mentor-dashboard/post");
    }

    if (res?.error) {
      console.log({
        error: res.error,
      });
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
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
                  <Textarea rows={10} {...field} placeholder="description.." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <UploadFile
                    endpoint="imageUploader"
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cat"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Choose your category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="ai">Artificial</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="others">Create a category</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size="lg" type="submit">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MentorPostForm;
