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

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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

          <Button
            type="submit"
            className="w-full bg-white dark:bg-black dark:text-white text-black gap-x-4 h-[62px] rounded-[34px] font-thin"
          >
            Send Message
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
