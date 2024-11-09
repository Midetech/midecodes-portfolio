import Projects from "@/components/Projects";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="px-5 mt-24">
        <Projects />
      </div>
    </Suspense>
  );
};

export default Page;
