"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Icons } from "@/components/Icons";
import Script from "next/script";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(11, {
    message: "Phone must be at least 11 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      setIsSubmitting(true);
      const response = await fetch("https://mide.codes/api/self", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          subject: values.subject,
        }),
      });
      const data = await response.json();
      if (data.success) {
        const sendEmailToClient = await fetch("https://mide.codes/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
            subject: values.subject,
          }),
        });
        const clientData = await sendEmailToClient.json();
        if (clientData.success) {
          setIsSubmitting(false);
          form.reset();
        }
      } else {
        alert("Failed to send message");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="md:w-[667px] dark:bg-white bg-black px-8 py-12">
      <div className="w-[147px] h-[52px] dark:bg-[#EAEAEA] bg-[#1D1D1D] flex items-center justify-center rounded-[4px] mb-24">
        <p className="dark:text-black text-white md:text-2xl">Contact</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-10 flex-wrap">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="md:w-[45%] w-full">
                  <FormLabel className="text-white dark:text-black">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="!border-b bg-transparent" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:w-[45%] w-full">
                  <FormLabel className="text-white dark:text-black">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="!border-b bg-transparent"
                      type="email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="md:w-[45%] w-full">
                  <FormLabel className="text-white dark:text-black">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="!border-b bg-transparent"
                      type="tel"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="md:w-[45%] w-full">
                  <FormLabel className="text-white dark:text-black">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="!border-b bg-transparent" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white dark:text-black">
                  Tell me what you are interested in
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="!border-b bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          ></Script>
          <div
            className="cf-turnstile"
            data-callback="javascriptCallback"
            data-sitekey={process.env.CLOUDFLARE_KEY}
          ></div>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-white dark:bg-black dark:text-white text-black gap-x-4 h-[62px] rounded-[34px] font-thin disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
            {isSubmitting ? (
              <Icons.spinner className="animate-spin w-5 h-5" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M17 7L1 7M17 7L11 13M17 7L11 1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
