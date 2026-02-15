export {}; // make this file a module (avoid global conflicts)

/*
=====================================================
📘 Function Rules in TypeScript — Full Practice File
Includes:
1. Parameter Destructuring
2. Tuple Return Destructuring
3. Default Values in Destructuring
4. Optional Parameters
5. Default Parameters
6. Rest Parameters
7. Explicit Return Type Annotation
8. Nested Object Destructuring
+ Combined real-world examples using all rules
=====================================================
*/


// =====================================================
// 1️⃣ Parameter Destructuring
// Extract object properties directly in function params
// =====================================================

type User = {
  name: string;
  age: number;
};

function printUser({ name, age }: User) {
  // Rule 1: Object parameter destructuring
  console.log("User Name:", name);
  console.log("User Age:", age);
}

printUser({ name: "Rohit", age: 22 });


// =====================================================
// 2️⃣ Tuple Return Destructuring
// Function returns multiple values using tuple
// =====================================================

function getUser(): [string, number] {
  // Rule 7: Explicit return type annotation
  return ["Rohit", 22]; // Rule 2: returning tuple [name, age]
}

// Rule 2: Tuple destructuring
const [tupleName, tupleAge] = getUser();

console.log("Tuple Name:", tupleName);
console.log("Tuple Age:", tupleAge);


// =====================================================
// 3️⃣ Default Values in Destructuring
// Provide fallback if property missing
// =====================================================

function greetUser({ name = "Guest" }: { name?: string }) {
  // Rule 3: Default value inside destructuring
  console.log("Hello", name);
}

greetUser({ name: "Rohit" });
greetUser({}); // uses default "Guest"


// =====================================================
// 4️⃣ Optional Parameters ( ? )
// Parameter may or may not be passed
// =====================================================

function sumOptional(a: number, b?: number) {
  // Rule 4: Optional parameter (b may be undefined)
  return a + (b ?? 0);
}

console.log("Optional Param:", sumOptional(10));
console.log("Optional Param:", sumOptional(10, 5));


// =====================================================
// 5️⃣ Default Parameters ( = )
// Provides automatic fallback value
// =====================================================

function sumDefault(a: number, b: number = 0) {
  // Rule 5: Default parameter
  return a + b;
}

console.log("Default Param:", sumDefault(10));
console.log("Default Param:", sumDefault(10, 5));


// =====================================================
// 6️⃣ Rest Parameters ( ... )
// Accept multiple arguments as an array
// =====================================================

function sumAll(...nums: number[]) {
  // Rule 6: Rest parameters (nums is an array)
  return nums.reduce((total, num) => total + num, 0);
}

console.log("Rest Params:", sumAll(1, 2, 3, 4));


// =====================================================
// 7️⃣ Function Return Type Annotation
// Always specify return type for clarity
// =====================================================

function multiply(a: number, b: number): number {
  // Rule 7: Explicit return type
  return a * b;
}

console.log("Multiply:", multiply(5, 4));


// =====================================================
// 8️⃣ Nested Object Destructuring
// Destructure deep nested properties
// =====================================================

type Profile = {
  name: string;
  address: {
    city: string;
  };
};

function printCity({ address: { city } }: Profile) {
  // Rule 8: Nested destructuring
  console.log("City:", city);
}

printCity({
  name: "Rohit",
  address: { city: "Pune" },
});


// =====================================================
// 🔥 Combined Real-World Example (Using Multiple Rules)
// =====================================================

function createUser(
  { name, age }: User,     // Rule 1: Parameter destructuring
  role: string = "user",   // Rule 5: Default parameter
  ...tags: string[]        // Rule 6: Rest parameters
): [string, number, string] { // Rule 2 + 7: Tuple return + return type
  // returning fixed structure tuple
  return [name, age, role];
}

// Call function
const result = createUser(
  { name: "Rohit", age: 22 }, // object argument
  "admin",                    // override default role
  "react", "typescript"       // rest arguments
);

// Tuple destructuring (Rule 2)
const [userName, userAge, userRole] = result;

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Role:", userRole);


// =====================================================
// 🔥 Advanced Combined Example
// =====================================================

function registerUser(
  { name = "Guest" }: { name?: string }, // Rule 3 + 1: destructuring + default
  age?: number,                          // Rule 4: optional parameter
  ...skills: string[]                    // Rule 6: rest parameters
): [string, number | undefined, string[]] { // Rule 7: return type
  return [name, age, skills]; // Rule 2: tuple return
}

const [rName, rAge, rSkills] = registerUser(
  {},           // name missing → default "Guest"
  undefined,    // optional param
  "JS", "React" // rest params
);

console.log("Registered Name:", rName);
console.log("Registered Age:", rAge);
console.log("Skills:", rSkills);


/*
=====================================================
Rule Mapping Summary:
1. Destructure object params → { name, age }: User
2. Tuple return & destructuring → [a, b] = function()
3. Default values in destructuring → { name = "Guest" }
4. Optional params → age?: number
5. Default params → role: string = "user"
6. Rest params → ...skills: string[]
7. Explicit return type → ): [string, number, string]
8. Nested destructuring → { address: { city } }
=====================================================
*/
