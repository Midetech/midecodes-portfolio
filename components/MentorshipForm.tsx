"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Icons } from "./Icons";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(11, {
    message: "Phone must be at least 11 characters.",
  }),
  interest: z.string().min(10, {
    message: "interest must be at least 10 characters.",
  }),
  role: z.string().min(5, {
    message: "Please select role that applies",
  }),
});

const MentorshipForm = () => {
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      role: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      });
      const data = await res.json();

      if (data.status) {
        setLoading(false);
        setRefetch(true);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast({
          title: "✅ Registration Successful",
          description: data.message,
        });
      } else {
        setLoading(false);
        toast({
          title: "🚫 Registration Already Completed",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error: unknown) {
      setLoading(false);
      toast({
        title: "🚫 Registration Already Completed",
        description:
          JSON.stringify(error) || "Something went wrong, we are fixing it!",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full p-2">
                  <FormLabel className="text-black dark:text-white">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border dark:border-white h-[40px] rounded focus:border-blue-500 text-black dark:text-white "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full p-2">
                  <FormLabel className="text-black dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border dark:border-white h-[40px] rounded focus:border-blue-500 text-black dark:text-white "
                      type="email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full p-2">
                  <FormLabel className="text-black dark:text-white">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border dark:border-white h-[40px] rounded focus:border-blue-500 text-black dark:text-white "
                      type="tel"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Current Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select an option"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {[
                          "Frontend Developer",
                          "Backend Developer",
                          "Product Manager",
                          "Software Tester",
                        ].map((item, index) => (
                          <SelectItem value={item} key={index}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="interest"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black dark:text-white">
                  Why are you interested in this mentorship program?
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    {...field}
                    className="border text-black dark:text-white dark:border-white rounded focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <RainbowButton
            disabled={loading}
            type="submit"
            className="flex justify-center items-center gap-4  h-[47px] mt-5"
          >
            Submit Application
            {loading ? (
              <Icons.spinner className="animate-spin w-5 h-5" />
            ) : (
              <ArrowRight className="ml-2 w-5 h-5" />
            )}
          </RainbowButton>
        </form>
      </Form>
    </>
  );
};

export default MentorshipForm;
