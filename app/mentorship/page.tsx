"use client";
import WhatWeExpect from "@/components/ExpectationCard";
import Footer from "@/components/Footer";
import MentorshipForm from "@/components/MentorshipForm";
import CommunityMetrics from "@/components/MetricCard";
import { Briefcase, Bug, Code } from "lucide-react";
import { useState } from "react";

export default function TechMentorshipLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    interest: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log(formData);
    alert("Thank you for your interest!");
  };

  return (
    <>
      <div
        className=" mt-20
     dark:bg-gray-900 dark:text-white bg-white text-black  min-h-screen transition-colors duration-300"
      >
        {/* Dark Mode Toggle */}

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Tech Mentorship Community
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 dark:text-gray-300">
            Connect with experienced mentors across tech domains. Learn, grow,
            and accelerate your career with personalized guidance.
          </p>
          <a
            href="#join"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Join Our Community
          </a>
        </section>

        {/* Community Metrics */}
        <CommunityMetrics />

        {/* What We Expect */}
        <WhatWeExpect />

        <section id="join" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 dark:text-white">
            Join Our Mentorship Community
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Graphic Column */}
            <div className="hidden md:block relative">
              <img
                src="/images/mentor-banner.png"
                alt="Midecodes Mentorsh"
                className="rounded-sm"
              />
            </div>

            {/* Form Column */}
            <MentorshipForm
              {...{ handleInputChange, handleSubmit, formData }}
            />
          </div>
        </section>
        <div className="mt-36">
          <Footer />
        </div>
      </div>
    </>
  );
}
