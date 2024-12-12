import React, { useEffect, useRef, useState } from "react";
import { Code, Bug, Briefcase, Users } from "lucide-react";
import CountUp from "react-countup";
import { BorderBeam } from "./magicui/border-beam";

const MetricCard = ({
  icon: Icon,
  count,
  title,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  count: number;
  title: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group overflow-hidden 
      bg-white dark:bg-gray-800 
      p-6 rounded-xl text-center 
      shadow-lg hover:shadow-2xl 
      transition-all duration-300 
      transform hover:-translate-y-2
      border border-gray-100 dark:border-gray-700"
    >
      {/* Gradient Background Overlay */}
      <div
        className="absolute inset-0 
        bg-gradient-to-br 
        from-blue-50 to-purple-50 
        dark:from-gray-900 dark:to-gray-800 
        opacity-0 group-hover:opacity-20 
        transition-opacity duration-300 
        pointer-events-none"
      ></div>

      {/* Floating Icon */}
      <div
        className="absolute top-4 right-4 
        opacity-10 group-hover:opacity-20 
        transition-opacity duration-300"
      >
        <Icon className="w-16 h-16 text-blue-300 dark:text-gray-600" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div
            className="bg-blue-100 dark:bg-blue-900 
            p-4 rounded-full 
            transform transition-transform 
            group-hover:rotate-[360deg] 
            duration-500"
          >
            <Icon
              className="w-12 h-12 
              text-blue-600 dark:text-blue-400"
            />
          </div>
        </div>

        <h3
          className="text-3xl font-bold mb-2 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-600 to-purple-600 
          dark:from-blue-400 dark:to-purple-400"
        >
          {isVisible ? (
            <CountUp
              end={count}
              duration={2}
              separator=","
              suffix="+"
              // suffix={count > 9 ? "+" : ""}
            />
          ) : (
            "0+"
          )}
        </h3>

        <p
          className="text-gray-600 dark:text-gray-400 
          font-medium text-base"
        >
          {title}
        </p>
      </div>
      <BorderBeam size={350} duration={15} delay={9} />
    </div>
  );
};

export default function CommunityMetrics({
  metrics,
}: {
  metrics: {
    products: number;
    testers: number;
    frontends: number;
    backends: number;
  };
}) {
  const communityMetrics = [
    {
      icon: Code,
      count: metrics.frontends,
      title: "Frontend Developers",
    },
    {
      icon: Code,
      count: metrics.backends,
      title: "Backend Developers",
    },
    {
      icon: Bug,
      count: metrics.testers,
      title: "Software Testers",
    },
    {
      icon: Briefcase,
      count: metrics.products,
      title: "Product Managers",
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-16 
      bg-transparent 
      dark:bg-black"
    >
      <h2
        className="text-4xl font-bold text-center mb-16 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-600 to-purple-600 
        dark:from-blue-400 dark:to-purple-400"
      >
        Our Friends
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {communityMetrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            count={metric.count}
            title={metric.title}
          />
        ))}
      </div>
    </section>
  );
}
