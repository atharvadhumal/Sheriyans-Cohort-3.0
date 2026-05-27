//var arr = ["atharva", 22, "thane"]

    //objects: used to store with key and value pair.

    // var obj = {
    //     name: "atharva",
    //     age: 22,
    //     city: "thane"
    // }

    // //can be accessed by dot notation or by bracket notation

    // console.log(obj.name);
    // console.log(obj["age"]);

// var user = {
//     name: "bolly",
//     age: 22,
//     city: "thane",
//     isSingle: true,
// }

// user.city = "mumbai" //updating the value of city
// user.country = "india" //adding new key value pair in object

// delete user.isSingle //deleting the key value pair from object

// console.log(user);


var user = {
    name: "bolly",
    age: 22,
    city: "thane",
    isSingle: true,
}

console.log(Object.keys(user));
//when i want to see keys of object
console.log(Object.values(user));
//when i want to see values of object
console.log(Object.entries(user));
//when i want to see key and value pair in array form