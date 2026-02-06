// src/day02-inference-vs-annotation.ts

// -------- Type Inference --------
let username = "Rohit"; // inferred as string
// username = 25; // ❌ error

let isActive = true; // inferred as boolean
let score = 100; // inferred as number

// -------- Type Annotation --------
let age: number;
age = 21;
// age = "twenty"; // ❌ error

let city: string = "Pune";

// -------- Functions --------
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello ${name}`;
}

// -------- Objects --------
// Inference
const user1 = {
  name: "Rohit",
  age: 21,
};

// Annotation
const user2: { name: string; age: number } = {
  name: "Amit",
  age: 22,
};

// -------- Arrays --------
// Inference
let numbers = [1, 2, 3];
// numbers.push("4"); // ❌ error

// Annotation
let names: string[] = [];
names.push("Rohit");
// names.push(10); // ❌ error

// -------- Usage --------
console.log(username);
console.log(add(10, 20));
console.log(greet("Rohit"));
console.log(user1, user2, numbers, names);
