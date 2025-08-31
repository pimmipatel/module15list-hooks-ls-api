// Create a functional component with a counter using the useState()hook. Include buttons to increment and decrement the counter.

import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  return (
    <div>
      <h2>Counter example</h2>
      <h1>{count}</h1>

      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default UseState;
