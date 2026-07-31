import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="p-4 border border-black bg-gray-800 rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img
          className="object-fit h-full w-full rounded-xl"
          src={user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-white">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
      </div>
      <div className="flex justify-between w-full gap-4">
        <button className="bg-yellow-700 text-white py-2 px-3 rounded">
          Update
        </button>
        <button className="bg-red-700 text-white py-2 px-3 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
