import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let formSubmit = (data) => {
    setUsers((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev)
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-3 p-4 rounded border border-black bg-gray-500"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*/,
              message: "Blank spaces are not allowed",
            },
          })}
          className="p-2 rounded outline-0 border-2 border-black"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is requried",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          className="p-2 rounded outline-0 border-2 border-black"
          type="Email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 Digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 Digits are required",
            },
          })}
          className="p-2 rounded outline-0 border-2 border-black"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image")}
          className="p-2 rounded outline-0 border-2 border-black"
          type="url"
          placeholder="Image"
        />
        <button className="text-white bg-blue-600 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
