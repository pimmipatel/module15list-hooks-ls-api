// • Task 1: • Create a form with inputs for name, email, and password. Use state to control the form and display the form data when the user submits it.

import React, { useState } from "react";

const Form = () => {
  //1 state for input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //2 useState for submitted data
  const [submittedData, setSubmittedData] = useState([]);
  //3 handleChange
  const handleChange = (e) => {
    const { name, value } = e.target; //name,email,password
    setFormData({ ...formData, [name]: value });
  };

  //4: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setSubmittedData([...submittedData, formData]); // store submitted data
    setFormData({ name: "", email: "", password: "" }); // reset form
  };
  return (
    <div>
      <h2>User Form</h2>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label> <br />
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id=""
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Submitted Users:</h3>
        <ul>
          {submittedData.map((formData, index) => (
            <li key={index}>
              <strong>Name:</strong> {formData.name} | <strong>Email:</strong>{" "}
              {formData.email} |
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Form;
