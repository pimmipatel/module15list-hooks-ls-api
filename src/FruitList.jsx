// • Task 1:
// • Create a React component that renders a list of items (e.g., a list of fruit names).
// Usethe map()function to render each item in the list.

import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
