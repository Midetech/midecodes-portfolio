import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="relative top-3 h-screen">
        <div className="h-full w-full flex justify-center items-center">
          <p className="text-3xl font-bold text-black dark:text-white">
            Coming soon
          </p>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
