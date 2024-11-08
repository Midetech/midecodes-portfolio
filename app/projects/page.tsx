import Projects from "@/components/Projects";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="px-5 py-10 relative md:top-28 top-24">
        <Projects />
      </div>
    </Suspense>
  );
};

export default Page;
