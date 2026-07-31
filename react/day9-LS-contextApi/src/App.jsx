import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  let obj = {
    name: "Atharva",
    age: "09",
    game: "valo"
  }

  localStorage.setItem("user", JSON.stringify(obj))

  let lsd = localStorage.getItem("user")
  let result = JSON.parse(lsd)
  console.log(result);
  

  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex">
          {users.map((elem) => {
            return <Usercard user={elem} />;
          })}
        </div>
      ) : (
        <div className="flex item-center justify-center h-[70%]">
          <Form setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
