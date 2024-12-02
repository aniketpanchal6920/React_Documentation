import React, { useState } from "react";

// Regular Component without memoization
const ChildComponent = ({ count }: { count: number }) => {
  console.log("Child re-rendered");
  return <div>Child Count: {count}</div>;
};

// Memoized version of the ChildComponent
const MemoizedChild = React.memo(ChildComponent);

const ParentComponent = () => {
  
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>

      <p>Parent state: {otherState ? "True" : "False"}</p>

      {/* Only re-renders MemoizedChild when the count prop changes */}
      <MemoizedChild count={count} />
    </div>
  );
};

export default ParentComponent;
