import React from "react";
import { Target, RefreshCw, Users, Zap } from "lucide-react";

const ExpectationCard = ({
  icon: Icon,
  title,
  description,
}: {
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div className="relative group w-full">
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
        rounded-xl opacity-30 group-hover:opacity-50 transition duration-300 
        animate-pulse group-hover:animate-none"
      ></div>
      <div
        className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg 
        transform transition-transform duration-300 
        hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="mb-6 flex items-center">
          <div
            className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full 
            transform transition-transform duration-500 
            group-hover:rotate-[360deg]"
          >
            <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h3
          className="text-2xl font-bold mb-4 
          dark:text-white text-gray-800"
        >
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default function WhatWeExpect() {
  const expectations = [
    {
      icon: Target,
      title: "Commitment",
      description:
        "Dedication to continuous learning and active participation in mentorship programs.",
    },
    {
      icon: RefreshCw,
      title: "Openness",
      description:
        "Willingness to receive feedback, share experiences, and grow professionally.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Engage respectfully with mentors and peers, contributing to a supportive ecosystem.",
    },
    {
      icon: Zap,
      title: "Passion",
      description:
        "Genuine enthusiasm for technology and professional development.",
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-16 
      bg-transparent dark:bg-black"
    >
      <h2
        className="text-4xl font-bold text-center mb-16 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-600 to-purple-600 
        dark:from-blue-400 dark:to-purple-400"
      >
        What We Expect From You
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        {expectations.map((expectation, index) => (
          <ExpectationCard
            key={index}
            icon={expectation.icon}
            title={expectation.title}
            description={expectation.description}
          />
        ))}
      </div>
    </section>
  );
}
