export {}; // makes this file a module (avoids global conflicts)


//  Task 1 — Arrays Basics
// Create number array, push values, and print using forEach

let numbers: number[] = [1, 2, 3];

// push adds new elements to array
numbers.push(10);
numbers.push(20);
numbers.push(30);

// forEach loop to print each value
numbers.forEach((value) => {
  console.log("Number:", value);
});


// Task 2 — Array of Objects
// Create Student type and print student names

type Student = {
  id: number;
  name: string;
};

let students: Student[] = [
  { id: 1, name: "Rohit" },
  { id: 2, name: "Virat" },
];

// Loop through array and print only names
students.forEach((student) => {
  console.log("Student Name:", student.name);
});


//  Task 3 — Readonly Arrays
// Prevent modification of array values

const colors: readonly string[] = ["red", "black", "orange"];

// colors.push("green"); ❌ Error (readonly array)
// colors[0] = "blue"; ❌ Error (cannot modify)

console.log("Colors:", colors);


//  Task 4 — Function with Readonly Array
// Function cannot modify readonly array

// Function parameter is readonly array
function printFruits(fruits: readonly string[]) {
  // fruits.push("Mango"); ❌ Not allowed (readonly)
  fruits.forEach((fruit) => {
    console.log("Fruit:", fruit);
  });
}

printFruits(["Apple", "Banana", "Orange"]);


// Task 5 — Tuples Basics
// Fixed order and fixed types

let user: [number, string]; // [id, name]

user = [1, "Rohit"]; // correct order

console.log("User ID:", user[0]);
console.log("User Name:", user[1]);


//  Task 6 — Named Tuple (Better Readability)

let person: [name: string, age: number] = ["Rohit", 22];

console.log("Person Name:", person[0]);
console.log("Person Age:", person[1]);


//  Task 7 — Tuple as Function Return
// Function returning multiple values using tuple

// Function returns a tuple [string, number]
function getProduct(): [string, number] {
  // returning product name and price
  return ["Pen", 10];
}

// Destructuring returned tuple
const [productName, price] = getProduct();

console.log("Product Name:", productName);
console.log("Product Price:", price);


//  Task 8 — Enums Basics
// Enums provide fixed constant values

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Print one enum value
console.log("Direction:", Direction.Up);


//  Task 9 — String Enum (Real Project Use)

enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

// Storing enum value in variable
const role: UserRole = UserRole.Admin;
console.log("User Role:", role);


// Task 10 — Enum in Function (Important)
// Function accepts only valid enum values

// Function parameter type is UserRole
function assignRole(role: UserRole) {
  // role must be one of: Admin | Editor | Viewer
  console.log("Assigned Role:", role);
}

// Valid calls (allowed)
assignRole(UserRole.Admin);
assignRole(UserRole.Viewer);

// assignRole("ADMIN"); ❌ Error: only enum values allowed


