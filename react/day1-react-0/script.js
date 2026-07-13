let h1 = document.createElement("h1");
h1.textContent = "hello";
document.body.append(h1);

let rh1 = React.createElement(
  "h1",
  { class: "box" },
  React.createElement("span", {}, "i am under h1"),
);

console.log(h1);
console.log("virtual dom", rh1);
