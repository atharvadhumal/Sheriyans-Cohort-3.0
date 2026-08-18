const express = require("express");

const app = express();

app.use(express.json());

let port = 3000;

let users = [];

//create
app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("user saved successfully");
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let usersData = users.filter((val) => val.id !== id);
  users = usersData;

  res.send(usersData);
  console.log("deleted successfully");
});

app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let {name} = req.body;

  let updatedUsers = users.map((val) =>
    val.id === id ? { ...val, body } : val,
  );

  res.send(updatedUsers);
});

//get - Read
app.get("/", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
