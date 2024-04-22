import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div>About Page</div>;
    </Suspense>
  );
};

export default Page;
