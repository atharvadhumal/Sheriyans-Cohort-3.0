import React from "react";
import { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([])

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData])
  }

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <input
          name="Name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          name="Email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          name="Password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-600 text-white">Login</button>
      </form>
      <p>
        Already Have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login Here
        </span>
      </p>
    </div>
  );
};

export default Register;
