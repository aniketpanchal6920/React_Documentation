import React, { Suspense } from "react";

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

const LazyMain = () => {
  return (
    <div>
      
        LazyMain
      {/* Suspense is used to display a loading message while HeavyComponent is being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default LazyMain;
