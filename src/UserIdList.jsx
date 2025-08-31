// • Task 2:
// • Create a list of users where each user has a unique id. Render the user list
// usingReact and assign a unique keyto each user.

import React from "react";

const UserIdList = () => {
  // Step 1: Create a list of users (with unique ids)
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 35 },
  ];

  return (
    <div>
      <h1>User List</h1>

      <ul style={{ listStyleType: "none" }}>
        {/* Step 2: Render using map() */}
        {users.map((user) => (
          // Step 3: Assign unique key using user.id
          <li key={user.id}>
            {user.id} <strong>{user.name}</strong> - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserIdList;
