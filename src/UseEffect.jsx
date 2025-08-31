// Use the useEffect()hook to fetch and display data from an API when the component mounts.

import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []); // Run only once on mount

  return (
    <div>
      <h2>User List (Fetched from API)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;
