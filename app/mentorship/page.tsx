"use client";
import Button from "@/components/Button";
import WhatWeExpect from "@/components/ExpectationCard";
import Footer from "@/components/Footer";
import MentorshipForm from "@/components/MentorshipForm";
import CommunityMetrics from "@/components/MetricCard";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
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
export default function TechMentorshipLanding() {
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

  const [metrics, setMetrics] = useState({
    frontends: 10,
    backends: 5,
    testers: 4,
    products: 8,
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
  const getVisitors = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/mentor", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setMetrics(data.data);
      console.log(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // React.useEffect(() => {
  //   getVisitors();
  // }, [refetch]);

  return (
    <>
      <div
        className=" mt-20
     dark:bg-black dark:text-white bg-[#EDEFF7]/50 text-black  min-h-screen transition-colors duration-300"
      >
        {/* Dark Mode Toggle */}

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Let's Learn Together!
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 dark:text-gray-300">
            Connect with experienced mentors across tech domains. Learn, grow,
            and accelerate your career with personalized guidance.
          </p>
          <a href="#join" className="inline-block transition">
            <Button className="font-sans  flex justify-center items-center gap-x-3 lg:gap-6 w-[180px] h-[41px] !bg-black !text-white dark:border-white dark:text-black">
              Join Our Community
            </Button>
          </a>
        </section>

        {/* Community Metrics */}
        <CommunityMetrics {...{ metrics }} />

        {/* What We Expect */}
        <WhatWeExpect />

        <section id="join" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 dark:text-white">
            Join The Community
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Graphic Column */}
            <div className="relative w-full h-full rounded-sm">
              <Image
                src="/images/mentor-banner.png"
                alt="Midecodes Mentorsh"
                className="rounded-lg"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Form Column */}
            <MentorshipForm {...{ form, onSubmit, loading }} />
          </div>
        </section>
        <div className="mt-36">
          <Footer />
        </div>
      </div>
    </>
  );
}
