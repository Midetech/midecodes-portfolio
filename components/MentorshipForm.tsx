"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
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

const MentorshipForm = ({
  form,
  onSubmit,
  loading,
}: {
  loading: boolean;
  form: any; // Replace 'any' with the specific type if known
  onSubmit: (data: any) => void; // Replace 'any' with the specific type if known
}) => {
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
                  Tell me what you are interested in
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
